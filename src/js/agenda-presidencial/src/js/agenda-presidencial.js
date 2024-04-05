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
     
    DATE_REGEX = /(0[1-9]|[1-2][0-9]|31)\/(0[1-9]|1[0-2])\/([1-9][0-9]{3})/;

    constructor(options={}) {
        // headers
        let labelStatus = "Estado";
        if(options?.statusIndex?.label){
            labelStatus = options?.statusIndex?.label;
        }
        options.headers =  {...options.headers, ...{"filtro-status": labelStatus}};

        this.opts = {...this.defaults, ...options};
        delete this.opts.headers["horario"];
        console.table(this.opts.headers);
    }


    defaults = () => {return {
        allowedTags: ["strong", "p", "div", "h3"],
        groupCategory: "filtro-ministerio",
        statusIndex: {
            label: "Estado",
            pastDates: "Anteriores",
            nextDates: "Próximas"
        },
    }};


    validarFechaEntreRango = (fechaInicio, fechaFin, fecha=false) => {
        const validate = [
            this.isValidDateFormat(fechaInicio), 
            this.isValidDateFormat(fechaFin)].every(e => e);
    
        if(!validate){
            console.error("Las fechas no son válidas");
            return false;
        }
    
        // Convertir las fechas a milisegundos desde la época
        let fechaEnMilisegundos;
        const fechaInicioEnMilisegundos = this.dateParser(fechaInicio).date.getTime();
        const fechaFinEnMilisegundos = this.dateParser(fechaFin).date.getTime();
    
        if(!fecha){
          fechaEnMilisegundos = this.currentDate().date.getTime();
        } else {
          fechaEnMilisegundos = this.dateParser(fecha).date.getTime();
        }
        // Validar si la fecha está dentro del rango
        return fechaEnMilisegundos >= fechaInicioEnMilisegundos && fechaEnMilisegundos <= fechaFinEnMilisegundos;
    }
    
    
    /**
     * Fecha pasada
     * 
     * @param {string} fecha Fecha a evaluar
     * @returns {boolean}
     */
    isPastDate = fecha => {
        if(!this.isValidDateFormat(fecha)){
            console.error(`La fecha no tiene un formato válido: ${fecha}`);
            return false;
        }
    
        const dateToEvaluate = this.dateParser(fecha).date.getTime();
        const current = this.currentDate().date.getTime();
    
        return  current > dateToEvaluate;
    }
    
    
    

    
    /**
     * Fecha al momento de ejecutarse el script.
     * 
     * @param {string} separator Separador usado en la fecha. Por defecto "/". 
     * @returns {object} Retorna un objeto con: el día, mes, año y el 
     * objeto Date en fecha. 
     */
    currentDate = (separator="/") => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const format = [
            day.toString().padStart(2, "0"),
            month.toString().padStart(2, "0"),
            year].join(separator);
    
        return {...this.dateParser(format), ...{format}};
    }
    
    
    /**
     * Parsea una fecha.
     * 
     * @param {string} str Fecha en formato dd/mm/yyyy.
     * @example
     * // {
     * //     day: '09', 
     * //     month: '05', 
     * //     year: '2012', 
     * //     date: Wed May 09 2012 00:00:00 GMT-0300...
     * // }
     * this.dateParser("09/05/2012")
     * @returns {object|boolean} 
     */
    dateParser = str => {
        if(!this.isValidDateFormat(str)){
            console.error(`Formato de fecha incorrecto: ${str}`);
            return;
        }
        const regex = this.DATE_REGEX;
        const result = regex.exec(str);
        const [, day, month, year] = result;
        const date = new Date(`${year}-${month}-${day} 00:00:00`);
    
        return {day, month, year, date}
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
    
    
    
    agruparPorFingerprintYMinisterio = (datos) => {
        const agrupados = {};
      
        for (const dato of datos) {
            const categoria = dato[this.opts.groupCategory];
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
     * 
     * @param {object} jsonData 
     * @returns 
     */
    refactorEntries = jsonData => {
        /**
         * Rearmo el JSON para agregar filtros. 
         */
        let entries = [];
        jsonData.forEach(element => {
            let {desde, hasta} = element;
            hasta = (hasta === "" ? desde : hasta);
            const {pastDates, nextDates} = this.opts.statusIndex;
            const estado = (this.isPastDate(hasta) ? pastDates : nextDates);
            const {month:startMonth, date:startDate} = this.dateParser(desde);
            const {date:endDate} = this.dateParser(hasta);
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
     * 
     * @param {object} entries 
     * @returns 
     */
    groupedEntries = entries => {
        let collect = [];   
            // Nivel mismas fechas
            Object.values(entries).forEach(ele => {
            var f;
    
            // Nivel ministerio
            // Cada iteración es un ministerio.
            Object.values(ele).forEach((element) => {
                var block = "";
                var title = "";
    
                // Nivel items por ministerio
                element.forEach(a => {
                    f = a; 
                    if(title != f[this.opts.groupCategory]){
                        title = f[this.opts.groupCategory];
                        block += "<h3 class=\"h6 text-secondary\">" 
                            + f[this.opts.groupCategory] +  "</h3>";
                    }
                    block += "<div class=\"m-b-2\"><p>" 
                        + a.descripcion + "</p>" 
                        + "<p><strong>Horario</strong> " 
                        + a.horario + "hs.</p></div>";
                });
    
                delete f.horario;
                delete f.fingerprint;
       
                let customData={};   
                customData["descripcion"] = block;
    
                collect.push( {...f, ...customData} );
            });
        });
    
        return collect;
    }


    render = () => {
        const refactorEntries = this.refactorEntries(this.opts.jsonData);
        const groupedByDateAndCategory = this.agruparPorFingerprintYMinisterio(refactorEntries);
        this.opts.jsonData = this.groupedEntries(groupedByDateAndCategory); 
        
        ponchoTable( this.opts );
        return;
    };

}








class Performance {
    constructor(name="Ejecución"){
        this.name = name;
    }
    start = () => {
        this._start = performance.now();
    }
    end = () => {
        const _end = performance.now();
        console.info(
            `%c[${this.name}] %c${_end - this._start}ms.`, 
            'background: #222; color: #2897D4 ; font-weight:600', 
            'background: #222; color: #37BBED'
        );
    }
};