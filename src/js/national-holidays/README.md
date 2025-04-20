![JavaScript](https://img.shields.io/badge/javascript-555555?logo=javascript&logoColor=f5f5f5) ![HTML5](https://img.shields.io/badge/HTML5-555555?logo=html5&logoColor=f5f5f5)

# 📦 Feriados nacionales

Este componente JavaScript facilita la visualización de los feriados nacionales en un calendario.

## Versión

2.0.0

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

#### Header y contenedor del calendario

_(Copie y pegue el código HTML sin modificar ninguno de los selectores en el código)._

```html
<!-- Calendar -->
<section class="national-holidays">
    <!-- Bloque dinámico -->
    <!-- days countdown -->
    <div class="row m-b-4 clearfix" id="js-hoynoes">
        <div class="col-md-4 col-md-offset-4 col-xs-12 col-sm-12" tabindex="0" role="text">
            <p class="m-b-0 text-arg-azul">
                <span 
                    class="js-falta text-capitalize" 
                    data-text-singular-en="There is" 
                    data-text-plural-en="There are" 
                    data-text-singular-es="falta"
                    data-text-plural-es="faltan">faltan</span>
                <span class="h1 conteo-regresivo-dias" id="js-ndays">
                    <i class="fa icono-arg-calendario-2"></i>
                    <span id="js-faltan">0</span>
                    <span 
                        class="js-dia" 
                        data-text-singular-en="day" 
                        data-text-plural-en="days"
                        data-text-singular-es="día" 
                        data-text-plural-es="días"></span>
                </span>
                <span class="lead">
                    <span 
                        data-text-en="For the next holiday, which is"
                        data-text-es="para el próximo feriado que es el"></span>
                    <span class="br-lg"></span>
                    <span id="js-proximo"></span><span class="sr-only">.</span>
                </span>
                <span 
                    class="lead text-arg-secundario display-block" 
                    id="js-detalle"></span><span class="sr-only">.</span>
            </p>
        </div>
    </div>
    <!-- / days countdown -->
    <!-- Is hollyday -->
    <div class="m-b-4 hidden clearfix" id="js-hoyes" aria-hidden="true">
        <p class="col-md-4 col-md-offset-4 col-xs-12 col-sm-12">
            <span class="p-y-0 m-y-0 text-arg-azul h1 conteo-regresivo-dias" id="js-hoy">
                <i class="fa icono-arg-calendario-2 text-arg-azul "></i>
                <span data-text-en="Today">Hoy</span>
            </span>
            <span class="lead m-b-0" data-text-en="is holiday">es feriado</span>. 
            <span 
                class="lead text-arg-secundario" 
                id="js-detallehoy"></span><span class="sr-only">.</span>
        </p>
    </div>
    <!-- / Is hollyday -->
    <!-- / Bloque dinámico -->
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <!-- Subscribe -->
                <div class="col-md-8 col-md-offset-2">
                    <div class="alert alert-info">
                        <div class="media">
                            <div class="media-left">&nbsp;</div>
                            <div class="media-body">
                                <h2>
                                    ¿Querés enterarte cuándo es el próximo feriado?
                                </h2>
                                <p class="margin-0">
                                    Creá tu cuenta en 
                                    <a href="https://www.argentina.gob.ar/miargentina">
                                        Mi Argentina</a> 
                                    y recibí las notificaciones en el teléfono.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- / Subscribe -->
                <div class="col-xs-12 m-b-2">
                    <!-- References -->
                    <div class="panel-body references text-md-center">
                        <div class="media" role="presentation">
                            <div class="media-left p-r-0">
                            <i class="fa fa-2x fa-circle text-primary fa-fw"></i>
                            </div>
                            <div aria-hidden="true" class="media-body">
                                <p class="text-muted" data-text-en="Fixed holidays">Feriados inamovibles</p>
                            </div>
                        </div>
                        <div class="media" role="presentation">
                            <div class="media-left p-r-0">
                            <i class="fa fa-2x fa-circle text-success fa-fw"></i>
                            </div>
                            <div aria-hidden="true" class="media-body">
                                <p class="text-muted" data-text-en="Movable holidays">Feriados trasladables</p>
                            </div>
                        </div>
                        <div class="media" role="presentation">
                            <div class="media-left p-r-0">
                            <i class="fa fa-2x fa-circle text-nl fa-fw"></i>
                            </div>
                            <div aria-hidden="true" class="media-body">
                                <p class="text-muted" data-text-en="Non-Working days">Días no laborables</p>
                            </div>
                        </div>
                        <div class="media" role="presentation">
                            <div class="media-left p-r-0">
                            <i class="fa fa-2x fa-circle text-turistico fa-fw"></i>
                            </div>
                            <div aria-hidden="true" class="media-body">
                                <p class="text-muted" data-text-en="Tourist holidays">Turísticos</p>
                            </div>
                        </div>
                    </div>
                    <!-- / References -->
                </div>
                <div id="calendar-container" class="calendar"></div>

            </div>
        </div>
    </div>
</section>
<!-- / Calendar -->
```


#### Plantilla HTML

_(Copie y pegue el código HTML sin modificar ninguno de los selectores en el código)._

```html
<!-- Template -->
<template id="month-tpl">
    <article class="month js-tpl-id">
        <h2 class="h5 text-center js-tpl-month"></h2>
        <div class="js-jump-to-list sr-only"></div>
        <table 
            class="table text-center small js-table">
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
        "calendarYear": 2025,
        "markers": holidaysData,
        "allowHTML": true,
        "lang": "es",
        "containerId": "#calendar-container",
        "templateId": "#month-tpl"
    };
    calendar.render(calendarOptions);
});
</script>
```




