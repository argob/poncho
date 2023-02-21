/**
 * PONCHO TABLE DEPENDANT
 *
 * @summary PonchoTable con filtros dependientes
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires 
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 * @see https://datatables.net
 *
 *
 * MIT License
 *
 * Copyright (c) 2022 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rightsto use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const ponchoTableDependant2 = opt => {
  // return ponchoTable(opt);

  var gapi_data;
  var filtersList = [];
  var filtro = {};
  var asFilter = {};
  let markdownOptions = {
      "tables": true,
      "simpleLineBreaks": true,
      "extensions": [
          'details', 
          'images', 
          'alerts', 
          'numbers', 
          'ejes', 
          'button', 
          'target',
          'bootstrap-tables', 
          'video'
      ]
  };

  // Loader
  document.querySelector("#ponchoTable").classList.add("state-loading");
  
  if (jQuery.fn.DataTable.isDataTable("#ponchoTable")) {
      jQuery("#ponchoTable").DataTable().destroy();
  }

  /**
   * Ordena alfanuméricamente
   * @example
   * // ["Arroa", "zorro"]
   * ["zorro", "Arroz"].sort(sortAlphaNumeric)
   * @return {object}
   */
  const sortAlphaNumeric = (a, b) => {
      return a.toString().localeCompare(b.toString(), "es", {numeric: true});
  };

  /**
   * Resultados únicos
   * 
   * @param {object} list Array del que se quiere obtener 
   * resultados únicos.
   * @returns {object}
   */
  const distinct = list => [... new Set(list)];
  
  /**
   * Select option
   * 
   * @summary Crea un tag _option_ para un _select_. 
   * @param {integer} parent Índice según el listado de filtros.
   * @param {string} label Valor para el label o texto visible.
   * @param {string} value Valor para el attributo _value_.
   * @param {boolean} selected Si el item debe mostrarse seleccionado.
   * @return {object}
   */
  const _optionSelect = (parent=0, label, value, selected=false) => {
        var select_option = document.createElement("option");
        select_option.value = value.toString().trim();
        select_option.dataset.column = parent;
        select_option.textContent = label.toString().trim();
        if(selected){
            select_option.setAttribute("selected", "selected");
        }
        return select_option;
  };

  /**
   * Prepara el término para ser buscado por REGEX
   *
   * @summary Escapa caracteres especiales utilizados en la sintáxis
   * de expresiones regulares.
   * @see replaceSpecialChars() en poncho.min.js
   * @param {string} term Término a buscar.
   * @example
   * // return Simbrón \(3\.180\)
   * _searchTerm("Simbrón (3.180)")
   * @return {string}
   */
  const _searchTerm = term => {
      return term.toString().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  /**
   * Evita un valor negativo
   */
  const _parentElement = value => (value <= 0 ? 0 : value);

  /**
   * Retorna los valores de los filtros
   */
  const _filterValues = () => {
      return [...document.querySelectorAll("[data-filter]")].map(e => e.value);
  };

  /**
   * Showdown habilitado.
   * 
   * Verifica si la librería _showdown_ está disponible.
   * @returns {boolean}
   */
  const _isMarkdownEnable = () => {
      if(typeof showdown !== "undefined" && 
          showdown.hasOwnProperty("Converter")){
              return true;
      }
      return false;
  } 

  /**
   * Botón poncho
   *
   * @summary Imprime un botón bootstrap.
   * @param {string} label Label para el botón.
   * @param {string} value Href para el botón
   * @return {undefined}
   */ 
  const button = (label, value) => {
      const btn = document.createElement("a");
      btn.setAttribute("aria-label", label);
      btn.classList.add(
          "btn", "btn-primary", "btn-sm", "margin-btn");
      btn.href = value;
      btn.textContent = label;
      return btn.outerHTML;
  };

  /**
  * Formato de fecha
  *
  * @summary Agrega una etiqueta datetime para mejorar la indexación
  * y el ordenamiento.
  * @return {undefined}
  */ 
  const tdDate = value => {
      const dteSplit = value.split("/");
      dteSplit.reverse();
      const finalDate = dteSplit.join("-");

      const datetime = document.createElement("datetime");
      datetime.setAttribute("datetime", finalDate);
      datetime.textContent = value;
      return datetime.outerHTML;
  };

  /**
   * Imprime los filtros
   *
   * @param {object} gapi_data Objeto con la información separada del
   * documento Google Sheet
   */
  const createFilters = gapi_data => {
      // Contenedor
      const tableFiltroCont = document.querySelector("#ponchoTableFiltro");
      tableFiltroCont.innerHTML = "";

      // Imprime cada uno de los filtros
      for (f in filtro){
          const columna = filtro[f][0].columna ? filtro[f][0].columna : 0;
          const list_filter = filtro[f]
              .map(e => e.value)
              .sort(sortAlphaNumeric);

          const tplCol = document.createElement("div");

          if(opt.hasOwnProperty("filterClassList")){
              const classList = (typeof opt.filterClassList === "string" ? 
                    opt.filterClassList.split(" ") : opt.filterClassList);
              tplCol.classList.add(...classList);     
          } else {
              tplCol.classList.add("col-sm-4");     
          }

          const tplForm = document.createElement("div");
          tplForm.className = "form-group";

          const formLabel = document.createElement("label");
          formLabel.setAttribute("for", f);
          formLabel.textContent = gapi_data.headers[`filtro-${f}`];

          const select = document.createElement("select");
          select.classList.add("form-control");
          select.dataset.filter = 1;
          select.name = f;
          select.id = f;
          select.appendChild(_optionSelect(columna, "Todos", "", true));
          list_filter.forEach(item => {
              select.appendChild(_optionSelect(columna, item, item, false));
          });

          tplForm.appendChild(formLabel);
          tplForm.appendChild(select);
          tplCol.appendChild(tplForm);
          tableFiltroCont.appendChild(tplCol);
      }
  };

  /**
   * Imprime la tabla
   *
   * @param {object} gapi_data Objeto con la información separada del
   * documento Google Sheet
   */
  const createTable = gapi_data => {
      // Table thead > th
      const thead = document.querySelector("#ponchoTable thead");
      thead.innerHTML = "";

      const theadTr = document.createElement("tr"); 
      Object.keys(gapi_data.headers).forEach((header, key) => {
          const th = document.createElement("th");
          th.textContent = gapi_data.headers[header];
          th.setAttribute("scope", "col");
          theadTr.appendChild(th);
      }); 
      thead.appendChild(theadTr);

      // Table caption
      const tableCaption = document.querySelector("#ponchoTable caption");
      tableCaption.innerHTML = "";
      tableCaption.textContent = opt.tituloTabla;

      // Tbody instance
      const tableTbody = document.querySelector("#ponchoTable tbody");
      tableTbody.innerHTML = "";

      // CONTENIDO FILAS
      gapi_data.entries.forEach((entry, key) => {
          // si se desea modificar la entrada desde opciones
          entry = (typeof opt.customEntry === "function" && 
              opt.customEntry !== null ? opt.customEntry(entry) : entry);

          // Inserta el row.
          const tbodyRow = tableTbody.insertRow();
          tbodyRow.id = "id_" + key;

          // Recorro cada uno de los títulos
          Object.keys(gapi_data.headers).forEach(header => {
              filas = entry[header];

              if (header.startsWith("btn-") && filas != "") {
                  filas = button(
                      header.replace("btn-", "").replace("-", " "), filas
                  );
              } else if (header.startsWith("fecha-") && filas != "") {
                  filas = tdDate(filas);
              }

              const cell = tbodyRow.insertCell();
              cell.dataset.title = gapi_data.headers[header];
              if (filas == ""){
                  cell.className = "hidden-xs";
              }

              // Si showdown está incluido lo uso
              if(_isMarkdownEnable()){
                  const sdOptions = (opt.hasOwnProperty("markdownOptions") ? 
                          opt.markdownOptions : markdownOptions);
                  const converter = new showdown.Converter(sdOptions);
                  cell.innerHTML = converter.makeHtml(filas);
              } else {
                  cell.innerHTML = filas;
              }
          });
      });
  };

  /**
   * Matriz filtro
   * 
   * @summary Reune los filtros y por cada uno de ellos guarda los
   * datos —únicos—, de esa entrada.
   * @param {object} gapi_data Objeto con la información separada del
   * documento Google Sheet
   * @example
   * {
   *    nombre_filtro : [
   *        {
   *            columna: 0,
   *            value: "elemento"
   *        },
   *        ...
   *    ]
   * }
   * @return {object}
   */
  const flterMatrix = (gapi_data, filtersList) => {
      let filters = {};
      filtersList.forEach((filter, key) => {
          let entiresByFilter = [];
          if(asFilter.hasOwnProperty(filtersList[key])){
              entiresByFilter = asFilter[filtersList[key]];
          } else {
              entiresByFilter = gapi_data.entries.map(entry => entry[filter]);
          }

          const uniqueEntries = distinct(entiresByFilter);
          uniqueEntries.sort(sortAlphaNumeric);
          filter = filter.replace("filtro-", "");
          filters[filter] = [];
          uniqueEntries.forEach(entry => {
              filters[filter].push({"columna": key, "value": entry});
          });
      });
      return filters;
  };

  /* HELPERS FILTRO DEPENDIENTE */
  /**
   * Valida los parents
   * 
   * @param {integer} parent Índice (filtro) seleccionado.
   * @return {boolean}
   */ 
  const _validateSteps = (parent, entry, label, values) => {
      // Verifico que por cada entrada el valor(label), se 
      // encuentre en cada uno de los parents.
      // El bucle termina cuando llega al índice seleccionado.
      const range = [...Array(_parentElement(parent + 1)).keys()];
      const results = range.map(i => {
          // Chequeo si el valor del select es igual al parent o
          // si en su defecto, está vacío.
          if(
            (
              (entry[filtersList[_parentElement(parent-1)]] == 
              values[_parentElement(parent-1)]) && 
              (entry[filtersList[_parentElement(parent)]] == label)
            ) ||  values[_parentElement(parent-1)] == "")
          {
              return true;
          }
          return false;
      });
      return results.every(e => e);
  };

  /**
   * Trae todos los elementos de un filtro en base a su parent.
   *
   * @param {integer} parent Indice de filtro seleccionado.
   * @param {integer} children Indice del hijo del seleccionado.
   * @param {string} label value del filtro seleccionado.
   * @return {object} Listado de elementos únicos para el select.
   */ 
  const _allFromParent = (parent, children, label) => {
      const filterList = gapi_data.entries.flatMap(e => {
          const evaluatedEntry = e[filtersList[_parentElement(children)]];
          if(e[filtersList[_parentElement(parent)]] == label || label == ""){
              if(_isCustomFilter(children, filtro)){
                  const customFilters = _customFilter(children, filtro)
                      .filter(e => {
                          return _toCompareString(evaluatedEntry)
                              .includes(_toCompareString(e));
                  });
                  return customFilters;
              } 
              return evaluatedEntry;
          } 
          return false;

      }).filter(f => f);

      const uniqueList = distinct(filterList);
      uniqueList.sort(sortAlphaNumeric);
      return uniqueList;
  };

  /**
   * Prepara un string para una comparación case sensitive y sin
   * caracteres especiales.
   * @param {string} value Valor a comparar. 
   * @returns {boolean}
   */
  const _toCompareString = value => replaceSpecialChars(value.toLowerCase());

  /**
   * Lista los valores que deben ir en un filtro según su parent.
   * 
   * @param {integer} parent Indice de filtro seleccionado.
   * @param {string} label value del filtro seleccionado.
   * @param {integer} children Indice del hijo del seleccionado.
   */
  const _filterOptionList = (parent, children, label) => {
      children = (children == filtersList.length ? children - 1 : children);
      const values = _filterValues();

      // Recorro todas las entradas del JSON
      const items = gapi_data.entries.flatMap(entry => {
          const range = _validateSteps(parent, entry, label, values);
          if(
              (entry[filtersList[_parentElement(children - 1)]] == label) && 
              (range)){
                const evaluatedEntry = entry[filtersList[_parentElement(children)]];
                if(_isCustomFilter(children, filtro)){
                    const customFilters = _customFilter(children, filtro)
                        .filter(e => {
                            return _toCompareString(evaluatedEntry)
                                  .includes(_toCompareString(e));
                        });
                    return customFilters;
                } else {
                    return evaluatedEntry;
                }

          }
          return;
      }).filter(f => f);

      const uniqueList = distinct(items);
      uniqueList.sort(sortAlphaNumeric);
      return uniqueList;
  };

  /**
   * Tiene filtros personalizados
   * @param {integer} key Indice de filtro
   * @returns {boolean}
   */
  const _isCustomFilter = key => {
      const filtersKeys = Object.keys(filtro);
      if(asFilter.hasOwnProperty(`filtro-${filtersKeys[key]}`)){
          return true   
      }
      return false;
  };

  /**
   * Listado de filtros personalizado
   * @param {integer} key Indice de filtro
   * @returns {object}
   */
  const _customFilter = key => {
      const filtersKeys = Object.keys(filtro);
      if(asFilter.hasOwnProperty(`filtro-${filtersKeys[key]}`)){
          return asFilter[`filtro-${filtersKeys[key]}`];   
      }
      return [];
  };

  /**
   * Filtra select hijos en base a un item del padre.
   * 
   * @param {integer} filterIndex Índice de filtro o número de filtro.
   * @param {string} label Label del indice seleccionado
   * @return {void}
   */
  const _dependantFilters = (filterIndex, label) => {
      const filtros = Object.keys(filtro);
      const filterValues = _filterValues();
      // Redibujo los _option_ por cada `select` (filtro).
      // Hago un `for()` iniciando en el hijo de filterIndex.
      for(let i = filterIndex + 1; i <= filtros.length; i++){
          if(filtros.length == i){ 
              break; 
          }
          let itemList = _filterOptionList(filterIndex, i, label);
          if(itemList.length == 0){
              itemList = _allFromParent(filterIndex, i, label);
          }
          const select = document.querySelector(`#${filtros[i]}`);
          select.innerHTML = "";

          select.appendChild(_optionSelect(i, "Todos", "", true));
          itemList.forEach(e => {
              // Mantengo el filtro del hijo si existe en el 
              // listado filtrado.
              let checked = (filterValues[i] == e ? true : false);
              select.appendChild(_optionSelect(i, e, e, checked));
          });
      }
  };

  /**
   * Si la URL tiene un valor por _hash_ lo obtiene considerandolo su id.
   * @returns {void}
   */
  const hasHash = () => {
      let hash = window.location.hash.replace("#", "");
      return hash || false;
  };

  /**
   * Inicializa DataTable() y modifica elementos para adaptarlos a 
   * GoogleSheets y requerimientos de ArGob.
   */
  const initDataTable = () => {
      let searchType = jQuery.fn.DataTable.ext.type.search;
      searchType.string = function(data) {
          return (!data ? "": 
              (typeof data === "string" ? replaceSpecialChars(data) : data));
      };
      searchType.html = function(data) {
          return (!data ? "" : 
              (typeof data === "string" ? 
              replaceSpecialChars(data.replace(/<.*?>/g, "")) : data));
      };

      /**
       * Instacia DataTable()
       */ 
      let tabla = jQuery("#ponchoTable").DataTable({
          "lengthChange": false,
          "autoWidth": false,
          "pageLength": opt.cantidadItems,
          "columnDefs": [
              { "type": "html-num", "targets": opt.tipoNumero },
              { "targets": opt.ocultarColumnas, "visible": false }
          ],
          "ordering": opt.orden,
          "order": [
              [opt.ordenColumna - 1, opt.ordenTipo]
          ],
          "dom": "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
              "<'row'<'col-sm-12'i>>" +
              "<'row'<'col-sm-12'tr>>" +
              "<'row'<'col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8'p>>",
          "language": {
              "sProcessing": "Procesando...",
              "sLengthMenu": "Mostrar _MENU_ registros",
              "sZeroRecords": "No se encontraron resultados",
              "sEmptyTable": "Ningún dato disponible en esta tabla",
              "sInfo": "_TOTAL_ resultados",
              "sInfoEmpty": "No hay resultados",
              //"sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
              "sInfoFiltered": "",
              "sInfoPostFix": "",
              "sSearch": "Buscar:",
              "sUrl": "",
              "sInfoThousands": ".",
              "sLoadingRecords": "Cargando...",

              "oPaginate": {
                  "sFirst": "<<",
                  "sLast": ">>",
                  "sNext": ">",
                  "sPrevious": "<"
              },
              "oAria": {
                  "sSortAscending": 
                      ": Activar para ordenar la columna de manera ascendente",
                  "sSortDescending": 
                      ": Activar para ordenar la columna de manera descendente",
                  "paginate": {
                      "first": 'Ir a la primera página',
                      "previous": 'Ir a la página anterior',
                      "next": 'Ir a la página siguiente',
                      "last": 'Ir a la última página'
                  }
              }
          }
      });

      /**
       * Buscador por palabra
       * @summary Ejecuta la búsqueda en cada keyup.
       */
      jQuery("#ponchoTableSearch").keyup(function() {
          tabla
              .search(jQuery.fn.DataTable.ext.type.search.string(this.value))
              .draw();
      });

      // REMUEVE LOS FILTROS
      jQuery("#ponchoTable_filter").parent().parent().remove();

      // MUESTRA FILTRO PERSONALIZADO
      const ponchoTableOption = document.querySelectorAll("#ponchoTableFiltro option");
      if (ponchoTableOption.length > 1) {
          document.querySelector("#ponchoTableFiltroCont").style.display = "block";
      }

      /**
       * Filtro en el change de cada select (filtro).
       * 
       * @summary Por por cada interacción con un filtro, obtiene el índice de
       * columna y lo pasa con el valor del select a _dependantFilters(). Ésta
       * funciión redibuja los filtros en de forma dependiente según el valor
       * de la elección.
       * @see replaceSpecialChars() on poncho.min.js
       * @return {undefined}
       */ 
      jQuery("select[data-filter]").change(function() {
          const column = jQuery(this).find("option:selected").data("column");
          const valFilter = jQuery(this).find("option:selected").val();

          _dependantFilters(column, valFilter);

          // Restablece los datos en la tabla
          tabla.columns().search("").columns().search("").draw();

          const filters = Object.keys(filtro);
          const filterValues = _filterValues();
          const filterIndex = filter => {
              return Object
                    .keys(gapi_data.headers)
                    .indexOf(`filtro-${filter}`);
          };

          filterValues.forEach((f, k) => {
              const columnIndex = filterIndex(filters[k]);
              const term = _searchTerm(filterValues[k]);
              const cleanTerm = _searchTerm(
                  replaceSpecialChars(filterValues[k]));
              if(_isCustomFilter(k, filtro)){
                  tabla.columns(columnIndex)
                      .search(_toCompareString(filterValues[k]));
              } else {
                  tabla
                      .columns(columnIndex)
                      .search(
                          (filterValues[k] ? `^(${term}|${cleanTerm})$` : ""), 
                          true, false, true  
                      );
              }
          });
          tabla.draw();
      });

      // Si está habilitada la búsqueda por hash.
      if(opt.hasOwnProperty("hash") && opt.hash){
          const term = hasHash();
          const searchTerm = (term ? decodeURIComponent(term) : "");          
          const element = document.querySelector("#ponchoTableSearch");
          element.value = searchTerm;
          tabla.search(searchTerm).draw();
      }
  } // end initDataTable

  /**
   * Obtiene el sheet e inicializa la tabla y filtros.
   * 
   * @param {string} url URL del dataset JSON
   */
  const getSheetValues = url => {
      jQuery.getJSON(url, function(data){
          const gapi = new GapiSheetData();
          gapi_data = gapi.json_data(data);

          gapi_data.entries = (
              typeof opt.refactorEntries === "function" && 
              opt.refactorEntries !== null ? 
              opt.refactorEntries(gapi_data.entries) : gapi_data.entries
          );
          // Listado de filtros
          filtersList = Object
                .keys(gapi_data.headers)
                .filter(e => e.startsWith("filtro-"));

          asFilter = (opt.asFilter ? opt.asFilter(gapi_data.entries) : {});
          filtro = flterMatrix(gapi_data, filtersList);

          createTable(gapi_data);
          createFilters(gapi_data); 

          document.querySelector("#ponchoTableSearchCont")
              .style.display = "block";
          document.querySelector("#ponchoTable")
              .classList.remove("state-loading");
          initDataTable();
      }); // end async
  };

  /**
   * Obtiene el sheet por número de hoja y nombre del spread.
   * 
   * @param {integer} sheetNumber Número de hoja sin iniciar en 0.
   */
  const getSheetName = sheetNumber => {
      const gapi = new GapiSheetData();
      const uriApi = [
          'https://sheets.googleapis.com/v4/spreadsheets/',
          opt.idSpread, '/?alt=json&key=',
          gapi.gapi_key].join("");

      jQuery.getJSON(uriApi, function function_name(response) {
          var sheetName = response.sheets[sheetNumber - 1].properties.title;
          const uriSheet = gapi.url(sheetName, opt.idSpread);
          getSheetValues(uriSheet);
      });
  };

  // Según el caso en optiones.
  if (opt.jsonUrl) {
      getSheetValues(opt.jsonUrl);
  } else if(opt.hojaNombre && opt.idSpread){
      const url = new GapiSheetData().url(opt.hojaNombre, opt.idSpread);
      getSheetValues(url);
  } else if(opt.hojaNumero && opt.idSpread){
      getSheetName(opt.hojaNumero);
  } else {
      throw "¡Error! No hay datos suficientes para crear la tabla.";
  }

};