/**
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
/**
 * Remueve acentos y caracteres especiales.
 *
 * Reemplaza caracteres Unicode fuera del rango ASCII básico por sus
 * equivalentes sin tilde o acento usando un mapa de caracteres
 * predefinido. Los caracteres que no figuran en el mapa se conservan
 * sin modificar.
 *
 * @param {string} data Cadena de texto a limpiar.
 * @returns {string} Cadena sin acentos ni caracteres especiales.
 *   Retorna una cadena vacía si el argumento no es un string válido.
 * @example
 * replaceSpecialChars("Acción Murciélago árbol niño");
 * // → "Accion Murcielago arbol nino"
 */
const replaceSpecialChars = (data) => {
    if (typeof data !== "string" || data.trim().length === 0) {
        console.warn(
            "replaceSpecialChars: Debe pasar una cadena de texto."
        );
        return "";
    }

    return data.replace(
        /[^\u0000-\u007F]/g,
        char => charMap.get(char) || char
    );
};



if (typeof exports !== "undefined") {
    module.exports = { replaceSpecialChars };
}