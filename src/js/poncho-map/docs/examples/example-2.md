[Volver al inicio ⏎](../readme.md)

---

<!-- omit in toc -->
# Mapa multipunto

- [Datos de prueba](#datos-de-prueba)
- [Ejemplo](#ejemplo)


## Datos de prueba

```js
<script>
const demoData = [
    {
        "id": "1",
        "latitud": "-34.9319",
        "longitud": "-57.9497",
        "name": "Hospital Infantil Sor María Ludovica",
        "address": "Calle 14 1631 entre 65 y 66",
        "locality": "La Plata",
        "province": "Buenos Aires",
        "phone": "0221 453-5901",
        "email": "0221 453-5902",
        "reference": "Servicio de adolescencia. Días de atención: lunes, miércoles y viernes desde las 8:00 am"
    },
    {
        "id": "2",
        "latitud": "-31.4328",
        "longitud": "-64.1942",
        "name": "Hospital General de Agudos Fernández",
        "address": "Calle Santa Rosa 1080",
        "locality": "Córdoba Capital",
        "province": "Córdoba",
        "phone": "",
        "email": "consultavirtualdiversidad@gmail.com",
        "reference": "Pb sector a -clínica- puerta 21. Martes de 8:30 a 11 hs. (Demanda espontánea)"
    },
    {
        "id": "3",
        "latitud": "-32.9468",
        "longitud": "-60.6493",
        "name": "Hospital General de Agudos Carlos G. Durand Lanús",
        "address": "Avenida Pellegrini 1450",
        "locality": "Rosario",
        "province": "Santa Fe",
        "phone": "011 4982-5555",
        "email": "diversidadesdurand@gmail.com",
        "reference": "Lunes, martes o jueves de 8 a 11.30 hs endocrinología 3er piso, pabellón romano (se saca turno previamente)"
    }
];
</script>
```

## Ejemplo

```html
<!-- PONCHO MAP SEARCH -->
<search>
    <form>
        <div data-scope="search-poncho-map">
            <label class="sr-only" for="search">Buscar puntos</label>
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

const map = new PonchoMapFilter(demoData, mapOptions);
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
</script>
<!-- / SCRIPTS -->
```