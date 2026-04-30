<!-- omit in toc -->
# Document

Colección de utilidades JavaScript para manipulación del DOM.

<!-- omit in toc -->
En ésta página


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Document](#document)
  - [Funciones](#funciones)
    - [headStyle](#headstyle)
      - [Parámetros](#parámetros)
      - [Comportamiento](#comportamiento)
      - [Ejemplos](#ejemplos)
    - [copyToClipboard](#copytoclipboard)
      - [Parámetros](#parámetros-1)
      - [Comportamiento](#comportamiento-1)
      - [Ejemplos](#ejemplos-1)

<!-- /code_chunk_output -->



## Funciones

### headStyle

Inserta un bloque de estilos CSS en el elemento `<head>` del documento.

**Sintaxis**

```js
headStyle(id, styleDefinitions, [mediaType]);
```

#### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | `string` | Sí | Identificador único del bloque en el DOM. Si no es válido, se usa `"argob-custom-css"`. |
| `styleDefinitions` | `string` | Sí | Cadena con las definiciones CSS a insertar. |
| `mediaType` | `string` | No | Valor del atributo `media`. Aplica estilos condicionalmente según el media query. |

#### Comportamiento

- Si ya existe un `<style>` con el mismo `id` e idénticas definiciones,
  no realiza ninguna acción.
- Si existe el `id` con definiciones distintas, reemplaza el bloque anterior.

#### Ejemplos

```js
// Insertar estilos simples
headStyle("custom-id", `div { border: 2px solid red }`);
```

```js
// Insertar estilos con media query
headStyle(
    "custom-id",
    `div { border: 2px solid red }`,
    "all and (max-width: 500px)"
);
```

---

### copyToClipboard

Copia el contenido de texto de un elemento HTML al portapapeles
usando la API `Clipboard`.

**Sintaxis**

```js
copyToClipboard(selector, [callback]);
```

#### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `selector` | `string \| HTMLElement` | Sí | Selector CSS (ej.: `".clase"`, `"#id"`) o referencia directa a un `HTMLElement`. |
| `callback` | `function` | No | Función que se ejecuta tras copiar con éxito. Recibe el elemento como argumento. |

#### Comportamiento

- Si el selector no coincide con ningún elemento o el elemento no es
  un `HTMLElement`, la función retorna sin efecto.
- Utiliza la API asíncrona `navigator.clipboard.writeText`.

#### Ejemplos

```js
// Copiar el contenido de un elemento por selector
copyToClipboard("#mi-elemento");
```

```js
// Copiar con callback de confirmación
copyToClipboard(".codigo", (el) => {
    el.classList.add("copiado");
});
```

```js
// Pasar directamente un elemento HTMLElement
const el = document.querySelector(".resultado");
copyToClipboard(el, () => alert("¡Copiado!"));
```

