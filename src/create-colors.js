const fs = require('fs');
const {Color} = require('./js/color/src/js/color');
const {illustrationColors} = require('./js/color/src/js/color-variations');
const {
    ponchoColorDefinitionsList
} = require('./js/color/src/js/color-definitions');

const _color = new Color(ponchoColorDefinitionsList);
const dataList = _color.ponchoColorVariables(ponchoColorDefinitionsList);


/**
 * VARIABLES SASS
 */
const SCSS_FILENAME = "_poncho-colors.scss";
const header = `//== Colors
//## Colores poncho\n`;

// variable de color sass
const filePath = `./src/scss/modules/${SCSS_FILENAME}`;
const content = dataList.map(function(m){
    const regex = /(?:(black|white)$|(^gray-?))/gm;
    let prefix = (!regex.test(m[0].trim()) ? "brand-" : "");

    return `$${prefix}${m[0]}: ${m[1]} !default;\n`;
}).join("");


/**
 * ARRAY DE COLORES
 */
const totalColors = dataList.length;
const list = dataList.map(function(m, k){
    const regex = /(?:(black|white)$|(^gray-?))/gm;
    const separator = (k == totalColors - 1 ? ";" : ",\n");
    let prefix = (!regex.test(m[0]) ? "brand-" : "");

    return `("${m[0]}", $${prefix}${m[0]})${separator}`;
}).join("");

contentList = `\n$colores: ${list}`;

fs.writeFile(filePath, header + content + contentList, function(err){
    if (err) {
        console.error(`Error creando el archivo: "${SCSS_FILENAME}":`, err);
    } else {
        console.log(`¡El archivo: "${SCSS_FILENAME}", se creó con éxito!`);
    }
});


/**
 * Códigos de color válidos para utilizar en ilustraciones. 
 */
const illustrationColorsFilePath = `./dist/jsons/illustrations-colors.json`;
const illustrationColorsContent = illustrationColors.map(function(color){
    return _color.ponchoColorDefinitions(color);
});

fs.writeFile(
    illustrationColorsFilePath,
    JSON.stringify(illustrationColorsContent), function(err){
        if (err) {
            console.error(`Error creando el archivo: "illustrations-colors.json":`, err);
        } else {
            console.log('¡El archivo: "illustrations-colors.json", se creó con éxito!');
        }
    }
);