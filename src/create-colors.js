const fs = require('fs');
const {ponchoColorDefinitionsList} = require('./js/utils/color');

const SCSS_FILENAME = "_poncho-colors.scss";

const header = `//== Colors
//## Colores poncho\n`;
// variable de color sass
const filePath = `./scss/modules/${SCSS_FILENAME}`;
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