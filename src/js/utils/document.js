/**
 * HEAD STYLE
 * 
 * @summary Permite agregar definiciones css dentro del head.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @param {string} id Nombre único para identificar las asignaciones css
 * @param {string} styleDefinitions Definiciones CSS
 * @param {string} mediaType Definición para media query
 * @example
 * //<style id="custom-id">div {border: 2px solid red}</div>
 * headStyle("custom-id", `div { border: 2px solid red}`);
 * 
 * //<style id="custom-id" media="all and (max-width: 500px)">
 * //    div {border: 2px solid red}
 * //</div>
 * headStyle(
 *     "custom-id", 
 *     `div { border: 2px solid red}`,
 *     "all and (max-width: 500px)"
 * );
 * @returns {undefined}
 * 
 * MIT License
 * 
 * Copyright (c) 2023 Argentina.gob.ar
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rightsto use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const headStyle = (id, styleDefinitions, mediaType) => {
    if (typeof id !== "string" || id.trim() === "") {
        console.warn("No se ha provisto un _id_ válido. Se usará: "
            + "'argob-custom-css'.");
        id = "argob-custom-css";
    }

    if (typeof styleDefinitions !== "string" || styleDefinitions.trim() == ""){
        console.warn("No se ha provisto definición de estilos. "
            + "Se pasa por alto la petición.");
        return;
    }

    const styleExists = document.getElementById(id);
    if (styleExists !== null) {
        if (styleExists.textContent.trim() === styleDefinitions.trim()) {
            console.warn("[addHeadStyle] Una definición de estilos "
                + "con las mismas definiciones ya existe.");
            return;
            
        } else {
            styleExists.remove();
            console.warn("[addHeadStyle] Un estilo con el mismo _id_ "
                + "existe, pero tiene definiciones distintas. Se pisa.");
        }
    }

    document.querySelectorAll("head").forEach(h => {
        const tag = document.createElement("style");
        tag.setAttribute("rel", "stylesheet");
        tag.id = id;
        if(typeof mediaType === "string" && mediaType.trim() !== ""){
            tag.setAttribute("media", mediaType);
        }

        tag.textContent = styleDefinitions;

        h.appendChild(tag);
    });
};


/**
 * Copia texto en el portapapeles (clipboard)
 * 
 * @param {string} selector Selector html, ej: .class o #id
 * @param {function} callback Función de retorno.
 * @returns {void}
 */
function copyToClipboard(selector, callback) {
    const element = (typeof selector === 'string' ? 
            document.querySelector(selector) : selector);

    if (!element || !(element instanceof HTMLElement)) {
        return; 
    }

    const copyText = element;
    if(!copyText){
        console.error("[copyToClipboard] No se puede encontrar el elemento.");
        return;
    }
    const str = copyText.textContent;
    navigator.clipboard.writeText(str)
        .then(function(){
            if(typeof callback === "function"){
                callback(copyText);
            }
        }, function(){
            console.error("[copyToClipboard] No se puede copiar el texto.");
        });
}