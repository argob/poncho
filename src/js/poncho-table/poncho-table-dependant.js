/**
 * PONCHO TABLE
 *
 * @summary PonchoTable con filtros dependientes
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires jQuery
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
const ponchoTableDependant = opt => {
    var gapi_data;
    var filtersList = [];
    var wizard = (opt.hasOwnProperty("wizard") && opt.wizard ? 
            true : false);
    var emptyLabel = (opt.hasOwnProperty("emptyLabel") && opt.emptyLabel ? 
            opt.emptyLabel : "Todos");
    var filtro = {};
    var orderFilter = (opt.hasOwnProperty("orderFilter") && opt.orderFilter ? 
            true : false);
    var asFilter = {};
    var allowedTags = ["*"];
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
     * // ["Arroz", "zorro"]
     * ["zorro", "Arroz"].sort(_sortAlphaNumeric)
     * @return {object}
     */
    const sortAlphaNumeric = (a, b) => {
        return a.toString().localeCompare(b.toString(), "es", {numeric: true});
    };


    /**
     * De acuerdo a las opciones del usuario, ordena el listado o lo deja
     * en la secuencia en la que llega.
     * 
     * @summary Alias de sortAlphaNumeric
     * @param {object} a 
     * @param {object} b 
     * @returns {object}
     */
    const _sortAlphaNumeric = (a, b) => (orderFilter ? 
        sortAlphaNumeric(a, b) : null);


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
    const _searchTerm = (term="") => {
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
    }; 

    /**
     * Verifica si las extensiones showdown están definidas.
     * 
     * @param {object} extensions 
     * @returns {boolean}
     */
    const _isShowdownExtensionEnable = extensions => 
        extensions.every(e => {
            try {
                showdown.extension(e);
                return true;
            } catch (error) {
                return false;
            }
    });

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
        btn.target = "_blank";
        btn.href = value;
        btn.textContent = label;
        btn.setAttribute("rel", "noopener noreferrer");
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
        const dateSplit = value.split("/");
        const finalDateIso = new Date(
            dateSplit[2], dateSplit[1] - 1, dateSplit[0]
        );

        const hiddenSpan = document.createElement("span");
        hiddenSpan.style.display = "none";
        hiddenSpan.textContent = finalDateIso.toISOString().split('T')[0];
        return hiddenSpan.outerHTML + value;
    };


    /**
     * Imprime los filtros
     *
     * @param {object} gapi_data Objeto con la información separada del
     * documento Google Sheet
     */
    const _createFilters = gapi_data => {
        // Contenedor
        const tableFiltroCont = document.querySelector("#ponchoTableFiltro");
        tableFiltroCont.innerHTML = "";

        // Imprime cada uno de los filtros
        Object.keys(filtro).forEach((f, key) => {
            const columna = filtro[f][0].columna ? filtro[f][0].columna : 0;
            const list_filter = filtro[f]
                .map(e => e.value)
                .sort(_sortAlphaNumeric);

            const tplCol = document.createElement("div");

            if(opt.hasOwnProperty("filterClassList")){
                const classList = (typeof opt.filterClassList === "string" ? 
                        opt.filterClassList.split(" ") : opt.filterClassList);
                tplCol.classList.add(...classList);     
            } else {
                const cols = Math.floor(12 / Object.keys(filtro).length);
                tplCol.classList.add("col-sm-12", `col-md-${cols}`); 
            }
            tplCol.dataset.index = key;
            tplCol.dataset.filterName = f;

            // If wizzard
            if(wizard && key > 0){
                tplCol.style.display = "none";   
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
            select.appendChild(_optionSelect(columna, emptyLabel, "", true));
            list_filter.forEach(item => {
                if(!item){
                    return;
                }
                select.appendChild(_optionSelect(columna, item, item, false));
            });

            tplForm.appendChild(formLabel);
            tplForm.appendChild(select);
            tplCol.appendChild(tplForm);
            tableFiltroCont.appendChild(tplCol);
        // }
        });
    };


    /**
     * Imprime la tabla
     *
     * @param {object} gapi_data Objeto con la información separada del
     * documento Google Sheet
     */
    const _createTable = gapi_data => {
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

            if(!Object.values(entry).some(f => String(f).trim())){
                return;
            }

            // si se desea modificar la entrada desde opciones
            entry = (typeof opt.customEntry === "function" && 
                opt.customEntry !== null ? opt.customEntry(entry) : entry);

            // Inserta el row.
            const tbodyRow = tableTbody.insertRow();
            tbodyRow.id = "id_" + key;

            // Verifico sin las extensiones showdown existen
            let showdownOptions;
            if(_isMarkdownEnable()){
                const registeredOptions = (opt.hasOwnProperty("markdownOptions") ? 
                        opt.markdownOptions : markdownOptions);
                showdownOptions = (_isShowdownExtensionEnable(
                        registeredOptions.extensions) ? registeredOptions : {});
            }

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
                // @todo Usar showdown fuera de la función. Usarlo en options.
                let allowed_tags = (opt.hasOwnProperty("allowedTags") ? 
                        opt.allowedTags : allowedTags);
                
                // Anchor como filtro está permitido por defecto.
                allowed_tags = (  header.startsWith("btn-") && filas != "" ? 
                        [...allowed_tags, "a"] : allowed_tags);
                
                const cleannedText = secureHTML(filas, allowed_tags);
                if(_isMarkdownEnable()){
                    const converter = new showdown.Converter(showdownOptions);
                    cell.innerHTML = converter.makeHtml(cleannedText);
                } else {
                    cell.innerHTML = cleannedText;
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
            uniqueEntries.sort(_sortAlphaNumeric);
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
        uniqueList.sort(_sortAlphaNumeric);
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
        uniqueList.sort(_sortAlphaNumeric);
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
            if(filtros.length == i ){ 
                break; 
            }
            let itemList = _filterOptionList(filterIndex, i, label);
            if(itemList.length == 0){
                itemList = _allFromParent(filterIndex, i, label);
            }
            const select = document.querySelector(`#${filtros[i]}`);
            select.innerHTML = "";

            select.appendChild(_optionSelect(i, emptyLabel, "", true));
            itemList.forEach(e => {
                if(!e.trim()){
                    return;
                }
                // Mantengo el filtro del hijo si existe en el 
                // listado filtrado.
                let checked = (filterValues[i] == e ? true : false);
                select.appendChild(_optionSelect(i, e, e, checked));
            });
        }
    };

    /**
     * Asigna selectores al contenedor de los filtros.
     * @returns {undefined}
     */
    const _filtersContainerClassList = () =>{
        if(opt.hasOwnProperty("filterContClassList") && opt.filterContClassList){
            const fc = document.getElementById("ponchoTableFiltroCont");
            fc.removeAttribute("class");
            fc.classList.add(...opt.filterContClassList);
        }
    };


    /**
     * Asigna selectores al contenedor del buscador.
     * @returns {undefined}
     */
    const _searchContainerClassList = () =>{
        if(opt.hasOwnProperty("searchContClassList") && opt.searchContClassList){
            const element = document.getElementById("ponchoTableSearchCont");
            element.removeAttribute("class");
            element.classList.add(...opt.searchContClassList)
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
     * Visualización de la tabla
     * 
     * @param {boolean} visibility Oculta y muestra la tabla.
     * @returns {undefined}
     */
    _hideTable = (visibility=true) => {
        const display = (visibility ? "none" : "block");
        const reverseDisplay = (visibility ? "block" : "none");
        document
            .querySelectorAll(
                `[data-visible-as-table="true"],#ponchoTable_wrapper`)
            .forEach(element => element.style.display = display);

        document
            .querySelectorAll(`[data-visible-as-table="false"]`)
            .forEach(element => element.style.display = reverseDisplay);
    };


    /**
     * Inicializa DataTable() y modifica elementos para adaptarlos a 
     * GoogleSheets y requerimientos de ArGob.
     */
    const initDataTable = () => {
        const searchType = jQuery.fn.DataTable.ext.type.search;
        searchType.string = data => {
            return (!data ?
                "" :
                (typeof data === "string" ?
                    replaceSpecialChars(data) :
                    data));
        };

        searchType.html = data => {
            return (!data ?
                "" :
                (typeof data === "string" ?
                    replaceSpecialChars(data.replace( /<.*?>/g, "")) :
                    data));
        };

        /**
         * Instacia DataTable()
         */ 
        let tabla = jQuery("#ponchoTable").DataTable({
            "initComplete" : (settings, json) => {
                if(wizard){
                    _hideTable();
                }
            },
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
         * Valida si un componente select tiene options con value. 
         * 
         * @summary El objeto de éste método es evitar traer selects que tengan
         * options vacíos. 
         * @param {string} selector Selector del elemento select 
         * @returns {boolean}
         */
        const _selectHasValues = selector => {
            const options = document.querySelectorAll(`${selector} option`);
            const result = Object.values(options).map(m => m.value).some(s => s);
            return result;
        }


        /**
         * Modo wizard para los filtros.
         * 
         * @param {object} filters Listado de filtros.
         * @param {interger} column Indice de columna.
         * @param {string} valFilter Value del select
         * @returns {undefined}
         */
        const _wizardFilters = (filters, column=0, valFilter="") => {
            const isLastFilter = (column === filters.length - 1 ? true : false);
            _hideTable();

            filters.forEach((filter, key) => {
                const selectHasValues = _selectHasValues(`#${filter}`);
                // El select desplegado tiene elementos.
                if(!selectHasValues){
                    _hideTable(false);
                } 
                // El el últmo de los filtros y el value no es vacío.
                else if(isLastFilter && valFilter){
                    _hideTable(false);
                }

                let displayStatus = "none";
                if(selectHasValues && valFilter && key <= column + 1){
                    displayStatus = "block";
                } else if(selectHasValues && !valFilter &&  key <= column + 1) {
                    const nextFilter = document
                        .querySelectorAll(`#${filters[column + 1]}`)
                    nextFilter.forEach(element => element.innerHTML = "");
                    displayStatus = "block";
                }

                const currentFilter = document
                    .querySelectorAll(`[data-filter-name="${filter}"]`)
                currentFilter
                    .forEach(element => element.style.display = displayStatus);
            });
        };


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
            if(wizard){     
                _wizardFilters(filters, column, valFilter);
            }
        });

        
        // Si está habilitada la búsqueda por hash.
        if(opt.hasOwnProperty("hash") && opt.hash){
            const term = hasHash();
            const searchTerm = (term ? decodeURIComponent(term) : "");     
            const element = document.querySelectorAll("#ponchoTableSearch");
            element.forEach(ele => {
                ele.value = searchTerm;
                tabla
                    .search(jQuery.fn.DataTable.ext.type.search.string(searchTerm))
                    .draw();
            });
        }
    } // end initDataTable
    



    /**
     * Imprime DataTable
     * 
     * @param {object} data JSON data
     */
    const render = data => {
        // Defino la variable global
        gapi_data = data;
        // Defino las entradas
        gapi_data.entries = (
            typeof opt.refactorEntries === "function" && 
            opt.refactorEntries !== null ? 
            opt.refactorEntries(gapi_data.entries) : gapi_data.entries
        );
        // Defino los headers que se van a utilizar
        gapi_data.headers = (opt.hasOwnProperty("headers") && opt.headers ?
                opt.headers : gapi_data.headers);
        // Listado de filtros
        filtersList = Object
                .keys(gapi_data.headers)
                .filter(e => e.startsWith("filtro-"));

        asFilter = (opt.asFilter ? opt.asFilter(gapi_data.entries) : {});
        filtro = flterMatrix(gapi_data, filtersList);

        _filtersContainerClassList();
        _searchContainerClassList();
        _createTable(gapi_data);
        _createFilters(gapi_data); 

        document.querySelector("#ponchoTableSearchCont")
            .style.display = "block";
        document.querySelector("#ponchoTable")
            .classList.remove("state-loading");

        initDataTable();
    };


    /**
     * Obtiene el sheet e inicializa la tabla y filtros.
     * 
     * @param {string} url URL del dataset JSON
     */
    const getSheetValues = url => {
        jQuery.getJSON(url, function(data){
            const gapi = new GapiSheetData();
            gapi_data = gapi.json_data(data);
            
            render(gapi_data);
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
    if (opt.jsonData){
        const headers = Object.fromEntries(
            Object.keys(opt.jsonData[0]).map(e => [e,e])
        );
        const data = {entries: opt.jsonData, headers: headers};
        render(data);
    } else if (opt.jsonUrl) {
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
