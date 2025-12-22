/**
 * HTML utilities
 * 
 * @summary Validadores y herramientas para manipulación de código HTML.
 * 
 * ADVERTENCIA
 * 
 * Estas funciones JavaScript no fueron realizadas con el propósito de 
 * proporcionar seguridad contra ataques externos en aplicaciones. Para 
 * proteger aplicaciones web construidas con JavaScript, es crucial 
 * implementar medidas de seguridad adicionales como validación de datos en 
 * el lado del servidor, protección contra inyección de código (XSS) y el 
 * uso de bibliotecas y frameworks que promuevan prácticas de 
 * seguridad sólidas.
 * 
 * Si no está seguro de cómo utilizarla y los posibles riesgos que corre al 
 * exponerla en su sitio web, tome el recaudo de asesorarse con 
 * un especialista.
 * 
 * 
 * 
 * MIT License
 * 
 * Copyright (c) 2024 Argentina.gob.ar
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
 * Impide que se impriman etiquetas HTML peligrosas.
 *
 * @summary Sanitiza HTML bloqueando etiquetas peligrosas y atributos de eventos.
 * Permite opcionalmente excluir ciertas etiquetas seguras de la sanitización.
 * @param {string} str Cadena de texto a sanitizar.
 * @param {object} exclude Etiquetas seguras que deben preservarse.
 * @example
 * // returns &lt;h1&gt;Hello world!&lt;/h1&gt; <a href="#">Link</a>
 * secureHTML('<h1>Hello world!</h1> <a href="#">Link</a>', ["a"])
 *
 * @returns {string} Texto sanitizado.
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

    const secureList = [
        "div", "a", "strong", "li", "ul", "ol", "em", "i", "article",
        "section", "header", "h1", "h2", "h3", "h4", "h5", "h6", "p",
        "span", "nav", "footer", "main", "button"
    ]

    // Lista de etiquetas peligrosas que SIEMPRE deben bloquearse
    const dangerousTags = [
        'script', 'iframe', 'object', 'embed', 'applet',
        'meta', 'link', 'style', 'base', 'form'
    ];

    // Lista de atributos peligrosos que ejecutan JavaScript
    const dangerousAttrs = [
        'on\\w+', // onclick, onerror, onload, etc.
        'formaction',
        'action',
        'srcdoc',
        'eval'
    ];

    // Validar que no se intente excluir etiquetas peligrosas
    const hasDangerousExclusion = exclude.some(tag =>
        dangerousTags.includes(tag.toLowerCase())
    );

    if(hasDangerousExclusion){
        console.error(
            "[secureHTML]",
            "No se puede incluir etiquetas peligrosas:",
            dangerousTags.join(", ")
        );
        // Filtrar las etiquetas peligrosas del exclude
        exclude = exclude.filter(tag =>
            !dangerousTags.includes(tag.toLowerCase())
        );
    }

    if(exclude.some(e => e === "*")){
        exclude = secureList;
    }

    // Escapar todos los < y >
    let replaceString = str.toString()
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    if(exclude.length > 0){
        // Restaurar las etiquetas permitidas
        const tagPattern = exclude.map(tag => tag.toLowerCase()).join("|");
        const regexStart = new RegExp(
            "&lt;(" + tagPattern + ")(\\s[^>]*?)?&gt;", "gi");
        const regexEnd = new RegExp(
            "&lt;\/(" + tagPattern + ")&gt;", "gi");

        replaceString = replaceString
            .replace(regexStart, (_match, tag, attrs) => {
                // Si no hay atributos, retornar la etiqueta limpia
                if(!attrs){
                    return `<${tag}>`;
                }

                // Limpiar atributos peligrosos
                let cleanAttrs = attrs;
                dangerousAttrs.forEach(attr => {
                    const attrRegex = new RegExp(
                        `\\s${attr}\\s*=\\s*["'][^"']*["']`, 'gi'
                    );
                    cleanAttrs = cleanAttrs.replace(attrRegex, '');
                });

                // Validar hrefs javascript:
                cleanAttrs = cleanAttrs.replace(
                    /href\s*=\s*["']javascript:[^"']*["']/gi,
                    'href="#"'
                );

                // Validar data: URIs (pueden ejecutar JavaScript)
                cleanAttrs = cleanAttrs.replace(
                    /href\s*=\s*["']data:[^"']*["']/gi,
                    'href="#"'
                );

                return `<${tag}${cleanAttrs}>`;
            })
            .replace(regexEnd, "</$1>");
    }

    return replaceString;
};


if (typeof exports !== "undefined") {
    module.exports = {secureHTML};
}
