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

        function trim(value){
            const regex = /(^\s*|\s*$)/gm;
            return value.replace(regex, "");
        }

        function getHeader(value){
            const regexHeader = /(?<header>^#{2,6})/;
            const headers = regexHeader.exec(value);
            const headerVal = (headers ? headers.groups.header.length : false);
            return headerVal;
        }

        function setTitleTag(headerVal){
            return (headerVal ? `h${headerVal}` : 'p');
        }

        return [{
            type: "lang",
            filter: function(text, converter, options) {

                const regex = /\[\[alerta-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([\w-\s]*?)\}-\{(warning|danger|info|success)\}\]\]/;

                var mainRegex = new RegExp(regex, "gm");

                const convertedMarkdown = text.replace(mainRegex, function(e){
                    // Crear expresión regular principal
                    const mainRegex = new RegExp(regex, "gm");
                    const matchData = mainRegex.exec(e);
                
                    if (matchData) {
                        // Extraer datos de los grupos de la regex
                        let [, title, content, icon, color] = matchData;
                
                        // Limpieza y formato del ícono
                        icon = icon.trim().replace(/fa\s/, ""); // Remover prefijo "fa"
                        let htmlIcon = "";
                
                        if (icon) {
                            const hasFaPrefix = /fa\-/g.test(icon);
                            const formattedIcon = hasFaPrefix
                                ? `fa ${icon} fa-fw fa-3x`
                                : `${icon} fa-3x`;
                
                            htmlIcon = `<div class="media-left">
                                <i class="${formattedIcon}"></i>
                                </div>`;
                        }
                
                        const headerValue = getHeader(title); // Determinar encabezado
                        // Limpieza y formato del título
                        title = title.trim().replace(/^(#*)/, ""); // Remover caracteres numeral
                        const titleTag = setTitleTag(headerValue);
                
                        const formattedTitle = title
                            ? `<${titleTag} class="h5">
                                ${converter.makeHtml(title).replace(/<\/?p>/g, "")}
                            </${titleTag}>`
                            : "";
                
                        // Formatear el contenido
                        const formattedContent = converter.makeHtml(content.trim());
                
                        // Generar el HTML final
                        const alertHtml = `<div class="alert alert-${color}">
                                <div class="media">
                                    ${htmlIcon}
                                    <div class="media-body">
                                        ${formattedTitle}
                                        ${formattedContent}
                                    </div>
                                </div>
                            </div>`;
                
                        return alertHtml;
                    }

                    return ""; // Retornar cadena vacía si no hay coincidencias
                });

                return convertedMarkdown;
            }
        }];
    });

} // end if