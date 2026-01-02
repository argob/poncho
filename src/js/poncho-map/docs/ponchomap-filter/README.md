
# PonchoMapFilter

- [PonchoMapFilter](#ponchomapfilter)
  - [Opciones para filters](#opciones-para-filters)
    - [Opciones para field](#opciones-para-field)
    - [Opciones para fields](#opciones-para-fields)



| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| filters |`object`| `false` | Ver opciones para [filters](#opciones-filters)|
| filters_visible | `boolean` | `false` | Define el estado inicial del panel de filtros. |
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
| type | `string` | checkbox | Define el tipo de input del filtro. Opciones disponibles: checkbox, radio y select. |
| field | `Object` | `false` | Crea un filtro basado en una de las claves de la entrada de datos.<br><br>Ver opciones para [field](#opciones-para-field) |
| fields | `Object` | `false` | A diferencia de *field*, compone un filtro basado en criterios definidos por el usuario utilizando datos existentes en las entradas.<br><br>Ver opciones para [fields](#opciones-para-fields) |
| check_uncheck_all | `boolean` | `false` | Si se habilita, visualiza dentro de cada fieldset (debajo del legend) los botones _marcar todos_ y _desmarcar todos_ para los checkbox de ese filtro. |
| label | `boolean` | `false` | Define el texto del label del input. Únicamente para formularios tipo `select`. |
| all_options_text | `string` | `null` | Define el texto de la opción que marca todos los items. Únicamente para formularios tipo `select`. |


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
| 1 | `string` | Nombre que se visualiza en el `<label>` del checkbox. |
| 2 | `object` | Listado de valores que se buscan en cada iteración. |
| 3 | {`string|boolean`, ["checked",`false`]} | Designa el estado inicial del checkbox. |
