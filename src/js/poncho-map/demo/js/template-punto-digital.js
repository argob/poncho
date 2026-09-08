/**
 * Información de un Punto Digital.
 *
 * @summary A partir de un objeto con los datos de un Punto Digital,
 * arma un bloque HTML con la información editada.
 * @param {object} self Objeto con métodos de utilidad (header, defaultTemplate).
 * @param {object} row Definición de datos asignado a cada uno de los markers.
 * @returns {string} Bloque HTML con la información del punto digital.
 */
const template_punto_digital = (self, row) => {

  const days = [
      'domingo', 'lunes', 'martes',
      'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'
  ];

  /**
   * Agrupa los horarios por día.
   *
   * @summary Dada una cadena con las fechas separadas por el juego
   * de caracteres: " <>"; hace un split y luego agrupa los rangos
   * horarios por su día.
   * @param {string} data Cadena con horarios en formato "día,inicio,fin".
   * @returns {Array<Array>} Array de [nombreDía, [[horaInicio, horaFin], ...]].
   *
   * @example
   * // data = "1,08:00:00,12:00:00 <>1,14:00:00,18:00:00 <> 2,08:00:00,12:00:00"
   * // Retorna:
   * // [['lunes', [['08:00:00', '12:00:00'], ['14:00:00', '18:00:00']]],
   * //  ['martes', [['08:00:00', '12:00:00']]]]
   */
  const days_available = (data) => {
    // Validación mejorada: tipo y contenido
    if (!data || typeof data !== 'string') {
        return [];
    }

    const trimmedData = data.trim();
    if (trimmedData === '') {
        return [];
    }

    const horarios_map = new Map();

    for (const entry of trimmedData.split(' <>')) {
        const split_horarios = entry.split(',');

        // Validar formato correcto (debe tener día, hora inicio, hora fin)
        if (split_horarios.length < 3) {
            continue;
        }

        const dayIndex = parseInt(split_horarios[0], 10);

        // Validar índice del día
        if (isNaN(dayIndex) || dayIndex < 0 || dayIndex >= days.length) {
            continue;
        }

        const dayName = days[dayIndex];
        const timeRange = [split_horarios[1], split_horarios[2]];

        if (horarios_map.has(dayName)) {
            horarios_map.get(dayName).push(timeRange);
        } else {
            horarios_map.set(dayName, [timeRange]);
        }
    }

    // Reverse una sola vez al final por cada día
    return Array.from(horarios_map, ([day, times]) => [day, times.reverse()]);
  };


/**
 * Formatea una hora removiendo segundos y ceros iniciales.
 *
 * @param {string} horario Hora en formato HH:MM:SS.
 * @returns {string} Hora formateada en formato H:MM.
 *
 * @example
 * time_format('04:10:00') // '4:10'
 * time_format('14:00:00') // '14:00'
 */
const time_format = (horario) => {
    const hms = new Date(`May 09 2012 ${horario}`);
    return `${hms.getHours()}:${String(hms.getMinutes()).padStart(2, '0')}`;
};


/**
 * Convierte rangos horarios a una cadena de texto legible.
 *
 * @param {Array<Array<string>>} day Array de rangos [horaInicio, horaFin].
 * @returns {string} Texto con rangos horarios (ej: "de 8:10 a 12:00 y de 14:00 a 18:00").
 */
const time_tostring = (day) => { 
    return day
        .map(e => `de ${e.map(i => time_format(i)).join(' a ')}`)
        .join(' y '); 
};

  /**
   * Genera elementos HTML para mostrar que hoy está abierto.
   *
   * @param {Array|null} todaySchedule Array con [nombreDía, rangos] o null si no hay datos.
   * @returns {DocumentFragment} Fragment con elementos dd, vacío si no hay horario.
   */
  const buildTodayOpenHTML = (todaySchedule) => {
    const fragment = document.createDocumentFragment();

    if (!todaySchedule || !todaySchedule[1]) {
      return fragment;
    }

    // Primera <dd> con icono
    const dd1 = document.createElement('dd');
    dd1.className = 'pm-term-icon-helper text-arg-arandano m-b-0 fw-bold';

    const icon = document.createElement('i');
    icon.className = 'fa fa-clock-o text-arg-arandano';
    dd1.appendChild(icon);
    dd1.appendChild(document.createTextNode(' Hoy abierto'));

    // Segunda <dd> con horarios
    const dd2 = document.createElement('dd');
    dd2.className = 'text-arg-arandano m-b-0';
    dd2.appendChild(document.createTextNode(time_tostring(todaySchedule[1])));

    const span = document.createElement('span');
    span.className = 'thin-space';
    span.textContent = ' ';
    dd2.appendChild(span);
    dd2.appendChild(document.createTextNode('h.'));

    fragment.appendChild(dd1);
    fragment.appendChild(dd2);

    return fragment;
  };


/**
 * Genera elementos HTML del horario completo con detalles expandibles.
 *
 * @param {Array<Array>} scheduleList Array de [nombreDía, rangos] ordenados.
 * @param {number} currentDay Índice del día actual (0-6).
 * @param {DocumentFragment} todayFragment Fragment con elemento de apertura de hoy.
 * @returns {DocumentFragment} Fragment con la estructura completa de horarios.
 */
const buildScheduleHTML = (scheduleList, currentDay, todayFragment) => {
        const fragment = document.createDocumentFragment();

        if (!scheduleList || scheduleList.length === 0) {
            return fragment;
        }

        // Crear contenedor principal
        const scheduleDiv = document.createElement('div');
        scheduleDiv.className = 'schedule';

        const dl = document.createElement('dl');
        dl.className = 'm-b-0';

        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule__item';

        // Encabezado
        const dt = document.createElement('dt');
        dt.className = 'sr-only';
        const dtIcon = document.createElement('i');
        dtIcon.className = 'pm-term-icon-helperfa fa-clock-o text-primary';
        dt.appendChild(dtIcon);
        dt.appendChild(document.createTextNode('Horarios'));

        scheduleItem.appendChild(dt);
        scheduleItem.appendChild(todayFragment.cloneNode(true));

        // DD con detalles expandibles
        const ddDetails = document.createElement('dd');
        const marginBottomClass = row.miarg == 1 ? 'm-b-1' : 'm-b-0';
        ddDetails.className = marginBottomClass;

        const details = document.createElement('details');
        details.className = 'js-details ar-details caret-small caret-dark';
        if (row.miarg != 1) {
        details.classList.add('details-borderless');
        }

        const summary = document.createElement('summary');
        summary.className = 'ar-details__title';
        summary.textContent = 'Horarios de atención';
        details.appendChild(summary);

        const ul = document.createElement('ul');
        ul.className = 'ar-details__content list-unstyled small m-t-0';

        // Agregar items de horario
        scheduleList.forEach(day => {
            const li = document.createElement('li');
            const isToday = day[0] === days[currentDay];
            if (isToday) {
                li.className = 'text-arg-arandano';
            }

            const strong = document.createElement('strong');
            strong.textContent = day[0];
            li.appendChild(strong);
            li.appendChild(
                document.createTextNode(': ' + time_tostring(day[1])));

            const span = document.createElement('span');
            span.className = 'thin-space';
            span.textContent = ' ';
            li.appendChild(span);
            li.appendChild(document.createTextNode('h.'));

            ul.appendChild(li);
        });

        details.appendChild(ul);
        ddDetails.appendChild(details);
        scheduleItem.appendChild(ddDetails);

        // Sección Mi Argentina
        if (row.miarg == 1) {
            const miArgDiv = document.createElement('div');
            miArgDiv.className = 'schedule__mi-argentina _border border-medium border-miarg-azul';

            const iconSpan = document.createElement('span');
            iconSpan.className = 'schedule__mi-argentina__icon';
            
            const icon = document.createElement('i');
            icon.className = 'icono-arg-mi-argentina';
            icon.setAttribute('aria-hidden', 'true');
            iconSpan.appendChild(icon);

            const dtMi = document.createElement('dt');
            dtMi.textContent = self.header("horarios_miarg");

            const ddMiText = document.createElement('dd');
            ddMiText.className = 'm-b-05';
            ddMiText.textContent = row.horarios_miarg;

            const ddMiLink = document.createElement('dd');
            ddMiLink.className = 'm-b-0';

            const link = document.createElement('a');
            link.className = 'small btn btn-xs btn-primary bg-miarg-azul m-y-0';
            link.target = '_blank';
            link.href = '/jefatura/punto-digital/valida-tu-identidad-en-un-punto-digital';
            link.appendChild(document.createTextNode('Ver más '));

            const srOnly = document.createElement('span');
            srOnly.className = 'sr-only';
            srOnly.textContent = 'sobre cómo validar tu identidad en la app Mi Argentina';
            link.appendChild(srOnly);
            ddMiLink.appendChild(link);

            miArgDiv.appendChild(iconSpan);
            miArgDiv.appendChild(dtMi);
            miArgDiv.appendChild(ddMiText);
            miArgDiv.appendChild(ddMiLink);

            scheduleItem.appendChild(miArgDiv);
        }

        dl.appendChild(scheduleItem);
        scheduleDiv.appendChild(dl);
        fragment.appendChild(scheduleDiv);

        return fragment;
    };

    // Helper para convertir DocumentFragment a string HTML
    const fragmentToHTML = (fragment) => {
        const container = document.createElement('div');
        container.appendChild(fragment.cloneNode(true));
        return container.innerHTML;
    };

    // Preparo la información horaria según el formato de salida en HTML
    const day_week = new Date().getDay();
    const time_list = days_available(row.horario);
    const today = time_list.find(day => day[0] === days[day_week]);

    const today_fragment = buildTodayOpenHTML(today);
    const horarios_fragment = buildScheduleHTML(time_list, day_week, today_fragment);
    const horarios_list = fragmentToHTML(horarios_fragment);

    // puntos digitales sin funcionamiento
    const sin_funcionamiento = `
        <div class="highlight-wrapper">
            <div class="alert alert-warning" role="complementary">
                <div class="media">
                <div class="media-left">
                    <i class="fa fa-warning fa-2x"></i>
                </div>
                <div class="media-body">
                    <p class="m-b-0">
                    <strong>Próximamente</strong>
                    </p>
                </div>
                </div>
            </div>
        </div>`;

    row.estado_funcionamiento_custom = (row.estado_funcionamiento === '3')
        ? sin_funcionamiento
        : '';

    row.horarios_custom = horarios_list;

    if (typeof self.defaultTemplate !== 'function') {
        console.error('defaultTemplate no es una función');
        return '';
    }

    return self.defaultTemplate(self, row);
};