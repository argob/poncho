![JavaScript](https://img.shields.io/badge/javascript-555555?logo=javascript&logoColor=f5f5f5) ![HTML5](https://img.shields.io/badge/HTML5-555555?logo=html5&logoColor=f5f5f5)

# 📦 Feriados nacionales

## 🚀 Instalación

### 1. Incluir código HTML

Copie y pegue el código HTML sin modificar ninguno de los selectores en el código. 

```html
<!-- Calendar -->
<section class="national-holidays">
  <div>
      <!-- Bloque dinámico -->
      <div aria-hidden="true" id="js-hoynoes" role="presentation" class="">
          <div aria-hidden="true" class="row numbers m-b-3" id="js-hoynoes" role="presentation">
              <div class="col-md-4 col-md-offset-4 text-center">
                  <p class="text-muted js-falta">Faltan</p>
                  <div>
                      <p id="js-ndays" class="h1 m-y-0">
                          <span id="js-faltan">0</span> <span class="js-dia"></span>
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
                                <i class="fa fa-2x fa-circle text-primary fa-fw fa-2x">&nbsp;</i>
                              </div>
                              <div aria-hidden="true" class="media-body">
                                  <p class="text-muted">Feriados inamovibles</p>
                              </div>
                          </div>
                          <div class="media" role="presentation">
                              <div class="media-left" style="padding-right: 0px!important">
                                <i class="fa fa-2x fa-circle text-success fa-fw fa-2x">&nbsp;</i>
                              </div>
                              <div aria-hidden="true" class="media-body">
                                  <p class="text-muted">Feriados trasladables</p>
                              </div>
                          </div>
                          <div class="media" role="presentation">
                              <div class="media-left" style="padding-right: 0px!important">
                                <i class="fa fa-2x fa-circle text-nl fa-fw fa-2x">&nbsp;</i>
                              </div>
                              <div aria-hidden="true" class="media-body">
                                  <p class="text-muted">Días no laborables</p>
                              </div>
                          </div>
                          <div class="media" role="presentation">
                              <div class="media-left" style="padding-right: 0px!important">
                                <i class="fa fa-2x fa-circle text-turistico fa-fw fa-2x">&nbsp;</i>
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
                      <div class="holidays js-holidays list-unstyled"></div>
                  </div>
                  <!-- / Template -->
              </div>
          </div>
      </div>
  </div>
</section>
<!-- / Calendar -->
```


### 2. Incluir la información para cada feriado en formato JSON

Cree un documento JSON con la información de cada uno de los feriados se parados por entradas independientes.

Estructura del documento JSON para cada una de las entradas.

| Clave | Valor |
|:--|:--|
| **date** | Fecha en formato dd/mm/yyyy (día, mes y año). Utilizando ceros a la izquierda en día y mes cuando solo tenga un dígito. |
| **label** | Nombre del feriado |
| **type** | Define uno de los cuatro tipos de feriado: `inamovible`, `no_laborable`, `turistico` y `transladable`. |

```json
const holidays2025 = [
    { "date": "01/01/2025", "label": "Año Nuevo", "type": "inamovible" },
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
    { "date": "16/06/2025", "label": "Paso a la Inmortalidad del Gral. Don Martín Miguel de Güemes (17/6)", "type": "trasladable" },
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
];
```

### 3. Incluir librería poncho.min.js
```js
<script src="https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
```

### 4. Incluir la llamada al calendario
En la llamada al calendario hay que modificar dos índices: `calendarYear`, donde se define el año de la agenda y `markers`, donde se incluye el documento JSON con la información de los feriados.

```js
<script src="https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const calendarOptions = {
        "calendarYear": 2025,
        "markers": [holidays2025],
        "allowHTML": true,
        "containerId": "#calendar-container",
        "templateId": "#month-tpl",
        "holidays_type": {
            "inamovible": "primary",
            "trasladable": "success",
            "no_laborable": "nl",
            "turistico": "turistico"
        }
    };
    calendar.render(calendarOptions);
});
</script>
```