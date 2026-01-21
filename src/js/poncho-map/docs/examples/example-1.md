# Mapa con un punto

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
<link href="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.css" rel="stylesheet"/> 
<script src="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.js"></script>
<script src="https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<!-- / INCLUDE SCRIPTS -->

<!-- SCRIPTS -->
<script id="code_map">
    const latitud = -34.60759, longitud = -58.37393;
    const pmOptions = {
        summary: {
            title: "Ubicación del Ministerio de Seguridad",
            hidden: true
        },
        title: "name",
        scope: "poncho-map",
        theme_tool: false,
        tooltip: true,
        no_info: true,
        map_zoom: 17, 
        map_view: [latitud, longitud]
    };
    const entry = {latitud, longitud, name: "Ministerio de Seguridad"};
    const pm = new PonchoMap([entry], pmOptions);
    pm.render();
</script>
<!-- / SCRIPTS -->
```