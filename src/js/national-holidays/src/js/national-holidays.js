/**
 * FERIADOS NACIONALES
 * 
 * @summary Hace un render de un calendario anual de los feriados 
 * Nacionales de la República Argentina. 
 */
const calendar = {
    convertirFecha(fechaString) {
        const partes = fechaString.split('/');
        const [markerDay, markerMonth, markerYear] = fechaString.split('/');
        const dateObject = new Date(markerYear, markerMonth - 1, markerDay);
        return {dateObject, markerDay, markerMonth, markerYear};
    },
    ordenarPorFecha(array) {
        return array.sort((a, b) => {
            const fechaA = this.convertirFecha(a.date).dateObject;
            const fechaB = this.convertirFecha(b.date).dateObject;
            return fechaA - fechaB;
        });
    },      
    /**
     * 
     * @param {string} dateString Fecha en formato dd/mm/yyyy.
     * @returns {object}
     */
    parseDate(dateString) {
        if(typeof dateString !== "string"){
            return;
        }
        const [markerDay, markerMonth, markerYear] = dateString.split('/');
        const dateObject = new Date(markerYear, markerMonth - 1, markerDay);
        const markerDayInt = parseInt(markerDay);
        const markerMonthInt = parseInt(markerMonth);
        const markerYearInt = parseInt(markerYear);
        return {
            dateObject, 
            markerDay, 
            markerMonth, 
            markerYear, 
            markerDayInt,
            markerMonthInt, 
            markerYearInt};
    },
    /**
     * 
     * @param {string} scope 
     * @param {string} ln Lenguaje, ej: es, en.
     * @returns {undefined}
     */
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
            jumpToList: "Ir al listado de {month}",
            dayAnchor: "{day} de {month}",
            weekDaysAbbr: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            weekDays: [
                "Domingo", "Lunes", "Martes", "Miércoles", 
                "Jueves", "Viernes", "Sábado"],
            holidaysType: {
                inamovible: "Feriado inamovible",
                trasladable: "Feriado trasladable",
                no_laborable: "Día no laborable",
                turistico: "Feriado turístico"
            }
        },
        en:{
            months: [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"
            ],
            jumpToList: "Jump to {month} list",
            dayAnchor: "{month} {day}th.",
            weekDaysAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekDays: [
                "Sunday", "Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"],
            holidaysType: {
                inamovible: "Fixed Holiday",
                trasladable: "Movable Holiday",
                no_laborable: "Non-Working Day",
                turistico: "Tourist Holiday"
            }
        }

    },
    daysOfMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    TODAY: null,
    container: null,
    template: null,
    options: {},
    render: function(options) {
        document
            .querySelectorAll(options.containerId)
            .forEach(e => e.innerHTML = "");

        // Define el primer día del [año{options.calendarYear}]
        this.TODAY = this.tZone(
            new Date(options.calendarYear, 0, 1, 12, 0, 0),
            this.timeZone);

        if(options.marker){

        }
        this.options = options;
        this.ln = (options.hasOwnProperty("lang") ? options.lang : "es");
        const isMultiLang = Object
            .keys(options.markers)
            .some(f => Object.keys(this.dictionary).includes(f));
        if(isMultiLang){
            this.markers = options.markers[this.ln];
        } else {
            this.markers = options.markers[0];
        }

        this.container = document.querySelector(this.options.containerId);
        this.template = document.getElementById("monthtpl");

        this.daysLeft();
        this.renderCalendar();
    },
    eventsByMonth(month, year){
        if( isNaN(Number(month)) || isNaN(Number(year)) ){
            return;
        }
        if(month < 0 || month > 12){
            return;
        }

        const list = this.markers.filter(f => {
            const {markerMonth, markerYear} = this.parseDate(f.date);
            if(markerMonth == month && markerYear == year){
                return true;
            }
            return false;
        });
        return this.ordenarPorFecha(list);
    },
    renderCalendar: function() {
        for(const monthNumber in [...Array(12).keys()]){
            const iterationDate = this.tZone(
                new Date(this.options.calendarYear, monthNumber, 1, 12, 0, 0),
                this.timeZone);
            console.log(monthNumber, iterationDate)
            const clonedMonth = this.template.content.cloneNode(true);
            const monthObj = this.drawCalendarMonth(
                iterationDate, monthNumber, clonedMonth);
            this.container.appendChild(monthObj);
        }
    },
    createWeekDays(){
        const tr = document.createElement("tr");
        for(const day of this.dictionary[this.ln].weekDaysAbbr){
            const th = document.createElement("th");
            th.setAttribute("scope", "col");
            th.textContent = day;
            tr.appendChild(th);
        }
        return tr;
    },
    drawCalendarMonth: function(iterationDate, monthNumber, tpl) {
        const day = iterationDate.getDay();
        const date = iterationDate.getDate();
        const year = iterationDate.getFullYear();
        
        const totalDaysOfMonth = this.daysOfMonth[monthNumber];
        const monthName = this.dictionary[this.ln].months[monthNumber];

        // Asigno el ID al tpl.
        const tplId = tpl.querySelector(".js-tpl-id");
        tplId.lang = this.ln;
        tplId.id = `m${monthName}`;

        // Lang a la tabla
        const tplTable = tpl.querySelector(".js-table");
        tplTable.lang = this.ln;

        // Agrego el nombre del mes.
        const tplMonth = tpl.querySelector(".js-tpl-month");
        tplMonth.textContent = monthName;

        // Creo los días de la semana.
        const tplWeekdays = tpl.querySelector(".js-tpl-weekdays");
        tplWeekdays.appendChild(this.createWeekDays());

        // Agrego el listado de feriados.
        const tplHollidays = tpl.querySelector(".js-tpl-holidays");
        const hollidaysLabels = this.addLabel(monthNumber, year);
        if(hollidaysLabels){
            tplHollidays.appendChild(hollidaysLabels);
        }

        // Calcula si es año biciesto
        if (monthNumber === 1) {
            if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)){
                totalDaysOfMonth = 29;
            }
        }

        // Get Start Day
        const entries = this.eventsByMonth(parseInt(monthNumber) + 1, year);

        if(entries.length > 0){
            const tplJumpToList = tpl.querySelector(".js-jump-to-list");
            const anchor = document.createElement("a");
            anchor.href = `#holiday-list-${parseInt(monthNumber) + 1}`;
            anchor.lang = this.ln;
            anchor.textContent = this.dictionary[this.ln]
                    .jumpToList.replace("{month}", monthName);
            tplJumpToList.appendChild(anchor);
        }

        const startDay = this.getCalendarStart(day, date);
        this.renderMonth(tpl, startDay, totalDaysOfMonth, entries);

        return tpl;
    },
    renderMonth: function(tpl, startDay, totalDays, entries) {
        // El total de celdas del tbody es de 42 en 6 filas.
        // creo un array marcando los días del calendario y el resto
        // en false. 
        const calLen = 42;
        const arr = Array(calLen).fill(false);
        let day = 1;
        for (let i = startDay; i < startDay + totalDays && i < calLen; i++){
            arr[i] = day;
            day++;
        }
        // Separo en grupos de siete para representar cada TR
        const tableRows = [];
        for (let i = 0; i < arr.length; i += 7) {
            tableRows.push(arr.slice(i, i + 7));
        }



        // Agrego tr al tbody
        const tplBody = tpl.querySelector(".js-tpl-tbody");
        for(let tableRow of tableRows){
            const tr = this.drawCalendarRow(tableRow, entries);
            tplBody.appendChild(tr);
        }
    },
    drawCalendarRow: function(tableRow, entries) {
        const dict = this.dictionary[this.ln];
        let searchEntry = entries.map(e => {
            if(e){
                const {type} = e;
                const {markerDayInt, markerMonthInt} = this.parseDate(e.date);
                return [markerDayInt, type, markerMonthInt];
            }
            return;
        });

        const tr = document.createElement("tr");
        for(let cell of tableRow){
            const td = document.createElement("td");
            if(!cell){
                td.innerHTML = "&nbsp;";
                td.setAttribute("aria-hidden", "true");
                tr.appendChild(td);
                continue;
            }

            const entry = searchEntry.find(f => f[0] === cell);
            if(entry){
                const label = dict.dayAnchor
                    .replace("{month}", dict.months[entry[2]])
                    .replace("{day}", entry[0]);
                const mark = document.createElement("mark");
                const a = document.createElement("a");
                a.href = `#hd-${entry[2]}-${cell}`;
                a.setAttribute("aria-label", label);
                a.textContent = entry[0];
                mark.classList.add(`bg-transparent`);
                mark.appendChild(a);
                
                td.classList.add(`bg-${this.options.holidays_type[entry[1]]}`);
                td.appendChild(mark)
            } else {
                td.innerHTML = cell;
            }
            tr.appendChild(td);
        }
        return tr;
    },
    // Returns the day of week which month starts (eg 0
    // for Sunday, 1 for Monday, etc.)
    getCalendarStart: function(dayOfWeek, currentDate) {
        if (!Number.isInteger(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6) {
            console.error("El parámetro dayOfWeek debe ser un número " +
                "entero entre 0 y 6.");
            return;
        }

        if (!Number.isInteger(currentDate) || currentDate <= 0) {
            console.error("El parámetro currentDate debe ser un número " +
                "entero positivo.");
            return;
        }
        const daysToSubtract = currentDate - 1;
        const startDayOfWeek = (dayOfWeek - (daysToSubtract % 7) + 7) % 7;
        return startDayOfWeek;
    },
    addLabel: function( monthId, year ) {
        if( isNaN(Number(monthId)) ){
            return;
        }

        // Agrupa un listado de eventos por su nombre.
        const markerList = this.eventsByMonth(parseInt(monthId) + 1, year);
        if(!markerList){
            return [];
        }

        const result = markerList.reduce((acc, item) => {
            if (acc[item.label]) {
                acc[item.label].push(item);
            } else {
                acc[item.label] = [item];
            }
            return acc;
        }, {});

        const ul = document.createElement("ul");
        ul.lang = this.ln;
        ul.classList.add("holidays", "list-unstyled");
        ul.id = `holiday-list-${parseInt(monthId) + 1}`;

        for(let entry of Object.keys(result)){
            const event = result[entry];
            const {label, type} = event[0];
            const holidayType = this.dictionary[this.ln].holidaysType[type];
            const compileDays = event.map(m => {
                const {markerDayInt, markerMonthInt} = this.parseDate(m.date);
                const span = document.createElement("span");
                span.textContent = markerDayInt;
                span.id = `hd-${markerMonthInt}-${markerDayInt}`;
                return span.outerHTML;
            });

            const text = `${compileDays.join(", ")}. `
                + `<span class="sr-only">${holidayType} — </span>${label}.`;
            // 
            const li = document.createElement("li");
            li.innerHTML = text;
            ul.appendChild(li);
        }
        return ul;
    }, 
    daysLeft: function(){
        /**
         * Agrega la información para el bloque que informa sobre si 
         * es o no un día feriado y cuanto falta para el próixmo
         */
        const today = this.tZone((new Date), this.timeZone);
        const hoynoes = document.querySelector("#js-hoynoes");
        const hoyes = document.querySelector("#js-hoyes");

        const {calendarYear, holidays_type:holidaysType} = this.options;
        const markers = this.markers;
        const nowYear = today.getFullYear();
        
        let dayCount = 0;
        let proximo = detalle = "";

        if (calendarYear === nowYear || (calendarYear - 1) === nowYear){
            const n_days = document.querySelector('#js-ndays');
            const faltanHTML = document.querySelector("#js-faltan");
            const proximoHTML = document.querySelector("#js-proximo");
            const detalleHTML = document.querySelector("#js-detalle");
            const detallehoy = document.querySelector("#js-detallehoy");

            for (var i in markers) {
                const {
                    date:markerDate, 
                    type:markerType, 
                    label:markerLabel} = markers[i];
                const {
                    markerDay, 
                    markerMonth, 
                    markerYear} = this.parseDate(markerDate);
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

            for (var i in markers) {
                const {
                    date:markerDate, 
                    type:markerType, 
                    label:markerLabel} = markers[i];
                const {
                    markerDay, 
                    markerMonth, 
                    markerYear} = this.parseDate(markerDate);
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