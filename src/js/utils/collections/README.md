<!-- omit in toc -->
# Collections

Utilidades para aplanar objetos y colecciones con estructura anidada.

<!-- omit in toc -->
## En ésta página

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Collections](#collections)
  - [En ésta página](#en-ésta-página)
  - [Funciones](#funciones)
    - [flattenObject](#flattenobject)
    - [flattenNestedObjects](#flattennestedobjects)
  - [Uso en Node.js](#uso-en-nodejs)
  - [Uso en el navegador](#uso-en-el-navegador)

<!-- /code_chunk_output -->




## Funciones

### flattenObject

Aplana un objeto anidado en un objeto plano. Cada clave del resultado representa la ruta completa al valor original, con los niveles separados por `__` (doble guión bajo).

**Sintaxis**

```js
flattenObject(obj, prefix);
```


**Parámetros**

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| `obj` | `Object` | Objeto con cualquier nivel de anidamiento. |
| `prefix` | `string` | Prefijo acumulado para las claves. Pasar `""` en la llamada inicial. |

**Retorna:** `Object` — Objeto plano sin propiedades anidadas.

**Ejemplo**

```js
flattenObject({ a: { b: { c: 1 } } }, "");
// => { "a__b__c": 1 }

flattenObject({ nombre: "Juan", direccion: { ciudad: "Mendoza", cp: "5500" } }, "");
// => { nombre: "Juan", "direccion__ciudad": "Mendoza", "direccion__cp": "5500" }
```



### flattenNestedObjects

Aplana un array de objetos anidados aplicando `flattenObject` a cada elemento. Útil para normalizar colecciones de registros antes de procesarlos o mostrarlos en una tabla plana.

**Sintaxis**

```js
flattenNestedObjects(entries)
```

**Parámetros**

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| `entries` | `Object[]` | Array de objetos que pueden tener propiedades anidadas. |

**Retorna:** `Object[]` — Nuevo array con cada objeto completamente aplanado.

**Ejemplo**

```js
flattenNestedObjects([
  { id: 1, info: { nombre: "Ana", cargo: "Dev" } },
  { id: 2, info: { nombre: "Luis", cargo: "QA" } }
]);
// => [
//   { id: 1, "info__nombre": "Ana", "info__cargo": "Dev" },
//   { id: 2, "info__nombre": "Luis", "info__cargo": "QA" }
// ]
```

## Uso en Node.js

```js
const { flattenObject, flattenNestedObjects } = require("./collections");
```

## Uso en el navegador

Incluir el script directamente y las funciones estarán disponibles en el scope global:

```html
<script src="collections.js"></script>
```

