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
    showdown.extension("video", () => {
        "use strict";
        return [
            {
                type: "lang",
                filter: function(text, converter, options) {
                    // Grupo 0: match completo
                    // Grupo 1: brand (youtube o vimeo)
                    // Grupo 2: videoRatio (16by9 o 4by3)
                    // Grupo 3: videoCode (caracteres alfanuméricos)
                    const mainRegex = /\[\[(youtube|vimeo)-\{(16by9|4by3)\}-\{([a-zA-Z0-9]+)\}\]\]/gmi;

                    text = text.replace(mainRegex, (
                        match,
                        brand,
                        videoRatio,
                        videoCode
                    ) => {
                        const videoContainer = document.createElement("div");
                        videoContainer.classList.add(
                            "embed-responsive",
                            `embed-responsive-${videoRatio}`
                        );

                        const videoPlayer = document.createElement("iframe");
                        videoPlayer.allowFullscreen = "";
                        videoPlayer.id = `id__${brand}__${videoCode}`;
                        videoPlayer.setAttribute("data-gtm-yt-inspected-1807370_332", "true");
                        videoPlayer.setAttribute("data-gtm-yt-inspected-1807370_380", "true");
                        videoPlayer.setAttribute("data-gtm-yt-inspected-1807370_518", "true");
                        videoPlayer.setAttribute("data-gtm-yt-inspected-1807370_611", "true");
                        videoPlayer.setAttribute("data-gtm-yt-inspected-1807370_618", "true");

                        if(brand === "vimeo"){
                            videoPlayer.src = `https://player.vimeo.com/video/${videoCode}`;
                            videoPlayer.width = "";
                            videoPlayer.height = "";
                            videoPlayer.frameborder = "0";
                            videoPlayer.setAttribute("webkitallowfullscreen", "");
                            videoPlayer.setAttribute("mozallowfullscreen", "");
                        } else if(brand === "youtube"){
                            const originEncoded = encodeURIComponent('https://www.argentina.gob.ar');
                            videoPlayer.src = `https://www.youtube.com/embed/${videoCode}?enablejsapi=1&origin=${originEncoded}`;
                        } else {
                            return match; 
                        }

                        videoContainer.appendChild(videoPlayer);
                        return videoContainer.outerHTML;
                    });

                    return text;
                }
            }
        ];
    });
}