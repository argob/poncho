/**
 * Utilidades para el plugin showdown.
 *
 * MIT LICENSE
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

/**
 * Limpia etiquetas html de una cadena de texto
 *
 * @param  {string} text    Cadena de texto a limpiar.
 * @param  {object} exclude Array con las etiquetas que no se quieren
 *                          excluir.
 * @return {string}         Cadena de texto filtrada.
 */
function cleanner(text, exclude) {
    if (typeof exclude !== undefined && typeof exclude === "object") {
        exclude = exclude;
    } else {
        exclude = [];
    }

    var tags = [
        "html","body","div","span","applet","object","iframe","h1","h2","h3","h4",
        "h5","h6","p","blockquote","pre","a","abbr","acronym","address","big",
        "cite","code","del","dfn","em","img","ins","kbd","q","s","samp","small",
        "strike","strong","sub","sup","tt","var","b","u","i","center","dl","dt",
        "dd","ol","ul","li","fieldset","form","label","legend","table","caption",
        "tbody","tfoot","thead","tr","th","td","article","aside","canvas",
        "details","embed","figure","figcaption","footer","header","hgroup","menu",
        "nav","output","ruby","section","summary","time","mark","audio","video",
        "button"
    ];

    tags.forEach(function (tag, index) {
        if (exclude.includes(tag)) {
        tags.splice(index, 1);
        }
    });

    var regex = new RegExp("<\\/?(" + tags.join("|") + ")(?![a-z])[^>]*>", "gmi");
    return text.replace(regex, "");
}


/**
 * Retorna el listado de estilos css.
 * @param  {object}     arr objeto regExp
 * @param  {integer}    index Índice para el array donde se encuentra la
 *                      cadena con los estilos css.
 * @return {string}     Clases concatenadas o espacio
 */
var classlist = function(arr, index) {
    // Verifica que el índice esté dentro de los límites del array
    if (!Array.isArray(arr) || typeof index !== "number" || 
        index < 0 || index >= arr.length) {
        console.error("Índice inválido o la entrada no es un array.");
        return "";
    }

    // Verifica que el elemento en el índice sea una cadena
    const element = arr[index];
    if (typeof element !== "string") {
        console.error("El elemento no es una cadena de texto.");
        return "";
    }

    const classList = arr[index].split(".").filter(Boolean);
    return classList.length > 0 ? classList.join(" ") : "";
}


/**
 * Parsea un enlace markdown con la extensión de target
 * @param  {string} text Cadena de texto donde buscar el patrón.
 * @return {string}      Objeto <a> con el atributto target.
 */
const target = function(text){
    const mainRegex = new RegExp(
    /(\[(.*?)\]\(((blank):#)([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ]*)\))/,
    "gmi"
    );
    text = text.replace(mainRegex, `<a href="$5" target="_$4">$2</a>`);
    return text;
}
