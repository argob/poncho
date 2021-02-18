//#####################################################################
//####################### PONCHO TABLE #################################
//#####################################################################

  jQuery('#ponchoTable').addClass('state-loading');

  function ponchoTable(opt){
    var listado = [];
    var filteredTitle = [];
    var filteredTitleGsx = [];
    var filtro = [];
    var filtroColumna;
    var titulos = '';
    var th = [];
    var lista = '';      
    var centeredContent ='';
    if ( jQuery.fn.DataTable.isDataTable('#ponchoTable') ) {
      jQuery('#ponchoTable').DataTable().destroy();
    }

    //UNIQUE
    function filtrarUnicos(array){
      return array.filter(function(el, index, arr) {
          return index === arr.indexOf(el);
      });
    }      

    jQuery.getJSON('https://spreadsheets.google.com/feeds/list/'+opt.idSpread+'/'+opt.hojaNumero+'/public/values?alt=json',

      function(data) {
          listado = data['feed']['entry'];

          //TITULOS
          jQuery.each(Object.keys(listado[0]), function(index, key) {
              if (key.substr(0, 4) == 'gsx$') {
                  filteredTitle.push(listado[0][key]["$t"]);
                  filteredTitleGsx.push(key);
                  titulos += '<th>' + listado[0][key]["$t"] + '</th>';
                  th.push(listado[0][key]["$t"]);
              }
    ;      })

          //Caption de la tabla
          jQuery("#ponchoTable caption").html(opt.tituloTabla);

          //Agregar titulos al thead de la tabla
          jQuery('#ponchoTable thead tr').empty();
          jQuery('#ponchoTable thead tr').append(titulos);

          //CONTENIDO FILAS
          jQuery.each(listado, function(row, value) {
              
              if(row > 0){
              lista += '<tr>';
                jQuery.each(filteredTitleGsx, function(index, title) {
                  var tdEmpty = '';
                    if (title.substr(0, 4) == 'gsx$') {
                       
                        filas = listado[row][filteredTitleGsx[index]].$t;

                        //Guardar título de referencia de cada fila
                        if(title == filteredTitleGsx[0]){
                            labelBtn = filas;
                          }
                        
                        //Detectar si es botón
                        if(title.includes("btn-") && filas != "" ){
                          nameBtn = title.substr(8, title.length-8).replace("-"," ");
                          filas = '<a aria-label="' + nameBtn + " " + labelBtn + '" class="btn btn-primary btn-sm margin-btn" target="_blank" href="'+filas+'">'+nameBtn+'</a>'
                        }

                        //Detectar si es filtro
                        if(title.includes("filtro-") && filas != ""){
                          filtroColumna = index;
                          nameFiltro = title.substr(11, title.length-11).replace("-"," ");
                          jQuery("#tituloFiltro").html(nameFiltro);
                          filtro.push(filas);
                        }

                        //Detectar si es fecha
                        if(title.includes("fecha-") && filas != ""){
                          var dteSplit = filas.split("/");
                          var yearh = dteSplit[2];
                          var month = dteSplit[1];
                          var day = dteSplit[0];
                          var finalDate = yearh+"-"+month+"-"+day;
                          filas = '<span style="display:none;">'+finalDate+'</span>'+filas;
                        }

                        //Ocultar filas vacias en mobile
                        if(filas == ''){
                          tdEmpty = 'hidden-xs';
                        }

                        //Aplicar markdown a todas las filas
                        var converter = new showdown.Converter(),
                        filas = converter.makeHtml(filas);

                        lista += '<td class="'+ tdEmpty + '" data-title="'+ th[index] +'">' + filas + '</td>';

                    }
              ;  })
              lista += '</tr>';
              }
         ; })

          //Agregar filtro
          jQuery.each(filtrarUnicos(filtro), function(index, val) {
             jQuery("#ponchoTableFiltro").append("<option>"+val+"</option>")
          });
         

          //Agregar contenido al body de la Tabla
          jQuery('#ponchoTable tbody').empty();
          jQuery('#ponchoTableSearchCont').show();
          jQuery('#ponchoTable tbody').append(lista);
          jQuery('#ponchoTable').removeClass('state-loading');

          initDataTable();
      }
  )

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
      console.log(jQuery.fn.DataTable.ext.type.search);
      searchType.string = function (data) {
        return !data ?
          '' :
          typeof data === 'string' ?
            removeAccents(data) :
            data;
      };

      searchType.html = function (data) {
        return !data ?
          '' :
          typeof data === 'string' ?
            removeAccents(data.replace(/<.*?>/g, '')) :
            data;
      };




      var tabla = jQuery("#ponchoTable").DataTable({
          "lengthChange": false,
          "autoWidth" : false,
          "pageLength" : opt.cantidadItems,
          "columnDefs": [
            { "type": "html-num", "targets": opt.tipoNumero },
            { "targets": opt.ocultarColumnas, "visible": false }
          ],
          "ordering" : opt.orden,
          "order": [[ opt.ordenColumna-1, opt.ordenTipo ]],
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


      jQuery(document).ready(function () {
        // Remove accented character from search input as well
        jQuery('#ponchoTableSearch').keyup(function () {
          tabla
            .search(
            jQuery.fn.DataTable.ext.type.search.string(this.value)
            )
            .draw()
        });
    
    if(jQuery.isFunction(jQuery.fn.dataTable.ext.order.intl)){
		  jQuery("#ponchoTable").dataTable.ext.order.intl('es');
		  jQuery("#ponchoTable").dataTable.ext.order.htmlIntl('es');
	    }
		
      });

      //BUSCADOR
      jQuery("#ponchoTable_filter").parent().parent().remove();

      //FILTRO PERSONALIZADO
      if(jQuery('#ponchoTableFiltro option').length > 1){
        jQuery('#ponchoTableFiltroCont').show();
      }
      jQuery('#ponchoTableFiltro').on('change', function() {
        var filtro = jQuery(this).val();
          if(filtro != ""){
            tabla.column(filtroColumna).every( function () {
                var that = this;
                    that
                        .search(jQuery.fn.DataTable.ext.type.search.string(filtro))
                        .draw();
            }); 
          }
          else{
              tabla.search( '' ).columns().search( '' ).draw();
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
   center: new google.maps.LatLng(58, 16),
   zoom: 5,
   mapTypeId: opt.tipoMapa,
   center: {lat:-39.6930895,lng:-57.2432742},
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
 color = punto.gsx$color.$t.toLowerCase();

 //Cambio color de marker segun el tipo de punto
 svg = template.replace('{{ color }}', colores[color]["hex"]);
 var latLng = new google.maps.LatLng(punto.gsx$latitud.$t, punto.gsx$longitud.$t); 

 //Tipo de punto
 var marker = new google.maps.Marker({
 position: latLng,
 title: punto.gsx$nombre.$t,
 icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg), scaledSize: new google.maps.Size(40, 40) },
optimized: false
 });
 markers.push(marker);

 provincia = 
 localidad = 
 telefono = 
 email = 
 boton = 
 descripcion = 
 ubicacion = 
 direccion = 
 foto = "";
 

 if(punto.gsx$provincia.$t != "" || punto.gsx$localidad.$t != ""){ 
 ubicacion = '<div class="separarGuiones"><i class="fa fa-map-marker"></i><span>' + punto.gsx$direccion.$t + '</span><span>' + punto.gsx$localidad.$t + '</span><span>' + punto.gsx$provincia.$t + '</span></div>';
 }
 if(punto.gsx$telefono.$t != ""){ telefono = "<div><i class='fa fa-phone'></i>" + punto.gsx$telefono.$t + "</div>";}
 if(punto.gsx$email.$t != ""){ email = "<div><i class='fa fa-envelope'></i>" + punto.gsx$email.$t + "</div>";}
 if(punto.gsx$descripcion.$t != ""){ 
  var converter = new showdown.Converter();
  descripcion = "<div>" + converter.makeHtml(punto.gsx$descripcion.$t) + "</div>";}
 if(punto.gsx$boton.$t != ""){ boton = "<hr><a class='btn btn-success btn-sm' href="+ punto.gsx$boton.$t +">"+opt.textoBoton+"</a>";}
 if(punto.gsx$foto != null ){ foto = '<img width="100%" src="'+ punto.gsx$foto.$t +'">'}
 
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
 for(i = 0; i < detalles.length; i++){
 detalles[i].close();
 }
 }


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
 content_popover.classList.add('hidden')
}
