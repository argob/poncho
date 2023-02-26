//#####################################################################
//####################### PONCHO TABLE #################################
//#####################################################################



/**
 * 
 */
ponchoTableLegacyPatch = () => {
    // Temporal. Muestra que en esa página tiene un código html legacy
    const style = document.createElement("style");
    style.innerHTML = ".js-poncho-table select{" 
            + "position:relative;"
            + "}"
            + ".js-poncho-table:after{" 
            + "font-size:9px !important;" 
            + "border-radius:50%;" 
            + "color:white;" 
            + "position:absolute;" 
            + "background:var(--lima);" 
            + "width:6px;"
            + "position:absolute;" 
            + "left:0;" 
            + "top:1em;" 
            + "height:6px;" 
            + "}"
            + ".js-poncho-table.legacy:after{" 
            + "background:var(--tomate);" 
            + "}";

    document.querySelector("head").appendChild(style);
    document
        .querySelectorAll("div[id=ponchoTableFiltro]")
        .forEach(element => {
            element.classList.add("js-poncho-table");
    });
    document
        .querySelectorAll("select[id=ponchoTableFiltro]")
        .forEach(element => {
            // const node = element.closest(".form-group");
            const node = element.parentElement;
            // Creo un contenedor
            const newElement = document.createElement("div");
            newElement.id = "ponchoTableFiltro";
            newElement.classList.add("row");
            newElement.classList.add("js-poncho-table");
            newElement.classList.add("legacy");
            node.parentElement.appendChild(newElement);
            // Borro el viejo elemento
            node.remove();
    });

    


};


// jQuery('#ponchoTable').addClass('state-loading');

function ponchoTable(opt) {
    ponchoTableLegacyPatch();
    return ponchoTableDependant(opt);

  /* Comento todo el código 
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
    */
}
