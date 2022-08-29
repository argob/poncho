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

var content_popover = document.getElementById('content-popover');
function popshow(){
 content_popover.classList.toggle('hidden');
}
function pophidde(){
 content_popover.classList.add('hidden');
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
              codigoColor = '#2897d4';
              break;
          case 'verde':
              codigoColor = '#2e7d33';
              break;
          case 'rojo':
              codigoColor = '#c62828';
              break;
          case 'amarillo':
              codigoColor = '#f9a822';
              break;
          case 'azul':
              codigoColor = '#0072bb';
              break;
          case 'negro':
              codigoColor = '#333';
              break;
          case 'uva':
              codigoColor = '#6a1b99';
              break;
          case 'gris':
              codigoColor = '#525252';
              break;
          case 'grisintermedio':
              codigoColor = '#f2f2f2';
              break;
          case 'celesteargentina':
              codigoColor = '#37bbed';
              break;
          case 'fucsia':
              codigoColor = '#ec407a';
              break;
          case 'arandano':
              codigoColor = '#c2185b';
              break;
          case 'uva':
              codigoColor = '#6a1b99';
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
          case 'maíz':
              codigoColor = '#ffce00';
              break;
          case 'tomate':
              codigoColor = '#ef5350';
              break;
          case 'naranjaoscuro':
              codigoColor = '#EF6C00';
              break;
          case 'verdeazulado':
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
              codigoColor = '#066';
              break;
          case 'verdealoe':
              codigoColor = '#4fbb73';
              break;
          case 'verdecemento':
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

//#####################################################################
//####################### GAPI LEGACY #################################
//#####################################################################
/**
 * Retorna la estructura de la versión 3 de la API GoogleSheets.
 *
 * La estructura del objeto que retorna es de este modo:
 *  .
 *  \--feed
 *      \-- entry
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 *
 * @param  {object} response Response JSON.
 * @return {void}
 */
 function gapi_legacy(response){

  const keys = response.values[0];
  const regex = / |\/|_/ig;
  let entry = [];

  response.values.forEach((v, k) => {
    if(k > 0){

      let zip = {};
      for(var i in keys){
        var d = (v.hasOwnProperty(i))? v[i].trim() : "";
        zip[`gsx$${ keys[i].toLowerCase().replace(regex, '') }`] = {"$t": d};
      }
      entry.push(zip);
    }
  });

  return {"feed": {"entry": entry}};
}

//#####################################################################
//########################### PONCHO MAP ##############################
//#####################################################################

/**
 * PONCHO MAP
 * 
 * @summary Generador de mapas utilizando OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, august 2022
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css
 */
class PonchoMap {
  constructor(data, options){
    this.data = data;
    // Confs
    const defaults = {
        'template': (self, element) => this.default_template(self, element),
        'template_structure': {},
        'template_container_class_list':['info-container'],
        'template_title_class_list':['h4','title'],
        'template_dl_class_list':['definition-list'],
        'template_innerhtml': false,
        'scope': '',
        'slider': false,
        'scroll': false,
        'hash': false,
        'headers': {},
        'map_selector': 'map',
        'anchor_delay':0,
        'slider_selector': '.slider',
        'slider_close_selector': '.js-close-slider',
        'map_view': [-40.44, -63.59],
        'map_anchor_zoom':16,
        'map_zoom':4,
        'id': 'id',
        'latitud':'latitud',
        'longitud':'longitud',
        'marker': 'azul',
        'marker_cluster_options': {
            'spiderfyOnMaxZoom': true,
            'showCoverageOnHover': false,
            'zoomToBoundsOnClick': true,
            'maxClusterRadius': 10,
            'spiderfyDistanceMultiplier': 1.5,
            'spiderLegPolylineOptions': {
                'weight': 1,
                'color': "#666",
                'opacity': 0.5,
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
    this.latitud = opts.latitud;
    this.longitud = opts.longitud;
    this.slider = opts.slider;
    this.slider_selector=this.selector_name(opts.slider_selector);
    this.slider_close_selector = opts.slider_close_selector;

    // OSM
    this.map = new L.map(this.map_selector,{preferCanvas: true})
        .setView(this.map_view, this.map_zoom);
    new L.tileLayer(
        'https://gis.argentina.gob.ar/osm/{z}/{x}/{y}.png', 
        { attribution: `&copy; Contribuidores <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`}
    ).addTo(this.map);
    this.markers = new L.markerClusterGroup(this.marker_cluster_options);
    //
    this.scope_selector = `[data-scope="${this.scope}"]`;
  }

  /**
  * JSON input
  * @return {object}
  */
  get json_data(){
    return this.data;
  }

  /**
  * Obtiene una entrada por su id
  * @property {integer} id - Id de Punto Digital
  * @return {object}
  */
  entry = (id) => {
    return this.json_data.find(v => v[this.id]==id);
  }

  /**
   * Quita la definición a un selector.
   * 
   * @param {string} selector - Selector a quitarle la definición.
   * @return {string}
   * 
   * >>> selector_name('.foo')
   * 'foo'
   * >>> selector_name('#foo')
   * 'foo'
   */
  selector_name = (selector) => {
    return selector.replace(/^(\.|\#)/, '');
  };

  /**
   * Acomoda la pantalla ubicando el mapa en el borde superior del 
   * navegador.
   */
  scroll_center = () => {
    const pos = document.getElementById(this.map_selector);
    const rect = pos.getBoundingClientRect();
    const pos_center_horizontal = (pos.offsetLeft + pos.offsetWidth) / 2;
    const pos_center_vertical =  rect.top + window.scrollY;
    window.scrollTo({
        top: pos_center_vertical,
        left: pos_center_horizontal,
        behavior: 'smooth'
    });
  };

  /**
   * Limpia el contenido.
   */
  clear_content = () => document
        .querySelector(`${this.scope_selector} .js-content`).innerHTML = '';

  /**
   * Abre o cierra el slider.
   */
  toggle_slider = () => document
        .querySelector(`${this.scope_selector} .${this.slider_selector}`)
        .classList.toggle(`${this.slider_selector}--in`);

  /**
   * Ejecuta toggle_slider en el onclick
   */
  click_toggle_slider = () => document
        .querySelectorAll(`${this.scope_selector} ${this.slider_close_selector}`)
        .forEach(e => e.addEventListener('click', () => {
              this.clear_content();
              this.toggle_slider();
        }
  ));

  /**
   * Estado del slider.
   * 
   * @return {boolean} - ture si esta abierto, false si esta cerrado.
   */
  is_open = () => document
        .querySelector(`${this.scope_selector} .${this.slider_selector}`)
        .classList.contains(`${this.slider_selector}--in`);

  /**
   * Imprime la información del Punto Digital en el slider.
   * 
   * @return {string} - HTML del contenido del slider.
   */
  set_content = (data) => {
    if(!this.is_open())
        this.toggle_slider();
    
    const html = this.template(this, data);
    document.querySelector(`${this.scope_selector} .js-content`)
            .innerHTML = html;
  };

  /**
   * Mapea los headers.
   * 
   * @return {string} key - key del item.
   */
  header = (key) => {
    return this.headers.hasOwnProperty(key) ? this.headers[key] : key;
  };

  /**
   * Validador de latitud y longitud.
   * 
   * @param {float} latlng - Latitud o Longitud.
   * @return {boolean}
   */
  validateLatLng = (latlng) => {
    let latlngArray = latlng.toString().split(",");
    for(let i = 0; i < latlngArray.length; i++) {
      if(isNaN(latlngArray[i]) || latlngArray[i] < -127 || latlngArray[i] > 75){
        return false;
      }
      return true;
    }
  };

  /**
   * Crea el bloque html para el slider.
   */
  render_slider = () => {
    // Remuevo el slider
    document.querySelectorAll(`${this.scope_selector} .slider`)
            .forEach(e => e.remove());

    // Creo el slider
    let close_button = document.createElement('button');
    close_button.classList.add("btn", "btn-xs", "btn-secondary", "btn-close", 
                               this.selector_name(this.slider_close_selector));
    close_button.setAttribute("title", "Cerrar panel");
    close_button.innerHTML = '<span class="sr-only">Cerrar</span>✕';

    let content_container = document.createElement('div');
    content_container.classList.add("content-container");

    let content = document.createElement('div');
    content.classList.add("content", `js-content`);
    content_container.appendChild(content);

    let container = document.createElement('div');
    container.classList.add("slider");
    container.appendChild(close_button);
    container.appendChild(content_container);
    document.querySelector(`${this.scope_selector}`).appendChild(container);
  };

  /**
   * Proyecta el slider y hace zoom en el marker.
   */
  show_slider = (layer, item) => {
    this.map.setView(
        [item[this.latitud], item[this.longitud]], this.map_anchor_zoom
    );
    layer.fireEvent('click');
  };

  /**
   * Proyecta el popUp y hace zoom en el marker.
   */
  show_popup = (layer) => {
    this.markers.zoomToShowLayer(layer, () => {
      layer.__parent.spiderfy();
      layer.openPopup();
    });
  };

  /**
   * Obtiene un hash, hace zoom sobre el marker y abre su popUp o 
   * el slider.
   */
  showitem = () => {
    let id = window.location.hash.replace('#', '');
    if(!id)
      return;

    const pd = this.entry(id);
    this.markers.eachLayer(layer => {
      if(layer.options.id == id){
        if(this.slider && this.hash){
          this.show_slider(layer, pd);
        } else {
          this.show_popup(layer);
        }
      }
    });
  };

  /**
   * Setea los markers para ejecutarse en un evento onlick
   */   
  clickeable_markers = () => {
    this.markers.eachLayer(layer => {
      layer.on('click', (e) => {

        document.querySelectorAll('.marker--active').forEach(e => e.classList.remove('marker--active'))
        e.sourceTarget._icon.classList.add('marker--active');
        
        const content = this.json_data.find(e => e[this.id]==layer.options.id);
        this.set_content(content);
      });
    });
  };

  /**
   * Setea los markers para ejecutarse en un evento onlick
   */   
   url_hash = () => {
      this.markers.eachLayer(layer => {
          layer.on('click', (e) => {
            window.location.hash = `#${layer.options.id}`;
          });
      });
  };

  /**
   * Remueve un elemento de una lista.
   * @param {object} list Array de elementos
   * @param {string} key Elemento a remover 
   */
  remove_list_element = (list, key) => {
    const index = list.indexOf(key);
    if(index > -1)
      list.splice(index,1);
    return list;
  };

  /**
   * Titulo para el default template
   * @param {object} row Entrada 
   */
  template_title = (row) => {
    const structure = this.template_structure;
    if(structure.hasOwnProperty('title') && structure.title.length > 0){
      const title = document.createElement('h1');
      title.classList.add(... this.template_title_class_list);
      title.textContent = row[structure.title];
      return title;
    }
    return false;
  }

  /**
   * Listado de keys para mistrar en una entrada del default template.
   * @param {object} row — Entrada de datos 
   */
  template_list = (row) => {
    const estructura = this.template_structure;
    let lista = Object.keys(row);

    let list = lista;
    if(estructura.hasOwnProperty('values') && estructura.values.length > 0){
        list = estructura.values;
    } else if(estructura.hasOwnProperty('exclude') && estructura.exclude.length > 0){
      for(const key of estructura.exclude)
         list = this.remove_list_element(lista, key);
    }

    return list;
  }

  /**
   * Template por defecto
   * 
   * Arma un listado de datos usando la clave y el valor del objeto
   * pasado cómo argumento. 
   * @param {object} row - Entrada para dibujar un marker.
   */  
  default_template = (self, row) => {
    const tpl_list = this.template_list(row);
    const tpl_title = this.template_title(row);

    const container = document.createElement('article');
    container.classList.add(... this.template_container_class_list);

    const dl = document.createElement('dl');
    dl.classList.add(...this.template_dl_class_list);
    dl.style.fontSize = "1rem";
    
    for(const key of tpl_list){
      // excluyo los items vacíos.
      if(row.hasOwnProperty(key) && !row[key])
        continue;

      const dt = document.createElement('dt');
      dt.textContent = this.header(key);

      const dd = document.createElement('dd');
      dd.textContent = row[key];
      if(this.template_innerhtml)
        dd.innerHTML = row[key];
      
      dl.appendChild(dt);
      dl.appendChild(dd);
    };

    if(tpl_title)
      container.appendChild(tpl_title);

    container.appendChild(dl);
    return container.outerHTML;
  };

  /**
   * Icono poncho
   * 
   * @summary Retorna el color según el parámetro que se le pase. 
   * @param {string} color - Nombre del color según poncho colores. 
   * @returns {object}
   */
   icon = (color='azul') => {
    return new L.icon({
      iconUrl: `https://www.argentina.gob.ar/sites/default/files/marcador-${color}.svg`,
      iconSize: [38, 38],
      iconAnchor: [22, 41],
      popupAnchor: [-3, -40]
    });
  };

  /**
   * Define el objeto icon.
   * @param {object} row - entrada de json 
   * @returns {object} Instancia L.icon
   */
  marker = (row) => {
    // Si marker_color no viene o es null usa el marker por defecto 
    // de Open Street Map
    if(!this.marker_color || typeof this.marker_color == 'boolean')
      return null;

    if(typeof this.marker_color === 'string'){
      return this.icon(this.marker_color);

    } else if (typeof this.marker_color(this, row) === 'string'){
      const color = this.marker_color(this, row);
      return this.icon(color);

    } else if (typeof this.marker_color === 'function'){
      return this.marker_color(this, row);
    }
  };

  /**
   * Prepara las características del mapa y de cada uno de los markers.
   */
   markers_map = (json_data) => {
    json_data.forEach(row => {
      const icon = this.marker(row);
      const id = row[this.id];
      const latitud = row[this.latitud];
      const longitud = row[this.longitud];

      if(!this.validateLatLng(latitud) || !this.validateLatLng(longitud))
        return;

      let marker_attr = {};
      id ? marker_attr.id = id : null;
      icon ? marker_attr.icon = icon : null;
      const marker = new L.marker([latitud, longitud], marker_attr);
      this.markers.addLayer(marker);
      !this.slider ? marker.bindPopup(this.template(this, row)) : null;
    });
    this.map.options.minZoom = 2;
    this.map.addLayer(this.markers)
  };

  /**
   * Hace el render del mapa.
   */
  render = () => {
    this.markers_map(this.json_data);

    if(this.slider){
        this.render_slider();
        this.clickeable_markers();
        this.click_toggle_slider();
    }

    if(this.hash)
      this.url_hash();

    if(this.scroll)
      this.scroll_center();

    setTimeout(this.showitem, this.anchor_delay);
  };
};
// End class.



//#####################################################################
//######################## PONCHO MAP FILTER ##########################
//#####################################################################

/**
 * PONCHO MAP FILTER
 * 
 * @summary Generador de mapas con filtro utilizando OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, august 2022
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap
 */
class PonchoMapFilter extends PonchoMap {
  constructor(data, options){
    super(data, options);

    const defaults = {
        'filters': {},
    };
    let opts = Object.assign({}, defaults, options);
    this.filters = opts.filters;
  }

  /**
   * Obtiene el índice del filtro
   * @param {string} str — Input name attribute. 
   * @returns {string}
   * 
   * >>> dilter_position('name__1')
   * 1
   */
  filter_position = (str) => {
    const regex = /__([0-9]+)$/gm;
    const rgx =  regex.exec(str) 
    return rgx ? parseInt(rgx[1]) : null;
  }

  /**
   * Arma un grupo de inputs
   *
   * @param {object} fields_items - Listado de opciones para los fields. 
   */
  fields = (fields_items) => {
    const fields_container = document.createElement('div');
    for(const key in fields_items){
        const field = fields_items[key];

        const input = document.createElement('input');
        input.type = "checkbox";
        input.id = `id__${field[0]}__${key}`;
        input.name = `${field[0]}__${key}`;
        input.className = 'form-check-input';
        input.value = 1;
        if(typeof field[3] !== 'undefined' && field[3]=='checked')
            input.setAttribute("checked", 'checked');

        const label = document.createElement('label');
        label.style.marginLeft = '.33rem';
        label.textContent=field[1];
        label.className = "form-check-label";
        label.setAttribute("for", `id__${field[0]}__${key}`);

        const field_container = document.createElement('div');
        field_container.className = "form-check";
        field_container.appendChild(input);
        field_container.appendChild(label);

        fields_container.appendChild(field_container);
    }
    const fieldset = document.createElement('div');
    fieldset.appendChild(fields_container);
    
    return fieldset;
  };

  /**
   * Crea el contenedor para los filtros.
   */
  filter_container = () => {
      const fields_container = document.createElement('div');
      fields_container.className = "js-filters";  

      const button = document.createElement('button');
      button.textContent = 'Filtrar';
      button.classList.add('js-poncho-map-filter', 'btn', 'btn-sm', 
                            'btn-primary', 'm-t-1', 'm-b-0'); 

      const button_container = document.createElement('div');
      button_container.className = "text-center";
      button_container.appendChild(button);

      const container = document.createElement('div');
      container.className = "poncho-map-filters";
      container.appendChild(fields_container); 
      container.appendChild(button_container); 

      const form = document.createElement('form');
      form.className = "js-formulario";
      form.appendChild(container);

      document.querySelector(this.scope_selector).appendChild(form);
  }

  /**
   * Crea los checkbox para los filtros.
   */ 
  create_filters = (data) => {
    const form_filters = document.querySelector(`${this.scope_selector} .js-filters`);

    data.forEach(item => {
      let legend = document.createElement('legend');
      legend.classList.add("m-b-1", 'text-muted');
      legend.textContent = item.legend;

      let fieldset = document.createElement('fieldset');
      fieldset.appendChild(legend);
      fieldset.appendChild(this.fields(item.fields));

      form_filters.appendChild(fieldset);
    });
  };

  /**
   * Obtengo los checkbox marcados.
   */ 
   form_filters = () => {
    const form_filters = document.querySelector(`${this.scope_selector} .js-formulario`);
    const form_data = new FormData(form_filters);
    return Array.from(form_data).map(ele => this.filter_position(ele[0]));
  };

  /**
   * Filtra los markers
   */ 
  filter_data = () => {
      this.markers.clearLayers();
      const available_filters = this.form_filters();
      const feed = this.json_data.filter(row => {
        let strict_items = [];
        let optional_items = [];

        for(const key of available_filters){
          const filter = this.filters[0].fields[key];
          const search_for = filter[2];
          const is_strict = (typeof filter[4] !== 'undefined' && filter[4] === 'strict') ? true : false;
          const found = search_for.includes(row[filter[0]]) ? true : false;
          is_strict ? strict_items.push(found) : optional_items.push(found);
        }

        let validate = [];
        if(optional_items.length > 0)
          validate.push(optional_items.some(e => e));

        if(strict_items.length > 0)
          validate.push(strict_items.every(e => e));

        if(validate.every(e => e))
          return row;
      });

    return feed;
  }

  /**
   * Render de funciones 
   */ 
  filtered_data = () => {
    const feed = this.filter_data();
    this.markers_map(feed);   

    if(this.slider){
        this.render_slider();
        this.clickeable_markers();
        this.click_toggle_slider();
    }
    if(this.hash)
      this.url_hash();

    if(this.scroll)
      this.scroll_center();

  };

  /**
   * imprime el mapa
   */ 
  render = () =>{
    this.filter_container();

    const btn = document.querySelector(`${this.scope_selector} .js-poncho-map-filter`);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.filtered_data();
    });
    this.create_filters(this.filters);
    this.filtered_data();
    setTimeout(this.showitem, this.anchor_delay);
  }
}

//#####################################################################
//######################### GAPI HELPERS ##############################
//#####################################################################

/**
 * Helpers para manejar los json provenientes de Google Sheets.
 */
class GapiSheetData {
  constructor(options){
    const defaults = {
      'gapi_key': 'AIzaSyAll9EH1aTmZDewNSyM_CU_AIsGOiEDyZs',
    };
    let opts = Object.assign({}, defaults, options);
    this.gapi_key = opts.gapi_key;
  }

  /**
   * URI para obtener el json de google sheet.
   * 
   * @param {string} page Nombre de la página a obtener.
   * @param {string} spreadsheet Id del documento Google Sheet.
   * @returns {string} URL
   */
  url = (page, spreadsheet) => {
   return [
      'https://sheets.googleapis.com/v4/spreadsheets/',
      spreadsheet, '/values/', page,
      '?key=', this.gapi_key, '&alt=json'
    ].join('');
  };

  /**
   * Retorna los elemento del json
   */
  json_data = (json) => {
    const feed = this.feed(json);
    return {
        'feed': feed,
        'entries': this.entries(feed),
        'headers': this.headers(feed)
    };
  };

  /**
   * Retorna con una estructura más cómoda para usar
   * @param {object} data - Feed Json 
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
          zip[`${ keys[i].toLowerCase().replace(regex, '') }`] = d;
        }
        entry.push(zip);
      }
    });
    return entry;
  }

  /**
  * Variables.
  */
  gapi_feed_row = (data, separator='-', filter_prefix=true) => {
    const prefix = filter_prefix ? 'filtro-' : '';
    const feed_keys = Object.entries(data);
    const clean = k => k.replace('gsx$', '')
                        .replace(prefix, '').replace(/-/g, separator);
    let list = {};
    feed_keys.map(v => list[clean(v[0])] = v[1]['$t']);
    return list;
  };

  /**
   * Retrona las entradas excluyendo el primer row, ya que pertenece a los headers.
   * @param {*} feed 
   * @returns 
   */
  entries = (feed) => {
    return  feed.filter((v,k) => k > 0);
  }

  /**
   * Obtiene el primer row que es igual a los headers.
   * @param {*} feed 
   * @returns 
   */
  headers = (feed) => {
    return feed.find((v,k) => k == 0);
  }
};


/**
 * Fetch data
 */
 async function fetch_json(url, method='GET'){
  const response = await fetch(
    url,{
      method: method, 
      headers: {
        "Accept": "application/json", "Content-Type": "application/json"
      }
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};