/**
 * Slugify
 * 
 * @requires charMap
 * 
 * @license MIT
 *
 * Copyright (c) 2026
 * Dirección Nacional de Servicios Digitales,
 * Subsecretaría de Tecnologías de la Información
 * y las Comunicaciones.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const slugifyMap = new Map([
    ...Array.from(charMap.entries()),
    ['·', '-'], ['/', '-'], ['_', '-'], [',', '-'], [':', '-'], [';', '-']
]);


/**
 * Convierte una cadena de texto a formato slug.
 *
 * Transforma el texto a minúsculas, reemplaza espacios y caracteres
 * especiales por guiones, elimina caracteres no alfanuméricos y
 * colapsa los guiones consecutivos.
 *
 * @param {string} str Cadena de texto a convertir.
 * @returns {string} Cadena en formato slug.
 *   Retorna el argumento original si no es un string válido.
 * @example
 * slugify("El murciélago remolón parece un niño");
 * // → "el-murcielago-remolon-parece-un-nino"
 * @example
 * slugify("Arroz & Porotos: una receta sencilla");
 * // → "arroz-and-porotos-una-receta-sencilla"
 */

const slugify = (str) => {
    if (typeof str !== "string" || str.trim().length === 0) {
        console.warn("slugify: Debe pasar una cadena de texto.");
        return str;
    }

    return str.toLowerCase()
        .replace(/\s+/g, "-")
        .replace(
            /[^\u0000-\u007F]/g,
            char => slugifyMap.get(char) || char
        )
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
};

if (typeof exports !== "undefined") {
    module.exports = { slugify, charMap };
}