/**
 * 
 * Imagen
 * 
 * @summary
 * Permite agregar una imagen con asignación clases css.
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
     * Imágenes con estilo bootstrap
     *
     * @regexp https://regex101.com/r/8D0cF8/1
     * @see https://www.argentina.gob.ar/contenidosdigitales/markdown/imagenes
     * @todo Definir si los estilos deben estar restringidos. Y si asi 
     * fuera ¿cuales serian esos estilos?
     */
    showdown.extension("images", function() {
        "use strict";
        return [{
            type: "lang",
            filter: function(text, converter, options) {
                const regex = /\!\[([^\[\]]{0,255})\]\(([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ\s]{1,255})\)\{([\w\.-]+)\}/;
                const mainRegex = new RegExp(regex, "gm");
                text = text.replace(mainRegex, (
                    match,
                    alt,
                    src,
                    css
                ) => {
                    const classList = css.replace(/[\s\.]+/g, ' ')
                        .trim()
                        .split(' ')
                        .filter(Boolean);
                    const img = new Image();
                    img.src = src;
                    img.classList.add(...classList);
                    img.alt = alt;

                    return img.outerHTML;
                });

                return text;
            }
        }];
    });

}
