/**
 * Colores poncho a hexa
 * 
 * @see https://argob.github.io/poncho/identidad/colores/
 * @param {string} color Nombre de color Poncho.
 * @example
 * // returns "#2897d4"
 * getColor("celeste")
 * @returns {string} Color en formato hexadecimal.
 */
const ponchoColor = (color) => {
    let codigoColor;
    switch (color.toLocaleLowerCase()) {
        case "celeste":
        case "info":
            codigoColor = "#2897d4";
            break;
        case "verde":
        case "success":
            codigoColor = "#2e7d33";
            break;
        case "rojo":
        case "danger":
            codigoColor = "#c62828";
            break;
        case "amarillo":
        case "warning":
            codigoColor = "#f9a822";
            break;
        case "azul":
        case "primary":
            codigoColor = "#0072bb";
            break;
        case "negro":
        case "black":
            codigoColor = "#333";
            break;
        case "uva":
            codigoColor = "#6a1b99";
            break;
        case "gris":
        case "muted":
            codigoColor = "#525252";
            break;
        case "grisintermedio":
        case "gris-area":
        case "gray":
            codigoColor = "#f2f2f2";
            break;
        case "celesteargentina":
        case "celeste-argentina":
            codigoColor = "#37bbed";
            break;
        case "fucsia":
            codigoColor = "#ec407a";
            break;
        case "arandano":
            codigoColor = "#c2185b";
            break;
        case "cielo":
            codigoColor = "#039be5";
            break;
        case "verdin":
            codigoColor = "#6ea100";
            break;
        case "lima":
            codigoColor = "#cddc39";
            break;
        case "maiz":
        case "maíz":
            codigoColor = "#ffce00";
            break;
        case "tomate":
            codigoColor = "#ef5350";
            break;
        case "naranjaoscuro":
        case "naranja":
            codigoColor = "#EF6C00";
            break;
        case "verdeazulado":
        case "verde-azulado":
            codigoColor = "#008388";
            break;
        case "escarapela":
            codigoColor = "#2cb9ee";
            break;
        case "lavanda":
            codigoColor = "#9284be";
            break;
        case "mandarina":
            codigoColor = "#f79525";
            break;
        case "palta":
            codigoColor = "#50b7b2";
            break;
        case "cereza":
            codigoColor = "#ed3d8f";
            break;
        case "limon":
            codigoColor = "#d7df23";
            break;
        case "verdejade":
        case "verde-jade":
            codigoColor = "#066";
            break;
        case "verdealoe":
        case "verde-aloe":
            codigoColor = "#4fbb73";
            break;
        case "verdecemento":
        case "verde-cemento":
            codigoColor = "#b4beba";
            break;
        default:
            codigoColor = color;
            // console.warn(
            //     `No se encuentra el color con nombre «${color}». `
            //     + `Revise cual aplica en: `
            //     + `https://argob.github.io/poncho/identidad/colores/`
            // );
    }
    return codigoColor;
};

/**
 * Remueve acentos y caracteres especiales.
 * 
 * @param {string} data Cadena de texto a limpiar. 
 * @example
 * // returns Accion murcielago arbol
 * removeAccents("Acción Murciélago árbol")
 * @returns {string} Cadena de texto sin acentos.
 */
const replaceSpecialChars = (data) => {
  if(!data){
      return "";
  }
  const search = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
  + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
  const replace = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
  + "rrsssssttuuuuuuuuuwxyyzzz";
  const a = search + search.toUpperCase();
  const b = replace + replace.toUpperCase();
  const p = new RegExp(a.split("").join("|"), "g");  
  return data.toString().replace(p, c => b.charAt(a.indexOf(c)))
};

/**
 * Slugify
 * 
 * @param {string} string Cadena de texto a convertir.
 * @example
 * // returns el-murcielago-remolon 
 * slugify("El murciélago remolón")
 * @returns {string} Cadena de texto en formato slug.
 */
const slugify = (string) =>{
  if(!string){
      return string;
  }
  const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
            + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
            + "rrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string.toString().toLowerCase()
      .replace(/\s+/g, "-")
      .replace(p, c => b.charAt(a.indexOf(c)))
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
};

/**
 * Fetch data
 */
async function fetch_json(url, method="GET"){
    const response = await fetch(
      url,{
          method: method, 
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          }
      }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};



/* module.exports REMOVED */

//#####################################################################
//####################### PONCHO TABLE #################################
//#####################################################################
jQuery('#ponchoTable').addClass('state-loading');

function ponchoTable(opt) {
    var listado = [];
    var filteredTitle = [];
    var filteredTitleGsx = [];
    var filtro = [];
    var filtroColumna;
    var titulos = '';
    var th = [];
    var lista = '';
    var centeredContent = '';
    if (jQuery.fn.DataTable.isDataTable('#ponchoTable')) {
        jQuery('#ponchoTable').DataTable().destroy();
    }

    //UNIQUE
    function filtrarUnicos(array) {
        return array.filter(function(el, index, arr) {
            return index === arr.indexOf(el);
        });
    }

    function getSheetName(id) {
        jQuery.getJSON('https://sheets.googleapis.com/v4/spreadsheets/' + opt.idSpread + '/?alt=json&key=AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY', function function_name(response) {
            var sheetName = response.sheets[id - 1].properties.title;
            var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + opt.idSpread + '/values/' + sheetName + '?alt=json&key=AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY';
            getSheetValues(url);
        });
    }

    if (opt.jsonUrl) {
        getSheetValues(opt.jsonUrl);
    } else {
        getSheetName(opt.hojaNumero);
    }

    function getSheetValues(url) {

        jQuery.getJSON(url,

            function(data) {
                listado = data['values'];

                //TITULOS
                jQuery.each(Object.keys(listado[0]), function(index, key) {
                    if (listado[0][key]) {
                        filteredTitle.push(listado[0][key]);
                        filteredTitleGsx.push(key);
                        titulos += '<th>' + listado[1][key] + '</th>';
                        th.push(listado[1][key]);
                    }
                });


                //Caption de la tabla
                jQuery("#ponchoTable caption").html(opt.tituloTabla);

                //Agregar titulos al thead de la tabla
                jQuery('#ponchoTable thead tr').empty();
                jQuery('#ponchoTable thead tr').append(titulos);

                //CONTENIDO FILAS
                jQuery.each(listado, function(row, value) {

                    if (row > 1) {
                        var concatenado = '';
                        var thisRow = '';
                        jQuery.each(filteredTitle, function(index, title) {

                            var tdEmpty = '';
                            var filas = listado[row][index];

                            //Detectar si es botón
                            if (filteredTitle[index].includes("btn-") && filas) {
                                var nameBtn = listado[0][index].replace('btn-', '').replace('-', ' ');
                                filas = '<a aria-label="' + nameBtn + '" class="btn btn-primary btn-sm margin-btn" target="_blank" href="' + filas + '">' + nameBtn + '</a>'
                            }

                            //Detectar si es filtro
                            if (filteredTitle[index].includes("filtro-") && filas) {
                                filtroColumna = index;
                                var nameFiltro = listado[1][index];
                                jQuery("#tituloFiltro").html(nameFiltro);
                                filtro.push(filas);
                            }

                            //Detectar si es fecha
                            if (filteredTitle[index].includes("fecha-") && filas) {
                                var dateSplit = filas.split("/");
                                var finalDate = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]),
                                filas = '<span style="display:none;">' + finalDate.toISOString().split('T')[0] + '</span>' + filas;
                            }

                            if (!filas) {
                                filas =  '';
                                //Ocultar filas vacias en mobile
                                tdEmpty = 'hidden-xs';
                            }

                            concatenado += filas;

                            //Aplicar markdown a todas las filas
                            var converter = new showdown.Converter();
                            filas = converter.makeHtml(filas);

                            thisRow += '<td class="' + tdEmpty + '" data-title="' + th[index] + '">' + filas + '</td>';


                        });
                        if (concatenado != '') {
                            lista += '<tr>';
                            lista += thisRow;
                            lista += '</tr>';
                        }
                    }
                });

                //Agregar filtro
                jQuery.each(filtrarUnicos(filtro), function(index, val) {
                    jQuery("#ponchoTableFiltro").append("<option>" + val + "</option>");
                });


                //Agregar contenido al body de la Tabla
                jQuery('#ponchoTable tbody').empty();
                jQuery('#ponchoTableSearchCont').show();
                jQuery('#ponchoTable tbody').append(lista);
                jQuery('#ponchoTable').removeClass('state-loading');

                initDataTable();
            }
        );
    }

    function initDataTable() {


        function removeAccents(data) {
            return data
                .replace(/έ/g, 'ε')
                .replace(/[ύϋΰ]/g, 'υ')
                .replace(/ό/g, 'ο')
                .replace(/ώ/g, 'ω')
                .replace(/ά/g, 'α')
                .replace(/[ίϊΐ]/g, 'ι')
                .replace(/ή/g, 'η')
                .replace(/\n/g, ' ')
                .replace(/[áÁ]/g, 'a')
                .replace(/[éÉ]/g, 'e')
                .replace(/[íÍ]/g, 'i')
                .replace(/[óÓ]/g, 'o')
                .replace(/[úÚ]/g, 'u')
                .replace(/ê/g, 'e')
                .replace(/î/g, 'i')
                .replace(/ô/g, 'o')
                .replace(/è/g, 'e')
                .replace(/ï/g, 'i')
                .replace(/ü/g, 'u')
                .replace(/ã/g, 'a')
                .replace(/õ/g, 'o')
                .replace(/ç/g, 'c')
                .replace(/ì/g, 'i');
        }



        var searchType = jQuery.fn.DataTable.ext.type.search;
        searchType.string = function(data) {
            return !data ?
                '' :
                typeof data === 'string' ?
                removeAccents(data) :
                data;
        };

        searchType.html = function(data) {
            return !data ?
                '' :
                typeof data === 'string' ?
                removeAccents(data.replace(/<.*?>/g, '')) :
                data;
        };


        if (jQuery.isFunction(jQuery.fn.DataTable.ext.order.intl)) {
          jQuery.fn.DataTable.ext.order.intl('es');
          jQuery.fn.DataTable.ext.order.htmlIntl('es');
        }
      
        var tabla = jQuery("#ponchoTable").DataTable({
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
                    "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente",
                    "paginate": {
                        "first": 'Ir a la primera página',
                        "previous": 'Ir a la página anterior',
                        "next": 'Ir a la página siguiente',
                        "last": 'Ir a la última página'
                    }
                }
            }
        });


        jQuery(document).ready(function() {
            // Remove accented character from search input as well
            jQuery('#ponchoTableSearch').keyup(function() {
                tabla
                    .search(
                        jQuery.fn.DataTable.ext.type.search.string(this.value)
                    )
                    .draw();
            });
        });

        //BUSCADOR
        jQuery("#ponchoTable_filter").parent().parent().remove();

        //FILTRO PERSONALIZADO
        if (jQuery('#ponchoTableFiltro option').length > 1) {
            jQuery('#ponchoTableFiltroCont').show();
        }
        jQuery('#ponchoTableFiltro').on('change', function() {
            var filtro = jQuery.fn.DataTable.ext.type.search.string(jQuery(this).val());
            if (filtro != "") {
                tabla.column(filtroColumna).every(function() {
                    var that = this;
                    that
                    .search(filtro ? '^'+filtro+'$':'', true,false)
                  .draw();
                });
            } else {
                tabla.search('').columns().search('').draw();
            }

        });

    }
}


//#####################################################################
//####################### POPOVER #####################################
//#####################################################################

var content_popover = document.getElementById("content-popover");
function popshow(){
    content_popover.classList.toggle("hidden");
}
function pophidde(){
    content_popover.classList.add("hidden");
}


//#####################################################################
//####################### PONCHO UBICACION ############################
//#####################################################################

var ponchoUbicacion = function(options) {
  var urlProvincias = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geoprovincias.json';
  var urlLocalidades = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geolocalidades.json';
  var provincias;
  var localidades;
  var iProvincia = jQuery('input[name="submitted[' + options.provincia + ']"]');
  var iLocalidad = jQuery('input[name="submitted[' + options.localidad + ']"]');
  var sProvincia;
  var sLocalidades;

  function init() {
    urlProvincias = options.urlProvincias ? options.urlProvincias : urlProvincias;
    urlLocalidades = options.urlLocalidades ? options.urlLocalidades : urlLocalidades;

    jQuery.getJSON(urlProvincias, function(data) {
      provincias = parseJsonProvincias(data);
      sProvincia = getSelectProvincias(provincias);
      addProvEvent();
      iProvincia.after(sProvincia);
      jQuery(sProvincia).select2();
    });

    jQuery.getJSON(urlLocalidades, function(data) {
      localidades = parseJsonLocalidades(data);
      sLocalidades = getSelectLocalidades(localidades, sProvincia.val());
      addLocEvent();
      iLocalidad.after(sLocalidades);
      jQuery(sLocalidades).select2();
    });
    iProvincia.hide();
    iLocalidad.hide();
  }

  function parseJsonProvincias(data) {
    provincias = [];

    data.results.forEach(function(provincia, index) {
      provincias.push(provincia);
    });

    return provincias;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function parseJsonLocalidades(data) {
    localidades = [];

    data.results.forEach(function(localidad, index) {
      localidades.push(localidad);
    });
    return localidades;
  }

  function addProvEvent() {
    sProvincia.on('change', function(e) {
      iProvincia.val('');
      iLocalidad.val('');
      sLocalidades.children('option:not(:first)').remove();
      if (sProvincia.val() != '') {
        iProvincia.val(sProvincia.find(":selected").text());
        var sAux = getSelectLocalidades(localidades, sProvincia.val());
        var sOpt = sAux.find('option');
        sLocalidades.append(sOpt);
        sLocalidades.val('');
      }
    });
  }

  function addLocEvent() {
    sLocalidades.on('change', function(e) {
      iLocalidad.val('');
      if (sLocalidades.val() != '') {
        iLocalidad.val(sLocalidades.find(":selected").text());
      }
    });
  }

  function getDropDownList(name, id, optionList, required = false,
    emptyOption = false, selected_item = false) {

    var combo = jQuery("<select></select>")
      .attr("id", id).attr("name", name)
      .addClass("form-control form-select")
      .prop('required', required);
    if (emptyOption) {
      combo.append("<option value=''>Seleccione una opción</option>");
    }

    jQuery.each(optionList, function(i, el) {
      let selected = '';
      if (selected_item == el.nombre) {
        selected = 'selected="selected"';
      }
      combo.append(
        "<option value='" + el.id + "' " + selected + ">" +
        el.nombre +
        "</option>"
      );
    });

    return combo;
  }

  function getSelectProvincias(provincias) {
    var provinciasOptions = [];

    provinciasOptions = provincias.sort(function(a, b) {
      var nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
      var nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
      return nameA.localeCompare(nameB);
    });
    var required = iProvincia.prop('required');
    var select = getDropDownList('sProvincias', 'sProvincias', provinciasOptions,
      required, true, iProvincia.val());
    return select;
  }

  function getSelectLocalidades(localidades, provincia) {
    var locaSelect = {};
    var required = iLocalidad.prop('required');
    var select = null;

    if (iProvincia.val()) {
      locaSelect = localidades
        .filter(function(localidad) {
          return String(localidad.provincia.id) == String(provincia);
        })
        .map(function(a) {
          if (a.departamento.nombre) {
            a.nombre = capitalizeFirstLetter(a.departamento.nombre.toLowerCase()) + ' - ' +
              capitalizeFirstLetter(a.nombre.toLowerCase());
          }
          return a;
        })
        .sort(function(a, b) {
          var nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
          var nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
          return nameA.localeCompare(nameB);
        });
      emptyOption = iLocalidad.val() ? true : false;

      select = getDropDownList('sLocalidades', 'sLocalidades',
        locaSelect, required, emptyOption, iLocalidad.val());
    } else {
      select = getDropDownList('sLocalidades', 'sLocalidades',
      [], required, true, false);
    }

    return select;
  }

  init();
};


//#####################################################################
//########################  PONCHO Chart  #############################
//#####################################################################
function ponchoChart(opt) {
  "use strict";

  if (chequeoOpcionesObligatorias(opt)) {
      if (opt.jsonInput) {
          console.log(opt.jsonInput);
          drawChart(jQuery.parseJSON(opt.jsonInput), opt);
      } else {
          var url = opt.jsonUrl ? opt.jsonUrl : 
              'https://sheets.googleapis.com/v4/spreadsheets/' + opt.idSpread + '/values/' + opt.hojaNombre + '?alt=json&key=AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY';
          jQuery.getJSON(url, function(data) {
              drawChart(data, opt)
          });
      }

  } else {

      //informo por consola el faltante
      if (typeof opt.idSpread == 'undefined' || opt.idSpread == "") {
          console.log('Completar valor para la opción de Configuración idSpread');
      }

      if (typeof opt.hojaNombre == 'undefined' || opt.hojaNombre == "") {
          console.log('Completar valor para la opción de Configuración hojaNombre');
      }

      if (typeof opt.tipoGrafico == 'undefined' || opt.tipoGrafico == "") {
          console.log('Completar valor para la opción de Configuración tipoGrafico');
      }

      if (typeof opt.idComponenteGrafico == 'undefined' || opt.idComponenteGrafico == "") {
          console.log('Completar valor para la opción de Configuración idComponenteGrafico');
      }

      if (getTipoGrafico(opt.tipoGrafico) == "") {
          console.log('Ingrese un tipo de gafico válido');
      }
  }

  function getTipoGrafico(tipo) {
      var grafico = '';
      if (tipo == 'Line') grafico = 'line';
      if (tipo == 'Bar') grafico = 'bar';
      if (tipo == 'Pie') grafico = 'pie';
      if (tipo == 'Area') grafico = 'line';
      if (tipo == 'Horizontal Bar') grafico = 'horizontalBar';
      if (tipo == 'Stacked Bar') grafico = 'bar';
      if (tipo == 'Mixed') grafico = 'mixed';
      if (tipo == 'HeatMap') grafico = 'heatmap';

      return grafico;
  }

  function getColor(color) {
      var codigoColor = '';
      switch (color) {
          case 'celeste':
          case 'info':
              codigoColor = '#2897d4';
              break;
          case 'verde':
          case 'success':
              codigoColor = '#2e7d33';
              break;
          case 'rojo':
          case 'danger':
              codigoColor = '#c62828';
              break;
          case 'amarillo':
          case 'warning':
              codigoColor = '#f9a822';
              break;
          case 'azul':
          case 'primary':
              codigoColor = '#0072bb';
              break;
          case 'negro':
          case 'black':
              codigoColor = '#333';
              break;
          case 'uva':
              codigoColor = '#6a1b99';
              break;
          case 'gris':
          case 'muted':
              codigoColor = '#525252';
              break;
          case 'grisintermedio':
          case 'gris-area':
          case 'gray':
              codigoColor = '#f2f2f2';
              break;
          case 'celesteargentina':
          case 'celeste-argentina':
              codigoColor = '#37bbed';
              break;
          case 'fucsia':
              codigoColor = '#ec407a';
              break;
          case 'arandano':
              codigoColor = '#c2185b';
              break;
          case 'cielo':
              codigoColor = '#039be5';
              break;
          case 'verdin':
              codigoColor = '#6ea100';
              break;
          case 'lima':
              codigoColor = '#cddc39';
              break;
          case 'maiz':
          case 'maíz':
              codigoColor = '#ffce00';
              break;
          case 'tomate':
              codigoColor = '#ef5350';
              break;
          case 'naranjaoscuro':
          case 'naranja':
              codigoColor = '#EF6C00';
              break;
          case 'verdeazulado':
          case 'verde-azulado':
              codigoColor = '#008388';
              break;
          case 'escarapela':
              codigoColor = '#2cb9ee';
              break;
          case 'lavanda':
              codigoColor = '#9284be';
              break;
          case 'mandarina':
              codigoColor = '#f79525';
              break;
          case 'palta':
              codigoColor = '#50b7b2';
              break;
          case 'cereza':
              codigoColor = '#ed3d8f';
              break;
          case 'limon':
              codigoColor = '#d7df23';
              break;
          case 'verdejade':
          case 'verde-jade':
              codigoColor = '#066';
              break;
          case 'verdealoe':
          case "verde-aloe":
              codigoColor = '#4fbb73';
              break;
          case 'verdecemento':
          case 'verde-cemento':
              codigoColor = '#b4beba';
              break;
          default:
              console.log('No existe color ' + color);
      }

      return codigoColor;
  }

  function graficoTorta(etiquetas, datos, tipoGrafico, colores, idGrafico, posicionLeyendas, toltips, mostrarLeyendas) {
      const $grafica = document.getElementById(idGrafico);
      const dataset = {
          data: datos,
          borderColor: colores,
          backgroundColor: colores,
          borderWidth: 2,
      };
      new Chart($grafica, {
          type: tipoGrafico,
          data: {
              labels: etiquetas,
              datasets: [
                  dataset,
              ]
          },
          //options: options
          options: {
              legend: { display: mostrarLeyendas, position: posicionLeyendas },
              responsive: true,
              tooltips: toltips,
          }

      });
  }

  function graficoLineaSimple(etiquetas, datos, tipoGrafico, color, label, empiezaYenCero, idGrafico, posicionLeyendas, toltips, mostrarLeyendas) {
      const $grafica = document.getElementById(idGrafico);
      const dataset = {
          data: datos,
          borderColor: color,
          backgroundColor: color,
          borderWidth: 2,
          lineTension: 0,
          fill: false,
          label: label,
      };
      new Chart($grafica, {
          type: tipoGrafico,
          data: {
              labels: etiquetas,
              datasets: [
                  dataset,
              ]
          },
          options: {
              legend: { display: mostrarLeyendas, position: posicionLeyendas },
              tooltips: toltips,
              responsive: true,
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: empiezaYenCero,
                      }
                  }]
              }
          }
      });
  }

  function graficoAreaBarraSimple(etiquetas, datos, tipoGrafico, color, label, empiezaYenCero, idGrafico, posicionLeyendas, toltips, mostrarLeyendas) {
      const $grafica = document.getElementById(idGrafico);
      const dataset = {
          data: datos,
          borderColor: color,
          backgroundColor: color,
          borderWidth: 2,
          lineTension: 0,
          label: label,
      };
      new Chart($grafica, {
          type: tipoGrafico,
          data: {
              labels: etiquetas,
              datasets: [
                  dataset,
              ]
          },
          options: {
              legend: { display: mostrarLeyendas, position: posicionLeyendas },
              tooltips: toltips,
              responsive: true,
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: empiezaYenCero,
                      }
                  }]
              }
          }
      });
  }


  function graficoBarraHorizontalSimple(etiquetas, datos, tipoGrafico, color, label, empiezaYenCero, idGrafico, posicionLeyendas, toltips, mostrarLeyendas) {
      const $grafica = document.getElementById(idGrafico);
      const dataset = {
          data: datos,
          borderColor: color,
          backgroundColor: color,
          borderWidth: 2,
          lineTension: 0,
          label: label,
      };
      new Chart($grafica, {
          type: tipoGrafico,
          data: {
              labels: etiquetas,
              datasets: [
                  dataset,
              ]
          },
          options: {
              legend: { display: mostrarLeyendas, position: posicionLeyendas },
              tooltips: toltips,
              responsive: true,
              scales: {
                  xAxes: [{
                      ticks: {
                          beginAtZero: empiezaYenCero,
                      }
                  }]
              }
          }
      });
  }

  function graficoComplejo(etiquetas, tipoGrafico, datos, idGrafico, empiezaYenCero, posicionLeyendas, toltips, mostrarLeyendas) {
      const $grafica = document.getElementById(idGrafico);
      new Chart($grafica, {
          type: tipoGrafico,
          data: {
              labels: etiquetas,
              datasets: datos
          },
          options: {
              legend: { display: mostrarLeyendas, position: posicionLeyendas, labels: { textAlign: 'center' } },
              tooltips: toltips,
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: empiezaYenCero,
                      }
                  }],
              },
          }
      });
  }

  function graficoComplejoHorizontal(etiquetas, tipoGrafico, datos, idGrafico, empiezaYenCero, posicionLeyendas, toltips, mostrarLeyendas) {
      const $grafica = document.getElementById(idGrafico);
      new Chart($grafica, {
          type: tipoGrafico,
          data: {
              labels: etiquetas,
              datasets: datos
          },
          options: {
              legend: { display: mostrarLeyendas, position: posicionLeyendas, labels: { textAlign: 'center' } },
              tooltips: toltips,
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                  xAxes: [{
                      ticks: {
                          beginAtZero: empiezaYenCero,
                      }
                  }],
              },
          }
      });
  }


  function graficoComplejoStacked(etiquetas, tipoGrafico, datos, idGrafico, empiezaYenCero, posicionLeyendas, toltips, mostrarLeyendas) { //Stacked Bar
      const $grafica = document.getElementById(idGrafico);
      new Chart($grafica, {
          type: tipoGrafico,
          data: {
              labels: etiquetas,
              datasets: datos
          },
          options: {
              legend: { display: mostrarLeyendas, position: posicionLeyendas, labels: { textAlign: 'center' } },
              tooltips: toltips,
              responsive: true,
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: empiezaYenCero,
                      },
                      stacked: true,
                  }],
                  xAxes: [{ stacked: true }],
              },
          }
      });
  }

  function graficoComplejoMixed(etiquetas, tipoGrafico, datos, idGrafico, empiezaYenCero, posicionLeyendas, indice, label1, label2, mostrarLeyendas) {
      const $grafica = document.getElementById(idGrafico);
      new Chart($grafica, {
          type: tipoGrafico,
          data: {
              labels: etiquetas,
              datasets: datos
          },
          options: { 
            legend: { display: mostrarLeyendas, position: posicionLeyendas, labels: {textAlign: 'center'} },
            tooltips: {
              enabled: true,
              mode: 'single',
              callbacks: {
                 label: function(tooltipItems, data) {
                  var text = '';
                  if (indice == 2) text = '%';
                  else if (tooltipItems.datasetIndex == indice) text = '%'; 
                  var value = numeroFormateado(tooltipItems.yLabel);
                  return data.datasets[tooltipItems.datasetIndex].label + ': ' + value + ' ' + text;
                }
              }
            },
            responsive: true,
            scales: {
              yAxes: [
                {
                  id: 'left-y-axis',
                  type: 'linear',
                  position: 'left',
                  ticks: {
                      beginAtZero: empiezaYenCero,
                      callback: function(value) {
                        var text = '';
                        if (indice == 1 || indice == 2) text = '%'; 
                        return value + text;
                      }
                  },
                   scaleLabel: {
                      display: true,
                      labelString: label2,
                      fontColor: "black"
                    }
                }, {
                  id: 'right-y-axis',
                  type: 'linear',
                  position: 'right',
                  ticks: {
                      beginAtZero: empiezaYenCero,
                      callback: function(value) {
                        var text = '';
                        if (indice == 0 || indice == 2) text = '%';
                        return value + text;
                      }
                  },
                     scaleLabel: {
                      display: true,
                      labelString: label1,
                      fontColor: "black"
                    }
                }
              ],
            },
         }
      });
  }

  function graficoHeatMap(etiquetas, datos, idGrafico, labelsY, rango, labelX, labelY, labelValor, titulo, mostrarYaxis, posicionLeyendas, mostrarLeyendas) {

      const $grafica = document.getElementById(idGrafico);

      var options = {
          series: datos,
          chart: {
            height: 650,
            type: 'heatmap',
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: titulo
          },
          tooltip: {
             custom: function({series, seriesIndex, dataPointIndex, w}) {
              var value = series[seriesIndex][dataPointIndex];
              value = numeroFormateado(value);
              return '<div class="arrow_box">' +
                '<span>' + labelX + ": " + labelsY[seriesIndex] + '<br>' +
                labelY + ": " + w.globals.labels[dataPointIndex] + '<br>' +
                labelValor + ": " + value + '</span>' +
                '</div>'
            }
          },
          plotOptions: {
            heatmap: {
              shadeIntensity: 0.5,
              radius: 0,
              useFillColorAsStroke: false,
              colorScale: {
                ranges: rango
              }
            }
          },
          yaxis: {
              show: mostrarYaxis,
          },
          legend: {
            show: mostrarLeyendas,
            position: posicionLeyendas,
          },
          responsive: [{
              breakpoint: 1000,
              options: {
                  yaxis: {
                      show: false,
                  },
                  legend: {
                      show: mostrarLeyendas,
                      position: "top",
                  },
              },
          }]
      };

      var chart = new ApexCharts($grafica, options);
      chart.render(); 

      const collection = document.getElementsByClassName("apexcharts-toolbar");
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = "none";
      } 

  }

  function graficaTitulo(idTag, titulo) {
      if (document.getElementById(idTag)) {
          document.getElementById(idTag).innerHTML = titulo;
      }
  }

  function chequeoOpcionesObligatorias(opt) {
      var chequeo = false;
      if ( ((opt.idSpread  && opt.hojaNombre) || opt.jsonUrl || opt.jsonInput) && (typeof opt.tipoGrafico != 'undefined' && opt.tipoGrafico != "") && (typeof opt.idComponenteGrafico != 'undefined' && opt.idComponenteGrafico != "") && (getTipoGrafico(opt.tipoGrafico) != ""))
          chequeo = true;
      return chequeo;
  }

  function numeroFormateado(numero) {
      var value = numero.toString().replace('.',',');
      var array = value.split(",");
      //var result1 = new Intl.NumberFormat('es').format(array[0]);
      var result1 = new Intl.NumberFormat('es-AR', {maximumFractionDigits:2 }).format(array[0]);
      if (array.length > 1) 
          value = result1.concat(",",array[1].substr(0,2));
      else 
          value = result1;

      return value;
  }

  function drawChart(data, opt) {

      var etiquetas = [];
      var filteredTitleName = [];
      var filteredTitlePos = [];
      var color = '';
      var colores = [];
      var codigosColores = [];
      var columnas = [];
      var valores = [];
      var datos = [];
      var cantDatos = 0;
      var urlOrigen = "";
      var toltips = "";
      var tipoGraficosMixed = [];
      var indicePorcentajeMixed = 0;
      var porcentajesMixed = [];
      var labelsYCortos = [];
      var indiceNombreCorto = 0;
      var posicionLeyendas = opt.posicionLeyendas ? opt.posicionLeyendas : 'top';

      var mostrarLeyendas = '';
      if (typeof opt.mostrarLeyendas == 'undefined'){
          mostrarLeyendas = true;
      } else {
          mostrarLeyendas = opt.mostrarLeyendas;
      }

      var mostrarTotal = '';
      if (typeof opt.mostrarTotalStacked == 'undefined'){
          mostrarTotal = true;
      } else {
          mostrarTotal = opt.mostrarTotalStacked;
      }

      var tipoGrafico = getTipoGrafico(opt.tipoGrafico);

      var listado = data['values'];

      //TITULOS
      jQuery.each(Object.keys(listado[0]), function(index, key) {
          if (listado[0][index].substr(0, 5) == 'eje-y') {
              var split = listado[0][index].split('-');
              var pos = split[0] + split[1];
              filteredTitleName.push(pos);
              filteredTitlePos.push(index);
          } else if (listado[0][index] == 'nombre-corto'){
              if (tipoGrafico == 'heatmap'){
                  indiceNombreCorto = index;
              }
          }
      });

      jQuery.each(listado, function(row, value) {
          if (row == 0) { //construyo arrays para los dataset, recupero colores y labels
              jQuery.each(filteredTitlePos, function(index, title) {
                  var split = listado[row][filteredTitlePos[index]].split('-');
                  var pos = split[0] + split[1];
                  valores[pos] = []; //construyo los array para los dataset
                  colores.push(split[2]); //recupero colores
                  if (tipoGrafico == 'mixed') {
                      if (split.length > 3){ //ingresaron un tipo de grafico
                        //verifico que sea un tipo de grafico valido
                        if (split[3] == 'barra' || split[3] == 'linea') {
                          tipoGraficosMixed.push(split[3]);//recupero tipo de grafico para cada dataset   
                        } else { //seteo graficos por defecto
                           if (index == 0) tipoGraficosMixed.push('barra');//por defecto seteo barra
                           if (index == 1) tipoGraficosMixed.push('linea');//por defecto seteo linea
                        }
                      } else { //seteo graficos por defecto
                        if (index == 0) tipoGraficosMixed.push('barra');//por defecto seteo barra
                        if (index == 1) tipoGraficosMixed.push('linea');//por defecto seteo linea
                      }
                  }
              });
          }

          if (row == 1) {
              jQuery.each(filteredTitlePos, function(index, title) {
                  if (tipoGrafico != 'pie') {
                      if (tipoGrafico == 'heatmap') {
                          etiquetas.push(listado[row][filteredTitlePos[index]]); //recupero etiquetas (eje x)
                      } else {
                          columnas.push(listado[row][filteredTitlePos[index]]); //recupero columnas para label
                          cantDatos = cantDatos + 1;
                      }
                  } else {
                      etiquetas.push(listado[row][filteredTitlePos[index]]); //recupero las etiquetas de la torta
                  }
              });
          }

          if (row > 1) { //recupero los datos para los dataset y los colores para torta
              var label = false;
              jQuery.each(filteredTitlePos, function(index, title) {
                  //Detectar si es etiqueta x
                  var split = listado[0][filteredTitlePos[index]].split('-');
                  var pos = split[0] + split[1];
                  if (tipoGrafico == 'pie') { //recupero datos para la torta
                      valores[pos].push(listado[row][filteredTitlePos[index]]);
                  } else {
                      if (tipoGrafico == 'heatmap') {
                          if (label == false) {
                              columnas.push(listado[row][0]); //recupero las columnas (eje y)
                              label = true;
                              cantDatos = cantDatos + 1;
                          }
                          if (index != indiceNombreCorto) valores[pos].push(listado[row][filteredTitlePos[index]]); //recupero datos
                          if (index + 2 == indiceNombreCorto) {
                              if (typeof listado[row][index + 2] == 'undefined') labelsYCortos.push("*"); //en caso que no completen nombre-corto
                              else labelsYCortos.push(listado[row][index + 2]); //recupero labels Y cortos
                          }
                      } else {
                          if (label == false) {
                              etiquetas.push(listado[row][0]); //recupero las etiquetas
                              label = true;
                          }
                          valores[pos].push(listado[row][filteredTitlePos[index]]); //recupero datos
                      }
                  }
              });
          }
      });

      if (tipoGrafico == 'pie') {
          var datosTorta = [];

          jQuery.each(Object.keys(filteredTitleName), function(index, key) {
              var pos = filteredTitleName[index];

              if (valores.hasOwnProperty(pos)) {
                  datosTorta.push(valores[pos]);
              }
          });
          datos = datosTorta;

      } else if (cantDatos == 1) { //es un solo juego de datos

          jQuery.each(Object.keys(filteredTitleName), function(index, key) {
              var pos = filteredTitleName[index];

              if (valores.hasOwnProperty(pos)) {
                  datos = valores[pos];
              }
          });
      }

      if (tipoGrafico == 'mixed') {
          var cadena = opt.porcentajesMixed ? opt.porcentajesMixed : '';
          if (cadena.length > 0) {
              porcentajesMixed = cadena.split(',');
          }
      }

      //seteo toltips para mostrar porcentaje o no
      if (opt.porcentajes == true) {
    
          if (tipoGrafico == 'line' && cantDatos > 1){
              //seteo tooltips
              toltips = {
                  enabled: true,
                  callbacks: {
                      label: function(tooltipItem, data) {
                          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                          value = numeroFormateado(value);
                          return data.datasets[tooltipItem.datasetIndex].label + ': ' + value + '%';
                      }
                  },
                  mode: 'index',
                  intersect: false,
              };
          } else if  (tipoGrafico == 'pie'){
              //seteo tooltips
              toltips = {
                  enabled: true,
                  callbacks: {
                      label: function(tooltipItem, data) {
                          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                          value = numeroFormateado(value);
                          return data["labels"][tooltipItem.index] + ': ' +  value + '%';
                      }
                  }
              };

          } else if  (opt.tipoGrafico == 'Stacked Bar'){
              //seteo tooltips
              if (mostrarTotal == true) {
                  toltips = {
                      enabled: true,
                      mode: 'index',
                      callbacks: {
                          label: function(tooltipItem, data) {
                              var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                              value = numeroFormateado(value);
                              return data.datasets[tooltipItem.datasetIndex].label + ': ' +  value + '%';
                          },
                          footer: (tooltipItems, data) => {
                            let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                            return 'Total: ' + new Intl.NumberFormat('es-AR', {maximumFractionDigits:2 }).format(total) + '%';
                          }
                      }
                  };
              } else {
                  toltips = {
                      enabled: true,
                      mode: 'index',
                      callbacks: {
                          label: function(tooltipItem, data) {
                              var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                              value = numeroFormateado(value);
                              return data.datasets[tooltipItem.datasetIndex].label + ': ' +  value + '%';
                          }
                      }
                  };
              }
          } else {
              //seteo tooltips
              toltips = {
                  enabled: true,
                  mode: 'index',
                  callbacks: {
                      label: function(tooltipItem, data) {
                          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                          value = numeroFormateado(value);
                          return data.datasets[tooltipItem.datasetIndex].label + ': ' +  value + '%';
                      }
                  }
              };
          }

      } else {

           if (tipoGrafico == 'line' && cantDatos > 1){
              //seteo tooltips
              toltips = {
                  enabled: true,
                  callbacks: {
                      label: function(tooltipItem, data) {
                          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                          value = numeroFormateado(value);
                          return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
                      }
                  },
                  mode: 'index',
                  intersect: false,
              };
           } else if  (tipoGrafico == 'pie'){
              //seteo tooltips
              toltips = {
                  enabled: true,
                  callbacks: {
                      label: function(tooltipItem, data) {
                          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                          value = numeroFormateado(value);
                          return data["labels"][tooltipItem.index] + ': ' +  value;
                      }
                  }
              };

          } else if (opt.tipoGrafico == 'Stacked Bar' && cantDatos > 1){
              //seteo tooltips
              if (mostrarTotal == true) {
                  toltips = {
                      enabled: true,
                      mode: 'index',
                      intersect: false,
                        callbacks: {
                          label: function(tooltipItem, data) {
                              var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                              value = numeroFormateado(value);
                              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
                          },
                          footer: (tooltipItems, data) => {
                            let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                            return 'Total: ' + new Intl.NumberFormat('es-AR', {maximumFractionDigits:2 }).format(total);
                          }
                        }
                  };
              } else {
                  toltips = {
                  enabled: true,
                  mode: 'index',
                  intersect: false,
                    callbacks: {
                      label: function(tooltipItem, data) {
                          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                          value = numeroFormateado(value);
                          return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
                      }
                    }
                  };
              }
           } else {
              //seteo tooltips
              toltips = {
                  enabled: true,
                  mode: 'index',
                  callbacks: {
                      label: function(tooltipItem, data) {
                          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                          value = numeroFormateado(value);
                          return data.datasets[tooltipItem.datasetIndex].label + ': ' +  value;
                      }
                  }
              };
           }
      }

      //llamo a los constructores para cada tipo de grafico
      if (tipoGrafico == 'pie') {

          colores.forEach(function(valor, indice, array) {
              codigosColores.push(getColor(valor));
          });

          console.log('etiquetas --> ' + etiquetas);
          console.log('datos --> ' + datos);
          console.log('colores --> ' + codigosColores);

          graficoTorta(etiquetas, datos, tipoGrafico, codigosColores, opt.idComponenteGrafico, posicionLeyendas, toltips, mostrarLeyendas);
      }

      if (cantDatos == 1) {

          console.log('etiquetas --> ' + etiquetas);
          console.log('datos --> ' + datos);

          color = getColor(colores[0]);
          console.log('color --> ' + color);

          if (opt.tipoGrafico == 'Line') {
              graficoLineaSimple(etiquetas, datos, tipoGrafico, color, columnas[0], opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, toltips, mostrarLeyendas);
          }

          if (tipoGrafico == 'bar' || opt.tipoGrafico == 'Area') {
              graficoAreaBarraSimple(etiquetas, datos, tipoGrafico, color, columnas[0], opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, toltips, mostrarLeyendas);
          }

          if (tipoGrafico == 'horizontalBar') {
              graficoBarraHorizontalSimple(etiquetas, datos, tipoGrafico, color, columnas[0], opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, toltips, mostrarLeyendas);
          }

      }

      if (cantDatos > 1) {

          if (tipoGrafico == 'heatmap') {

             if ((typeof opt.heatMapColors != 'undefined' && opt.heatMapColors != "") && (typeof opt.heatMapColorsRange != 'undefined' && opt.heatMapColorsRange != "")){

                  var datosFull = [];

                  var labelX = 'labelFila';
                  var labelY = 'labelColumna';
                  var labelValor = 'labelValor';

                  if ((typeof opt.datosTooltip != 'undefined') && (opt.datosTooltip.length > 0)){
                      if ((typeof opt.datosTooltip[0] != 'undefined') && (typeof opt.datosTooltip[0].labelFila != 'undefined')) labelX = opt.datosTooltip[0].labelFila;
                      if ((typeof opt.datosTooltip[1] != 'undefined') && (typeof opt.datosTooltip[1].labelColumna != 'undefined')) labelY = opt.datosTooltip[1].labelColumna;
                      if ((typeof opt.datosTooltip[2] != 'undefined') && (typeof opt.datosTooltip[2].labelValor != 'undefined')) labelValor = opt.datosTooltip[2].labelValor;
                  }                        

                  //getDatos
                  jQuery.each(Object.keys(filteredTitleName), function(index, key) {

                      var pos = filteredTitleName[index];

                      if (valores.hasOwnProperty(pos)) {

                          datos = valores[pos];

                          datosFull.push(datos);
                      };
                  });

                  var series = [];

                  for (var i=0;i<columnas.length;i++) {

                      var data = [];

                      for (var l=0;l<etiquetas.length;l++) {
                      
                          var datos = {
                              x: etiquetas[l],
                              y: parseInt(datosFull[l][i])
                          };

                          data.push(datos);
                      } 

                      var serie = {
                          name: labelsYCortos[i] != '*' ? labelsYCortos[i] : columnas[i],
                          data: data
                      } 

                      series.push(serie);
                  }   

                  var rango = [];

                  //construyo range object
                  for (var i=0; i<opt.heatMapColorsRange.length -1; i++){
                        var data = {
                          from: opt.heatMapColorsRange[i],
                          to: opt.heatMapColorsRange[i + 1],
                          color: getColor(opt.heatMapColors[i])
                        };
                     rango.push(data);
                  }

                  var mostrarYaxis = '';
                  if (typeof opt.mostrarEjeY == 'undefined'){
                      mostrarYaxis = true;
                  } else {
                      mostrarYaxis = opt.mostrarEjeY;
                  }

                 graficoHeatMap(etiquetas, series, opt.idComponenteGrafico, columnas, rango, labelX, labelY, labelValor, opt.tituloGrafico, mostrarYaxis, posicionLeyendas, mostrarLeyendas);

              } else {
                  //informo por consola el faltante
                  if (typeof opt.heatMapColors == 'undefined' || opt.heatMapColors == "") {
                      console.log('Completar vector con valores para los colores');
                  }

                  if (typeof opt.heatMapColorsRange == 'undefined' || opt.heatMapColorsRange == "") {
                      console.log('Completar vector con el rango de valores para los colores');
                  }
              }
          } else {

              var datasets = [];
              var indiceColor = 0;

              //getColores
              colores.forEach(function(valor, indice, array) {
                  codigosColores.push(getColor(valor));
              });

              console.log('colores --> ' + codigosColores);

              var indiceMixed = 0;

              //getDatos
              jQuery.each(Object.keys(filteredTitleName), function(index, key) {
                  var pos = filteredTitleName[index];
                  if (valores.hasOwnProperty(pos)) {

                      datos = valores[pos];

                      console.log('datos --> ' + datos);

                      if (opt.tipoGrafico == 'Line') {
                          //construyo datasets
                          var dataset = {
                              label: columnas[indiceColor],
                              data: datos,
                              borderColor: codigosColores[indiceColor],
                              fill: false,
                              borderWidth: 2,
                              lineTension: 0,
                              backgroundColor: codigosColores[indiceColor], 
                          };
                      } else if (opt.tipoGrafico == 'Bar' || opt.tipoGrafico == 'Area' || opt.tipoGrafico == 'Horizontal Bar' || opt.tipoGrafico == 'Stacked Bar') {
                          //construyo datasets
                          var dataset = {
                              label: columnas[indiceColor],
                              data: datos,
                              borderColor: codigosColores[indiceColor],
                              backgroundColor: codigosColores[indiceColor], //BARRAS y AREA
                              borderWidth: 2,
                              lineTension: 0, //linea  y area
                          };
                      } else if (opt.tipoGrafico == 'Mixed'){ 
                          var tipo = tipoGraficosMixed[indiceMixed];
                          //construyo datasets
                          if (tipo == 'barra') {
                            var dataset = {
                              label: columnas[indiceColor],
                              data: datos, 
                              backgroundColor: codigosColores[indiceColor],
                              // This binds the dataset to the left y axis
                              yAxisID: 'left-y-axis',
                              type: 'bar',
                            };
                          } else if (tipo == 'linea'){
                              var dataset = {
                                label: columnas[indiceColor],
                                data: datos, 
                                borderColor: codigosColores[indiceColor],
                                backgroundColor: codigosColores[indiceColor],
                                // Changes this dataset to become a line
                                type: 'line',
                                // This binds the dataset to the right y axis
                                yAxisID: 'right-y-axis',
                                fill: false,
                              };
                          }
                      }


                      datasets.push(dataset);

                      indiceColor = indiceColor + 1;

                      indiceMixed = indiceMixed + 1;

                  }
              });

              if (tipoGrafico == 'mixed') { 
                  if (porcentajesMixed.length == 2) {
                      indicePorcentajeMixed = 2; //los 2 dataset usan porcentaje
                  } else if (porcentajesMixed.length == 1){
                      if (porcentajesMixed[0] == 'eje-y1') {
                          indicePorcentajeMixed = 0; //solo el primer dataset usa porcentaje
                      } else if (porcentajesMixed[0] == 'eje-y2') {
                          indicePorcentajeMixed = 1; //solo el segundo dataset usa porcentaje
                      }
                  } else  indicePorcentajeMixed = 3; //ningun dataset usa escala de porcentaje
              }
              
              console.log('etiquetas --> ' + etiquetas);

              console.log('toltip -->' + JSON.stringify(toltips));

              if (opt.tipoGrafico == 'Stacked Bar') graficoComplejoStacked(etiquetas, tipoGrafico, datasets, opt.idComponenteGrafico, opt.ejeYenCero, posicionLeyendas, toltips, mostrarLeyendas);
              else if (opt.tipoGrafico == 'Mixed') graficoComplejoMixed(etiquetas, 'bar', datasets, opt.idComponenteGrafico, opt.ejeYenCero, posicionLeyendas, indicePorcentajeMixed, columnas[0], columnas[1], mostrarLeyendas);
              else if (opt.tipoGrafico == 'Horizontal Bar') graficoComplejoHorizontal(etiquetas, tipoGrafico, datasets, opt.idComponenteGrafico, opt.ejeYenCero, posicionLeyendas, toltips, mostrarLeyendas);
               else graficoComplejo(etiquetas, tipoGrafico, datasets, opt.idComponenteGrafico, opt.ejeYenCero, posicionLeyendas, toltips, mostrarLeyendas);
          }

      }

      //verifica si viene titulo del grafico, si no viene no dibuja nada
      if (opt.tituloGrafico != "" && typeof opt.tituloGrafico != 'undefined') {
          graficaTitulo(opt.idTagTituloGrafico, opt.tituloGrafico);
      }
  }
}


/**
 * GAPI LEGACY
 * Retorna la estructura de la versión 3 de la API GoogleSheets.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @summary La estructura del objeto que retorna es de este modo:
 * @example
 * // Estructura de retorno
 *  .
 *  \--feed
 *      \-- entry
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 * 
 * @param  {object} response Response JSON.
 * @return {object} JSON con la estructura V3 de la api de google sheet
 */
const gapi_legacy = (response) => {

  const keys = response.values[0];
  const regex = / |\/|_/ig;
  let entry = [];

  response.values.forEach((v, k) => {
    if(k > 0){
        let zip = {};
        for(const i in keys){
            const d = (v.hasOwnProperty(i))? v[i].trim() : "";
            zip[`gsx$${keys[i].toLowerCase().replace(regex, "")}`] = {"$t": d};
        }
        entry.push(zip);
    }
  });

  return {"feed": {"entry": entry}};
};


/* module.exports REMOVED */

/**
 * PONCHO MAP
 *
 * @summary Generador de mapas utilizando OpenStreetMap / leafleft
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,utils.js,
 * MarkerCluster.Default.css,MarkerCluster.css
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 * @see https://geojson.org/
 * @see https://leafletjs.com/
 *
 * 
 * MIT License
 *
 * Copyright (c) 2022 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class PonchoMap {
    constructor(data, options){
        // Confs
        const defaults = {
            "title": false,
            "id": "id",
            "template": false,
            "template_structure": {},
            "template_container_class_list": ["info-container"],
            "template_title_class_list": ["h4","text-primary","m-t-0"],
            "template_dl_class_list":["definition-list"],
            "template_innerhtml": false,
            "template_markdown": false,
            "template_header": false,
            "template_dl": "dl",
            "template_dt": "dt",
            "template_dd": "dd",
            "markdown_options": {
                extensions :[
                    "images", 
                    "alerts", 
                    // "numbers", 
                    // "ejes", 
                    "button", 
                    "target",
                    // "bootstrap-tables",
                    "video"
                ]
            },
            "scope": "",
            "slider": false,
            "scroll": false,
            "hash": false,
            "headers": {},
            "map_selector": "map",
            "anchor_delay":0,
            "slider_selector": ".slider",
            "map_view": [-40.44, -63.59],
            "map_anchor_zoom":16,
            "map_zoom":4,
            "reset_zoom":true,
            "latitud":"latitud",
            "longitud":"longitud",
            "marker": "azul",
            "marker_cluster_options": {
                "spiderfyOnMaxZoom": false,
                "showCoverageOnHover": false,
                "zoomToBoundsOnClick": true,
                "maxClusterRadius": 45,
                "spiderfyDistanceMultiplier": 0.1,
                "spiderLegPolylineOptions": {
                    "weight": 1,
                    "color": "#666",
                    "opacity": 0.5,
                    "fill-opacity": 0.5
                }
            }
        };
        let opts = Object.assign({}, defaults, options);
        this.scope = opts.scope;
        this.template = opts.template;
        this.template_structure = opts.template_structure;
        this.template_title_class_list = opts.template_title_class_list;
        this.template_dl_class_list = opts.template_dl_class_list;
        this.template_container_class_list = opts.template_container_class_list;
        this.template_innerhtml = opts.template_innerhtml;
        this.template_markdown = opts.template_markdown;
        this.markdown_options = opts.markdown_options;
        this.template_header = opts.template_header;
        this.template_dl = opts.template_dl;
        this.template_dt = opts.template_dt;
        this.template_dd = opts.template_dd;
        this.map_selector = opts.map_selector;
        this.headers = opts.headers;
        this.hash = opts.hash;
        this.scroll = opts.scroll;
        this.map_view = opts.map_view;
        this.anchor_delay = opts.anchor_delay;
        this.map_zoom = opts.map_zoom;
        this.map_anchor_zoom = opts.map_anchor_zoom;
        this.marker_cluster_options = opts.marker_cluster_options;
        this.marker_color = opts.marker;
        this.id = opts.id;
        this.title = opts.title;
        this.latitud = opts.latitud;
        this.longitud = opts.longitud;
        this.slider = opts.slider;
        this.reset_zoom = opts.reset_zoom;
        this.slider_selector=this.selectorName(opts.slider_selector);
        this.selected_marker;
        this.scope_selector = `[data-scope="${this.scope}"]`;
        this.scope_sufix = `--${this.scope}`;
        this.data = this.formatInput(data);
        this.geometryTypes = [
            "Point", 
            "LineString", 
            "Polygon", 
            "MultiPoint", 
            "MultiLineString"
        ];
        this.featureStyle = {
            "stroke": ponchoColor("primary"),
            "stroke-opacity": 1,
            "stroke-width": 2,
            "fill-opacity": .5
        };
        // OSM
        this.map = new L.map(this.map_selector,{preferCanvas: false})
            .setView(this.map_view, this.map_zoom);
        new L.tileLayer(
            "https://gis.argentina.gob.ar/osm/{z}/{x}/{y}.png",
            { 
              attribution: ("&copy; Contribuidores "
                  + "<a href=\"https://www.openstreetmap.org/copyright\">"
                  + "OpenStreetMap</a>")
            }
        ).addTo(this.map);
        this.markers = new L.markerClusterGroup(this.marker_cluster_options);
    }

    /**
     * Es un geoJSON
     * 
     * @summary Valida si un documento JSON psado por parámetro cumple
     * con el estándar geoJSON.
     * @param {object} gj Documento JSON.
     * @returns {boolean} True o False
     */
    isGeoJSON = (gj)=>{
        if(typeof gj !== "undefined" && 
          gj.hasOwnProperty("type") && 
          gj.type == "FeatureCollection"){
            return true;
        } 
        return false;
    };

    /**
     * JSON input
     * @return {object} Listado de entradas con formato feature de geJSON.
     */
    get entries(){
        return this.data.features;
    }

    get geoJSON(){
        return this.featureCollection(this.entries);
    }

    /**
     * Retorna los datos de entrada en formato geoJSON
     * 
     * @summary Si los datos de entrada cumplen con el estándar GeoJSON,
     * mantiene la información como está. Si el objeto de entrada no 
     * cumple con el estándar, es tratado como un JSON de 
     * entradas simples.
     * @see https://geojson.org/
     * @return {object} Retrona un documento en formato geoJSON
     */
    formatInput = (input) => {
        let geoJSON;
        if(this.isGeoJSON(input)){
            geoJSON = input;
        } else {
            const features = this.features(input);
            geoJSON = this.featureCollection(features);
        }
        return this.setIdIfNotExists(geoJSON);
    };

    /**
     * Comprone un feature GeoJSON
     * 
     * @param {object} entry Entrada JSON
     * @returns {object} Objeto con formato geoJSON feature.
     */
    feature = (entry) => {
        const latitude = entry[this.latitud];
        const longitude = entry[this.longitud];
        delete entry[this.latitud];
        delete entry[this.longitud];
        return {
            "type": "Feature",
            "properties": entry,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    longitude,
                    latitude
                ]
            }
        };
    };

    featureCollection = (features) => { 
        return {
            "type": "FeatureCollection",
            "features": features
        };
    }; 

    features = (entries) => {
        return entries.map(this.feature);
    };

    /**
     * Crea una entrada ID autonomerada si no posee una.
     * 
     * @summary Verifica si en las claves existe una posición asignada
     * a id, si no la tuviera genera una automáticamente. Por otro lado, 
     * si el usuario asoció una columna a la opción ID de la 
     * configuración, usa esa.
     * @param {object} entries
     * @return {object} 
     */
    setIdIfNotExists = (entries) => {
        const has_id = entries.features
                .filter((_,k) => k===0)
                .every(e => e.properties.hasOwnProperty('id'));

        if(!has_id){
            const new_entries = entries.features.map(
                (v,k) => {
                    const auto_id = k + 1;
                    const use_title = (this.title && v.properties[this.title] ? 
                            `-${slugify(v.properties[this.title])}` : '');
                    v.properties.id = auto_id + use_title;
                    return v;
                });
            entries.features = new_entries;
        }
        return entries;
    }

    /**
     * Agrega el hash en la barra de url.
     * @param {string|integer} value 
     * @return {undefined}
     */
    addHash = (value) => {
        if(!this.hash){
            return null;
        }
        window.location.hash = `#${value}`;
    }

    /**
     * Obtiene una entrada por su id
     * @property {integer} id Id de Punto Digital
     * @return {object}
     */
    entry = (id) => {
        return this.entries.find(e => e.properties[this.id] == id);
    }

    /**
     * Busca un término en un listado de entradas.
     * @param {string} term Término a buscar.
     * @returns {object} Listado filtrado por los match
     */
    searchEntry = (term, dataset) => {
        dataset = (typeof dataset === "undefined" ? this.geoJSON: dataset);
        if(!term){
            return dataset;
        }
        const entries = dataset.filter(e => {
            if(this.searchTerm(term, e.properties)){
                return e;
            };
        })
        return entries;
    };

    /**
     * Busca un término en cada uno de los indices de una entrada.
     */
    searchTerm = (search_term, data) => {
        const search_for = [...this.search_fields].filter(e => e);
        for(const item of search_for){
            if(!data.hasOwnProperty(item)){
                continue;
            }
            const term = replaceSpecialChars(search_term)
                    .toUpperCase();
            const field = replaceSpecialChars(data[item])
                    .toString()
                    .toUpperCase();
            try {
                if(field.includes(term)){
                    return data;
                }
            } catch (error) {
                console.error(error);
            }
        }
        return null;
    };

    /**
     * Quita la definición a un selector.
     * 
     * @param {string} selector Selector a quitarle la definición.
     * @example
     * // returns foo
     * selectorName(".foo")
     * @example
     * // returns foo
     * selectorName("#foo")
     * @return {string} Nombre del selector sin caracter de tipo.
     */
    selectorName = (selector) => {
        return selector.replace(/^(\.|\#)/, "");
    };

    /**
     * Acomoda la pantalla ubicando el mapa en el borde superior del
     * navegador.
     */
    scrollCenter = () => {
        const pos = document.getElementById(this.map_selector);
        const rect = pos.getBoundingClientRect();
        const pos_center_horizontal = (pos.offsetLeft + pos.offsetWidth) / 2;
        const pos_center_vertical =  rect.top + window.scrollY;
        window.scrollTo({
            top: pos_center_vertical,
            left: pos_center_horizontal,
            behavior: "smooth"
        });
    };

    /**
     * Limpia el contenido.
     */
    clearContent = () => document
        .querySelector(`.js-content${this.scope_sufix}`).innerHTML = "";

    /**
     * Abre o cierra el slider.
     */
    toggleSlider = () =>{ 
        document
            .querySelector(`.js-slider${this.scope_sufix}`)
            .classList.toggle(`${this.slider_selector}--in`);
        const panel = document.querySelector(`.js-slider${this.scope_sufix}`);
        if(this.isSliderOpen()){
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    };

    /**
     * Ejecuta `toggleSlider()` en el onclick
     */
    clickToggleSlider = () => document
        .querySelectorAll(`.js-close-slider${this.scope_sufix}`)
        .forEach(e => e.addEventListener("click", () => {
            this.clearContent();
            this.toggleSlider();
        }
    ));

    /**
     * Estado del slider.
     * 
     * @return {boolean} `true` si esta abierto, `false` si esta cerrado.
     */
    isSliderOpen = () => document
        .querySelector(`.js-slider${this.scope_sufix}`)
        .classList.contains(`${this.slider_selector}--in`);

    /**
     * Imprime la información del Punto Digital en el slider.
     * @param {object} data feature
     * @return {string} HTML del contenido del slider.
     */
    setContent = (data) => {
        this.focusOnSlider();
        if(!this.isSliderOpen()){
            this.toggleSlider();
        }
        const html = (typeof this.template == "function") ? 
            this.template(this, data) : this.defaultTemplate(this, data);
        document.querySelector(`.js-content${this.scope_sufix}`)
                .innerHTML = html;
    };

    /**
     * Foco en marker activo
     * 
     * @summary Hace foco en el slider cuando se hace *click* o 
     * *keypress* sobre un marker. La idea es que un usuario con lector 
     * de pantalla mueva el foto a la información.
     */
    focusOnSlider = () => {
        if(this.isSliderOpen()){
            document
                .getElementById(`js-anchor-slider${this.scope_sufix}`).focus();
        } else {
            const animation = document
                .querySelector(`.js-slider${this.scope_sufix}`);
            animation.addEventListener("animationend", () => {
                document
                    .getElementById(`js-anchor-slider${this.scope_sufix}`)
                    .focus();
            });
        }
    };

    /**
     * Mapea los headers.
     * 
     * @return {string} key - key del item.
     */
    header = (key) => {
        return (this.headers.hasOwnProperty(key) ? this.headers[key] : key);
    };

    /**
     * Crea el bloque html para el slider.
     */
    renderSlider = () => {
        document.querySelectorAll(`.js-slider${this.scope_sufix}`)
                .forEach(e => e.remove());
        const close_button = document.createElement("button");
        close_button.classList.add(
                "btn", "btn-xs", "btn-secondary", "btn-close", 
                `js-close-slider${this.scope_sufix}`);
        close_button.title = "Cerrar panel";
        close_button.setAttribute("role", "button");
        close_button.setAttribute("aria-label", "Cerrar panel de información");
        close_button.innerHTML = "<span class=\"sr-only\">Cerrar</span>✕";

        const anchor = document.createElement("a");
        
        anchor.setAttribute("tabindex", "3");
        anchor.id = `js-anchor-slider${this.scope_sufix}`;

        const content_container = document.createElement("div");
        content_container.classList.add("content-container");

        const content = document.createElement("div");
        content.classList.add("content", `js-content${this.scope_sufix}`);
        content_container.appendChild(content);

        const container = document.createElement("div");
        container.style.display = "none";
        container.setAttribute("role", "region");
        container.setAttribute("aria-live", "polite");
        container.setAttribute("aria-label", "Panel de información");
        container.classList.add("slider",`js-slider${this.scope_sufix}`);
        container.id = `slider${this.scope_sufix}`;
        container.appendChild(close_button);
        container.appendChild(anchor);
        container.appendChild(content_container);
        document.querySelector(`${this.scope_selector}.poncho-map`)
            .appendChild(container);
    };

    /**
     * Proyecta el slider y hace zoom en el marker.
     */
    showSlider = (layer, feature) => {
        if(layer.hasOwnProperty("_latlng")){
            this.map.setView(layer._latlng, this.map_anchor_zoom);
        } else {
            this.map.fitBounds(layer.getBounds());
        }
        layer.fireEvent("click");
    };

    /**
     * Proyecta el popUp y hace zoom en el marker.
     */
    showPopup = (layer) => {
        if(layer.hasOwnProperty("_latlng")){
            this.markers.zoomToShowLayer(layer, () => {
                layer.openPopup();
            });
        } else {
            this.map.fitBounds(layer.getBounds());
            layer.openPopup();
        }
    };

    /**
     * Borra el hash de la url
     * @returns {void}
     */
    removeHash = () => history.replaceState(null, null, ' ');

    /**
     * Si la URL tiene un valor por hash lo obtiene considerandolo su id.
     * @returns {void}
     */
    hasHash = () => {
        let id = window.location.hash.replace("#", "");
        return id || false;
    };

    /**
     * Obtiene un hash, hace zoom sobre el marker y abre su popUp o 
     * el slider.
     */
    gotoHashedEntry = () => {
        let id = this.hasHash();
        if(!id){
            return; 
        }
        this.gotoEntry(id);
    };

    /**
     * Muestra un marker pasándo por parámetro su id.
     * @param {string|integer} id Valor identificador del marker. 
     */
    gotoEntry = (id) => {
        const entry = this.entry(id);
        const setAction = (layer, id, entry) => {
            if(!layer.options.hasOwnProperty("id")){
                return;
            }
            if(layer.options.id == id){
                this.setSelectedMarker(id, layer);
                if(this.hash){
                    this.addHash(id);
                }
                if(this.slider && this.hash){
                    this.showSlider(layer, entry);
                } else {
                    this.showPopup(layer);
                }
            }
        };
        this.markers.eachLayer(layer => setAction(layer, id, entry));
        this.map.eachLayer(layer => {
            if(layer.hasOwnProperty("feature") && 
               layer.feature.geometry.type != "Point"){  
                setAction(layer, id, entry);
            }
        });
    };


    setClickeable = (layer) => {
        layer.on("keypress click", (e) => {
            document.querySelectorAll(".marker--active")
                    .forEach(e => e.classList.remove("marker--active"));
            
            ["_icon", "_path"].forEach(ele => {
                if(e.sourceTarget.hasOwnProperty(ele)){
                    e.sourceTarget[ele].classList.add("marker--active");
                }
            });
            const content = this.entries.find(e => {
                return e.properties[this.id]==layer.options.id;
            });
            this.setContent(content.properties);
        });
    };

    /**
     * Es un feature 
     * @param {object} layer Objeto Feature GeoJSON. 
     * @returns {boolean}
     */
    isFeature = (layer) => {
        if(!layer.hasOwnProperty("feature")){
            return false;
        }
        return true;
    };

    /**
     * Setea los features para ejecutarse en un evento onlick
     */
    clickeableFeature = () => {
        this.map.eachLayer(layer => {
            if(!this.isFeature(layer) || layer.feature.geometry.type == "Point"){
                return;
            }
            this.setClickeable(layer);
        });
    };

    /**
     * Setea los markers para ejecutarse en un evento onlick
     */
    clickeableMarkers = () => this.markers.eachLayer(this.setClickeable);

    /**
     * Setea los markers para ejecutarse en un evento onlick
     */   
    urlHash = () => {
        const setHash = (layer) => {
            layer.on("click", () => {
                this.addHash(layer.options.id);
            });
        }
        this.markers.eachLayer(setHash);
        this.map.eachLayer(layer => {
            if(!layer.hasOwnProperty("feature") || 
                    layer.feature.geometry.type == "Point"){
                return;
            }
            setHash(layer);
        });
    };

    /**
     * Remueve un elemento de una lista.
     * @param {object} list Array de elementos
     * @param {string} key Elemento a remover 
     */
    removeListElement = (list, key) => {
        const index = list.indexOf(key);
        if(index > -1){
            list.splice(index,1);
        }
        return list;
    };

    /**
     * Titulo para el default template
     * 
     * @summary El título puede tener un formato por defecto, tomando el
     * índice de la entrada seleccionada a tal fin en this.title, cuya
     * asignación es general y se utiliza para otras propiedades como:
     * texto alterantivo de los markers o title de un marker.
     *     También se puede especificar un title particular en la entrada
     * `template_structure.title`, ésta opción se ofrece como una 
     * alternativa que puede estar dada por el formato en el texto u
     * otras características consideradas por el editor. 
     *     Por último puede recibir de: this.template_header, una función
     * que retorne un html en formato string. Es importante tener en cuenta
     * que el uso de markdown y la insersión directa de html puedo producir
     * una vulnerabilidad XSS, tenga a bien asignar cuidadosamente el 
     * uso de estas opciones. 
     * @see https://showdownjs.com/docs/xss/#strip-html-tags-is-not-enough
     * @param {object} row Entrada 
     */
    templateTitle = (row) => {
        if(!row.hasOwnProperty(this.title)){
            return false;
        }
        const structure = this.template_structure;
        const structure_title = (structure.hasOwnProperty("title") ? 
            structure.title: false);
        const optons_title = (this.title ? this.title : false);
        // si intencionalmente no se quiere usar el titulo y se 
        // agrega la opción `false` en `template_structure.title`. 
        if(structure.hasOwnProperty("title") && 
            typeof structure.title == "boolean"){
            return false;
        } 
        // Si los dos son false, retorno false
        else if(!structure_title && !optons_title){
            return false;
        }
        // Defino el title que voy a usar.
        // template_structure.title tiene precedencia
        const use_title = (structure_title ? structure_title : optons_title);
        let title;
        if(this.template_header){
            const wrapper = document.createElement("div");
            wrapper.innerHTML = this.mdToHtml(this.template_header(this, row));
            title = wrapper;
        } else {
            title = document.createElement("h1");
            title.classList.add(... this.template_title_class_list);
            title.textContent = row[use_title];
        }

        const header = document.createElement("header");
        header.className = "header";
        header.appendChild(title);
        return header;
    };

    /**
     * Listado de keys para mostrar en una entrada del default template.
     * 
     * @summary Si el usuario configuró los valores en 
     * `template_structure.values` o `template_structure.exclude` se obtiene
     * el listado de índices, consideranto `values` con presedencia ante
     * `exclude` y retorna el objeto que se utilizará en `defaultTemplate()`.
     * @param {object} row Entrada de datos.
     * @return {object} Listado de índices seleccionados de la entrada.
     */
    templateList = (row) => {
        const estructura = this.template_structure;
        let lista = Object.keys(row);

        let list = lista;
        if(estructura.hasOwnProperty("values") && estructura.values.length > 0){
            list = estructura.values;
        } else if(estructura.hasOwnProperty("exclude") && 
                estructura.exclude.length > 0){
            for(const key of estructura.exclude){
                list = this.removeListElement(lista, key);
            }
        }

        return list;
    };

    /**
     * Convierte un texto a MarkDwon usando la librería showdown.
     * 
     * @summary Pregunta si está incluida la librería showdown. Si está
     * la usa y convierte el string, caso contrario retorna la entrada
     * sin procesar.
     * @param {string} text Texto a convertir 
     * @returns {string}
     * @see https://showdownjs.com/
     */
    mdToHtml = (text) => {
        if(this.template_markdown && this.markdownEnable()){
            const converter = new showdown.Converter(this.markdown_options);
            return converter.makeHtml(`${text}`.trim());
        }
        return text;
    }

    /**
     * Showdown habilitado.
     * 
     * Verifica si la librería _showdown_ está disponible.
     * @returns {boolean}
     */
    markdownEnable = () => {
        if(typeof showdown !== "undefined" && 
            showdown.hasOwnProperty("Converter")){
                return true;
        }
        return false;
    } 

    /**
     * Si el usuario usó la opción mixing reformulamos la entrada.
     * 
     * @summary La opción mixing, permite concatenar el valor de los
     * índices de la entrada asignados en el índice 
     * `template_structure.mixing.values`, utilizando como separador una
     * cadena de texto asignada en el índice 
     * `template_structure.mixing.separator`
     * @param {object} row Entrada del json 
     * @returns {object}
     */
    templateMixing = (row) => {
        if(this.template_structure.hasOwnProperty("mixing") && 
            this.template_structure.mixing.length > 0){
                const mixing = this.template_structure.mixing;

                let new_row = {}; 
                mixing.forEach(element => {
                    const {values, separator = ", ", key} = element;
                    if(typeof key === "undefined"){
                        throw "Mixing requiere un valor en la variable «key».";
                    }
                    new_row[key] = values
                        .map(i => row[i])
                        .filter(v => v)
                        .join(separator);
                });
                return Object.assign({}, row, new_row);
        }
        return row;
    };

    /**
     * Template por defecto
     * 
     * Arma un listado de datos usando la clave y el valor del objeto
     * pasado cómo argumento. 
     * @param {object} row Entrada para dibujar un marker.
     */  
    defaultTemplate = (self, row) => {
        const tpl_list = this.templateList(row);
        const tpl_title = this.templateTitle(row);
        const container = document.createElement("article");
        container.classList.add(... this.template_container_class_list);
        const definitions = document.createElement(this.template_dl);
        definitions.classList.add(...this.template_dl_class_list);
        definitions.style.fontSize = "1rem";
        row = this.templateMixing(row);

        for(const key of tpl_list){
            // excluyo los items vacíos.
            if(!row.hasOwnProperty(key) || !row[key]){
                continue;
            }

            const term = document.createElement(this.template_dt);
            term.classList.add("h6", "m-b-0")
            term.textContent = this.header(key);
            
            const definition = document.createElement(this.template_dd);
            definition.textContent = row[key];

            if(this.template_markdown){
                definition.innerHTML = this.mdToHtml(row[key]);
            } else if(this.template_innerhtml){
                definition.innerHTML = row[key];
            }

            if(this.header(key) != ""){
                definitions.appendChild(term);
            }
            definitions.appendChild(definition);
        };

        if(tpl_title){
            container.appendChild(tpl_title);
        }

        container.appendChild(definitions);
        return container.outerHTML;
    };

    /**
     * Icono con color Poncho.
     * 
     * @summary Retorna un marker SVG con color poncho. Por defecto se
     * utiliza el azul (primary), pero se puede cambiar el clor usando
     * el parámetro «color». Los colores están limitados a los cargados
     * en Drupal. 
     * @param {string} color Nombre del color según poncho colores. 
     * @see https://leafletjs.com/examples/custom-icons/
     * @returns {object}
     */
    icon = (color="azul") => {
        return new L.icon({
            iconUrl: `https://www.argentina.gob.ar/sites/default/files/` 
                    + `marcador-${color}.svg`,
            iconSize: [29, 40],
            iconAnchor: [14, 40],
            popupAnchor: [0, -37]
        });
    };

    /**
     * Resetea el mapa a su punto inicial por defecto.
     */
    resetView = () => this.map.setView(this.map_view, this.map_zoom);

    /**
     * Hace zoom hasta los límites de los markers
     */
    fitBounds = () => {
        try {
            this.map.fitBounds(this.markers.getBounds());
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * Agrega un botón entre zoom-in y zoom-out para volver a la vista
     * original. 
     */
    resetViewButton = () => {
        if(!this.reset_zoom){
            return;
        }
        // función a evaluar. Busca y remueve un botón de reset si existiera.
        document.querySelectorAll(
            `.js-reset-view${this.scope_sufix}`).forEach(e => e.remove());
        
        document
            .querySelectorAll(`${this.scope_selector} .leaflet-control-zoom-in`)
            .forEach(ele => {

            const icon = document.createElement("i");
            icon.classList.add("fa", "fa-expand");
            icon.setAttribute("aria-hidden","true");

            const button = document.createElement("a");
            button.classList.add(`js-reset-view${this.scope_sufix}`, 
                                "leaflet-control-zoom-reset");
            button.href = "#";
            button.title = "Zoom para ver todo el mapa";
            button.setAttribute("role", "button");
            button.setAttribute("aria-label", "Zoom para ver todo el mapa");
            button.appendChild(icon);
            button.onclick = (e) => {
                e.preventDefault();
                this.resetView();
            };
            ele.after(button);
        });
    };

    /**
     * Define el objeto icon.
     * @param {object} row entrada de json 
     * @returns {object} Instancia L.icon
     */
    marker = (row) => {
        // Si marker_color no viene o es null usa el marker por defecto 
        // de Open Street Map
        if(!this.marker_color || typeof this.marker_color === "boolean"){
            return null
        }
        if(typeof this.marker_color === "string"){
            return this.icon(this.marker_color);
        } else if (typeof this.marker_color(this, row) === "string"){
            const color = this.marker_color(this, row);
            return this.icon(color);
        } else if (typeof this.marker_color === "function"){
            return this.marker_color(this, row);
        }
    };

    /**
     * Remueve los layers y limpia los markers
     * #todo buscar una función similar a `markers.clearLayers`, que 
     * abarque los features.
     */
    clearLayers = () => {
        this.markers.clearLayers();
        this.map.eachLayer(e => {
            if(this.isFeature(e)){
                this.map.removeLayer(e);    
            }
        });
    };

    /**
     * Prepara las características del mapa y de cada uno de los markers.
     */
    markersMap = (entries) => { 
        var _this = this;
        this.clearLayers();
        new L.geoJson(entries, {
            pointToLayer: function(feature, latlng) {
                const {properties} = feature;
                let marker_attr = {};
                const icon = _this.marker(properties);
                marker_attr.id = properties[_this.id];
                if(icon){
                    marker_attr.icon = icon;
                }
                if(_this.title){
                    marker_attr.title = properties[_this.title];
                    marker_attr.alt = properties[_this.title];
                }
                const marker = new L.marker(latlng, marker_attr);
                _this.map.options.minZoom = 2;
                _this.markers.addLayer(marker);

                if(!_this.slider){
                    const html = (typeof _this.template == "function" ? 
                            _this.template(_this, properties) : 
                            _this.defaultTemplate(_this, properties));
                    marker.bindPopup(html);
                }
                
                return _this.markers;
            },
            onEachFeature: function(feature, layer){
                const {properties, geometry} = feature;
                layer.options.id = properties[_this.id];
                layer.options.title = properties[_this.title];
                if(!_this.slider && geometry.type != "Point"){
                    const html = (typeof _this.template == "function" ? 
                            _this.template(_this, properties) : 
                            _this.defaultTemplate(_this, properties));
                    layer.bindPopup(html);
                }
            },
            style: function(feature) {
                const {properties} = feature;
                const setProp = (key) => (properties.hasOwnProperty(key) ? 
                        properties[key] : _this.featureStyle[key]);
                return {
                    color: ponchoColor( setProp("stroke") ), 
                    strokeOpacity: setProp("stroke-opacity"), 
                    weight: setProp("stroke-width"), 
                    fillColor: ponchoColor( setProp("stroke") ), 
                    opacity:  setProp("stroke-opacity"), 
                    fillOpacity: setProp("fill-opacity"),

                };  
            }, 
            
        }).addTo(this.map);  
    };
    /**
     * Setea el marker activo.
     */
    setSelectedMarker = (id, instance) => {
        const val = {entry: this.entry(id), marker: instance};
        this.selected_marker = val;
        return val;
    };

    /**
     * Haciendo clic en un marker setea el marker como 
     * actualmente seleccionado.
     */
    selectedMarker = () => {
        // this.markers.eachLayer(layer => {
        this.map.eachLayer(layer => {
            if(!this.isFeature(layer)){
                return;
            }
            layer.on("click", (e) => {
                this.setSelectedMarker(layer.options.id, layer);
            });
        });
    };

    /**
     * Crea un input hidden dentro del contenedor poncho maps.
     * 
     * @summary El input se utiliza cuando está activada la clase 
     * PonchoMapsFilter y PonchoMapSearch cuando el usuario escribe sobre
     * el imput visible se copia el texto a este input y desde ahi se
     * toma el termino a buscar o filtrar.
     */
    hiddenSearchInput = () => {
        const search = document.createElement("input");
        search.type ="hidden";
        search.name = `js-search-input${this.scope_sufix}`;
        search.setAttribute("disabled", "disabled");
        search.id = `js-search-input${this.scope_sufix}`;
        const container = document
                .querySelectorAll(`${this.scope_selector}.poncho-map`);
        container.forEach(element => element.appendChild(search));
    }

    /**
     * ¡Experimental! Agrega anclas y enlaces para un menú accesible.
     * 
     * @summary El mapa es muy complicado de leer con un lector de 
     * pantalla. El contexto es dificil de entender. Estos enlaces 
     * ayudan a navegar dos o tres de los sectores que contienen y 
     * manejan información: los filtros, los markers y el control 
     * de zoom.
     * @todo Revisar el modo de activar el enlace para visualizar el 
     * slider cuando éste está visible. Como sugerencia se puede 
     * utilizar Aria para setear el estado, pero esto hay que 
     * chequearlo con expertos.
     * @see https://www.w3.org/WAI/standards-guidelines/aria/
     * @see https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics
     */
    accesibleMenu = () => {
        // Anclas que se deben crear.
        const anchors = [
            [
                `${this.scope_selector} .leaflet-marker-pane`, 
                `leaflet-marker-pane${this.scope_sufix}`, []
            ],
            [
                `${this.scope_selector} .leaflet-control-zoom`,
                `leaflet-control-zoom${this.scope_sufix}`,
                [
                    ["aria-label", "Herramientas de zoom"],
                    ["role", "region"],
                ]   
            ],
        ];
        anchors.forEach(anchor => {
            const element = document.querySelector(anchor[0]);
            element.id = anchor[1];
            anchor[2].forEach(e => element.setAttribute(e[0], e[1]));
        });

    // Enlace
    const values = [
            {
                "text" :"Ir a los marcadores del mapa",
                "anchor" : `#${anchors[0][1]}`
            },
            {
                "text": "Ir al panel de zoom",
                "anchor": `#${anchors[1][1]}` 
            }
        ]
        if(typeof this.filters !== "undefined"){
            values.push({
                "text" : "Ir al panel de filtros",
                "anchor": `#filtrar-busqueda${this.scope_sufix}`
            });
        }

        const ul = document.createElement("ul");
        ul.className = "sr-only";
        ul.setAttribute("aria-label", "Menú para el mapa");
        ul.setAttribute("role", "navigation");
        values.forEach((link, index) => {
            const a = document.createElement("a");
            a.textContent = link.text;
            a.setAttribute("tabindex", index + 1);
            a.href = link.anchor;
            const li = document.createElement("li");
            li.appendChild(a);
            ul.appendChild(li);
        });

        const navigation = document.querySelectorAll(`${this.scope_selector}`);
        navigation.forEach(element => {
            element.insertBefore(ul, element.children[0]);
        });
    };

    /**
     * Hace el render del mapa.
     */
    render = () => {
        this.hiddenSearchInput();
        this.resetViewButton();
        this.markersMap(this.entries);
        this.selectedMarker();

        if(this.slider){
            this.renderSlider();
            this.clickeableFeature();
            this.clickeableMarkers();
            this.clickToggleSlider();
        }

        if(this.hash){
            this.urlHash();
        }

        if(this.scroll && this.hasHash()){
            this.scrollCenter();
        }

        this.accesibleMenu();
        setTimeout(this.gotoHashedEntry, this.anchor_delay);
    };
};

/**
 * PONCHO MAP FILTER
 * 
 * @summary Generador de mapas con filtro utilizando
 * OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2022 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class PonchoMapFilter extends PonchoMap {
  constructor(data, options){
    super(data, options);

    const defaults = {
      "filters": [],
      "filters_visible": false,
      "filters_info": false,
      "search_fields":[],
      "messages": {
          "reset": "<a href=\"#\" class=\"{{reset_search}}\" "
          + "title=\"Reestablece el mapa a su estado inicial\">"
          + "Reestablecer mapa</a>",
          "initial": "Hay {{total_results}} puntos en el mapa.",
          "no_results_by_term": "No encontramos resultados para tu búsqueda. "
                  + "<a href=\"#\" class=\"{{reset_search}}\" "
                  + "title=\"Reestablece el mapa a su estado inicial\">"
                  + "Reestablecer mapa</a>",
          "no_results": "No se encontraron entradas. "
                  + "<a href=\"#\" class=\"{{reset_search}}\" "
                  + "title=\"Reestablece el mapa a su estado inicial\">"
                  + "Reestablecer mapa</a>",
          "results": "{{total_results}} resultados coinciden con tu búsqueda."
                  + " <a href=\"#\" class=\"{{reset_search}}\" " 
                  + "title=\"Reestablece el mapa a su estado inicial\">" 
                  + "Reestablecer mapa</a>",
          "one_result": "{{total_results}} resultado coincide con tu búsqueda."
                  + " <a href=\"#\" class=\"{{reset_search}}\" "
                  + "title=\"Reestablece el mapa a su estado inicial\">"
                  + "Reestablecer mapa</a>",
          "has_filters": "<i title=\"¡Advertencia!\" aria-hidden=\"true\" "
                  + "class=\"fa fa-warning text-danger\"></i> "
                  + "Se están usando filtros."
        }
    };
    let opts = Object.assign({}, defaults, options);
    this.filters = opts.filters;
    this.filters_info = opts.filters_info;
    this.filters_visible = opts.filters_visible;
    this.valid_fields = ["checkbox", "radio"];
    this.search_fields = opts.search_fields;
    this.messages = opts.messages;
  }

  /**
   * Parser de template simple
   * 
   * @param {string} value Cadena de texto a parsear
   * @param {object} kwargs Objeto con clave valor para hacer la sustitución.
   * @example
   * // returns Mi hija se llama Olivia.
   * tplParser("Mi hija se llama {{nombre}}.", {nombre:"Olivia"})
   * @returns {string} Cadena de texto con los *placeholders* reemplazados.
   */
  tplParser = (value, kwargs) => {
      return Object.keys(kwargs).reduce(function(str, key){
          const regex = new RegExp(
                '\\{\\{\\s{0,2}' + key + '\\s{0,2}\\}\\}', 'gm');
          str = str.replace(regex, kwargs[key]);
          return str;
      }, value);
  };

  /**
   * Mensajes de ayuda
   * 
   * @param {string} term Término buscado
   * @param {object} results Resultados de la búsqueda.
   * @returns {undefined}
   */
  helpText = (results) => {
      const help_container = document.querySelectorAll(
          `${this.scope_selector} .js-poncho-map__help`);
      help_container.forEach(element => {
          element.innerHTML = "";
          //
          const values = {
              "total_results": results.length,
              "total_entries": this.entries.length,
              "total_filtered_entries": this.filtered_entries.length,
              "filter_class": `js-close-filter${this.scope_sufix}`,
              "anchor": "#",
              "term": this.inputSearchValue,
              "reset_search": `js-poncho-map-reset${this.scope_sufix}`
          };

          // Arma el listado de mensajes.
          const ul = document.createElement("ul");
          ul.classList.add("m-b-0", "list-unstyled");
          ul.setAttribute("role", "region");
          ul.setAttribute("aria-live", "polite");
          const li = content => { 
              const item = document.createElement("li"); 
              item.innerHTML = content; 
              return item;
          };

          // Estado inicial. Totalidad de registros.
          if(values.total_entries === values.total_results){
              ul.appendChild(
                  li(this.tplParser(this.messages.initial, values))
              );
          }
          // 0 entradas con criterio de búsqueda.
          else if(values.total_results < 1){
              ul.appendChild(
                  li(this.tplParser(this.messages.no_results_by_term, values))
              );
          }
          // 0 entradas, sin creterio de búsqueda.
          else if(this.inputSearchValue === "" && values.total_results < 1){
              ul.appendChild(
                  li(this.tplParser(this.messages.no_results, values))
              );
          }
          // Si solo hay un resultado
          else if(values.total_results == 1){
              ul.appendChild(
                  li(this.tplParser(this.messages.one_result, values))
              );
          }
          // Si hay más de un resultado
          else if(values.total_results > 1){
              ul.appendChild(
                  li(this.tplParser(this.messages.results, values))
              );
          }
          // Si los resultados están siendo filtrados.
          // if(!this.usingFilters()){
          //     ul.appendChild(
          //         li(this.tplParser(this.messages.has_filters, values))
          //     );
          // }
          element.appendChild(ul);
      });
  };

  /**
   * Obtiene el índice y el grupo del filtro
   * @param {string} str Input name attribute.
   * @example
   * // returns 1
   * dilter_position("name__1")
   * @returns {string}
   */
  filterPosition = (str) => {
      const regex = /^([\w\-]+?)(?:__([0-9]+))(?:__([0-9]+))?$/gm;
      const rgx = regex.exec(str);
      return (rgx ? [rgx[1], rgx[2]] : null);
  };

    /**
     * Estado del slider.
     *
     * @return {boolean} true si esta abierto, false si esta cerrado.
     */
    isFilterOpen = () => document
        .querySelector(`.js-poncho-map-filters${this.scope_sufix}`)
        .classList.contains("filter--in");

    /**
     * Abre o cierra el panel de filtros.
     */
    toggleFilter = () => {
        document
            .querySelector(`.js-poncho-map-filters${this.scope_sufix}`)
            .classList.toggle("filter--in");
    };

  /**
   * Altura para el contenedor de filtros.
   *
   * @summary En función de la altura del mapa y del tamaño y posición
   * del botón de filtro y su contenedor, se calcula el tamaño que tiene
   * el *popup* que contiene los inputs para los filtros. La idea es que,
   * si se configuraran muchos filtros se active la función
   * `overflow:auto` en la hoja de estilos.
   * @todo calcular el valor de `container_position_distance` e 
   * `inner_padding` dinámicamente.
   * @return {undefined}
   */
  filterContainerHeight = () => {    
    const filter_container = document
          .querySelector(`.js-filter-container${this.scope_sufix}`);
    const filter_button = document
          .querySelector(`.js-close-filter${this.scope_sufix}`);

    const poncho_map_height = filter_container.offsetParent.offsetHeight;
    // Valor tomado de la hoja de estilos
    const container_position_distance = 20;
    const filters_height = poncho_map_height
          - filter_container.offsetTop
          - filter_button.offsetHeight
          - container_position_distance;

    const pos = document
          .querySelector(`.js-poncho-map-filters${this.scope_sufix}`);
    pos.style.maxHeight = `${filters_height}px`;

    // Valor tomado de la hoja de estilos
    const inner_padding = 45;
    const height = pos.offsetHeight - inner_padding;
    const filters = document.querySelector(`.js-filters${this.scope_sufix}`);
    filters.style.height = `${height}px`;
    filters.style.overflow = "auto";
  }
      
  /**
   * Ejecuta toggle en el onclick
   */
  clickToggleFilter = () => document
      .querySelectorAll(`.js-close-filter${this.scope_sufix}`)
      .forEach(element => element.onclick = (event) => {
            event.preventDefault();
            this.toggleFilter();
            this.filterContainerHeight();
      });

  /**
   * Prepara el objeto para los filtros.
   *
   * >>> setFilter("clave")
   * ["clave", "elemento-unico", ["elemento-unico"], "checked"]
   */
  setFilter = (args) => {
      const [key, status = "checked"] = args;
      const obj = [...new Set(this.entries.map(entry => entry.properties[key]))]
          .map(item => [key, item, [item], status]);
      obj.sort((a, b) => a[1] - b[1]);
      return obj;
  };

  /**
   * Retorna el tipo de filtro seleccionado por el usuario.
   * 
   * @summary Hay dos modos de configurar filtros
   * template_structure.filters.fields y template_structure.filters.field
   * @example
   * Fields, peromite configurar manualmente el listado de entradas por
   * las cuales se va a realizar la búsqueda:
   *   [
   *     {label},
   *     {índice entrada},
   *     [{valor a buscar 1},
   *     {valor a buscar 2}],
   *     {status:"checked"|boolean}
   *   ]
   * 
   * ["tipo", "Archivo provincial", ["Archivo provincial"], "checked"],
   * @example
   * — Field, permite asignar el índice por el cual se quiere filtrar,
   * el programa hace un UNIQUE de los elementos del indice (o columna),
   * y genera un checkbox (o radio), por cada una de los resultados.
   *   [
   *     {indice entrada},
   *     {status:"checked"|boolean}
   *   ]
   * Ejemplo:
   *   ["tipo"]
   * o, si se desean todos los checkbox desmarcados.
   *   ["tipo", false]
   */
  fieldsToUse = (fields_items) => {
    const {fields: opt_fields = false, field: opt_field = false} = fields_items;
    if(!opt_fields && !opt_field){
        throw "Los filtros requieren el legend y fields o field";
    }
    const fields_to_use = (opt_fields ? opt_fields : this.setFilter(opt_field));
    return fields_to_use
  };

  /**
   * Arma un grupo de inputs
   *
   * @param {object} fields_items Listado de opciones para los fields.
   */
  fields = (fields_items, group) => {
    const fields_container = document.createElement("div");
    fields_container.classList.add("field-list", "p-b-1");

    const fields_to_use = this.fieldsToUse(fields_items);

    for(const key in fields_to_use){

        const field = fields_to_use[key];
        const input = document.createElement("input");
        input.type = (this.valid_fields.includes(fields_items.type) ?
        fields_items.type : "checkbox");
        input.id = `id__${field[0]}__${group}__${key}`;
        if(fields_items.type == "radio"){
          input.name = `${field[0]}__${group}`;
        } else {
          input.name = `${field[0]}__${group}__${key}`;
        }

        input.className = "form-check-input";
        input.value = key;
        if(typeof field[3] !== "undefined" && field[3]=="checked"){
            input.setAttribute("checked", "checked");
        }

        const label = document.createElement("label");
        label.style.marginLeft = ".33rem";
        label.textContent=field[1];
        label.className = "form-check-label";
        label.setAttribute("for", `id__${field[0]}__${group}__${key}`);
        const info = document.createElement("span");
        info.dataset.info = `${field[0]}__${group}__${key}`;
        label.appendChild(info);

        const field_container = document.createElement("div");
        field_container.className = "form-check";
        field_container.appendChild(input);
        field_container.appendChild(label);

        fields_container.appendChild(field_container);
    }

    const fieldset = document.createElement("div");
    fieldset.appendChild(fields_container);
    return fieldset;
  };

  /**
   * Crea el botón para los filtros
   */
  filterButton = () => {
    const filter_icon = document.createElement("i");
    filter_icon.setAttribute("aria-hidden", "true");
    filter_icon.classList.add("fa", "fa-filter");

    const button_text = document.createElement("span");
    button_text.textContent = "Abre o cierra el filtro de búsqueda";
    button_text.classList.add("sr-only");

    const button = document.createElement("button");
    button.classList.add("btn","btn-secondary","btn-filter",
                        `js-close-filter${this.scope_sufix}`);
    button.id = `filtrar-busqueda${this.scope_sufix}`
    button.appendChild(filter_icon);
    button.appendChild(button_text);
    button.setAttribute("role", "button");
    button.setAttribute("aria-label", "Abre o cierra el filtro de búsqueda");
    button.setAttribute("aria-controls", `poncho-map-filters${this.scope_sufix}`);

    const button_container = document.createElement("div");
    button_container.classList.add(`js-filter-container${this.scope_sufix}`, 
                                  "filter-container");

    if(this.reset_zoom)
        button_container.classList.add("filter-container--zoom-expand");

    button_container.appendChild(button);

    const container = document
          .querySelector(`.poncho-map${this.scope_selector}`);
    container.appendChild(button_container);
  }

  /**
   * Crea el contenedor para los filtros.
   */
  filterContainer = () => {
      const fields_container = document.createElement("div");
      fields_container.className = `js-filters${this.scope_sufix}`;  

      const close_button = document.createElement("button");
      close_button.classList.add("btn", "btn-xs", "btn-secondary", "btn-close", 
                                `js-close-filter${this.scope_sufix}`);
      close_button.title = "Cerrar panel";
      close_button.setAttribute("role", "button");
      close_button.setAttribute("aria-label", "Cerrar panel de filtros");
      close_button.innerHTML = "<span class=\"sr-only\">Cerrar </span>✕";

      const form = document.createElement("form");
      form.classList.add(`js-formulario${this.scope_sufix}`);
      form.appendChild(close_button); 
      // form.appendChild(search); 
      form.appendChild(fields_container); 

      const container = document.createElement("div");
      container.classList.add(`js-poncho-map-filters${this.scope_sufix}`,
                              "poncho-map-filters");
      container.setAttribute("role", "region");
      container.setAttribute("aria-live", "polite");
      container.setAttribute("aria-label", "Panel de filtros");
      container.id = `poncho-map-filters${this.scope_sufix}`;

      if(this.filters_visible){
          container.classList.add("filter--in");
      }

      container.appendChild(form); 
      document.querySelectorAll(`.js-filter-container${this.scope_sufix}`)
          .forEach(element => element.appendChild(container));

  };

  /**
   * Crea los checkbox para los filtros.
   */
  createFilters = (data) => {
      const form_filters = document
            .querySelector(`.js-filters${this.scope_sufix}`);

      data.forEach((item, group) => {
          let legend = document.createElement("legend");
          legend.textContent = item.legend;
          legend.classList.add("m-b-1", "text-primary", "h6")
          let fieldset = document.createElement("fieldset");
          fieldset.appendChild(legend);
          fieldset.appendChild(this.fields(item, group));
          form_filters.appendChild(fieldset);
      });
  };

  /**
   * Obtengo los checkbox marcados.
   */
  formFilters = () => {
    if(this.filters.length < 1){
        return [];
    }
    const form_filters = document
          .querySelector(`.js-formulario${this.scope_sufix}`);
    const form_data = new FormData(form_filters);

    return Array.from(form_data).map(ele => {
        let val = [];
            const pos = this.filterPosition(ele[0]);
            val = [parseInt(pos[1]), parseInt(ele[1]), pos[0]];
        return val;
    });
  };

  /**
   * Configuración de estado de los filtros seteados por el usuario.
   * @returns {object}
   */
  defaultFiltersConfiguration = () => {
      // Obtengo todos los filtros y los colecciono en un array.
      const filters = this.filters.map((g, gk) => {
          const fields = this.fieldsToUse(g);
          const conf_fields = fields.map((f, fk) => {
              return [
                  gk, fk, f[0], 
                  (typeof f[3] !== "undefinded" && f[3] == "checked" ?
                        true : false)
              ];
          });
          return conf_fields;
      }).flat();
      return filters;
  };

  /**
   * Verifica si se están filtrando los datos.
   * @return {boolean}
   */
  usingFilters = () => {
      const result = this.defaultFiltersConfiguration().every(
          (e) => {
            return document
                  .querySelector(`#id__${e[2]}__${e[0]}__${e[1]}`)
                  .checked;
      });
      return result;
  };

  /**
   * Reestablece los filtros a la configuración creada por el usuario.
   * @return {void}
   */
  resetFormFilters = () => {
    this.defaultFiltersConfiguration().forEach(e => {
        const field = document.querySelector(`#id__${e[2]}__${e[0]}__${e[1]}`);
        field.checked = e[3];
    });
  };

  /**
   * Value del input hidden (search)
   * @returns {string|boolean} Valor en el input *hidden* o false.
   */
  get inputSearchValue(){
      const search_value = document
            .querySelector(`#js-search-input${this.scope_sufix}`);
      const result = search_value.value.trim();
      if(result !== ""){
          return result;
      }
      return false;
  }

  /**
   * Total de ocurrencias por clave y valor sobre entradas dadas.
   * @param {object} feature Entradas
   * @param {array} val Array con los elementos a buscar.
   * @param {string} index Clave de la entrada de datos.
   * @returns {integer} Total de ocurrencias. 
   */
  countOccurrences = (feature, val, index) => {
    const ocurrences = feature.reduce((a, v) => {
        return val.some(e => v.properties[index].includes(e)) ? a + 1 : a
    }, 0);
    return ocurrences;
  };

  /**
   * Total de resultados por filtro marcado.
   * @returns {Array} — retorna un array estructurado del siguiente modo:
   * ```
   *      [
   *        {nombre del filtro},
   *        {total coincidencias},
   *        {indice de grupo de filtros},
   *        {indice input dentro del grupo}
   *      ]
   * ```
   */
  totals = () => {
    const results = this.formFilters().map(e => {
        const item = this.fieldsToUse( this.filters[e[0]] )[e[1]];
        return [
            item[1],
            this.countOccurrences(this.filtered_entries, item[2], item[0]),
            ...e
        ];
    });
    return results;
  };

  /**
   * **¡EXPERIMENTAL!** Agrega un title con el total de elementos en 
   * el panel de filtros.
   */
  totalsInfo = () => {
      if(!this.filters_info){
          return "";
      }
      this.totals().forEach(field => {
          const element = document.querySelector(
                  `${this.scope_selector}`
                  +` [data-info="${field[4]}__${field[2]}__${field[3]}"]`);
          const plurals = (field[1] < 2 ? "resultado" : "resultados");
          element.innerHTML = 
              ` <i 
                    style="cursor:help; opacity:.75;" 
                    class="fa fa-info-circle small text-info" 
                    aria-hidden="true" title="${field[1]} ${plurals}"></i>
                <span class="sr-only">
                    . <em>${field[1]} ${plurals} coiciden con este filtro.</em>
                </span>`;
      });
  };

  /**
   * Valida una entrada
   * @summary
   * 1. Obtengo la cantidad de grupos que tengo.
   * 2. Evaluo los fields de cada grupo y junto los resultados en un array
   * para retornar true los grupos tienen que dar true
   * @returns {boolean}
   */
  _validateEntry = (row, form_filters) => {
      const fields_group = (group) => form_filters.filter(e => e[0] == group);
      // Reviso cuantos grupos tengo que validar.
      const total_groups = this.filters.length;
      let validations = [];
      for(let i = 0; i < total_groups; i++){
          // por cada grupo de fields obtengo un resultado de grupo.
          validations.push(this._validateGroup(row, fields_group(i)));
      }
      return validations.every(e => e);
  };

  /**
   * Valida el campo de un grupo.
   * @param {object} row 
   * @param {integer} group 
   * @param {integer} index 
   * @returns {object}
   */
  _search = (row, group, index) => {
      const filter = this.fieldsToUse(this.filters[group])[index];
      const search_for = filter[2];
      const found = search_for.filter(i => i).some(e => 
        {
          if(row.hasOwnProperty(filter[0])){
            return row[filter[0]].includes(e)
          }
        }
        
        );
      return found;
  };

  /**
   * Valida los fields del grupo.
   * @return boolean
   */
  _validateGroup = (row, fields_group) => {
      const result = fields_group.map(
          e => this._search(row, e[0], e[1])
      );
      return result.some(e => e);
  };

  /**
   * Filtra los markers.
   */ 
  filterData = () => {
      const available_filters = this.formFilters();
      let feed = this.entries.filter(
          entry => this._validateEntry(entry.properties, this.formFilters())
      );
      feed = this.searchEntry(this.inputSearchValue, feed);
      feed = (this.filters.length < 1 || 
              available_filters.length > 0 ? feed : []);
      this.filtered_entries = feed;
      return feed;
  };

  /**
   * Render de funciones 
   */ 
  filteredData = (feed) => {
      feed = (typeof feed !== "undefined" ? this.entries : this.filterData());
      this.markersMap(feed); 
      this.selectedMarker();
      this.helpText(feed);
      this.resetSearch();
      this.clickToggleFilter();
      if(this.slider){
          this.renderSlider();
          this.clickeableMarkers();
          this.clickeableFeature();
          this.clickToggleSlider();
      }

      if(this.hash){
          this.urlHash();
      }
  };

  /**
   * Borra los valores del search input en el campo de filtros.
   */
  clearSearchInput = () => document
      .querySelectorAll(`#js-search-input${this.scope_sufix}`)
      .forEach(element => element.value = "");

  /**
   * Filtra los markers en el onchange de los filtros
   * @returns {void}
   */
  resetSearch = () => document
      .querySelectorAll(`.js-poncho-map-reset${this.scope_sufix}`)
          .forEach(e => {
              e.onclick = (event => {
                  event.preventDefault();
                  this.resetFormFilters();
                  this.filteredData(this.entries);
                  this.clearSearchInput();
                  this.resetView();
          });
  });

  /**
   * Cambia la lista de markers en función de la selección de 
   * los filtros en PonchoMapFilter.
   * @TODO Ver el modo de hacer focus sobre el scope
   * @returns {void}
   */
  filterChange = (callback) => document
      .querySelectorAll(`.js-filters${this.scope_sufix}`)
      .forEach(element => {
          element.onchange = (callback);
  });

  /**
   * imprime el mapa
   */ 
  render = () =>{
    this.hiddenSearchInput();
    this.resetViewButton(); 

    if(this.filters.length > 0){
        this.filterButton();
        this.filterContainer();
        this.createFilters(this.filters);
    }

    this.filteredData();
    this.totalsInfo();
    if(this.scroll && this.hasHash()){
        this.scrollCenter();
    }

    this.filterChange((event) => {
        event.preventDefault();
        this.filteredData();
    })

    setTimeout(this.gotoHashedEntry, this.anchor_delay);
    if(this.filters_visible){
        this.filterContainerHeight();
    }
    this.accesibleMenu();
  };
};
// end of class

/**
 * PONCHO MAP SEARCH
 * 
 * @summary Busca marcadores 
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap, 
 * PonchoMapFilter
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2022 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class PonchoMapSearch {
    constructor(instance, options){
        const defaults = {
            "scope": false,
            "template": false,
            "allow_clear": false,
            "placeholder": "Su búsqueda",
            "theme": "poncho",
            "minimum_input_length": 0,
            "search_fields": instance.search_fields,
            "sort": true,
            "sort_reverse": false,
            "sort_key": "text",
        };
        this.instance = instance;
        let opts = Object.assign({}, defaults, options);
        this.theme = opts.theme;
        this.template = (
              typeof(opts.template) === "function" ? opts.template: false);
        this.text = (instance.title ? instance.title : false);
        this.placeholder = opts.placeholder;
        this.allow_clear = opts.allow_clear;
        this.scope = opts.scope;
        this.sort_key = opts.sort_key;
        this.minimum_input_length = opts.minimum_input_length;
        this.sort = opts.sort;
        this.sort_reverse = opts.sort_reverse;
        this.search_scope_selector = (
          this.scope ? `[data-scope="${this.scope}"]`: "");
        this.instance.search_fields = opts.search_fields;
    };

    /**
     * Ordena un listado de objetos.
     * @param {object} entries - Array de objetos.
     * @param {string} key - Clave por la que se quiere ordenar. 
     * @returns {object} - Entradas ordenadas
     */
    sortData = (entries, key) => {
      let order = entries.sort((a, b) => {
        const clearString = e => this.instance.removeAccents(e).toUpperCase();
        if (clearString(a[key]) < clearString(b[key])){
          return -1;
        }

        if (clearString(a[key]) > clearString(b[key])){
          return 1;
        }

        return 0;
      });

      if(this.sort_reverse){
        return order.reverse();
      }      
      return order;
    };

    /**
     * Prepara las entradas para la búsqueda
     * @param {object} entries 
     */
    dataSelect = (entries) => {
        return entries.map( (e) => {
            let entry = {id: e[this.instance.id], text: e[this.text]};
            entry.html = (this.template ? this.template(this, e) : e[this.text]);
            return ({...e, ...entry, ...{selected:false}});
        });
    };

    /**
     * Prepara el listado de entradas que se utilizará para la búsqueda.
     * @returns {object}
     */
    dataset = () => {
        const data = ((this.instance instanceof PonchoMapFilter) ? 
                      this.instance.filtered_entries : this.instance.entries);
        let data_select = this.dataSelect(this.sortData(data, this.sort_key));

        if(!this.sort){
            data_select = this.dataSelect(data);
        }
        return data_select;
    };

    /**
     * Ejecuta una búsqueda desde un input text
     * @returns 
     */
    triggerSearch = () => {
        const input = document.querySelector(
            `${this.search_scope_selector} .js-poncho-map-search__input`);
        const submit = document.querySelectorAll(
                `${this.search_scope_selector} .js-poncho-map-search__submit`);

        submit.forEach(e => {
            e.onclick = (event => {
                event.preventDefault();
                const element = document.querySelector(
                      `#js-search-input${this.instance.scope_sufix}`);
                element.value = input.value;
                const term = input.value;
                this.renderSearch(term);
            });
        });
    };

    /**
     * en el keyup copia el value al input hidden de filtros.
     */
    keyup = () => {
        const input = document.querySelectorAll(
              `${this.search_scope_selector} .js-poncho-map-search__input`);
        input.forEach(ele => {

            const filter_search_input = document.querySelector(
                `#js-search-input${this.instance.scope_sufix}`);
            ele.onkeyup = (() => {
              filter_search_input.value = ele.value;
            });
            ele.onkeydown = (() => {
              filter_search_input.value = ele.value;
            });
        });
    };

    /**
     * Límpia del input search el término de búsqueda.
     * @returns {undefined}
     */
    cleanInput = () => document
        .querySelector(
            `${this.search_scope_selector} .js-poncho-map-search__input`)
        .value = "";

    /**
     * Agrega el placeholder si fué seteado en las opciones.
     * @returns {undefined}
     */
    placeHolder = () => {
        if(!this.placeholder){
            return "";
        }
        document.querySelectorAll(
              `${this.search_scope_selector} .js-poncho-map-search__input`)
            .forEach(element => element.placeholder = this.placeholder.toString());
    };

    /**
     * Vacía el contenido del elemento que contiene los textos de ayuda.
     * @returns {undefined}
     */
    cleanHelpText = () => document
        .querySelector(
            `${this.instance.scope_selector} .js-poncho-map__help`)
        .innerHTML = "";

    /**
     * Hace una búsqueda basado en el término escrito en el input de
     * búsqueda.
     */
    renderSearch = (term) => {
        const entries = this.instance.filterData();
        // Renderizo el mapa
        // @see PonchoMap
        this.instance.markersMap(entries); 
        if(this.instance.slider){
            this.instance.renderSlider();
            this.instance.clickeableFeature();
            this.instance.clickeableMarkers();
            this.instance.clickToggleSlider();
        }

        if(this.instance.hash){
            this.instance.urlHash();
        }
        // Alejo el mapa a su posición por defecto.
        // @see PonchoMap resetView()
        this.instance.resetView();
        // Si la búsqueda encontró una sola entrada, voy a esa
        // entrada y muestro la info, ya sea un popUp o un slider.
        // Si hay más de una entrada muestro los markers y hago 
        // zoom abarcando el límite de todos ellos.
        if(entries.length == 1){
            this.instance.gotoEntry(entries[0].properties[this.instance.id]);
        } else if(term.trim() != "") {
            this.instance.removeHash();
            setTimeout(this.instance.fitBounds, 350);
        }

        this.instance.helpText(entries);
        this.instance.resetSearch();
        this.instance.clickToggleFilter();
    };

    /**
     * Agrega options en el claslist del input de búsqueda.
     * ```
     * <datalist>
     *     <option>Agregado 1</option>
     *     <option>Agregado 2</option>
     *     ...
     * </datalist>
     * ```
     */
    addDataListOptions = () => document
        .querySelectorAll(
            `${this.search_scope_selector} #js-porcho-map-search__list`)
        .forEach(element => {
            element.innerHTML = new Date();
            const options = (content) => {
                const opt = document.createElement("option"); 
                opt.textContent = content; 
                return opt;
            };
            this.instance.filtered_entries.forEach(e => 
                element.appendChild(options(e.properties[this.text]))
            );
    });

    /**
     * Agrega el aria role y aria labe al grupo de buscador.
     */
    searchRegion = () => {
        const element = document.querySelector(this.search_scope_selector);
        element.setAttribute("role", "region");
        element.setAttribute("aria-label", "Buscador");
    };

    /**
     * Ejecuta el componente select2 y activa el listener de los filtros.
     */
    render = () => {
        this.placeHolder();
        this.triggerSearch();
        this.addDataListOptions();
        this.instance.filterChange((event) => {
            event.preventDefault();
            this.instance.filteredData();
            this.addDataListOptions();
        })
        this.searchRegion();
        this.keyup();
    }  
};

/**
 * Helpers para manejar los json provenientes de Google Sheets.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 */
class GapiSheetData {
    constructor(options){
        const defaults = {
            "gapi_key": "AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY",
        };
        let opts = Object.assign({}, defaults, options);
        this.gapi_key = opts.gapi_key;
    }

    /**
     * URI para obtener el json de google sheet.
     * 
     * @param {string} page Nombre de la página a obtener.
     * @param {string} spreadsheet Id del documento Google Sheet.
     * @param {string} api_key Google API Key.
     * @returns {string} URL
     */
    url = (page, spreadsheet, api_key) => {
        const key = (typeof api_key !== "undefined" ? api_key : this.gapi_key);
        return [
            "https://sheets.googleapis.com/v4/spreadsheets/",
            spreadsheet, "/values/", page, "?key=", key, "&alt=json"
        ].join("");
    };

    /**
     * Retorna los elemento del json
     */
    json_data = (json) => {
        const feed = this.feed(json);
        return {
            "feed": feed,
            "entries": this.entries(feed),
            "headers": this.headers(feed)
        };
    };

    /**
     * Retorna con una estructura más cómoda para usar
     * @param {object} response Feed Json 
     * @returns {object}
     */
    feed = (response) => {
        const keys = response.values[0];
        const regex = / |\/|_/ig;
        let entry = [];

        response.values.forEach((v, k) => {
            if(k > 0){

            let zip = {};
            for(var i in keys){
                var d = (v.hasOwnProperty(i))? v[i].trim() : "";
                zip[`${ keys[i].toLowerCase().replace(regex, "") }`] = d;
            }
            entry.push(zip);
            }
        });
        return entry;
    };

    /**
     * Variables.
     */
    gapi_feed_row = (data, separator="-", filter_prefix=true) => {
        const prefix = filter_prefix ? "filtro-" : "";
        const feed_keys = Object.entries(data);
        const clean = k => k.replace("gsx$", "")
                            .replace(prefix, "").replace(/-/g, separator);
        let list = {};
        feed_keys.map(v => list[clean(v[0])] = v[1]["$t"]);
        return list;
    };

    /**
     * Retrona las entradas excluyendo el primer row, ya que pertenece a los headers.
     * @param {object} feed 
     * @returns {object}
     */
    entries = (feed) => {
        return  feed.filter((v,k) => k > 0);
    };

    /**
     * Obtiene el primer row que es igual a los headers.
     * @param {*} feed 
     * @returns 
     */
    headers = (feed) => {
        return feed.find((v,k) => k == 0);
    };
};



/* module.exports REMOVED */