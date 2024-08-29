/**
 * Remueve acentos y caracteres especiales.
 * 
 * @param {string} data Cadena de texto a limpiar. 
 * @example
 * // returns Accion murcielago arbol nino
 * removeAccents("Acción Murciélago árbol niño")
 * @returns {string} Cadena de texto sin acentos.
 */
const replaceSpecialChars = (data) => {
    if(!data){
        return "";
    }
    const search = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
    + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
    const replace = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
    + "rrsssssttuuuuuuuuuwxyyzzz";
    const a = search + search.toUpperCase();
    const b = replace + replace.toUpperCase();
    const p = new RegExp(a.split("").join("|"), "g");  
    return data.toString().replace(p, c => b.charAt(a.indexOf(c)))
};


/**
 * Slugify
 * 
 * @param {string} string Cadena de texto a convertir.
 * @example
 * // returns el-murcielago-remolon-parece-un-nino
 * slugify("El murciélago remolón parece un niño")
 * @returns {string} Cadena de texto en formato slug.
 */
const slugify = (string) =>{
    if(!string){
        return string;
    }
    const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
                + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
                + "rrsssssttuuuuuuuuuwxyyzzz------";
    const p = new RegExp(a.split("").join("|"), "g");

    return string.toString().toLowerCase()
        .replace(/\s+/g, "-")
        .replace(p, c => b.charAt(a.indexOf(c)))
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};


/**
 * Palabras en title-case.
 * @param {string} str Cadena a transformar
 * @param {boolean} allWords True title-case a todas las palabras
 * @returns {string}
 */
const toTitleCase = (str, allWords=true) => {
    if (typeof str !== "string" || !str || !str.trim()) {
        console.warn("Debe ingresar una cadena de texto.");
        return str;
    }
    const titleCase = w => w[0].toUpperCase() + w.substring(1).toLowerCase();
    str = str.replace(/(^\s+|\s+$)/g, "");
    
    if(!allWords){
        return titleCase(str);
    }
    const words = str.split(/\s+/);
    return words.map(w => titleCase(w)).join(" ");
}


if (typeof exports !== "undefined") {
    module.exports = {slugify, replaceSpecialChars, toTitleCase};
}