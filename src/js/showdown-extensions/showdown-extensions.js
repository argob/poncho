/**
 * Extensiones para el plugin showdown.
 *
 *
 * DESCRIPCION
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
 * TESTEAR
 * Para probar las características de estas extensiones.
 * https://codepen.io/agustinbouillet/pen/YzGYbwO
 *
 *
 * DOCUMENTACION
 * Cada extensión tiene en su documentación el enlace a <www.regex101.com>
 * donde se puede probar cada una de las expresiones regulares utilizadas.
 *
 * A su vez en el cuerpo de ese mismo software online están los casos de
 * uso que pueden copiar y pegar en el validador de _codepen_.
 *
 *
 * ARCHIVO
 * showdown-extensions.js
 *
 *
 * USO
 *
 * var converter = new showdown.Converter({
 *   extensions:[
 *       "images", "alerts", "numbers", "ejes", "button", "target",
 *       "bootstrap-tables", "video"
 *   ]
 * });
 * var html = converter.makeHtml(clean_input);
 * object.innerHTML = html;
 *
 */



/*------------------------------------*\
  # UTILITIES
\*------------------------------------*/

/**
 * Limpia etiquetas html de una cadena de texto
 *
 * @param  {string} text    Cadena de texto a limpiar.
 * @param  {object} exclude Array con las etiquetas que no se quieren
 *                          excluir.
 * @return {string}         Cadena de texto filtrada.
 */
function cleanner(text, exclude) {
  if (typeof exclude !== undefined && typeof exclude === "object") {
    exclude = exclude;
  } else {
    exclude = [];
  }

  var tags = [
    "html","body","div","span","applet","object","iframe","h1","h2","h3","h4",
    "h5","h6","p","blockquote","pre","a","abbr","acronym","address","big",
    "cite","code","del","dfn","em","img","ins","kbd","q","s","samp","small",
    "strike","strong","sub","sup","tt","var","b","u","i","center","dl","dt",
    "dd","ol","ul","li","fieldset","form","label","legend","table","caption",
    "tbody","tfoot","thead","tr","th","td","article","aside","canvas",
    "details","embed","figure","figcaption","footer","header","hgroup","menu",
    "nav","output","ruby","section","summary","time","mark","audio","video",
    "button"
  ];

  tags.forEach(function (tag, index) {
    if (exclude.includes(tag)) {
      tags.splice(index, 1);
    }
  });

  var regex = new RegExp("<\\/?(" + tags.join("|") + ")(?![a-z])[^>]*>", "gmi");
  return text.replace(regex, "");
}



/*------------------------------------*\
  # HELPERS
\*------------------------------------*/

/**
 * Retorna el listado de estilos css.
 * @param  {object}     obj objeto regExp
 * @param  {integer}    index Índice para el array donde se encuentra la
 *                      cadena con los estilos css.
 * @return {string}     Clases concatenadas o espacio
 */
var classlist = function(obj, index) {
  let class_list = [];
  if (obj) {
    obj[index].split(".").forEach((v) => {
      if (v) {
        class_list.push(v);
      }
    });
  }
  return class_list.length > 0 ? class_list.join(" ") : "";
}


/**
 * Parsea un enlace markdown con la extensión de target
 * @param  {string} text Cadena de texto donde buscar el patrón.
 * @return {string}      Objeto <a> con el atributto target.
 */
var target = function(text){
  var main_regex = new RegExp(
    /(\[(.*?)\]\(((blank):#)([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ]*)\))/,
    "gmi"
  );
  text = text.replace(main_regex, `<a href="$5" target="_$4">$2</a>`);
  return text;
}



/*------------------------------------*\
  # SHOWDOWN EXTENSIONS
\*------------------------------------*/
if(showdown){ // IF showdown

  /**
   * Hace un wrapper en una tabla markdown y le agrega los estilos para
   * presentar una tabla bootstrap
   * @return {string}    Objeto html <table>
   */
  showdown.extension("bootstrap-tables", function () {
    return [{
      type: "output",
      filter: function (html, converter, options) {
        var liveHtml = jQuery("<div></div>").html(html);
        jQuery("table", liveHtml).each(function(){
          var table = jQuery(this);
          table.addClass("table table-bordered")
               .wrap("<div class=\"class table-responsive\"></div>");
        });
        return liveHtml.html();
      }
    }];
  });


  /**
   * Imágenes con estilo bootstrap
   *
   * @regexp https://regex101.com/r/Jcat8s/9/
   * @todo   Definir si los estilos deben estar restringidos. Y si asi
   *         fuera ¿cuales serian esos estilos?
   */
  showdown.extension("images", function() {
    "use strict";
    return [
      {
        type: "lang",
        filter: function(text, converter, options) {
          const regex = /\!\[([^\[\]]{0,255})\]\(([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ\s]{1,255})\)\{([\w\.-]+)\}/;
          var main_regex = new RegExp(regex, "gm");
          text = text.replace(main_regex, function(e){
            var main_regex = new RegExp(regex, "gm");
            var rgx_data  = main_regex.exec(e);

            // Creo el objeto <img/>
            var img       = document.createElement("img");
            img.src       = rgx_data[2];
            img.className = classlist(rgx_data, 3);
            img.alt       = rgx_data[1];

            return img.outerHTML;
          });
          return text;
        }
      }
    ]
  });


  /**
   * Filtra un patron donde se aplica el formato para el target.
   *
   * @see https://www.argentina.gob.ar/contenidosdigitales/markdown#3
   * @regexp https://regex101.com/r/pgbDhz/7
   */
  showdown.extension("target", function() {
    "use strict";
    return [
      {
        type: "lang",
        filter: function(text, converter, options) {
          var main_regex = new RegExp(
              /(\[(.*?)\]\(((blank):#)([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ]*)\))/,
              "gmi"
          );
          text = text.replace(main_regex, target);
          return text;
        }
      }
    ]
  });


  /**
   * Converte el especificado en doc. a un botón bootstrap
   *
   * @see https://www.argentina.gob.ar/contenidosdigitales/markdown/boton
   * @regexp https://regex101.com/r/3x96CO/1
   * 
   */
  showdown.extension("button", function() {
    "use strict";
    return [
      {
        type: "lang",
        filter: function(text, converter, options) {

          const regex = /(\[([^\[\]]+)\]\((blank:#)?([a-zA-Z0-9\_\.\-\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#]+)\)\{([\w_\-.]+?)\})/gm;

          var main_regex = new RegExp(regex, "gmi");

          text = text.replace(main_regex, function(e){
            // Proceso la expresion regular para sacarle el gurpo de estilos
            // y dibujar el resulttado
            var main_regex = new RegExp(regex, "gm");
            var rgx  = main_regex.exec(e);

            var a = document.createElement("a");
            a.href = rgx[4];
            if(rgx[3]){
              a.target = "_blank";
            }
            if(rgx[5] != undefined){
              a.className = classlist(rgx, 5);
            }
            a.textContent = rgx[2];
            a.dataset.created = "true";

            return a.outerHTML;
          });

          return text;
        }
      }
    ]
  });


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


  /**
   * Alertas
   *
   * @see https://www.argentina.gob.ar/contenidosdigitales/markdown/alerta
   * @regexp https://regex101.com/r/MgRi47/3/
   */
  showdown.extension("alerts", function() {
    "use strict";
    return [
      {
        type: "lang",
        filter: function(text, converter, options) {
          const regex = /\[\[alerta-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([\w-\s]*?)\}-\{(warning|danger|info|success)\}\]\]/;

          var main_regex = new RegExp(regex, "gm");

          text = text.replace(main_regex, function(e){
            // Proceso cada una de los matcheos.
            var main_regex = new RegExp(regex, "gm");
            var rgx_data = main_regex.exec(e);

            if(rgx_data){
              var color  = rgx_data[4];
              var icon   = rgx_data[3];
              var titulo = converter.makeHtml(rgx_data[1]);
              var texto  = converter.makeHtml(rgx_data[2]);
              var html   = `<div class="alert alert-${color}">
                    <div class="media">
                      <div class="media-left">
                        <i class="fa ${icon} fa-fw fa-4x"></i>
                      </div>
                      <div class="media-body">
                        <h5></h5>
                        <h5>${titulo}</h5>
                        <p class="margin-0"></p>
                        <p>${texto}</p>
                        <p></p>
                      </div>
                    </div>
                  </div>`;
            }
            return html;
          });


          return text;
        }
      }
    ]
  });


  /**
   * Ejes
   *
   * @see https://www.argentina.gob.ar/contenidosdigitales/markdown/ejes
   * @regexp https://regex101.com/r/e0SSyh/5
   */
  showdown.extension("ejes", function() {
    "use strict";
    return [
      {
        type: "lang",
        filter: function(text, converter, options){
          const regex = /((?:\[\[)?col(1[0-2]|[1-9])(?:-\{|<<))[\s\S]*?\[\[ejes-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}\]\][\s\S]*?(>>|\}-\]\])/;
          var main_regex = new RegExp(regex, "gmi");

          text = text.replace(main_regex, function(e){
            var main_regex = new RegExp(regex, "gmi");
            var rgx = main_regex.exec(e);
            var cols = {
                "2": "6",
                "3": "4",
                "4": "3",
                "1": "12"
            };

            var html = `<div class="col-xs-12 col-sm-${cols[rgx[2]]} col-md-${cols[rgx[2]]}">
              <div class="icon-item">
                <i class="${rgx[5]} ${rgx[6]}"></i>
                <p></p>
                <h3>${rgx[3]}</h3>
                <p>${rgx[4]}</p>
              </div>
              </div>`;
            return html;

          });
          return text;
        }
      }
    ]
  });


  /**
   * Números
   *
   * @see https://www.argentina.gob.ar/contenidosdigitales/markdown/numeros
   * @regexp https://regex101.com/r/HSPGZn/6
   */
  showdown.extension("numbers", function() {
    "use strict";
    return [
      {
        type: "lang",
        filter: function(text, converter, options) {
          const regex = /((?:\[\[)?col([2-4])(?:-\{|<<))[\s\S]*?\[\[numeros-\{([^\{\}-]*?)-([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}\]\][\s\S]*?(>>|\}-\]\])/;
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
                <div class="h2 ${rgx[7]}">
                  ${rgx[3]}<small>${rgx[4]}</small>
                </div>
                <p class="lead">${rgx[5]}</p>
                <p class="text-muted">${rgx[6]}</p>
              </div>`;
            return html;
          });
          return text;
        }
      }
    ]
  });



  /**
   * Crea la etiqueta details con un summary.
   *
   * @regexp https://regex101.com/r/ojH22w/2/
   */
  showdown.extension("details", function() {
    "use strict";
    return [
      {
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
      }
    ]
  });

} // END IF showdown
