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
function ponchoColorDefinitions(ponchoColor){
    if(typeof ponchoColor == undefined || !ponchoColor.trim()){
        return;
    }
    const lowerCasePonchoColor = ponchoColor.toLowerCase();
    let result = null;
    let gSpace = "";
    
    // Iteración por espacios (space)
    for(let i = 0; i <= ponchoColorDefinitionsList.length - 1; i += 1){
        const {data, space} = ponchoColorDefinitionsList[i];
        gSpace = space;
        
        // Itero por cada grupo de color dentro de data
        for(let y = 0; y <= data.length - 1; y += 1) {
            const {instance} = data[y];

            // Itero sobre las instancias de color
            for(let x = 0; x <= instance.length - 1; x += 1) {
            const {alias} = instance[x];
                if (alias.includes( lowerCasePonchoColor )) {
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
    if(typeof hexColor == undefined || !hexColor?.trim()){
        return;
    }

    let result;
    const targetColor = cleanUpHex(hexColor);
    for(let i = 0; i <= ponchoColorDefinitionsList.length -1; i += 1){
        let {data} = ponchoColorDefinitionsList[i];

        for(let entry of data){
            const {instance} = entry;
            for(let item of instance){
                const {color} = item;
                if( cleanUpHex(color) === targetColor ){
                    result = item;
                    break;
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
    if (!hexColor || !hexColor.match(/^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/gm)) {
        console.warn("Invalid hex color format:", hexColor);
        return null;
    }

    const hex = cleanUpHex(hexColor);
    const cleanedHex = (hex.startsWith("#") ? hex.slice(1) : hex);

    const red = parseInt(cleanedHex.slice(0, 2), 16);
    const green = parseInt(cleanedHex.slice(2, 4), 16);
    const blue = parseInt(cleanedHex.slice(4, 6), 16);

    return [red, green, blue];
}



if (typeof exports !== "undefined") {
    module.exports = {
        ponchoColorDefinitions, ponchoColor, ponchoColorByHex, cleanUpHex
    };
}