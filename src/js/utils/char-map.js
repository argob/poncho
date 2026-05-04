/**
 * charMap
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


if (typeof exports !== "undefined") {
    module.exports = { charMap };
}
