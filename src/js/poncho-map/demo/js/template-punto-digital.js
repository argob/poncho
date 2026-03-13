/** 
* Información de un Punto Digital.
* 
* @summary A partir de un objeto con los datos de un Punto Digital, 
* arma un bloque HTML con la información editada.
* @param {object} row Definición de datos asignado a cada uno de los
* markers. 
* @return {string} Bloque HTML. 
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
   * @param {string} data
   * @return {object}
   * 
   * data = "1,08:00:00,12:00:00 <>1,14:00:00,18:00:00 <>
   *         2,08:00:00,12:00:00"
   * >>> days_avaiable(data)
   * {
   *     'lunes':[['08:00:00','12:00:00'],['14:00:00','18:00:00']],
   *     'martes':['08:00:00','12:00:00']
   * }
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
   * Define el formato para los horarios. 
   * >>> time_format('04:10:00')
   * 4:10
   * >>> time_format('14:00:00')
   * 14:00
   */
  const time_format = (horario) => {
    const hms = new Date(`May 09 2012 ${horario}`);
    return `${hms.getHours()}:${String(hms.getMinutes()).padStart(2, '0')}`;
  };

  /**
   * Rangos horarios en cadena de texto
   * @param {array} day 
   * @returns {string}
   */
  const time_tostring = (day) => { 
    return day.map(e => `de ${e.map(i => time_format(i)).join(' a ')}`).join(' y '); 
  };

  /**
   * Genera el HTML para mostrar que hoy está abierto
   */
  const buildTodayOpenHTML = (todaySchedule) => {
    if (!todaySchedule || !todaySchedule[1]) {
      return '';
    }

    return `
      <dd class="pm-term-icon-helper text-arg-arandano" style="font-weight:bold; margin-bottom:0">
        <i class="fa fa-clock-o text-arg-arandano"></i> Hoy abierto
      </dd>
      <dd class="text-arg-arandano m-b-0">${time_tostring(todaySchedule[1])}<span class="thin-space">&nbsp;</span>h.</dd>
    `;
  };

  /**
   * Genera el HTML completo de horarios
   */
  const buildScheduleHTML = (scheduleList, currentDay, todayHTML) => {
    if (!scheduleList || scheduleList.length === 0) {
      return '';
    }

    const scheduleItems = scheduleList.map(day => {
      const isToday = day[0] === days[currentDay];
      const styleClass = isToday ? 'text-arg-arandano' : '';
      const timeString = time_tostring(day[1]);
      return `<li class="${styleClass}"><strong>${day[0]}</strong>: ${timeString}<span class="thin-space">&nbsp;</span>h.</li>`;
    }).join('');

    if (!scheduleItems) {
      return '';
    }

    return `
      <dl>
        <dt class="sr-only">
          <i class="pm-term-icon-helperfa fa-clock-o text-primary"></i>Horarios
        </dt>
        ${todayHTML}
        <dd>
          <details class="js-details ar-details caret-transparent">
            <summary class="ar-details__title">Horarios de atención</summary>
            <ul class="ar-details__content list-unstyled small m-t-0">
              ${scheduleItems}
            </ul>
          </details>
        </dd>
      </dl>
    `;
  };

  // Preparo la información horaria según el formato de salida en HTML
  const day_week = new Date().getDay();
  const time_list = days_available(row.horario);
  const today = time_list.find(day => day[0] === days[day_week]);

  const today_html = buildTodayOpenHTML(today);
  const horarios_list = buildScheduleHTML(time_list, day_week, today_html);

  // puntos digitales sin funcionamiento
  const sin_funcionamiento = `
    <div class="border border-left-0 border-arg-mandarina m-b-2">
      <p class="border-left border-heavy border-arg-mandarina p-05 m-0">
        <strong>Próximamente</strong>
      </p>
    </div>
  `;


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