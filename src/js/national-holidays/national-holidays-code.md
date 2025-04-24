# HTML feriados nacionales

Fragmento HTML utilizado en la página [www.argentina.gob.ar/interior/feriados-nacionales-2025](https://www.argentina.gob.ar/interior/feriados-nacionales-2025), del sitio web [Argentina.gob.ar](https://www.argentina.gob.ar) para representar el calendario y la cuenta regresiva de días para el próximo feriado.

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
                    class="lead text-arg-secundario display-block js-detalle">
                </span><span class="sr-only">.</span>
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
                class="lead text-arg-secundario js-detalle">
            </span><span class="sr-only">.</span>
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

Inclusión del documento JavaScript, su llamada y el listado de eventos para el calendario.

```html
<!-- SCRIPTS -->
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<script>
const holidays2025 = {
    es: [
        { "date": "1/01/2025", "label": "Año Nuevo.", "type": "inamovible" },
        { "date": "03/03/2025", "label": "Carnaval", "type": "inamovible" },
        { "date": "04/03/2025", "label": "Carnaval", "type": "inamovible" },
        { "date": "24/03/2025", "label": "Día Nacional de la Memoria por la Verdad y la Justicia", "type": "inamovible" },
        { "date": "02/04/2025", "label": "Día del Veterano y de los Caídos en la Guerra de Malvinas", "type": "inamovible" },
        { "date": "31/03/2025", "label": "Fiesta de la Ruptura del Ayuno del Sagrado Mes de Ramadán (Id al-Fitr) (c)", "type": "no_laborable" },
        { "date": "13/04/2025", "label": "Primeros dos días de la Pascua Judía (b)", "type": "no_laborable" },
        { "date": "14/04/2025", "label": "Primeros dos días de la Pascua Judía (b)", "type": "no_laborable" },
        { "date": "17/04/2025", "label": "Jueves Santo Festividad Cristiana", "type": "no_laborable" },
        { "date": "18/04/2025", "label": "Viernes Santo Festividad Cristiana", "type": "inamovible" },
        { "date": "19/04/2025", "label": "Últimos dos días de la Pascua Judía (b)", "type": "no_laborable" },
        { "date": "20/04/2025", "label": "Últimos dos días de la Pascua Judía (b)", "type": "no_laborable" },
        { "date": "24/04/2025", "label": "Día de acción por la tolerancia y el respeto entre los pueblos (a)", "type": "no_laborable" },
        { "date": "01/05/2025", "label": "Día del Trabajador", "type": "inamovible" },
        { "date": "02/05/2025", "label": "Día no laborable con fines turísticos", "type": "turistico" },
        { "date": "25/05/2025", "label": "Día de la Revolución de Mayo", "type": "inamovible" },
        { "date": "10/06/2025", "label": "Fiesta del Sacrificio (c)", "type": "no_laborable" },
        { "date": "16/06/2025", "label": "Paso a la Inmortalidad del Gral. Don Martín Miguel de Güemes", "type": "trasladable" },
        { "date": "20/06/2025", "label": "Paso a la Inmortalidad del Gral. Manuel Belgrano", "type": "inamovible" },
        { "date": "26/06/2025", "label": "Año Nuevo Islámico (c)", "type": "no_laborable" },
        { "date": "09/07/2025", "label": "Día de la Independencia ", "type": "inamovible" },
        { "date": "15/08/2025", "label": "Día no laborable con fines turísticos", "type": "turistico" },
        { "date": "17/08/2025", "label": "Paso a la Inmortalidad del Gral. José de San Martín", "type": "trasladable" },
        { "date": "23/09/2025", "label": "Año Nuevo Judío (b)", "type": "no_laborable" },
        { "date": "24/09/2025", "label": "Año Nuevo Judío (b)", "type": "no_laborable" },
        { "date": "02/10/2025", "label": "Día del Perdón (b)", "type": "no_laborable" },
        { "date": "12/10/2025", "label": "Día de la  Raza", "type": "trasladable" },
        { "date": "21/11/2025", "label": "Día no laborable con fines turísticos", "type": "turistico" },
        { "date": "24/11/2025", "label": "Día de la Soberanía Nacional (20/11)", "type": "trasladable" },
        { "date": "08/12/2025", "label": "Inmaculada Concepción de María", "type": "inamovible" },
        { "date": "25/12/2025", "label": "Navidad", "type": "inamovible" },
        { "date": "01/01/2026", "label": "Año nuevo", "type": "inamovible" },
    ]
}

document.addEventListener("DOMContentLoaded", function() {
    // Inicializa el calendario
    const calendarOptions = {
        calendarYear: 2025,
        markers: holidays2025,
        lang: "es",
        allowHTML: true
    };
    calendar.render(calendarOptions);
});
</script>
<!-- / SCRIPTS -->
```