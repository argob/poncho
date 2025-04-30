# Mapa de un solo punto


```html
<!-- PONCHO MAP -->
<div class="poncho-map" data-scope="poncho-map">
    <div
        class="leaflet-container leaflet-touch leaflet-fade-anim 
            leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        id="map"
        style="height: 400px">
    </div>
</div>
<!-- / PONCHO MAP -->

 <!-- INCLUDE SCRIPTS -->
<script src="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.js"></script>
<link href="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.css" rel="stylesheet"/> 
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<!-- / INCLUDE SCRIPTS -->

<!-- SCRIPTS -->
<script>
    const latitud = -34.60759;
    const longitud = -58.37393;
    const mapOptions = {
        scope: "poncho-map",
        theme_tool: true,
        no_info: true,
        map_zoom: 17,  
        map_view: [latitud, longitud]
    };
    const pm = new PonchoMap([{latitud, longitud}], mapOptions);
    pm.render();
</script>
<!-- / SCRIPTS -->
 ```