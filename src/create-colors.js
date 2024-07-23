const fs = require('fs');
const {
    ponchoColorDefinitionsList,
    ponchoColorDefinitionsListLegacy, 
    ponchoColorDefinitions,
    illustrationColors} = require('./js/utils/color');

const SCSS_FILENAME = "_poncho-colors.scss.back";

const header = `//== Colors
//## Colores poncho\n`;
// variable de color sass
const filePath = `./src/scss/modules/${SCSS_FILENAME}`;
const content = ponchoColorDefinitionsListLegacy.map(m => {
    const description = (m.description ? `// ${m.description}` : "")
    const scope = (m.scope ? `${m.scope}-` : "");
    return `$${scope}${m.code}: ${m.color} !default; ${description}\n`;
}).join("");

// Listado de colores para :root
const totalColors = ponchoColorDefinitionsListLegacy.length;
const list = ponchoColorDefinitionsListLegacy.map((m, k) => {
    const separator = (k == totalColors - 1 ? ";" : ",\n")
    const scope = (m.scope ? `${m.scope}-` : "");
    return `("${m.code}", $${scope}${m.code})${separator}`;
}).join("");
contentList = `\n$colores: ${list}`;


fs.writeFile(filePath, header + content + contentList, (err) => {
    if (err) {
        console.error(`Error creating file "${SCSS_FILENAME}":`, err);
    } else {
        console.log('File created successfully!');
    }
});


/**
 * Códigos de color válidos para utilizar en ilustraciones. 
 */
const illustrationColorsFilePath = `./dist/jsons/illustrations-colors.json`;
const illustrationColorsContent = illustrationColors
    .map(color => ponchoColorDefinitions( color ));

fs.writeFile(
    illustrationColorsFilePath,
    JSON.stringify(illustrationColorsContent), (err) => {
        if (err) {
            console.error(`Error creating file "colores.json":`, err);
        } else {
            console.log('File created successfully!');
        }
});