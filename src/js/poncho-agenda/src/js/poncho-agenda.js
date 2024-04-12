/**
 * Agenda
 *
 * @summary Agenda de eventos basada en PonchoTable donde se agrupan las
 * entradas por fecha de inicio, fecha de fin, y categoría.
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires jQuery, dataTables
 * @see https://github.com/argob/poncho/tree/master/src/js/poncho-table
 *
 *
 * MIT License
 *
 * Copyright (c) 2024 Argentina.gob.ar
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
class PonchoAgenda {

    DATE_REGEX = /^([1-9]|0[1-9]|[1-2][0-9]|3[0-1])\/([1-9]|0[1-9]|1[0-2])\/([1-9][0-9]{3})$/;

    constructor(options={}){
        options.headers = this._refactorHeaders(options);
        options.headersOrder = this._refactorHeadersOrder(options);

        // Global Options
        this.opts = Object.assign({}, this.defaults, options);

        this.categoryTitleClassList = this.opts.categoryTitleClassList;
        this.itemContClassList = this.opts.itemContClassList;
        this.itemClassList = this.opts.itemClassList;
        this.groupCategory = this.opts.groupCategory;
        this.dateSeparator = this.opts.dateSeparator;
        this.startDateIndex = this.opts.startDateIndex;
        this.endDateIndex = this.opts.endDateIndex;
        this.timeIndex = this.opts.timeIndex;

        this.descriptionIndex = this.opts.descriptionIndex;
        this.criteriaOneIndex = this.opts.criteriaOneIndex;
        this.criteriaTwoIndex = this.opts.criteriaTwoIndex;
        this.criteriaThreeIndex = this.opts.criteriaThreeIndex;
    }


    defaults = {
        allowedTags: [
            "strong","span", "dl", "dt", "dd", "img", "em","button", "button",
            "p", "div", "h3", "ul", "li", "time", "a", "h1"],

        criteriaOneIndex: "destinatarios",
        criteriaThreeIndex: "destacado",
        criteriaTwoIndex: "url",
        descriptionIndex: "descripcion",
        categoryTitleClassList: ["h6", "text-secondary"],
        itemContClassList: ["list-unstyled"],
        itemClassList: ["m-b-2"],
        dateSeparator: "/",
        filterStatus: {
            header: "Estado",
            nextDates: "Próximas",
            pastDates: "Anteriores",
        },
        endDateIndex: "hasta",
        groupCategory: "filtro-ministerio",
        rangeLabel: "Fechas",
        startDateIndex: "desde",
        timeIndex: "horario",
    };


    /**
     * Agrega los indices range y filtro-status al al array si no existieran.
     *
     * @param {object} options Opciones para ponchoTabla y Agenda
     * @returns {object}
     */
    _refactorHeadersOrder = options => {
        if(options.hasOwnProperty("headersOrder") &&
                options.headersOrder.length > 0){
            let order = options.headersOrder;
            for(const i of ["range", "filtro-status"]){
                if(!options.headersOrder.includes(i)){
                    options.headersOrder.push(i);
                }
            }
            return order;
        }
        return [];
    };


    /**
     * Mapea los headers.
     *
     * @return {string} key Key del item.
     */
    _header = (key) => {
        return (this.opts.headers.hasOwnProperty(key) ?
                this.opts.headers[key] : key);
    };

    /**
     * Refactor de headers
     *
     * @summary Agrega los headers de range y filterheader a los
     * asignados en el JSON.
     * @param {object} options Opciones para ponchoTabla y Agenda
     * @returns {object}
     */
    _refactorHeaders = options => {
        let labelStatus = this.defaults.filterStatus.header;
        if(options?.filterStatus?.header){
            labelStatus = options.filterStatus.header;
        }

        let rangeLabel = this.defaults.rangeLabel;
        if(options?.rangeLabel){
            rangeLabel = options.rangeLabel;
        }

        const headers = {
            ...{ "range": rangeLabel},
            ...options.headers,
            ...{"filtro-status": labelStatus}
        };

        return headers;
    }


    /**
     * Showdown habilitado.
     *
     * Verifica si la librería _showdown_ está disponible.
     * @returns {boolean}
     */
    _isMarkdownEnable = () => {
        if(typeof showdown !== "undefined" &&
            showdown.hasOwnProperty("Converter")){
                return true;
        }
        return false;
    };


    /**
     * Opciones para markdown
     * @returns {object}
     */
    _markdownOptions = () => {
        if(this._isMarkdownEnable()){
            if(this.opts.hasOwnProperty("markdownOptions") &&
                typeof this.opts.markdownOptions === "object"){
                return this.opts.markdownOptions;
            }
        }
        return {};
    };


    /**
     * Convierte un string a markdown
     *
     * @param {string} str Cadena de texto a convertir
     * @returns {string}
     */
    _markdownConverter = str => {
        if(this._isMarkdownEnable()){
            const converter = new showdown.Converter(this._markdownOptions());
            return converter.makeHtml(str);
        }
        return str;
    };


    /**
     * Fecha pasada
     *
     * @param {string} fecha Fecha a evaluar
     * @returns {boolean}
     */
    _isPastDate = fecha => {
        if(!this._isValidDateFormat(fecha)){
            console.error(`La fecha no tiene un formato válido: ${fecha}`);
            return false;
        }

        const dateToEvaluate = this._dateParser(fecha).date.getTime();
        const current = this._currentDate().date.getTime();

        return current > dateToEvaluate;
    }


    /**
     * Formato para fecha y hora
     *
     * @param {objecct} date Fecha como objeto {day, month, year}
     * @param {object} time Tiempo como objeto {hours, minutes, seconds}
     * @returns {string}
     */
    _dateTimeFormat = (date, time=false) => {
        const {day, month, year} = date;
        const dateFormat = [day, month, year].join(this.dateSeparator);
        let timeFormat = "";
        if(time){
            timeFormat = [hours, minutes].join(":");
        }
        return dateFormat + timeFormat;
    };


    /**
     * Fecha al momento de ejecutarse el script.
     *
     * @returns {object} Retorna un objeto con: el día, mes, año y el
     * objeto Date en fecha.
     */
    _currentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const format = [
            this._pad(day),
            this._pad(month),
            year].join(this.dateSeparator);

        return {...this._dateParser(format), ...{format}};
    }

    /**
     * Rellena con ceros a la izquierda
     *
     * @param {string|int} num Numero a rellenar con ceros.
     * @param {int} counter Cantidad total de caracteres.
     * @returns {string}
     */
    _pad = (num, counter=2) => num.toString().padStart(counter, "0");


    /**
     * Parsea una fecha.
     *
     * @param {string} date Fecha en formato dd/mm/yyyy.
     * @param {string} time Tiempo en formato hh:mm:ss
     * @example
     * // {
     * //     day: '09',
     * //     month: '05',
     * //     year: '2012',
     * //     hours: '00',
     * //     minutes: '00',
     * //     date: Wed May 09 2012 00:00:00 GMT-0300...
     * // }
     * this._dateParser("09/05/2012")
     * @returns {object|boolean}
     */
    _dateParser = (date, time="00:00:00") => {
        if(!this._isValidDateFormat(date)){
            console.error(`Formato de fecha incorrecto: ${date}`);
            return;
        }
        const regex = this.DATE_REGEX;
        const result = regex.exec(date);
        const [, day, month, year] = result;
        const objectDate = new Date(`${year}-${month}-${day} ${time}`);

        return {
            day: this._pad(day),
            month: this._pad(month),
            year,
            hours: this._pad(objectDate.getHours()),
            minutes: this._pad(objectDate.getMinutes()),
            "date": objectDate
        }
    }


    /**
     * Valida el formato de la fecha.
     * @summary El formato de fecha aceptado es: dd/mm/yyyy.
     * Al momento de escribir este documento, no hay otro habilitado.
     * @example
     * // true
     * this._isValidDateFormat("09/05/2012")
     *
     * // false
     * this._isValidDateFormat("09/10/15")
     * @param {string} str Fecha en formato dd/mm/yyyy.
     * @returns {boolean}
     */
    _isValidDateFormat = str => {
        const regex = this.DATE_REGEX;
        const result = regex.exec(str);

        return (result !== null ? true : false);
    }


    /**
     * Agrupa contenidos por fecha y la categoría asignada.
     *
     * @param {object} datos JSON a procesar
     * @returns {object}
     */
    _groupByFingerprintAndCategory = (datos) => {
        const agrupados = {};

        for (const dato of datos) {
            const categoria = dato[this.groupCategory];
            const {fingerprint} = dato;
            if (!agrupados[fingerprint]) {
                agrupados[fingerprint] = {};
            }
            if (!agrupados[fingerprint][categoria]) {
                agrupados[fingerprint][categoria] = [];
            }
            agrupados[fingerprint][categoria].push(dato);
        }

        return agrupados;
    }


    /**
     * Rearmo el JSON para agregar filtros.
     *
     * @param {object} jsonData
     * @returns {object}
     */
    _refactorEntries = jsonData => {
        if(!jsonData){
            console.error("No se puede recorrer el script")
        }

        let entries = [];
        jsonData.forEach(element => {
            let desde = element[this.startDateIndex];
            let hasta = element[this.endDateIndex];

            hasta = (hasta.trim() === "" ? desde : hasta);

            const {pastDates, nextDates} = this.opts.filterStatus;
            const estado = (this._isPastDate(hasta) ? pastDates : nextDates);
            // dates
            const startDate = this._dateParser(desde);
            const endDate = this._dateParser(hasta);
            const startDateTime = startDate.date.getTime();
            const endDateTime = endDate.date.getTime();
            const fingerprint = [startDateTime, endDateTime].join("_");

            let range = this._dateTimeFormat(startDate);
            if(startDateTime != endDateTime){
                range = `Del ${this._dateTimeFormat(startDate)} al `
                    + `${this._dateTimeFormat(endDate)}`;
            }

            // refactor entry
            const entry = {
                ...element,
                ...{
                    "range": range,
                    "filtro-status": estado,
                    fingerprint,
                    desde,
                    hasta,
                }
            };
            entries.push(entry);
        });

        return entries;
    };


    /**
     * Compone el template para el item de la agenda
     *
     * @param {string} description Descriptión del item de la agenda.
     * @param {string} date Fecha formato dd/mm/yyyy
     * @param {string} time Horario en formato hh:mm:ss
     * @returns {object}
     */
    itemTemplate = (description, destinatarios, url,
                destacados, date, time) => {
        const datetime = this._dateParser(date, time);
        const itemContainer = document.createElement("dl");

        // time

        const timeElement = document.createElement("time");
        if(time){
            timeElement.setAttribute("datetime", datetime.date.toISOString());
            timeElement.textContent = `${datetime.hours}:`
                + `${datetime.minutes}hs.`;
        } else {
            timeElement.textContent = "--:--";
        }
        // const timeContainer = document.createElement("span");
        // timeContainer.innerHTML =
        //         `<strong>${this.opts.headers[this.timeIndex]}</strong>: `;
        // timeContainer.appendChild(timeElement);

        const data = [
            // Térm, definition, screenreader, dtoff
            [
                "Descripción",
                this._markdownConverter(description),
                true, true],
            [
                this._header(this.criteriaOneIndex),
                this._markdownConverter(destinatarios),
                false, true],
            [
                this._header(this.criteriaThreeIndex),
                this._markdownConverter(destacados),
                false, true],
            [
                this._header(this.criteriaTwoIndex),
                this._markdownConverter(url),
                false, true],
            [
                this._header(this.timeIndex),
                timeElement.outerHTML,
                false, true],
        ];

        data.forEach( elem => {
            const [term, definition, srOnly, dtOff] = elem;
            if(!definition){
                return;
            }

            const dt = document.createElement("dt");
            dt.textContent = term;
            if(srOnly){
                dt.classList.add("sr-only");
            }
            const dd = document.createElement("dd");
            dd.textContent = definition;

            if(dtOff){
                itemContainer.appendChild(dt);
            }
            itemContainer.appendChild(dd);
        });


        if(this.itemClassList.some(f=>f)){
            itemContainer.classList.add(...this.itemClassList);
        }

        return itemContainer;
    };


    /**
     * Reagrupa las entradas dejando, por fecha, las entradas de la categoría.
     *
     * @param {object} entries
     * @returns {object}
     */
    _groupedEntries = entries => {
        let collect = [];
            // Nivel mismas fechas
            Object.values(entries).forEach(ele => {
            var entry;

            // Nivel ministerio
            // Cada iteración es un ministerio.
            Object.values(ele).forEach((element) => {
                var block = "";
                var title = "";

                const itemsContainer = document.createElement("div");
                if(this.itemContClassList.some(f=>f)){
                    itemsContainer.classList.add(...this.itemContClassList);
                }

                // Nivel items por ministerio
                element.forEach(a => {
                    entry = a;
                    if(title != entry[this.groupCategory]){
                        title = entry[this.groupCategory];

                        const titleElement = document.createElement("p");
                        if(this.categoryTitleClassList.some(f=>f)){
                            titleElement.classList.add(
                                ...this.categoryTitleClassList);
                            titleElement.textContent = title;
                            itemsContainer.appendChild(titleElement);
                        }
                    }

                    const item = this.itemTemplate(
                        a.descripcion, a.destinatarios, a.url,
                        a.destacados, a.desde, a.horario);
                    itemsContainer.appendChild(item);
                });

                block += itemsContainer.outerHTML;
                delete entry.fingerprint;
                let customData={};

                customData[this.descriptionIndex] = block;
                collect.push( {...entry, ...customData} );
            });
        });

        return collect;
    };


    /**
     * Valida si poncho tabla está importado
     * @returns {boolean}
     */
    _ponchoTableExists = () => {
        if(typeof ponchoTable !== "undefined"){
            return true;
        }
        return false;
    };


    /**
     * Imprime la tabla ponchoTable
     *
     * @returns {undefined}
     */
    render = () => {
        if(!this.opts.hasOwnProperty("jsonData")){
            console.error(
                "¡Hay un error en los datos pasados "
                + "a la función `PonchoAgenda`!");
            return;
        }

        const refactorEntries = this._refactorEntries(this.opts.jsonData);
        const groupedByDateAndCategory = 
                this._groupByFingerprintAndCategory(refactorEntries);
        this.opts.jsonData = this._groupedEntries(groupedByDateAndCategory);

        if(this._ponchoTableExists()){
            ponchoTable( this.opts );
        }
    };
};


if (typeof exports !== "undefined") {
    module.exports = PonchoAgenda;
}