/**
 * FERIADOS NACIONALES
 * 
 * @summary Hace un render de un calendario anual de los feriados 
 * Nacionales de la República Argentina. 
 */
function tZone(date, timeZone="America/Argentina/Buenos_Aires") {
    if (!(date instanceof Date)) {
        throw new TypeError("Se espera un objeto Date()");
    }
    const options = {
        timeZone: timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return new Date(date.toLocaleString('en-US', options));
}

const calendar = {
    timeZone: "America/Argentina/Buenos_Aires",
    dictionary:{
        es:{
            falta: {plural:"faltan", singular:"falta"},
            dia: {plural:"días", singular:"día"},
            months: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ],
            weekDayName: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie"]
        },
        en:{
            falta: {plural:"left", singular:"left"},
            dia: {plural:"days", singular:"day"},
            months: [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"
            ],
            weekDayName: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
        },
    },
    TODAY: null,
    daysOfMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    container: null,
    template: null,
    options: {},
    render: function(options) {
        document
            .querySelectorAll(`${options.containerId}, .js-holidays`)
            .forEach(e => e.innerHTML = "");

        // Define el primer día del [año{options.calendarYear}]
        this.TODAY = tZone(
            new Date(options.calendarYear, 0, 1, 3, 0, 0),
            this.timeZone);

        this.options = options;
        this.ln = "en";
        this.daysOfMonth = (options.daysOfMonth ? 
            options.daysOfMonth : this.daysOfMonth);
        this.container = jQuery(this.options.containerId);
        this.template = jQuery(this.options.templateId);
        this.iteration_date = this.TODAY;

        this.renderCalendar();
        for(let e of this.options.markers){
            this.markDates(e);
        }
        this.daysLeft();
        // remueve los <ul> vacíos.
        document
            .querySelectorAll(".js-holidays")
            .forEach(e => !e.hasChildNodes() ? e.remove() : null);
    },
    renderCalendar: function() {
        let iteration_date = this.TODAY;
        this.template.hide();

        for(let monthNumber in this.dictionary[this.ln].months){
            let monthId = 'm' + this.dictionary[this.ln].months[monthNumber];
            let iMonth = this.getTplClone(this.template, monthId);
            this.container.append(iMonth);
            iteration_date.setUTCMonth(monthNumber);
            this.drawCalendarMonth(iteration_date, iMonth.attr('id'));
        }
    },
    drawCalendarMonth: function(iteration_date, monthId) {
        var month = iteration_date.getUTCMonth();
        var day = iteration_date.getUTCDay();
        var year = iteration_date.getUTCFullYear();
        var date = iteration_date.getUTCDate();
        var totalDaysOfMonth = this.daysOfMonth[month];

        var $h2 = jQuery('#' + monthId).find('h2').first();

        $h2.text(this.dictionary[this.ln].months[month]);
        var dateToHighlight = 0;
        // Determine if Month && Year are current for Date Highlight
        if (iteration_date.getUTCMonth() === month && 
                iteration_date.getUTCFullYear() === year) {
            dateToHighlight = date;
        }
        //Getting February Days Including The Leap Year
        if (month === 1) {
            if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)){
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
        let currentRow = 1;
        let currentDay = startDay;
        var $monthTpl = jQuery('#' + monthId);
        var $week = this.drawCalendarRow($monthTpl);
        var $day;
        let i = 1;

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
        var previousLabel = "";
        var previousDate = null;

        for (var indice in markers){
            const {
                date:markerDate, 
                type:markerType, 
                label:markerLabel} = markers[indice];

            const [markerDay, markerMonth, markerYear] = markerDate.split('/');
            const objMarkerDate = tZone(
                new Date(markerYear, markerMonth - 1, markerDay, 3, 0, 0),
                this.timeZone);

            const mes = this.dictionary[this.ln].months[objMarkerDate.getUTCMonth()];
            const mesTable = jQuery('#m' + mes);
            const date = objMarkerDate.getDate();
            const year = objMarkerDate.getUTCFullYear();
            const UTCDay = objMarkerDate.getUTCDay();
            const classes = markerType;
            const startDate = this.getCalendarStart(UTCDay, date);
            const label = markerLabel;

            if (year === this.TODAY.getUTCFullYear()) {
                mesTable.find('td').eq(date + (startDate) + 6).addClass(
                    'bg-' + this.options.holidays_type[classes]
                );

                this.addLabel(mesTable, date, label, previousLabel, previousDate);
                previousLabel = markerLabel;
                previousDate = objMarkerDate;
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
        const today = tZone((new Date), this.timeZone);
        const hoynoes = document.querySelector("#js-hoynoes");
        const hoyes = document.querySelector("#js-hoyes");

        const {calendarYear, markers, holidays_type:holidaysType} = this.options;
        const nowYear = today.getFullYear();
        
        let dayCount = 0;
        let proximo = detalle = "";
        
        if (calendarYear === nowYear || (calendarYear - 1) === nowYear){
            const n_days = document.querySelector('#js-ndays');
            const faltanHTML = document.querySelector("#js-faltan");
            const proximoHTML = document.querySelector("#js-proximo");
            const detalleHTML = document.querySelector("#js-detalle");
            const detallehoy = document.querySelector("#js-detallehoy");
            const strDia = document.querySelector(".js-dia");
            const strFalta = document.querySelector(".js-falta");

            for (var i in markers[0]) {
                const {
                    date:markerDate, 
                    type:markerType, 
                    label:markerLabel} = markers[0][i];
                const [
                    markerDay, 
                    markerMonth, 
                    markerYear] = markerDate.split('/');
 
                const date = tZone(
                    new Date(markerYear, markerMonth - 1, markerDay),
                    this.timeZone);

                if (today < date && markerType !== 'no_laborable') {
                    n_days.classList.add(`text-${holidaysType[markerType]}`);
                    detalleHTML.classList.add(`text-${holidaysType[markerType]}`);
                    const time_diff = Math.abs(date.getTime() - today.getTime());
                    dayCount = Math.ceil(time_diff / (1000 * 3600 * 24));
                    const day = date.getDate();
                    const month = this.dictionary[this.ln].months[date.getMonth()];
                    proximo = `${day} de ${month.toLocaleLowerCase()} `
                        + `de ${date.getFullYear()}`;
                    detalle = markerLabel;

                    break;
                }
            }

            const {falta, dia} = this.dictionary.es;
            const isSingular = (dayCount == 1 ? true : false);

            strDia.textContent = (isSingular ? dia.singular : dia.plural);
            strFalta.textContent = (isSingular ? falta.singular : 
                    falta.plural);
            faltanHTML.innerHTML = dayCount;
            proximoHTML.innerHTML = proximo;
            detalleHTML.innerHTML = detalle;

            for (var i in markers[0]) {
                const {
                    date:markerDate, 
                    type:markerType, 
                    label:markerLabel} = markers[0][i];

                const [markerDay, markerMonth, markerYear] = markerDate.split('/');
                const date = tZone(
                    new Date(markerYear, markerMonth - 1, markerDay), 
                    this.timeZone);

                if (today.getDate() == date.getDate() &&
                    today.getMonth() == date.getMonth() &&
                    markerType !== 'no_laborable') {

                    hoyes.classList.remove('hidden');
                    hoyes.classList.add(`text-${holidays_type[markerType]}`);

                    hoynoes.classList.add('hidden');

                    detallehoy.innerHTML = markerLabel;
                    detallehoy.className = `text-${holidays_type[markerType]}`;
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