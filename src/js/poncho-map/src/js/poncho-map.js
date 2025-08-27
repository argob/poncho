/**
 * PONCHO MAP
 *
 * @summary Generador de mapas utilizando OpenStreetMap / leafleft
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,utils.js,
 * MarkerCluster.Default.css,MarkerCluster.css
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 * @see https://geojson.org/
 * @see https://leafletjs.com/
 *
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2022 Argentina.gob.ar
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
class PonchoMap {
    constructor(data, options){
        const defaults = {
            error_reporting: true,
            no_info: false,
            map_style: {},
            title: false,
            id: "id",
            id_mixing: [],
            template: false,
            map_layers: true,
            map_layers_default: "osm",
            template_structure: {
                // lead: [],
                // header: false,
                // title: "",
                // mixing: [],
                // values: [],
                // exclude: [],
                container_classlist: ["info-container"],
                definition_classlist: [],
                definition_list_classlist:["definition-list"],
                definition_list_tag: "dl",
                definition_tag: "dd",
                term_classlist: ["h6", "m-b-0"],
                term_tag: "dt",
                title_classlist: ["h4","pm-color-primary","m-t-0"]
            },
            accesible_menu_extras: [
                {
                    label: "Ayudá a mejorar el mapa",
                    link: "https://www.argentina.gob.ar/sugerencias",
                    target: "_blank"
                }
            ],
            fit_bounds_onevent: true,
            allowed_tags: [],
            template_innerhtml: false,
            template_markdown: false,
            theme_ui: false,
            theme_map: false,
            theme_tool: true,
            map_opacity: 1,
            map_background: "#DDD",
            theme: "default",
            default_themes: [
                {
                    code: "default",
                    name: "Original",
                    aria_label: false,
                    description: "Colores predeterminados del proveedor del mapa.",
                },
                {
                    code: "contrast",
                    name: "Alto contraste",
                    aria_label: false,
                    description: "Fondo oscuro con bordes blancos.",
                },
                {
                    code: "dark",
                    name: "Oscuro",
                    aria_label: false,
                    description: "Fondo oscuro con bordes blancos de contraste medio.",
                },
                {
                    code: "grayscale",
                    name: "Gris",
                    aria_label: false,
                    description: "Mapa e interfaz en tonos de gris.",
                },
                {
                    code: "relax",
                    name: "Relax",
                    aria_label: false,
                    description: "Paleta de colores suaves.",
                }
            ],
            
            markdown_options: {
                extensions :[
                    "details",
                    "images",
                    "alerts",
                    "numbers",
                    "ejes",
                    "button",
                    "target",
                    "bootstrap-tables",
                    "video"
                ],
                simpleLineBreaks: true,
                tables: true
            },
            render_slider: true,
            scope: "",
            slider: false,
            scroll: false,
            hash: false,
            headers: {},
            header_icons: [],
            content_selector: false,
            map_selector: "map",
            anchor_delay: 0,
            slider_selector: ".slider",
            map_view: [-40.44, -63.59],
            map_anchor_zoom: 16,
            map_zoom: 4,
            min_zoom: 2,
            map_init_options: {
                // zoomSnap: .2,
                // zoomControl: false,
                // scrollWheelZoom: false,
                // touchZoom: false,
                // doubleClickZoom: false,
                // scrollWheelZoom: false,
                // boxZoom: false,
                // dragging:false
            },
            reset_zoom: true,
            latitud: "latitud",
            longitud: "longitud",
            marker: "azul",
            tooltip: false,
            tooltip_options:{
                permanent: false,
                className: "leaflet-tooltip-own",
                direction: "auto",
                offset: [13,-18], 
                sticky: false,
                opacity: 1,
            },
            marker_cluster_options: {
                spiderfyOnMaxZoom: true,
                showCoverageOnHover: false,
                zoomToBoundsOnClick: true,
                maxClusterRadius: 30,
                spiderfyDistanceMultiplier: 0.5,
                spiderLegPolylineOptions: {
                    weight: 1,
                    color: "#666666",
                    opacity: 0.5,
                    "fill-opacity": 0.5
                }
            },
            open_maps: false,
            open_maps_options: {
                label: "Abrir en:",
                items: [
                    {
                        link: "https://mapa.ign.gob.ar/beta/?zoom=17&lat={{latitude}}&lng={{longitude}}&layers=argenmap&marker={{latitude}},{{longitude}}",
                        label: `<abbr lang="es" title="Instituto Geográfico Nacional">IGN</abbr> – ArgenMap <small class="sr-only d-block">, El contenido podría no estar adecuado para usuarios de tecnología asistiva</small>`,
                        lang: "es",
                        hreflang: "es",
                        rel: ["alternate"],
                        aria_label: false,
                    },
                    {
                        link: 'https://www.google.com/maps/search/?api=1&query={{latitude}},{{longitude}}',
                        label: "Google maps",
                        lang: "en",
                        hreflang: false,
                        rel: ["alternate"],
                        aria_label: false,
                    },
                    {
                        link: "https://maps.apple.com/?q={{latitude}},{{longitude}}",
                        label: "Apple maps",
                        lang: "en",
                        hreflang: "en",
                        rel: ["alternate"],
                        plataform: "mac",
                        aria_label: false,
                    },
                    {
                        link: "https://www.openstreetmap.org/?mlat={{latitude}}&mlon={{longitude}}#map=16/{{latitude}}/{{longitude}}",
                        label: "Open street maps",
                        lang: "en",
                        hreflang: "en",
                        rel: ["alternate"],
                        aria_label: false,
                    },
                ]
            },
            breakpoint: {
                lg: 992,
                xl: 1200,
                sm: 576,
                md: 768,
            },
            breakpoint_fraction: {
                sm: "1:4",
                md: "1:4",
                lg: "1:3",
                xl: "2:7"
            },
            map_align: "center"
        };
        let opts = Object.assign({}, defaults, options);
        this.error_reporting = opts.error_reporting;
        this.scope = opts.scope;
        this.render_slider = opts.render_slider;
        this.template = opts.template;
        this.template_structure = {
            ...defaults.template_structure,
            ...options.template_structure
        };
        this.template_innerhtml = opts.template_innerhtml;
        this.template_markdown = opts.template_markdown;
        this.markdown_options = opts.markdown_options;
        this.allowed_tags = opts.allowed_tags;
        this.map_selector = opts.map_selector;
        this.headers = this.setHeaders(opts.headers);
        this.header_icons = opts.header_icons;
        this.hash = opts.hash;
        this.scroll = opts.scroll;
        this.fit_bounds_onevent = opts.fit_bounds_onevent;
        this.map_view = opts.map_view;
        this.map_init_options = opts.map_init_options;
        this.anchor_delay = opts.anchor_delay;
        this.map_zoom = opts.map_zoom;
        this.min_zoom = opts.min_zoom;
        this.map_anchor_zoom = opts.map_anchor_zoom;
        this.tooltip_options = opts.tooltip_options;
        this.tooltip = opts.tooltip;
        this.marker_cluster_options = opts.marker_cluster_options;
        this.marker_color = opts.marker;
        this.id = opts.id;
        this.id_mixing = opts.id_mixing;
        this.title = opts.title;
        this.map_background = opts.map_background;
        this.theme = opts.theme;
        this.theme_tool = opts.theme_tool;
        this.default_themes = opts.default_themes;
        this.temes_not_visibles = [["transparent", "Transparent"]];
        this.theme_ui = opts.theme_ui;
        this.theme_map = opts.theme_map;
        this.map_opacity = opts.map_opacity;
        this.latitude = opts.latitud;
        this.longitude = opts.longitud;
        this.slider = opts.slider;
        this.no_info = opts.no_info;
        this.reset_zoom = opts.reset_zoom;
        this.slider_selector=this._selectorName(opts.slider_selector);
        this.selected_marker;
        this.scope_selector = `[data-scope="${this.scope}"]`;
        this.scope_sufix = `--${this.scope}`;
        this.content_selector = (opts.content_selector ? 
            opts.content_selector : `.js-content${this.scope_sufix}`);
        this.content_outside = (this.content_selector !== `.js-content${this.scope_sufix}` ? true : false);
        this.data = this.formatInput(data);
        this.geometryTypes = [
            "Point",
            "LineString",
            "Polygon",
            "MultiPoint",
            "MultiLineString"
        ];
        this.map_layers = opts.map_layers;
        this.map_layers_default = opts.map_layers_default;
        this.featureStyle = {
            stroke: "dodgerblue",
            "stroke-opacity": 1,
            "stroke-width": 2,
            "fill-opacity": 0.5
        };
        this.accesible_menu_search = [];
        this.accesible_menu_filter = [];
        this.open_maps = opts.open_maps;
        this.open_maps_options = Object.assign(
            {}, defaults.open_maps_options, options?.open_maps_options);
        this.breakpoint = opts.breakpoint;
        this.breakpoint_fraction = opts.breakpoint_fraction;
        this.map_align = opts.map_align;
        this.map_style = opts.map_style;
        this.accesible_menu_extras = opts.accesible_menu_extras;
        this.geojson;
            
        // OSM
        const osmAttributionLink = `<a hreflang="en" `
            + `href="https://www.openstreetmap.org/copyright">`
            + `<abbr lang="en" title="Open Street Map">OSM</abbr></a>`;
        const ersiAttributionLik = `Mapas satelitales ` 
            + `© <a hreflang="es" href="https://www.esri.com/es-es/home">`
            + `<abbr lang="en" title="Environmental Systems Research Institute">`
            + `Esri</abbr></a>`;
        const ignAttributionLink = `<a hreflang="es" `
            + `href="https://www.ign.gob.ar/AreaServicios/Argenmap/Introduccion">`
            + `<abbr lang="es" title="Instituto Geográfico Nacional">IGN</abbr>`
            + `</a>`;
        const attributionHeading = "Contribuidores: ";
        this.prefix = `<a hreflang="en" href="https://leafletjs.com/" `
            + `title="Biblioteca JavaScript para mapas interactivos">`
            + `Leaflet</a>`;
        this.ersiURL ='https://server.arcgisonline.com/arcgis/rest/services/'
            + 'World_Imagery/MapServer/tile/{z}/{y}/{x}';
        this.ersiAttribution = (attributionHeading
            + [osmAttributionLink, ersiAttributionLik].join(", "));

        this.osmAttribution = (attributionHeading
            + [ignAttributionLink, osmAttributionLink].join(", "));
        this.osmURL = "https://mapa-ign.argentina.gob.ar/osm/{z}/{x}/{-y}.png";

        this.layerViewSettings = {
            satelital:{
                label: "Mapa satelital",
                tilesUrl: this.ersiURL,
                attribution: this.ersiAttribution,
                setVisuals: this._setSatelitalView,
            },
            osm:{
                label: "Mapa",
                tilesUrl: this.osmURL,
                attribution: this.osmAttribution,
                setVisuals: this._setOsmView,
            }
        };

        this.layerViewConf = (this.map_layers_default == "satelital" && 
            this.map_layers ? this.layerViewSettings[this.map_layers_default] : 
            this.layerViewSettings["osm"]);

        this.tileLayer = new L.tileLayer(this.layerViewConf.tilesUrl);
        const mapOptions = {renderer: L.svg(), ...this.map_init_options}
        this.map = new L.map(this.map_selector, mapOptions);
        this.map.setView(this.map_view, this.map_zoom);
        this.map.attributionControl.setPrefix(this.prefix);

        // Si se importó el componente _markerCluster_, lo usa. De otro modo
        // Utiliza _FeatureGroup_ y muestra todos los markers simultáneamente.
        if(L.hasOwnProperty("markerClusterGroup")){
            this.markers = new L.markerClusterGroup(this.marker_cluster_options);
        } else {
            this.markers = new L.FeatureGroup();
        }
        this.ponchoLoaderTimeout;
    }


    /**
     * Setea definiciones de estilo
     * @returns {undefined}
     */
    _setCssVariables = () => {
        if (typeof headStyle !== 'function') {
            return;
        }

        const entries = Object.entries(this.map_style);
        if(entries.length < 1){
            return;
        }
        var acc = [];
        for(let entry of entries){
            let [key, value] = entry;
            acc.push(`--pm-${key}: ${value};`);
        }
        headStyle(
            `ponchomap__${this.map_selector}`, 
            `.poncho-map:has(#${this.map_selector}){${acc.join("")}}`
        );
    }


    /**
     * Define la fracción en la que puede alinearse el mapa.
     * 
     * @summary Si el usuario elige alineación: «left» o «right»; en función
     * del tamaño del mapa, elige la fracción que mejor representa el mapa
     * alineado.
     * @param {Number} mediaSize Número entero.
     * @returns {string} Fracción, ej: 1:3
     */
    _setFraction = (mediaSize=false) => {
        if(mediaSize && typeof mediaSize != "number"){
            console.error('setFraction', 'mediaSize espera un valor entero.');
            return;
        }

        const mSize = (mediaSize ? mediaSize : 
            document.getElementById(this.map_selector).offsetWidth);
        
        let breakpointEntries = Object.entries(this.breakpoint);
        breakpointEntries.sort((a, b) => b[1] - a[1]);

        let fraction = '1:1';
        for(const entry of breakpointEntries){
            const [key, size] = entry;
            if(!this.breakpoint_fraction.hasOwnProperty(key)){
                continue;
            }

            if(!Number.isInteger(Number(size))){
                continue;
            }

            if(mSize >= size){
                fraction = this.breakpoint_fraction[key];
                break;
            }
        }

        return fraction;
    }


    /**
     * Alinea el mapa horizontalmente hacia la izquierda o la derecha.
     *
     * @param {string} align - La alineación horizontal del mapa. Los 
     * valores válidos son 'left' o 'right'.
     * @param {string} [fraction=false] - Opcional. Una cadena de fracción 
     * (por ejemplo, '1:3') para centrar el mapa en la vista alineada.
     * @param {number[]} [initialCenter=this.map_view] - Opcional. Un array 
     * `[latitud, longitud]` para establecer un punto central inicial.
     * @returns {undefined}
     */
    setMapAlignment = (align, fraction=false, initialCenter=this.map_view) => {
        if(!["left", "right"].includes(align.toLowerCase())){
            return;
        }

        fraction = (!fraction ? this._setFraction() : fraction);
        if(!/^[0-9]\:[0-9]$/.test(fraction)){
            console.error(
                "La fracción para posicionar el mapa tiene errores sintácticos.");
            return;
        }

        const [numerator, denominator] = fraction.split(":");
        const result = numerator/denominator;
        if((Number(result) === 1 || Number(result) === 0.5)){
            return null;
        }

        const [lat, lng] = initialCenter;
        const currentCenter = (Array.isArray(initialCenter) ? {lat, lng} : 
                this.map.getCenter());

        let currentCenterPoint = this.map.latLngToContainerPoint(currentCenter);
        const fractionPos = (align == "left" ? denominator - numerator : numerator);
        let newX = ((document.querySelector(".poncho-map").offsetWidth / 
                denominator) * fractionPos);

        let newY = currentCenterPoint.y;
        let newCenterPoint = L.point(newX, newY);

        let newCenterLatLng = this.map.containerPointToLatLng(newCenterPoint);
        console.log(newCenterPoint, newCenterLatLng)
        //this.map.setView(currentCenter);
        this.map_view = [newCenterLatLng.lat, newCenterLatLng.lng]
        this.map.setView(newCenterLatLng);
    };


    /**
     * Crea un elemento anchor <a>
     * * @param {object} options 
     * @param {object} options.id Especifica el id del elemento.
     * @param {object} options.title Especifica el title del elemento.
     * @param {object} options.css Array de clases CSS para el elemento.
     * @param {string} options.label El texto que se mostrará dentro del enlace.
     * @param {string} options.aria_label El texto para el atributo 
     * 'aria-label'.
     * @param {string} options.link La URL a la que apunta el enlace.
     * @param {string} options.hreflang El idioma del documento de destino.
     * @param {string} options.lang El idioma del elemento.
     * @param {string} options.target Especifica dónde se abrirá el documento 
     * vinculado. Valores posibles: '_self', '_blank', '_parent', '_top'.
     * @param {string[]} options.rel Especifica la relación entre el 
     * documento actual y el documento vinculado.
     * @param {object} options.datasets Un objeto de pares clave-valor para 
     * los atributos de datos (data-*).
     * @param {object} options.attributes Un objeto de pares clave-valor 
     * para otros atributos personalizados.
     * @returns {HTMLAnchorElement}
     */
    addAnchorElement = (options) => {
        const {
            id,
            title,
            css,
            label = null,
            aria_label,
            link = '#',
            hreflang,
            lang,
            target,
            rel,
            datasets = {},
            attributes = {}
        } = options;

        const regexLang = /^[a-zA-Z]{2}$/;
        const isValidLang = (typeof lang === "string" &&
                regexLang.test(lang));
        const isValidHrefLang = (typeof hreflang === "string" &&
                regexLang.test(hreflang));
        const isValidTarget = [
                '_self', '_blank', '_parent', '_top'].includes(target);

        // Anchor
        const element = document.createElement("a");
        element.href = link;

        if(label && isValidTarget && target == "_blank"){
            element.innerHTML = `${label} <span class="sr-only">`
                    + `(Abre en una nueva pestaña)</span>`; 
        } else if(label){
            element.innerHTML = label;
        }

        if (Array.isArray(rel)) {
            const uniqueRel = [...new Set(rel)];
            if (isValidTarget && target === "_blank") {
                uniqueRel.push('noopener', 'noreferrer');
            }
            element.rel = uniqueRel.join(" ");
        }

        if(isValidLang){
            element.lang = lang;
        }
        if(isValidHrefLang){
            element.hreflang = hreflang;
        }
        if(isValidTarget){
            element.target = target;
        }
        if(aria_label){
            element.setAttribute("aria-label", aria_label);
        }
        if(id){
            element.id = id;
        }
        if(title){
            element.title = title;
        }
        if(Array.isArray(css)){
            element.classList.add(...css);
        }
        Object
            .entries(attributes)
            .forEach(([key, value]) => 
                element.setAttribute(key, value));
        Object
            .entries(datasets)
            .forEach(([key, value]) => 
                element.setAttribute(`data-${key}`, value));

        return element;
    };


    //
    // TEMA PARA EL MAPA
    //

    /**
     * Modifica la opacidad del mapa
     * @param {double|string} value Número _(double)_, o porcentaje de valor
     * @example
     * mapOpacity(0.5)
     * mapOpacity("50%")
     * @returns {undefined}  
     */
    mapOpacity = (value=false) => {
        const opacity = (value ? value : this.map_opacity);
        this.tileLayer.setOpacity(opacity);
    }


    /**
     * Define el color de fondo para el mapa. 
     * @param {string} value Color en hexadecimal o cualquier sistema de color
     * aceptado por html.
     * @example
     * // #ffcc00
     * // Se representará como: style="background-color:#ffcc00;"
     * mapBackgroundColor("#ffcc00")
     * @returns {undefined} 
     */
    mapBackgroundColor = (value=false) => {
        const color = (value ? value : this.map_background);
        document
            .querySelectorAll(`${this.scope_selector} .leaflet-container`)
            .forEach(e => e.style.backgroundColor = color);
    };


    /**
     * Habilita o deshabilita un botón
     * 
     * @param {Array} themes Array de temas, ej: ['map-dark', 'map-contrast']
     * @param {string} attr Estado del atributo. Default: disabled
     * @returns {undefined}
     */
    _disabledEnableThemes = (themes, attr="disabled") => {
        for(let item of themes){
            document.querySelectorAll(`${this.scope_selector} [data-theme="${item}"]`).forEach(ele =>{
                if(attr=="disabled"){
                    ele.setAttribute("aria-hidden", "true");
                    ele.parentElement.style.display = "none";
                } else {
                    ele.removeAttribute("aria-hidden");
                    ele.parentElement.style.display = "initial";
                }
            });
        }
    };


    /**
     * Setea el esetado de los css en los menu y en el mapa.
     * 
     * @param {Array} removeList  Lista de temas que deben removerse al 
     *                            aplicar la vista.
     * @param {string} addLayer   Esitlo para el layer que se utilizará.
     * @param {string} disabled   Agrega el atributo disabled en los botones.
     * @returns {undefined}
     */
    _setLayerTheme = (removeList, addLayer, disabled) => {
        const selector = document.querySelectorAll(this.scope_selector);
        selector.forEach(element => {
            element.classList.remove(...removeList);
            element.classList.add(addLayer);
        });
        this._disabledEnableThemes(["contrast", "dark"], disabled);

        const menuitemLayerTheme = document.querySelectorAll(
                `${this.scope_selector} [data-theme^="layer-"]`);
        menuitemLayerTheme.forEach(ele => {
            if(ele.dataset.theme == addLayer){
                ele.setAttribute("aria-current", "true");
            } else {
                ele.setAttribute("aria-current", "false");
            }
        });
    }


    /**
     * Características para aplicar el mapa OSM
     * @returns {undefined}
     */
    
    _setOsmView = () => {
        this.tileLayer.setUrl(this.osmURL);
        this.map.attributionControl.removeAttribution(this.ersiAttribution);
        this.map.attributionControl.addAttribution(this.osmAttribution);
        // this.map.setMaxZoom(18);
        this._setLayerTheme(["layer-satelital"], "layer-osm", false);
    };
    


    /**
     * Características para aplicar el mapa satelital.
     * @returns {undefined}
     */
    
    _setSatelitalView = () => {
        this.tileLayer.setUrl(this.ersiURL);
        this.map.attributionControl.removeAttribution(this.osmAttribution);
        this.map.attributionControl.addAttribution(this.ersiAttribution);
        // this.map.setMaxZoom(17);
        this._setLayerTheme(
            ["layer-osm","map-contrast", "map-dark", "ui-contrast", "ui-dark"], 
            "layer-satelital", "disabled");
    };


    /**
     * Crea el menú para cambiar de temas
     * @returns {undefined} 
     */
    _menuTheme = () => {
        if(!this.theme_tool){
            return;
        }
        // const themeDetails = document.createElement("details");
        // const themeSummary = document.createElement("summary");
        // themeSummary.textContent = "Details";
        // const themeDetailsContent = document.createElement("div");
        // themeDetailsContent.textContent = "hola mundo"
        // themeDetails.appendChild(themeSummary);
        // themeDetails.appendChild(themeDetailsContent);

        document
            .querySelectorAll(`#themes-tool${this.scope_sufix}`)
            .forEach(ele => ele.remove());

        // Contenedor general
        const navContainer = document.createElement("div");
        navContainer.classList.add(
            "pm-list-unstyled", "pm-list","pm-tools",
            `js-themes-tool${this.scope_sufix}`
        );

        // contenedor enlaces
        const item = document.createElement("div");
        item.setAttribute("tabindex", "-1");
        item.dataset.toggle="true";

        // icono del menú
        const icon = document.createElement("i");
        icon.setAttribute("aria-hidden", "true");
        icon.classList.add("pmi", "pmi-adjust");

        // Botón para abrir el menú.
        const button = document.createElement("button");
        button.title = "Cambiar tema";
        button.id = `themes-tool-button${this.scope_sufix}`;
        button.tabIndex = "0";
        button.classList.add("pm-btn", "pm-btn-rounded-circle");
        button.appendChild(icon);
        button.ariaHasPopup = "true";
        button.ariaControls = "menu";
        button.role = "button";
        button.ariaLabel = "Abre el panel de temas";

        const list = document.createElement("ul");
        list.id = `list-themes-tool-button${this.scope_sufix}`;
        list.role = "menu";
        list.setAttribute(
            "aria-labelledby", 
            `themes-tool-button${this.scope_sufix}`);
        list.classList.add(
            "pm-container", "pm-list", "pm-list-unstyled", 
            "pm-p-1", "pm-caret", "pm-caret-b", "pm-toggle", 
            "pm-accesible-menu");

        // Botón para restablecer el mapa
        const restartLinkOptions = {
            label: "Restablecer",
            attributes: {role: "menuitem"},
            aria_label: "Restablece los valores originales",
            css: ["pm-item-link", "js-reset-theme"]
        };
        const restart = this.addAnchorElement(restartLinkOptions);

        const li = document.createElement("li");
        li.role = "presentation";
        li.classList.add("pm-item-separator");
        li.appendChild(restart);

        list.appendChild(li);

        // Genero los botones para los temas. 
        const totalItems = this.default_themes.length;
        for(let i = 0; i <= totalItems - 1; i++){
            const {code, name, aria_label, description} = this.default_themes[i];
            

            const buttonThemeOptions = {
                aria_label,
                css: ["js-set-theme", "pm-item-link"],
                attributes: {role: "menuitem"},
                datasets: {theme: code}
            };
            const buttonTheme = this.addAnchorElement(buttonThemeOptions);

            const spanName = document.createElement("span");
            spanName.textContent = name;
            buttonTheme.appendChild(spanName);

            if(description){
                const small = document.createElement("small");
                small.classList.add("d-block", "small", "sr-only");
                small.textContent = description;

                const comma = document.createElement("span");
                comma.textContent = ", ";
                comma.className = "sr-only";

                buttonTheme.appendChild(comma);
                buttonTheme.appendChild(small);
            }

            // Agrego una línea de separación.
            // @todo Separar los botones con details/summary
            const li = document.createElement("li");
            li.role="presentation";
            if(i == totalItems -1 && this.map_layers){
                li.classList.add("pm-item-separator");
            }

            li.appendChild(buttonTheme);
            list.appendChild(li);
        }	


        // Si no se setea multilayer, oculto los items del menú.
        if(this.map_layers){
            for(let item of Object.keys(this.layerViewSettings)){
                const {label} = this.layerViewSettings[item];

                const sateliteButton = document.createElement("button");
                sateliteButton.textContent = label;
                sateliteButton.dataset.theme = `layer-${item}`;
                sateliteButton.classList.add("pm-item-link", `js-${item}-layer`);
                const li = document.createElement("li");
                li.appendChild(sateliteButton);
                list.appendChild(li);
            }
        }

        item.appendChild(button);
        item.appendChild(list);
        navContainer.appendChild(item);

        // imprimo el menú en el mapa
        const element = document.querySelectorAll(this.scope_selector);
        element.forEach(e => e.appendChild(navContainer));

        // listeners
        document
            .querySelectorAll(`${this.scope_selector} .js-satelital-layer`)
            .forEach(ele => ele.addEventListener(
                "click", (e) => {
                    e.preventDefault();
                    this._setSatelitalView();
                })
            );
        document
            .querySelectorAll(`${this.scope_selector} .js-osm-layer`)
            .forEach(ele => ele.addEventListener(
                "click", (e) => {
                    e.preventDefault();
                    this._setOsmView();
                })
            );
        document
            .querySelectorAll(`${this.scope_selector} .js-reset-theme`)
            .forEach(ele => ele.addEventListener(
                "click", (e) => {
                    e.preventDefault();
                    localStorage.removeItem("mapTheme");
                    this._removeThemes();
                    this._setThemes();
                    this.layerViewConf.setVisuals();
                })
            );
        document
            .querySelectorAll(`${this.scope_selector} .js-set-theme`)
            .forEach(ele => ele.addEventListener(
                "click", (e) => {
                    e.preventDefault();
                    const th = ele.dataset.theme;
                    this.useTheme(th);
                    localStorage.setItem("mapTheme", th);
                })
            );
    };


    /**
     * Compone los estilos según la elección del usuario.
     * @param {string} theme Nombre del tema 
     * @param {object} prefix Lista de prefijos. ui o map 
     * @returns {object} Array con los estilos definidos.
     */
    _setThemeStyles = (theme=false, prefix=["ui", "map"]) => {
        return prefix.map(function(m){
            return (["ui", "map"].includes(m) ? `${m}-${theme}` : false);
        });
    };


    /**
     * Remueve los estilos de tema
     * @param {object} prefix Lista de prefijos. ui o map 
     * @returns {undefined}
     */
    _removeThemes = (prefix=["ui", "map"]) => {
        const element = document.querySelectorAll(this.scope_selector);
        element.forEach(ele => {
            [
                ...this.default_themes.map(m => m.code),
                ...this.temes_not_visibles.map(m => m[0])
            ].forEach(th => {
                ele.classList.remove(...this._setThemeStyles(th, prefix));
            });
        });
        // Aria-current false
        const themeMenuItems = document.querySelectorAll(
            `${this.scope_selector} .js-set-theme`);
        themeMenuItems.forEach(ele => ele.setAttribute("aria-current", "false"));
    };


    /**
     * Agrega un tema en el mapa e interfase.
     * @param {string} theme Nombre del tema
     * @param {object} prefix Lista de prefijos. ui o map 
     * @returns {undefined}
     */
    _setTheme = (theme, prefix)  => {
        const element = document.querySelectorAll(this.scope_selector);
        this._removeThemes(prefix);
        element.forEach(ele => {
            ele.classList.add( ...this._setThemeStyles(theme, prefix) ); 
        });
        // Agrega aria-current al item seleccionado
        const themeMenuItems = document.querySelectorAll(
            `${this.scope_selector} .js-set-theme[data-theme="${theme}"]`);
        themeMenuItems.forEach(ele => ele.setAttribute("aria-current", "true"));
    }


    /**
     * Permite setear un tema completo
     * @param {string} theme Nombre del tema
     * @returns {undefined}
     */
    useTheme = (theme = false) => {
        const useTheme = (theme ? theme : this.theme);
        this._setTheme(useTheme, ["ui", "map"]);
    }


    /**
     * Setea un tema para el mapa
     * @param {string} theme Nombre del tema
     * @returns {undefined}
     */
    useMapTheme = theme => this._setTheme(theme, ["map"]);


    /**
     * Setea un tema para el mapa
     * @param {string} theme Nombre del tema
     * @returns {undefined}
     */
    useUiTheme = theme => this._setTheme(theme, ["ui"]);


    /**
     * Setea el tema elegido por el usuario o el que lleva por defecto.
     * @returns {undefined}
     */
    _setThemes = () => {
        if(localStorage.hasOwnProperty("mapTheme")){
            this._setTheme(localStorage.getItem("mapTheme"), ["ui", "map"]);
            return;
        }

        if(!this.theme_ui && !this.theme_map){
            this.useTheme();
            return;
        }

        if(this.theme_ui){
            this._setTheme(this.theme_ui, ["ui"]);
        }

        if(this.theme_map){
            this._setTheme(this.theme_map, ["map"]);
        }
    }


    /**
     * Abre las coordenadas en varios servicios de mapas configurados
     * 
     * @summary
     * lang y href lang solo aceptan lenguajes tipo: ISO-639-1.
     * 
     * @param {number|string} latitude - Latitud de la ubicación
     * @param {number|string} longitude - Longitud de la ubicación
     * @returns {HTMLElement|null} - El contenedor creado o null si no se pudo crear
     */
    _openOnMaps = (latitude, longitude) => {
        if(typeof this.open_maps != "boolean" || !this.open_maps){
            return;
        }

        if(!this.validateCoordinates(latitude, longitude)){
            console.warn(
                `Coordenadas inválidas: lat=${latitude}, lng=${longitude}`);
            return;
        }

        const ul = document.createElement("ul");
        ul.classList.add("pm-list-unstyled", "pm-pb-1");

        const {items=[], label} = this.open_maps_options;

        if(items.length > 0){
            for(const item of items){
                const {link, label, lang, rel, hreflang, plataform="all", target} = item;
                const regex = /(?=.*\{\{latitude\}\})(?=.*\{\{longitude\}\}).*/gm;

                if(!navigator.userAgent.includes('Mac') && plataform == "mac"){
                    continue;
                }
                if(!regex.test(link)){
                    continue;
                }

                const setAnchor = link
                    .replace(/\{\{latitude\}\}/g, latitude)
                    .replace(/\{\{longitude\}\}/g, longitude);

                const anchorOptions = {
                    lang, hreflang, target, label, rel, 
                    link: setAnchor, attributes: {tabindex: 0}
                };
                const a = this.addAnchorElement(anchorOptions);
                const li = document.createElement("li");
                li.appendChild(a);
                ul.appendChild(li);
            }
        }

        const summary = document.createElement("summary");
        summary.textContent = label;
        summary.tabIndex = 0;
        summary.setAttribute(
            "aria-label", "Abrir el punto geográfico en un mapa alternativo");

        const details = document.createElement("details");
        details.classList.add("blank");
        details.appendChild(summary);
        details.appendChild(ul);

        const container = document.createElement("footer");
        container.className = "pm-open-map";
        container.appendChild(details);

        const parentSelector = `.js-content${this.scope_sufix}`;
        const parentNode = document.querySelector(parentSelector);
        parentNode.appendChild(container);
    }


    /**
     * Valida si las coordenadas de latitud y longitud son válidas
     * @param {number|string} latitude - Latitud a validar (-90 a 90)
     * @param {number|string} longitude - Longitud a validar (-180 a 180)
     * @returns {boolean} - Verdadero si ambas coordenadas son válidas, 
     * falso en caso contrario.
     */
    validateCoordinates(latitude, longitude) {
        // Convertir a números en caso de que se pasen como strings
        const lat = (typeof latitude === 'string' ? 
            parseFloat(latitude) : latitude);
        const lng = (typeof longitude === 'string' ? 
            parseFloat(longitude) : longitude);
        
        // Verificar que sean números válidos (no NaN)
        if (isNaN(lat) || isNaN(lng)) {
            return false;
        }
        
        // Validar rango de latitud: -90 a 90 grados
        if (lat < -90 || lat > 90) {
            return false;
        }
        
        // Validar rango de longitud: -180 a 180 grados
        if (lng < -180 || lng > 180) {
            return false;
        }
        
        return true;
    }


    /**
     * Alias de sluglify
     * 
     * @param {string} val Texto a formatear 
     * @returns {string}
     */
    _slugify = val => slugify(val);


    /**
     * Es un geoJSON
     * 
     * @summary Valida si un documento JSON psado por parámetro cumple
     * con el estándar geoJSON.
     * @param {object} gj Documento JSON.
     * @returns {boolean} True o False
     */
    isGeoJSON = (gj)=>{
        if(gj?.type === "FeatureCollection"){
            return true;
        }
        return false;
    };


    /**
     * JSON input
     * 
     * @return {object} Listado de entradas con formato `feature` de geoJSON.
     */
    get entries(){
        return this.data.features;
    }


    /**
     * Retrona las entradas en formato geoJSON
     */
    get geoJSON(){
        return this.featureCollection(this.entries);
    }


    /**
     * Retorna los datos de entrada en formato geoJSON
     * 
     * @summary Si los datos de entrada cumplen con el estándar GeoJSON,
     * mantiene la información como está. Si el objeto de entrada no 
     * cumple con el estándar, es tratado como un JSON de 
     * entradas simples.
     * @see https://geojson.org/
     * @return {object} Retorna un documento en formato geoJSON
     */
    formatInput = (input) => {
        if(input.length < 1){
            this.errorMessage(
                "No se puede visualizar el mapa, el documento está vacío", 
                "warning"
            );
        }

        let geoJSON;
        if(this.isGeoJSON(input)){
            geoJSON = input;
        } else {
            const features = this.features(input);
            geoJSON = this.featureCollection(features);
        }
        return this._setIdIfNotExists(geoJSON);
    };

        
    /**
     * Reporta un error bloqueante
     * 
     * @summary Reporta un error bloqueante y ejecuta una excepción 
     * mostrando un mensaje y removiendo el contenedor del mapa.
     * @param {string} text Mensaje de error 
     */
    errorMessage = (text=false, type="danger") => {
        document.querySelectorAll(`#js-error-message${this.scope_sufix}`)
                .forEach(e => e.remove());

        const container = document.createElement("div");
        container.id = `js-error-message${this.scope_sufix}`;
        container.classList.add("poncho-map--message", type);

        const title = document.createElement("h2");
        title.classList.add("h6", "title", "pm-visually-hidden");
        title.textContent = "¡Se produjo un error!";

        container.appendChild(title);

        const messagesList = [
            [
                "En estos momentos tenemos inconvenientes para mostrar el mapa.", 
                "text-center"
            ],
            [
                "<em>Disculpe las molestias</em>", 
                "text-center",
                "p"
            ]
        ];

        messagesList.forEach(entry => {
            const elementTag = (tag) => (
                    typeof tag !== "undefined" || tag ? tag : "p"); 
            const message = document.createElement(elementTag(entry[2]));
            if(typeof entry[1] !== "undefined" || entry[1]){
                message.className = entry[1];
            }
            message.innerHTML = entry[0];
            container.appendChild(message);
        });

        if(this.error_reporting) {
            const node = document.querySelector(
                `${this.scope_selector}.poncho-map`
            );
            node.parentNode.insertBefore(container, node);
            if(type == "danger"){
                document.getElementById(this.map_selector).remove();
            }
        }

        console.error(this.critical_error)
        throw text;
    };


    /**
     * Compone un _feature_ GeoJSON
     * 
     * @param {object} entry Entrada JSON
     * @returns {object} Objeto con formato geoJSON feature.
     */
    feature = (entry) => {
        const latitude = entry[this.latitude];
        const longitude = entry[this.longitude];
        [latitude, longitude].forEach(e => {
            if(isNaN(Number(e))){
                this.errorMessage(
                    `El archivo contiene errores en la definición de `
                    + `latitud y longitud.\n ${e}`
                );
            }
        });
        delete entry[this.latitude];
        delete entry[this.longitude];

        return {
            type: "Feature",
            properties: entry,
            geometry: {
                type: "Point",
                coordinates: [
                    longitude,
                    latitude
                ]
            }
        };
    };


    featureCollection = (features) => { 
        return {
            type: "FeatureCollection",
            features: features
        };
    }; 


    /**
     * Entradas JSON
     * @param {object} entries Entradas JSON 
     * @returns {object}
     */
    features = (entries) => {
        return entries.map(this.feature);
    };


    /**
     * El indice id_mixing ¿Está siendo usado?
     * @returns {boolean}
     */
    _isIdMixing = () => (Array.isArray(this.id_mixing) && 
            this.id_mixing > 0 || typeof this.id_mixing === 'function');


    /**
     * Array con valores a concatenar en el id.
     * 
     * @summary Dependiendo de la opción que haya elegido el usario, retorna
     * una array de valors pasado por funcion o _array object_.
     * @param {object} entry Objeto con una entrada del geoJson
     * @returns {object} Array con los valores a concatenar.
     */
    _idMixing = entry => {
        if(!this._isIdMixing()){
            return;
        }

        if(typeof this.id_mixing === "function"){
            return this.id_mixing(this, entry).join('');
        } 
        
        const values = this.id_mixing.map(val => {
            if(entry.properties[val]){
                return entry.properties[val].toString();
            } 
            return val;
        });

        return this._slugify(values.join("-"));
    }


    /**
     * Crea una entrada ID autonumerada si no posee una.
     * 
     * @summary Verifica si en las claves existe una posición asignada
     * a *id*. si no la tuviera genera una automáticamente. Por otro lado, 
     * si el usuario asoció una columna a la opción ID de la 
     * configuración, usa esa.
     * @param {object} entries
     * @return {object}
     */
    _setIdIfNotExists = (entries) => {
        const hasId = entries.features
            .filter((_, k) => k === 0)
            .every(e => e.properties.hasOwnProperty("id"));

        // Si no se configuró id_mixing y el json tiene id.
        if(!this._isIdMixing() && hasId){
            return entries;
        }
 
        const newEntries = entries.features.map((entry, k) => {
            if(this._isIdMixing()){
                // Procesa la opción de id_mixing
                entry.properties.id = this._idMixing(entry);
            } else {
                // Genera un ID automático
                const autoId = k + 1;
                const useTitle = (this.title && entry.properties[this.title] ? 
                        this._slugify(entry.properties[this.title]) : "");
                entry.properties.id = [autoId, useTitle].filter(f=>f).join('-');
            }
            
            return entry;
        }); 
        entries.features = newEntries;
        return entries;
    };


    /**
     * Agrega el hash en la barra de url.
     * 
     * @param {string|integer} value
     * @return {undefined}
     */
    addHash = (value) => {

        if (typeof value !== "string" && !value) {
            console.error('Invalid value provided to update hash');
            return;
        }

        if (!this.hash || this.no_info) {
            return;
        }
        
        window.location.hash = `#${value}`;
    };


    /**
     * Obtiene una entrada por su id
     * 
     * @param {integer} id Id de Punto Digital
     * @return {object}
     */
    entry = (id) => {
        return this.entries.find(e => {
            if(e?.properties && e.properties[this.id] === id && 
                e.properties?.["pm-interactive"] !== "n"){
                return true;
            }
            return false;
        });
    }


    /**
     * Busca un término en un listado de entradas.
     * 
     * @param {string} term Término a buscar.
     * @returns {object} Listado filtrado por los match
     */
    searchEntries = (term, dataset) => {
        dataset = (typeof dataset === "undefined" ? this.geoJSON: dataset);
        if(typeof term !== "string" || term.trim().length === 0){
            return dataset;
        }
        const entries = dataset.filter(entry => {
            return (this.searchEntry(term, entry.properties));
        })
        return entries;
    };


    /**
     * Busca un término en cada uno de los indices de una entrada.
     */
    searchEntry = (searchTerm, data) => {
        const searchFor = [
            ...new Set([...[this.title], ...this.search_fields])
        ].filter(e => e);

        const term = replaceSpecialChars(searchTerm).toUpperCase();
        const result = searchFor.some(function(key){
            const field = replaceSpecialChars(data[key])
                    .toString()
                    .toUpperCase();

            try {
                return (field.includes(term));
            } catch (error) {
                console.error(error);
            }
        });

        return (result ? data : null);
    };


    /**
     * Quita la definición a un selector.
     * 
     * @param {string} selector Selector a quitarle la definición.
     * @example
     * // returns foo
     * _selectorName(".foo")
     * @example
     * // returns foo
     * _selectorName("#foo")
     * @return {string} Nombre del selector sin caracter de tipo.
     */
    _selectorName = (selector) => {
        return selector.replace(/^(\.|\#)/, "");
    };


    /**
     * Acomoda la pantalla ubicando el mapa en el borde superior del
     * navegador.
     */
    scrollCenter = () => {
        const pos = document.getElementById(this.map_selector);
        const rect = pos.getBoundingClientRect();
        const pos_center_horizontal = (pos.offsetLeft + pos.offsetWidth) / 2;
        const pos_center_vertical =  rect.top + window.scrollY;
        window.scrollTo({
            top: pos_center_vertical,
            left: pos_center_horizontal,
            behavior: "smooth"
        });
    };


    /**
     * Limpia el contenido.
     * @return {undefined}
     */
    _clearContent = () => document
        .querySelector(`.js-content${this.scope_sufix}`).innerHTML = "";


    /**
     * Abre o cierra el slider.
     * 
     */
    toggleSlider = () => { 
        if(this.no_info){
            return;
        }
        document
            .querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(e => {
                e.classList.toggle(`${this.slider_selector}--in`);
            });

        document
            .querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(panel => {
                panel.style.display = (this.isSliderOpen() ? "block" : "none");  
            });
    };


    /**
     * Hace foto en un feature.
     * @accesibility
     * @param {integer} id Id de la entrada
     * @return {undefined}
     */
    _focusOnFeature = (id) => {
        this.map.eachLayer(e => {
            if(e?.options?.id != id){
                return;
            }
            if(e?._path){
                e._path.focus();
            } else if (e?._icon){
                e._icon.focus();
            }
        });
    };


    /**
     * Ejecuta `toggleSlider()` en el onclick
     * @return {undefined} 
     */
    _clickToggleSlider = () => document
        .querySelectorAll(`.js-close-slider${this.scope_sufix}`)
        .forEach(e => e.addEventListener("click", () => {
            this._clearContent();
            this.toggleSlider();
            this._focusOnFeature(e.dataset.entryId);
        }
    ));


    /**
     * Estado del slider.
     * 
     * @return {boolean} `true` si esta abierto, `false` si esta cerrado.
     */
    isSliderOpen = () => {
        let status = [];
        const qry = document.querySelectorAll(`.js-slider${this.scope_sufix}`);
        qry.forEach(e => {
            if(e.classList.contains(`${this.slider_selector}--in`)){
                status.push(true);
            }
        });
        return status.some(e => e);
    };


    /**
     * Imprime la información del Punto Digital en el slider.
     * @param {object} data feature
     * @return {string} HTML del contenido del slider.
     */
    setContent = (data) => {
        if(this.no_info){
            return;
        }
        
        this._focusOnSlider();

        if(!this.isSliderOpen()){
            this.toggleSlider();
        }
        const html = (typeof this.template == "function") ? 
            this.template(this, data) : this.defaultTemplate(this, data);

        document
            .querySelectorAll(this.content_selector)
            .forEach(e => {
                e.innerHTML = html;
            });
        document
            .querySelectorAll(`.js-close-slider${this.scope_sufix}`)
            .forEach(e => {
                e.dataset.entryId = data[this.id];
            });      


        const [latitude, longitude] = this.entry(data[this.id]).geometry.coordinates
        this._openOnMaps(longitude, latitude);
    };


    /**
     * Foco en marker activo
     * 
     * @summary Hace foco en el slider cuando se hace *click* o 
     * *keypress* sobre un marker. La idea es que un usuario con lector 
     * de pantalla mueva el foto a la información.
     */
    _focusOnSlider = () => {
        if(this.no_info){
            return;
        }
        if(this.isSliderOpen()){
            document.querySelector(`.js-slider${this.scope_sufix}`)
                    .focus();
        } else {
                const animation = document.querySelector(
                    `div.js-slider${this.scope_sufix}`
                );
                if(animation){
                    animation.addEventListener("animationend", (event) => {
                        if(event.animationName == "open"){
                            // pach para detectar el movimiento de <details>
                            // @TODO enontrar un método distinto
                            return;
                        }
                        document
                            .querySelector(`.js-slider${this.scope_sufix}`)
                            .focus();
                    });
                }

        }
    };


    /**
     * Compila los headers
     * 
     * @summary Compila los headers pasados en el key `headers` con
     * aquellos incorporados en el key `mixing`.
     * @param {object} headers Encabezados para las entradas. 
     * @returns {object} Encabezados con la incoporación de los asignados
     * en los mixings.
     */
    setHeaders = (headers) => {
        if(![
                this.template_structure, 
                this.template_structure.mixing].every(e => e)){
            return headers;
        }

        const new_headers = this.template_structure.mixing.reduce((i, e) => {
            if(![e.key].every(i => i)){
                return;
            }
            return ({ ...i, ...({[e.key]: (e.header ? e.header : "")})});
        }, {});
        return {...headers, ...new_headers};
    };


    /**
     * Mapea los headers.
     * 
     * @return {string} key Key del item.
     */
    header = (key) => {
        return (this.headers.hasOwnProperty(key) ? this.headers[key] : key);
    };


    /**
     * Crea el bloque html para el slider.
     */
    _renderSlider = () => {
        if(!this.render_slider || this.content_outside){
            return;
        } else if(this.no_info){
            return;
        }
        document
            .querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(e => e.remove());
        const close_button = document.createElement("button");
        close_button.classList.add(
                "btn", "btn-xs", "btn-secondary", "btn-close", 
                `js-close-slider${this.scope_sufix}`);
        close_button.title = "Cerrar panel";
        close_button.setAttribute("role", "button");
        close_button.setAttribute("aria-label", "Cerrar panel de información");
        close_button.innerHTML = "<span class=\"pm-visually-hidden\">Cerrar</span>✕";

        const anchorOptions = {
            attributes: {tabindex: 0},
            id: `js-anchor-slider${this.scope_sufix}`,
            css: ['sr-only']
        };
        const anchor = this.addAnchorElement(anchorOptions);
        const content_container = document.createElement("article");
        content_container.classList.add("pm-content-container");

        const content = document.createElement("div");
        content.classList.add("pm-content", `js-content${this.scope_sufix}`);
        content.tabIndex = 0;

        content_container.appendChild(content);

        const container = document.createElement("div");
        container.style.display = "none";
        container.tabIndex = "0";
        container.setAttribute("role", "region");
        container.setAttribute("aria-live", "polite");
        container.setAttribute("aria-label", "Panel de información");
        container.classList.add("pm-container", "slider",`js-slider${this.scope_sufix}`);
        container.id = `slider${this.scope_sufix}`;
        container.appendChild(close_button);
        container.appendChild(anchor);
        container.appendChild(content_container);
        document
            .querySelector(`${this.scope_selector}.poncho-map`)
            .appendChild(container);
    };


    _removeTooltips = () => {
        let _this = this;
        this.map.eachLayer(function(layer) {
            if(layer.options.pane === "tooltipPane") {
                layer.removeFrom(_this.map);
            }
        });
    }


    /**
     * Proyecta el slider y hace zoom en el marker.
     */
    _showSlider = layer => {
        this._removeTooltips();

        if(layer.hasOwnProperty("_latlng")){
            this.map.setView(layer._latlng, this.map_anchor_zoom);
        } else if(this.fit_bounds_onevent) {
            this.map.fitBounds(layer.getBounds().pad(0.005));
        }
        layer.fireEvent("click");
    };


    /**
     * Proyecta el popUp y hace zoom en el marker.
     */
    _showPopup = (layer) => {
        if(layer.hasOwnProperty("_latlng")){
            this.markers.zoomToShowLayer(layer, () => {
                layer.openPopup();
            });
        } else {
            this.map.fitBounds(layer.getBounds().pad(0.005));
            layer.openPopup();
        }
    };


    /**
     * Borra el hash de la url
     * @returns {void}
     */
    removeHash = () => history.replaceState(null, null, ' ');


    /**
     * Si la URL tiene un valor por _hash_ lo obtiene considerandolo su id.
     * @returns {void}
     */
    hasHash = () => {
        let id = window.location.hash.replace("#", "");
        return id || false;
    };


    /**
     * Obtiene un hash, hace zoom sobre el marker y abre su popUp o 
     * el slider.
     */
    gotoHashedEntry = () => {
        let id = this.hasHash();
        if(!id){
            return;
        }
        this.gotoEntry(id);
    };


    /**
     * Muestra un marker
     * 
     * @param {string|integer} id Valor identificador del marker. 
     * @returns {undefined}
     */
    gotoEntry = id => {
        const entry = this.entry(id);
        const setAction = (layer, id, entry) => {

            if(!layer.options.hasOwnProperty("id")){
                return;
            }
            
            if(layer.options.id == id){
                this._setSelectedMarker(id, layer);

                if(this.hash){
                    this.addHash(id);
                }

                if(this.slider){
                    this._showSlider(layer, entry);
                } else {
                    this._showPopup(layer);
                }
            }
        };

        this.markers.eachLayer(layer => setAction(layer, id, entry));
        this.map.eachLayer(layer => {
            if(layer.hasOwnProperty("feature") && 
                layer.feature.geometry.type != "Point"){
                setAction(layer, id, entry);
            }
        });
    };


    /**
     * Asigna un evento en el onclick a un layer.
     * @todo Buscar un método más eficiente para lograr esto sin tener
     * que evaluar el tipo de objeto geoJSON.
     * @param {object} layer 
     */
    _setClickeable = layer => {
        layer.on("keypress click", (e) => {
            document
                .querySelectorAll(".marker--active")
                .forEach(e => e.classList.remove("marker--active"));
                
            
                ["_icon", "_path"].forEach(ele => {
                if(!e.sourceTarget.hasOwnProperty(ele)){
                    return;
                }
                e.sourceTarget[ele].classList.add("marker--active");
            });

            const content = this.entries.find(e => {
                return (e?.properties && e.properties[this.id]===layer.options.id);
            });
            this.setContent(content.properties);
        });
    };


    /**
     * Es un feature 
     * @param {object} layer Objeto Feature GeoJSON. 
     * @returns {boolean}
     */
    isFeature = layer => {
        if(!layer.hasOwnProperty("feature")){
            return false;
        }
        return true;
    };


    /**
     * Setea los features para ejecutarse en un evento onlick
     */
    _clickeableFeatures = () => {
        if(!this.reset_zoom){
            return;
        }
        this.map.eachLayer(layer => {
            if(!this.isFeature(layer) || 
                layer.feature.geometry.type == "Point" ||
                layer.feature.geometry.type == "MultiPoint"){
                return;
            } else if(layer?.feature?.properties["pm-interactive"] == "n"){
                return;
            }
            this._setClickeable(layer);
        });
    };


    /**
     * Setea los markers para ejecutarse en un evento onlick
     */
    _clickeableMarkers = () => {
        if(this.no_info){
            return;
        }
        this.markers.eachLayer(this._setClickeable)
    };


    /**
     * Setea los markers para ejecutarse en un evento onlick
     */   
    _urlHash = () => {
        if(!this.hash){
            return;
        }

        const setHash = (layer) => {
            layer.on("click", () => {
                this.addHash(layer.options.id);
            });
        }
        this.markers.eachLayer(setHash);
        this.map.eachLayer(layer => {
            if(!layer.hasOwnProperty("feature") || 
                layer.feature.geometry.type == "Point" ||
                layer.feature.geometry.type == "MultiPoint"){
                return;
            }
            setHash(layer);
        });
    };


    /**
     * Remueve un elemento de una lista.
     * @param {object} list Array de elementos
     * @param {string} key Elemento a remover 
     */
    removeListElement = (list, key) => {
        const index = list.indexOf(key);
        if(index > -1){
            list.splice(index,1);
        }
        return list;
    };


    /**
     * Titulo para el default template
     * 
     * @summary El título puede tener un formato por defecto, tomando el
     * índice de la entrada seleccionada a tal fin en `this.title`, cuya
     * asignación es general y se utiliza para otras propiedades como:
     * texto alterantivo de los markers o title de un marker.
     * 
     * También se puede especificar un title particular en la entrada
     * `template_structure.title`, ésta opción se ofrece como una 
     * alternativa que puede estar dada por el formato en el texto u
     * otras características consideradas por el editor. 
     * 
     * Por último puede recibir de: this.template_header, una función
     * que retorne un html en formato string. Es importante tener en cuenta
     * que el uso de markdown y la insersión directa de html puedo producir
     * una vulnerabilidad XSS, tenga a bien asignar cuidadosamente el 
     * uso de estas opciones. 
     * 
     * @see https://showdownjs.com/docs/xss/#strip-html-tags-is-not-enough
     * @param {object} row Entrada 
     */
    _templateTitle = (row) => {
        if(!row.hasOwnProperty(this.title)){
            return false;
        }
        const structure = this.template_structure;
        const structure_title = (structure.hasOwnProperty("title") ? 
            structure.title : false);
        const optons_title = (this.title ? this.title : false);
        // si intencionalmente no se quiere usar el titulo y se 
        // agrega la opción `false` en `template_structure.title`. 
        if(structure.hasOwnProperty("title") && 
            typeof structure.title == "boolean"){
            return false;
        } 
        // Si los dos son false, retorno false
        else if(!structure_title && !optons_title){
            return false;
        }
        // Defino el title que voy a usar.
        // template_structure.title tiene precedencia
        const use_title = (structure_title ? structure_title : optons_title);
        let title;
        if(structure?.header){
            const wrapper = document.createElement("div");
            wrapper.innerHTML = this._mdToHtml(structure.header(this, row));
            if(this.template_innerhtml){
                wrapper.innerHTML = structure.header(this, row);
            }
            title = wrapper;
        } else {
            title = document.createElement("h2");
            title.classList.add(...structure.title_classlist);
            title.textContent = row[use_title];
        }

        const header = document.createElement("header");
        header.className = "pm-header";
        header.appendChild(title);

        return header;
    };


    /**
     * Listado de keys para mostrar en una entrada del default template.
     * 
     * @summary Si el usuario configuró los valores en 
     * `template_structure.values` o `template_structure.exclude` se obtiene
     * el listado de índices, consideranto `values` con presedencia ante
     * `exclude` y retorna el objeto que se utilizará en `defaultTemplate()`.
     * @param {object} row Entrada de datos.
     * @return {object} Listado de índices seleccionados de la entrada.
     */
    _templateList = (row) => {
        const estructura = this.template_structure;
        let lista = Object.keys(row);

        let list = lista;
        if(estructura.hasOwnProperty("values") && estructura?.values?.length > 0){
            list = estructura.values;
        } else if(estructura.hasOwnProperty("exclude") && 
                estructura.exclude.length > 0){
            for(const key of estructura.exclude){
                list = this.removeListElement(lista, key);
            }
        }
        return list;
    };

    
    /**
     * Convierte un texto a MarkDwon usando la librería showdown.
     * 
     * @summary Pregunta si está incluida la librería showdown. Si está
     * la usa y convierte el string, caso contrario retorna la entrada
     * sin procesar.
     * @param {string} text Texto a convertir 
     * @returns {string}
     * @see https://showdownjs.com/
     */
    _mdToHtml = (text) => {
        if(this.template_markdown && this._markdownEnable()){
            const converter = new showdown.Converter(this.markdown_options);
            const cleannedText = secureHTML(text, this.allowed_tags);
            return converter.makeHtml(`${cleannedText}`.trim());
        }
        return text;
    }


    /**
     * Showdown habilitado.
     * 
     * Verifica si la librería _showdown_ está disponible.
     * @returns {boolean}
     */
    _markdownEnable = () => {
        if(typeof showdown !== "undefined" && 
            showdown.hasOwnProperty("Converter")){
                return true;
        }
        return false;
    } 


    /**
     * Si el usuario usó la opción mixing reformulamos la entrada.
     * 
     * @summary La opción mixing, permite concatenar el valor de los
     * índices de la entrada asignados en el índice 
     * `template_structure.mixing.values`, utilizando como separador una
     * cadena de texto asignada en el índice 
     * `template_structure.mixing.separator`
     * @param {object} row Entrada del json 
     * @returns {object}
     */
    _templateMixing = (row) => {
        if(this.template_structure.hasOwnProperty("mixing") && 
            this.template_structure.mixing.length > 0){
                const mixing = this.template_structure.mixing;

                let new_row = {}; 
                mixing.forEach(element => {
                    const {values, separator = ", ", key} = element;
                    if(typeof key === "undefined"){
                        this.errorMessage(
                            "Mixing requiere un valor en el atributo «key».",
                            "warning"
                        );
                    }
                    new_row[key] = values
                        .map(i => (i in row ? row[i] : i.toString()))
                        .filter(v => v)
                        .join(separator);
                });
                return Object.assign({}, row, new_row);
        }
        return row;
    };


    /**
     * Prepara un objeto según su tipo
     * @param {object} ele 
     * @param {object} entry 
     * @param {*} value 
     * @returns {*} De acuerdo a la entrada.
     */
    _setType = (ele, entry=false, value=false) => {
        if(typeof(ele) === "function"){
            return ele(this, entry, value);
        } 
        return ele;
    };


    /**
     * Imprime una volanta en la estructura por defecto.
     * 
     * @returns {object|boolean} Elemento html <p> o false si no 
     * fué configurado.
     */
    _lead  = (entry) => {
        if(!this.template_structure.hasOwnProperty("lead")){
            return;
        } else if(!this.template_structure.lead.hasOwnProperty("key")){
            this.errorMessage(
                "Lead requiere un valor en el atributo «key».",
                "warning"
            );
        }

        const {
            key = false, css = "small", style = false 
        } = this.template_structure.lead;

        if(!entry[key].trim()){
            return;
        }

        const p = document.createElement("p");
        p.textContent = entry[key];
        // Style definitions
        const setStyle = this._setType(style, entry);
        if(setStyle){
            p.setAttribute("style", setStyle);
        }
        // CSS Class
        const setClasslist = this._setType(css, entry);
        if(setClasslist){
            p.classList.add(...setClasslist.split(" "));
        }
        return p;
    }; 


    /**
     * Ícono para el término
     * 
     * @param {object} entry Entrada de datos. 
     * @param {string} key Key del header. 
     * @returns {object|boolean} Si existe el key retorna un objeto 
     * element de otro modo un boolean `false`.
     */
    _termIcon = (entry, key) => {
        const item = this.header_icons.find(e => e.key == key);

        if(item){
            const {css=false, style=false, html=false} = item;
            const setHtml = this._setType(html, entry, key);
            const setStyle = this._setType(style, entry, key);
            const setClasslist = this._setType(css, entry, key);

            if(setClasslist){
                const icon = document.createElement("i");
                icon.setAttribute("aria-hidden","true");
                icon.classList.add(...setClasslist.split(" "));
                if(setStyle){
                    icon.setAttribute("style", setStyle);
                }
                return icon;

            } else if (setHtml){
                const ic = document.createElement("template");
                ic.innerHTML = setHtml;
                return ic.content;
            }
        }
        return false;
    };


    /**
     * Template por defecto
     * 
     * Arma un listado de datos usando la clave y el valor del objeto
     * pasado cómo argumento. 
     * @param {object} row Entrada para dibujar un marker.
     */  
    defaultTemplate = (self, row) => {
        row = this._templateMixing(row);
        const {template_structure:structure} = this;
        const tpl_list = this._templateList(row);
        const tpl_title = this._templateTitle(row);
        const container = document.createElement("div");
        container.classList.add(... structure.container_classlist);
        const definitions = document.createElement(structure.definition_list_tag);
        definitions.classList.add(...structure.definition_list_classlist);
        definitions.style.fontSize = "1rem";

        for(const key of tpl_list){
            // excluyo los items vacíos.
            if(!row.hasOwnProperty(key) || !row[key]){
                continue;
            }
            const term = document.createElement(structure.term_tag);
            term.classList.add(...structure.term_classlist)
            const header_icon = this._termIcon(row, key);
            if(header_icon){
                term.appendChild(header_icon);
                term.insertAdjacentText("beforeend", " ");
            }
            term.insertAdjacentText("beforeend", this.header(key));
            
            const definition = document.createElement(structure.definition_tag);
            definition.classList.add(...structure.definition_classlist)
            definition.textContent = row[key];

            if(this.template_markdown){
                definition.innerHTML = this._mdToHtml(row[key]);
            } else if(this.template_innerhtml){
                definition.innerHTML = secureHTML(row[key], this.allowed_tags);
            }

            if(this.header(key) != ""){
                definitions.appendChild(term);
            }
            definitions.appendChild(definition);
        };

        const tpl_lead = this._lead(row);
        if(tpl_lead){
            container.appendChild(tpl_lead);
        }

        if(tpl_title){
            container.appendChild(tpl_title);
        }

        container.appendChild(definitions);
        return container.outerHTML;
    };


    /**
     * Icono con color Poncho.
     * 
     * @summary Retorna un marker SVG con color poncho. Por defecto se
     * utiliza el azul (primary), pero se puede cambiar el clor usando
     * el parámetro «color». Los colores están limitados a los cargados
     * en Drupal. 
     * @param {string} color Nombre del color según poncho colores. 
     * @see https://leafletjs.com/examples/custom-icons/
     * @returns {object}
     */
    icon = (color="azul") => {
        return new L.icon({
            iconUrl: `https://www.argentina.gob.ar/sites/default/files/` 
                    + `marcador-${color}.svg`,
            iconSize: [29, 40],
            iconAnchor: [14, 40],
            popupAnchor: [0, -37]
        });
    };


    /**
     * Resetea el mapa a su punto inicial por defecto.
     */
    resetView = () => this.map.setView(this.map_view, this.map_zoom);


    /**
     * Hace zoom hasta los límites de los markers
     * @return {undefined}
     */
    fitBounds = (padding=0.005) => {
        try {
            this.map.fitBounds(this.geojson.getBounds().pad(padding));
        } catch (error) {
            console.error(error);
        }
    };


    /**
     * Agrega un botón entre zoom-in y zoom-out para volver a la vista
     * original. 
     */
    _resetViewButton = () => {
        if(!this.reset_zoom){
            return;
        }

        document.querySelectorAll(
            `.js-reset-view${this.scope_sufix}`).forEach(e => e.remove());
        
        document
            .querySelectorAll(`${this.scope_selector} .leaflet-control-zoom-in`)
            .forEach(ele => {

            const icon = document.createElement("i");
            icon.classList.add("pmi", "pmi-expand");
            icon.setAttribute("aria-hidden","true");

            const buttonOptions = {
                link: "#",
                title: "Ver mapa completo",
                attributes: {role: "button"},
                aria_label: "Ver mapa completo",
                css: [
                    `js-reset-view${this.scope_sufix}`, 
                    "leaflet-control-zoom-reset"]
            };
            const button = this.addAnchorElement(buttonOptions);

            button.appendChild(icon);
            ele.after(button);
        });
    };


    /**
     * Define el objeto icon.
     * @param {object} row entrada de json 
     * @returns {object} Instancia L.icon
     */
    marker = (row) => {
        // Si marker_color no viene o es null usa el marker por defecto 
        // de Open Street Map
        if(!this.marker_color || typeof this.marker_color === "boolean"){
            return null
        }
        if(typeof this.marker_color === "string"){
            return this.icon(this.marker_color);
        } else if (typeof this.marker_color(this, row) === "string"){
            const color = this.marker_color(this, row);
            return this.icon(color);
        } else if (typeof this.marker_color === "function"){
            return this.marker_color(this, row);
        }
    };


    /**
     * Remueve los layers y limpia los markers
     * @todo buscar una función similar a `markers.clearLayers`, que 
     * abarque los features.
     */
    _clearLayers = () => {
        this.markers.clearLayers();
        this.map.eachLayer(e => {
            if(this.isFeature(e)){
                this.map.removeLayer(e);    
            }
        });
    };


    /**
     * Prepara las características del mapa y de cada uno de los markers.
     * @see https://leafletjs.com/reference.html#path
     */
    markersMap = (entries) => { 

        var _this = this;
        this._clearLayers();
        this.geojson = new L.geoJson(entries, {
            pointToLayer: function(feature, latlng) {
                const {properties} = feature;
                const icon = _this.marker(properties);
                
                let marker_attr = {};
                marker_attr.id = properties[_this.id];
                if(icon){
                    marker_attr.icon = icon;
                }
                if(_this.title){
                    marker_attr.alt = properties[_this.title];
                }
                
                const marker = new L.marker(latlng, marker_attr);
                _this.map.options.minZoom = _this.min_zoom;
                _this.markers.addLayer(marker);

                // Si el usuario eligió usar tooltip
                if(_this.tooltip && properties[_this.title]){
                    marker.bindTooltip(
                        properties[_this.title], _this.tooltip_options
                    );
                }
                
                // Si el usuario desea utilizar popUp en vez de slider.
                if(!_this.no_info && !_this.slider){
                    const html = (typeof _this.template == "function" ? 
                            _this.template(_this, properties) : 
                            _this.defaultTemplate(_this, properties));
                    marker.bindPopup(html);
                }
                
                return _this.markers;
            },
            onEachFeature: function(feature, layer){
                const {properties, geometry} = feature;
                layer.options.id = properties[_this.id];
                feature.properties.name = properties[_this.title];

                // Si el usuario eligió usar tooltip
                if(_this.tooltip && properties[_this.title] && 
                    geometry.type != "Point" && geometry.type != "MultiPoint"){
                    layer.bindTooltip(
                        properties[_this.title], _this.tooltip_options
                    );
                }
                
                if(!_this.no_info && !_this.slider && 
                    geometry.type != "Point" && geometry.type != "MultiPoint"){
                    const html = (typeof _this.template == "function" ? 
                            _this.template(_this, properties) : 
                            _this.defaultTemplate(_this, properties));
                    layer.bindPopup(html);
                }
            },
            style: function(feature) {
                const {properties} = feature;
                const setProp = (key, alternative=false) => {
                    if( properties.hasOwnProperty(key)) {
                        return properties[key];
                    } else if(alternative) {
                        return alternative; 
                    } else {
                        return _this.featureStyle[key];
                    }
                };
                return {
                    color: setProp("stroke-color", setProp("stroke")), 
                    strokeOpacity: setProp("stroke-opacity"), 
                    weight: setProp("stroke-width"), 
                    fillColor: setProp("stroke"), 
                    opacity: setProp("stroke-opacity"), 
                    fillOpacity: setProp("fill-opacity")
                };  
            }, 
            
        });
        this.geojson.addTo(this.map);  
    };


    /**
     * Setea el marker activo.
     */
    _setSelectedMarker = (id, instance) => {
        const val = {entry: this.entry(id), marker: instance};
        this.selected_marker = val;
        return val;
    };


    /**
     * Haciendo clic en un marker setea el marker como 
     * actualmente seleccionado.
     */
    _selectedMarker = () => {
        this.map.eachLayer(layer => {
            if(!this.isFeature(layer)){
                return;
            }
            layer.on("click", (e) => {
                this._setSelectedMarker(layer.options.id, layer);
            });
        });
    };


    /**
     * Crea un input hidden dentro del contenedor poncho maps.
     * 
     * @summary El input se utiliza cuando está activada la clase 
     * PonchoMapsFilter y PonchoMapSearch cuando el usuario escribe sobre
     * el imput visible se copia el texto a este input y desde ahi se
     * toma el termino a buscar o filtrar.
     */
    _hiddenSearchInput = () => {
        const search = document.createElement("input");
        search.type ="hidden";
        search.name = `js-search-input${this.scope_sufix}`;
        search.setAttribute("disabled", "disabled");
        search.id = `js-search-input${this.scope_sufix}`;
        const container = document
                .querySelectorAll(`${this.scope_selector}.poncho-map`);
        container.forEach(element => element.appendChild(search));
    }


    /**
     * Agrega atributos a los features.
     * 
     * @accesibility
     * @summary Cubre un aspecto importante de accesibilidad permitiendo
     * que el usuario navegue los markers tabulando.
     * @todo Encontrar el modo de hacerlo en la creación del feature
     * y no recorriendo cada elemento una vez creados.
     * @returns {undefined}
     */
    _setFetureAttributes = () => {
        const setAttributes = (ele, key) => {
            if(!ele.hasOwnProperty(key)){
                return;
            }
            ele[key].setAttribute(
                "aria-label", ele?.feature?.properties?.[this.title]
            );
            
            ele[key].setAttribute("tabindex", 0);
            ele[key].dataset.entryId = ele?.feature?.properties?.[this.id];
            
            if(ele?.feature?.properties?.["pm-interactive"] == "n"){
                ele[key].dataset.interactive = "n";
                ele[key].setAttribute("role", "graphics-symbol");
            } else {
                ele[key].setAttribute("role", "button");
            }
            ele[key].dataset.leafletId = ele._leaflet_id;
        };

        this.map.eachLayer(e => setAttributes(e, "_path"));
    };


    /**
     * Anclas de salto
     * 
     * @summary Anclas para creadas especialmente para la navegación
     * por tabs. 
     * @accesibility
     * @returns {objects} Objeto con las anclas.
     */
    _accesibleAnchors = () => {
        const anchors = [
            {
                selector: `${this.scope_selector} .leaflet-map-pane`, 
                id: `leaflet-map-pane${this.scope_sufix}`, 
                attributes: {
                    role: "region"
                }
            },
            {
                selector: `${this.scope_selector} .leaflet-control-zoom`,
                id: `leaflet-control-zoom${this.scope_sufix}`,
                attributes: {
                    "aria-label": "Herramientas de zoom",
                    role: "region",
                }   
            },
            {
                selector: `.js-themes-tool-button${this.scope_sufix}`,
                id: `themes-tool-button${this.scope_sufix}`,
                attributes: {
                    "aria-label": "Herramienta para cambiar de tema visual",
                    "role": "region",
                }   
            },
        ];
        anchors.forEach(entry => {
            const {selector, id, attributes} = entry;
            const element = document.querySelectorAll(selector);
            element.forEach(ele => {
                ele.id = id;
                Object
                    .entries(attributes)
                    .forEach(([key, value]) => ele.setAttribute(key, value));
            });
            
        });
        return anchors;
    };


    /**
     * Agrega anclas y enlaces para un menú accesible.
     * 
     * @accesibility
     * @summary El mapa es muy complicado de leer con un lector de 
     * pantalla. El contexto es dificil de entender. Estos enlaces 
     * ayudan a navegar dos o tres de los sectores que contienen y 
     * manejan información: los filtros, los markers y el control 
     * de zoom.
     * @todo Revisar el modo de activar el enlace para visualizar el 
     * slider cuando éste está visible. Como sugerencia se puede 
     * utilizar Aria para setear el estado, pero esto hay que 
     * chequearlo con expertos.
     * @see https://www.w3.org/WAI/standards-guidelines/aria/
     * @see https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics
     */
    _accesibleMenu = () => {
        // Remuevo instancias anteriores si existieran.
        document.querySelectorAll(`${this.scope_selector} .pm-accesible-nav`)
            .forEach(e => e.remove());

        // Anclas que se deben crear.
        const anchors = this._accesibleAnchors();

        // Enlace
        let values = [
            {
                label: "Ir a los marcadores del mapa",
                link: `#${anchors[0]["id"]}`
            },
            {
                label: "Ajustar marcadores al mapa",
                link: "#",
                css: ["js-fit-bounds"]
            },
            {
                label: "Ver mapa completo",
                link: "#",
                css: [`js-reset-view${this.scope_sufix}`]
            }
        ];

        // Agrego el botón para controlar el zoom
        if(!this.map_init_options.hasOwnProperty("zoomControl") || 
            this.map_init_options.zoomControl !== false){
            values.splice(2, 0, {
                label: "Ir al panel de zoom",
                link: `#${anchors[1]["id"]}` 
            });
        }

        // Agrego el item para cambiar temas
        if(this.theme_tool){
            values.push({
                label: "Cambiar de tema visual",
                link: `#${anchors[2]["id"]}`,
                css: [`js-themes-tool-button${this.scope_sufix}`]
            });
        }

        let accesibleMenuEndItems = [
            {
                label: "Salir del mapa",
                link: `#accesible-return-nav${this.scope_sufix}`
            }
        ];

        values = [
            ...values,
            ...this.accesible_menu_filter,
            ...this.accesible_menu_search,
            ...this.accesible_menu_extras,
            ...accesibleMenuEndItems
        ];

        // Imprimo los enlaces
        const icon = document.createElement("i");
        icon.classList.add(
            "pmi", 
            "pmi-universal-access", 
            "accesible-nav__icon"
        );
        icon.setAttribute("aria-hidden", "true");

        const nav = document.createElement("div");
        nav.classList.add("pm-accesible-nav", "top", "pm-list");
        nav.id = `pm-accesible-nav${this.scope_sufix}`;
        nav.setAttribute("aria-label", "Menú para el mapa");
        nav.setAttribute("role", "navigation");
        nav.tabIndex=0;

        const ul = document.createElement("ul");
        ul.role = "menu";
        ul.classList.add("pm-list-unstyled");

        values.forEach((links) => {
            const {label, css=[], aria_label, link} = links;

            const anchorOpts = {
                ...links,
                css:[...css, ...["pm-item-link", "pm-accesible"]], 
                attributes: {
                    role: "menuitem",
                    tabIndex: 0
                }
            };
            const a = this.addAnchorElement(anchorOpts);

            const li = document.createElement("li");
            li.role = "presentation";
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        nav.appendChild(icon);
        nav.appendChild(ul);

        // enlace de retorno
        const anchorOptions = {
            label: "Ir al menú del mapa",
            link: `#pm-accesible-nav${this.scope_sufix}`,
            id: `accesible-return-nav${this.scope_sufix}`,
            css: ["pm-item-link", "pm-accesible"],
        };
        const backToNav = this.addAnchorElement(anchorOptions);
        const returnNav = document.createElement("div");
        returnNav.classList.add("pm-accesible-nav", "bottom");
        returnNav.appendChild(icon.cloneNode(true));
        returnNav.appendChild(backToNav);

        const navigation = document.querySelectorAll(`${this.scope_selector}`);
        navigation.forEach(element => {
            element.insertBefore(nav, element.children[0]);
            element.appendChild(returnNav);
        });
        this.fit();
    };


    /**
     * Ajusta marcadores a los bordes del mapa en un onclick
     * @returns {undefined}
     */
    fit = () => document
        .querySelectorAll(`${this.scope_selector} .js-fit-bounds`)
        .forEach(e => {
            e.onclick = (event => {
                event.preventDefault();
                this.fitBounds();
        });
    });



    /**
     * Remueve elementos agregados al mapa
     */
    clearAll = () => {
        const elements = [
            `.js-filter-container${this.scope_sufix}`,
            `.js-slider${this.scope_sufix}`,
        ];
        elements.forEach(e => document
                .querySelectorAll(e)
                .forEach(i => i.remove()));
    };


    /**
     * Remueve parametros y/o el hash de una url.
     * @returns {undefined}
     */
    cleanState = () => history.replaceState(null, null, ' ');


    /**
     * Listener global
     */
    _listeners = () => {
        const _this = this;
    
        /**
         * Zoom out
         * @summary Adjusts the map markers to fit the view.
         */
        const handleResetView = (e) => {
            const resetViewButton = e.target.closest(
                    `.js-reset-view${this.scope_sufix}`);
            if (resetViewButton) {
                e.preventDefault();

                _this.cleanState();
                _this.resetView();
            }
        };

        /**
         * themes focus
         * @summary Hace foco en la herramienta para cambiar de tema.
         */
        const handleThemeToolFocus = (e) => {
            const resetViewButton = e.target.closest(
                    `.js-themes-tool-button${_this.scope_sufix}`);

            if (resetViewButton) {
                e.preventDefault();
                document
                    .querySelector(`#themes-tool-button${_this.scope_sufix}`)
                    .focus({ focusVisible: true, preventScroll: false })
            }
        };

        // mount
        document.body.addEventListener("click", handleResetView);
        document.body.addEventListener("click", handleThemeToolFocus);

        // unmount
        this.removeListeners = () => {
            document.body.removeEventListener("click", handleResetView);
            document.body.removeEventListener("click", handleThemeToolFocus);
        };
    };


    /**
     * Seteo de opciones accesibles de uso general.
     */
    _accesibleExtras = () => {
        document
            .querySelectorAll(".js-poncho-map__help")
            .forEach(e => e.setAttribute("aria-live", "polite"));
    }


    /**
     * Hace el render del mapa.
     */
    render = () => {
        this._hiddenSearchInput();
        this._resetViewButton();

        this._menuTheme();
        this._setThemes();
        
        this.tileLayer.addTo(this.map);
        this.markersMap(this.entries);
        this._selectedMarker();

        if(this.slider){
            this._renderSlider();
            this._clickeableFeatures();
            this._clickeableMarkers();
            this._clickToggleSlider();
        }

        this._urlHash();

        if(this.scroll && this.hasHash()){
            this.scrollCenter();
        }

        setTimeout(this.gotoHashedEntry, this.anchor_delay);
        
        this._setFetureAttributes();
        this._accesibleMenu();
        this._accesibleExtras();

        this.mapOpacity();
        this.mapBackgroundColor();

        this._listeners();
        this.layerViewConf.setVisuals();
        this.setMapAlignment(this.map_align);
        this._setCssVariables();
    };
};
// end class


/**
 * PONCHO MAP LOADER
 * 
 * @summary Permite incorporar a un mapa un spinner. 
 */
class PonchoMapLoader {

    constructor(options){
        const defaults = {
            selector: ".poncho-map",
            scope: "",
            timeout: 50000,
            cover_opacity: 1,
            cover_style: {},
        };
        let opts = Object.assign({}, defaults, options);
        this.scope = opts.scope;
        this.cover_opacity = opts.cover_opacity;
        this.cover_style = opts.cover_style;
        this.timeout = opts.timeout;
        this.scope_sufix = `--${this.scope}`;
        this.scope_selector = `[data-scope="${this.scope}"]`;
        this.ponchoLoaderTimeout;
        this.selector = opts.selector;
    }


    /**
     * Cierra el spinner.
     * @returns {undefined}
     */
    close = () => document
            .querySelectorAll(`.js-poncho-map__loader${this.scope_sufix}`)
            .forEach(e => e.remove());


    /**
     * Carga el spinner.
     * @returns {undefined}
     */
    load = () => {
        this.close();
        clearTimeout(this.ponchoLoaderTimeout);

        const element = document.querySelector(
                `${this.selector}${this.scope_selector}`);
        const loader = document.createElement("span");
        loader.className = "loader";

        const cover = document.createElement('div');
        cover.dataset.scope = this.selector;
        cover.classList.add(
            "poncho-map__loader", `js-poncho-map__loader${this.scope_sufix}`
        );
        // Background opacity
        Object.assign(cover.style, this.cover_style);
        if(this.cover_opacity){
            cover.style.backgroundColor = `color-mix(`
                + `in srgb, ` 
                + `transparent, `
                + `var(--pm-loader-background) `
                + `${this.cover_opacity.toString() * 100}%)`;
        }

        cover.appendChild(loader);
        element.appendChild(cover);  
        this.ponchoLoaderTimeout = setTimeout(this.remove, this.timeout);
    };


    /**
     * Loader
     * @param {integer} timeout Tiempo máximo de ejecución del loader. 
     * @returns {unde}
     */
    loader = (callback, timeout=500) => {
        this.load();
        setTimeout(() => {
            callback();
            this.remove();
        }, timeout);
    };
}