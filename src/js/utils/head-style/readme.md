<!-- omit in toc -->
# headStyle

Inserta un bloque de estilos CSS en el elemento `<head>` del documento.

<!-- omit in toc -->
## En ésta página

- [Sintaxis](#sintaxis)
- [Parámetros](#parámetros)
- [Comportamiento](#comportamiento)
- [Ejemplos](#ejemplos)


## Sintaxis

```js
headStyle(id, styleDefinitions, [mediaType]);
```

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `id` | `string` | Sí | Identificador único del bloque en el DOM. Si no es válido, se usa `"argob-custom-css"`. |
| `styleDefinitions` | `string` | Sí | Cadena con las definiciones CSS a insertar. |
| `mediaType` | `string` | No | Valor del atributo `media`. Aplica estilos condicionalmente según el media query. |

## Comportamiento

- Si ya existe un `<style>` con el mismo `id` e idénticas definiciones,
  no realiza ninguna acción.
- Si existe el `id` con definiciones distintas, reemplaza el bloque anterior.

## Ejemplos

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