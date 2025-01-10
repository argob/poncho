/**
 * 
 * Video
 * 
 * @summary
 * Permite embeber un video de YouTube o Vimeo.
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
     * Videos YouTube o Vimeo
     *
     * @see https://www.argentina.gob.ar/contenidosdigitales/markdown/video
     * @regexp https://regex101.com/r/99J0oH/3/
     */
    showdown.extension("video", function() {
        "use strict";
        return [
        {
            type: "lang",
            filter: function(text, converter, options) {
            const regex = /\[\[(youtube|vimeo)-\{(16by9|4by3)\}-\{([a-zA-Z0-9]+)\}\]\]/;

            var main_regex = new RegExp(regex,"gm");
            text = text.replace(main_regex, function(e){

            var main_regex = new RegExp(regex,"gm");

            var rgx_data = main_regex.exec(e);
            if(rgx_data){
                var video_ratio = rgx_data[2];
                var video_code  = rgx_data[3];
                var video_html  = "";
                if(rgx_data[1] == "vimeo"){
                        video_html = `<div 
                            class="embed-responsive embed-responsive-${video_ratio}">
                        <iframe
                            width=""
                            height=""
                            src="https://player.vimeo.com/video/${video_code}"
                            frameborder="0"
                            webkitallowfullscreen=""
                            mozallowfullscreen=""
                            allowfullscreen=""
                            data-gtm-yt-inspected-1807370_332="true" 
                            data-gtm-yt-inspected-1807370_380="true" 
                            data-gtm-yt-inspected-1807370_518="true" 
                            data-gtm-yt-inspected-1807370_611="true" 
                            data-gtm-yt-inspected-1807370_618="true">
                        </iframe>
                        </div>`;
                    } else if(rgx_data[1] == "youtube"){
                        video_html = `<div 
                            class="embed-responsive embed-responsive-${video_ratio}">
                        <iframe
                            src="https://www.youtube.com/embed/${video_code}?enablejsapi=1&amp;origin=https%3A%2F%2Fwww.argentina.gob.ar" 
                            allowfullscreen="" 
                            data-gtm-yt-inspected-1807370_332="true" 
                            id="957974559" 
                            data-gtm-yt-inspected-1807370_380="true" 
                            data-gtm-yt-inspected-1807370_518="true" 
                            data-gtm-yt-inspected-1807370_611="true" 
                            data-gtm-yt-inspected-1807370_618="true">
                        </iframe>
                        </div>`;
                    }
                }
                return video_html;

            });
            return text;
            }
        }
        ]
    });

}