/**
 * Impide que se impriman etiquetas HTML.
 * 
 * @summary Impide que se impriman etiquetas HTML exceptuando aquellas
 * asignadas en el parámetro exclude.
 * @param {string} str Cadena de texto a remplazar.
 * @param {object} exclude Etiquetas que deben preservarse.
 * @example
 * // returns &lt;h1&gt;Hello world!&lt;/h1&gt; <a href="#">Link</a>
 * secureHTML('<h1>Hello world!</h1> <a href="#">Link</a>', ["a"])
 * 
 * @returns {string} Texto remplazado.
 */
const secureHTML = (str, exclude=[]) => {
    if(typeof str !== "string" || str.trim().length === 0){
        console.error("secureHTML:", "Solo admite cadenas de texto.");
        return str;
    }

    if(!Array.isArray(exclude)){
        console.error(
            "secureHTML:", "El segundo argumento debe ser un Array.");
        return;
    }

    if(exclude.some(e => e === "*")){
        return str;
    }

    let replaceString = str.toString()
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    if(exclude.length > 0){
        const regexStart = new RegExp(
            "&lt;(" + exclude.join("|") + ")(.*?)&gt;", "g");
        const regexEnd = new RegExp(
            "&lt;\/(" + exclude.join("|") + ")(.*?)&gt;", "g");

        return replaceString
            .replace(regexStart, "<$1$2>")
            .replace(regexEnd, "</$1>");
    }
    return replaceString;
};



if (typeof exports !== "undefined") {
    module.exports = {secureHTML};
}
