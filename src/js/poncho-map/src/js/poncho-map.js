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
            title: false,
            id: "id",
            id_mixing: [],
            template: false,
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
                ["default", "Original"], 
                ["contrast", "Alto contraste"],
                ["dark", "Oscuro"],
                ["grayscale", "Gris"],
                // ["sepia", "Sepia"],
                // ["blue", "Azul"],
                ["relax", "Relax"]
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
            accesible_menu_extras: [
                {
                    text: "Ayudá a mejorar el mapa",
                    anchor: "https://www.argentina.gob.ar/sugerencias",
                }
            ],
            open_maps: false,
            open_maps_options: {
                label: "Abrir en:",
                items: [
                    {
                        link: 'https://www.google.com/maps/search/?api=1&query={{latitude}},{{longitude}}',
                        label: "Google maps",
                        lang: "en",
                        rel: "alternate",
                    },
                    {
                        link: "https://maps.apple.com/?q={{latitude}},{{longitude}}",
                        label: "Apple maps",
                        lang: "en",
                        rel: "alternate",
                        plataform: "mac"
                    },
                    {
                        link: "https://www.openstreetmap.org/?mlat={{latitude}}&mlon={{longitude}}#map=16/{{latitude}}/{{longitude}}",
                        label: "Open street maps",
                        lang: "en",
                        rel: "alternate",
                    },
                ]
            }
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
        this.featureStyle = {
            stroke: "dodgerblue",
            "stroke-opacity": 1,
            "stroke-width": 2,
            "fill-opacity": 0.5
        };
        this.accesible_menu_search = [];
        this.accesible_menu_filter = [];
        this.open_maps = opts.open_maps;
        // this.open_maps_options = opts.open_maps_options;

        // let opts = Object.assign({}, defaults, options);
        this.open_maps_options = Object.assign(
            {}, defaults.open_maps_options, options?.open_maps_options);

        this.accesible_menu_extras = opts.accesible_menu_extras;
        this.geojson;

        // OSM
        this.map = new L.map(this.map_selector, {
            renderer: L.svg(),
            ...this.map_init_options
        }
        ).setView(this.map_view, this.map_zoom);
        this.titleLayer = new L.tileLayer(
            "https://mapa-ign.argentina.gob.ar/osm/{z}/{x}/{-y}.png",
            { 
                attribution: (`Contribuidores: `
                    + `<a hreflang="es" href="https://www.ign.gob.ar/AreaServicios/Argenmap/Introduccion">`
                    + `<abbr lang="es" title="Instituto Geográfico Nacional">IGN</abbr></a>, `
                    + `<a hreflang="es" href="https://www.openstreetmap.org/copyright">`
                    + `OpenStreetMap</a>`)
            });

        // Si se importó el componente _markerCluster_, lo usa. De otro modo
        // Utiliza _FeatureGroup_ y muestra todos los markers simultáneamente.
        if(L.hasOwnProperty("markerClusterGroup")){
            this.markers = new L.markerClusterGroup(this.marker_cluster_options);
        } else {
            this.markers = new L.FeatureGroup();
        }
        this.ponchoLoaderTimeout;
    }


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
        document
            .querySelectorAll(
                `${this.scope_selector} .leaflet-pane .leaflet-tile-pane`)
            .forEach(e => e.style.opacity=opacity);
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
     * Crea el menú para cambiar de temas
     * @returns {undefined} 
     */
    _menuTheme = () => {
        if(!this.theme_tool){
            return;
        }
        document
        .querySelectorAll(`#themes-tool${this.scope_sufix}`)
        .forEach(ele => ele.remove());

        const navContainer = document.createElement("ul");
        navContainer.classList.add(
            "pm-list-unstyled", "pm-list",
            "pm-tools",
            `js-themes-tool${this.scope_sufix}`
        );


        const item = document.createElement("li");
        item.setAttribute("tabindex", "-1");
        item.dataset.toggle="true";

        const icon = document.createElement("i");
        icon.setAttribute("aria-hidden", "true");
        icon.classList.add("pmi", "pmi-adjust");

        const button = document.createElement("button");
        button.title = "Cambiar tema";
        button.id = `themes-tool-button${this.scope_sufix}`;
        button.tabIndex = "0";
        button.classList.add("pm-btn", "pm-btn-rounded-circle");
        button.appendChild(icon);
        button.setAttribute("role", "button");
        button.setAttribute("aria-label", "Abre el panel de temas");

        const list = document.createElement("ul");
        list.classList.add(
            "pm-container", "pm-list", "pm-list-unstyled", 
            "pm-p-1", "pm-caret", "pm-caret-b", "pm-toggle");

        // Botón para restablecer el mapa
        const restart = document.createElement("button");
        restart.textContent = "Restablecer";
        restart.classList.add("pm-item-link", "js-reset-theme");
        const li = document.createElement("li");
        li.classList.add("pm-item-separator");
        li.appendChild(restart);
        list.appendChild(li);

        this.default_themes.map(m => m[0]).forEach((value, key)  => {
            const buttonTheme = document.createElement("button");
            buttonTheme.dataset.theme = value;
            buttonTheme.textContent = this.default_themes[key][1];
            buttonTheme.classList.add("js-set-theme", "pm-item-link");
            
            const li = document.createElement("li");
            li.appendChild(buttonTheme);

            list.appendChild(li);
        });

        item.appendChild(button);
        item.appendChild(list);
        navContainer.appendChild(item)

        const element = document.querySelectorAll(this.scope_selector);
        element.forEach(e => e.appendChild(navContainer));

        // listeners
        document
            .querySelectorAll(".js-reset-theme")
            .forEach(ele => ele.addEventListener(
                "click", () => {
                    localStorage.removeItem("mapTheme");
                    this._removeThemes();
                    this._setThemes();
                })
            );

        document
            .querySelectorAll(".js-set-theme")
            .forEach(ele => ele.addEventListener(
                "click", () => {
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
    _setThemeStyles = (theme=false, prefix=["ui", "map"]) => prefix.map(m => {
        return (["ui", "map"].includes(m) ? `${m}-${theme}` : false);
    });


    /**
     * Remueve los estilos de tema
     * @param {object} prefix Lista de prefijos. ui o map 
     * @returns {undefined}
     */
    _removeThemes = (prefix=["ui", "map"]) => {
        const element = document.querySelectorAll(this.scope_selector);
        element.forEach(ele => {
            [
                ...this.default_themes,
                ...this.temes_not_visibles
            ].map(m => m[0]).forEach(th => {
                ele.classList.remove(...this._setThemeStyles(th, prefix));
            });
        });
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


    plataform = () => {
        var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
        var isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
        var isIOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);
        };


    /**
     * Abre las coordenadas en varios servicios de mapas configurados
     * 
     * @param {number|string} latitude - Latitud de la ubicación
     * @param {number|string} longitude - Longitud de la ubicación
     * @returns {HTMLElement|null} - El contenedor creado o null si no se pudo crear
     */
    _openOnMaps = (latitude, longitude) => {
        if(typeof this.open_maps != "boolean" || !this.open_maps){
            console.debug("Función de mapas desactivada");
            return;
        }

        if(!this.validateCoordinates(latitude, longitude)){
            console.warn(
                `Coordenadas inválidas: lat=${latitude}, lng=${longitude}`);
            return;
        }

        const ul = document.createElement("ul");
        ul.className = "list-unstyled";

        const {items=[], label} = this.open_maps_options;

        if(items.length > 0){
            for(const item of items){
                const {link, label, lang, rel, plataform="all", target} = item;
                const regex = /(?=.*\{\{latitude\}\})(?=.*\{\{longitude\}\}).*/gm;
                const regexTarget = /(_self|_blank|_parent|_top)/;

                if(!navigator.userAgent.includes('Mac') && plataform == "mac"){
                    continue;
                }

                if(!regex.test(link)){
                    continue;
                }

                const a = document.createElement("a");
                const setAnchor = link
                    .replace(/\{\{latitude\}\}/g, latitude)
                    .replace(/\{\{longitude\}\}/g, longitude);
                a.href = setAnchor;
                a.textContent = label; 
                a.setAttribute("lang", lang); 
                a.rel = rel;
                if(typeof target == "string" && regexTarget.test(target.trim())){
                    a.target = target;
                }

                const li = document.createElement("li");
                li.appendChild(a);
                ul.appendChild(li);
            }
        }

        const summary = document.createElement("summary");
        summary.textContent = label;

        const details = document.createElement("details");
        details.appendChild(summary);
        details.appendChild(ul);

        const container = document.createElement("div");
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


        const mapIcon = document.createElement("i");
        mapIcon.classList.add(
            "icono-arg-mapa-argentina", "poncho-map--message__icon"
        );

        const title = document.createElement("h2");
        title.classList.add("h6", "title", "pm-visually-hidden");
        title.textContent = "¡Se produjo un error!";

        container.appendChild(mapIcon);
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
            document.querySelector(`.js-close-slider${this.scope_sufix}`)
                    .focus();
        } else {
            const animation = document.querySelector(
                `.js-slider${this.scope_sufix}`
            );
            if(animation){
                animation.addEventListener("animationend", () => {
                    document
                        .querySelector(`.js-close-slider${this.scope_sufix}`)
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

        const anchor = document.createElement("a");

        anchor.setAttribute("tabindex", 0);
        anchor.id = `js-anchor-slider${this.scope_sufix}`;

        const content_container = document.createElement("div");
        content_container.classList.add("content-container");

        const content = document.createElement("div");
        content.classList.add("content", `js-content${this.scope_sufix}`);
        content.tabIndex = 0;

        content_container.appendChild(content);

        const container = document.createElement("div");
        container.style.display = "none";
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
        header.className = "header";
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
        const container = document.createElement("article");
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
    fitBounds = () => {
        try {
            this.map.fitBounds(this.geojson.getBounds().pad(0.005));
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

            const button = document.createElement("a");
            button.classList.add(`js-reset-view${this.scope_sufix}`, 
                                "leaflet-control-zoom-reset");
            button.href = "#";
            button.title = "Ver mapa completo";
            button.setAttribute("role", "button");
            button.setAttribute("aria-label", "Ver mapa completo");
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
            [
                `${this.scope_selector} .leaflet-map-pane`, 
                `leaflet-map-pane${this.scope_sufix}`, [
                    ["role", "region"]
                ]
            ],
            [
                `${this.scope_selector} .leaflet-control-zoom`,
                `leaflet-control-zoom${this.scope_sufix}`,
                [
                    ["aria-label", "Herramientas de zoom"],
                    ["role", "region"],
                ]   
            ],
            [
                `.js-themes-tool-button${this.scope_sufix}`,
                `themes-tool-button${this.scope_sufix}`,
                [
                    ["aria-label", "Herramienta para cambiar de tema visual"],
                    ["role", "region"],
                ]   
            ],
        ];
        anchors.forEach(anchor => {
            const element = document.querySelectorAll(anchor[0]);
            element.forEach( ele => {
                ele.id = anchor[1]
                anchor[2].forEach(e => ele.setAttribute(e[0], e[1]));
            } );
            
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
                text: "Ir a los marcadores del mapa",
                anchor: `#${anchors[0][1]}`
            },
            {
                text: "Ajustar marcadores al mapa",
                anchor: "#",
                class: "js-fit-bounds"
            },
            {
                text: "Ver mapa completo",
                anchor: "#",
                class: `js-reset-view${this.scope_sufix}`
            },
            {
                text: "Ir al panel de zoom",
                anchor: `#${anchors[1][1]}` 
            },
            {
                text: "Cambiar de tema",
                anchor: `#${anchors[2][1]}`,
                class: `js-themes-tool-button${this.scope_sufix}`
            },
        ]
        values = [
            ...values,
            ...this.accesible_menu_filter,
            ...this.accesible_menu_search,
            ...this.accesible_menu_extras
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
        ul.classList.add("pm-list-unstyled");

        values.forEach((link, index) => {
            const a = document.createElement("a");
            a.classList.add("pm-item-link", "pm-accesible")
            a.textContent = link.text;
            a.tabIndex = 0;
            a.href = link.anchor;
            if(link.hasOwnProperty("class") && link.class != ""){
                a.classList.add(...link.class.split(" "))
            }

            const li = document.createElement("li");
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        nav.appendChild(icon);
        nav.appendChild(ul);

        // enlace de retorno
        const back_to_nav = document.createElement("a");
        back_to_nav.textContent = "Ir a la navegación del mapa";
        back_to_nav.classList.add("pm-item-link", "pm-accesible");
        back_to_nav.href = `#pm-accesible-nav${this.scope_sufix}`;
        back_to_nav.id = `accesible-return-nav${this.scope_sufix}`;

        const return_nav = document.createElement("div");
        return_nav.classList.add("pm-accesible-nav", "bottom");
        return_nav.appendChild(icon.cloneNode(true));
        return_nav.appendChild(back_to_nav);

        const navigation = document.querySelectorAll(`${this.scope_selector}`);
        navigation.forEach(element => {
            element.insertBefore(nav, element.children[0]);
            element.appendChild(return_nav);
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
     * Hace el render del mapa.
     */
    render = () => {
        this._hiddenSearchInput();
        this._resetViewButton();
        this._setThemes();
        
        this.titleLayer.addTo(this.map);
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
        this.mapOpacity();
        this.mapBackgroundColor();

        this._listeners();
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
            selector: "",
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

        const element = document.querySelector(`.poncho-map${this.scope_selector}`);
        
        const loader = document.createElement("span");
        loader.className = "loader";

        const cover = document.createElement('div');
        cover.dataset.scope = this.selector
        cover.classList.add(
            "poncho-map__loader", `js-poncho-map__loader${this.scope_sufix}`
        );
        // Background opacity
        Object.assign(cover.style, this.cover_style);
        if(this.cover_opacity){
            cover.style.backgroundColor = `color-mix(in srgb, transparent, var(--pm-loader-background) ${this.cover_opacity.toString() * 100}%)`;
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