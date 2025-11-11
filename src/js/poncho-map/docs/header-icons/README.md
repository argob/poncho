
### Opciones para header_icons

- [Opciones para header\_icons](#opciones-para-header_icons)


![Header icons](./img/header-icons.png)

```js
const options = {
    "header_icons": [
        {
            "key": "title",
            "css": "icono-arg-cannabis-medicinal-1 text-primary", 
            "style": "border:2px solid black;"
        },
        {
            "key": "ubicacion",
            "css": "icono-arg-marker text-arandano", 
            "style": "border:2px solid black;"
        },
        ...
    ]
}
```

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| key | `string` |  | Define la clave a la que se le asigna el icono. |
| css | `string, function` | {} | **String**<br>Definición de *css*, ej: `"text-primary bg-warning"`.<br><br>**Función** <br>`css: (self, entry) => string;`<br>Dónde `self` es la instancia del objeto *PonchoMap* o *PonchoMapFilter* y `entry` corresponde a una entrada en `feature.properties` del JSON. |
| style | `string, function` | {} | **String**<br>Definición de *style*, ej: `"background-color:gold; color:#333;"`.<br><br>**Función** <br>`style: (self, entry) => string;`<br>Dónde `self` es la instancia del objeto *PonchoMap* o *PonchoMapFilter* y `entry` corresponde a una entrada en `feature.properties` del JSON. |
| html | `string, function` | {} | **String**<br>Retornando un string HTML, ej.<br>`<i class="icono-arg-cannabis-medicinal-1"></i>`<br><br>**Función** <br>Retornando un string en una función ej.<br>`(self, entry) => string;` |

