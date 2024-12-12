/**
 * Configuración de colores www.argentina.gob.ar
 *
 * MIT License
 *
 * Copyright (c) 2024 Argentina.gob.ar
 *
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
class Color { //jslint-ignore-line
    constructor(colorDefinitions){
        if(!this.isValidColorDefinitionList(colorDefinitions)){
            console.error("No se pasado por argumento el listado de color");
            return;
        }
        this.definitions = colorDefinitions;
    }


    /**
     * Remueve acentos y caracteres especiales.
     *
     * @param {string} data Cadena de texto a limpiar.
     * @example
     * // returns Accion Murcielago arbol nino
     * removeAccents("Acción Murciélago árbol niño")
     * @returns {string} Cadena de texto sin acentos.
     */
    replaceSpecialChars = (data) => {
        if(typeof data !== "string" || data.trim().length === 0){
            console.warn("replaceSpecialChars: Debe pasar una cadena de texto.");
            return "";
        }

        const search = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
                + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
        const replace = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
                + "rrsssssttuuuuuuuuuwxyyzzz";

        const a = search + search.toUpperCase();
        const b = replace + replace.toUpperCase();
        const p = new RegExp(a.split("").join("|"), "g");
        return data.toString().replace(p, c => b.charAt(a.indexOf(c)));
    };


    /**
     *
     * @param {array} definitions
     * @returns {boolean}
     */
    isValidColorDefinitionList(definitions){
        return (
            Array.isArray(definitions) &&
            definitions.length > 0 &&
            definitions[0].hasOwnProperty('space')
        );
    }


    /**
     * Listado de colores
     * @returns {object}
     */
    get list(){
        let result = this.definitions
        .flatMap( m => m.data.flatMap(i => i.instance.map(x => x)) );

        return result || [];
    }


    /**
     * Buscador de colores.
     *
     * @param {string} value Color a buscar.
     * @returns {object}
     */
    findColor = value => {
        if(typeof value !== "string" || value.trim().length === 0){
            console.error(
                "findColor:",
                "El valor a buscar debe ser una cadena de texto.");
            return [];
        }

        const searchResults = this.variables.filter( function(f){
            if( f[0].includes( value ) ){
                return f
            }
        }).map(m => {
                const [code, color] = m;
                return [code, color];
        });

        return searchResults;
    }


    /**
     *
     * @param {*} colorDefinitions
     * @returns
     */
    get variables(){
        let collect = [];

        this.list.flatMap(m => {
            const {alias, color, description, code, variant=[], name} = m;

            alias.forEach(function(a){
                collect.push( [a.code, color, description, code, name] );

                variant.forEach(function(value){
                    if(!a.exclude){
                        collect.push( [`${a.code}-${value.variant}`, value.color, "", code, value.name] );
                    }
                });
            })
        });
        return collect.sort();
    };


    get spaces(){
        return this.definitions.map(m => m.space).sort();
    }


    groupsBySpace = space => {
        if (typeof space !== 'string') {
            throw new TypeError('groupsBySpace: El argumetno debe ser un string');
        }
        const spaceToLower = space.toLocaleLowerCase();
        const data = this.definitions
            .find(f => f.space == spaceToLower)?.data?.map(m => m.group);

        const result = data ? data.sort() : [];
        return result;
    }


    /**
     * Colores poncho a hexa
     *
     * @see https://argob.github.io/poncho/identidad/colores/
     * @param {string} color Nombre de color Poncho.
     * @example
     * // returns "#2897d4"
     * getColor("celeste")
     * @returns {string} Color en formato hexadecimal.
     */
    ponchoColor = color => {
        const defaultColor = "#999999";
        const self = this;

        if (typeof color !== "string") {
            console.warn(
                `Invalid color provided. Using default: ${defaultColor}`
            );
            return defaultColor;
        }

        const definition = this.variables.find(function(f){
            return (f[0] == self.replaceSpecialChars(color).toLowerCase());
        });

        return (definition ? definition[1] : defaultColor);
    };


    /**
     * Definición por color
     *
     * @see colorDefinitionsList
     * @param {string} color Nombre del cólor a buscar.
     * @returns {string|boolean}
     */
    colorDefinitions = (ponchoColor) => {
        if(typeof ponchoColor == undefined || !ponchoColor.trim()){
            return;
        }

        const lowerCasePonchoColor = this.replaceSpecialChars(ponchoColor).toLowerCase();
        let result;
        let gSpace = "";

        // Iteración por espacios (space)
        for(let i = 0; i <= this.definitions.length - 1; i += 1){
            const {data, space} = this.definitions[i];
            gSpace = space;

            // Itero por cada grupo de color dentro de data
            for(let y = 0; y <= data.length - 1; y += 1) {
                const {instance} = data[y];

                // Itero sobre las instancias de color
                for(let x = 0; x <= instance.length - 1; x += 1) {
                    const {alias, variant} = instance[x];
                    if ( alias.some(s => s.code == lowerCasePonchoColor) ) {
                        result = instance[x];
                        break;
                    }
                    else if( variant.some(s => s.code == lowerCasePonchoColor) ){
                        result = instance[x];
                        break;
                    }
                }
                if (result) break;
            }
        }

        return result;
    };


    /**
     * Grupo de color
     * @param {string} name Nombre del grupo
     * @returns
     */
    colorGroup = (themeSpace, spaceGroup) => {
        if(typeof spaceGroup == undefined || !spaceGroup?.trim()){
            return;
        }

        let result;
        for(let i = 0; i <= this.definitions.length -1; i += 1){
            const {data, space} = this.definitions[i];
            result = data.find(obj => (obj.group==spaceGroup && space==themeSpace));
            if (result) break;
        }
        return result;
    };


    /**
     * Espacio de color
     * @param {string} name Nombre del espacio
     * @returns
     */
    colorSpace = (space) => {
        if(typeof space == undefined || !space?.trim()){
            return;
        }

        return this.definitions.find(obj => obj.space==space);
    };


    /**
     * Retorna el código de color poncho por hexadecimal.
     * @param {string} value Valor hexadecimal a buscar
     * @see colorDefinitionsList
     * @example
     * // {
     * //    "description": "",
     * //    "name": "Mandarina",
     * //    "color": "#f79525",
     * //    "code": "mandarina",
     * //    "alias": [
     * //        "mandarina"
     * //    ]
     * // }
     * findByHex("#f79525");
     * @returns {object} Objecto con la defición del color
     */
    colorByHex = (hexColor) => {
        if(!this.isValidHex(hexColor)){
            return;
        }

        var result = [];
        const targetColor = this.cleanHex(hexColor);

        for(let i = 0; i <= this.definitions.length -1; i += 1){
            let {data} = this.definitions[i];

            for(let entry of data){
                const {instance} = entry;
                for(let item of instance){
                    const {color} = item;
                    if( this.cleanHex(color) == targetColor ){
                        result.push(item);
                    }
                }
            }
        }
        return result;
    };


    /**
     * Hace un refactor del número hexa
     *
     * @param {string} value Valor hexadecimal
     * @returns {string}
     */
    cleanHex = value => {
        let hex = value
            .toString()
            .replace("#", "")
            .trim()
            .toUpperCase();

        if (hex.length < 3 || hex.length > 6){
            return false;
        } else if(hex.length == 3){
            hex = Array.from(hex).map(a => a.repeat(2)).join("");
        }
        return `#${hex}`;
    };


    /**
     * Valida un color hexadecimal
     * @param {string} hexColor Color hexadecimal
     * @returns {boolean}
     */
    isValidHex = (hexColor) => {
        if (hexColor === null || hexColor === undefined) {
            return false;
        }

        if (typeof hexColor !== 'string') {
            return false;
        }

        const regx = new RegExp(/^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/);
        if (!regx.test(hexColor)) {
            console.warn("Invalid hex color format:", hexColor);
            return false;
        }
        return true;
    };


    /**
     * Converson de HEX a RGB.
     * @param {string} hexColor Color hexadecimal
     * @returns {object}
     */
    hexToRgb = hexColor => {
        if (!this.isValidHex(hexColor)) {
            return;
        }

        const hex = this.cleanHex(hexColor);
        const cleanedHex = (hex.startsWith("#") ? hex.slice(1) : hex);

        const red = parseInt(cleanedHex.slice(0, 2), 16);
        const green = parseInt(cleanedHex.slice(2, 4), 16);
        const blue = parseInt(cleanedHex.slice(4, 6), 16);

        return [red, green, blue];
    }


    /**
     * Imprime el nombre de un color
     * 
     * @param  {array} args Array list [arg, arg, arg]
     * @param  {array} options object Objeto con opciones para los switch.
     * @example
     * // maíz - azul a verde
     * colorName(
     *     ["arg-maiz", "arg-azul", "arg-verde"], 
     *     {
     *         switchLastConnector: {'i': "a", "o": "a"}, 
     *         defaultLastConnector: "a", 
     *         listConnector: " - "
     *     }
     * )
     * @returns {string}
     */
    colorName = (args, options={}) => {
        if(args.length < 1){
            console.error("Error.", "Debe pasar al menos un argumento.");
            return;
        }

        if(typeof args == "string"){
            args = [args];
        }

        if(!args.every(e => typeof e === "string")){
            console.error("Error.", "Solo se admiten cadenas de texto");
            return;
        }

        // Options
        const defaultConnectorSwitch = {"i": "e", "o": "u"};
        const defaultConnector = "y";
        const defaultListConnector = ", ";

        const optionConnectorSwitch = (typeof options == "object" && 
            options.hasOwnProperty('switchLastConnector') ? 
            options.switchLastConnector : defaultConnectorSwitch);
        const optionDefaultConnector = (typeof options == "object" && 
            options.hasOwnProperty('defaultLastConnector') ? 
            options.defaultLastConnector : defaultConnector);
        const optionDefaultListConnector = (typeof options == "object" && 
            options.hasOwnProperty('listConnector') ? 
            options.listConnector : defaultListConnector);


        const getColorName = (arg) => {
            const result = this.variables.find(f => (f[0] == arg)); 
            return typeof result != "undefined" ? result[4] : arg;
        };

        if (args.length === 1) {
            return getColorName(args.join(""));
        }

        const totalArgs = args.length;
        const lastArg = args.pop(totalArgs - 1);
        const firstCharName = Array.from( getColorName(lastArg) )[0].toLowerCase();
        const connector = (optionConnectorSwitch[firstCharName] || 
                optionDefaultConnector);
    
        const result = `${args.map(m => getColorName(m)).join(optionDefaultListConnector)} ${connector}` 
                + ` ${getColorName(lastArg)}`; 
    
        return result.toLowerCase();
    };
}


if (typeof exports !== "undefined") {
    module.exports = {Color};
}