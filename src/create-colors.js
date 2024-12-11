const fs = require('fs');
const {Color} = require('./js/color/src/js/color');
const {illustrationColors, headersBackground} = require('./js/color/src/js/color-variations');
const {
    ponchoColorDefinitionsList
} = require('./js/color/src/js/color-definitions');

const _color = new Color(ponchoColorDefinitionsList);
const dataList = _color.variables;


/**
 * SCSS, VARIABLES
 */
const SCSS_PATH = `./src/scss/modules/`;
const SCSS_FILENAME = "_poncho-colors.scss";

const content = dataList.map(function(entry){
    const [code, color, description=false] = entry;
    // Hay colores que llevan el prefijo $brand- o ninguno. La regla
    // responde a esta necesidad.
    const regex = /(?:(black|white)$|(^gray-?))/gm;
    // TPL
    const prefix = (!regex.test(code.trim()) ? "brand-" : "");
    const hasDescr = (description ? ` /* ${description} */ ` : "");
    const str = `$${prefix}${code}: ${color} !default;${hasDescr}`;

    return str;
});


/**
 * SCSS, ARRAY DE COLORES
 */
const contentList = dataList.map(function(entry, key){
    const [code] = entry;
    // TPL
    const regex = /(?:(black|white)$|(^gray-?))/gm;
    const prefix = (!regex.test(code) ? "brand-" : "");
    const str = `("${code}", $${prefix}${code})`;

    return str;
});


/**
 * SCSS, ARRAY DE COLORES PRA :ROOT
 * entry --['amarillo', '#E7BA61', 'Foco o alerta']
 */
const contentListRoot = dataList.map(function(entry, key){
    const [code, value] = entry;
    // TPL
    const regex = /(?:(black|white)$|(^gray-?))/gm;
    const prefix = (!regex.test(code) ? "brand-" : "");
    const str = `--${code}:${value};`
    return str;
});


/**
 * Lista de variables tonales
 * @param {*} ponchoColorDefinitionsList 
 * @returns 
 */
function rootColorDefinitios(ponchoColorDefinitionsList=[]){
    let myRoot = [];
    for (let th of ponchoColorDefinitionsList) {
        const {space, data, name=false} = th;
        for(let colorGroup of data){
            const {color, name, alias, instance, group} = colorGroup;
            const colorKeys = Object.keys(color);
            const root = colorKeys.forEach(function(key){
                myRoot.push(`--${space}-${group}-${key}:${color[key]};`);
            });
        }
    }
    
    return myRoot;
}


// start template
const templateColors = `/**
 * COLORES PONCHO
 * Versión 2
 *
 * @summary Listado de colores disponibles para representar texto y elementos
 * visuales dentro del sitio web www.argentina.gob.ar.
 *
 * Copyright (c) 2024 Argentina.gob.ar
 */
${content.join("\n")}


/**
 * Listado de variables de color
 */
$colores: ${contentList.join(",\n")};


/**
 * Variables tonales :root, html.
 *
 * @summary Crea las variables de estilo --color: [hex], 
 * para html,root: {...}
 */
:root,
html {
    ${
        [
            ...rootColorDefinitios(_color.definitions),
            ...contentListRoot
        ].join("\n\t")
    }
}`;
// end template 


// Write file
fs.writeFile(
    SCSS_PATH + SCSS_FILENAME,
    templateColors, function(err){
    if (err) {
        console.error(`Error creando el archivo: "${SCSS_FILENAME}":`, err);
    } else {
        console.log(`¡El archivo: "${SCSS_FILENAME}", se creó con éxito!`);
    }
});


/**
 * JSON COLORES PARA ILUSTRACIONES
 * Códigos de color válidos para utilizar en ilustraciones.
 */
const ILLUS_COLORS_JSON_PATH = `./dist/jsons/`;
const ILLUS_COLORS_JSON_FILENAME = "illustrations-colors.json";

const illustrationColorsContent = illustrationColors.map(function(color){
    return _color.colorDefinitions(color);
});

fs.writeFile(
    ILLUS_COLORS_JSON_PATH + ILLUS_COLORS_JSON_FILENAME,
    JSON.stringify(illustrationColorsContent), function(err){
        if (err) {
            console.error(
                `Error creando el archivo: "${ILLUS_COLORS_JSON_FILENAME}":`, 
                err);
        } else {
            console.log(
                `¡El archivo: "${ILLUS_COLORS_JSON_FILENAME}", `
                + `se creó con éxito!`);
        }
    }
);


/**
 * JSON COLORES
 */
const COLORS_JSON_PATH = `./dist/jsons/`;
const COLORS_JSON_FILENAME = "poncho-colors.json";

fs.writeFile(
    COLORS_JSON_PATH + COLORS_JSON_FILENAME,
    JSON.stringify(ponchoColorDefinitionsList), function(err){
        if (err) {
            console.error(
                `Error creando el archivo: "${COLORS_JSON_FILENAME}":`, err);
        } else {
            console.log(
                `¡El archivo: "${COLORS_JSON_FILENAME}", se creó con éxito!`);
        }
    }
);


/**
 * JSON COLORES HEADERS
 */

/**
 * Retorna los colores para los headers de www.argentina.gob.ar
 * @returns {object}
 */
function colorNames() {
    return Object.keys(headersBackground).reduce((acc, key) => {
        const connectors = {
            switchLastConnector: {'i': "a", "o": "a"}, 
            defaultLastConnector: "a"
        };
        acc[key] = headersBackground[key].map((color) => {
            const colorRefactor = color.replace("bg-", "");
            const colorName = (colorRefactor.startsWith("mix-")
                ? "Mix " + _color.colorName(
                    colorRefactor.replace(/^mix-/, "").split("-"),
                    connectors
                )
                : _color.colorName(colorRefactor, connectors));

                return [color, colorName];
        });

        return acc;
    }, {});
}


const HEADER_COLORS_JSON_PATH = `./dist/jsons/`;
const HEADER_COLORS_JSON_FILENAME = "poncho-headers-colors.json";

fs.writeFile(
    HEADER_COLORS_JSON_PATH + HEADER_COLORS_JSON_FILENAME,
    JSON.stringify(colorNames()), function(err){
        if (err) {
            console.error(
                `Error creando el archivo: "${HEADER_COLORS_JSON_FILENAME}":`, err);
        } else {
            console.log(
                `¡El archivo: "${HEADER_COLORS_JSON_FILENAME}", se creó con éxito!`);
        }
    }
);