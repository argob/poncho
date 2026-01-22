[Volver al inicio ⏎](../readme.md)

---

# Mapa multipunto con carga asíncrona

## Ejemplo

```html
<!-- PONCHO MAP SEARCH -->
<search>
    <form>
        <div data-scope="search-poncho-map">
            <label class="sr-only" for="search">Buscar ubicaciones</label>
            <div class="input-group m-b-0 p-b-0 webform-component">
                <input 
                    class="js-poncho-map-search__input form-control" 
                    id="search" 
                    list="js-poncho-map-search__list" 
                    name="search" 
                    autocomplete="true"
                    spellcheck="true" 
                    type="search"> 
                <datalist 
                    class="js-poncho-map-search__list" 
                    id="js-poncho-map-search__list">
                </datalist> 
                <span class="input-group-btn">
                    <button 
                        class="js-poncho-map-search__submit btn btn-primary" 
                        type="submit">
                        <i class="fa fa-search text-white"></i>
                        <span class="sr-only">Buscar término</span>
                    </button> 
                </span>
            </div>
            <div data-scope="poncho-map">
                <div 
                    class="js-poncho-map__help small" 
                    aria-live="polite"></div>
            </div>
        </div>
    </form>
</search>
<!-- / PONCHO MAP SEARCH -->

<!-- PONCHO MAP -->
<div class="poncho-map" data-scope="poncho-map">
    <div
        class="leaflet-container leaflet-touch leaflet-fade-anim 
               leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        id="map"
        style="height: 600px">
    </div>
</div>
<!-- / PONCHO MAP -->

<!-- INCLUDE SCRIPTS -->
<link href="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.css" rel="stylesheet"/> 
<script src="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.js"></script>
<script src="https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<!-- / INCLUDE SCRIPTS -->

<!-- SCRIPTS -->
<script>
// Defino los headers para las claves de las entradas JSON
const FIELD_LABELS = {
    id: "Código",
    latitud: "Latitud",
    longitud: "Longitud",
    name: "Nombre",
    address: "Dirección",
    locality: "Localidad",
    province: "Provincia",
    phone: "Teléfono",
    email: "Correo electrónico",
    reference: "Referencia"
};

const DATA_URL = "[URL]/data.geojson";

(async () => {
    // Inicializa el loading
    const loader = new PonchoMapLoader({scope: "poncho-map"});
    loader.load();

    const geoJsonData = await fetch_json(DATA_URL);
    const mapOptions = {
        debug: false,
        scope: "poncho-map",
        title: "name",
        tooltip: true,
        headers: FIELD_LABELS, // @see Documentación para headers
        template_structure: {
            values: [
                "address",
                "locality",
                "province",
                "phone",
                "email",
                "reference"
            ]
        },
        hash: true,
        scroll: true,
        slider: true
    };

    const map = new PonchoMapFilter(geoJsonData, mapOptions);
    map.render();

    const searchOptions = {
        scope: "search-poncho-map",
        placeholder: "Buscar por provincia, localidad y dirección",
        combobox: true,
        search_fields: [
            "address",
            "locality",
            "province",
            "reference"
        ]
    };
    const search = new PonchoMapSearch(map, searchOptions);
    search.render();

    // Cierra el loading
    loader.close();
})();
</script>
<!-- / SCRIPTS -->
```