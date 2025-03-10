/**
 * 
 * Información colapsable
 * 
 * @summary
 * Permite expandir o contraer información.
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
     * Crea la etiqueta details con un summary.
     *
     * @regexp https://regex101.com/r/ojH22w/2/
     */
    showdown.extension("details", function() {
        "use strict";
        return [{
            type: "lang",
            filter: function(text, converter, options) {
            const regex = /^\[\[details(-open|-close)?\s?\{\[([\s\S]*?)\]\[([\s\S]*?)\]\}\]\]$/mg;
            const main_regex = new RegExp(regex, "gmi");

            text = text.replace(main_regex, function(e){
                const main_regex = new RegExp(regex, "gmi")
                let rgx = main_regex.exec(e);
                let cols = {
                    "2": "6",
                    "3": "4",
                    "4": "3",
                    "1": "12"
                };
                let open = (rgx[1] == "-open")? "true" : false;

                let details = document.createElement("details");
                details.name = "foo"
                if(open){
                details.setAttribute("open", "true");
                }
                // Summary o título
                let summary = document.createElement("summary");
                summary.innerHTML = cleanner(
                    converter.makeHtml(rgx[2]),
                    [
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6",
                        "strong",
                        "em",
                        "i"
                    ]
                );
                // Contenido
                let div = document.createElement("div");
                div.innerHTML = converter.makeHtml(rgx[3]);
                details.appendChild(summary);
                details.appendChild(div);

                let html = details.outerHTML;
                return html;
            });

            return text;

            }
        }];
    });
}