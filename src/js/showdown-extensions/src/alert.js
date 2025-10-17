/**
 * 
 * Alertas
 * 
 * @summary
 * Las alertas permiten destacar contenidos para jerarquizar o 
 * sintetizar la información.
 * 
 * 
 * DESCRIPCION GENERAL DE LAS EXTENSIONES
 * 
 * Estas extensiones se crearon para suplir las creadas en el plugin PHP
 * para el CMS Drupal utilizado en www.argentina.gob.ar; cuando se
 * utiliza javascript para parsear markdown con showdown.
 *
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, january 2021
 * @see https://www.argentina.gob.ar/contenidosdigitales/markdown
 * @see https://github.com/showdownjs/showdown
 * @see https://github.com/showdownjs/showdown/wiki/extensions
 *
 *
 * TEST
 * 
 * Para probar las características de estas extensiones.
 * https://codepen.io/agustinbouillet/pen/YzGYbwO
 *
 *
 * DOCUMENTACION
 * 
 * Cada extensión tiene en su documentación el enlace a <www.regex101.com>
 * donde se puede probar cada una de las expresiones regulares utilizadas.
 *
 * A su vez en el cuerpo de ese mismo software se encuentran casos de
 * uso que pueden copiar y pegar en el validador de _codepen_.
 *
 *
 * ARCHIVO
 * 
 * showdown-extensions.js
 *
 *
 * @example
 * var converter = new showdown.Converter({
 *   extensions:[
 *       "images", "alerts", "numbers", "ejes", "button", "target",
 *       "bootstrap-tables", "video"
 *   ]
 * });
 * var html = converter.makeHtml(clean_input);
 * object.innerHTML = html;
 *
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
if(showdown){ // IF showdown

    /**
     * Alertas
     *
     * @see https://www.argentina.gob.ar/contenidosdigitales/markdown/alerta
     * @regexp https://regex101.com/r/MgRi47/3/
     */
    showdown.extension("alerts", function() {
        "use strict";
        /**
         * Determines the header level (h2-h6) from a title string.
         * @param {string} value - The title string to check.
         * @returns {number|boolean} The header level (2-6) or false if no header is found.
         */
        const getHeader = (value) => {
            const regexHeader = /(?<header>^#{2,6})/;
            const headers = regexHeader.exec(value);
            return headers ? headers.groups.header.length : false;
        }

        /**
         * Maps a header level number to the corresponding HTML tag string.
         * @param {number|boolean} headerVal - The header level (2-6) or false.
         * @returns {string} The HTML tag ('h2' to 'h6' or 'p' if no header).
         */
        const setTitleTag = (headerVal) => (headerVal ? `h${headerVal}` : 'p');

        // --- Showdown Extension Definition ---

        return [{
            type: "lang",
            filter: function(text, converter, options) {
                // Regex match [[alerta-{title}-{content}-{icon}-{color}]]
                const regex = /\[\[alerta-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([\w-\s]*?)\}-\{(warning|danger|info|success)\}\]\]/;
                const mainRegex = new RegExp(regex, "gm");

                const convertedMarkdown = text.replace(mainRegex, (
                    match, // The full match string (unused)
                    title, // Group 1: The title content
                    content, // Group 2: The alert content
                    icon, // Group 3: The icon class
                    color) => { // Group 4: The alert color

                    // --- 1. Icon Processing ---

                    icon = icon.trim().replace(/fa\s/, "");
                    let mediaLeft = null;

                    if (icon) {
                        const hasFaPrefix = /fa\-/g.test(icon);

                        const formattedIconClasses = hasFaPrefix
                            ? ["fa", icon, "fa-fw", "fa-3x"]
                            : [icon, "fa-3x"];

                        mediaLeft = document.createElement("div");
                        mediaLeft.className = "media-left";

                        const htmlIcon = document.createElement("i");
                        htmlIcon.classList.add(...formattedIconClasses);

                        mediaLeft.appendChild(htmlIcon);
                    }

                    // --- 2. Title ---
                    const headerValue = getHeader(title);
                    title = title.trim().replace(/^(#*)/, "");
                    const titleTag = setTitleTag(headerValue);

                    // --- 3. HTML ---
                    const containerElement = document.createElement("div");
                    containerElement.classList.add("alert", `alert-${color}`);

                    const mediaElement = document.createElement("div");
                    mediaElement.classList.add("media");
                    
                    const mediaBodyElement = document.createElement("div");
                    mediaBodyElement.classList.add("media-body");

                    // Title element (if title exists)
                    if(title){
                        const titleElement = document.createElement(titleTag);
                        titleElement.className = "h5";
                        titleElement.innerHTML = converter.makeHtml(title).replace(/<\/?p>/g, "");
                        mediaBodyElement.appendChild(titleElement);
                    }

                    // Content element
                    const formattedContent = converter.makeHtml(content.trim());
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = formattedContent;
                    
                    while (tempDiv.firstChild) {
                        mediaBodyElement.appendChild(tempDiv.firstChild);
                    }

                    if(mediaLeft){
                        mediaElement.appendChild(mediaLeft);
                    }
                    mediaElement.appendChild(mediaBodyElement);

                    containerElement.appendChild(mediaElement);

                    return containerElement.outerHTML;
                });

                return convertedMarkdown;
            }
        }];
    });

} // end if