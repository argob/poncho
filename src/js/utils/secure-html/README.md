<!-- omit in toc -->
# secure-html

Utilidad JavaScript para sanitizar cadenas de texto que contienen HTML, bloqueando etiquetas y atributos peligrosos sin afectar el contenido de texto.

<!-- omit in toc -->
## En ésta página

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [secure-html](#secure-html)
  - [En ésta página](#en-ésta-página)
  - [Advertencia](#advertencia)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [API](#api)
    - [`secureHTML(str, [exclude])`](#securehtmlstr-exclude)
      - [Comportamiento](#comportamiento)
      - [Etiquetas siempre bloqueadas](#etiquetas-siempre-bloqueadas)
  - [Etiquetas seguras predeterminadas](#etiquetas-seguras-predeterminadas)
  - [Ejemplos adicionales](#ejemplos-adicionales)
    - [Bloquear event handlers](#bloquear-event-handlers)
    - [Bloquear `javascript:` en href](#bloquear-javascript-en-href)
    - [Bloquear `data:` URI en `src` de imagen](#bloquear-data-uri-en-src-de-imagen)
    - [Intentar incluir una etiqueta peligrosa en exclude](#intentar-incluir-una-etiqueta-peligrosa-en-exclude)

<!-- /code_chunk_output -->




## Advertencia

> [!CAUTION]
> Esta función **no reemplaza** medidas de seguridad del lado del servidor. Para proteger una aplicación web es crucial implementar validación en el servidor, protección contra XSS y usar bibliotecas y frameworks que promuevan prácticas de seguridad sólidas.
>
>Si no está seguro de los riesgos que implica exponer esta función en su sitio web, asesórese con un especialista antes de usarla.


## Instalación

```js
// CommonJS
const { secureHTML } = require('./secure-html');

// ESM / navegador (import directo)
import { secureHTML } from './secure-html.js';
```


## Uso básico

```js
// Escapar todo el HTML
secureHTML('<h1>Hola mundo</h1>');
// → "&lt;h1&gt;Hola mundo&lt;/h1&gt;"

// Preservar una etiqueta segura
secureHTML('<h1>Título</h1> <a href="/inicio">Inicio</a>', ["a"]);
// → "&lt;h1&gt;Título&lt;/h1&gt; <a href="/inicio">Inicio</a>"

// Permitir todas las etiquetas de la lista segura predeterminada
secureHTML('<p>Texto</p><script>alert(1)</script>', ["*"]);
// → "<p>Texto</p>&lt;script&gt;alert(1)&lt;/script&gt;"
```


## API

### `secureHTML(str, [exclude])`

| Parámetro | Tipo       | Por defecto | Descripción                                      |
|-----------|------------|-------------|--------------------------------------------------|
| `str`     | `string`   | —           | Cadena de texto a sanitizar.                     |
| `exclude` | `string[]` | `[]`        | Etiquetas HTML que deben preservarse.            |

**Retorna:** `string` — cadena con el HTML sanitizado.

#### Comportamiento

- Todos los caracteres `<` y `>` se convierten en `&lt;` y `&gt;`.
- Las etiquetas indicadas en `exclude` son restauradas, pero con sus atributos peligrosos eliminados.
- Pasar `["*"]` en `exclude` equivale a incluir todas las etiquetas de la lista segura predeterminada.
- Los atributos de evento (`onclick`, `onerror`, `onload`, etc.), `javascript:` en `href`/`src` y `data:` URIs no-imagen en `src` son eliminados incluso en las etiquetas permitidas.

#### Etiquetas siempre bloqueadas

Independientemente de lo que se pase en `exclude`, las siguientes etiquetas **nunca** se restauran:

`script` · `iframe` · `object` · `embed` · `applet` · `meta` · `link` ·
`style` · `base` · `form`



## Etiquetas seguras predeterminadas

Las etiquetas habilitadas al pasar `["*"]`:

| Categoría            | Etiquetas                                                                    |
|----------------------|------------------------------------------------------------------------------|
| Contenedores         | `div`, `section`, `article`, `aside`, `header`, `footer`, `main`, `nav`, `figure`, `figcaption`, `details`, `summary`, `dialog` |
| Texto y formato      | `p`, `span`, `br`, `hr`, `pre`, `code`, `kbd`, `samp`, `var`, `blockquote`, `cite`, `q`, `abbr`, `address`, `time`, `mark`, `small`, `s`, `del`, `ins`, `sub`, `sup`, `wbr` |
| Énfasis              | `strong`, `b`, `em`, `i`, `u`, `dfn`                                        |
| Títulos              | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`                                          |
| Listas               | `ul`, `ol`, `li`, `dl`, `dt`, `dd`                                           |
| Tablas               | `table`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`, `caption`, `col`, `colgroup` |
| Multimedia           | `a`, `img`, `picture`, `source`, `audio`, `video`, `track`                  |
| Interactivos         | `button`, `progress`, `meter`                                                |

---

## Ejemplos adicionales

### Bloquear event handlers

```js
secureHTML('<a onclick="robarDatos()" href="/ok">Click</a>', ["a"]);
// → '<a href="/ok">Click</a>'
```

### Bloquear `javascript:` en href

```js
secureHTML('<a href="javascript:alert(1)">XSS</a>', ["a"]);
// → '<a href="#">XSS</a>'
```

### Bloquear `data:` URI en `src` de imagen

```js
secureHTML('<img src="data:text/html,<script>...</script>">', ["img"]);
// → '<img src="">'
```

### Intentar incluir una etiqueta peligrosa en exclude

```js
secureHTML('<script>alert(1)</script>', ["script"]);
// [secureHTML] No se puede incluir etiquetas peligrosas: script, ...
// → "&lt;script&gt;alert(1)&lt;/script&gt;"
```
