<!-- omit in toc -->
# Slugify

Convierte una cadena de texto a formato slug: minúsculas, palabras separadas por guiones, sin caracteres especiales.

<!-- omit in toc -->
## En ésta página

- [Sintaxis](#sintaxis)
- [Argumentos](#argumentos)
- [Uso](#uso)
  - [En el navegador](#en-el-navegador)
  - [En Node.js](#en-nodejs)


## Sintaxis

```js
slugify(str);
```

## Argumentos

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


## Uso

### En el navegador

```html
<script src="slugify.js"></script>
<script>
  slugify("Canción de cuna");
  // → "cancion-de-cuna"
</script>
```

### En Node.js

```js
const { slugify  } = require("./slugify");

slugify("Canción de cuna");  // → "cancion-de-cuna"
```