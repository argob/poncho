# Poncho Colors

Módulo JavaScript para consultar y resolver la paleta de colores del sistema de diseño Poncho. Permite obtener valores en distintos formatos (HEX, RGB, HSL) a partir de nombres semánticos, buscar colores por código hexadecimal y acceder a la estructura completa de espacios y grupos de color.

- [Poncho Colors](#poncho-colors)
  - [Uso](#uso)
  - [Conceptos clave](#conceptos-clave)
  - [Propiedades](#propiedades)
    - [spaces](#spaces)
    - [list](#list)
    - [variables](#variables)
    - [colors](#colors)
  - [Métodos](#métodos)
    - [groupsBySpace()](#groupsbyspace)
    - [colorGroup()](#colorgroup)
    - [colorSpace()](#colorspace)
    - [colorDefinitions()](#colordefinitions)
    - [colorByHex()](#colorbyhex)
    - [findColor()](#findcolor)
    - [ponchoColor()](#ponchocolor)
    - [colorName()](#colorname)
  - [Utilidades](#utilidades)
    - [hexToRgb()](#hextorgb)
    - [rgbToHsl()](#rgbtohsl)
    - [isValidHex()](#isvalidhex)
    - [cleanHex()](#cleanhex)

---

## Uso

```javascript
const { ponchoColorDefinitionsList } = require('./src/js/color-definitions');
const { Color } = require('./src/js/color');

const color = new Color(ponchoColorDefinitionsList);
```

## Conceptos clave

| Término | Descripción |
| --- | --- |
| **Space** | Universo de color asociado a un contexto específico (p. ej., `arg`, `gna`). |
| **Group** | Conjunto de tonos agrupados por matiz base dentro de un space (p. ej., `azul`). |
| **Instance** | Color nominado con semántica propia dentro de un grupo (p. ej., `arg-cielo`). |
| **Alias** | Nombre alternativo que apunta a la misma instancia. |
| **Variant** | Variación de una instancia (p. ej., semitono). |

---

## Propiedades

### spaces

Devuelve la lista de identificadores de espacios de color registrados en el sistema, ordenada alfabéticamente.

```javascript
color.spaces;
// ["arg", "bandera", "gna", "miarg"]
```

### list

Devuelve un array plano con todas las instancias de color de todos los espacios y grupos.

```javascript
color.list;
// [{ name: "Cielo", code: "arg-cielo", color: "#039BE5", ... }, ...]
```

### variables

Devuelve un array ordenado de todas las entradas alias y variantes, con el formato:
`[code, hex, description, fullCode, displayName]`

```javascript
color.variables;
// [["arg-celeste", "#039BE5", "", "arg-cielo", "Cielo"], ...]
```

### colors

Devuelve un array con todas las entradas de escala de color en formato `[scope-group-level, hex]`.

```javascript
color.colors;
// [["arg-azul-50", "#CDEBFA"], ["arg-azul-100", "#9AD7F5"], ...]
```

---

## Métodos

### groupsBySpace()

Devuelve la lista ordenada de grupos de color definidos para un espacio dado.

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `space` | `string` | Sí | Identificador del espacio de color. |

**Retorna:** `string[]`

**Lanza:** `TypeError` si `space` no es un string.

```javascript
color.groupsBySpace('arg');
// ["amarillo", "azul", "blanco", "fucsia", "morado", "naranja", "negro", ...]
```

### colorGroup()

Devuelve la definición completa de un grupo de color dentro de un espacio específico. Incluye la escala de tonos numerada y todas sus instancias nominadas.

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `themeSpace` | `string` | Sí | Identificador del espacio de color. |
| `spaceGroup` | `string` | Sí | Nombre del grupo dentro del espacio. |

**Retorna:** `object`

```javascript
color.colorGroup('arg', 'azul');
// {
//   "scope": "arg",
//   "name": "Azul",
//   "group": "azul",
//   "color": {
//     "50":  "#CDEBFA",
//     "100": "#9AD7F5",
//     "200": "#68C3EF",
//     "300": "#35AFEA",
//     "400": "#039BE5",
//     "500": "#0581C6",
//     "600": "#0767A7",
//     "700": "#084E87",
//     "800": "#0A3468",
//     "900": "#0C1A49"
//   },
//   "instance": [
//     {
//       "name": "Cielo",
//       "code": "arg-cielo",
//       "scope": "arg",
//       "related_color": "400",
//       "parent_group": "azul",
//       "color": "#039BE5",
//       "variant": [],
//       "alias": [
//         { "code": "arg-cielo", "exclude": false },
//         { "code": "cielo",     "exclude": true  },
//         { "code": "celeste",   "exclude": true  }
//       ]
//     }
//     // ...otras instancias
//   ]
// }
```

### colorSpace()

Devuelve la definición completa de un espacio de color, incluyendo todos sus grupos e instancias.

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `space` | `string` | Sí | Identificador del espacio de color. |

**Retorna:** `object`

```javascript
color.colorSpace('arg');
// {
//   "space": "arg",
//   "data": [
//     { "group": "amarillo", "color": { ... }, "instance": [...] },
//     { "group": "azul",     "color": { ... }, "instance": [...] },
//     // ...
//   ]
// }
```

### colorDefinitions()

Devuelve la definición de instancia correspondiente a un nombre de color Poncho. Normaliza acentos y diferencias de capitalización antes de la búsqueda.

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `ponchoColor` | `string` | Sí | Nombre o alias del color. Acepta acentos. |

**Retorna:** `object | undefined`

```javascript
color.colorDefinitions('arándano');
// { name: "Arándano", code: "arg-arandano", color: "#...", alias: [...], ... }

color.colorDefinitions('maíz');
// { name: "Maíz", code: "arg-maiz", color: "#...", ... }
```

### colorByHex()

Devuelve todas las instancias cuyo valor de color coincide con el hexadecimal indicado. Acepta formatos con o sin `#` y la notación abreviada de 3 dígitos.

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `hexColor` | `string` | Sí | Valor hexadecimal a buscar. |

**Retorna:** `object[]` — Array de instancias coincidentes (puede estar vacío).

```javascript
color.colorByHex('#141414');
// [{ name: "Negro", code: "arg-negro", color: "#141414", ... }]

color.colorByHex('141414');
// resultado idéntico al ejemplo anterior

color.colorByHex(141414);
// undefined  →  el argumento debe ser string
```

### findColor()

Busca colores cuyo código contenga el término indicado, tanto en aliases nombrados como en entradas de escala (`scope-group-level`).

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `value` | `string` | Sí | Término de búsqueda (parcial o completo). |

**Retorna:** `[string, string][]` — Array de pares `[code, hex]`.

```javascript
color.findColor('fucsia');
// [["arg-fucsia", "#EC407A"], ["arg-fucsia-50", "#..."], ...]

color.findColor('arg-azul-4');
// [["arg-azul-400", "#039BE5"], ...]
```

### ponchoColor()

Resuelve un nombre de color Poncho a su valor en el formato solicitado. Si el color no existe, devuelve `#999999`.

**Parámetros:**

| Nombre | Tipo | Requerido | Por defecto | Descripción |
| --- | --- | --- | --- | --- |
| `color` | `string` | Sí | — | Nombre o alias del color. Acepta acentos. |
| `mode` | `string` | No | `"hex"` | Formato de salida: `"hex"`, `"rgb"` o `"hsl"`. |

**Retorna:** `string` (HEX) \| `number[]` (RGB) \| `[number, string, string]` (HSL)

```javascript
color.ponchoColor('amarillo');           // "#E7BA61"
color.ponchoColor('warning');            // "#E7BA61"  (alias)
color.ponchoColor('arg-fucsia-300');     // "#F16798"  (escala directa)
color.ponchoColor('color inexistente');  // "#999999"  (fallback)

color.ponchoColor('cielo', 'rgb');       // [3, 155, 229]
color.ponchoColor('cielo', 'hsl');       // [199, "97.1%", "45.5%"]
```

### colorName()

Resuelve uno o varios códigos de color Poncho a sus nombres para display y los concatena con conectores gramaticalmente correctos en español.

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `args` | `string \| string[]` | Sí | Código o array de códigos de color. |
| `options` | `object` | No | Opciones de formato (ver más abajo). |

**Opciones:**

| Propiedad | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| `switchLastConnector` | `object` | `{ "i": "e", "o": "u" }` | Reemplaza el conector final según la inicial de la última palabra (regla ortográfica española). |
| `defaultLastConnector` | `string` | `"y"` | Conector entre el penúltimo y el último elemento. |
| `listConnector` | `string` | `", "` | Separador entre los elementos de la lista. |

**Retorna:** `string | undefined`

```javascript
color.colorName('fucsia');
// "Fucsia"

color.colorName(['fucsia', 'azul', 'arg-azul-half']);
// "fucsia, azul y azul medio tono"

// Conector personalizado
const opts = { listConnector: ' a ' };
color.colorName(['fucsia', 'azul', 'arg-azul-half'], opts);
// "fucsia a azul a azul medio tono"
```

---

## Utilidades

### hexToRgb()

Convierte un color hexadecimal a un array RGB.

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `hexColor` | `string` | Sí | Color en formato HEX (con o sin `#`, 3 o 6 dígitos). |

**Retorna:** `[number, number, number] | undefined`

```javascript
color.hexToRgb('#FF0000');  // [255, 0, 0]
color.hexToRgb('CCC');      // [204, 204, 204]
color.hexToRgb('FF000000'); // undefined  →  formato inválido
```

### rgbToHsl()

Convierte valores RGB a HSL.

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `r` | `number` | Sí | Canal rojo (0–255). |
| `g` | `number` | Sí | Canal verde (0–255). |
| `b` | `number` | Sí | Canal azul (0–255). |

**Retorna:** `[number, string, string]` — `[hue, "saturation%", "lightness%"]`

```javascript
color.rgbToHsl(3, 155, 229);
// [199, "97.1%", "45.5%"]
```

### isValidHex()

Valida si el valor es un color hexadecimal bien formado (3 o 6 dígitos, con o sin `#`).

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `hexColor` | `string` | Sí | Valor a validar. |

**Retorna:** `boolean`

```javascript
color.isValidHex('#FF0000');   // true
color.isValidHex('CCC');       // true
color.isValidHex('FF000000');  // false  →  más de 6 dígitos
color.isValidHex('CC');        // false  →  menos de 3 dígitos
color.isValidHex('');          // false
```

### cleanHex()

Normaliza un valor hexadecimal: elimina `#`, convierte a mayúsculas, expande la notación abreviada de 3 a 6 dígitos y antepone `#`. Devuelve `false` si la longitud es inválida.

**Parámetros:**

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `value` | `string` | Sí | Valor hexadecimal a normalizar. |

**Retorna:** `string | false`

```javascript
color.cleanHex('#123');      // "#112233"
color.cleanHex('ff0000');    // "#FF0000"
color.cleanHex('#1234567');  // false  →  longitud inválida
```
