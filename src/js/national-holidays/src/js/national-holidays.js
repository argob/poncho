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
    toggleText: function(scope, ln){
        if(typeof scope !== "string" && !scope.trim()){
            return;
        }

        function toCamelCase(slug){
            return slug.toLowerCase()
                .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        }
        
        document.querySelectorAll(`[data-${scope}-${ln}]`).forEach(i => {
            const key = toCamelCase(`${scope}-${ln}`);
            console.log(key)
            const value = i.dataset[key];
            console.log(value)
            i.textContent = value;
            i.lang = ln;
        }); 
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
            calendarCaption: "Calendario de {month}",
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
            calendarCaption: "{month} calendar",
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
    /**
     * Los markers tienen índice lang.
     * @param {object} markers Objeto con markers. 
     * @returns {boolean}
     */
    isMultiLang: function(markers){
        return Object
            .keys(markers)
            .some(f => this.availableLanguages.includes(f));
    }, 
    /**
     * Valida los markers.
     * 
     * @summary Valida que el array con eventos esté bien formado. 
     * Caso contrario ejecuta una excepción y frena toda ejecución.
     * 
     * @param {object} opts opciones
     * @returns {true|Error} 
     */
    validateMarkers: function(opts){
        if(!opts.hasOwnProperty("markers")){
            throw new Error(
                "El índice `markers`, no está incluido en las opciones.");
        }

        if (opts.markers === null || opts.markers === undefined) {
            throw new Error("El listado de eventos es incorrecto.");
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
        this.container.innerHTML = "";
        if(!this.container){
            throw new Error(`No se encuentra la etiqueta con ` 
                + `el id: ${opts.containerId}`);
        }

        this.template = document.querySelector(opts.templateId);
        if(!this.template){
            throw new Error(`No se encuentra la plantilla con `
                + `id: ${opts.templateId}`);
        }

        // Valido y preparolos markers.
        this.validateMarkers(opts);  

        // Defino los markers.
        this.inputMarkers = (this.isMultiLang(opts.markers) ? 
                opts.markers[this.ln] : opts.markers[0]);
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
        for(const day of this.dict.weekDaysAbbr){
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
        const monthName = this.dict.months[monthNumber];

        // Asigno el ID al tpl.
        const tplId = tpl.querySelector(".js-tpl-id");
        tplId.lang = this.ln;
        tplId.id = `m${monthName}`;

        // Lang a la tabla
        const tplTable = tpl.querySelector(".js-table");
        tplTable.lang = this.ln;

        const tplCaption = tpl.querySelector(".js-tpl-caption");
        tplCaption.textContent = this.dict.calendarCaption
                .replace("{month}", monthName);

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
            // Iconos accesibilidad. Decorativo.
            const uaIcon = document.createElement("i");
            uaIcon.classList.add("nh-icon", "universal-access");
            uaIcon.setAttribute("aria-hidden", "true");

            // Enlace de salto.
            const anchor = document.createElement("a");
            anchor.classList.add("sr-only", "sr-only-focusable");
            anchor.setAttribute("tabindex", "0");
            anchor.href = `#feriados-${parseInt(monthNumber) + 1}`;
            anchor.lang = this.ln;
            const anchorText = this.dict.jumpToList
                    .replace("{month}", monthName);
            anchor.innerHTML = `${uaIcon.outerHTML} ${anchorText}`; 

            // Contenedor <p>
            const jumpToListContainer = document.createElement("p");
            jumpToListContainer.className = "jump-to-list";
            jumpToListContainer.appendChild(anchor);

            const tplJumpToList = tpl.querySelector(".js-jump-to-list");
            tplJumpToList.appendChild(jumpToListContainer);

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
                a.href = `#feriado-${cell}-${markerMonthInt}`;
                a.setAttribute("tabindex", "0");
                a.setAttribute("aria-label", label);
                a.id = `feriado-cal-${cell}-${markerMonthInt}`;
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
        ul.setAttribute("tabindex", "0");
        ul.classList.add("holidays", "list-unstyled");
        ul.id = `feriados-${parseInt(monthId) + 1}`;

        for(let entry of Object.keys(result)){
            const event = result[entry];
            const {label, type} = event[0];
            const refactorLabel = (!label.endsWith(".") ? label + "." : label);
            const holidayType = this.dict.holidaysType[type];

            const compileDays = event.map(m => {
                const {markerDayInt, markerMonthInt} = this.parseDate(m.date);
                const ariaLabel = this.dict.dayAnchor
                    .replace("{month}", this.dict.months[markerMonthInt-1])
                    .replace("{day}", markerDayInt);

                const span = document.createElement("span");
                span.textContent = markerDayInt;
                span.setAttribute("aria-label", ariaLabel);
                span.id = `feriado-${markerDayInt}-${markerMonthInt}`;
                return span.outerHTML;
            });

            const refactorCompliedDays = `${compileDays.join(", ")}. `
            const refactorHolidayType = `<span class="sr-only">`
                + `${holidayType}&nbsp;—&nbsp;</span>`;

            const li = document.createElement("li");
            li.innerHTML = refactorCompliedDays + refactorHolidayType;

            if (this.allowHTML){
                li.insertAdjacentHTML('beforeend', refactorLabel);
            } else {
                const obj = document.createTextNode(refactorLabel);
                li.appendChild(obj);
            }

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

        const hoynoes = document.querySelectorAll("#js-hoynoes");
        const hoyes = document.querySelectorAll("#js-hoyes");
        const faltanHTML = document.querySelectorAll("#js-faltan");
        const proximoHTML = document.querySelectorAll("#js-proximo");
        const detalle = document.querySelectorAll(".js-detalle");

        let dayCount = 0;

        // Si el año es distinto al actual oculto el encabezado.
        if(this.calendarYear !== today.getFullYear()){
            hoynoes.forEach(elem => elem.classList.add("hidden"));
            hoyes.forEach(elem => elem.classList.add("hidden"));
            return;
        }

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
        if(nextHoliday && Object.keys(nextHoliday).length > 0 && !todayIsHoliday){
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
            faltanHTML.forEach(elem => elem.innerHTML = dayCount);

            // Cuándo es el próximo feriado
            const day = date.getDate();
            const month = this.dict.months[date.getMonth()];
            const proximoText = this.dict.nextHoliday
                .replace("{day}", day)
                .replace("{month}", month)
                .replace("{year}", date.getFullYear());

            proximoHTML.forEach(elem => {
                elem.innerHTML = proximoText;
                elem.lang = this.ln;
            });

            // Nombre el feriado
            const anchorDetalle = document.createElement("a");
            anchorDetalle.href = `#feriado-cal-${day}-${date.getMonth() + 1}`;
            anchorDetalle.textContent = markerLabel;
            detalle.forEach(detail => detail.innerHTML = anchorDetalle.outerHTML);
        }

        // Opciones para cuando el día es feriado.
        if(todayIsHoliday && Object.keys(todayIsHoliday).length > 0 ){
            const {label:markerLabel} = todayIsHoliday;
            const parseDate = a = this.parseDate(todayIsHoliday.date);

            hoyes.forEach(elem => {
                elem.classList.remove("hidden");
                elem.removeAttribute("aria-hidden");
            });

            hoynoes.forEach(elem => {
                elem.classList.add("hidden");
                elem.setAttribute("aria-hidden", "true");
            });

            const anchorDetalleHoy = document.createElement("a");
            anchorDetalleHoy.href = `#feriado-cal-${parseDate.markerDayInt}`
                    + `-${parseDate.markerMonthInt}`;
            anchorDetalleHoy.textContent = markerLabel;
            detalle.forEach(elem => elem.appendChild(anchorDetalleHoy));
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
