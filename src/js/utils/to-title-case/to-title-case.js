/**
 * MIT License
 *
 * Copyright (c) 2026
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
 * Convierte una cadena de texto a formato title case.
 *
 * Cuando `allWords` es `true` (comportamiento por defecto), cada
 * palabra de la cadena comienza con mayúscula y el resto de sus
 * letras se convierten a minúsculas. Cuando `allWords` es `false`,
 * solo la primera letra de toda la cadena se capitaliza y el resto
 * se convierte a minúsculas, equivalente a sentence case.
 *
 * La función ignora espacios al inicio y al final de la cadena
 * mediante `trim()` antes de procesar el texto.
 *
 * @param {string} str - Cadena a transformar.
 * @param {boolean} [allWords=true] - Si es `true`, aplica title
 *   case a todas las palabras. Si es `false`, solo capitaliza la
 *   primera letra de la cadena (sentence case).
 * @returns {string} Cadena transformada. Retorna el argumento
 *   original sin modificar si no es un string válido o está vacío.
 *
 * @example
 * toTitleCase("hola mundo cruel");
 * // → "Hola Mundo Cruel"
 *
 * @example
 * toTitleCase("hola mundo cruel", false);
 * // → "Hola mundo cruel"
 *
 * @example <caption>Cadena con espacios al inicio/fin</caption>
 * toTitleCase("  hola mundo  ");
 * // → "Hola Mundo"
 *
 * @example <caption>Valor no válido</caption>
 * toTitleCase(null);
 * // → null  (con advertencia en consola)
 */
const toTitleCase = (str, allWords = true) => {
    if (typeof str !== "string" || str.trim().length === 0) {
        console.warn(
            "[toTitleCase] Debe ingresar una cadena de texto."
        );
        return str;
    }

    const trimmed = str.trim();

    if (!allWords) {
        return (
            trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase()
        );
    }

    return trimmed.replace(
        /\S+/g,
        word => word[0].toUpperCase() + word.slice(1).toLowerCase()
    );
};


if (typeof exports !== "undefined") {
    module.exports = { toTitleCase };
}
