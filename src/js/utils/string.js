/**
 * Remueve acentos y caracteres especiales.
 * 
 * @param {string} data Cadena de texto a limpiar. 
 * @example
 * // returns Accion Murcielago arbol nino
 * removeAccents("Acción Murciélago árbol niño")
 * @returns {string} Cadena de texto sin acentos.
 */
const charMap = new Map([
    ['à', 'a'], ['á', 'a'], ['â', 'a'], ['ä', 'a'], ['æ', 'a'], ['ã', 'a'],
    ['å', 'a'], ['ā', 'a'], ['ă', 'a'], ['ą', 'a'],
    ['ç', 'c'], ['ć', 'c'], ['č', 'c'],
    ['đ', 'd'], ['ď', 'd'],
    ['è', 'e'], ['é', 'e'], ['ê', 'e'], ['ë', 'e'], ['ē', 'e'], ['ė', 'e'],
    ['ę', 'e'], ['ě', 'e'],
    ['ğ', 'g'], ['ǵ', 'g'],
    ['ḧ', 'h'],
    ['î', 'i'], ['ï', 'i'], ['í', 'i'], ['ī', 'i'], ['į', 'i'], ['ì', 'i'],
    ['ı', 'i'], ['İ', 'I'],
    ['ł', 'l'],
    ['ḿ', 'm'],
    ['ñ', 'n'], ['ń', 'n'], ['ǹ', 'n'], ['ň', 'n'],
    ['ô', 'o'], ['ö', 'o'], ['ò', 'o'], ['ó', 'o'], ['œ', 'o'], ['ø', 'o'],
    ['ō', 'o'], ['õ', 'o'], ['ő', 'o'],
    ['ṕ', 'p'],
    ['ŕ', 'r'], ['ř', 'r'],
    ['ß', 's'], ['ś', 's'], ['š', 's'], ['ş', 's'], ['ș', 's'],
    ['ť', 't'], ['ț', 't'],
    ['û', 'u'], ['ü', 'u'], ['ù', 'u'], ['ú', 'u'], ['ū', 'u'], ['ǘ', 'u'],
    ['ů', 'u'], ['ű', 'u'], ['ų', 'u'],
    ['ẃ', 'w'],
    ['ẍ', 'x'],
    ['ÿ', 'y'], ['ý', 'y'],
    ['ž', 'z'], ['ź', 'z'], ['ż', 'z'],
    ['À', 'A'], ['Á', 'A'], ['Â', 'A'], ['Ä', 'A'], ['Æ', 'A'], ['Ã', 'A'],
    ['Å', 'A'], ['Ā', 'A'], ['Ă', 'A'], ['Ą', 'A'],
    ['Ç', 'C'], ['Ć', 'C'], ['Č', 'C'],
    ['Đ', 'D'], ['Ď', 'D'],
    ['È', 'E'], ['É', 'E'], ['Ê', 'E'], ['Ë', 'E'], ['Ē', 'E'], ['Ė', 'E'],
    ['Ę', 'E'], ['Ě', 'E'],
    ['Ğ', 'G'], ['Ǵ', 'G'],
    ['Ḧ', 'H'],
    ['Î', 'I'], ['Ï', 'I'], ['Í', 'I'], ['Ī', 'I'], ['Į', 'I'], ['Ì', 'I'],
    ['Ł', 'L'],
    ['Ḿ', 'M'],
    ['Ñ', 'N'], ['Ń', 'N'], ['Ǹ', 'N'], ['Ň', 'N'],
    ['Ô', 'O'], ['Ö', 'O'], ['Ò', 'O'], ['Ó', 'O'], ['Œ', 'O'], ['Ø', 'O'],
    ['Ō', 'O'], ['Õ', 'O'], ['Ő', 'O'],
    ['Ṕ', 'P'],
    ['Ŕ', 'R'], ['Ř', 'R'],
    ['Ś', 'S'], ['Š', 'S'], ['Ş', 'S'], ['Ș', 'S'],
    ['Ť', 'T'], ['Ț', 'T'],
    ['Û', 'U'], ['Ü', 'U'], ['Ù', 'U'], ['Ú', 'U'], ['Ū', 'U'], ['Ǘ', 'U'],
    ['Ů', 'U'], ['Ű', 'U'], ['Ų', 'U'],
    ['Ẃ', 'W'],
    ['Ẍ', 'X'],
    ['Ÿ', 'Y'], ['Ý', 'Y'],
    ['Ž', 'Z'], ['Ź', 'Z'], ['Ż', 'Z']
]);

const replaceSpecialChars = (data) => {
    if (typeof data !== "string" || data.trim().length === 0) {
        console.warn("replaceSpecialChars: Debe pasar una cadena de texto.");
        return "";
    }

    return data.replace(/[^\u0000-\u007F]/g, char => charMap.get(char) || char);
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
const slugifyMap = new Map([
    ...Array.from(charMap.entries()),
    ['·', '-'], ['/', '-'], ['_', '-'], [',', '-'], [':', '-'], [';', '-']
]);

const slugify = (str) => {
    if (typeof str !== "string" || str.trim().length === 0) {
        console.warn("slugify: Debe pasar una cadena de texto.");
        return str;
    }

    return str.toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\u0000-\u007F]/g, char => slugifyMap.get(char) || char)
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
};


/**
 * Palabras en title-case.
 * @param {string} str Cadena a transformar
 * @param {boolean} allWords True title-case a todas las palabras
 * @returns {string}
 */
const toTitleCase = (str, allWords = true) => {
    if (typeof str !== "string" || str.trim().length === 0) {
        console.warn("[toTitleCase] Debe ingresar una cadena de texto.");
        return str;
    }

    const trimmed = str.trim();

    if (!allWords) {
        return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
    }

    return trimmed.replace(/\S+/g, word =>
        word[0].toUpperCase() + word.slice(1).toLowerCase()
    );
};


if (typeof exports !== "undefined") {
    module.exports = {slugify, replaceSpecialChars, toTitleCase};
}