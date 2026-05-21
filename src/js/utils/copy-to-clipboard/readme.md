<!-- omit from toc -->
# copyToClipboard

Copia el contenido de texto de un elemento HTML al portapapeles usando la API `Clipboard`.

<!-- omit in toc -->
## En ésta página
- [Sintaxis](#sintaxis)
- [Parámetros](#parámetros)
- [Comportamiento](#comportamiento)
- [Ejemplos](#ejemplos)


### Sintaxis

```js
copyToClipboard(selector, [callback]);
```

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `selector` | `string \| HTMLElement` | Sí | Selector CSS (ej.: `".clase"`, `"#id"`) o referencia directa a un `HTMLElement`. |
| `callback` | `function` | No | Función que se ejecuta tras copiar con éxito. Recibe el elemento como argumento. |

### Comportamiento

- Si el selector no coincide con ningún elemento o el elemento no es
  un `HTMLElement`, la función retorna sin efecto.
- Utiliza la API asíncrona `navigator.clipboard.writeText`.

### Ejemplos

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

