<!-- omit in toc -->
# PonchoMapSearch

- [Parámetros](#parámetros)
- [Ejemplo de uso para el buscador](#ejemplo-de-uso-para-el-buscador)

## Parámetros

| Parámetro | Tipo | Default | Descripción | Tipo de uso |
|:---|:---|:---|:---|:---|
| scope | object |  | Scope se utiliza para asegurarse de que todas las funciones serán sobre el ambiente de un buscador y un mapa determinados. | _Requerido_ |
| placeholder | `string` | Su búsqueda | Texto de ayuda que aparece en un tono medio en el selector de items, complementa al label de un formulario. | *Opcional* |
| search_fields | `object` | [] | Define los índices que se utilizan para realizar la búsqueda. Ej. `["provincia", "localidad", "nombre"]` | *Opcional* |
| datalist | `boolean` | `false` | Despliega un HTML datalis para el _input_ | *Opcional* |
| combobox | `boolean` | `false` | Despliega el componente combobox para obtener resultados de búsqueda mejorados y con una visualización de resultados a medida del requerimiento del mapa. | Ver combobox_options |
| combobox_options | `object` | `false` | Permite modificar la visualización de los resultados de búsqueda y cómo se muestra el menú desplegable | *Opcional* |


## Ejemplo de uso para el buscador

```javascript
// PonchoMap
const options = {...};
const poncho_map = new PonchoMapFilter(entradas_json, options);
poncho_map.render();

// Configuración de PonchoMapSearch
const search_options = {
  scope:"search-efectores",
  placeholder:"Buscá tu Punto Digital",
  search_fields: [
      "nombre",
      "institucion",
      "localidad",
      "provincia",
      "municipio_nombre"
  ],
  datalist: false,
  combobox: true,
  combobox_options: {
      display: "expanded",
      template: `<p>{{name}}</p><p>{{description}}</p>`,
  },
};
search = new PonchoMapSearch(poncho_map, search_options);
search.render();
```