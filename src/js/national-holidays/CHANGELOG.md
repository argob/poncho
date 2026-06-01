<!-- omit in toc -->
# Changelog

<!-- omit in toc -->
## En ésta página

- [Release 2.0.2](#release-202)
- [Release 2.0.1](#release-201)
- [Release 2.0.0](#release-200)
  - [Core](#core)
- [Accesibilidad](#accesibilidad)
  - [CSS](#css)
- [version 1.x](#version-1x)

## Release 2.0.2

- Se corrigió el bucle de `renderCalendar` de `for...in` a `for...of`, que hacía que `monthNumber` fuera un _string_ en lugar de un entero, impidiendo que se ejecutara el bloque de año bisiesto.
- Se corrigió la declaración `const totalDaysOfMonth` en `drawCalendarMonth` que se intentaba reasignar para años bisiestos (error silencioso en modo no-estricto). Ahora el valor se calcula directamente al declarar la constante, y la condición de año bisiesto fue explícitamente parentizada para evitar ambigüedad de precedencia de operadores.
- Se reemplazaron los métodos de fecha locales (`.getDay()`, `.getDate()`, `.getFullYear()`) por sus equivalentes UTC (`.getUTCDay()`, `.getUTCDate()`, `.getUTCFullYear()`) en todos los puntos donde se opera sobre fechas producidas por `tZone()`, garantizando coherencia en cualquier zona horaria del navegador.
- Se corrigió un error de índice en `daysLeft` que provocaba que, cuando el día actual coincidía con un feriado, el enlace al mes apuntara al mes siguiente: `markerMonthInt` se usaba directamente como índice del array `dict.months` (base 0) en lugar de `markerMonthInt - 1`.
- Se corrigió una comparación de fechas inconsistente en `daysLeft`: los métodos locales `.getDate()` y `.getMonth()` sobre el objeto `today` —construido con `tZone()` y cuyos valores correctos están en UTC— fueron reemplazados por `.getUTCDate()` y `.getUTCMonth()`. Adicionalmente, `parseDate` ahora construye `dateObject` con `Date.UTC()` en lugar de `new Date()` en hora local, garantizando que ambos lados de la comparación operen sobre la misma referencia temporal.
- Se reemplazó la invocación directa `opts.hasOwnProperty()` en `validateMarkers` por `Object.prototype.hasOwnProperty.call(opts, ...)`, forma segura que funciona incluso con objetos de prototipo nulo, y consistente con el resto del código.


## Release 2.0.1

Se corrigió un error en el cálculo de **feriados nacionales** que causaba un desfase de un día en zonas horarias como **UTC-3**, asegurando que las fechas generadas por `tZone` se lean mediante `getUTCDate()` y `getUTCMonth()` en lugar de los métodos locales; esto garantiza que el sistema interprete correctamente el formato **UTC** original y evite mostrar fechas atrasadas debido a la configuración regional del dispositivo del usuario.



## Release 2.0.0

### Core

- El componente fue refactorizado completamente a JavaScript puro (Vanilla JS), eliminando la dependencia de la librería jQuery.
- Se implementó la funcionalidad para la internacionalización (i18n) de textos mediante el uso de atributos `data-[scope]-[ln]` en las etiquetas HTML, permitiendo la gestión de múltiples lenguajes a través de datasets.
- Se añadió una función específica para la adaptación del texto cuando la diferencia con un feriado o día festivo es de un solo día, aplicando la forma singular de las palabras necesarias.
- Se integró soporte para la localización del calendario en múltiples idiomas utilizando la clave `lang=[ln]` en el objeto de opciones.
- Se implementó la obtención del template mediante `cloneContent` en JavaScript, permitiendo a los maquetadores modificar los estilos generales del bloque del mes de forma sencilla.
- Se corrigió el _bug_ se orurria cuando se visualizaba el calendario desde otro _timezone_, forzando el calendario a: America/Argentina/Buenos_Aires.
- Ahora se puede hacer un documento JSON con indices por idioma, ej:
  

    ```js
    const data = {
        "es": [
            {…}
        ],
        "en": [
            {…}
        ]
    };
    ```


## Accesibilidad

- Se optimizó la presentación de los días restantes para el feriado mediante el uso de etiquetas en línea, evitando la fragmentación visual del texto.
- Se incorporó un enlace invisible visualmente pero accesible mediante lector de pantalla para permitir a los usuarios omitir la tabla del calendario y acceder directamente al listado de feriados y días festivos.
- En la tabla del calendario, cada feriado se identifica mediante la etiqueta `<mark>`, proporcionando una indicación semántica además del estilo visual.
- Cada feriado en la tabla incluye un enlace interno (`<a>` con ancla) que dirige a su descripción detallada en la sección del listado de feriados.
- Se añadió el atributo `aria-label` a la etiqueta `<a>` dentro de `<mark>`, anunciando el día y el mes del feriado en un formato comprensible para usuarios que navegan por enlaces.
- Se aseguró la navegación completa del calendario mediante teclado.
- Se estructuró cada mes del calendario como un elemento `<article>` dentro de la sección principal.
- Cada uno de los items dentro del listado de feriados y días festivos incluye el tipo de feriado al que pertenece. Esta información solo es accesible mediante lector de pantalla.

**Mes con estilos CSS**

![Captura del mes de abril con estilos CSS](./img/month-style.png)

_Captura del mes de abril con estilos CSS_

**Mes sin estilos CSS**

![Captura del mes de abril sin estilos CSS](./img/month-no-style.png)

_Captura del mes de abril sin estilos CSS. Se pueden ver los días resaltados en color amarillo, el enlace de salto y el tipo de feriado en cada item del listado de feriados y días festivos._


**Día feriado dentro de la tabla con mejora semántica**

![Captura del código html en el que se puede ver el día feriado](./img/day-mark.png)

_Captura del código html en el que se puede ver la celda de la tabla con el día marcado con su enlace/ancla y el atributo aria-label con el nombre del enlace comprensible fuera de su contexto._

### CSS

- Se incorporaron estilos para resetear el estilo por defecto de la etiqueta `</mark>`.
- Se corrigieron los colores para los enlaces para que se lean correctamente.

----

## version 1.x