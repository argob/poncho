# PonchoMapSearch

- [PonchoMapSearch](#ponchomapsearch)
  - [Ejemplo de uso para el buscador](#ejemplo-de-uso-para-el-buscador)


| Parámetro | Tipo | Default | Descripción | Tipo de uso |
|:---|:---|:---|:---|:---|
| scope | object |  | Scope se utiliza para asegurarse de que todas las funciones serán sobre el ambiente de un buscador y un mapa determinados. | _Requerido_ |
| placeholder | `string` | Su búsqueda | Texto de ayuda que aparece en un tono medio en el selector de items, complementa al label de un formulario. | *Opcional* |
| search_fields | `object` | [] | Define los índices que se utilizan para realizar la búsqueda. Ej. `["provincia", "localidad", "nombre"]` | *Opcional* |
| datalist | `boolean` | `true` | Despliega un HTML datalis para el _input_ | *Opcional* |

## Ejemplo de uso para el buscador

```javascript
// PonchoMap
const options = {...};
const poncho_map = new PonchoMapFilter(entradas_json, options);
poncho_map.render();

// Configuración de PonchoMapSearch
const search_options = {
  "scope":"search-efectores",
  "placeholder":"Buscá tu Punto Digital",
  "search_fields": [
      "nombre",
      "institucion",
      "localidad",
      "provincia",
      "municipio_nombre"
  ]
};
search = new PonchoMapSearch(poncho_map, search_options);
search.render();
```