/**
 * PONCHO MAP
 *
 * @summary Generador de mapas utilizando OpenStreetMap / leafleft
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,utils.js,
 * MarkerCluster.Default.css,MarkerCluster.css
 * @see https://github.com/argob/poncho/tree/master/src/js/poncho-map
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
const PM_TRANSLATE = {
es: {
        cluster_click: "Clic para expandir grupo",
        cluster_large: "Grupo grande de {{count}} ubicaciones",
        cluster_medium: "Grupo mediano de {{count}} ubicaciones",
        cluster_small: "Grupo chico de {{count}} ubicaciones",
        filter_initial: "Hay {{total_results}} puntos en el mapa."
                        + ` <a href="#" class="{{reset_search}}"`
                        + `aria-label="Restablecer valores del mapa">`
                        + "Restablecer mapa</a>",
        filter_no_results: "No se encontraron entradas.",
        filter_no_results_by_term: "No encontramos resultados para tu búsqueda.",
        filter_one_result: "{{total_results}} resultado coincide con tu búsqueda.",
        filter_reset_values_link: ` <a href="#" class="{{reset_search}}"`
                        + `aria-label="Restablecer valores del mapa">`
                        + "Restablecer mapa</a>",
        filter_results: "{{total_results}} resultados coinciden con tu búsqueda.",
        filters_aria_label_close_panel: "Cerrar panel de filtros",
        filters_aria_label_open_close_panel: "Abre o cierra el panel de filtros",
        filters_aria_label_panel: "Panel de filtros",
        filters_aria_label_reset: "Restablecer valores del mapa",
        filters_check_all: "Marcar todos",
        filters_close_panel_text: "Cerrar panel",
        filters_has: "Se están usando filtros.",
        filters_reset: "Restablecer mapa",
        filters_uncheck_all: "Desmarcar todos",
        map_exit: "Salir del mapa",
        map_fit_bounds: "Ajustar marcadores al mapa",
        map_full_view: "Ver mapa completo",
        map_goto_markers: "Ir a los marcadores del mapa",
        map_help_us: "Ayudá a mejorar el mapa",
        openmap_aria_label: "Abrir el punto geográfico en un mapa alternativo",
        openmap_label: "Abrir en:",
        search_data: "Hacer una búsqueda",
        search_placeholder: "Su búsqueda",
        theme_aria_label_panel: "Herramienta para cambiar de tema visual",
        theme_change: "Cambiar tema del mapa",
        theme_description_contrast: "Fondo oscuro con bordes blancos.",
        theme_description_dark: "Fondo oscuro con bordes blancos de contraste medio.",
        theme_description_default: "Colores predeterminados del proveedor del mapa.",
        theme_description_grayscale: "Mapa e interfaz en tonos de gris.",
        theme_description_relax: "Paleta de colores suaves.",
        theme_name_contrast: "Alto contraste",
        theme_name_dark: "Oscuro",
        theme_name_default: "Original",
        theme_name_grayscale: "Gris",
        theme_name_relax: "Relax",
        theme_open_panel: "Abre el panel de temas",
        theme_reset: "Restablece el tema del mapa a su configuración original",
        zoom_aria_label_panel: "Herramientas de zoom",
        zoom_goto_panel: "Ir a la herramienta de zoom",
        zoom_in: "Acercar",
        zoom_out: "Alejar"
    }
};

class PonchoMap {
    constructor(data, options){
        const defaults = {
            accesible_menu_extras: [
                {
                    label: "map_help_us",
                    link: "https://www.argentina.gob.ar/sugerencias",
                    target: "_blank"
                }
            ],
            allowed_tags: [],
            anchor_delay: 0,
            map_breakpoint: {
                large: {
                    lg: {fraction: "3:10", value: 992},
                    md: {fraction: "2:7", value: 768},
                    sm: {fraction: "1:4", value: 576},
                    xl: {fraction: "2:7", value: 1200},
                    xs: {fraction: "1:1", value: 0},
                    xxl: {fraction: "2:7", value: 1400}
                },
                default: {
                    lg: {fraction: "4:10", value: 992},
                    md: {fraction: "2:6", value: 768},
                    sm: {fraction: "1:4", value: 576},
                    xl: {fraction: "2:7", value: 1200},
                    xs: {fraction: "1:1", value: 0},
                    xxl: {fraction: "2:7", value: 1400}
                }
            },
            media_breakpoint: {
                lg: 992,
                md: 768,
                sm: 576,
                xl: 1200,
                xs: 0,
                xxl: 1400
            },
            content_selector: false,
            default_themes: [
                {
                    aria_label: false,
                    code: "default",
                    description: "theme_description_default",
                    name: "theme_name_default",
                },
                {
                    aria_label: false,
                    code: "contrast",
                    description: "theme_description_contrast",
                    name: "theme_name_contrast",
                },
                {
                    aria_label: false,
                    code: "dark",
                    description: "theme_description_dark",
                    name: "theme_name_dark",
                },
                {
                    aria_label: false,
                    code: "grayscale",
                    description: "theme_description_grayscale",
                    name: "theme_name_grayscale",
                },
                {
                    aria_label: false,
                    code: "relax",
                    description: "theme_description_relax",
                    name: "theme_name_relax",
                }
            ],
            error_reporting: false,
            fit_bounds_onevent: true,
            hash: false,
            header_icons: [],
            headers: {},
            id: "id",
            id_mixing: [],
            lang: "es",
            latitud: "latitud",
            longitud: "longitud",
            map_align: "center",
            map_anchor_zoom: 16,
            map_background: "#DDD",
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
            map_layers: true,
            map_layers_default: "osm",
            map_opacity: 1,
            map_selector: "map",
            map_style: {},
            map_view: [-40.44, -63.59],
            map_zoom: 4,
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
            marker: "azul",
                marker_cluster_options: {
                maxClusterRadius: 30,
                showCoverageOnHover: false,
                spiderLegPolylineOptions: {
                    color: "#666666",
                    "fill-opacity": 0.5,
                    opacity: 0.5,
                    weight: 1
                },
                spiderfyDistanceMultiplier: 0.5,
                spiderfyOnMaxZoom: true,
                zoomToBoundsOnClick: true
            },
            min_zoom: 2,
            no_info: false,
            open_maps: false,
            open_maps_options: {
                aria_label: "openmap_aria_label",
                items:[
                    {
                        aria_label: false,
                        hreflang: "en",
                        label: "Apple maps",
                        lang: "en",
                        link: "https://maps.apple.com/?q={{latitude}},{{longitude}}",
                        platform: "mac",
                        rel: [
                            "alternate"
                        ]
                    },
                    {
                        aria_label: false,
                        hreflang: false,
                        label: "Google maps",
                        lang: "en",
                        link: "https://www.google.com/maps/search/?api=1&query={{latitude}},{{longitude}}",
                        rel: [
                            "alternate"
                        ]
                    },
                    {
                        aria_label: false,
                        hreflang: "es",
                        label: `<abbr lang="es" title="Instituto Geográfico Nacional">IGN</abbr> – ArgenMap`,
                        lang: "es",
                        link: "https://mapa.ign.gob.ar/beta/?zoom=17&lat={{latitude}}&lng={{longitude}}&layers=argenmap&marker={{latitude}},{{longitude}}",
                        rel: [
                            "alternate"
                        ]
                    },
                    {
                        aria_label: false,
                        hreflang: "en",
                        label: "Open street maps",
                        lang: "en",
                        link: "https://www.openstreetmap.org/?mlat={{latitude}}&mlon={{longitude}}#map=16/{{latitude}}/{{longitude}}",
                        rel: [
                            "alternate"
                        ]
                    }
                ],
                label: "openmap_label"
            },
            render_slider: true,
            reset_zoom: true,
            scope: "",
            scroll: false,
            slider: false,
            slider_selector: ".pm-slider",
            slider_size: false, // large | default
            summary: false,
            template: false,
            template_innerhtml: false,
            template_markdown: false,
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
            theme: "default",
            theme_map: false,
            theme_tool: true,
            theme_ui: false,
            throw_exceptions: false,
            title: false,
            tooltip: false,
            tooltip_options:{
                className: "leaflet-tooltip-own",
                direction: "auto",
                offset: [13,-18],
                opacity: 1,
                permanent: false,
                sticky: false
            }
        };

        // Assign options
        let opts = Object.assign({}, defaults, options);

        // Set variables
        this.lang = opts.lang;
        this.dictionary = PM_TRANSLATE[this.lang];
        this.error_reporting = opts.error_reporting;
        this.throw_exceptions = opts.throw_exceptions;
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
        this.slider_size = opts.slider_size;
        this.no_info = opts.no_info;
        this.reset_zoom = opts.reset_zoom;
        this.slider_selector=this._selectorName(opts.slider_selector);
        this.selected_marker;
        this.scope_selector = `[data-scope="${this.scope}"]`;
        this.scope_sufix = `--${this.scope}`;
        this.content_selector = (opts.content_selector ?
                opts.content_selector : `.js-content${this.scope_sufix}`);
        this.content_outside = (this.content_selector !==
                `.js-content${this.scope_sufix}` ? true : false);
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
            {},
            defaults.open_maps_options,
            options?.open_maps_options
        );
        this.media_breakpoint = opts.media_breakpoint;
        this.map_breakpoint = opts.map_breakpoint;
        this.map_breakpoint_fractions = opts.map_breakpoint_fractions;
        this.map_align = opts.map_align;
        this.map_style = opts.map_style;
        this.accesible_menu_extras = opts.accesible_menu_extras;
        this.summary = opts.summary;
        this.geojson;

        // Map tiles
        this.ersiURL ='https://server.arcgisonline.com/arcgis/rest/services/'
            + 'World_Imagery/MapServer/tile/{z}/{y}/{x}';
        this.osmURL = "https://mapa-ign.argentina.gob.ar/osm/{z}/{x}/{-y}.png";

        // Attribution settings
        const attributions = {
            ersi: {
                attributes: {tabindex: -1},
                hreflang: "es",
                label: `© <abbr lang="en" title="Environmental Systems Research Institute">Esri</abbr>`,
                lang: "en",
                link: "https://www.esri.com/es-es/home",
            },
            ign: {
                attributes: {tabindex: -1},
                hreflang: "es",
                label: `<abbr lang="es" title="Instituto Geográfico Nacional">IGN</abbr>`,
                lang: "es",
                link: "https://www.ign.gob.ar/AreaServicios/Argenmap/Introduccion",
            },
            leaflet: {
                attributes: {tabindex: -1},
                hreflang: "en",
                label: "Leaflet",
                lang: "en",
                link: "https://leafletjs.com/",
                title: "Biblioteca JavaScript para mapas interactivos",
            },
            osm: {
                attributes: {tabindex: -1},
                hreflang: "en",
                label: `<abbr lang="en" title="Open Street Map">OSM</abbr>`,
                lang: "en",
                link: "https://www.openstreetmap.org/copyright",
            },
        };

        // Attribution links
        const {leaflet, ersi, ign, osm} = attributions;
        this.prefix = this.addAnchorElement(leaflet, "html");
        this.ersiAttribution = `Contribuidores: `
                + `${this.addAnchorElement(ersi, "html")}`;
        this.osmAttribution = `Contribuidores: `
                + `${this.addAnchorElement(ign, "html")}, `
                + `${this.addAnchorElement(osm, "html")}`;

        // Layer set
        this.layerViewSettings = {
            satelital:{
                attribution: this.ersiAttribution,
                label: "Mapa satelital",
                tilesUrl: this.ersiURL,
                setVisuals: this._setSatelitalView,
            },
            osm:{
                attribution: this.osmAttribution,
                label: "Mapa",
                setVisuals: this._setOsmView,
                tilesUrl: this.osmURL,
            }
        };

        // Bloquea el componente si no existe leaflet.
        if (typeof L === "undefined" || !L.hasOwnProperty("map")){
            const helpLink = {
                hreflang: "en",
                label: "<em>Quick start</em>",
                lang: "en",
                link: "https://leafletjs.com/examples/quick-start/",
                target: "_blank"
            }
            this.showAlert({
                title: "No se encuentra el componenete Leaflet",
                messages: [
                    "Verifique que <strong>Leaflet</strong>, esté incluido "
                    + "en el documento HTML.",
                    `Lea las indicaciones para usar el componente leaflet `
                    + `en: ${this.addAnchorElement(helpLink, "html")}.`,
                ]
            }, "danger", true);
        }

        // Tipo de visualización
        this.layerViewConf = (this.map_layers_default == "satelital" ? 
            this.layerViewSettings[this.map_layers_default] : 
            this.layerViewSettings["osm"]);

        this.tileLayer = new L.tileLayer(this.layerViewConf.tilesUrl);
        const mapOptions = {
            renderer: L.svg(), 
            keyboard: true,
            ...this.map_init_options,
            zoomControl: false, // Desactiva el control por defecto
        };

        // Inicializa el mapa
        this.map = new L.map(this.map_selector, mapOptions);
        this.map.setView(this.map_view, this.map_zoom);
        this.map.attributionControl.setPrefix(this.prefix);

        // Redefine los valores para la herramienta zoom
        if(this.map_init_options?.zoomControl !== false){
            const customZoomControl = L.control.zoom({
                position: 'topleft',
                zoomControl: true,
                zoomInText: '+',
                zoomInTitle: this._t("zoom_in"),
                zoomOutText: '-',
                zoomOutTitle: this._t("zoom_out"),
            });
            customZoomControl.addTo(this.map);
        }

        // Si se importó el componente _markerCluster_, lo usa. De otro modo
        // Utiliza _FeatureGroup_ y muestra todos los markers simultáneamente.
        if(L.hasOwnProperty("markerClusterGroup")){
            this.markers = new  L.markerClusterGroup({
                ...this.marker_cluster_options,
                ...this.customClusters()
            });
        } else {
            this.markers = new L.FeatureGroup();
        }

        this.ponchoLoaderTimeout;
    }


    /**
     * Versión poncho
     */
    get version(){
        return "2.2.0";
    }


    /**
     * Dicionario de términos según el lenguaje.
     * 
     * @param {string} definition Clave de diccionario
     * @param {object} tpl Objeto con clave valor a reemplazar
     * @returns {string|undefined}
     */
    _t = (definition, tpl={}) => {
        if(this.isEmptyString(definition)){
            console.warn("_t", "Está recibiendo una definición vacía.");
            return definition;
        }

        if(!this.isObject(tpl)) {
            console.warn("_t", "tpl requiere un objeto clave/valor.");
            return;
        }

        const replaceDef = (this.dictionary.hasOwnProperty(definition) ? 
                this.dictionary[definition] : definition);

        return this.tplParser(replaceDef, tpl);
    };


    /**,.bv
     * Redefine los clusters
     * @returns 
     */
    customClusters = () => {
        if(!L.hasOwnProperty("divIcon")){
            return;
        }

        return {
            iconCreateFunction: (cluster) => {
                const count = cluster.getChildCount();
                let sizeClass;
                let ariaLabelText;

                if (count < 10) {
                    sizeClass = 'small';
                } else if (count < 100) {
                    sizeClass = 'medium';
                } else {
                    sizeClass = 'large';
                }

                const ariaLabels = {
                    small: this._t("cluster_small", {count}),
                    medium: this._t("cluster_medium", {count}),
                    large: this._t("cluster_large", {count}),
                };
                ariaLabelText = ariaLabels[sizeClass];
                const classNames = [
                    "leaflet-marker-icon",
                    "marker-cluster",
                    `marker-cluster-${sizeClass}`,
                    "leaflet-zoom-animated",
                    "leaflet-interactive",
                ];
                const htmlContent = `<div title="${this._t("cluster_click")}"`
                    + ` aria-label="${ariaLabelText}">`
                    + `<span>${count}</span></div>`;

                return L.divIcon({
                    html: htmlContent,
                    className: classNames.join(" "),
                    iconSize: L.point(40, 40),
                });
            }
        }
    };


    /* VALIDATORS */
    /**
     * Comprueba si un valor es un string.
     * @param {*} value El valor a comprobar.
     * @returns {boolean} Retorna `true` si el valor es un string; de 
     * lo contrario, `false`.
     */
    isString(value) {
        return typeof value === 'string';
    }

    /**
     * Comprueba si un valor es un string vacío o que solo contiene 
     * espacios en blanco.
     * @param {*} str El string a comprobar.
     * @returns {boolean} Retorna `true` si el string está vacío o es nulo; 
     * de lo contrario, `false`.
     */
    isEmptyString(str) {
        return typeof str === "string" && str.trim().length === 0;
    }

    /**
     * Comprueba si un valor es un número finito.
     * @param {*} num El valor a comprobar.
     * @returns {boolean} Retorna `true` si el valor es un número y es 
     * finito; de lo contrario, `false`.
     */
    isNumber(num) {
        return typeof num === "number" && isFinite(num);
    }

    /**
     * Valida que el input sea un objeto
     * @param {*} obj Elemento a validar  
     * @returns {boolean}
     */
    isObject(obj) {
        return typeof obj === "object" && obj !== null && !Array.isArray(obj);
    }

    /**
     * Comprueba si un valor es un objeto vacío.
     * Excluye arrays y valores nulos.
     * @param {*} obj El valor a comprobar.
     * @returns {boolean} Retorna `true` si el valor es un objeto válido y 
     * está vacío; de lo contrario, `false`.
     */
    isEmptyObject(obj) {
        if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
            return false;
        }
        return Object.keys(obj).length === 0;
    }


    /**
     * Parser de template simple
     * 
     * @param {string} value Cadena de texto a parsear
     * @param {object} kwargs Objeto con clave valor para hacer la sustitución.
     * @example
     * // returns Mi hija se llama Olivia.
     * tplParser("Mi hija se llama {{nombre}}.", {nombre:"Olivia"})
     * @returns {string} Cadena de texto con los *placeholders* reemplazados.
     */
    tplParser = (value, kwargs) => {
        if(!this.isString(value)){
            return;
        }

        if (this.isEmptyString(value)) {
            return value;
        }

        if (!this.isObject(kwargs)) {
            return;
        }
        
        if (this.isEmptyObject(kwargs)) {
            return value;
        }

        return Object.keys(kwargs).reduce(function(str, key){
            if(!kwargs.hasOwnProperty(key)){
                return;
            }
            const regex = new RegExp(
                '\\{\\{\\s{0,2}' + key + '\\s{0,2}\\}\\}', 'gm');
            str = str.replace(regex, kwargs[key]);
            return str;
        }, value);
    };


    /**
     * Especifica el tamaño del slider
     * @returns {undefined}
     */
    _setSliderSize = () => {
        if(!this.isString(this.slider_size)){
            return;
        }

        const validSizes = ['large', 'default', 'medium'];
        if (!validSizes.includes(this.slider_size)) {
            console.warn(`Invalid slider size: ${this.slider_size}. Defaulting to 'default'.`);
            this.slider_size = 'default';
        }

        const sliderElement = document.querySelector(`.poncho-map${this.scope_selector}`);
        if (sliderElement) {
            sliderElement.classList.remove(
                'slider-large', 
                'slider-default', 
                'slider-medium'
            );
            sliderElement.classList.add(`slider-${this.slider_size}`);
        }
    };


    /**
     * Define la fracción en la que puede alinearse el mapa.
     * 
     * @summary Si el usuario elige alineación: «left» o «right»; en función
     * del tamaño del mapa, elige la fracción que mejor representa el mapa
     * alineado.
     * @param {Number} mediaSize Número entero.
     * @returns {string} Fracción, ej: 1:3
     */
    _setFraction = (mediaSize) => {
        let fraction;

        // Tamaño del contenedor del mapa.
        // Si se especifica tamaño, lo usa. De otro modo accede al tamaño
        // del ancho del mapa.
        const elementSize = (this.isNumber(mediaSize) ? mediaSize : 
            document.getElementById(this.map_selector).offsetWidth);

        // obtengo el listado de breakpoints válidos.
        const validMediaBreakpoints = Object.keys(this.media_breakpoint);

        // Defino el tamaño del slider
        const sliderSize = (["large", "default"].includes(
                this.slider_size) ? this.slider_size : "default");
        const mapBrekpoint = this.map_breakpoint[sliderSize];

        // Las claves existen
        const hasValidKeys = Object
                .keys(mapBrekpoint)
                .every(entry => validMediaBreakpoints.includes(entry));

        // Si las claves están mal, muestro un error y corto la ejecución. 
        if(!hasValidKeys){
            this.showAlert({
                title: `Una o muchas claves en: `
                    + `<code>map_breakpoints</code>, no son `
                    + `claves correctas.`,
                messages: [
                    `Compruebe que las claves coincidan con alguna de `
                    + `las siguientes: `
                    + `${validMediaBreakpoints.join(", ")}.`,
                    
                ],
                terminal: mapBrekpoint
            }, "danger", true);

            return;
        }

        // Valido las definiciones por cada breakpoint
        const hasValidDefinitions = Object
                .values(mapBrekpoint)
                .every(function(entry){
                    return (typeof entry === "object" && entry !== null && 
                        'value' in entry && 'fraction' in entry);
                });

        // La validación se hace ANTES del ordenamiento
        if (!hasValidDefinitions){
            this.showAlert({
                title: "La definición de <code>map_breakpoints</code>, "
                    + "tiene errores",
                messages: [
                    "Verifique que para cada entrada existan las claves: "
                    + "`value` y `fraction`."],
                terminal: mapBrekpoint
            }, "warning");

            return; 
        }

        // Ordeno los valores de mayor a menor. 
        const sortedEntries = Object
            .entries(mapBrekpoint)
            .sort(([, a], [, b]) => b.value - a.value);

        // Verifico cual de los MAP breakpoints es el adecuado.
        for(let entry of sortedEntries){
            let [breakpoint, {value, fraction:definedFraction}] = entry;
            if(!this.isNumber(value)){
                continue;
            }

            if(elementSize >= value){
                fraction = definedFraction;
                console.table(sortedEntries)
                console.log(breakpoint, value, fraction, elementSize)
                break;
            }
        }

        return fraction || "1:1";
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
        if(!/^[0-9]{1,2}\:[0-9]{1,2}$/.test(fraction)){
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
    addAnchorElement = (options, output="object") => {
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
        const isValidLang = (this.isString(lang) &&
                regexLang.test(lang));
        const isValidHrefLang = (this.isString(hreflang) &&
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

        return output == "html" ? element.outerHTML : element;
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
     *
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

        const selector = `${this.scope_selector} .leaflet-container`;
        const mapBackgroundColor = document.querySelector(selector);

        if(mapBackgroundColor){
            mapBackgroundColor.style.background = color;
        }

        return;
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
            const selector = `${this.scope_selector} [data-theme="${item}"]`;
            document.querySelectorAll(selector).forEach(function(ele){
                if(attr == "disabled"){
                    ele.ariaHidden = "true";
                    ele.parentElement.style.display = "none";
                } else {
                    ele.removeAttribute("aria-hidden");
                    ele.parentElement.style.display = "initial";
                }
            });
        }
    };


    /**
     * Setea el estado de los CSS en los menú y en el mapa.
     * 
     * @param {Array} removeList  Lista de temas que deben removerse al 
     *                            aplicar la vista.
     * @param {string} addLayer   Esitlo para el layer que se utilizará.
     * @param {string} disabled   Agrega el atributo disabled en los botones.
     * @returns {undefined}
     */
    _setLayerTheme = (removeList, addLayer, disabled) => {
        const selector = document.querySelectorAll(this.scope_selector);
        selector.forEach(function(ele){
            ele.classList.remove(...removeList);
            ele.classList.add(addLayer);
        });
        this._disabledEnableThemes(["contrast", "dark"], disabled);

        const menuItemSelector = `${this.scope_selector} [data-theme^="layer-"]`;
        const menuitemLayerTheme = document.querySelectorAll(menuItemSelector);
        menuitemLayerTheme.forEach(function(ele){
            if(ele.dataset.theme == addLayer){
                ele.ariaCurrent = "true";
            } else {
                ele.ariaCurrent = "false";
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
        item.tabIndex = "-1";
        item.dataset.toggle="true";

        // icono del menú
        const icon = document.createElement("i");
        icon.ariaHidden = "true";
        icon.classList.add("pmi", "pmi-adjust");

        // Botón para abrir el menú.
        const button = document.createElement("button");
        button.title = this._t("theme_change");
        button.id = `themes-tool-button${this.scope_sufix}`;
        button.tabIndex = "0";
        button.classList.add("pm-btn", "pm-btn-rounded-circle");
        button.ariaHasPopup = "true";
        button.ariaControls = "menu";
        button.role = "button";
        button.ariaLabel = this._t("theme_open_panel");
        button.appendChild(icon);

        const list = document.createElement("ul");
        list.id = `list-themes-tool-button${this.scope_sufix}`;
        list.role = "menu";
        list.ariaLabelledby = `themes-tool-button${this.scope_sufix}`;
        list.classList.add(
            "pm-container", "pm-list", "pm-list-unstyled", 
            "pm-p-1", "pm-caret", "pm-caret-b", "pm-toggle", 
            "pm-accesible-menu");

        // Botón para restablecer el mapa
        const restartLinkOptions = {
            label: "Restablecer",
            attributes: {role: "menuitem", tabIndex: 0},
            aria_label: this._t("theme_reset"),
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
                attributes: {role: "menuitem",tabIndex: 0},
                datasets: {theme: code}
            };

            // Label para el botón
            const spanName = document.createElement("span");
            spanName.textContent = this._t(name);
            
            const buttonTheme = this.addAnchorElement(buttonThemeOptions);
            buttonTheme.appendChild(spanName);

            if(description){
                const small = document.createElement("small");
                small.classList.add("d-block", "small", "sr-only");
                small.textContent = this._t(description);

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
                const layersOptions = {
                    label,
                    css: ["pm-item-link", `js-${item}-layer`],
                    attributes: {role: "menuitem", tabIndex: 0},
                    datasets: {theme: `layer-${item}`},
                };
                const sateliteButton = this.addAnchorElement(layersOptions);

                const li = document.createElement("li");
                li.role = "presentation";
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

        const {items=[], label, aria_label} = this.open_maps_options;

        for(const item of items){
            const {link: templateLink, platform = "all"} = item;
            const regex = /(?=.*\{\{latitude\}\})(?=.*\{\{longitude\}\}).*/gm;
            if (platform === 'mac' && !navigator.userAgent.includes('Mac')) {
                continue;
            }
            if(!regex.test(templateLink)){
                continue;
            }

            const link = this.tplParser(templateLink, {latitude, longitude});
            const anchorOptions = {...item, link, attributes: {tabIndex: 0}};

            const a = this.addAnchorElement(anchorOptions);
            const li = document.createElement("li");
            li.appendChild(a);
            ul.appendChild(li);
        }

        const summary = document.createElement("summary");
        summary.textContent = this._t(label);
        summary.tabIndex = 0;
        summary.ariaLabel = this._t(aria_label);

        const details = document.createElement("details");
        details.classList.add("blank");

        const container = document.createElement("footer");
        container.className = "pm-open-map";
        
        const parentSelector = `.js-content${this.scope_sufix}`;
        const parentNode = document.querySelector(parentSelector);

        details.appendChild(summary);
        details.appendChild(ul);
        container.appendChild(details);
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
        const lat = (this.isString(latitude) ? 
            parseFloat(latitude) : latitude);
        const lng = (this.isString(longitude) ? 
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
            this.showAlert(
                {
                    title: "No se puede visualizar el mapa, el documento está vacío",
                    messages: [
                        "Es posible que el documento esté vacío.",
                        "Verifique el formato del documento JSON o GeoJSON."
                    ]
                }, 
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
    showAlert = (entry, type, block=false) => {
        if(!this.isObject(entry)){
            console.error("showAlert", "Espera un objeto de tipo clave/valor.");
            return;
        }

        // 1. Validación
        if(this.isEmptyObject(entry)){
        // if(typeof entry === "object" && Object.keys(entry).length === 0){
            console.error("No se encontraron las claves: title o messages.");
            return;
        }

        if(!["danger", "warning", "info"].includes(type)){
            type = "danger";
        }

        // Contenedor de errores
        let logContainer = document
                .querySelector(`#log-container${this.scope_sufix}`);
        if(!logContainer){
            logContainer = document.createElement("div");
            logContainer.role = "alert";
            logContainer.id = `log-container${this.scope_sufix}`;

            // Ubico el contenedor de logs antes del
            const node = document.querySelector(
                `${this.scope_selector}.poncho-map`
            );
            node.parentNode.insertBefore(logContainer, node);
        }
        logContainer.innerHTML = "";

        // Contenedor de alerta
        let container = document.createElement("div");
        container.classList.add(
            `js-error-message${this.scope_sufix}`, 
            "poncho-map--message", 
            type);

        // Título de la alerta
        const heading = document.createElement("h2");
        heading.classList.add("pm-visually-hidden", "sr-only");
        heading.textContent = "Registro de errores en el mapa";

        // Mensajes
        const {title, messages=[], terminal=false} = entry;
        if(!this.isEmptyString(title)){
            const messageLabel = document.createElement("p");
            messageLabel.innerHTML = title;
            // Agrego el título al contenedor.
            container.appendChild(messageLabel);
        }

        if(Array.isArray(messages) && messages.length > 0){
            const contentList = document.createElement("ul");
            for(let item of messages){
                const contentListItem = document.createElement("li");
                contentListItem.innerHTML = item;
                contentList.appendChild(contentListItem);
            }

            // Agrego listado de sugerencias al contenedor
            container.appendChild(contentList);
        }

        if(terminal){
            const detailsContainer = document.createElement("div");
            detailsContainer.classList.add("console-message-container");
            
            const details = document.createElement("details");
            details.classList.add("caret-small", "caret-dark");
            
            const summary = document.createElement("summary");
            summary.textContent = "Mensaje";

            const consoleContainer = document.createElement("div");
            consoleContainer.classList.add("console");

            const showConsole = document.createElement("code");
            showConsole.innerHTML = JSON.stringify(terminal);

            // APPEND
            consoleContainer.appendChild(showConsole);
            details.appendChild(summary);
            details.appendChild(consoleContainer);
            detailsContainer.appendChild(details);
            // Agrego el mensaje terminal al contenedor
            container.appendChild(detailsContainer);
        }

        // Imprimo el error en la página
        if(this.error_reporting || block) {
            logContainer.appendChild(heading);
            logContainer.appendChild(container);

            if(this.throw_exceptions || block){
                document.getElementById(this.map_selector).remove();
                throw new Error(JSON.stringify(entry));
            }
        }

        // Imprimo el error en la consola
        console.error( JSON.stringify(entry) );
    };


    /**
     * Compone un _feature_ GeoJSON
     * 
     * @param {object} entry Entrada JSON
     * @returns {object} Objeto con formato geoJSON feature.
     */
    feature = (entry) => {
        if(![this.latitude, this.longitude].every(k => Object.keys(entry).includes(k))){
            this.showAlert(
                {
                    title: `La entrada debe incluir las claves para latitud y longitud.`,
                    terminal: entry
                },
                "warning"
            ); 
            return;
        }

        const latitude = entry[this.latitude];
        const longitude = entry[this.longitude];
        
        if(!this.validateCoordinates(latitude, longitude)){
            this.showAlert(
                {
                    title: `El documento JSON contiene errores en la definición de `
                        + `latitud y longitud.`,
                    messages: [
                        `Corrobore que los valores de las claves para `
                            + `<code>latitud</code> `
                            + `(${this.latitude}) y <code>longitud</code> `
                            + `(${this.longitude}), no estén vacíos.`,
                        "Revise que el separador de decimales sea un punto y no una coma.",
                        "Verifque que los rangos de latitud y longitud sean correctos."
                    ],
                    terminal: entry
                },
                "warning"
            ); 
        };

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
            this.id_mixing.length > 0 || typeof this.id_mixing === 'function');


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
            if(entry.properties.hasOwnProperty(val)){
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
        if (!entries || !Array.isArray(entries.features)) {
            return entries;
        }

        const firstEntry = entries.features[0];
        const hasId = firstEntry?.properties.hasOwnProperty("id");


        const isIdMixingEnabled = this._isIdMixing();

        // Si no se configuró id_mixing y el json tiene id.
        if(!isIdMixingEnabled && hasId){
            return entries;
        }

        for (let i = 0; i < entries.features.length; i++) {
            const entry = entries?.features[i];
            if(!entry){
                continue;
            }

            const {properties} = entry;

            if (isIdMixingEnabled) {
                // Procesa la opción de id_mixing
                properties.id = this._idMixing(entry);
            } else {
                // Genera un ID automático
                const autoId = i + 1;
                const useTitle = properties[this.title] ?
                    this._slugify(properties[this.title]) : "";
                properties.id = [autoId, useTitle].filter(Boolean).join('-');
            }
        }

        return entries;
    };


    /**
     * Agrega el hash en la barra de url.
     * 
     * @param {string|integer} value
     * @return {undefined}
     */
    addHash = (value) => {
        if (this.isEmptyString(value)) {
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


    searchEntries = (searchTerm, dataset) => {
        const dataToSearch = dataset || this.geoJSON;

        if(this.isEmptyString(searchTerm)){
            console.info("searchEntries", "Término vacío.");
            return dataToSearch;
        }

        // Término de búsqueda sanitizado
        // Sin acéntos o caracteres especiales.
        const sanitizedSearchTerm = 
                replaceSpecialChars(searchTerm).toUpperCase();

        // Armo un array con los índices de búsqueda
        const searchFields = new Set([...[this.title], ...this.search_fields]);

        const entries = dataToSearch.filter(entry => {
            return this.searchEntry(
                sanitizedSearchTerm, 
                entry.properties,
                searchFields
            );
        })

        return entries;
    };


    /**
     * Busca un término en una entrada
     * 
     * @param {string} searchTerm Término a buscar
     * @param {object} entry Entrada de datos
     * @see searchEntries()
     * @returns {object|null}
     */
    searchEntry = (sanitizedSearchTerm, entry, searchFields=[]) => {
        if (!sanitizedSearchTerm) {
            return entry;
        }

        if(searchFields.length < 1){
            return entry;
        }

        const result = [...searchFields].some(function(key){
            if (!entry.hasOwnProperty(key)) {
                return false;
            }

            const field = replaceSpecialChars(entry[key])
                    .toString()
                    .toUpperCase();
            return field.includes(sanitizedSearchTerm);
        });

        return result ? entry : false;
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
     * Hace foco en un feature.
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
        .forEach(e => e.addEventListener("click", (event) => {
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
        const qry = document.querySelectorAll(`.js-slider${this.scope_sufix}`);
        return Array
            .from(qry)
            .some(e => e.classList.contains(`${this.slider_selector}--in`));
    };


    /**
     * Imprime la información en el slider.
     * 
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
                e.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "auto"
                }); 
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

        const animationSelector = `.js-slider${this.scope_sufix}`;
        const sliderElement = document.querySelector(animationSelector);

        if (!sliderElement) {
            return;
        }

        if(this.isSliderOpen()){
            sliderElement.focus();
            return;
        }

        sliderElement.addEventListener("animationend", (event) => {
            if (event.animationName === "open") {
                // pach para detectar el movimiento de <details>
                // @TODO enontrar un método distinto
                return;
            }
            sliderElement.focus();
        }, { once: true });
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
        const mixing = this.template_structure?.mixing ?? [];

        const additionalHeaders = mixing.reduce((accumulator, item) => {
            const key = item.key;
            
            if (key) {
                accumulator[key] = item.header ?? "";
            }
            return accumulator;
        }, {});
        
        return { ...headers, ...additionalHeaders };
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
        // 1. Validación
        if (!this.render_slider || this.content_outside || this.no_info) {
            return;
        }

        // 2. Limpieza (eliminando sliders existentes)
        document
            .querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(e => e.remove());

        // 3. Creación y configuración de elementos
        // Contenedor principal del slider
        const container = document.createElement("dialog");
        container.id = `slider${this.scope_sufix}`;
        container.classList.add(
            "pm-container",
            "pm-slider",
            `js-slider${this.scope_sufix}`
        );
        container.style.display = "none";
        container.role = "region";
        container.ariaLive = "polite";
        container.ariaLabel = "Panel de información";

        // Icono para el botón 
        const icon = document.createElement("i");
        icon.classList.add("pmi", "pmi-close");
        icon.ariaHidden = "true";
        
        // Botón para cerrar el slider
        const closeButton = document.createElement("button");
        closeButton.classList.add(
            "btn",
            "pm-btn-xs",
            "btn-secondary",
            "pm-btn-close", 
            `js-close-slider${this.scope_sufix}`
        );
        closeButton.setAttribute("autofocus", "autofocus");
        closeButton.title = "Cerrar panel";
        closeButton.role = "button";
        closeButton.tabIndex = 0;
        closeButton.ariaLabel = "Cerrar panel de información";

        // Enlace anchor.
        const anchorOptions = {
            attributes: {tabIndex: 0},
            id: `js-anchor-slider${this.scope_sufix}`,
            css: ['sr-only']
        };
        const anchor = this.addAnchorElement(anchorOptions);

        // Contenedor del contenido
        const contentContainer = document.createElement("article");
        contentContainer.classList.add("pm-content-container");
        contentContainer.role = "article";

        // Contenido
        const content = document.createElement("div");
        content.classList.add("pm-content", `js-content${this.scope_sufix}`);
        content.tabIndex = 0;
        
        // 4. Append
        contentContainer.appendChild(content);
        closeButton.appendChild(icon);
        container.appendChild(closeButton);
        // container.appendChild(anchor);
        container.appendChild(contentContainer);

        // 5. Inserción en el DOM
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
    _setClickeable = (layer) => {
        layer.on("click keypress", (event) => {
            // Borro la clase activa de los markers.
            document
                .querySelectorAll(".marker--active")
                .forEach(ele => ele.classList.remove("marker--active"));

            // Le agrego la clase activa al marker.         
            const targetElement = (event.sourceTarget._icon || 
                    event.sourceTarget._path);
            
            if (targetElement) {
                targetElement.classList.add('marker--active');
            }

            // Busco el contenido correspondiente para actualizar.
            const content = this.entries.find(
                (entry) => entry?.properties?.[this.id] === layer.options.id
            );

            if (content) {
                this.setContent(content.properties);
            }
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
            layer.on("keypress click", () => {
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
        // 1. Validar y usar 'values' si están definidos
        if (this.template_structure?.values?.length) {
            return this.template_structure.values;
        }

        // 2. Si no hay 'values', obtener todas las claves de 'row'
        let list = Object.keys(row);

        // 3. Si hay 'exclude', eliminar las claves de la lista
        if (this.template_structure?.exclude?.length) {
            const excludedKeys = new Set(this.template_structure.exclude);
            list = list.filter(key => !excludedKeys.has(key));
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
        if (!this.template_markdown || !this._markdownEnable()) {
            return text;
        }

        const converter = new showdown.Converter(this.markdown_options);
        const cleanedText = secureHTML(text, this.allowed_tags);
        return converter.makeHtml( String(cleanedText).trim() );
    };


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

                let customRow = {}; 
                mixing.forEach(element => {
                    const {values, separator = ", ", key, template} = element;
                    
                    if(typeof key === "undefined"){
                        this.showAlert({
                                title: "Mixing requiere un valor en " 
                                    + "el atributo «key».",
                                terminal: element
                            },
                            "warning"
                        );
                    }

                    if(!this.isEmptyString(template)){
                        customRow[key] = this.tplParser(template, row);
                    } else {
                        customRow[key] = values
                            .map(i => (i in row ? row[i] : i.toString()))
                            .filter(Boolean)
                            .join(separator);
                    }

                });
                return Object.assign({}, row, customRow);
        }
        return row;
    };


    /**
     * Prepara un objeto según su tipo
     * 
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
     * Retorna un listado de selectores css.
     * 
     * @param {string|array} value 
     * @example _setClassList(["agustin, ,,, bouillet amor,", "olivia",'##.', ".#emilia"])
     * //[ "agustin", "bouillet", "amor", "olivia", "emilia" ]
     * @returns {array|undefined}
     */
    _setClassList = (value) => {
        // Regex. 
        // Admite errores como agregar:`,`, `.`, `#` y `[space]`.
        const spliter = str => String(str).split(/\s|\,|\#|\./).filter(Boolean);
        
        if (this.isString(value)) {
            return spliter(value);
        } else if(Array.isArray(value) && value.length > 0 ){
            return value.flatMap(m => spliter(m));
        }
        return [];
    }


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
            this.showAlert(
                {
                    title: "Lead requiere la clave «key»",
                    messages: [
                        "En la sección de configuraciones verifique que, "
                        + "dentro de <code>template_structure</code>, la "
                        + "entrada <code>lead</code> contenga la clave "
                        + "<code>key</code>.",
                        "Compruebe que la clave esté escrita de forma "
                        + "correcta y que no haya espacios o caracteres "
                        + "inválidos."
                    ],
                    terminal: this.template_structure.lead
                },
                "warning"
            );
            return;
        }

        const {
            key, css="small", style=false
        } = this.template_structure.lead;

        if(!entry.hasOwnProperty(key)){
            return;
        }

        const p = document.createElement("p");
        p.textContent = entry[key];
        // Style definitions
        const setStyle = this._setType(style, entry);

        if(setStyle){
            this._setStyle(p, setStyle);
        }
        // CSS Class
        const setClasslist = this._setClassList(this._setType(css, entry));
        if(setClasslist){
            p.classList.add(...setClasslist);
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
            const setClasslist = this._setClassList(
                this._setType(css, entry, key));

            if(setClasslist){
                const icon = document.createElement("i");
                icon.setAttribute("aria-hidden","true");
                icon.classList.add(...setClasslist);

                if(setStyle){
                    this._setStyle(icon, setStyle);
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
            // console.error("fitBounds", error);
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

        document
            .querySelectorAll(`.js-reset-view${this.scope_sufix}`)
            .forEach(e => e.remove());
        
        document
            .querySelectorAll(`${this.scope_selector} .leaflet-control-zoom-in`)
            .forEach(ele => {

            const icon = document.createElement("i");
            icon.classList.add("pmi", "pmi-expand");
            icon.ariaHidden = "true";

            const buttonOptions = {
                link: "#",
                title: this._t("map_full_view"),
                attributes: {role: "button", tabIndex: 0},
                aria_label: this._t("map_full_view"),
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
        if(this.isString(this.marker_color)){
            return this.icon(this.marker_color);
        } else if (this.isString(this.marker_color(this, row))){
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
                
                if(properties.hasOwnProperty("pm-interactive") && 
                    properties["pm-interactive"] === "n"){
                    layer.options.interactive = false;
                }

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
        const container = document
                .querySelector(`${this.scope_selector}.poncho-map`);
        
        if (!container) {
            console.error(
                `Contenedor no encontrado: ${this.scope_selector}.poncho-map`);
            return;
        }

        const search = document.createElement("input");
        search.type = "hidden";
        search.name = `js-search-input${this.scope_sufix}`;
        search.id = `js-search-input${this.scope_sufix}`;
        search.disabled = true;

        container.appendChild(search);
    };


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
        const { title, id } = this;
        
        this.map.eachLayer(layer => {
            const { _path, feature, _leaflet_id } = layer;
            if (!feature || !_path) {
                return;
            }
            const { properties } = feature;
            const isInteractive = properties?.["pm-interactive"] !== "n";

            Object.assign(_path, {
                'aria-label': properties?.[title],
                'tabIndex': (properties["pm-interactive"] === "n" ? -1 : 0),
                'data-entry-id': properties?.[id],
                'data-leaflet-id': _leaflet_id,
                'data-interactive': isInteractive ? null : "n",
                'role': isInteractive ? "button" : "graphics-symbol"
            });
        });
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
                    tabIndex: 0,
                    role: "region"
                }
            },
            {
                selector: `${this.scope_selector} .leaflet-control-zoom`,
                id: `leaflet-control-zoom${this.scope_sufix}`,
                attributes: {
                    "aria-label": this._t("zoom_aria_label_panel"),
                    role: "region",
                    tabIndex: 0,
                }   
            },
            {
                selector: `.js-themes-tool-button${this.scope_sufix}`,
                id: `themes-tool-button${this.scope_sufix}`,
                attributes: {
                    "aria-label": this._t("theme_aria_label_panel"),
                    "role": "region",
                    tabIndex: 0,
                }   
            },
        ];

        anchors.forEach(entry => {
            const { selector, id, attributes } = entry;
            const element = document.querySelector(selector);
            
            if (element) {
                element.id = id;
                for (const key in attributes) {
                    element.setAttribute(key, attributes[key]);
                }
            }
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
                label: this._t("map_goto_markers"),
                link: `#${anchors[0]["id"]}`
            },
            {
                label: this._t("map_fit_bounds"),
                link: "#",
                css: ["js-fit-bounds"]
            },
            {
                label: this._t("map_full_view"),
                link: "#",
                css: [`js-reset-view${this.scope_sufix}`]
            }
        ];

        // Agrego el botón para controlar el zoom
        if(!this.map_init_options.hasOwnProperty("zoomControl") || 
            this.map_init_options.zoomControl !== false){
            values.splice(2, 0, {
                label: this._t("zoom_goto_panel"),
                link: `#${anchors[1]["id"]}` 
            });
        }

        // Agrego el item para cambiar temas
        if(this.theme_tool){
            values.push({
                label: this._t("theme_change"),
                link: `#${anchors[2]["id"]}`,
                css: [`js-themes-tool-button${this.scope_sufix}`]
            });
        }

        let accesibleMenuEndItems = [
            {
                label: this._t("map_exit"),
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
        icon.ariaHidden = "true";

        const nav = document.createElement("div");
        nav.classList.add("pm-accesible-nav", "top", "pm-list");
        nav.id = `pm-accesible-nav${this.scope_sufix}`;
        nav.ariaLabel = "Menú para el mapa";
        nav.role = "navigation";
        nav.tabIndex=0;

        const ul = document.createElement("ul");
        ul.role = "menu";
        ul.classList.add("pm-list-unstyled");

        values.forEach((links) => {
            const {label, css=[], aria_label, link} = links;

            const anchorOpts = {
                ...links,
                label: this._t(label),
                aria_label: this._t(aria_label),
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
            attributes: {tabIndex: 0}
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
            .forEach(e => e.ariaLive = "polite");
    }


    /**
     * Agrega un summary para identificar el propósito del mapa
     * 
     * @summary Si el mapa no tiene un título que define su propósito, 
     * agregando summary se vincula el id del summary con el mapa.
     */
    _addSummary = () => {
        if(
            this.isEmptyObject(this.summary) || 
            this.isEmptyString(this.summary)){
            return;
        }
        
        let summary;
        let isObject = false;

        // Si es un string
        if(this.isString(this.summary)){
            summary = this.summary;
        } else if(
            this.isObject(this.summary) && 
            this.summary.hasOwnProperty("title")){
            isObject = true;
            summary = this.summary.title;
        }

        const selector = `.poncho-map${this.scope_selector}`;
        const element = document.querySelector(selector);
        if(!element){
            return;
        }

        const id = `summary_${this.map_selector}`;
        const elementParent = element.parentNode;

        if (element.ariaLabelledby !== id) {
            element.setAttribute("aria-labelledby", id);
        }

        // Creo el elemento
        const p = document.createElement("p");
        p.textContent = summary;
        p.id = id;
        p.classList.add("pm-summary");

        if(isObject){
            const {style, css, position="top", hidden=false} = this.summary;
            p.classList.add( ...this._setClassList(css) );
            this._setStyle(p, style);

            if(hidden){
                p.className = "pm-visually-hidden";
            }

            if(position == "bottom"){
                elementParent.insertBefore(p, element.nextSibling);
                return;
            }
        }

        elementParent.insertBefore(p, element);
    };


    /**
     * Asigna definciones de estilo a un objeto.
     * 
     * @param {*} values 
     * @returns {object}
     */
    _setStyle = (obj, values) => {
        if(!values){
            return;
        }

        if(!this.isObject(obj) || !obj instanceof HTMLElement){
            this.showAlert({
                title: "La función <code>_setStyle</code>, debe recibir un "
                    + "objeto <code>HTMLElement</code>.",
                terminal: [typeof obj, obj]
            }, "danger", true);
            return;
        }

        const regex = /([^;:]+)\s*\:\s*([^;:]+)/;
        if(
            this.isString(values) && 
            !(this.isEmptyString(values) || values.match(regex))){

            this.showAlert({
                title: "La función <code>_setStyle</code>, debe recibir un "
                    + "objeto del tipo clave/valor o una cadena de texto"
                    + " con una sintaxis CSS.",
                terminal: [typeof values, values]
            }, "danger", true);
            return;
        }

        // Si se pasa por parámetro un objeto, lo usa directamente.
        if(this.isObject(values) && !this.isEmptyObject(values)){
            for(const key in values){
                if (values.hasOwnProperty(key)) {
                    obj.style[key] = values[key];
                }
            }
            return;
        }

        // Si values es un string lo parseo
        var styles = {};
        for(let entry of values.split(";")){
            const m = regex.exec(entry);
            if(!m){
                continue;
            }
            const [,attribute, value] = m.map(ele => ele.trim());
            styles[attribute] = value;
        }

        return Object.assign(obj.style, styles);
    };


    /**
     * Hace el render del mapa.
     */
    render = () => {
        this._addSummary();

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

        this._setSliderSize();
        this.mapOpacity();
        this.mapBackgroundColor();

        this._listeners();
        this.layerViewConf.setVisuals();
        this.setMapAlignment(this.map_align);
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
            "poncho-map__loader", 
            `js-poncho-map__loader${this.scope_sufix}`
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