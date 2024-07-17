const fs = require('fs');
const {ponchoColorDefinitionsList, illustrationColors} = require('./js/utils/color');

const SCSS_FILENAME = "_poncho-colors.scss.back";

const header = `//== Colors
//## Colores poncho\n`;
// variable de color sass
const filePath = `./src/scss/modules/${SCSS_FILENAME}`;
const content = ponchoColorDefinitionsList.map(m => {
    const description = (m.description ? `// ${m.description}` : "")
    const scope = (m.scope ? `${m.scope}-` : "");
    return `$${scope}${m.code}: ${m.color} !default; ${description}\n`;
}).join("");

// Listado de colores para :root
const totalColors = ponchoColorDefinitionsList.length;
const list = ponchoColorDefinitionsList.map((m, k) => {
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
const illustrationColorsContent = ponchoColorDefinitionsList
    .filter(f => illustrationColors.includes(f.code));

fs.writeFile(
    illustrationColorsFilePath,
    JSON.stringify(illustrationColorsContent), (err) => {
        if (err) {
            console.error(`Error creating file "colores.json":`, err);
        } else {
            console.log('File created successfully!');
        }
});