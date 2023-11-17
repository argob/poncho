/**
 * TRANSLATE
 * 
 * @summary Traductor de cadenas de texto
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * 
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
class TranslateHTML {
    ATTRIBUTES = [
        "title", "placeholder", "alt", "value", "href", "src", "html.lang"
    ];

    /**
     * @param {object} dictionary Objeto con diccionario de terminos 
     * a traducir.
     * @param {object} attributes Objeto con diccionario de terminos 
     * a traducir.
     */
    constructor(dictionary = [], attributes = []) {
        this.dictionary = this.sortByLength(dictionary);
        this.attributes = (attributes.length ? attributes : this.ATTRIBUTES);
    }


    /**
     * Ordena los términos
     * 
     * @summary Ordena el diccionario de mayor a menor según el total de 
     * caracteres de cada término.
     * @param {object} obj Listado a ordenar
     * @returns {object} Listado ordenado
     */
    sortByLength = obj => {
        obj.sort((a, b) => {
            if (a[0].length > b[0].length) {
                return -1;
            } else if (a[0].length < b[0].length) {
                return 1;
            } else {
                return a[0] - b[0];
            }
        });
        return obj;
    };


    /**
     * Traduce atributos html
     * 
     * @param {object} dictionary Objeto con texto a buscar y reemplazo.
     * @summary Traduce el listado parado en el constructor o admite 
     * un listado por parámetros. 
     * @example 
     * const list = [
     *     ["traducir", "translate"]
     * ] 
     * (new TranslateHTML).translateAttributes(list)
     */
    translateAttributes = (dictionary=false) => {
        const dict = (dictionary ? dictionary : this.dictionary);
        this.attributes.forEach((item) => {

            const attrDef = item.split(".").slice(-2);
            const tag = (attrDef.length === 2 ? attrDef[0] : "");
            const attr = (attrDef.length === 2 ? attrDef[1] : attrDef[0]);

            dict.forEach(translate => {
                
                console.log(`${tag}[${attr}='${translate[0]}']`, translate[1])
                
                document
                    .querySelectorAll(`${tag}[${attr}='${translate[0]}']`)
                    .forEach(t => (t[attr] = translate[1]));
            });
        });
    };


    /**
     * Traduce una cadena de texto dentro de cualquier etiqueta HTML.
     * 
     * @param {string} search Cadena de texto a buscar
     * @param {string} replacement Cadena de texto con la traducción
     * @example
     * (new TranslateHTML).translateHTML("traducir", "translate")
     */
    translateHTML = (search, replacement) => {
        var xpathResult = document.evaluate(
            "//*/text()",
            document,
            null,
            XPathResult.ORDERED_NODE_ITERATOR_TYPE,
            null
        );
        var results = [];
        var res;
        while ((res = xpathResult.iterateNext())) {
            results.push(res);
        }
        results.forEach((res) => {
            var newTextContent = res.textContent.replace(search, replacement);
            if (newTextContent !== res.textContent) {
                var newNode = document.createTextNode(newTextContent);
                res.parentNode.replaceChild(newNode, res);
            }
        });
    };


    /**
     * Traduce el diccionario de términos
     */
    translate = () => {
        this.dictionary.forEach((t) => {
            const re = new RegExp(t[0], "g");
            this.translateHTML(re, t[1]);
        });
    };
}

