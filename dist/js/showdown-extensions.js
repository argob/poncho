function cleanner(e,n){"object"!=typeof n&&(n=[]);var r=["html","body","div","span","applet","object","iframe","h1","h2","h3","h4","h5","h6","p","blockquote","pre","a","abbr","acronym","address","big","cite","code","del","dfn","em","img","ins","kbd","q","s","samp","small","strike","strong","sub","sup","tt","var","b","u","i","center","dl","dt","dd","ol","ul","li","fieldset","form","label","legend","table","caption","tbody","tfoot","thead","tr","th","td","article","aside","canvas","details","embed","figure","figcaption","footer","header","hgroup","menu","nav","output","ruby","section","summary","time","mark","audio","video","button"],t=(r.forEach(function(e,t){n.includes(e)&&r.splice(t,1)}),new RegExp("<\\/?("+r.join("|")+")(?![a-z])[^>]*>","gmi"));return e.replace(t,"")}var classlist=function(e,t){return!(!Array.isArray(e)||"number"!=typeof t||t<0||t>=e.length)&&"string"==typeof e[t]&&0<(e=e[t].split(".").filter(Boolean)).length?e.join(" "):""};const target=function(e){var t=new RegExp(/(\[(.*?)\]\(((blank):#)([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ]*)\))/,"gmi");return e=e.replace(t,'<a href="$5" target="_$4">$2</a>')};showdown&&showdown.extension("alerts",function(){"use strict";function o(e){return e.replace(/(^\s*|\s*$)/gm,"")}return[{type:"lang",filter:function(e,i,t){const n=/\[\[alerta-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([\w-\s]*?)\}-\{(warning|danger|info|success)\}\]\]/;var r=new RegExp(n,"gm");return e=e.replace(r,function(a){a=new RegExp(n,"gm").exec(a);if(a){let[,e,t,n,r]=a;var a=/fa\-/g,a=(n=n.trim().replace(/fa\s/,"")).match(a)?`fa ${n} fa-fw fa-3x`:n+" fa-3x",s=(e=o(e),s=e,!!(s=/(?<header>^#{2,6})/.exec(s))&&s.groups.header.length),s=(s=s)?"h"+s:"p",s=(e=e.replaceAll("#",""),(e=i.makeHtml(e).replace(/(\<p\>|\<\/p\>)/g,""))?`<${s} class="h5">${e}</${s}>`:"");return'<div class="alert alert-'+r+'"><div class="media"><div class="media-left"><i class="'+a+'"></i></div><div class="media-body">'+s+i.makeHtml(o(t))+"</div></div></div>"}})}}]}),showdown&&showdown.extension("images",function(){"use strict";return[{type:"lang",filter:function(e,t,n){const r=new RegExp(/\!\[([^\[\]]{0,255})\]\(([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ\s]{1,255})\)\{([\w\.-]+)\}/,"gm");return e=e.replace(r,function(e){var e=r.exec(e),t=new Image;return t.src=e[2],t.className=classlist(e,3),t.alt=e[1],t.outerHTML})}}]}),showdown&&showdown.extension("bootstrap-tables",function(){return[{type:"output",filter:function(e,t,n){const r=(new DOMParser).parseFromString(e,"text/html");return r.querySelectorAll("table").forEach(e=>{var t=r.createElement("div");t.classList.add("table-responsive"),e.classList.add("table","table-bordered"),e.parentNode.replaceChild(t,e),t.appendChild(e)}),(new XMLSerializer).serializeToString(r)}}]}),showdown&&showdown.extension("button",function(){"use strict";return[{type:"lang",filter:function(e,t,n){const r=/(\[([^\[\]]+)\]\((blank:#)?([a-zA-Z0-9\_\.\-\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#]+)\)\{([\w_\-.]+?)\})/gm;var a=new RegExp(r,"gmi");return e=e.replace(a,function(e){var e=new RegExp(r,"gm").exec(e),t=document.createElement("a");return t.href=e[4],e[3]&&(t.target="_blank"),null!=e[5]&&(t.className=classlist(e,5)),t.textContent=e[2],t.dataset.created="true",t.outerHTML})}}]}),showdown&&showdown.extension("details",function(){"use strict";return[{type:"lang",filter:function(e,a,t){const s=/^\[\[details(-open|-close)?\s?\{\[([\s\S]*?)\]\[([\s\S]*?)\]\}\]\]$/gm;var n=new RegExp(s,"gmi");return e=e.replace(n,function(e){var e=new RegExp(s,"gmi").exec(e),t="-open"==e[1]&&"true",n=document.createElement("details"),t=(n.name="foo",t&&n.setAttribute("open","true"),document.createElement("summary")),r=(t.innerHTML=cleanner(a.makeHtml(e[2]),["h1","h2","h3","h4","h5","h6","strong","em","i"]),document.createElement("div")),e=(r.innerHTML=a.makeHtml(e[3]),n.appendChild(t),n.appendChild(r),n.outerHTML);return e})}}]}),showdown&&showdown.extension("ejes",function(){"use strict";return[{type:"lang",filter:function(e,t,n){const r=/((?:\[\[)?col(1[0-2]|[1-9])(?:-\{|<<))[\s\S]*?\[\[ejes-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}\]\][\s\S]*?(>>|\}-\]\])/;var a=new RegExp(r,"gmi");return e=e.replace(a,function(e){var e=new RegExp(r,"gmi").exec(e),t={2:"6",3:"4",4:"3",1:"12"};return`<div class="col-xs-12 col-sm-${t[e[2]]} col-md-${t[e[2]]}">
                <div class="icon-item">
                    <i class="${e[5]} ${e[6]}"></i>
                    <p class="h3">${e[3]}</p>
                    <p>${e[4]}</p>
                </div>
                </div>`})}}]}),showdown&&showdown.extension("numbers",function(){"use strict";return[{type:"lang",filter:function(e,t,n){const r=/((?:\[\[)?col([2-4])(?:-\{|<<))[\s\S]*?\[\[numeros-\{([^\{\}-]*?)-([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}\]\][\s\S]*?(>>|\}-\]\])/;var a=new RegExp(r,"gmi");return e=e.replace(a,function(e){var e=new RegExp(r,"gmi").exec(e),t={2:"6",3:"4",4:"3",1:"12"};return`<div class="col-xs-12 col-sm-${t[e[2]]} col-md-${t[e[2]]}">
                        <p class="h2 ${e[7]}">${e[3]} 
                            <small>${e[4]}</small>
                        </p>
                        <p class="lead">${e[5]}</p>
                        <p class="text-muted">${e[6]}</p>
                    </div>`})}}]}),showdown&&showdown.extension("target",function(){"use strict";return[{type:"lang",filter:function(e,t,n){var r=new RegExp(/(\[(.*?)\]\(((blank):#)([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ]*)\))/,"gmi");return e=e.replace(r,target)}}]}),showdown&&showdown.extension("video",function(){"use strict";return[{type:"lang",filter:function(e,t,n){const a=/\[\[(youtube|vimeo)-\{(16by9|4by3)\}-\{([a-zA-Z0-9]+)\}\]\]/;var r=new RegExp(a,"gm");return e=e.replace(r,function(e){var t,n,r,e=new RegExp(a,"gm").exec(e);return e&&(t=e[2],n=e[3],r="","vimeo"==e[1]?r=`<div 
                            class="embed-responsive embed-responsive-${t}">
                        <iframe
                            width=""
                            height=""
                            src="https://player.vimeo.com/video/${n}"
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
                        </div>`:"youtube"==e[1]&&(r=`<div 
                            class="embed-responsive embed-responsive-${t}">
                        <iframe
                            src="https://www.youtube.com/embed/${n}?enablejsapi=1&amp;origin=https%3A%2F%2Fwww.argentina.gob.ar" 
                            allowfullscreen="" 
                            data-gtm-yt-inspected-1807370_332="true" 
                            id="957974559" 
                            data-gtm-yt-inspected-1807370_380="true" 
                            data-gtm-yt-inspected-1807370_518="true" 
                            data-gtm-yt-inspected-1807370_611="true" 
                            data-gtm-yt-inspected-1807370_618="true">
                        </iframe>
                        </div>`)),r})}}]});