/**
 * copyToClipboard
 * 
 * Copia el contenido de texto de un elemento HTML al portapapeles usando la API `Clipboard`.
 * 
 * MIT License
 *
 * Copyright (c) 2023 Argentina.gob.ar
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
 * COPY TO CLIPBOARD
 *
 * @summary Copia el contenido de texto de un elemento HTML al
 * portapapeles del sistema usando la API Clipboard.
 *
 * @description Acepta un selector CSS o directamente un elemento
 * HTMLElement. Si el selector no coincide con ningún elemento o
 * el elemento no es válido, la función retorna sin efecto. Al
 * copiar con éxito, ejecuta el callback opcional pasando el
 * elemento como argumento.
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 *
 * @param {string|HTMLElement} selector Selector CSS (ej: ".clase",
 *     "#id") o referencia directa a un elemento HTMLElement cuyo
 *     texto se desea copiar.
 * @param {function} [callback] Función opcional que se ejecuta
 *     tras copiar el texto con éxito. Recibe el elemento copiado
 *     como primer argumento.
 * @returns {void}
 *
 * @example
 * // Copiar el contenido de un elemento por selector
 * copyToClipboard("#mi-elemento");
 *
 * @example
 * // Copiar con callback de confirmación
 * copyToClipboard(".codigo", (el) => {
 *     el.classList.add("copiado");
 * });
 *
 * @example
 * // Pasar directamente un elemento HTMLElement
 * const el = document.querySelector(".resultado");
 * copyToClipboard(el, () => alert("¡Copiado!"));
 */
function copyToClipboard(selector, callback) {
    const element = (typeof selector === "string" ?
            document.querySelector(selector) : selector);

    if (!element || !(element instanceof HTMLElement)) {
        return;
    }

    const copyText = element;
    if (!copyText) {
        console.error(
            "[copyToClipboard] No se puede encontrar el elemento."
        );
        return;
    }
    const str = copyText.textContent;
    navigator.clipboard.writeText(str)
        .then(function () {
            if (typeof callback === "function") {
                callback(copyText);
            }
        }, function () {
            console.error(
                "[copyToClipboard] No se puede copiar el texto."
            );
        });
}
