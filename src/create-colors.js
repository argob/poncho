const fs = require('fs');
const {ponchoColorVariables, ponchoColorDefinitions, illustrationColors} = require('./js/color/src/js/color');
const {ponchoColorDefinitionsList} = require('./js/color/src/js/color-definitions');

const SCSS_FILENAME = "_poncho-colors.scss";
const dataList = ponchoColorVariables(ponchoColorDefinitionsList);

const header = `//== Colors
//## Colores poncho\n`;

// variable de color sass
const filePath = `./src/scss/modules/${SCSS_FILENAME}`;
const content = dataList.map(m => {
    const regex = /(?:(black|white)$|(^gray-?))/gm;
    let prefix = (!regex.test(m[0].trim()) ? "brand-" : "");
    return `$${prefix}${m[0]}: ${m[1]} !default;\n`;
}).join("");


// Listado de colores para :root
const totalColors = dataList.length;
const list = dataList.map((m, k) => {
    const regex = /(?:(black|white)$|(^gray-?))/gm;
    const separator = (k == totalColors - 1 ? ";" : ",\n")
    let prefix = (!regex.test(m[0]) ? "brand-" : "");
    return `("${m[0]}", $${prefix}${m[0]})${separator}`;
}).join("");

contentList = `\n$colores: ${list}`;

fs.writeFile(filePath, header + content + contentList, (err) => {
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
const illustrationColorsContent = illustrationColors.map(
    color => ponchoColorDefinitions( color , ponchoColorDefinitionsList ));

fs.writeFile(
    illustrationColorsFilePath,
    JSON.stringify(illustrationColorsContent), (err) => {
        if (err) {
            console.error(`Error creando el archivo: "illustrations-colors.json":`, err);
        } else {
            console.log('¡El archivo: "illustrations-colors.json", se creó con éxito!');
        }
});