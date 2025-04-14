/**
 * FERIADOS NACIONALES
 * 
 * @summary Hace un render de un calendario anual de los feriados 
 * Nacionales de la República Argentina. 
 */
const calendar = {
    toggleText(scope, ln){
        function toCamelCase(slug){
            return slug.toLowerCase()
                .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        }
        for( let i of document.querySelectorAll(`[data-${scope}-${ln}]`)){
            const key = toCamelCase(`${scope}-${ln}`);
            i.textContent = i.dataset[key];
        } 
    },
    tZone(date, timeZone="America/Argentina/Buenos_Aires") {
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
    },
    timeZone: "America/Argentina/Buenos_Aires",
    dictionary:{
        es:{
            months: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ],
            weekDaysAbbr: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            weekDays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        },
        en:{
            months: [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"
            ],
            weekDaysAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
    },
    daysOfMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    TODAY: null,
    container: null,
    template: null,
    options: {},
    render: function(options) {
        document
            .querySelectorAll(`${options.containerId}, .js-holidays`)
            .forEach(e => e.innerHTML = "");

        // Define el primer día del [año{options.calendarYear}]
        this.TODAY = this.tZone(
            new Date(options.calendarYear, 0, 1, 3, 0, 0),
            this.timeZone);

        this.options = options;
        this.ln = "es";
        this.daysOfMonth = (options.daysOfMonth ? 
                options.daysOfMonth : this.daysOfMonth);
        // this.container = jQuery(this.options.containerId);
        this.container = document.querySelector(this.options.containerId);
        this.template = jQuery(this.options.templateId);
        this._template = document.getElementById("monthtpl");
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
        // this.template.hide();

        for(let monthNumber in [...Array(12).keys()]){
            const clonedMonth = this._template.content.cloneNode(true);
            const month = this.drawCalendarMonth(iteration_date, monthNumber, clonedMonth);
            this.container.appendChild(month);

            iteration_date.setUTCMonth(monthNumber);
        }
    },
    drawCalendarMonth: function(iteration_date, monthNumber, tpl) {
        const month = iteration_date.getUTCMonth();
        const day = iteration_date.getUTCDay();
        const year = iteration_date.getUTCFullYear();
        const date = iteration_date.getUTCDate();
        const totalDaysOfMonth = this.daysOfMonth[month];
        let monthName = this.dictionary[this.ln].months[monthNumber];

        tpl.querySelector(".js-tpl-id").id = `m${monthName}`;
        tpl.querySelector(".js-tpl-month").textContent = monthName;

        // Creo los días de la semana
        const tr = document.createElement("tr");
        for(let d of this.dictionary[this.ln].weekDaysAbbr){
            const td = document.createElement("th");
            td.textContent = d;
            tr.appendChild(td);
        }
        tpl.querySelector(".js-tpl-weekdays").appendChild(tr);


        let dateToHighlight = 0;
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
            tpl,
            this.getCalendarStart(day, date), totalDaysOfMonth, dateToHighlight
        );
        return tpl
    },
    renderMonth: function(tpl, startDay, totalDays, currentDate) {
        let currentRow = 1;
        let currentDay = startDay;
        // var $monthTpl = jQuery('#' + monthId);
        // var $week = this.drawCalendarRow($monthTpl);
        var $day;
        let i = 1;


        debugger

        for (; i <= totalDays; i++) {
            debugger
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
                const tr = document.createElement("tr");
                $week = this.drawCalendarRow($monthTpl);
                currentRow++;
            }
        }

        while (currentRow < 6) {
            $week = this.drawCalendarRow($monthTpl);
            currentRow++;
        }
    },
    drawCalendarRow: function() {
        const tr = document.createElement("tr");
        for (let i = 0, len = 7; i < len; i++) {
            const td = document.createElement("td");
            td.innerHTML = "&nbsp;";
            tr.appendChild(td);
        }
        return tr;
    },
    // Returns the day of week which month starts (eg 0 
    // for Sunday, 1 for Monday, etc.)
    getCalendarStart: function(dayOfWeek, currentDate) {
        const date = currentDate - 1;
        const startOffset = (date % 7) - dayOfWeek;
        if (startOffset > 0) {
            startOffset -= 7;
        }
        return Math.abs(startOffset);
    },
    // getTplClone: function(tpl, id) {
    //     const clone = tpl.content.cloneNode(true);
    //     const month = clone.querySelector(".month");
    //     month.id = id;
    //     return clone;
    //     // return clone;
    //     return tpl.clone().attr('id', id).show();
    // },
    markDates: function(markers) {
        var previousLabel = "";
        var previousDate = null;

        for (var indice in markers){
            const {
                date:markerDate, 
                type:markerType, 
                label:markerLabel} = markers[indice];

            const [markerDay, markerMonth, markerYear] = markerDate.split('/');
            const objMarkerDate = this.tZone(
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
                mesTable
                    .find('td')
                    .eq(date + (startDate) + 6)
                    .addClass(`bg-${this.options.holidays_type[classes]}`
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
        const today = this.tZone((new Date), this.timeZone);
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

            for (var i in markers[0]) {
                const {
                    date:markerDate, 
                    type:markerType, 
                    label:markerLabel} = markers[0][i];
                const [
                    markerDay, 
                    markerMonth, 
                    markerYear] = markerDate.split('/');
                const date = this.tZone(
                    new Date(markerYear, markerMonth - 1, markerDay),
                    this.timeZone);

                if (today < date && markerType !== 'no_laborable') {
                    n_days.classList.add(`text-${holidaysType[markerType]}`);
                    detalleHTML.classList.add(`text-${holidaysType[markerType]}`);
                    const time_diff = Math.abs(date.getTime() - today.getTime());
                    dayCount = Math.ceil(time_diff / (1000 * 3600 * 24));
                    const day = date.getDate();
                    const month = this.dictionary[this.ln].months[date.getMonth()];
                    proximo = {
                        es: `${day} de ${month.toLocaleLowerCase()} ` 
                            + `de ${date.getFullYear()}`,
                        en: `${month} ${day}th, ${date.getFullYear()}`
                    }
                    detalle = markerLabel;

                    break;
                }
            }

            const isSingular = (dayCount == 1 ? true : false);
            if(isSingular){
                this.toggleText("text-singular", this.ln);
            } else {
                this.toggleText("text-plural", this.ln);
            }
            this.toggleText("text", this.ln);

            faltanHTML.innerHTML = dayCount;
            proximoHTML.innerHTML = proximo[this.ln];
            detalleHTML.innerHTML = detalle;

            for (var i in markers[0]) {
                const {
                    date:markerDate, 
                    type:markerType, 
                    label:markerLabel} = markers[0][i];
                const [
                    markerDay,
                    markerMonth,
                    markerYear] = markerDate.split('/');
                const date = this.tZone(
                    new Date(markerYear, markerMonth - 1, markerDay), 
                    this.timeZone);

                if (today.getDate() == date.getDate() &&
                    today.getMonth() == date.getMonth() &&
                    markerType !== 'no_laborable') {

                    hoyes.classList.remove('hidden');
                    hoyes.removeAttribute("aria-hidden");
                    hoyes.classList.add(`text-${holidaysType[markerType]}`);

                    hoynoes.classList.add('hidden');
                    hoynoes.setAttribute("aria-hidden", "true");

                    detallehoy.innerHTML = markerLabel;
                    detallehoy.className = `text-${holidaysType[markerType]}`;
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