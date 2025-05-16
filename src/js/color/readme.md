# Colores poncho

- [Colores poncho](#colores-poncho)
  - [Métodos](#métodos)
    - [spaces](#spaces)
    - [groupsBySpace()](#groupsbyspace)
    - [colorGroup()](#colorgroup)



## Métodos

### spaces

**Descripción:**

Este método devuelve un listado de los espacios de color actualmente definidos en el sistema. Un espacio de color define un universo específico de colores para su aplicación en un contexto particular.

**Ejemplos:**

* Para el sitio web Argentina.gob.ar, el espacio de color definido es `arg`.
* Para las páginas y aplicaciones de la Gendarmería Nacional Argentina, el espacio de color se identifica como `gna`.

**Valor de Retorno:**

Un array o lista de strings, donde cada uno es un nombre de espacio.

```javascript
color.spaces
// [ "arg", "bandera", "gna", "miarg" ]
```


### groupsBySpace()

**Descripción:**

Este método tiene como propósito retornar el listado de grupos de color definidos para un espacio de color específico. Dentro de un espacio de color, se organizan conjuntos de colores relacionados por su tinte principal, formando lo que se denomina un "grupo".

**Parámetros:**

* `space` (*String*, requerido): El identificador único del espacio de color del cual se desean obtener los grupos. Por ejemplo: `'arg'`.

**Valor de Retorno:**

Un array o lista de strings, donde cada string representa el nombre o identificador de un grupo de color definido para el espacio especificado.

**Ejemplo:**

Para el espacio de color `'arg'`, la invocación de `groupsBySpace('arg')` podría retornar el siguiente listado de grupos:

```js
[
    "amarillo", "azul", "blanco", "fucsia", "morado", "naranja", "negro", "ocre", "primary", "rojo",
    // y otros
]
```


### colorGroup()

**Descripción:**

Este método retorna la definición completa de un grupo de color específico dentro de un espacio de color dado. Un grupo de color se define por un tinte base y una vari{
    50: "#CDEBFA",
    ​​100: "#9AD7F5",
    ​​200: "#68C3EF",
    ​​300: "#35AFEA",
    ​​400: "#039BE5",
    ​​500: "#0581C6",
    ​​600: "#0767A7",
    ​​700: "#084E87",
    ​​800: "#0A3468",
    ​​900: "#0C1A49",
}

edad de colores derivados de este tinte. La intensidad o variación de estos colores se representa típicamente en una escala numérica que puede ir de 0 a 99, aunque en la práctica, la mayoría de los grupos suelen contener entre nueve y diez variaciones distintas.

**Parámetros:**

* `space` (*String*, requerido): El identificador único del espacio de color al que pertenece el grupo. Por ejemplo: `arg`.
* `groupName` (*String*, requerido): El nombre o identificador del grupo de color que se desea obtener. Por ejemplo: `azul`.

**Valor de Retorno:**

Un objeto JSON o un diccionario con un formato 

**Ejemplo:**


```javascript
color.colorGroup("arg", "azul");
// retorna
{
  "scope": "arg",
  "name": "Azul",
  "group": "azul",
  "color": {
    "50": "#CDEBFA",
    "100": "#9AD7F5",
    "200": "#68C3EF",
    "300": "#35AFEA",
    "400": "#039BE5",
    "500": "#0581C6",
    "600": "#0767A7",
    "700": "#084E87",
    "800": "#0A3468",
    "900": "#0C1A49"
  },
  "instance": [
    {
      "name": "Cielo",
      "code": "arg-cielo",
      "description": "",
      "scope": "arg",
      "related_color": "400",
      "parent_group": "azul",
      "color": "#039BE5",
      "variant": [],
      "alias": [
        {
          "code": "arg-cielo",
          "exclude": false
        },
        {
          "code": "cielo",
          "exclude": true
        },
        {
          "code": "celeste",
          "exclude": true
        }
      ]
    },
   // Otras instancias de color
  ]
}
```

