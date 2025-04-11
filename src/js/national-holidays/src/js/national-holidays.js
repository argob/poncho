/**
 * FERIADOS NACIONALES
 * 
 * @summary Hace un render de un calendario anual de los feriados 
 * Nacionales de la República Argentina. 
 */
const calendar = {
    dictionary: {
        es:{
            falta: {plural:"Faltan", singular:"Falta"},
            dia: {plural:"días", singular:"día"},
        },
    },
  TODAY: null,
  months: [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ],
  weekDayName: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie"],
  daysOfMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  container: null,
  template: null,
  options: {},
  render: function(options) {
      _this = this;
      document
          .querySelectorAll(`${options.containerId}, .js-holidays`)
          .forEach(e => e.innerHTML = "");
      this.TODAY = new Date(Date.UTC(options.calendarYear, 0, 1, 3, 0, 0));
      this.options = options;
      this.daysOfMonth = (options.daysOfMonth ? 
          options.daysOfMonth : this.daysOfMonth);
      this.container = jQuery(this.options.containerId);
      this.template = jQuery(this.options.templateId);
      this.iteration_date = new Date(
          Date.UTC(this.TODAY.getFullYear(), this.TODAY.getMonth(), 1, 3, 0, 0)
      );
      this.renderCalendar();
      this.options.markers.forEach(function(e) {
          _this.markDates(e);
      });
      this.daysLeft();
      // remueve los <ul> vacíos.
      document
          .querySelectorAll(".js-holidays")
          .forEach(e => !e.hasChildNodes() ? e.remove() : null);
  },
  renderCalendar: function() {
      _this = this;
      var iteration_date = new Date(
          Date.UTC(
              _this.TODAY.getFullYear(), _this.TODAY.getMonth(), 1, 3, 0, 0
          )
      );
      this.template.hide();
      this.months.forEach(function(month, monthNumber) {
          monthId = 'm' + month;
          iMonth = _this.getTplClone(_this.template, monthId);
          _this.container.append(iMonth);
          iteration_date.setUTCMonth(monthNumber);
          _this.drawCalendarMonth(iteration_date, iMonth.attr('id'));
      });
  },
  drawCalendarMonth: function(iteration_date, monthId) {
      var month = iteration_date.getUTCMonth();
      var day = iteration_date.getUTCDay();
      var year = iteration_date.getUTCFullYear();
      var date = iteration_date.getUTCDate();
      var totalDaysOfMonth = this.daysOfMonth[month];

      var $h2 = jQuery('#' + monthId).find('h2').first();

      $h2.text(this.months[month]);

      var dateToHighlight = 0;

      // Determine if Month && Year are current for Date Highlight
      if (iteration_date.getUTCMonth() === month && 
            iteration_date.getUTCFullYear() === year) {
          dateToHighlight = date;
      }

      //Getting February Days Including The Leap Year
      if (month === 1) {
          if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
              totalDaysOfMonth = 29;
          }
      }

      // Get Start Day
      this.renderMonth(
          monthId,
          this.getCalendarStart(day, date), totalDaysOfMonth, dateToHighlight
      );
  },
  renderMonth: function(monthId, startDay, totalDays, currentDate) {
      var currentRow = 1;
      var currentDay = startDay;
      var $monthTpl = jQuery('#' + monthId);
      var $week = this.drawCalendarRow($monthTpl);
      var $day;
      var i = 1;

      for (; i <= totalDays; i++) {
          $day = $week.find('td').eq(currentDay);
          $day.text(i);

          if (i === currentDate) {
              $day.addClass('today');
          }

          // +1 next day until Saturday (6), then reset to Sunday (0)
          currentDay = ++currentDay % 7;

          // Generate new row when day is Saturday, but only if there are
          // additional days to render
          if (currentDay === 0 && (i + 1 <= totalDays)) {
              $week = this.drawCalendarRow($monthTpl);
              currentRow++;
          }
      }

      while (currentRow < 6) {
          $week = this.drawCalendarRow($monthTpl);
          currentRow++;
      }
  },
  drawCalendarRow: function($monthTpl) {
      var $table = $monthTpl.find('table').first();
      var $tr = jQuery('<tr/>');
      for (var i = 0, len = 7; i < len; i++) {
          $tr.append(jQuery('<td/>').html('&nbsp;'));
      }
      $table.append($tr);

      return $tr;
  },
  // Returns the day of week which month starts (eg 0 
  // for Sunday, 1 for Monday, etc.)
  getCalendarStart: function(dayOfWeek, currentDate) {
      var date = currentDate - 1;
      var startOffset = (date % 7) - dayOfWeek;
      if (startOffset > 0) {
          startOffset -= 7;
      }
      return Math.abs(startOffset);
  },
  getTplClone: function(tpl, id) {
      return tpl.clone().attr('id', id).show();
  },
  markDates: function(markers) {
      _this = this;
      var previousLabel = '';
      var previousDate = null;

      for (var indice in markers) {

          const splittedDate = markers[indice].date.split('/');
          const markerDate = new Date(
              Date.UTC(splittedDate[2],
                splittedDate[1] - 1,
                splittedDate[0], 3, 0, 0)
          );

          const mes = _this.months[markerDate.getMonth()];
          const mesTable = jQuery('#m' + mes);
          const date = markerDate.getDate();
          const year = markerDate.getYear();
          const UTCDay = markerDate.getUTCDay();
          const classes = markers[indice].type;
          const startDate = _this.getCalendarStart(UTCDay, date);
          const label = markers[indice].label;

          if (year === _this.TODAY.getYear()) {
              mesTable.find('td').eq(date + (startDate) + 6).addClass(
                  'bg-' + _this.options.holidays_type[classes]
              );

              _this.addLabel(mesTable, date, label, previousLabel, previousDate);
              previousLabel = markers[indice].label;
              previousDate = markerDate;
          }
      }
  },
  addLabel: function(target, day, label, previousLabel, previousDate) {
      let text = '';
      let textArea = null;
      const previousDay = (previousDate ? previousDate.getDate() : day);

      if (label == previousLabel && day === (previousDay + 1)) {
          textArea = target.find('.js-holidays').find('p').last();
          text = textArea.text().replace(/(\d+),*\./, "$1, " + day + '.');
          if(this.options.allowHTML){
              textArea.html(text);
          } else {
              textArea.text(text);
          }
      } else {
          text = (this.options.allowHTML ? jQuery('<p/>').html(day + '. ' + label) : 
                jQuery('<p/>').text(day + '. ' + label));
          textArea = target.find('.js-holidays');
          textArea.append(text);
      }
  }, 
  daysLeft: function(){
    /**
     * Agrega la información para el bloque que informa sobre si 
     * es o no un día feriado y cuanto falta para el próixmo
     */
    const today = new Date();
    const hoynoes = document.querySelector("#js-hoynoes");
    const hoyes = document.querySelector("#js-hoyes");

    if (this.options.calendarYear === new Date(Date.now()).getFullYear() || (
        this.options.calendarYear - 1) === new Date(Date.now()).getFullYear()){

        const n_days = document.querySelector('#js-ndays');
        const faltanHTML = document.querySelector("#js-faltan");
        const proximoHTML = document.querySelector("#js-proximo");
        const detalleHTML = document.querySelector("#js-detalle");
        const detallehoy = document.querySelector("#js-detallehoy");
        const strDia = document.querySelector(".js-dia");
        const strFalta = document.querySelector(".js-falta");

        for (var i in this.options.markers[0]) {
            const holiday = this.options.markers[0][i];
            const splittedDate = holiday.date.split('/');
            const date = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]);

            if (today < date && holiday.type !== 'no_laborable') {
                n_days.classList.add(`text-${this.options.holidays_type[holiday.type]}`);
                detalleHTML.classList.add(`text-${this.options.holidays_type[holiday.type]}`);
                var time_diff = Math.abs(date.getTime() - today.getTime());
                var dayCount = Math.ceil(time_diff / (1000 * 3600 * 24));
                var day = date.getDate();
                var month = this.months[date.getMonth()];
                var proximo = `${day} de ${month.toLocaleLowerCase()} de ${date.getFullYear()}`;
                var detalle = holiday.label;
                break;
            }
        }
        const dict = this.dictionary.es;
        const isSingular = (dayCount == 1 ? true : false);

        strDia.textContent = (isSingular ? dict.dia.singular : dict.dia.plural);
        strFalta.textContent = (isSingular ? dict.falta.singular : 
                dict.falta.plural);
        faltanHTML.innerHTML = dayCount;
        proximoHTML.innerHTML = proximo;
        detalleHTML.innerHTML = detalle;

        for (var i in this.options.markers[0]) {
            var holiday = this.options.markers[0][i];
            var splittedDate = holiday.date.split('/');
            var date = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]);

            if (today.getDate() == date.getDate() &&
                today.getMonth() == date.getMonth() &&
                holiday.type !== 'no_laborable') {

                hoyes.classList.remove('hidden');
                hoyes.classList.add(`text-${this.options.holidays_type[holiday.type]}`);

                hoynoes.classList.add('hidden');

                detallehoy.innerHTML = holiday.label;
                detallehoy.className = `text-${this.options.holidays_type[holiday.type]}`;
                break;
            }
        };
    } else {
        // Año distinto al actual
        hoynoes.classList.add('hidden');
        hoyes.classList.add('hidden');
    }
  }
};