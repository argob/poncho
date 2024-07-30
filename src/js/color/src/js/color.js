/**
 * Configuración de colores www.argentina.gob.ar
 * 
 * MIT License
 * 
 * Copyright (c) 2023 Argentina.gob.ar
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

/**
 * Códigos de color válidos para utilizar en ilustraciones. 
 */
const illustrationColors = [
    "primary",
    "miarg-azul",
    "palta",
    "success",
    "arandano",
    "rosado",
    "arena",
    "warning"
];


const ponchoColorList = (colorDefinitionsList) => {
    result = colorDefinitionsList
        .flatMap( m => m.data.flatMap(i => i.instance.map(x => x)) );
    return result || [];
};


const ponchoColorVariables = (colorDefinitions) => { 
    const colors = ponchoColorList(colorDefinitions);

    let collect = [];
    
    colors.flatMap(m => {
        const {alias, color, description, variant={}} = m;

        alias.forEach(function(a){
            collect.push( [a.code, color, description] );

            Object.entries(variant).forEach(function(value){
                if(!a.exclude_variant){
                    collect.push( [`${a.code}-${value[0]}`, value[1]] );
                }
            });
        })
    });
    return collect;
};


/**
 * Variaciones de color
 */
const colorVariations = {
    high: [
        "primary","verde-jade","success","naranja","danger","arandano",
        "uva","celeste-argentina","palta","verdin","warning","tomate",
        "fucsia","lavanda","black"
    ],
    medium: [
        "info","verde-azulado","verdin","warning","tomate","fucsia",
        "lavanda","palta","lima","maiz","muted"
    ]
};


/**
 * Definición por color
 *
 * @see ponchoColorDefinitionsList
 * @param {string} color Nombre del cólor a buscar.
 * @returns {string|boolean}
 */
function ponchoColorDefinitions(ponchoColor, colorList=false){
    if(typeof ponchoColor == undefined || !ponchoColor.trim()){
        return;
    }
    
    // Si no encuentra un listado global
    const defList = (typeof ponchoColorDefinitionsList !== 'undefined' ? 
            ponchoColorDefinitionsList : false);

    // Si no existen definiciones
    if([isValidPonchoColorDefList(colorList), 
        isValidPonchoColorDefList(defList)].every(s => s==false)){
        return;
    }

    const defColorList = (colorList ? colorList : defList);
    const lowerCasePonchoColor = ponchoColor.toLowerCase();
    let result = null;
    let gSpace = "";
    
    // Iteración por espacios (space)
    for(let i = 0; i <= defColorList.length - 1; i += 1){
        const {data, space} = defColorList[i];
        gSpace = space;
        
        // Itero por cada grupo de color dentro de data
        for(let y = 0; y <= data.length - 1; y += 1) {
            const {instance} = data[y];

            // Itero sobre las instancias de color
            for(let x = 0; x <= instance.length - 1; x += 1) {
            const {alias} = instance[x];
                if (alias.some(s => s.code == lowerCasePonchoColor)) {
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
const ponchoColorGroup = (themeSpace, spaceGroup) => {

    if(typeof spaceGroup == undefined || !spaceGroup?.trim()){
        return;
    }
    let result;
    for(let i = 0; i <= ponchoColorDefinitionsList.length -1; i += 1){
        const {data, space} = ponchoColorDefinitionsList[i];
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
const ponchoColorSpace = (space) => {
    if(typeof space == undefined || !space?.trim()){
        return;
    }

    return ponchoColorDefinitionsList.find(obj => obj.space==space);
};


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
const ponchoColor = color => {
    const defaultColor = "#99999";

    if (typeof color !== "string") {
        console.warn(`Invalid color provided. Using default: ${defaultColor}`);
        return defaultColor;
    }

    const definition = ponchoColorDefinitions( color.toLocaleLowerCase() );
    if (definition) {
        return definition.color || defaultColor;
    }

    return defaultColor;
};


/**
 * Hace un refactor del número hexa
 *
 * @param {string} value Valor hexadecimal
 * @returns {string}
 */
const cleanUpHex = value => {
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
 * Retorna el código de color poncho por hexadecimal.
 * @param {string} value Valor hexadecimal a buscar
 * @see ponchoColorDefinitionsList
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
function ponchoColorByHex(hexColor){
    if(!isValidHex(hexColor)){
        return;
    }

    var result = [];
    const targetColor = cleanUpHex(hexColor);

    for(let i = 0; i <= ponchoColorDefinitionsList.length -1; i += 1){
        let {data} = ponchoColorDefinitionsList[i];

        for(let entry of data){
            const {instance} = entry;
            for(let item of instance){
                const {color} = item;
                if( cleanUpHex(color) == targetColor ){
                    result.push(item);
                }
            }
        }
    }
    return result;
}


/**
 * Converson de HEX a RGB.
 * @param {string} hexColor Color hexadecimal
 * @returns {object}
 */
const hexToRgb = hexColor => {
    if (!isValidHex(hexColor)) {
        return null;
    }

    const hex = cleanUpHex(hexColor);
    const cleanedHex = (hex.startsWith("#") ? hex.slice(1) : hex);

    const red = parseInt(cleanedHex.slice(0, 2), 16);
    const green = parseInt(cleanedHex.slice(2, 4), 16);
    const blue = parseInt(cleanedHex.slice(4, 6), 16);

    return [red, green, blue];
}


function isValidPonchoColorDefList(colorDefinitins){
    return (
        Array.isArray(colorDefinitins) &&
        colorDefinitins.length > 0 &&
        colorDefinitins[0].hasOwnProperty('space')
    );
}


/**
 * Valida un color hexadecimal
 * @param {string} hexColor Color hexadecimal 
 * @returns {boolean}
 */
function isValidHex(hexColor){
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
}




if (typeof exports !== "undefined") {
    module.exports = {
        ponchoColorDefinitions, ponchoColor, ponchoColorByHex, cleanUpHex,
        illustrationColors, ponchoColorVariables
    };
}