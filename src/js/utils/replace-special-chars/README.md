<!-- omit in toc -->
# String

Utilidades para manipulación de cadenas de texto en JavaScript. Incluye funciones para normalizar acentos, generar slugs y aplicar formato title case.

<!-- omit in toc -->
## En ésta página


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [String](#string)
  - [En ésta página](#en-ésta-página)
  - [Funciones](#funciones)
    - [`replaceSpecialChars(data)`](#replacespecialcharsdata)
    - [`slugify(str)`](#slugifystr)
    - [`toTitleCase(str, allWords)`](#totitlecasestr-allwords)
  - [Uso](#uso)
    - [En el navegador](#en-el-navegador)
    - [En Node.js](#en-nodejs)

<!-- /code_chunk_output -->



## Funciones

### `replaceSpecialChars(data)`

Reemplaza caracteres con acento o tilde por su equivalente ASCII. Los caracteres que no figuran en el mapa interno se conservan sin modificar.

| Parámetro | Tipo     | Descripción              |
|-----------|----------|--------------------------|
| `data`    | `string` | Cadena de texto a limpiar |

**Retorna:** `string` — cadena sin acentos. Cadena vacía si el
argumento no es un string válido.

```js
replaceSpecialChars("Acción Murciélago árbol niño");
// → "Accion Murcielago arbol nino"
```


### `slugify(str)`

Convierte una cadena de texto a formato slug: minúsculas, palabras separadas por guiones, sin caracteres especiales.

| Parámetro | Tipo     | Descripción                   |
|-----------|----------|-------------------------------|
| `str`     | `string` | Cadena de texto a convertir   |

**Retorna:** `string` — cadena en formato slug. El argumento original
si no es un string válido.

```js
slugify("El murciélago remolón parece un niño");
// → "el-murcielago-remolon-parece-un-nino"

slugify("Arroz & Porotos: una receta sencilla");
// → "arroz-and-porotos-una-receta-sencilla"
```


### `toTitleCase(str, allWords)`

Convierte una cadena de texto a formato title case.

| Parámetro   | Tipo      | Por defecto | Descripción                                  |
|-------------|-----------|-------------|----------------------------------------------|
| `str`       | `string`  | —           | Cadena a transformar                         |
| `allWords`  | `boolean` | `true`      | `true` capitaliza todas las palabras; `false` solo la primera letra de la cadena |

**Retorna:** `string` — cadena en title case. El argumento original si no es un string válido.

```js
toTitleCase("hola mundo cruel");
// → "Hola Mundo Cruel"

toTitleCase("hola mundo cruel", false);
// → "Hola mundo cruel"
```


## Uso

### En el navegador

```html
<script src="string.js"></script>
<script>
  slugify("Canción de cuna");
  // → "cancion-de-cuna"
</script>
```

### En Node.js

```js
const { slugify, replaceSpecialChars, toTitleCase } = require("./string");

slugify("Canción de cuna");  // → "cancion-de-cuna"
replaceSpecialChars("niño"); // → "nino"
toTitleCase("buenos aires"); // → "Buenos Aires"
```