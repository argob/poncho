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

