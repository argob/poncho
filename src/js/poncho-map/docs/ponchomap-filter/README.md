
# PonchoMapFilter

- [PonchoMapFilter](#ponchomapfilter)
  - [Opciones para filters](#opciones-para-filters)
    - [Opciones para field](#opciones-para-field)
    - [Opciones para fields](#opciones-para-fields)



| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| filters | `object` | `false` | Consultar opciones para [filters](#opciones-para-filters) |
| filters_visible | `boolean` | `false` | Define el estado inicial del panel de filtros. |
| filters_info | `boolean` | `false` | Muestra un icono con _tooltip_ que indica el total de resultados por filtro. |

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

Alternativamente, es posible configurar filtros de forma manual:

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
| legend | `string` | `false` | Establece el nombre del legend en el fieldset de opciones. |
| type | `string` | checkbox | Define el tipo de input del filtro. Opciones disponibles: `checkbox`, `radio` y `select`. |
| field | `Object` | `false` | Crea un filtro basado en una clave de la entrada de datos. Consultar opciones para [field](#opciones-para-field). |
| fields | `Object` | `false` | A diferencia de *field*, genera un filtro basado en criterios definidos por el usuario utilizando datos existentes en las entradas. Consultar opciones para [fields](#opciones-para-fields). |
| check_uncheck_all | `boolean` | `false` | Al habilitarse, muestra dentro de cada fieldset (debajo del legend) los botones _marcar todos_ y _desmarcar todos_ para los checkbox de ese filtro. |
| label | `boolean` | `false` | Define el texto del label del input. Se aplica únicamente a formularios tipo `select`. |
| all_options_text | `string` | `null` | Define el texto de la opción que selecciona todos los items. Se aplica únicamente a formularios tipo `select`. |


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
| 0 | `string` | Clave que se utilizará como criterio de filtrado. |
| 1 | `string` o `boolean` | Establece el estado inicial de los checkbox. Valores posibles: "checked" o `false`. |


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
| 0 | `string` | Clave que se utilizará como criterio de filtrado. |
| 1 | `string` | Nombre que se mostrará en el `<label>` del checkbox. |
| 2 | `object` | Listado de valores que se buscarán en cada iteración. |
| 3 | `string` o `boolean` | Establece el estado inicial del checkbox. Valores posibles: "checked" o `false`. |
