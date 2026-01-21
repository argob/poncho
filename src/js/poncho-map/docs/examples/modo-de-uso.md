<!-- omit in toc -->
# Modo de uso

- [Estructura HTML](#estructura-html)
  - [Estilos base de Leaflet](#estilos-base-de-leaflet)
  - [Scripts principales](#scripts-principales)
  - [Dependencias opcionales](#dependencias-opcionales)
    - [Clusters de marcadores](#clusters-de-marcadores)
    - [Showdown (Markdown)](#showdown-markdown)
- [Buscador (opcional)](#buscador-opcional)
- [Contenedor del mapa](#contenedor-del-mapa)
- [Inicialización](#inicialización)
- [Referencias](#referencias)


## Estructura HTML

Incluya los archivos CSS dentro de la etiqueta `<head>` y los archivos JavaScript antes del cierre de `</body>`.

### Estilos base de Leaflet

```html
<link href="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.css" rel="stylesheet"/>
```

### Scripts principales

```html
<!-- PONCHO MAP SCRIPTS -->
<script src="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.js"></script>
<script src="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.markercluster.js"></script>
<script src="https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<!-- / PONCHO MAP SCRIPTS -->
```

### Dependencias opcionales

#### Clusters de marcadores

Para habilitar la agrupación de marcadores, incluya los siguientes archivos:

```html
<!-- JS -->
<script src="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.markercluster.js"></script>

<!-- CSS -->
<link href="https://mapa-ign.argentina.gob.ar/js/leaflet/MarkerCluster.css" rel="stylesheet"/>
<link href="https://mapa-ign.argentina.gob.ar/js/leaflet/MarkerCluster.Default.css" rel="stylesheet"/>
```

#### Showdown (Markdown)

Para procesar contenido en formato Markdown, incluya la librería Showdown:

```html
<script src="https://www.argentina.gob.ar/sites/default/files/ponchotable/showdown.js"></script>
<script src="https://www.argentina.gob.ar/profiles/argentinagobar/themes/argentinagobar/argentinagobar_theme/js/extensiones/showdown-extensions.js"></script>
```

## Buscador (opcional)

El componente de búsqueda puede ubicarse en cualquier parte de la página según las necesidades del diseño.

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
```

## Contenedor del mapa

Agregue el contenedor HTML donde se renderizará el mapa. Los atributos `data-scope` y la clase `poncho-map` son obligatorios.

```html
<!-- PONCHO MAP -->
<div class="poncho-map" data-scope="poncho-map">
    <div
        class="leaflet-container leaflet-touch leaflet-fade-anim 
               leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        id="map"
        style="height: 650px">
    </div>
</div>
<!-- / PONCHO MAP -->
```

## Inicialización

Por último, agregue el código JavaScript para inicializar el mapa con los datos y opciones correspondientes.

```html
<script>
    const mapOptions = {
        "scope": "poncho-map",
        ...
    };
    const map = new PonchoMapFilter(jsonData, mapOptions);
    map.render();
</script>
```

## Referencias
1. Leaftlet <[https://leafletjs.com/](https://leafletjs.com/)>