![JavaScript](https://img.shields.io/badge/javascript-555555?logo=javascript&logoColor=f5f5f5) ![HTML5](https://img.shields.io/badge/HTML5-555555?logo=html5&logoColor=f5f5f5)

# 📦 Feriados nacionales

Este componente JavaScript facilita la visualización de los feriados nacionales en un calendario.

## Contenidos

 - [Versión](#version)
 - [Opciones de configuración](#opciones-de-configuracion)
 - [Guía de instalación](#guia-de-instalacion)
 - [Compatibilidad con versiones anteriores](#compatibilidad-con-versiones-anteriores)

<span id="version"></span>

## Versión

2.0.1

<span id="opciones-de-configuracion"></span>

## ⚙️ Opciones de configuración

La inicialización del calendario se realiza mediante un objeto de configuración con las siguientes opciones:

| **Opción** | **Descripción** | **Valores Posibles** |
|:--|:--|:--|
| containerId | ID (`id=""[containerId]""`) del elemento HTML donde se renderizará el calendario. | Cualquier selector válido (ej: #mi-div, .calendario). Por defecto: `#calendar-container`. |
| templateId | ID de la plantilla HTML que se utilizará para renderizar el mes. | Cualquier selector válido (ej: #tpl-mes). Por defecto: `#month-tpl` |
| allowHTML | Indica si se permite HTML dentro de los nombres de los eventos. | true, false |
| lang | El código del idioma que se utilizará para la visualización del calendario. | "es" (español), "en" (inglés), etc. |
| holidays_type | Define los estilos (clases CSS), para diferentes tipos de feriados y días festivos. | Objeto JavaScript con las siguientes claves: |
|  |  | - **inamovible**: Clase CSS para feriados inamovibles. Default `primary`. |
|  |  | - **trasladable**: Clase CSS para feriados trasladables. Default `success`. |
|  |  | - **no_laborable**: Clase CSS para días no laborables. Default `nl`. |
|  |  | - **turistico**: Clase CSS para feriados turísticos. Default `turistico`. |


### Internacionalización de Textos

Esta herramienta facilita la adaptación de textos a diferentes idiomas mediante el atributo data-text-[lang] en cualquier etiqueta HTML. Al procesar la etiqueta, el intérprete reemplazará el contenido según el idioma configurado en las opciones del calendario.

**Ejemplo**:

Considerando un calendario con soporte para inglés (lang: "en") y español (lang: "es"), se puede definir textos multilingües de la siguiente manera:

```html
<p data-text-en="Hello world!" data-text-es="¡Hola mundo!"></p>
```

Si el idioma activo es inglés, el contenido renderizado será:

```html
Hello world!
```

Al cambiar el idioma a español, el contenido se actualizará a:

```html
¡Hola mundo!
```

#### Gestión de textos en singular y plural

Para escenarios como la cuenta regresiva de días, donde algunas palabras varían entre singular y plural (por ejemplo, "día" vs. "días", "falta" vs. "faltan"), se proporciona el atributo data-singular-[lang] y data-plural-[lang].

**Ejemplo**:

Para el idioma español, se puede especificar las formas singular y plural así:

```html
<span data-singular-es="día" data-plural-es="días">días</span>
```


Cuando solo reste 1 día, el texto se mostrará en singular:

```html
día
```

Esta funcionalidad se puede combinar con la internacionalización de textos para manejar múltiples idiomas:

```html
<p 
    data-text-singular-en="There is" 
    data-text-plural-en="There are" 
    data-text-singular-es="falta"
    data-text-plural-es="faltan">faltan</p>
```


<span id="guia-de-instalacion"></span>

## Guía de instalación

Siga estos pasos para integrar el calendario de feriados nacionales en tu proyecto:

### 1. Defina la información de los Feriados en Formato JSON

Cree un archivo JSON que contenga la información de cada feriado como una entrada independiente.


| Clave | Valor |
|:--|:--|
| **date** | Fecha en formato dd/mm/yyyy (día, mes y año). Utilizando ceros a la izquierda en día y mes cuando solo tenga un dígito. |
| **label** | Nombre del feriado |
| **type** | Define uno de los cuatro tipos de feriado: `inamovible`, `no_laborable`, `turistico` y `transladable`. |

```js
const holidaysData = {
    "es": [
        { "date": "01/01/2025", "label": "Año Nuevo", "type": "inamovible" },
        { "date": "03/03/2025", "label": "Carnaval", "type": "inamovible" },
        { "date": "04/03/2025", "label": "Carnaval", "type": "inamovible" },
        ...
    ],
    en: [
        { "date": "01/01/2025", "label": "New Year", "type": "inamovible" },
        { "date": "03/03/2025", "label": "Carnival", "type": "inamovible" },
        { "date": "04/03/2025", "label": "Carnival", "type": "inamovible" },
        ...
    ]
}
```


### 2. Incluir código HTML

#### Contenedor del calendario

Pegue el código HTML sin alterar su estructura o modificar los selectores.

```html
<!-- Calendar -->
<div id="calendar-container" class="calendar"></div>
<!-- / Calendar -->
```


#### Plantilla HTML

Pegue el código HTML sin alterar su estructura o modificar los selectores.

```html
<!-- Template -->
<template id="month-tpl">
    <article class="month js-tpl-id">
        <h2 class="h5 text-center js-tpl-month"></h2>
        <div class="js-jump-to-list"></div>
        <table 
            class="table text-center table-borderless small js-table">
            <caption class="js-tpl-caption sr-only"></caption>
            <thead class="js-tpl-weekdays"></thead>
            <tbody class="js-tpl-tbody"></tbody>
        </table>
        <div class="js-tpl-holidays"></div>
    </article>
</template>
<!-- / Template -->
```


### 3. Incluir _national-holidays.js_

```js
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/national-holidays.js"></script>
```

### 4. Incluir la llamada al calendario
En la llamada al calendario hay que modificar dos índices: `calendarYear`, donde se define el año de la agenda y `markers`, donde se incluye el documento JSON con la información de los feriados.

```js
<script>
document.addEventListener("DOMContentLoaded", function() {
    const calendarOptions = {
        calendarYear: 2025,
        markers: holidaysData,
        allowHTML: true,
        lang: "es",
        containerId: "#calendar-container",
        templateId: "#month-tpl"
    };
    calendar.render(calendarOptions);
});
</script>
```

----
<span id="compatibilidad-con-versiones-anteriores"></span>
## Compatibilidad con versiones anteriores

La versión 2.0.0 del script introduce compatibilidad con dos estructuras de documentos JSON: la versión 1.x y la versión 2.0.

### Implementación en la versión 1.x

```js
// v1.x
const holidaysData = [
    { "date": "01/01/2025", "label": "Año Nuevo", "type": "inamovible" },
    ...
];
```

```js
<script>
const calendarOptions = {
    markers: [holidaysData], // <- El array debe estar entre corchetes.
    ...
};
calendar.render(calendarOptions);
</script>
```