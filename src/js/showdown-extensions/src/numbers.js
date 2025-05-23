/**
 * 
 * Datos estadísticos con números
 * 
 * @summary
 * Se utiliza para representar cifras de manera infográfica.
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
     * Números
     *
     * @see https://www.argentina.gob.ar/contenidosdigitales/markdown/numeros
     * @regexp https://regex101.com/r/mrmNik/1
     */
    showdown.extension("numbers", function() {
        "use strict";
        return [{
            type: "lang",
            filter: function(text, converter, options) {
                const regex = /((?:\[\[)?col([2-4])(?:-\{|<<))[\s\S]\[\[numeros-\{([^\{\}-]*?)-([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}\]\][\s\S](>>|\}-\]\])/;
                const main_regex = new RegExp(regex, "gmi");

                text = text.replace(main_regex, function(e){

                const main_regex = new RegExp(regex, "gmi");
                var rgx = main_regex.exec(e);
                var cols = {
                    "2": "6",
                    "3": "4",
                    "4": "3",
                    "1": "12"
                };

                var html = `<div class="col-xs-12 col-sm-${cols[rgx[2]]} col-md-${cols[rgx[2]]}">
                        <p class="h2 ${rgx[7]}">${rgx[3]} 
                            <small>${rgx[4]}</small>
                        </p>
                        <p class="lead">${rgx[5]}</p>
                        <p class="text-muted">${rgx[6]}</p>
                    </div>`;
                    return html;
                });

                return text;
            }
        }];
    });
}