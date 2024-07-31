const fs = require('fs');
const {Color} = require('./js/color/src/js/color');
const {illustrationColors} = require('./js/color/src/js/color-variations');
const {
    ponchoColorDefinitionsList
} = require('./js/color/src/js/color-definitions');

const _color = new Color(ponchoColorDefinitionsList);
const dataList = _color.ponchoColorVariables(ponchoColorDefinitionsList);


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

$colores: ${contentList.join(",\n")};`;

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
    return _color.ponchoColorDefinitions(color);
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