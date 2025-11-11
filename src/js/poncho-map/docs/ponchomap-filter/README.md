
# PonchoMapFilter

- [PonchoMapFilter](#ponchomapfilter)
  - [Opciones para filters](#opciones-para-filters)
    - [Opciones para field](#opciones-para-field)
    - [Opciones para fields](#opciones-para-fields)



| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| filters |`object`| `false` | Ver opciones para [filters](#opciones-filters)|
| filters_visible | `boolean` | `false` | Configura el estado inicial del panel de filtros. |
| filters_info | `boolean` | `false` | Muestra un icono con un _tooltip_ con el total de resultados por filtro. |

## Opciones para filters

```js
const options = {
  "filters": [
    {
      "legend": "Ver",
      "type": "checkbox",
      "field": ["provincia", "checked"],
      "fields": false,
      "check_uncheck_all": false
    }
  ]
};
```

O con filtros armados manualmente

```js
const options = {
  "filters": [
    {
      "legend": "Ver",
      "type": "checkbox",
      "field": false,
      "fields": [
          ["provincia", "Buenos Aires", ["Buenos Aires", "Ciudad Autónoma de Buenos Aires"], "checked"],
          ["provincia", "Noreste Argentino", ["Chaco", "Corrientes", "Formosa", "Misiones"], "checked"],
          ["provincia", "Noroeste Argentino", ["Catamarca", "Jujuy", "La Rioja", "Salta", "Santiago del Estero", "Tucumán"]],
          ["provincia", "Región Centro", ["Córdoba", "Entre Ríos", "Santa Fe"]],
          ["provincia", "Región Cuyo", ["La Pampa", "Mendoza", "San Juan", "San Luis"]],
          ["provincia", "Región Patagonia", ["Chubut", "Neuquén", "Río Negro", "Santa Cruz", "Tierra del Fuego"]],
      ]
    }
  ]
};
```

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| legend | `string` | `false` | Establece un nombre para el legend en el fieldset de opciones. |
| type | `string` | checkbox | Define el tipo de input que debe reproducir el filtro. Dos opciones son las posibles: checkbox y radio.  |
| field | `Object` | `false` | Permite crear un filtro en base a una de las claves en la entrada de datos.<br><br>Ver opciones para [field](#opciones-field)|
| fields | `Object` | `false` | A diferencia de *field*, permite componer un filtro en base a criterios definidos por el usuario utilizando datos existentes en las entradas.<br><br>Ver opciones para [fields](#opciones-fields)|
| check_uncheck_all | `boolean` | `false` | Si se habilita dentro de cada fieldset, debajo del legend, se pueden visualizar los botones de: _marcar todos_ y _desmarcar todos_, los checkbox de ese filtro. |


### Opciones para field 

```js
const options = {
    "filters": [
        {
            "legend": "Ver",
            "type": "checkbox",
            "field": ["provincia", "checked"],
            "fields": false
        }
    ]
}
```
| Posición | Tipo | Descripción |
|:---|:---|:---|
| 0 | `string` | Clave por la que se quiere filtrar. |
| 1 | {`string|boolean`, ["checked",`false`]} | Designa el estado inicial de los checkbox. |


### Opciones para fields

```js
const options = {
    "filters": [
        {
            "legend": "Ver",
            "type": "checkbox",
            "field": false,
            "fields": [
                [
                    "provincia",
                    "Noreste Argentino",
                    ["Chaco", "Corrientes", "Formosa", "Misiones"],
                    "checked"
                ]
            ]
        }
    ]
}
```


| Posición | Tipo | Descripción |
|:---|:---|:---|
| 0 | `string` | Clave por la que se quiere filtrar. |
| 1 | `string` | Nombre que se verá en el `<label>` del checkbox |
| 2 | `object` | Listado de valores que se deberá buscar en cada iteración de búsqueda. |
| 3 | {`string|boolean`, ["checked",`false`]} | Designa el estado inicial del checkbox. |
