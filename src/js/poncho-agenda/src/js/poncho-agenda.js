/**
 * Agenda presidencial
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

    constructor(options={}) {

        let defaults = {
            allowedTags: ["strong", "p", "div", "h3", "ul", "li", "time"],
            groupCategory: "filtro-ministerio",
            statusIndex: {
                label: "Estado",
                pastDates: "Anteriores",
                nextDates: "Próximas"
            },
            categoryTitleClassList: ["h6", "text-secondary"],
            itemContClassList: ["list-unstyled"],
            itemClassList: ["m-b-2"]
        };

        // headers
        let labelStatus = defaults.statusIndex.label;
        if(options?.statusIndex?.label){
            labelStatus = options.statusIndex.label;
        }
        options.headers = {
            ...options.headers, ...{"filtro-status": labelStatus}
        };

        // Global Options
        this.opts = Object.assign({}, defaults, options);
        delete this.opts.headers["horario"];

        this.categoryTitleClassList = this.opts.categoryTitleClassList;
        this.itemContClassList = this.opts.itemContClassList;
        this.itemClassList = this.opts.itemClassList;
        this.groupCategory = this.opts.groupCategory;
    }


    /**
     * Fecha pasada
     * 
     * @param {string} fecha Fecha a evaluar
     * @returns {boolean}
     */
    _isPastDate = fecha => {
        if(!this.isValidDateFormat(fecha)){
            console.error(`La fecha no tiene un formato válido: ${fecha}`);
            return false;
        }
    
        const dateToEvaluate = this._dateParser(fecha).date.getTime();
        const current = this._currentDate().date.getTime();
    
        return current > dateToEvaluate;
    }
    
    
    /**
     * Fecha al momento de ejecutarse el script.
     * 
     * @param {string} separator Separador usado en la fecha. Por defecto "/". 
     * @returns {object} Retorna un objeto con: el día, mes, año y el 
     * objeto Date en fecha. 
     */
    _currentDate = (separator="/") => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const format = [
            day.toString().padStart(2, "0"),
            month.toString().padStart(2, "0"),
            year].join(separator);
    
        return {...this._dateParser(format), ...{format}};
    }
    
    
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
        if(!this.isValidDateFormat(date)){
            console.error(`Formato de fecha incorrecto: ${date}`);
            return;
        }
        const regex = this.DATE_REGEX;
        const result = regex.exec(date);
        const [, day, month, year] = result;
        const objectDate = new Date(`${year}-${month}-${day} ${time}`);

        return {
            day, 
            month, 
            year,
            hours: objectDate.getHours().toString().padStart(2, "0"), 
            minutes: objectDate.getMinutes().toString().padStart(2, "0"),
            "date": objectDate
        }
    }
    
    
    /**
     * Valida el formato de la fecha.
     * @summary El formato de fecha aceptado es: dd/mm/yyyy. 
     * Al momento de escribir este documento, no hay otro habilitado.
     * @example
     * // true
     * this.isValidDateFormat("09/05/2012")
     * 
     * // false
     * this.isValidDateFormat("09/10/15")
     * @param {string} str Fecha en formato dd/mm/yyyy.
     * @returns {boolean}
     */
    isValidDateFormat = str => {
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
    agruparPorFingerprintYMinisterio = (datos) => {
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
     * @param {object} jsonData 
     * @returns 
     */
    refactorEntries = jsonData => {
        if(!jsonData){
            console.error("No se puede recorrer el script")
        }

        let entries = [];
        jsonData.forEach(element => {
            let {desde, hasta} = element;
            hasta = (hasta === "" ? desde : hasta);
            const {pastDates, nextDates} = this.opts.statusIndex;
            const estado = (this._isPastDate(hasta) ? pastDates : nextDates);
            const {date:startDate} = this._dateParser(desde);
            const {date:endDate} = this._dateParser(hasta);
            const fingerprint = [
                startDate.getTime(), endDate.getTime()].join("_");
    
            const entry = {
                ...element,
                ...{"filtro-status": estado, hasta, fingerprint}
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
    itemTemplate = (description, date, time) => {
        const datetime = this._dateParser(date, time);
        const descriptionContainer = document.createElement("p");
        descriptionContainer.textContent = description;

        const timeContainer = document.createElement("p");
        timeContainer.innerHTML = "<strong>Horario</strong>: ";
        const timeElement = document.createElement("time");
    
        if(time){
            timeElement.setAttribute("datetime", datetime.date.toISOString());
            timeElement.textContent = `${datetime.hours}:${datetime.minutes}hs.`;
        } else {
            timeElement.textContent = "--:--";
        }

        timeContainer.appendChild(timeElement);
        const itemContainer = document.createElement("li");
        if(this.itemClassList.some(f=>f)){
            itemContainer.classList.add(...this.itemClassList);
        }
        itemContainer.appendChild(descriptionContainer);
        itemContainer.appendChild(timeContainer);

        return itemContainer;
    };


    /**
     * 
     * @param {object} entries 
     * @returns 
     */
    groupedEntries = entries => {
        let collect = [];   
            // Nivel mismas fechas
            Object.values(entries).forEach(ele => {
            var entry;
    
            // Nivel ministerio
            // Cada iteración es un ministerio.
            Object.values(ele).forEach((element) => {
                var block = "";
                var title = "";

                const itemsContainer = document.createElement("ul");
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
                        }
                        itemsContainer.appendChild(titleElement);
                    }

                    const item = this.itemTemplate(
                        a.descripcion, a.desde, a.horario);
                    itemsContainer.appendChild(item);
                });
    
                block += itemsContainer.outerHTML;

                delete entry.horario;
                delete entry.fingerprint;
       
                let customData={};   
                customData["descripcion"] = block;
    
                collect.push( {...entry, ...customData} );
            });
        });
    
        return collect;
    }


    /**
     * Valida si poncho tabla está importado
     * @returns {boolean}
     */
    _ponchoTableExists = () => {
        if(typeof ponchoTable !== "undefined"){
            return true;
        }
        return false;
    }


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

        const refactorEntries = this.refactorEntries(this.opts.jsonData);
        const groupedByDateAndCategory = this.agruparPorFingerprintYMinisterio(refactorEntries);
        this.opts.jsonData = this.groupedEntries(groupedByDateAndCategory); 

        if(this._ponchoTableExists()){
            ponchoTable( this.opts );
        }
    };

}


// class Performance {
//     constructor(name="Ejecución"){
//         this.name = name;
//     }
//     start = () => {
//         this._start = performance.now();
//     }
//     end = () => {
//         const _end = performance.now();
//         console.info(
//             `%c[${this.name}] %c${_end - this._start}ms.`, 
//             'background: #222; color: #2897D4 ; font-weight:600', 
//             'background: #222; color: #37BBED'
//         );
//     }
// };


if (typeof exports !== "undefined") {
    module.exports = PonchoAgenda;
}