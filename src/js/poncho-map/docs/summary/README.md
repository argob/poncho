# Summary

## Opciones para summary

Incorpora una descripción o propósito al mapa. Con frecuencia, los mapas se presentan con títulos muy generales que no explican su función. Al vincular el mapa con un texto descriptivo, no solo se clarifica su contenido, sino que también se mejora significativamente la accesibilidad y la experiencia del usuario, asegurando que todos puedan entender y aprovechar la información que ofrece.

**Ejemplo 1**

```js
const options = {
    summary: "Cadena de texto",
}
```

**Ejemplo 2**

```js
const options = {
    summary: {
        title: "Cadena de texto",
        position: "top|bottom",
        css: "text-color-orange bg-color-blue", 
        style: "border-bottom: 1px solid blue;",
        hidden: "boolean"
    }
}
```

### Parámetros

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| title | `string` | `null` | Texto descriptivo, descripción o propósito del mapa. |
| position | `string` | `top` | <p>Posiciona el summary antes o después del mapa.</p><p>Opciones:</p> <ul><li>`top`</li><li>`bottom`</li></ul> |
| hidden | `boolean` | `false` | Si es `true`, oculta el summary, pero admite que pueda ser leido por lectores de pantalla. `false` (por defecto), lo muestra. |