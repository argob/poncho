<!-- omit in toc -->
# triggerEvent

Asigna un valor a un elemento del DOM y dispara un evento tras un retraso.

<!-- omit in toc -->
## En ésta página

- [Sintaxis](#sintaxis)
  - [Parámetros](#parámetros)
  - [Retorno](#retorno)
- [Comportamiento](#comportamiento)
- [Ejemplos](#ejemplos)
  - [Disparar un evento sin asignar valor](#disparar-un-evento-sin-asignar-valor)
  - [Asignar un valor y disparar el evento](#asignar-un-valor-y-disparar-el-evento)
  - [Usar una referencia a un elemento](#usar-una-referencia-a-un-elemento)
  - [Personalizar el retraso](#personalizar-el-retraso)
  - [Selector o eventType inválido](#selector-o-eventtype-inválido)

## Sintaxis

```js
triggerEvent(selector, value, eventType, timeout);
```

### Parámetros

| Parámetro   | Tipo                    | Requerido | Por defecto | Descripción |
|-------------|-------------------------|-----------|-------------|-------------|
| `selector`  | `string \| Element`     | Sí        | —           | Selector CSS (ej.: `"#id"`, `".clase"`) o referencia directa a un `Element`. |
| `value`     | `*`                     | No        | `undefined` | Valor a asignar a `element.value` antes de disparar el evento. Si no se pasa, no se modifica el valor del elemento. |
| `eventType` | `string`                | Sí        | —           | Tipo de evento a disparar (ej.: `"input"`, `"change"`). |
| `timeout`   | `number`                | No        | `50`        | Retraso en milisegundos antes de disparar el evento. |

### Retorno

Devuelve el ID del temporizador (`setTimeout`) generado, útil para cancelarlo con `clearTimeout` si fuera necesario. Si el selector o el `eventType` no son válidos, retorna `undefined` y no se dispara el evento.

## Comportamiento

- Si `selector` es un `Element`, se usa directamente; si es un `string`, se resuelve con `document.querySelector`.
- Si no se encuentra un elemento válido, emite un error en consola (`[triggerEvent]`) y no ejecuta nada.
- Si `eventType` no es un string válido (vacío o no es `string`), emite un error en consola y no ejecuta nada.
- El evento se dispara dentro de un `setTimeout`, permitiendo que el cambio de valor y el evento ocurran de forma asíncrona.
- El evento se crea con `{ bubbles: true }`, por lo que se propaga por el árbol del DOM.
- Si se pasa `value`, se asigna a `element.value` justo antes de disparar el evento.

## Ejemplos

### Disparar un evento sin asignar valor

```js
triggerEvent("#mi-input", undefined, "focus");
```

### Asignar un valor y disparar el evento

```js
triggerEvent("#mi-input", "Hola mundo", "input");
```

### Usar una referencia a un elemento

```js
const el = document.querySelector(".campo");
triggerEvent(el, "123", "change");
```

### Personalizar el retraso

```js
// Dispara el evento "input" luego de 300ms
triggerEvent("#mi-input", "valor", "input", 300);
```

### Selector o eventType inválido

```js
triggerEvent("", "valor", "input");
// undefined
// [triggerEvent] Debe incorporar un selector o un objeto Element.

triggerEvent("#mi-input", "valor", "");
// undefined
// [triggerEvent] Debe incorporar un eventType válido.
```
