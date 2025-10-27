# Marker

## Opciones para marker

La configuración marker ofrece flexibilidad en la definición del marcador del mapa. Permite utilizar los marcadores predefinidos de la librería de argentina.gob.ar, los cuales disponen de una gran variedad de colores y patrones o alternativamente, es posible crear un marcador completamente personalizado mediante el uso directo de los objetos `L.icon` o `L.divIcon` de la librería [leaflet](https://leafletjs.com/).

### Definiendo colores

La opción `marker` nos permite definir el color de los *markers* asignando el nombre de [color poncho](https://argob.github.io/poncho/identidad/colores/) del siguiente modo:

```js
const options = {
    "marker": "arg-mandarina"
};
```

Otra opción es agregar una función en la que podemos definir una lógica de colores de acuerdo a la fuente de datos que nos llega, por ejemplo: 

```js
// Si hay una entrada con clave color en: `entry.color`, la usa. De otro modo
// muestra el color por defecto: `arg-azul`.
const options = {
    "marker_color": (self, entry) => (typeof  entry.color !== "undefined" && entry.color != "" ? entry.color : "arg-azul")
};
```

### Modificando el tipo de marker

Esta opción también ofrece la posibilidad de crear *markers* utilizando imágenes o en formato html. En el siguiente ejemplo se ve como se puede aplicar un ícono de Poncho Fonts en un *marker*. Cuando se utiliza la función de esta manera debe retornar una instancia de `L.icon` o variantes *leaflet*.

```js
const options = {
    "marker": (self, entry) => {
        const icon_div = (color) => {
            return new L.divIcon({
                html: `<i class="icono-arg-marcador-ubicacion-2 text-${color}">`,
                iconSize: [38, 24],
                iconAnchor: [22, 41],
                popupAnchor: [-3, -40]
            });
        };

        if(typeof  entry.color !== "undefined" && entry.color){
            return icon_div(entry.color);
        }
        return icon_div("arg-azul");
    }
}
```