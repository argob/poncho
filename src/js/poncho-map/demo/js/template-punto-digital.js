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
  const days_avaiable = (data) => {
    if(!data){
        return [];
    }
    const horarios_map = new Map();
    for(const i of data.split(' <>')){
        const split_horarios = i.split(','); 
        const horario = [
              days[split_horarios[0]],
              [split_horarios[1], split_horarios[2]]
        ];
        if(horarios_map.has(horario[0])){
            horarios_map.set(
                  horario[0],
                  [horario[1], ...horarios_map.get(horario[0])]
            );
        } else {
            horarios_map.set(horario[0], [horario[1]]);
        }
    }
    return Array.from(horarios_map).map(e => [e[0], e[1].reverse()]);
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

  // Preparo la información horaria según el formato de 
  // salida en HTML.
  const day_week = new Date().getDay();
  const time_list = days_avaiable(row.horario); 
  const today = time_list.find(e => e[0] ==  days[day_week]);
  let horarios = time_list.map(day => {
      const style = day[0] == days[day_week] ? 'text-arandano' : '';
      let datos = time_tostring(day[1]);
      return `<li class="${style}"><strong>${day[0]}</strong>: ${datos} h.</li>`;
  }).join('');

  let horarios_list = "sdf";

  if(horarios){

    let today_text = false;
    if(today){
        today_text = "<dd class=\"text-arandano\" style=\"font-weight:bold; margin-bottom:0\">"
            + "<i class=\"fa fa-clock-o text-arandano\"></i>&nbsp;"
            + "Hoy abierto"
            + "</dd>" 
            + "<dd class=\"text-arandano\">" 
            + time_tostring(today[1]) + "h."
            + "</dd>";
    }

    horarios_list = "<dl><dt class=\"sr-only\">"
        + "<i class=\"fa fa-clock-o text-primary\"></i>"
        + "Horarios"
        + "</dt>"
        + (today_text ? today_text : '')
        + "<dd class=\"_m-l-2\">"
        + "<details style=\"font-size:.93em\" close>"
        + "<summary class=\"p-b-0 p-t-0\">Horarios de atención</summary>"
        + "<ul class=\"list-unstyled m-t-0\">"
        + horarios
        + "</ul>"
        + "</details>"
        + "</dd></dl>";
  }

  const sin_funcionamiento = "<div class=\"alert alert-warning\" style=\"padding:.5em .75em;\">"
      + "<p class=\"text-mandarina\">"
      + "<strong>Próximamente</strong>"
      + "</p>"
      + "</div>";

  row.estado_funcionamiento_custom = (row.estado_funcionamiento == '3' ? 
        sin_funcionamiento : '');
  row.horarios_custom = horarios_list;

  return self.defaultTemplate(self, row);
};