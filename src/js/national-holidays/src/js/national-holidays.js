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
    oerderByDate(array) {
        return array.sort((a, b) => {
            const fechaA = this.parseDate(a.date).dateObject;
            const fechaB = this.parseDate(b.date).dateObject;
            return fechaA - fechaB;
        });
    },      
    /**
     * Deconstruye la fecha y la retorna en sus partes y un en objeto Date.
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
    /**
     * Verifica que una fecha sea válida
     * 
     * @param {integer} year Año en formato yyyy
     * @param {integer} month Mes, considerando enero = 1.
     * @param {integer} day Día
     * @returns {boolean}
     */
    isValidDate(year, month, day) {
        const areValid = [year, month, day].every(num => !isNaN(Number(num)));
        if(!areValid){
            return false;
        }
        const date = new Date(year, month - 1, day);
        return (
            date.getFullYear() === parseInt(year) &&
            date.getMonth() === parseInt(month) - 1 &&
            date.getDate() === parseInt(day)
        );
    },
    /**
     * Valida que una entrada al calendario tenga las claves correctas.
     * 
     * @param {object} data Objeto entrada de calendario
     * @returns {boolean} Devuelve `true` si la operación fue exitosa.
     * @throws {Error} Si ocurre algún error durante la operación.
     */
    isValidEntry: function(data){
        const dataString = JSON.stringify(data);
        const expectedKeys = ["date", "type", "label"];
        
        // 1. Valido que existan los keys
        const hasAllKeys = expectedKeys.every(
            key => Object.prototype.hasOwnProperty.call(data, key));
        if(!hasAllKeys){
            throw new Error("La entrada tiene claves incorrectas o "
                + `errores sintácticos: ${dataString}` );
        }

        // 2. Valido el formato de la fecha
        const {date} = data;
        const regex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
        if(!regex.test(date)){
            throw new Error(`El formato de la fecha es incorrecto: `
                + `${dataString}`);
        }

        // 3. Valido que la fecha exista.
        const {
            markerDayInt:day, 
            markerMonthInt:month, 
            markerYearInt:year} = this.parseDate(date);

        if(!this.isValidDate(year, month, day)){
            throw new Error(`La fecha es incorrecta: ${dataString}`);
        }

        // 4. Valido que el label no esté vacío.
        const {label} = data;
        if(typeof label !== "string" || label.trim() === ""){
            throw new Error(`El label debe ser una cadena de texto y no `
                + `puede estár vacío: ${dataString}`);
        }

        return true;
    },
    render: function(options) {
        const defaults = {
            containerId: "#calendar-container",
            templateId: "#month-tpl",
            allowHTML:false,
            lang: "es",
            holidays_type: {
                inamovible: "primary",
                trasladable: "success",
                no_laborable: "nl",
                turistico: "turistico"
            }
        };

        let opts = Object.assign({}, defaults, options);

        this.availableLanguages = Object.keys(this.dictionary);
        this.allowHTML = opts.allowHTML;
        this.holidayType = opts.holidays_type;
        this.calendarYear = opts.calendarYear;
        this.ln = (this.availableLanguages.includes(opts.lang) ? 
            opts.lang : defaults.lang);

        // Defino el objecto Container
        this.container = document.querySelector(opts.containerId);
        if(!this.container){
            throw new Error(`No se encuentra la etiqueta con ` 
                + `el id: ${opts.containerId}`);
        }

        this.template = document.querySelector(opts.templateId);
        if(!this.template){
            throw new Error(`No se encuentra la plantilla con `
                + `id: ${opts.templateId}`);
        }

        // Valido y preparo los markers.
        if(!opts.hasOwnProperty("markers")){
            throw new Error("No se encuentra la clave: 'markers', "
                + "dentro de las opciones.");
        }

        if (opts.markers === null || opts.markers === undefined) {
            throw new Error("El listado de eventos es incorrecto.");
        }

        if(Array.isArray(opts.markers) && opts.markers.length < 1){
            throw new Error("El listado (array), no puede estar vacío.");
        }

        if(typeof opts.markers === "object" && Object.keys(opts.markers).length < 1){
            throw new Error("El listado (object), no puede estar vacío.");
        }

        const isMultiLang = Object
            .keys(opts.markers)
            .some(f => this.availableLanguages.includes(f));
        this.inputMarkers = (isMultiLang ? opts.markers[this.ln] : 
            opts.markers[0]);
        this.inputMarkers.forEach(entry => this.isValidEntry(entry));
        this.markers = this.oerderByDate(this.inputMarkers);

        this.dict = this.dictionary[this.ln];


        // RENDER CALENDAR
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
        return list;
    },
    /**
     * Imprime cada uno de los calendarios completos en 
     * la etiqueta contenedora.
     * 
     * @returns {undefined}
     */
    renderCalendar: function() {
        for(const monthNumber in [...Array(12).keys()]){
            const iterationDate = this.tZone(
                new Date(this.calendarYear, monthNumber, 1, 12, 0, 0),
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
                const label = this.dict.dayAnchor
                    .replace("{month}", this.dict.months[markerMonthInt-1])
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
                
                td.classList.add(`bg-${this.holidayType[type]}`);
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

            let obj;
            if(this.allowHTML){
                obj = document.createElement('span')
                obj.innerHTML = label.trim();
            } else {
                obj = document.createTextNode(label);
            }

            const text = `${compileDays.join(", ")}. `
                + `<span class="sr-only">`
                + `${holidayType}&nbsp;—&nbsp;</span> `;
            // 
            const li = document.createElement("li");
            li.innerHTML = text;
            li.appendChild(obj);

            ul.appendChild(li);
        }
        return ul;
    }, 
    /**
     * Dias faltantes para el feriado.
     * 
     * @param {Date} nowDate Objeto Date del momento now().
     * @param {Date} compareDate Objeto Date de la fecha a comparar.
     * @returns {number}
     */
    dayCount: function(nowDate, compareDate){
        const timeDiff = Math.abs(compareDate.getTime() - nowDate.getTime());
        const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return dayCount;
    },
    /**
     * Agrega la información para el bloque que informa sobre si 
     * es o no un día feriado y cuanto falta para el próixmo.
     * 
     * @returns {undefined}
     */
    daysLeft: function(){
        const today = this.tZone((new Date), this.timeZone);
        const hoynoes = document.querySelector("#js-hoynoes");
        const hoyes = document.querySelector("#js-hoyes");

        let dayCount = 0;

        // Si el año es distinto al actual oculto el encabezado.
        if(this.calendarYear !== today.getFullYear()){
            hoynoes.classList.add("hidden");
            hoyes.classList.add("hidden");
            return;
        }

        const faltanHTML = document.querySelector("#js-faltan");
        const proximoHTML = document.querySelector("#js-proximo");
        const detalleHTML = document.querySelector("#js-detalle");
        const detallehoy = document.querySelector("#js-detallehoy");

        // Verifico si hoy es un feriado.
        const todayIsHoliday = this.markers.find(entry => {
            const {date, type} = entry;
            const {dateObject} = this.parseDate(date);
            return (today.getDate() == dateObject.getDate() &&
                today.getMonth() == dateObject.getMonth() &&
                type !== "no_laborable");
        });

        // Obtengo el próximo feriado.
        const nextHoliday = this.markers.find(entry => {
            const {date, type} = entry;
            const {dateObject} = this.parseDate(date);
            return (today < dateObject && type !== "no_laborable");
        });

        // Opciones para el próixmo feriado
        if(nextHoliday){
            const {
                date:markerDate, 
                label:markerLabel} = nextHoliday;
            const {
                markerDay, 
                markerMonth, 
                markerYear} = this.parseDate(markerDate);
            const date = this.tZone(
                new Date(markerYear, markerMonth - 1, markerDay),
                this.timeZone);

            // Días que faltan para el feriado.
            dayCount = this.dayCount(today, date);
            faltanHTML.innerHTML = dayCount;

            // Nombre el feriado
            detalleHTML.innerHTML = markerLabel;
            
            // Cuándo es el próximo feriado
            const day = date.getDate();
            const month = this.dict.months[date.getMonth()];
            const proximoText = this.dict.nextHoliday
                .replace("{day}", day)
                .replace("{month}", month)
                .replace("{year}", date.getFullYear());
            proximoHTML.innerHTML = proximoText;
            proximoHTML.lang = this.ln;
        }

        // Opciones para cuando el día es feriado.
        if(todayIsHoliday){
            const {label:markerLabel} = todayIsHoliday;

            hoyes.classList.remove("hidden");
            hoyes.removeAttribute("aria-hidden");

            hoynoes.classList.add("hidden");
            hoynoes.setAttribute("aria-hidden", "true");

            detallehoy.innerHTML = markerLabel;
        };

        // Opciones para un día o más de uno.
        if(dayCount == 1){
            this.toggleText("text-singular", this.ln);
        } else {
            this.toggleText("text-plural", this.ln);
        }
        this.toggleText("text", this.ln);
    }
};


if (typeof exports !== "undefined") {
    module.exports = {calendar};
}
