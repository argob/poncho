[Volver al inicio ⏎](../../../readme.md)

---

<!-- omit in toc -->
# Condicional en línea

La capacidad de aplicar lógica de presentación directamente dentro de una plantilla es fundamental para controlar dinámicamente el formato de salida basándose en el contenido de los datos. Esta funcionalidad se implementa a través de los Condicionales en Línea o "expresiones ternarias" en algunos lenguajes.



<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Condicional en línea](#condicional-en-línea)
  - [Estructura del condicional](#estructura-del-condicional)
  - [Ejemplo práctico](#ejemplo-práctico)
    - [Entrada de datos](#entrada-de-datos)
    - [Implementación en la estructura de plantilla](#implementación-en-la-estructura-de-plantilla)
      - [Resultado](#resultado)

<!-- /code_chunk_output -->




## Estructura del condicional

El condicional en línea permite evaluar una condición simple y renderizar uno de dos valores posibles según el resultado.

La sintaxis general es la siguiente:

```
{% '[valor-si-verdadero]' if [condicion] else '[valor-si-falso]' %}
```

Donde:

- **[valor-si-verdadero]**: Es el string o la expresión que se renderizará si la [condicion] se cumple (true).
- **[condicion]**: Es la expresión lógica a evaluar, utilizando una [clave-de-la-entrada] y un [operador] de comparación (==, !=) contra el objeto de comparación.
- **[valor-si-falso]**: Es el string o la expresión que se renderizará si la [condicion] no se cumple (false).

## Ejemplo práctico

Consideremos una entrada de datos en formato JSON y el requisito de asociar un icono visual específico solo a las entidades que pertenecen a una categoría determinada.

### Entrada de datos

```json
{
    "color": "azul",
    "categoria": "salud",
    "nombre": "Hospital Zubizarreta"
}
```

### Implementación en la estructura de plantilla

Para que solo se muestre el icono (`<i class="icon-salud"></i>`) cuando la clave categoria sea estrictamente igual a 'salud', el condicional en línea se inserta directamente en la propiedad template de la siguiente manera:

```js
"template_structure": {
    "mixing": [
        {
            "template": `{% '<i class="icon-salud" style="color: {{color}}"></i>' if categoria == 'salud' else '' %} {{nombre}}`,
            "key": "institucion",
            "header": "Institución",
            "values": false,
            "separator": ""
        },
        // ... otros elementos de mixing
    ]
}
```

#### Resultado

Si categoria es "salud": El resultado renderizado será el icono (con el color dinámico) seguido del valor de nombre.

```html
<i class="icon-salud" style="color: azul"></i> Hospital Zubizarreta.
```

Si categoria es otra cosa (ej. "educacion"): El [valor-si-falso] es una cadena vacía (''), por lo que solo se renderizará el valor de nombre.

```html
Hospital Zubizarreta.
```
