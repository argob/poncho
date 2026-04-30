<!-- omit in toc -->
# gapi-legacy

Convierte una respuesta de la Google Sheets API v4 a la estructura legacy de la versión 3, para mantener compatibilidad con integraciones que aún esperan el formato `feed/entry`.

<!-- omit in toc -->
# En ésta página


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [gapi-legacy](#gapi-legacy)
- [En ésta página](#en-ésta-página)
  - [Problema que resuelve](#problema-que-resuelve)
  - [Uso](#uso)
    - [Parámetros](#parámetros)
    - [Retorna](#retorna)
    - [Normalización de nombres de columna](#normalización-de-nombres-de-columna)
  - [Ejemplo](#ejemplo)
  - [Errores](#errores)

<!-- /code_chunk_output -->



## Problema que resuelve

La API v3 de Google Sheets (deprecada) devolvía los datos en una estructura con `feed` y `entry`, donde cada columna se representaba como `gsx$<nombre>` con su valor bajo la clave `$t`. La API v4 actual devuelve un array de arrays bajo la propiedad `values`.

Esta función actúa como adaptador: recibe la respuesta de la v4 y devuelve un objeto con la forma exacta que esperaba la v3.

## Uso

```js
// En un módulo Node.js
const gapi_legacy = require("./gapi-legacy");

// En el browser, cargar el script y usar la función directamente
```

### Parámetros

| Parámetro          | Tipo                      | Descripción                                      |
|--------------------|---------------------------|--------------------------------------------------|
| `response`         | `object`                  | Respuesta de la Google Sheets API v4             |
| `response.values`  | `Array<Array<string>>`    | Matriz 2D: primera fila = encabezados, resto = datos |

### Retorna

`object` — Objeto con la estructura v3:

```
{
  feed: {
    entry: [
      {
        "gsx$<columna>": { "$t": "<valor>" },
        ...
      },
      ...
    ]
  }
}
```

### Normalización de nombres de columna

Los nombres de columna se normalizan antes de usarlos como clave:

- Se convierten a minúsculas.
- Se eliminan espacios, barras (`/`) y guiones bajos (`_`).

Por ejemplo, la columna `Nombre_Completo` se transforma en
`gsx$nombrecompleto`.

## Ejemplo

```js
const response = {
  values: [
    ["name",  "age", "city"   ],
    ["Alice", "30",  "Rosario"],
    ["Bob",   "25",  "Córdoba"]
  ]
};

const result = gapi_legacy(response);

// result:
// {
//   feed: {
//     entry: [
//       {
//         "gsx$name": { "$t": "Alice" },
//         "gsx$age":  { "$t": "30"    },
//         "gsx$city": { "$t": "Rosario" }
//       },
//       {
//         "gsx$name": { "$t": "Bob"     },
//         "gsx$age":  { "$t": "25"      },
//         "gsx$city": { "$t": "Córdoba" }
//       }
//     ]
//   }
// }
```

## Errores

La función lanza `TypeError` en los siguientes casos:

| Condición                                    | Mensaje                                              |
|----------------------------------------------|------------------------------------------------------|
| `response` es falsy o no tiene `values`      | `"Invalid response format"`                          |
| `values` no es un array de arrays            | `"Invalid response format: values should be arrays"` |
| `values` está vacío                          | `"Invalid response format"`                          |


