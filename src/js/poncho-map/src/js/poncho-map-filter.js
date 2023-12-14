/**
 * PONCHO MAP FILTER
 * 
 * @summary Generador de mapas con filtro utilizando
 * OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
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
class PonchoMapFilter extends PonchoMap {
    constructor(data, options){
        super(data, options);
        
        const defaults = {
            filters: [],
            filters_visible: false,
            filters_info: false,
            search_fields: [],
            messages: {
                reset: " <a href=\"#\" class=\"{{reset_search}}\" "
                        + "title=\"Restablece el mapa a su estado inicial\">"
                        + "Restablecer mapa</a>",
                initial: "Hay {{total_results}} puntos en el mapa.",
                no_results_by_term: "No encontramos resultados para tu búsqueda.",
                no_results: "No s + this.messages.resete encontraron entradas.",
                results: "{{total_results}} resultados coinciden con tu búsqueda.",
                one_result: "{{total_results}} resultado coincide con tu búsqueda.",
                has_filters: "<i title=\"¡Advertencia!\" aria-hidden=\"true\" "
                        + "class=\"fa fa-warning text-danger\"></i> "
                        + "Se están usando filtros."
            }
        };
        let opts = Object.assign({}, defaults, options);
        this.filters = opts.filters;
        this.filters_info = opts.filters_info;
        this.filters_visible = opts.filters_visible;
        this.valid_fields = ["checkbox", "radio"];
        this.search_fields = opts.search_fields;
        this.messages = opts.messages;
        this.accesible_menu_filter = [
            {
                text: "Ir al panel de filtros",
                anchor: `#filtrar-busqueda${this.scope_sufix}`
            },
        ];
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
        return Object.keys(kwargs).reduce(function(str, key){
            const regex = new RegExp(
                '\\{\\{\\s{0,2}' + key + '\\s{0,2}\\}\\}', 'gm');
            str = str.replace(regex, kwargs[key]);
            return str;
        }, value);
    };


    /**
     * Mensajes de ayuda
     * 
     * @param {string} term Término buscado
     * @param {object} results Resultados de la búsqueda.
     * @returns {undefined}
     */
    _helpText = (results) => {
        const help_container = document
            .querySelectorAll(`${this.scope_selector} .js-poncho-map__help`);

        const values = {
            total_results: results.length,
            total_entries: this.entries.length,
            total_filtered_entries: this.filtered_entries.length,
            filter_class: `js-close-filter${this.scope_sufix}`,
            anchor: "#",
            term: this.inputSearchValue,
            reset_search: `js-poncho-map-reset${this.scope_sufix}`
        };

        help_container.forEach(element => {
            element.innerHTML = "";

            // Arma el listado de mensajes.
            const ul = document.createElement("ul");
            ul.classList.add("m-b-0", "list-unstyled");
            ul.setAttribute("aria-live", "polite");
            const li = content => { 
                const item = document.createElement("li"); 
                item.innerHTML = content; 
                return item;
            };

            // Estado inicial. Totalidad de registros.
            if(values.total_entries === values.total_results){
                ul.appendChild(
                    li(this.tplParser(this.messages.initial, values))
                );
            }
            // 0 entradas con criterio de búsqueda.
            else if(values.total_results < 1){
                ul.appendChild(
                    li(this.tplParser(this.messages.no_results_by_term 
                                    + this.messages.reset, values))
                );
            }
            // 0 entradas, sin creterio de búsqueda.
            else if(this.inputSearchValue === "" && values.total_results < 1){
                ul.appendChild(
                    li(this.tplParser(this.messages.no_results 
                                    + this.messages.reset, values))
                );
            }
            // Si solo hay un resultado
            else if(values.total_results == 1){
                ul.appendChild(
                    li(this.tplParser(this.messages.one_result 
                                    + this.messages.reset, values))
                );
            }
            // Si hay más de un resultado
            else if(values.total_results > 1){
                ul.appendChild(
                    li(this.tplParser(this.messages.results 
                                    + this.messages.reset, values))
                );
            }
            // Si los resultados están siendo filtrados.
            if(!this.usingFilters()){
                // ul.appendChild(
                //     li(this.tplParser(this.messages.has_filters, values))
                // );
            }
            element.appendChild(ul);
        });
    };


    /**
     * Obtiene el índice y el grupo del filtro
     * @param {string} str Input name attribute.
     * @example
     * // returns 1
     * dilter_position("name__1")
     * @returns {string}
     */
    _filterPosition = (str) => {
        const regex = /^([\w\-]+?)(?:__([0-9]+))(?:__([0-9]+))?$/gm;
        const rgx = regex.exec(str);
        return (rgx ? [rgx[1], rgx[2]] : null);
    };


    /**
     * Estado del slider.
     *
     * @return {boolean} true si esta abierto, false si esta cerrado.
     */
    isFilterOpen = () => document
        .querySelector(`.js-poncho-map-filters${this.scope_sufix}`)
        .classList.contains("filter--in");


    /**
     * Abre o cierra el panel de filtros.
     */
    toggleFilter = () => {
        document
            .querySelector(`.js-poncho-map-filters${this.scope_sufix}`)
            .classList.toggle("filter--in");
    };


    /**
     * Altura para el contenedor de filtros.
     *
     * @summary En función de la altura del mapa y del tamaño y posición
     * del botón de filtro y su contenedor, se calcula el tamaño que tiene
     * el *popup* que contiene los inputs para los filtros. La idea es que,
     * si se configuraran muchos filtros se active la función
     * `overflow:auto` en la hoja de estilos.
     * @todo calcular el valor de `container_position_distance` e 
     * `inner_padding` dinámicamente.
     * @return {undefined}
     */
    _filterContainerHeight = () => {    
        const filter_container = document
            .querySelector(`.js-filter-container${this.scope_sufix}`);
        const filter_button = document
            .querySelector(`.js-close-filter${this.scope_sufix}`);

        const poncho_map_height = filter_container.offsetParent.offsetHeight;
        // Valor tomado de la hoja de estilos
        const container_position_distance = this._cssVarComputedDistance() * 3;
        const filters_height = poncho_map_height
            - filter_container.offsetTop
            - filter_button.offsetHeight
            - container_position_distance;


        const pos = document
            .querySelector(`.js-poncho-map-filters${this.scope_sufix}`);
        pos.style.maxHeight = `${filters_height}px`;

        // Valor tomado de la hoja de estilos
        const inner_padding = 45;
        const height = pos.offsetHeight - inner_padding;
        const filters = document.querySelector(`.js-filters${this.scope_sufix}`);
        filters.style.height = `${height}px`;
        filters.style.overflow = "auto";
    };


    /**
     * Ejecuta toggle en el onclick
     * @return {undefined}
     */
    _clickToggleFilter = () => document
        .querySelectorAll(`.js-close-filter${this.scope_sufix}`)
        .forEach(element => element.onclick = (event) => {
            event.preventDefault();
            this.toggleFilter();
            this._filterContainerHeight();
    });


    /**
     * Prepara el objeto para los filtros.
     * 
     * @summary Obtiene un _distinct_ de elementos asociados a un clave
     * dentro dentro de las entradas.
     * @param {object} args Array con dos propiedades, siedo la 
     * segunda optativa.
     * @propertie
     * @example
     * // returns ["clave", "elemento-unico", ["elemento-unico"], "checked"]
     * _setFilter("clave")
     * @return {object} Entradas filtradas
     */
    _setFilter = (args) => {
        const [key, status="checked"] = args;
        const entries = this.entries.map(entry => {
            if(entry.properties.hasOwnProperty(key)){
                return entry.properties[key];
            }
        }).filter(e => e);

        const obj = [...new Set(entries)]
                .map(item => [key, item, [item], status]);

        obj.sort((a, b) => {
            const valA = a[1].toUpperCase();
            const valB = b[1].toUpperCase();
            if (valA > valB) {
                return 1;
            }
            if (valA < valB) {
                return -1;
            }
            return 0;
        });

        return obj;
    };


    /**
     * Retorna el tipo de filtro seleccionado por el usuario.
     * 
     * @summary Hay dos modos de configurar filtros
     * template_structure.filters.fields y template_structure.filters.field
     * @example
     * Fields, peromite configurar manualmente el listado de entradas por
     * las cuales se va a realizar la búsqueda:
     *   [
     *     {label},
     *     {índice entrada},
     *     [{valor a buscar 1},
     *     {valor a buscar 2}],
     *     {status:"checked"|boolean}
     *   ]
     * 
     * ["tipo", "Archivo provincial", ["Archivo provincial"], "checked"],
     * @example
     * — Field, permite asignar el índice por el cual se quiere filtrar,
     * el programa hace un UNIQUE de los elementos del indice (o columna),
     * y genera un checkbox (o radio), por cada una de los resultados.
     *   [
     *     {indice entrada},
     *     {status:"checked"|boolean}
     *   ]
     * Ejemplo:
     *   ["tipo"]
     * o, si se desean todos los checkbox desmarcados.
     *   ["tipo", false]
     */
    _fieldsToUse = (fieldsItems) => {
        const {
            type = "checkbox",
            fields: optFields = false, 
            field: optField = false} = fieldsItems;

        if(!optFields && !optField){
            this.errorMessage(
                "Filters requiere el uso del atributo `field` o `fields`.",
                "warning"
            );
        }
        // Evito que a los radio se les asigne un valor checked.
        if (optField && type === "radio"){
            optField[1] = false;
        }

        let fieldsToUse = (optFields ? optFields : this._setFilter(optField));
        // Hasta que se defina su uso, todos los radio tienen un item `Todos`.
        if(type === "radio" && optFields === false){
            const f = fieldsToUse.map(m => m[1]);
            fieldsToUse = [
                [fieldsToUse[0][0], "Todos", f, "checked"], ...fieldsToUse
            ];
        }
        
        return fieldsToUse;
    };


    /**
     * Arma un grupo de inputs
     *
     * @param {object} fields_items Listado de opciones para los fields.
     */
    _fields = (fields_items, group) => {
        const fields_container = document.createElement("div");
        fields_container.classList.add("field-list", "p-b-1");

        const fields_to_use = this._fieldsToUse(fields_items);

        for(const key in fields_to_use){
            const field = fields_to_use[key];
            const input = document.createElement("input");
            input.type = (this.valid_fields.includes(fields_items.type) ?
                fields_items.type : "checkbox");
            input.id = `id__${field[0]}__${group}__${key}`;
            
            if(fields_items.type == "radio"){
                input.name = `${field[0]}__${group}`;
            } else {
                input.name = `${field[0]}__${group}__${key}`;
            }

            input.className = "form-check-input";
            input.value = key;
            if(typeof field[3] !== "undefined" && field[3]=="checked"){
                input.setAttribute("checked", "checked");
            }

            const label = document.createElement("label");
            label.style.marginLeft = ".33rem";
            label.textContent=field[1];
            label.className = "form-check-label";
            label.setAttribute("for", `id__${field[0]}__${group}__${key}`);
            const info = document.createElement("span");
            info.dataset.info = `${field[0]}__${group}__${key}`;
            label.appendChild(info);

            const field_container = document.createElement("div");
            field_container.className = "form-check";
            field_container.appendChild(input);
            field_container.appendChild(label);
            fields_container.appendChild(field_container);
        }

        const fieldset = document.createElement("div");
        fieldset.appendChild(fields_container);
        return fieldset;
    };


    /**
     * Crea el botón para los filtros
     */
    _filterButton = () => {
        const filter_icon = document.createElement("i");
        filter_icon.setAttribute("aria-hidden", "true");
        filter_icon.classList.add("pmi", "pmi-filter");

        const button_text = document.createElement("span");
        button_text.textContent = "Abre o cierra el filtro de búsqueda";
        button_text.classList.add("pm-visually-hidden");

        const button = document.createElement("button");
        button.classList.add(
            "pm-btn", "pm-btn-rounded-circle", "pm-my-1",
            `js-close-filter${this.scope_sufix}`
        );
        button.id = `filtrar-busqueda${this.scope_sufix}`
        button.appendChild(filter_icon);
        button.appendChild(button_text);
        button.setAttribute("role", "button");
        button.setAttribute(
            "aria-label", "Abre o cierra el filtro de búsqueda"
        );
        button.setAttribute(
            "aria-controls", `poncho-map-filters${this.scope_sufix}`
        );

        const button_container = document.createElement("div");
        button_container.classList.add(
            `js-filter-container${this.scope_sufix}`, "filter-container"
        );
        button_container.appendChild(button);

        const container = document
            .querySelector(`.poncho-map${this.scope_selector}`);
        container.appendChild(button_container);
    }


    /**
     * Medida definida en la variable CSS --pm-slider-distance
     * 
     * @summary Esta medida puede ser variable según el estilo que se
     * quiera dar al mapa el diseñador. 
     * @returns {integer}
     */
    _cssVarComputedDistance = () => {
        const container = document.querySelector(".poncho-map");
        const computedDistance = getComputedStyle(container)
                .getPropertyValue('--pm-slider-distance');
        const distance = parseInt(
            computedDistance.toString().replace(/[^0-9]*/gm, ""));
        return distance || 0;
    };


    /**
     * Retorna las medidas y la distancia de margen del control de zoom leaflet. 
     * @returns {object}
     */
    _controlZoomSize = () =>{
        const leafletControlZoom = document
                .querySelector(`${this.scope_selector} .leaflet-control-zoom`);
        return {
            controlHeight: leafletControlZoom.offsetHeight,
            controlTop: leafletControlZoom.offsetTop
        };
    };


    /**
     * Crea el contenedor para los filtros.
     */
    _filterContainer = () => {
        const fields_container = document.createElement("div");
        fields_container.className = `js-filters${this.scope_sufix}`;

        const close_button = document.createElement("button");
        close_button.classList.add(
            "btn", "btn-xs",
            "btn-secondary",
            "btn-close",
            `js-close-filter${this.scope_sufix}`
        );
        close_button.title = "Cerrar panel";
        close_button.setAttribute("role", "button");
        close_button.setAttribute("aria-label", "Cerrar panel de filtros");
        close_button.innerHTML = "<span class=\"pm-visually-hidden\">Cerrar </span>✕";


        const form = document.createElement("form");
        form.classList.add(`js-formulario${this.scope_sufix}`);
        form.appendChild(close_button); 
        form.appendChild(fields_container); 

        const container = document.createElement("div");
        container.classList.add(
            `js-poncho-map-filters${this.scope_sufix}`,
            "pm-container",
            "poncho-map-filters",
            "pm-caret", "pm-caret-t",
        );
        container.setAttribute("role", "region");
        container.setAttribute("aria-live", "polite");
        container.setAttribute("aria-label", "Panel de filtros");
        container.id = `poncho-map-filters${this.scope_sufix}`;

        if(this.filters_visible){
            container.classList.add("filter--in");
        }

        const cssVarComputedDistance = this._cssVarComputedDistance();
        const controlZoomSize = this._controlZoomSize();
        const styleTop = controlZoomSize.controlHeight 
                + controlZoomSize.controlTop 
                + "px";

        container.appendChild(form); 
        document.querySelectorAll(`.js-filter-container${this.scope_sufix}`)
            .forEach(element => {
                element.style.top = styleTop;
                element.appendChild(container);
            });
    };

    /**
     * Crea los botones para seleccionar o des-seleccionar todos
     * los filtros.
     * @param {object} item Objetos con los nombres de grupo e 
     * indice de grupo.
     * @returns {object} Objeto HTML
     */
    _checkUncheckButtons = (item) => {
        const checkAllButton = document.createElement("button");
        checkAllButton.classList.add(
            "js-select-items","select-items__button");
        checkAllButton.textContent = "Marcar todos";
        checkAllButton.dataset.field = item.field[0];
        checkAllButton.dataset.value = 1;

        const uncheckAllButton = document.createElement("button");
        uncheckAllButton.classList.add(
            "js-select-items","select-items__button");
        uncheckAllButton.textContent = "Desmarcar todos";
        uncheckAllButton.dataset.field = item.field[0];
        uncheckAllButton.dataset.value = 0;
        

        const checkAllItems = document.createElement("div");
        checkAllItems.classList.add("select-items");
        checkAllItems.appendChild(checkAllButton);
        checkAllItems.appendChild(uncheckAllButton);

        return checkAllItems;
    }

    /**
     * Crea los checkbox para los filtros.
     */
    _createFilters = (data) => {
        const form_filters = document
            .querySelector(`.js-filters${this.scope_sufix}`);

        data.forEach((item, group) => {
            let legend = document.createElement("legend");
            legend.textContent = item.legend;
            legend.classList.add("m-b-1", "color-primary", "h6")

            let fieldset = document.createElement("fieldset");
            fieldset.appendChild(legend);
            if(item.hasOwnProperty("check_uncheck_all") && 
                    item.check_uncheck_all && item?.type != "radio"){
                fieldset.appendChild(this._checkUncheckButtons(item));
            }
            fieldset.appendChild(this._fields(item, group));
            form_filters.appendChild(fieldset);
        });
    };

    /**
     * Obtengo los checkbox marcados.
     */
    formFilters = () => {
        if(this.filters.length < 1){
            return [];
        }
        const form_filters = document
            .querySelector(`.js-formulario${this.scope_sufix}`);
        const form_data = new FormData(form_filters);

        return Array.from(form_data).map(ele => {
            let val = [];
                const pos = this._filterPosition(ele[0]);
                val = [parseInt(pos[1]), parseInt(ele[1]), pos[0]];
            return val;
        });
    };

    /**
     * Configuración de estado de los filtros seteados por el usuario.
     * @returns {object}
     */
    defaultFiltersConfiguration = () => {
        // Obtengo todos los filtros y los colecciono en un array.
        const filters = this.filters.map((g, gk) => {
            const fields = this._fieldsToUse(g);
            const conf_fields = fields.map((f, fk) => {
                return [
                    gk, fk, f[0], 
                    (typeof f[3] !== "undefinded" && f[3] == "checked" ?
                        true : false)
                ];
            });
            return conf_fields;
        }).flat();
        return filters;
    };

    /**
     * Verifica si se están filtrando los datos.
     * @return {boolean}
     */
    usingFilters = () => {
        const result = this.defaultFiltersConfiguration().every(
            (e) => {
                return document
                    .querySelector(`#id__${e[2]}__${e[0]}__${e[1]}`)
                    .checked;
        });
        return result;
    };

    /**
     * Reestablece los filtros a la configuración creada por el usuario.
     * @return {undefined}
     */
    _resetFormFilters = () => {
        this.defaultFiltersConfiguration().forEach(e => {
            const field = document.querySelector(`#id__${e[2]}__${e[0]}__${e[1]}`);
            field.checked = e[3];
        });
    };

    /**
     * Value del input hidden (search)
     * @returns {string|boolean} Valor en el input *hidden* o false.
     */
    get inputSearchValue(){
        const search_value = document
            .querySelector(`#js-search-input${this.scope_sufix}`);
        const result = search_value.value.trim();
        if(result !== ""){
            return result;
        }
        return false;
    }


    /**
     * Total de ocurrencias por clave y valor sobre entradas dadas.
     * @param {object} feature Entradas
     * @param {array} val Array con los elementos a buscar.
     * @param {string} index Clave de la entrada de datos.
     * @returns {integer} Total de ocurrencias. 
     */
    _countOccurrences = (feature, val, index) => {
        const ocurrences = feature.reduce((a, v) => {
            return val.some(e => v.properties[index].includes(e)) ? a + 1 : a
        }, 0);
        return ocurrences;
    };


    /**
     * Total de resultados por filtro marcado.
     * @returns {Array} Retorna un array estructurado del siguiente modo:
     * ```
     *      [
     *        {nombre del filtro},
     *        {total coincidencias},
     *        {indice de grupo de filtros},
     *        {indice input dentro del grupo}
     *      ]
     * ```
     */
    totals = () => {
        const results = this.formFilters().map(e => {
            const item = this._fieldsToUse( this.filters[e[0]] )[e[1]];
            return [
                item[1],
                this._countOccurrences(this.filtered_entries, item[2], item[0]),
                ...e
            ];
        });
        return results;
    };


    /**
     * **¡EXPERIMENTAL!** Agrega un title con el total de elementos en 
     * el panel de filtros.
     */
    _totalsInfo = () => {
        if(!this.filters_info){
            return "";
        }
        this.totals().forEach(field => {
            const element = document.querySelector(
                    `${this.scope_selector}`
                    + ` [data-info="${field[4]}__${field[2]}__${field[3]}"]`);
            const plurals = (field[1] < 2 ? "" : "s");
            
            const i = document.createElement("i");
            i.style.cursor = "help";
            i.style.opacity = ".75";
            i.style.marginLeft = ".5em";
            i.style.marginRight = ".25em";
            i.classList.add("fa", "fa-info-circle","small", "text-info");
            i.title = `${field[1]} resultado${plurals}`;
            i.setAttribute("aria-hidden", "true");

            const span = document.createElement("span");
            span.className = "pm-visually-hidden";
            span.style.fontWeight = "400";
            span.textContent = `${field[1]} elemento${plurals}.`;

            const info_container = document.createElement("small");
            info_container.appendChild(i);
            info_container.appendChild(span);
            element.appendChild(info_container);
        });
    };


    /**
     * Valida una entrada
     * @summary
     * 1. Obtengo la cantidad de grupos que tengo.
     * 2. Evaluo los fields de cada grupo y junto los resultados en un array
     * para retornar true los grupos tienen que dar true
     * @returns {boolean}
     */
    _validateEntry = (entry, form_filters) => {
        const fields_group = (group) => form_filters.filter(e => e[0] == group);
        // Reviso cuantos grupos tengo que validar.
        const total_groups = this.filters.length;
        let validations = [];
        for(let i = 0; i < total_groups; i++){
            // por cada grupo de fields obtengo un resultado de grupo.
            validations.push(this._validateGroup(entry, fields_group(i)));
        }
        return validations.every(e => e);
    };


    /**
     * Valida el campo de un grupo.
     * 
     * @param {object} entry Entrada de datos
     * @param {integer} group Índice del grupo de filtros
     * @param {integer} index Índice del filtro dentro del grupo.
     * @returns {object}
     */
    _search = (entry, group, index) => {
        const filter = this._fieldsToUse(this.filters[group])[index];
        const search_for = filter[2];
        const found = search_for.filter(i => i).some(e => {
            if(entry.hasOwnProperty(filter[0])){
                return entry[filter[0]].includes(e)
            }
        });
        return found;
    };


    /**
     * Valida los fields del grupo.
     * 
     * @param {object} entry Entrada de datos
     * @param {object} fields_group 
     * @return {boolean}
     */
    _validateGroup = (entry, fields_group) => {
        const result = fields_group.map(e => this._search(entry, e[0], e[1]));
        return result.some(e => e);
    };


    /**
     * Filtra los markers.
     */ 
    _filterData = () => {
        const available_filters = this.formFilters();
        let feed = this.entries.filter(
            entry => this._validateEntry(entry.properties, this.formFilters())
        );
        feed = this.searchEntries(this.inputSearchValue, feed);
        feed = (this.filters.length < 1 || 
                available_filters.length > 0 ? feed : []);
        this.filtered_entries = feed;
        return feed;
    };


    /**
     * Render de funciones 
     */ 
    _filteredData = (feed) => {
        feed = (typeof feed !== "undefined" ? this.entries : 
                this._filterData());
        
        this.markersMap(feed); 
        this._selectedMarker();
        this._helpText(feed);
        this._resetSearch();
        this._clickToggleFilter();
        
        if(this.slider){
            this._renderSlider();
            this._clickeableMarkers();
            this._clickeableFeatures();
            this._clickToggleSlider();
        }

        if(this.hash){
            this._urlHash();
        }
        
        this._setFetureAttributes();
        this._accesibleMenu();
    };


    /**
     * Borra los valores del search _input hidden_ en el 
     * campo de filtros.
     * @returns {undefined}
     */
    _clearSearchInput = () => document
        .querySelectorAll(`#js-search-input${this.scope_sufix}`)
        .forEach(element => element.value = "");


    /**
     * Restablece el mapa a su instancia inicial.
     * @summary Reestablace la búsqueda a través del input search o 
     * por filtros.
     * @returns {undefined}
     */
    _resetSearch = () => {  
        document
            .querySelectorAll(`.js-poncho-map-reset${this.scope_sufix}`)
            .forEach(e => {
                e.onclick = (event => {
                    event.preventDefault();
                    this._resetFormFilters();
                    this._filteredData(this.entries);
                    this._clearSearchInput();
                    this.resetView();
            });
        });
    };


    /**
     * Cambia la lista de markers en función de la selección de 
     * los filtros en PonchoMapFilter.
     * @TODO Ver el modo de hacer focus sobre el scope
     * @returns {undefined}
     */
    filterChange = (callback) => document
        .querySelectorAll(`.js-filters${this.scope_sufix}`)
        .forEach(element => {
            element.onchange = (callback);
    });


    /**
     * Marca o desmarca todos los filtros
     * 
     * @returns {undefined}
     */
    checkUncheckFilters = () => {
        const buttons = document.querySelectorAll(
            `${this.scope_selector} .js-select-items`);
        buttons.forEach(element => {
            element.onclick = (event) => {
                event.preventDefault();
                const inputs = document.querySelectorAll(
                    `${this.scope_selector} [id^=id__${element.dataset.field}]`);
                inputs.forEach(input => {
                    input.checked = parseInt(element.dataset.value);
                });
                this._filteredData();
            };
        });
    };


    /**
     * imprime el mapa
     */ 
    render = () =>{
        this._hiddenSearchInput();
        this._resetViewButton(); 

        this._menuTheme();
        this._setThemes();

        if(this.filters.length > 0){
            this._filterButton();
            this._filterContainer();
            this._createFilters(this.filters);
        }

        this.titleLayer.addTo(this.map);

        this._filteredData();
        this._totalsInfo();
        if(this.scroll && this.hasHash()){
            this.scrollCenter();
        }
        this.checkUncheckFilters();
        this.filterChange((event) => {
            event.preventDefault();
            this._filteredData();
        });

        setTimeout(this.gotoHashedEntry, this.anchor_delay);
        if(this.filters_visible){
            this._filterContainerHeight();
        }
        this.mapOpacity();
        this.mapBackgroundColor();
    };
};
// end of class