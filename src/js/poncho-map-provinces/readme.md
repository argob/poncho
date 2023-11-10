# Mapa de Argentina con filtro por provincias

Módulo para implementar ponchoMaps utilizando un GeoJSON con polígonos por provincia.

Parte de esta aplicación es poder utilizar un select con un listado de provincias y que al seleccionar se presente la información ofrecida en un JSON con data.

## Opciones

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| initial_entry | `string` | _empty_ | Permite asignar una provincia para que se muestre cuando se carga la página. (Ver órdenes de precedencia). |
| random_entry | `boolean` | `false` | Permite que se asigne _aleatoriamente_ una provincia cuando se carga la página. (Ver órdenes de precedencia). |
| overlay_image | `boolean`| _`true`_ | Si es `true`, agrega una imagen sobre el mapa OSM. |
| overlay_image_bounds | `object` | `[[-20.56830872133435, -44.91768177759874],[-55.861359445914566, -75.2246121480093]]` |  Geo-localización de las cuatro coordenadas que definen el cuadro visible del mapa. |
| overlay_image_url | `string` | [map-shadow.png](https://www.argentina.gob.ar/sites/default/files/map-shadow.png) | Permite sobreponer una imagen en el mapa OSM. |
| overlay_image_opacity | `float`| 0.8 | Define la opcidad de la imagen sobrepuesta al mapa. |
| province_index | `string`| provincia | Permite definir cual es el nombre de la columna, o índice del objeto; dónde se debe obtener el nombre de la provincia. |
| hide_select | `boolean`| true | Si es _true_, el _select_ de provincias, se muestra unicamente en pantallas pequeñas. |


### Orden de precedencia para entradas iniciales

La opción _**hash**_ tiene precedencia sobre: _**initial_entry**_ y _**random_entry**_. Mientras que _**initial_entry**_ tiene precedencia solo sobre _**random_entry**_.

----

**Referencias**

1. Opciones _PonchoMap_ y _PonchoMapFilter_: <[https://github.com/argob/poncho/tree/master/src/js/poncho-map](https://github.com/argob/poncho/tree/master/src/js/poncho-map/)>
2. Leaftlet <[https://leafletjs.com/](https://leafletjs.com/)>