[Volver al inicio ⏎](../../readme.md)

---

<!-- omit in toc -->
# PonchoMapFilter

`PonchoMapFilter` extiende `PonchoMap` añadiendo un panel de filtros interactivo para acotar marcadores o polígonos según criterios definidos en el dataset.

- [Parámetros](#parámetros)
- [Opciones para filters](#opciones-para-filters)
  - [Parámetros](#parámetros-1)
  - [Opciones para field](#opciones-para-field)
    - [Parámetros de entrada field](#parámetros-de-entrada-field)
    - [Sintaxis](#sintaxis)
  - [Opciones para fields](#opciones-para-fields)
    - [Parámetros para entradas en fields](#parámetros-para-entradas-en-fields)
    - [Sintaxis](#sintaxis-1)
  - [Opciones para field](#opciones-para-field-1)

## Parámetros

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| `filters` | `Array` | `false` | Definición de los grupos de filtros. Ver [filters](#opciones-para-filters). |
| `filters_visible` | `boolean` | `false` | Determina el estado inicial del panel de filtros. |
| `filters_info` | `boolean` | `false` | Muestra un icono con _tooltip_ que indica el total de resultados por filtro. |
| `fit_bounds_after_filter` | `boolean` | `false` | Ajusta los límites del mapa a los elementos visibles tras cada cambio de filtros. |

## Opciones para filters

### Parámetros

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| `legend` | `string` | `false` | Texto del `<legend>` dentro del `<fieldset>` de opciones. |
| `type` | `string` | `"checkbox"` | Tipo de control. Valores posibles: `"checkbox"`, `"radio"`, `"select"`. |
| `field` | `Array` | `false` | Genera un filtro automáticamente a partir de una clave del dataset. Ver [field](#opciones-para-field). |
| `fields` | `Array` | `false` | Define manualmente los grupos y criterios de filtrado. Ver [fields](#opciones-para-fields). |
| `check_uncheck_all` | `boolean` | `false` | Muestra los botones _Marcar todos_ y _Desmarcar todos_. Solo aplica a `"checkbox"`. |
| `label` | `string` | `false` | Texto del `<label>` del input. Solo aplica a `"select"`. |
| `all_options_text` | `string` | `null` | Texto de la opción que selecciona todos los ítems. Solo aplica a `"select"`. |
| `show_label` | `boolean` | `true` | Muestra u oculta el `<label>` del campo. Solo aplica a `"select"`. |
| `show_legend` | `boolean` | `true` | Muestra u oculta el `<legend>` del fieldset. Solo aplica a `"select"`. |

### Opciones para field

`field` acepta un array posicional que define qué clave del dataset se usa como criterio de filtrado y el estado inicial de los controles.

#### Parámetros de entrada field

| Posición | Tipo | Descripción |
|:---|:---|:---|
| `0` | `string` | Clave del dataset que se usará como criterio de filtrado. |
| `1` | `string \| boolean` | Estado inicial de los checkboxes: `"checked"` o `false`. |

#### Sintaxis

```js
const options = {
    filters: [
        {
            legend: "Ver",
            type: "checkbox",
            field: ["provincia", "checked"]
        }
    ]
};
```

### Opciones para fields

`fields` acepta un array de entradas. Cada entrada es un array posicional con la siguiente estructura:

#### Parámetros para entradas en fields

| Posición | Tipo | Descripción |
|:---|:---|:---|
| `0` | `string` | Clave del dataset que se usará como criterio de filtrado. |
| `1` | `string` | Texto del `<label>` del checkbox. |
| `2` | `Array` | Valores a evaluar contra la clave indicada en `0`. El filtro es verdadero si al menos uno de estos valores coincide con el dato del ítem. |
| `3` | `string \| boolean` | Estado inicial del checkbox: `"checked"` o `false`. |

#### Sintaxis

```js
const options = {
    filters: [
        {
            legend: "Ver",
            type: "checkbox",
            fields: [
                ["provincia", "Noreste Argentino", ["Chaco", "Corrientes", "Formosa", "Misiones"], "checked"],
                // ...
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
| show_label | `boolean` | `true` | Muestra u oculta la etiqueta `label`, en un campo de formulario tipo `select`. |
| show_legend | `boolean` | `true` | Muestra u oculta la etiqueta `label`, en un campo de formulario tipo `select`. |




### Opciones para field

```js
const options = {
    filters: [
        {
            legend: "Ver",
            type: "checkbox",
            fields: [
                ["provincia", "Buenos Aires",       ["Buenos Aires", "Ciudad Autónoma de Buenos Aires"], "checked"],
                ["provincia", "Noreste Argentino",  ["Chaco", "Corrientes", "Formosa", "Misiones"],      "checked"],
                ["provincia", "Noroeste Argentino", ["Catamarca", "Jujuy", "La Rioja", "Salta", "Santiago del Estero", "Tucumán"]],
                ["provincia", "Región Centro",      ["Córdoba", "Entre Ríos", "Santa Fe"]],
                ["provincia", "Región Cuyo",        ["La Pampa", "Mendoza", "San Juan", "San Luis"]],
                ["provincia", "Región Patagonia",   ["Chubut", "Neuquén", "Río Negro", "Santa Cruz", "Tierra del Fuego"]]
            ]
        }
    ]
};
```
