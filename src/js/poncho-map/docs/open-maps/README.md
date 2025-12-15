
# Open maps

- [Open maps](#open-maps)
  - [open\_maps](#open_maps)
  - [Opciones para open\_maps\_options](#opciones-para-open_maps_options)


## open_maps

Open maps es la opción que permite crear un listado de enlaces o agregar enlaces alternativos para poder visualizar el punto geográfico seleccionado en mapas con distintas características y/o herramientas para el usuario.

## Opciones para open_maps_options

La opción open_maps_options, permite incluir enlaces alternativos o modificar el listado de enlaces según las preferencias del usuario. 

Por cada enlace externo que se agrega al listado debe incorporarse según la documentación del proveedor del mapa de destino, la latitud y longitud utilizando la sintaxis de ponchoMap. Ej. `https://www.mapa.com/{{latitude}},{{longitude}}`.


**Definiciones**

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| label |`string`| Abrir en: | Texto para la etiqueta `summary` o enlace para abrir o cerrar el desplegable. |
| items | `object` |  | Permite definir la cantidad de entradas, o enlaces. |

**Definiciones para items**

| Parámetro | Tipo | Descripción |
|:---|:---|:---|
| link |`string`| URL externo. Se pueden utilizar los marcadores `{{latitude}}` y `{{longitude}}` cuantas veces sea necesario, para representar el enlace.  |
| label |`string`| Nombre del enlace.  |
| lang |`string`| Lenguaje definido en la página de destino.  |
| rel |`string`| Tipo de relación con el documento. Más referencias en: [Developer, Mozilla. HTML attribute: rel](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel) |
| target |`string`| Define en que *frame* debe abrirse el hipervínculo.  |

**Sintaxis**

```js
open_maps_options: {
    label: "Abrir en:",
    items: [
        {
            link: 'https://www.google.com/maps/search/?api=1&query={{latitude}},{{longitude}}',
            label: "Google maps",
            lang: "en",
            rel: "alternate",
        },
        ...
    ]
}
```