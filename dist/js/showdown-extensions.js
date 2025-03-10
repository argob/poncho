function cleanner(e,n){"object"!=typeof n&&(n=[]);var a=["html","body","div","span","applet","object","iframe","h1","h2","h3","h4","h5","h6","p","blockquote","pre","a","abbr","acronym","address","big","cite","code","del","dfn","em","img","ins","kbd","q","s","samp","small","strike","strong","sub","sup","tt","var","b","u","i","center","dl","dt","dd","ol","ul","li","fieldset","form","label","legend","table","caption","tbody","tfoot","thead","tr","th","td","article","aside","canvas","details","embed","figure","figcaption","footer","header","hgroup","menu","nav","output","ruby","section","summary","time","mark","audio","video","button"],t=(a.forEach(function(e,t){n.includes(e)&&a.splice(t,1)}),new RegExp("<\\/?("+a.join("|")+")(?![a-z])[^>]*>","gmi"));return e.replace(t,"")}var classlist=function(e,t){return!(!Array.isArray(e)||"number"!=typeof t||t<0||t>=e.length)&&"string"==typeof e[t]&&0<(e=e[t].split(".").filter(Boolean)).length?e.join(" "):""};let target=function(e){var t=new RegExp(/(\[(.*?)\]\(((blank):#)([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ]*)\))/,"gmi");return e=e.replace(t,`<a href="$5" target="_$4" 
            title="Abre en una nueva ventana">$2 
            <span class="sr-only">(Abre en una nueva ventana)</span></a>`)};showdown&&showdown.extension("alerts",function(){return[{type:"lang",filter:function(e,l,t){let n=/\[\[alerta-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([\w-\s]*?)\}-\{(warning|danger|info|success)\}\]\]/,a=new RegExp(n,"gm");return e.replace(a,function(i){var i=new RegExp(n,"gm").exec(i);if(i){let[,e,t,n,a]=i,r="";(n=n.trim().replace(/fa\s/,""))&&(i=/fa\-/g.test(n)?`fa ${n} fa-fw fa-3x`:n+" fa-3x",r=`<div class="media-left">
                                <i class="${i}"></i>
                                </div>`),i=e;var i=!!(i=/(?<header>^#{2,6})/.exec(i))&&i.groups.header.length,i=(e=e.trim().replace(/^(#*)/,""),(i=i)?"h"+i:"p"),i=e?`<${i} class="h5">
                                ${l.makeHtml(e).replace(/<\/?p>/g,"")}
                            </${i}>`:"",s=l.makeHtml(t.trim());return`<div class="alert alert-${a}">
                                <div class="media">
                                    ${r}
                                    <div class="media-body">
                                        ${i}
                                        ${s}
                                    </div>
                                </div>
                            </div>`}return""})}}]}),showdown&&showdown.extension("images",function(){return[{type:"lang",filter:function(e,t,n){let a=new RegExp(/\!\[([^\[\]]{0,255})\]\(([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ\s]{1,255})\)\{([\w\.-]+)\}/,"gm");return e=e.replace(a,function(e){var e=a.exec(e),t=new Image;return t.src=e[2],t.className=classlist(e,3),t.alt=e[1],t.outerHTML})}}]}),showdown&&showdown.extension("bootstrap-tables",function(){return[{type:"output",filter:function(e,t,n){let a=(new DOMParser).parseFromString(e,"text/html");return a.querySelectorAll("table").forEach(e=>{var t=a.createElement("div");t.classList.add("table-responsive"),e.classList.add("table","table-bordered"),e.parentNode.replaceChild(t,e),t.appendChild(e)}),(new XMLSerializer).serializeToString(a)}}]}),showdown&&showdown.extension("button",function(){return[{type:"lang",filter:function(e,t,n){let a=/(\[([^\[\]]+)\]\((blank:#)?([a-zA-Z0-9\_\.\-\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#]+)\)\{([\w_\-.]+?)\})/gm,r=new RegExp(a,"gmi");return e=e.replace(r,function(e){var e=new RegExp(a,"gm").exec(e),t=document.createElement("a");return t.href=e[4],e[3]&&(t.target="_blank"),null!=e[5]&&(t.className=classlist(e,5)),t.textContent=e[2],t.dataset.created="true",t.outerHTML})}}]}),showdown&&showdown.extension("details",function(){return[{type:"lang",filter:function(e,r,t){let i=/^\[\[details(-open|-close)?\s?\{\[([\s\S]*?)\]\[([\s\S]*?)\]\}\]\]$/gm;var n=new RegExp(i,"gmi");return e=e.replace(n,function(e){var e=new RegExp(i,"gmi").exec(e),t="-open"==e[1]&&"true",n=document.createElement("details"),t=(n.name="foo",t&&n.setAttribute("open","true"),document.createElement("summary")),a=(t.innerHTML=cleanner(r.makeHtml(e[2]),["h1","h2","h3","h4","h5","h6","strong","em","i"]),document.createElement("div")),e=(a.innerHTML=r.makeHtml(e[3]),n.appendChild(t),n.appendChild(a),n.outerHTML);return e})}}]}),showdown&&showdown.extension("ejes",function(){return[{type:"lang",filter:function(e,t,n){let a=/((?:\[\[)?col(1[0-2]|[1-9])(?:-\{|<<))[\s\S]\[\[ejes-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}\]\][\s\S](>>|\}-\]\])/,r=new RegExp(a,"gmi");return e=e.replace(r,function(e){var e=new RegExp(a,"gmi").exec(e),t={2:"6",3:"4",4:"3",1:"12"};return`<div class="col-xs-12 col-sm-${t[e[2]]} col-md-${t[e[2]]}">
                <div class="icon-item">
                    <i class="${e[5]} ${e[6]}"></i>
                    <p class="h3">${e[3]}</p>
                    <p>${e[4]}</p>
                </div>
                </div>`})}}]}),showdown&&showdown.extension("numbers",function(){return[{type:"lang",filter:function(e,t,n){let a=/((?:\[\[)?col([2-4])(?:-\{|<<))[\s\S]\[\[numeros-\{([^\{\}-]*?)-([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}\]\][\s\S](>>|\}-\]\])/;var r=new RegExp(a,"gmi");return e=e.replace(r,function(e){var e=new RegExp(a,"gmi").exec(e),t={2:"6",3:"4",4:"3",1:"12"};return`<div class="col-xs-12 col-sm-${t[e[2]]} col-md-${t[e[2]]}">
                        <p class="h2 ${e[7]}">${e[3]} 
                            <small>${e[4]}</small>
                        </p>
                        <p class="lead">${e[5]}</p>
                        <p class="text-muted">${e[6]}</p>
                    </div>`})}}]}),showdown&&showdown.extension("target",function(){return[{type:"lang",filter:function(e,t,n){var a=new RegExp(/(\[(.*?)\]\(((blank):#)([-\_\.\~\!\*\'\(\)\;\:\@\&\=\+\$\,\/\?\%\#\[\]\!\¿\?\¡0-9a-zA-Záéíóúñ]*)\))/,"gmi");return e=e.replace(a,target)}}]}),showdown&&showdown.extension("video",function(){return[{type:"lang",filter:function(e,t,n){let r=/\[\[(youtube|vimeo)-\{(16by9|4by3)\}-\{([a-zA-Z0-9]+)\}\]\]/,a=new RegExp(r,"gm");return e=e.replace(a,function(e){var t,n,a,e=new RegExp(r,"gm").exec(e);return e&&(t=e[2],n=e[3],a="","vimeo"==e[1]?a=`<div 
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
                        </div>`:"youtube"==e[1]&&(a=`<div 
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
                        </div>`)),a})}}]});