/**
 * FERIADOS NACIONALES
 * 
 * Version: 2.0.0
 * 
 * @summary Hace un render de un calendario anual de los feriados 
 * Nacionales de la República Argentina. 
 * @param {object} options 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @docs https://github.com/argob/poncho/tree/master/src/js/national-holidays
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2025 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rightsto use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const calendar = {
    /**
     * Ordernar por key date
     * 
     * @param {array} array Array con las entradas 
     * @returns {array}
     */
    ordenarPorFecha(array) {
        return array.sort((a, b) => {
            const fechaA = this.parseDate(a.date).dateObject;
            const fechaB = this.parseDate(b.date).dateObject;
            return fechaA - fechaB;
        });
    },      
    /**
     * Deconstruye la fecha y la retrna en sus partes y en objeto Date.
     * 
     * @param {string} dateString Fecha en formato dd/mm/yyyy.
     * @returns {object}
     */
    parseDate(dateString) {
        if(typeof dateString !== "string"){
            return;
        }
        const [markerDay, markerMonth, markerYear] = dateString.split("/");
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
     * Remplaza un texto asignado a un dataset.
     * 
     * @summary Remplaza el texto de una etiqueta por el asginado en el 
     * dataset con formato: `data-[scope]-[lang]`.
     * @example
     * <span 
     *     data-text-singular-en="day" 
     *     data-text-plural-en="days" 
     *     data-text-singular-es="día" 
     *     data-text-plural-es="días"></span>
     * @param {string} scope nombre del dataset sin el sufijo [-lang].
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
            i.lang = ln;
        } 
    },
    /**
     * Fuerza un objeto Date a un timezone.
     * 
     * @param {Date} date Objeto Date
     * @param {string} timeZone Time zone ej. America/Argentina/Buenos_Aires.
     * @returns {Date}
     */
    tZone(date, timeZone="America/Argentina/Buenos_Aires") {
        if (!(date instanceof Date)) {
            throw new TypeError("Se espera un objeto Date()");
        }
        const options = {
            timeZone: timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };
        return new Date(date.toLocaleString("en-US", options));
    },
    timeZone: "America/Argentina/Buenos_Aires",
    dictionary:{
        es:{
            dayAnchor: "{day} de {month}",
            holidaysListTitle: "Listado de feriados",
            holidaysType: {
                inamovible: "Feriado inamovible",
                no_laborable: "Día no laborable",
                trasladable: "Feriado trasladable",
                turistico: "Feriado turístico"
            },
            jumpToList: "Ir al listado de {month}",
            months: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ],
            nextHoliday: `{day} de {month} de {year}`,
            weekDays: [
                "Domingo",
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado"
            ],
            weekDaysAbbr: [
                "Dom",
                "Lun",
                "Mar",
                "Mie",
                "Jue",
                "Vie",
                "Sab"
            ]
        },
        en: {
            dayAnchor: "{month} {day}th.",
            holidaysListTitle: "Holidays list",
            holidaysType: {
                inamovible: "Fixed Holiday",
                no_laborable: "Non-Working Day",
                trasladable: "Movable Holiday",
                turistico: "Tourist Holiday"
            },
            jumpToList: "Jump to {month} list",
            months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            nextHoliday: `{month} {day}th, {year}`,
            weekDays: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            weekDaysAbbr: [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ]
        }
    },
    daysOfMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    TODAY: null,
    container: null,
    template: null,
    options: {},
    render: function(options) {
        const mainContainer = document.querySelector(options.containerId);
        if(mainContainer){
            mainContainer.innerHTML = "";
        } else {
            throw new Error(
                `No se puede encontrar el id: ${options.containerId}`);
        }

        // Define el primer día del [año{options.calendarYear}]
        this.TODAY = this.tZone(
            new Date(options.calendarYear, 0, 1, 12, 0, 0),
            this.timeZone);

        
        this.options = options;
        this.availableLanguages = Object.keys(this.dictionary);

        this.ln = (options.hasOwnProperty("lang") && 
                this.availableLanguages.includes(options.lang) ? 
                options.lang : "es");

        const isMultiLang = Object
            .keys(options.markers)
            .some(f => this.availableLanguages.includes(f));
        if(isMultiLang){
            this.markers = options.markers[this.ln];
        } else {
            this.markers = options.markers[0];
        }

        this.container = document.querySelector(this.options.containerId);
        this.template = document.querySelector(this.options.templateId);
        
        // RENDER
        this.daysLeft();
        this.renderCalendar();
    },
    /**
     * Retorna los eventos por mes y año.
     * 
     * @param {number} month Número de mes comenzando en 0. Ej. enero = 0.
     * @param {number} year Año en formato: yyyy. 
     * @returns {object}
     */
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
            
                console.info(monthNumber, iterationDate)

            const tpl = this.template.content.cloneNode(true);
            const monthObj = this.drawCalendarMonth(iterationDate, 
                    monthNumber, tpl);
            this.container.appendChild(monthObj);
        }
    },
    /**
     * Crea los días para los </th> del </thead>.
     * @returns {HTMLTableRowElement}
     */
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
    /**
     * Compone la información para el mes.
     * 
     * @param {Date} iterationDate Objeto date para el mes.
     * @param {number} monthNumber Número de mes comenzando en 0.
     * @param {HTMLElement} tpl Template content
     * @returns {HTMLElement} Template con sus elementos completados.
     */
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

        // Calcula si es año biciesto
        if (monthNumber === 1) {
            if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)){
                totalDaysOfMonth = 29;
            }
        }

        // Get Start Day
        const entries = this.eventsByMonth(parseInt(monthNumber) + 1, year);

        // Si el mes tiene feriados imprimo el listado y un ancla 
        // para llegar a ellos.
        if(entries.length > 0){
            const tplJumpToList = tpl.querySelector(".js-jump-to-list");
            const anchor = document.createElement("a");
            anchor.setAttribute("tabindex", "0");
            anchor.href = `#holiday-list-${parseInt(monthNumber) + 1}`;
            anchor.lang = this.ln;
            anchor.textContent = this.dictionary[this.ln]
                    .jumpToList.replace("{month}", monthName);
            tplJumpToList.appendChild(anchor);

            // Agrego el listado de feriados.
            const tplHollidays = tpl.querySelector(".js-tpl-holidays");
            const hollidaysLabels = this.addLabel(monthNumber, year);
            if(hollidaysLabels){
                tplHollidays.appendChild(hollidaysLabels);
            }
        }

        const startDay = this.getCalendarStart(day, date);
        this.renderMonth(tpl, startDay, totalDaysOfMonth, entries);

        return tpl;
    },
    /**
     * Dibuja todas las filas de la tabla.
     * 
     * @param {HTMLElement} tpl Objeto element clone.
     * @param {number} startDay Día en que inicia el mes.
     * @param {number} totalDays Cantidad de días que tiene el mes.
     * @param {array} entries Listado de feriados.
     * @returns {undefined}
     */
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
    /**
     * Compronel e </tr> para la tabla de agenda de un mes.
     * 
     * @param {array} tableRow Listado con los días de la semana. 
     * false si en la casilla aun no empieza el mes o si falta para 
     * terminar la fila.
     * @param {array} entries Listado de feriados.
     * @returns {HTMLTableRowElement}
     */
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
                tr.appendChild(td);
                continue;
            }

            const entry = searchEntry.find(f => f[0] === cell);
            if(entry){
                const [markerDayInt, type, markerMonthInt] = entry;
                const label = dict.dayAnchor
                    .replace("{month}", dict.months[markerMonthInt-1])
                    .replace("{day}", markerDayInt);
                    
                const a = document.createElement("a");
                a.href = `#hd-${cell}-${markerMonthInt}`;
                a.setAttribute("tabindex", "0");
                a.setAttribute("aria-label", label);
                a.lang = this.ln;
                a.textContent = markerDayInt;

                const mark = document.createElement("mark");
                mark.classList.add(`bg-transparent`);
                mark.appendChild(a);
                
                td.classList.add(`bg-${this.options.holidays_type[type]}`);
                td.appendChild(mark)
            } else {
                td.innerHTML = cell;
            }
            tr.appendChild(td);
        }
        return tr;
    },
    /**
     * Devuelve el día de la semana en que comienza el mes (ej. 0 para 
     * Domingo, 1 para Lunes, etc.).
     * 
     * @param {number} dayOfWeek Día de la semana.
     * @param {number} currentDate Día actual.
     * @returns {number}
     */
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
    /**
     * Compone el listado de feriados
     * 
     * @param {number} monthId Número de mes comenzando en 0. Ej. enero = 0.
     * @param {number} year Año en formato: yyyy. 
     * @returns {HTMLElement}
     */
    addLabel: function(monthId, year) {
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
        ul.setAttribute("role", "region");
        ul.setAttribute("tabindex", "0");
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
                span.id = `hd-${markerDayInt}-${markerMonthInt}`;
                return span.outerHTML;
            });

            const text = `${compileDays.join(", ")}. `
                + `<span class="sr-only">${holidayType}&nbsp;—&nbsp;</span>${label.trim()}.`;
            // 
            const li = document.createElement("li");
            li.innerHTML = text;
            ul.appendChild(li);
        }
        return ul;
    }, 
    /**
     * Agrega la información para el bloque que informa sobre si 
     * es o no un día feriado y cuanto falta para el próixmo.
     * 
     * @returns {undefined}
     */
    daysLeft: function(){
        const dict = this.dictionary[this.ln];
        const today = this.tZone((new Date), this.timeZone);
        const hoynoes = document.querySelector("#js-hoynoes");
        const hoyes = document.querySelector("#js-hoyes");

        const {calendarYear, holidays_type:holidaysType} = this.options;
        const markers = this.markers;
        const nowYear = today.getFullYear();
        
        let dayCount = 0;
        let proximo = detalle = "";

        if (calendarYear === nowYear || (calendarYear - 1) === nowYear){
            const n_days = document.querySelector("#js-ndays");
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

                if (today < date && markerType !== "no_laborable") {
                    n_days.classList.add(`text-${holidaysType[markerType]}`);
                    detalleHTML.classList.add(`text-${holidaysType[markerType]}`);
                    const time_diff = Math.abs(date.getTime() - today.getTime());
                    dayCount = Math.ceil(time_diff / (1000 * 3600 * 24));
                    const day = date.getDate();
                    const month = dict.months[date.getMonth()];
                    proximo = dict.nextHoliday
                        .replace("{day}", day)
                        .replace("{month}", month)
                        .replace("{year}", date.getFullYear());
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
            proximoHTML.innerHTML = proximo;
            proximoHTML.lang = this.ln;
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
                    markerType !== "no_laborable") {

                    hoyes.classList.remove("hidden");
                    hoyes.removeAttribute("aria-hidden");
                    hoyes.classList.add(`text-${holidaysType[markerType]}`);

                    hoynoes.classList.add("hidden");
                    hoynoes.setAttribute("aria-hidden", "true");

                    detallehoy.innerHTML = markerLabel;
                    detallehoy.className = `text-${holidaysType[markerType]}`;
                    break;
                }
            };

        } else {
            // Año distinto al actual
            hoynoes.classList.add("hidden");
            hoyes.classList.add("hidden");
        }
    }
};