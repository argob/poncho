[Volver al inicio ⏎](../../readme.md)

---

<!-- omit in toc -->
# PonchoMapSearch

`PonchoMapSearch` agrega un campo de búsqueda a una instancia de `PonchoMapFilter`. Permite filtrar entradas del mapa por texto libre sobre uno o más campos del dataset, con soporte para `datalist` nativo o un componente `combobox` personalizable.

- [Parámetros](#parámetros)
- [Ejemplo de uso](#ejemplo-de-uso)

## Parámetros

| Parámetro | Tipo | Default | Descripción | Uso |
|:---|:---|:---|:---|:---|
| `text` | `string` | `"title"` | Clave del dataset cuyo valor se muestra como texto en el desplegable del buscador. | Opcional |
| `sort` | `boolean` | `true` | Ordena las opciones del datalist de forma alfanumérica. | Opcional |
| `sort_reverse` | `boolean` | `false` | Invierte el orden alfanumérico del datalist. | Opcional |
| `scope` | `string` | — | Identificador del contenedor que asocia el buscador con su instancia de mapa. | **Requerido** |
| `placeholder` | `string` | `"Su búsqueda"` | Texto de ayuda visible en el campo de búsqueda antes de que el usuario escriba. | Opcional |
| `search_fields` | `string[]` | `[]` | Lista de claves del dataset sobre las que se ejecuta la búsqueda. Ej.: `["provincia", "localidad", "nombre"]` | Opcional |
| `datalist` | `boolean` | `false` | Habilita un elemento `<datalist>` HTML nativo como ayuda de autocompletado. | Opcional |
| `combobox` | `boolean` | `false` | Habilita el componente combobox para resultados con visualización personalizada. | Opcional |
| `combobox_options` | `object` | `{}` | Configura la presentación del menú desplegable del combobox. Ver [combobox_options](./combobox/readme.md). | Opcional |
| `debounce_delay` | `number` | `300` | Tiempo de espera en milisegundos entre la última tecla presionada y la ejecución de la búsqueda. | Opcional |


## Ejemplo de uso

```javascript
// Instancia del mapa
const options = { /* opciones de PonchoMapFilter */ };
const ponchoMap = new PonchoMapFilter(entradas_json, options);
ponchoMap.render();

// Configuración del buscador
const searchOptions = {
    scope: "search-efectores",
    placeholder: "Buscá tu Punto Digital",
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

const search = new PonchoMapSearch(ponchoMap, searchOptions);
search.render();
```
