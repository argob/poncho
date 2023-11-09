# Mapa de Argentina con filtro por provincias

Módulo para implementar ponchoMaps utilizando un GeoJSON con polígonos por provincia.

Parte de esta aplicación es poder utilizar un select con un listado de provincias y que al seleccionar se presente la información ofrecida en un JSON con data.

## Opciones

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| geoJSON | `string` | [URL geoJSON provincias](https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geo-provincias-argentinas.json) | URL del archivo geoJSON con la definición de provincias. |
| initialEntry | `string` | _empty_ | Permite asignar una provincia para que se muestre cuando se carga la página. (Ver órdenes de precedencia). |
| randomEntry | `boolean` | `false` | Permite que se asigne _aleatoriamente_ una provincia cuando se carga la página. (Ver órdenes de precedencia). |
| imageBounds | `object` | `[[-20.56830872133435, -44.91768177759874],[-55.861359445914566, -75.2246121480093]]` | Geo-localización de las cuatro coordenadas que definen el cuadro visible del mapa. |
| mapView | `object` | `[-40.47815508388363,-60.0045383246273]` | Geo-localización de la vista inicial del mapa. |
| hideSelect | `boolean`| `true` | Si es _true_ el select solo se muestra en mobile |

Precedencia
hash
ramdomEntry

Funciones
