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
//####################### PONCHO MAPS #################################
//#####################################################################

/*Valores predeterminados*/
var opt = {
      "tipoMapa" : "roadmap",
    };

function ponchoMaps(opt){

//INICIALIZA EL MAPA
var puntos;
var estilos = 
[  
   {  
      "featureType":"administrative.country",
      "stylers":[  
         {  
            "visibility":"on"
         }
      ]
   },
   {  
      "featureType":"poi",
      "stylers":[  
         {  
            "visibility":"off"
         }
      ]
   }
];


 var mapOptions = {
   // center: new google.maps.LatLng(58, 16),
   center: {lat:-39.6930895,lng:-57.2432742},
   zoom: 5,
   mapTypeId: opt.tipoMapa,
   styles: estilos
 };
 var map = new google.maps.Map(document.getElementById("map"),mapOptions);

 
 //TRAER DATOS
 jQuery.getJSON('https://spreadsheets.google.com/feeds/list/'+opt.idSpreadheet+'/'+opt.hojaNumero+'/public/values?alt=json',
 function(data) {
 
 //Validación de usuario
 var autores = ["metricas.mod@gmail.com","modernizacion.ux@gmail.com","contenidosgobar@gmail.com"];
 jQuery.each(data["feed"]["author"], function(index, val) {
   if(autores.indexOf(val.email.$t) == -1){
    jQuery("body").remove();
    window.location.replace("http://www.argentina.gob.ar");
   }
 });
 

 puntos = data['feed']['entry'];
 var markers = [];
 var detalles = [];


 //Template del Icono marker map
 var markerPath = 
 "M206.549,20.359L206.549,20.359c-74.459,0-134.584,60.126-134.584,134.584c0,25.961,8.293,50.751,19.832,71.122"
 + "l87.71,151.801c5.499,9.916,16.586,14.874,27.043,14.874c10.458,0,21.003-4.958,27.043-14.874l87.71-151.711"
 + "c11.629-20.373,19.832-44.712,19.832-71.124C341.133,80.574,281.008,20.359,206.549,20.359z M206.549,206.978"
 + "c-33.804,0-61.41-27.606-61.41-61.41s27.606-61.41,61.41-61.41s61.41,27.606,61.41,61.41"
 + "C267.959,179.484,240.353,206.978,206.549,206.978z";
 var template = [
 '<?xml version="1.0"?>',
 '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="286.818px" height="396.798px" viewBox="63.14 8.15 286.818 396.798" enable-background="new 63.14 8.15 286.818 396.798" xml:space="preserve">',
 '<path stroke="#FFF" stroke-width="10" fill="{{ color }}" d="'+markerPath+'"/>',
 '</svg>'
 ].join('\n');


 var colores = {
 "azul" : {"hex" : "#0072BB"},
 "verde" : {"hex" : "#2E7D33"},
 "rojo" : {"hex" : "#C62828"},
 "gris" : {"hex" : "#707070"},
 "fucsia" : {"hex" : "#EC407A"},
 "arandano" : {"hex" : "#C2185B"},
 "uva" : {"hex" : "#6A1B99"},
 "cielo" : {"hex" : "#039BE5"},
 "verdin" : {"hex" : "#6EA100"},
 "lima" : {"hex" : "#CDDC39"},
 "maiz" : {"hex" : "#FFCE00"},
 "tomate" : {"hex" : "#EF5350"},
 "naranja oscuro" : {"hex" : "#EF6C00"},
 "verde azulado" : {"hex" : "#008388"}
 };


 //MAPEAR LOS PUNTOS
 jQuery.each(puntos, function(key, punto) {
 var color = punto.gsx$color.$t.toLowerCase();

 //Cambio color de marker segun el tipo de punto
 var svg = template.replace('{{ color }}', colores[color]["hex"]);
 var latLng = new google.maps.LatLng(punto.gsx$latitud.$t, punto.gsx$longitud.$t); 

 //Tipo de punto
 var marker = new google.maps.Marker({
 position: latLng,
 title: punto.gsx$nombre.$t,
 icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg), scaledSize: new google.maps.Size(40, 40) },
optimized: false
 });
 markers.push(marker);

 var provincia = '';
 var localidad = '';
 var telefono = '';
 var email = '';
 var boton = '';
 var descripcion = '';
 var ubicacion = '';
 var direccion = '';
 var foto = "";
 

 if(punto.gsx$provincia.$t != "" || punto.gsx$localidad.$t != ""){ 
 ubicacion = '<div class="separarGuiones"><i class="fa fa-map-marker"></i><span>' + punto.gsx$direccion.$t + '</span><span>' + punto.gsx$localidad.$t + '</span><span>' + punto.gsx$provincia.$t + '</span></div>';
 }
 if(punto.gsx$telefono.$t != ""){ telefono = "<div><i class='fa fa-phone'></i>" + punto.gsx$telefono.$t + "</div>";}
 if(punto.gsx$email.$t != ""){ email = "<div><i class='fa fa-envelope'></i>" + punto.gsx$email.$t + "</div>";}
 if(punto.gsx$descripcion.$t != ""){ 
  var converter = new showdown.Converter();
  descripcion = "<div>" + converter.makeHtml(punto.gsx$descripcion.$t) + "</div>";}
 if(punto.gsx$boton.$t != ""){ boton = "<hr><a class='btn btn-success btn-sm' href="+ punto.gsx$boton.$t +">"+opt.textoBoton+"</a>";}
 if(punto.gsx$foto != null ){ foto = '<img width="100%" src="'+ punto.gsx$foto.$t +'">';}
 
 //DETALLE CADA PUNTO
 detalles[key] = new google.maps.InfoWindow({
 content: '<div class="media"><div class="media-body"><small class="text-primary">'+ punto.gsx$tipo.$t +'</small><h4>'+ punto.gsx$nombre.$t + '</h4> ' + foto + descripcion + ubicacion + telefono + email + boton + '</div></div>',
 maxWidth: 300
 });

 markers[key].addListener('click', function() {
 closeWindows();
 //map.setZoom(17);
 //map.setCenter(markers[key].getPosition());
 detalles[key].open(map, markers[key]);
 });

jQuery('#map-container').removeClass('state-loading');
  marker.setMap(map);
});

//Función Cerrar Detalle
var closeWindows = function(){
  for (var i = 0; i < detalles.length; i++) {
    detalles[i].close();
  }
};


 //CLUSTERS
 var mcOptions = {
 enableRetinaIcons: true,
 imageSizes: [20,30,40,50,60,70],
 maxZoom: 10,
 gridSize: 50,
 styles: [{
 textColor: 'white',
 url: 'https://www.argentina.gob.ar/sites/default/files/cluster_ponchomaps.png',
 width: 45,
 height: 45
 }]
 };


 //Clusters
 if(opt.agrupar == "si"){ 
 var markerCluster = new MarkerClusterer(map, markers, mcOptions);
 }
 });

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
    var urlProvincias =  '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geoprovincias.json';
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
            //provincias
            sProvincia = getSelectProvincias(provincias);
            addProvEvent();
            iProvincia.after(sProvincia);
            jQuery(sProvincia).select2();
        });

        jQuery.getJSON(urlLocalidades, function(data) {
            localidades = parseJsonLocalidades(data);
            sLocalidades = getSelectLocalidades(localidades, '');
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


    function getDropDownList(name, id, optionList, required=false, emptyOption = false) {

        var combo = jQuery("<select></select>").attr("id", id).attr("name", name).addClass("form-control form-select").prop('required',required);
        if (emptyOption) {
            combo.append("<option value=''>Seleccione una opción</option>");
        }

        jQuery.each(optionList, function(i, el) {
            combo.append("<option value='" + el.id + "'>" + el.nombre + "</option>");
        });
        return combo;
    }

    function getSelectProvincias(provincias) {
        var provinciasOptions = [];

        provinciasOptions= provincias.sort(function(a, b) {
                            var nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
                            return nameA.localeCompare(nameB);
                            });
        var required = iProvincia.prop('required');
        var select = getDropDownList('sProvincias', 'sProvincias', provinciasOptions, required, true);
        return select;
    }

    function getSelectLocalidades(localidades, provincia) {
        var locaSelect = {};
        var required = iLocalidad.prop('required');

        var select = getDropDownList('sLocalidades', 'sLocalidades', [], required, true);
        
        if (provincia) {
            locaSelect = localidades
                .filter(function(localidad) {
                    return String(localidad.provincia.id) == String(provincia);
                })
                .map(function (a) {
                    if(a.departamento.nombre) {
                        a.nombre = capitalizeFirstLetter(a.departamento.nombre.toLowerCase()) + ' - ' +
                                   capitalizeFirstLetter(a.nombre.toLowerCase());
                    }
                    return a;
                })
                .sort(function(a, b) {
                            var nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
                            return nameA.localeCompare(nameB);
                            })
            ;
                
            select = getDropDownList('sLocalidades', 'sLocalidades', locaSelect, required);
        }
        
        return select;
    }

    init();

}

//#####################################################################
//########################  PONCHO Chart  #############################
//#####################################################################
function ponchoChart(opt) {
    "use strict";
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

    //iniciaizo variables
    var url = opt.jsonUrl ? opt.jsonUrl : 
                            'https://sheets.googleapis.com/v4/spreadsheets/' + opt.idSpread + '/values/' + opt.hojaNombre + '?alt=json&key=AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY';

    var posicionLeyendas = opt.posicionLeyendas ? opt.posicionLeyendas : 'top';
    var mostrarLeyendas = '';
    if (typeof opt.mostrarLeyendas == 'undefined'){
        mostrarLeyendas = true;
    } else {
        mostrarLeyendas = opt.mostrarLeyendas;
    }
    var tipoGrafico = getTipoGrafico(opt.tipoGrafico);

    if (chequeoOpcionesObligatorias()) {

        jQuery.getJSON(url,

            function(data) {

                var listado = data['values'];

                //TITULOS
                jQuery.each(Object.keys(listado[0]), function(index, key) {
                    if (listado[0][index].substr(0, 5) == 'eje-y') {
                        var split = listado[0][index].split('-');
                        var pos = split[0] + split[1];
                        filteredTitleName.push(pos);
                        filteredTitlePos.push(index);
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
                                columnas.push(listado[row][filteredTitlePos[index]]); //recupero columnas para label
                                cantDatos = cantDatos + 1;
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
                                if (label == false) {
                                    etiquetas.push(listado[row][0]); //recupero las etiquetas
                                    label = true;
                                }
                                valores[pos].push(listado[row][filteredTitlePos[index]]); //recupero datos
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
                                    return data.datasets[tooltipItem.datasetIndex].label + ': ' +  data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
                                }
                            },
                            mode: 'index',
                            intersect: false,
                        };
                    } else {
                        //seteo tooltips
                        toltips = {
                            enabled: true,
                            callbacks: {
                                label: function(tooltipItem, data) {
                                    return data.datasets[tooltipItem.datasetIndex].label + ': ' +  data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
                                }
                            }
                        };
                    }
                } else {
                     if (tipoGrafico == 'line' && cantDatos > 1){
                        //seteo tooltips
                        toltips = {
                            enabled: true,
                            mode: 'index',
                            intersect: false,
                        };
                     } else {
                        //seteo tooltips
                        toltips = {
                            enabled: true,
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

                    graficoTorta(etiquetas, datos, tipoGrafico, codigosColores, opt.idComponenteGrafico, posicionLeyendas, toltips);
                }

                if (cantDatos == 1) {

                    console.log('etiquetas --> ' + etiquetas);
                    console.log('datos --> ' + datos);

                    color = getColor(colores[0]);
                    console.log('color --> ' + color);

                    if (opt.tipoGrafico == 'Line') {
                        graficoLineaSimple(etiquetas, datos, tipoGrafico, color, columnas[0], opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, toltips);
                    }

                    if (tipoGrafico == 'bar' || opt.tipoGrafico == 'Area' || tipoGrafico == 'horizontalBar') {
                        graficoAreaBarraSimple(etiquetas, datos, tipoGrafico, color, columnas[0], opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, toltips);
                    }

                }

                if (cantDatos > 1) {

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
                                    borderColor: codigosColores[indiceColor],
                                    borderWidth: 1,
                                    // This binds the dataset to the left y axis
                                    yAxisID: 'left-y-axis',
                                    borderSkipped: 'bottom',
                                    type: 'bar',
                                  };
                                } else if (tipo == 'linea'){
                                    var dataset = {
                                      label: columnas[indiceColor],
                                      data: datos, 
                                      borderColor: codigosColores[indiceColor],
                                      // Changes this dataset to become a line
                                      type: 'line',
                                      // This binds the dataset to the right y axis
                                      yAxisID: 'right-y-axis',
                                      fill: true,
                                      lineTension: 0.1,
                                      borderCapStyle: 'butt',
                                      borderDash: [],
                                      borderDashOffset: 0.0,
                                      borderJoinStyle: 'miter',
                                      borderWidth: 1,
                                      pointBorderWidth: 1,
                                      pointHoverRadius: 4,
                                      pointHoverBackgroundColor: 'rgb(75, 214, 238)',
                                      pointHoverBorderColor: 'rgb(75, 214, 238)',
                                      pointHoverBorderWidth: 3,
                                      pointRadius: 5,
                                      pointHitRadius: 10,
                                    };
                                }
                            }


                            datasets.push(dataset);

                            indiceColor = indiceColor + 1;

                            indiceMixed = indiceMixed + 1;

                        }
                    });

                    if (opt.tipoGrafico == 'Mixed'){ 
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

                    if (opt.tipoGrafico == 'Stacked Bar') graficoComplejoStacked(etiquetas, tipoGrafico, datasets, opt.idComponenteGrafico, opt.ejeYenCero, posicionLeyendas, toltips, mostrarLeyendas);
                    else if (opt.tipoGrafico == 'Mixed') graficoComplejoMixed(etiquetas, 'bar', datasets, opt.idComponenteGrafico, opt.ejeYenCero, posicionLeyendas, indicePorcentajeMixed, columnas[0], columnas[1], mostrarLeyendas);
                    else graficoComplejo(etiquetas, tipoGrafico, datasets, opt.idComponenteGrafico, opt.ejeYenCero, posicionLeyendas, toltips, mostrarLeyendas);


                }

                //verifica si viene titulo del grafico, si no viene no dibuja nada
                if (opt.tituloGrafico != "" && typeof opt.tituloGrafico != 'undefined') {
                    graficaTitulo(opt.idTagTituloGrafico, opt.tituloGrafico);
                }
            }
        );

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

        if (tipoGrafico == "") {
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
                codigoColor = '#d7df23';
                break;
            case 'verdealoe':
                codigoColor = '#d7df23';
                break;
            case 'verdecemento':
                codigoColor = '#d7df23';
                break;
            default:
                console.log('No existe color ' + color);
        }

        return codigoColor;
    }

    function graficoTorta(etiquetas, datos, tipoGrafico, colores, idGrafico, posicionLeyendas, toltips) {
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
                legend: { display: true, position: posicionLeyendas },
                responsive: true,
                tooltips: toltips,
            }

        });
    }

    function graficoLineaSimple(etiquetas, datos, tipoGrafico, color, label, empiezaYenCero, idGrafico, posicionLeyendas, toltips) {
        const $grafica = document.getElementById(idGrafico);
        const dataset = {
            data: datos,
            borderColor: color,
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
                legend: { display: true, position: posicionLeyendas },
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

    function graficoAreaBarraSimple(etiquetas, datos, tipoGrafico, color, label, empiezaYenCero, idGrafico, posicionLeyendas, toltips) {
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
                legend: { display: true, position: posicionLeyendas },
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
                    return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + ' ' + text;
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
                          if (indice == 0 || indice == 2) text = '%'; 
                          return value + text;
                        }
                    },
                     scaleLabel: {
                        display: true,
                        labelString: label1,
                        fontColor: "red"
                      }
                  }, {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right',
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
                        fontColor: "green"
                      }
                  }
                ],
              },
           }
        });
    }

    function graficaTitulo(idTag, titulo) {
        if (document.getElementById(idTag)) {
            document.getElementById(idTag).innerHTML = titulo;
        }
    }

    function chequeoOpcionesObligatorias() {
        var chequeo = false;
        if ( ((opt.idSpread  && opt.hojaNombre) || opt.jsonUrl) && (typeof opt.tipoGrafico != 'undefined' && opt.tipoGrafico != "") && (typeof opt.idComponenteGrafico != 'undefined' && opt.idComponenteGrafico != "") && (tipoGrafico != ""))
            chequeo = true;
        return chequeo;
    }
}


//#####################################################################
//####################### GAPI LEGACY #################################
//#####################################################################
//<!--
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
//-->
