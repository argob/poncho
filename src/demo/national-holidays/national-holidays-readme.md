# Calendario de Feriados Nacionales

## HTML

```html
<!-- Calendar -->
<section class="national-holidays col-md-12">
  <div>
      <!-- Bloque dinámico -->
      <div aria-hidden="true" id="js-hoynoes" role="presentation" class="">
          <div aria-hidden="true" class="row numbers m-b-3" id="js-hoynoes" role="presentation">
              <div class="col-md-4 col-md-offset-4 text-center">
                  <p class="text-muted">Faltan</p>
                  <div>
                      <p id="js-ndays" class="h1 m-y-0">
                          <span id="js-faltan">&nbsp;.</span> DÍAS
                      </p>
                  </div>
                  <p class="text-muted">para el próximo feriado que es el</p>
                  <p class="lead" id="js-proximo">&nbsp;</p>
                  <p class="date" id="js-detalle">&nbsp;</p>
              </div>
          </div>
      </div>
      <div aria-hidden="true" class="row numbers m-b-3 hidden" id="js-hoyes" role="presentation">
          <div class="col-md-4 col-md-offset-4 text-center">
              <div>
                  <p id="js-hoy" class="h1">HOY</p>
              </div>
              <p class="text-muted">es feriado</p>
              <p class="date" id="js-detallehoy">&nbsp;</p>
          </div>
      </div>
      <div class="sr-only">
          <p id="js-lector">&nbsp;</p>
      </div>
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
                                  <h2>¿Querés enterarte cuándo es el próximo feriado?</h2>
                                  <p class="margin-0">Creá tu cuenta en <a href="https://www.argentina.gob.ar/miargentina">Mi Argentina</a> y recibí las notificaciones en el teléfono.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- / Subscribe -->
                  <div class="col-xs-12 m-b-2">
                      <!-- References -->
                      <div class="panel-body references text-md-center">
                          <div class="media" role="presentation">
                              <div class="media-left" style="padding-right: 0px!important">
                                <i class="fa fa-2x fa-stop text-primary fa-fw fa-2x">&nbsp;</i>
                              </div>
                              <div aria-hidden="true" class="media-body">
                                  <p class="text-muted">Feriados inamovibles</p>
                              </div>
                          </div>
                          <div class="media" role="presentation">
                              <div class="media-left" style="padding-right: 0px!important">
                                <i class="fa fa-2x fa-stop text-success fa-fw fa-2x">&nbsp;</i>
                              </div>
                              <div aria-hidden="true" class="media-body">
                                  <p class="text-muted">Feriados trasladables</p>
                              </div>
                          </div>
                          <div class="media" role="presentation">
                              <div class="media-left" style="padding-right: 0px!important">
                                <i class="fa fa-2x fa-stop text-nl fa-fw fa-2x">&nbsp;</i>
                              </div>
                              <div aria-hidden="true" class="media-body">
                                  <p class="text-muted">Días no laborables</p>
                              </div>
                          </div>
                          <div class="media" role="presentation">
                              <div class="media-left" style="padding-right: 0px!important">
                                <i class="fa fa-2x fa-stop text-turistico fa-fw fa-2x">&nbsp;</i>
                              </div>
                              <div aria-hidden="true" class="media-body">
                                  <p class="text-muted">Turísticos</p>
                              </div>
                          </div>
                      </div>
                      <!-- / References -->
                  </div>
                  <div id="calendar-container" class="calendar"></div>
                  <!-- Template -->
                  <div id="month-tpl">
                      <div class="month">
                          <h2 class="h5 text-center">Mes</h2>
                          <table class="table table-striped text-center small" role="presentation">
                              <tbody>
                                  <tr>
                                      <td aria-hidden="true" class="text-center day">Dom</td>
                                      <td aria-hidden="true" class="text-center day">Lun</td>
                                      <td aria-hidden="true" class="text-center day">Mar</td>
                                      <td aria-hidden="true" class="text-center day">Mié</td>
                                      <td aria-hidden="true" class="text-center day">Jue</td>
                                      <td aria-hidden="true" class="text-center day">Vie</td>
                                      <td aria-hidden="true" class="text-center day">Sáb</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div class="holidays js-holidays"></div>
                  </div>
                  <!-- / Template -->
              </div>
          </div>
      </div>
  </div>
</section>
<!-- / Calendar -->
```

## JavaScript

```html
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/feriados-nacionales.js"></script>
```

## JSON data

```javascript
const holidays = [
    { "date": "01/01/2023", "label": "Año Nuevo", "type": "inamovible" },
    { "date": "17/06/2023", "label": "Paso a la Inmortalidad del Gral. Don Martín Miguel de Güemes", "type": "trasladable" },
    { "date": "19/06/2023", "label": "Feriado con fines turísticos", "type": "turistico" },
    { "date": "25/09/2023", "label": "Día del Perdón (b)", "type": "no_laborable" },
    ...
];
```


## Script

```javascript
document.addEventListener("DOMContentLoaded", function() {
    const calendarOptions = {
        "calendarYear": 2020,
        "allowHTML": true,
        "containerId": "#calendar-container",
        "templateId": "#month-tpl",
        "markers": [holidays2020],
        "holidays_type": {
            "inamovible": "primary",
            "trasladable": "success",
            "no_laborable": "nl",
            "turistico": "turistico"
        }
    }
    calendar.render(calendarOptions);
});
```

