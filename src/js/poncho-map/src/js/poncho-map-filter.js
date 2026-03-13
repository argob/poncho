/**
 * PONCHO MAP FILTER
 *
 * @summary Generador de mapas con filtro utilizando
 * OpenStreetMap / leafleft
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap
 * @see https://github.com/argob/poncho/tree/master/src/js/poncho-map
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
            filters_info: false,
            filters_visible: false,
            fit_bounds_after_filter: false,
            messages: {
                has_filters: "filters_has",
                initial: "filter_initial",
                no_results: "filter_no_results",
                no_results_by_term: "filter_no_results_by_term",
                one_result: "filter_one_result",
                reset: "filter_reset_values_link",
                results: "filter_results"
            },
            search_fields: []
        };
        let opts = Object.assign({}, defaults, options);
        this.filters = opts.filters;
        this.fit_bounds_after_filter = Boolean(opts.fit_bounds_after_filter);
        this.filters_info = Boolean(opts.filters_info);
        this.filters_visible = Boolean(opts.filters_visible);
        this.valid_fields = ["checkbox", "radio", "select"];
        this.search_fields = opts.search_fields;
        this.messages = opts.messages;
        this.accesible_menu_filter = [
            {
                aria_label: "filters_aria_label_reset",
                css: [`js-poncho-map-reset${this.scope_sufix}`],
                label: "filters_reset",
                link: "#"
            }
        ];

        // Si no hay filtros cargados remuevo el item del menú.
        if(this.filters.length > 0){
            this.accesible_menu_filter.push({
                label: "Ir al panel de filtros",
                link: `#filtrar-busqueda${this.scope_sufix}`
            });
        }

        // Cache para _fieldsToUse (mejora de rendimiento)
        this._fieldsCache = new Map();
    }

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
            anchor: "#",
            filter_class: `js-close-filter${this.scope_sufix}`,
            reset_search: `js-poncho-map-reset${this.scope_sufix}`,
            term: this.inputSearchValue,
            total_entries: this.entries.length,
            total_filtered_entries: this.filtered_entries.length,
            total_results: results.length
        };

        help_container.forEach(element => {
            element.innerHTML = "";

            // Arma el listado de mensajes.
            const ul = document.createElement("ul");

            ul.classList.add("m-b-0", "list-unstyled");
            const li = content => {
                const item = document.createElement("li");
                item.ariaLive = "polite";
                item.innerHTML = content;
                item.tabIndex = 0;
                return item;
            };

            // Estado inicial. Totalidad de registros.
            if(values.total_entries === values.total_results){
                ul.appendChild(
                    li(this._t(this.messages.initial, values))
                );
            }
            // 0 entradas con criterio de búsqueda.
            else if(values.total_results < 1){
                ul.appendChild(
                    li(
                        this._t(this.messages.no_results_by_term, values)
                        + this._t(this.messages.reset, values)
                    )
                );
            }
            // 0 entradas, sin creterio de búsqueda.
            else if(this.inputSearchValue === "" && values.total_results < 1){
                ul.appendChild(
                    li(
                        this._t(this.messages.no_results, values)
                        + this._t(this.messages.reset, values)
                    )
                );
            }
            // Si solo hay un resultado
            else if(values.total_results == 1){
                ul.appendChild(
                    li(
                        this._t(this.messages.one_result, values)
                        + this._t(this.messages.reset, values)
                    )
                );
            }
            // Si hay más de un resultado
            else if(values.total_results > 1){
                ul.appendChild(
                    li(
                        this._t(this.messages.results, values) 
                        + this._t(this.messages.reset, values)
                    )
                );
            }
            // Si los resultados están siendo filtrados.
            // if(!this.usingFilters()){
            //     ul.appendChild(
            //         li(this._t(this.messages.has_filters, values))
            //     );
            // }
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
        const inner_padding = 55;
        const height = pos.offsetHeight - inner_padding;
        const filters = document.querySelector(`.js-filters${this.scope_sufix}`);
        filters.style.height = `${height}px`;
        filters.style.overflow = "auto";
    };


    /**
     * Ejecuta toggle en el onclick
     * @return {undefined}
     */
    _clickToggleFilter = () => {
        const selector = `.js-close-filter${this.scope_sufix}`;
        const filterElement = document.querySelectorAll(selector);
        
        return filterElement.forEach((element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault();

                this.toggleFilter();
                this._filterContainerHeight();
            });
        });

    };


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
        }).filter(Boolean);

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
    _fieldsToUse = (fieldsItems, groupIndex = null) => {
        // Usar cache si tenemos un índice de grupo
        if(groupIndex !== null && this._fieldsCache.has(groupIndex)){
            return this._fieldsCache.get(groupIndex);
        }

        const {
            type = "checkbox",
            fields: optFields = false,
            field: optField = false} = fieldsItems;

        if(!optFields && !optField){
            this.showAlert({
                    title: "Filters requiere el uso del atributo "
                        + "<code>field</code> o <code>fields</code>.",
                    terminal: fieldsItems
                },
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

        // Cachear el resultado si tenemos un índice de grupo
        if(groupIndex !== null){
            this._fieldsCache.set(groupIndex, fieldsToUse);
        }

        return fieldsToUse;
    };


    /**
     * Crea los elementos de formulario para un grupo de filtros
     *
     * @param {object} fields_items - Configuración de los campos del filtro
     * @param {number} group - Índice del grupo de filtros
     * @returns {HTMLElement} Elemento fieldset conteniendo los inputs
     */
    _fields = (fields_items, group) => {
        const SEPARATOR = "__";
        const fieldsData = this._fieldsToUse(fields_items);
        const inputType = this.valid_fields.includes(fields_items.type)
            ? fields_items.type
            : "checkbox";
        const isSelectType = inputType === "select";

        // Crear el contenedor apropiado según el tipo
        if(isSelectType){
            return this._createSelectField(fieldsData, group, SEPARATOR);
        }

        return this._createCheckableFields(
            fieldsData,
            group,
            inputType,
            fields_items.type,
            SEPARATOR
        );
    };

    /**
     * Crea un campo select con sus opciones
     *
     * @private
     * @param {Array} fieldsData - Datos de los campos
     * @param {number} group - Índice del grupo
     * @param {string} separator - Separador para los IDs
     * @returns {HTMLElement} Fieldset con el select
     */
    _createSelectField = (fieldsData, group, separator) => {
        const selectElement = document.createElement("select");
        selectElement.className = "pm-form-control";
        const filterData = this.filters[group];
        let allOptionsText, label;

        // Obtener el entryKey del primer elemento para el name
        const entryKey = fieldsData.length > 0 ? fieldsData[0][0] : "";
        const selectId = ["select", entryKey, group].join(separator);
        selectElement.name = [entryKey, group].join(separator);
        selectElement.id = selectId;

        // Agregar opción "Todos" por defecto
        if( filterData?.all_options_text &&
            this.isString(filterData.all_options_text) &&
            !this.isEmptyString(filterData.all_options_text) ){
            allOptionsText = filterData.all_options_text;
        } else {
            allOptionsText = this._t("filter_select_all_option_text");
        }

        const defaultOption = document.createElement("option");
        defaultOption.textContent = allOptionsText;
        defaultOption.value = "";
        selectElement.appendChild(defaultOption);

        // Crear opciones del select
        fieldsData.forEach((fieldItem, index) => {
            const [entryKey, entryName] = fieldItem;
            const optionElement = document.createElement("option");
            const optionId = ["id", entryKey, group, index].join(separator);

            optionElement.textContent = entryName;
            optionElement.id = optionId;
            optionElement.value = index;

            selectElement.appendChild(optionElement);
        });

        // Crear label
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", selectId);

        if( filterData?.label &&
            this.isString(filterData.label) &&
            !this.isEmptyString(filterData.label) ){
            label = filterData.label;
        } else {
            label = this._t(
                "filter_select_label", 
                {header: this.header(entryKey, "lower")}
            );
        }
        
        if( filterData.show_label === false ){
            labelElement.classList.add("pm-visually-hidden");
        }
        
        labelElement.classList.add("m-b-xs");
        labelElement.textContent = label;


        const formGroup = document.createElement("div");
        formGroup.classList.add("pm-form-group");

        const fieldset = document.createElement("div");
        fieldset.classList.add("m-b-2", "m-t-xs");

        fieldset.appendChild(labelElement);
        fieldset.appendChild(selectElement);

        return fieldset;
    };


    /**
     * Crea campos de tipo checkbox o radio
     *
     * @private
     * @param {Array} fieldsData - Datos de los campos
     * @param {number} group - Índice del grupo
     * @param {string} inputType - Tipo de input (checkbox o radio)
     * @param {string} originalType - Tipo original del campo
     * @param {string} separator - Separador para los IDs
     * @returns {HTMLElement} Fieldset con los checkboxes/radios
     */
    _createCheckableFields = (fieldsData, group, inputType, originalType, separator) => {
        const container = document.createElement("div");
        container.classList.add("field-list", "m-b-05");

        fieldsData.forEach((fieldItem, index) => {
            const [entryKey, entryName, , isChecked] = fieldItem;
            const fieldId = ["id", entryKey, group, index].join(separator);

            // Crear input
            const inputElement = document.createElement("input");
            inputElement.type = inputType;
            inputElement.id = fieldId;
            inputElement.className = "form-check-input";
            inputElement.value = index;

            // Asignar name según el tipo
            inputElement.name = originalType === "radio"
                ? [entryKey, group].join(separator)
                : [entryKey, group, index].join(separator);

            // Marcar como checked si corresponde
            if(isChecked === "checked"){
                inputElement.checked = true;
            }

            // Crear span para información de totales
            const infoSpan = document.createElement("span");
            infoSpan.dataset.info = [entryKey, group, index].join(separator);

            // Crear label
            const labelElement = document.createElement("label");
            labelElement.textContent = entryName;
            labelElement.className = "form-check-label";
            labelElement.htmlFor = fieldId;
            labelElement.appendChild(infoSpan);

            // Contenedor del field
            const fieldContainer = document.createElement("div");
            fieldContainer.className = "form-check";
            fieldContainer.appendChild(inputElement);
            fieldContainer.appendChild(labelElement);

            container.appendChild(fieldContainer);
        });

        const fieldset = document.createElement("div");
        fieldset.appendChild(container);

        return fieldset;
    };


    /**
     * Crea el botón para los filtros
     */
    _filterButton = () => {
        // Accedo al contenedor
        const container = document.querySelector(
            `.poncho-map${this.scope_selector}`
        );

        // Icono
        const filter_icon = document.createElement("i");
        filter_icon.ariaHidden = "true";
        filter_icon.classList.add("pmi", "pmi-filter");

        const button = document.createElement("button");
        button.classList.add(
            "pm-btn",
            "pm-btn-rounded-circle",
            "pm-my-1",
            `js-close-filter${this.scope_sufix}`
        );
        button.id = `filtrar-busqueda${this.scope_sufix}`
        button.role = "button";
        button.ariaLabel = this._t("filters_aria_label_open_close_panel");
        button.title = this._t("filters_aria_label_open_close_panel");
        button.ariaControls = `poncho-map-filters${this.scope_sufix}`;

        const button_container = document.createElement("div");
        button_container.classList.add(
            `js-filter-container${this.scope_sufix}`,
            "filter-container"
        );

        button.appendChild(filter_icon);
        button_container.appendChild(button);
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
     * Retorna las medidas y la distancia de margen del control de 
     * zoom leaflet.
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
        // Icono para el botón 
        const icon = document.createElement("i");
        icon.classList.add("pmi", "pmi-close");
        icon.ariaHidden = "true";

        // Botón cerrar
        const closeButton = document.createElement("button");
        closeButton.classList.add(
            "btn", "btn-xs",
            "btn-secondary",
            "pm-btn-close",
            `js-close-filter${this.scope_sufix}`
        );
        closeButton.title = "Cerrar panel";
        closeButton.role = "button";
        closeButton.ariaLabel = this._t("filters_aria_label_close_panel");

        // Contenedor de los filtros
        const fields_container = document.createElement("div");
        fields_container.classList.add(
            `js-filters${this.scope_sufix}`, "pm-filters-content"
        );

        // Formulario
        const form = document.createElement("form");
        form.classList.add(`js-formulario${this.scope_sufix}`);

        // Contenedor
        const container = document.createElement("div");
        container.classList.add(
            `js-poncho-map-filters${this.scope_sufix}`,
            "pm-container",
            "poncho-map-filters",
            "pm-caret", "pm-caret-t",
        );
        container.role = "region";
        container.ariaLive = "polite";
        container.ariaLabel = this._t("filters_aria_label_panel");
        container.id = `poncho-map-filters${this.scope_sufix}`;
        // Si está seteado que los filtros estén visibles.
        if(this.filters_visible){
            container.classList.add("filter--in");
        }

        // Posicion del panel
        // const cssVarComputedDistance = this._cssVarComputedDistance();
        const controlZoomSize = this._controlZoomSize();
        const styleTop = controlZoomSize.controlHeight
                + controlZoomSize.controlTop
                + "px";

        closeButton.appendChild(icon);
        form.appendChild(closeButton);
        form.appendChild(fields_container);
        container.appendChild(form);

        document
            .querySelectorAll(`.js-filter-container${this.scope_sufix}`)
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
        // container
        const checkAllItems = document.createElement("div");
        checkAllItems.classList.add("select-items", "form-check");

        // Checkbox marcar todos
        const checkAllCheckbox = document.createElement("input");
        checkAllCheckbox.type = "checkbox";
        checkAllCheckbox.id = `check-all-${item.field[0]}`;
        checkAllCheckbox.classList.add("js-select-all-checkbox", "form-check-input");
        checkAllCheckbox.dataset.field = item.field[0];
        checkAllCheckbox.checked = true;

        // Label marcar todos
        const checkAllLabel = document.createElement("label");
        checkAllLabel.classList.add("form-check-label");
        checkAllLabel.htmlFor = `check-all-${item.field[0]}`;
        checkAllLabel.textContent = this._t("filters_check_all");

        // Append
        checkAllItems.appendChild(checkAllCheckbox);
        checkAllItems.appendChild(checkAllLabel);

        return checkAllItems;
    }


    /**
     * Crea los checkbox para los filtros.
     */
    _createFilters = (data) => {
        const formFilters = document.querySelector(`.js-filters${this.scope_sufix}`);

        data.forEach((filterItem, groupIndex) => {
            const fieldset = this._createFilterFieldset(filterItem, groupIndex);
            formFilters.appendChild(fieldset);
        });
    };

    /**
     * Crea un fieldset completo para un grupo de filtros
     *
     * @param {object} filterItem - Configuración del filtro
     * @param {number} groupIndex - Índice del grupo de filtros
     * @returns {HTMLElement} Elemento fieldset
     */
    _createFilterFieldset = (filterItem, groupIndex) => {
        const fieldset = document.createElement("fieldset");

        const legend = this._createFilterLegend(filterItem, groupIndex);
        fieldset.appendChild(legend);

        if (this._shouldShowCheckUncheckButtons(filterItem)) {
            const checkUncheckButtons = this._checkUncheckButtons(filterItem);
            fieldset.appendChild(checkUncheckButtons);
        }

        const fields = this._fields(filterItem, groupIndex);
        fieldset.appendChild(fields);

        return fieldset;
    };

    /**
     * Crea el elemento legend para un grupo de filtros
     *
     * @param {object} filterItem - Configuración del filtro
     * @param {number} groupIndex - Índice del grupo de filtros
     * @returns {HTMLElement} Elemento legend
     */
    _createFilterLegend = (filterItem, groupIndex) => {
        const legend = document.createElement("legend");



        const hasCustomLegend = this.isString(filterItem.legend) &&
                               !this.isEmptyString(filterItem.legend);

        legend.textContent = hasCustomLegend
            ? filterItem.legend
            : this._t(
                "filter_select_legend", 
                {header: this.header(this._typeByGroup(groupIndex), "lower")}
            );

        if (filterItem.show_legend === false) {
            legend.classList.add("pm-visually-hidden");
        } else {
            legend.classList.add(
                "m-t-0",
                "m-b-05",
                "color-primary",
                "h6",
                "font-sans-serif"
            );
        }

        return legend;
    };

    /**
     * Determina si se deben mostrar los botones marcar/desmarcar todos
     *
     * @param {object} filterItem - Configuración del filtro
     * @returns {boolean} true si se deben mostrar los botones
     */
    _shouldShowCheckUncheckButtons = (filterItem) => {
        const hasCheckUncheckAll = filterItem.hasOwnProperty("check_uncheck_all") &&
                                   filterItem.check_uncheck_all;
        const isMultipleChoiceType = filterItem?.type !== "radio" &&
                                    filterItem?.type !== "select";

        return hasCheckUncheckAll && isMultipleChoiceType;
    };


    /**
     * Obtengo los checkbox marcados y selects.
     */
    formFilters = () => {
        if(this.filters.length < 1){
            return [];
        }

        const form_filters = document
            .querySelector(`.js-formulario${this.scope_sufix}`);
        const form_data = new FormData(form_filters);

        return Array.from(form_data)
            .filter(ele => ele[1] !== "") // Filtrar valores vacíos (opción "Todos" de selects)
            .map(ele => {
                let val = [];
                const pos = this._filterPosition(ele[0]);
                val = [parseInt(pos[1]), parseInt(ele[1]), pos[0]];
                return val;
            });
    };


    /**
     * Retorna la clave type del filtro
     * 
     * @param {number} group Número de grupo 
     * @returns {string} type
     */
    _typeByGroup = (group) => {
        if(typeof group !== "number"){
            return;
        }
        const data = this._defaultFiltersConfiguration()
                .find(f => f[0] === group);

        return data ? data[2] : undefined;
    }


    /**
     * Configuración de estado de los filtros seteados por el usuario.
     * @returns {object}
     */
    _defaultFiltersConfiguration = () => {
        // Obtengo todos los filtros y los colecciono en un array.
        const filters = this.filters.map((g, gk) => {
            // Usar caché para _fieldsToUse
            const fields = this._fieldsToUse(g, gk);
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
        // Verificar checkboxes y radios
        const checkboxRadioResult = this._defaultFiltersConfiguration().every(
            (e) => {
                const field = document.querySelector(`#id__${e[2]}__${e[0]}__${e[1]}`);
                return field ? field.checked : true;
        });

        // Verificar selects (todos deben estar en "Todos" - índice 0)
        const selectResult = this.filters.every((filter, groupIndex) => {
            if(filter.type === "select"){
                const entryKey = filter.field ? filter.field[0] :
                                 (filter.fields && filter.fields[0] ? filter.fields[0][0] : "");
                const selectElement = document.querySelector(`#select__${entryKey}__${groupIndex}`);
                return selectElement ? selectElement.selectedIndex === 0 : true;
            }
            return true;
        });

        return checkboxRadioResult && selectResult;
    };


    /**
     * Reestablece los filtros a la configuración creada por el usuario.
     * @return {undefined}
     */
    _resetFormFilters = () => {
        // Resetear checkboxes y radios
        this._defaultFiltersConfiguration().forEach(e => {
            const field = document.querySelector(`#id__${e[2]}__${e[0]}__${e[1]}`);
            if(field){
                field.checked = e[3];
            }
        });

        // Resetear selects a la opción "Todos" (índice 0)
        this.filters.forEach((filter, groupIndex) => {
            if(filter.type === "select"){
                const entryKey = filter.field ? filter.field[0] :
                                 (filter.fields && filter.fields[0] ? filter.fields[0][0] : "");
                const selectElement = document.querySelector(`#select__${entryKey}__${groupIndex}`);
                if(selectElement){
                    selectElement.selectedIndex = 0;
                }
            }
        });

        // Actualizar el estado de los checkboxes "marcar todos" después del reset
        const checkboxesSelector = `${this.scope_selector} .js-select-all-checkbox`;
        const checkboxes = document.querySelectorAll(checkboxesSelector);
        checkboxes.forEach((checkbox) => {
            const field = checkbox.dataset.field;
            this._updateCheckAllState(field);
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
            // Usar caché para _fieldsToUse
            const item = this._fieldsToUse( this.filters[e[0]], e[0] )[e[1]];
            return [
                item[1],
                this._countOccurrences(this.filtered_entries, item[2], item[0]),
                ...e
            ];
        });
        return results;
    };


    /**
     * ¡EXPERIMENTAL!
     * Agrega un title con el total de elementos en el panel de filtros.
     * @private
     * @returns {undefined}
     */
    _totalsInfo = () => {
        if (!this.filters_info) {
            return;
        }

        this.totals().forEach(field => {
            const [, count, groupIndex, filterIndex, filterName] = field;
            //field = [ "Plan 50 Destinos", 147, 1, 0, "tipo" ]
            const targetElement = this._getFilterInfoElement(
                filterName, groupIndex, filterIndex
            );

            if (!targetElement) {
                return;
            }

            const badge = this._createCountBadge(count);
            badge.appendChild(document.createTextNode(' '));
            targetElement.appendChild(document.createTextNode(' '));
            targetElement.appendChild(badge);
        });
    };

    /**
     * Obtiene el elemento del DOM donde se mostrará la información del filtro.
     * @private
     * @param {string} filterName - Nombre del filtro
     * @param {number} groupIndex - Índice del grupo
     * @param {number} filterIndex - Índice del filtro
     * @returns {HTMLElement|null}
     */
    _getFilterInfoElement = (filterName, groupIndex, filterIndex) => {
        const selector = `${this.scope_selector} `
            + `[data-info="${filterName}__${groupIndex}__${filterIndex}"]`;
        return document.querySelector(selector);
    };


    /**
     * Crea un badge con el contador de elementos.
     * @private
     * @param {number} count - Cantidad de elementos
     * @returns {HTMLElement}
     */
    _createCountBadge = (count) => {
        const badge = document.createElement("small");
        badge.classList.add(
            "badge",
            // "m-l-xs",
            "fw-medium",
            "bg-arg-gris-intermedio"
        );
        badge.textContent = count;

        const accessibleText = this._createAccessibleText(count);
        badge.appendChild(accessibleText);

        return badge;
    };


    /**
     * Crea el texto accesible para el badge.
     * @private
     * @param {number} count - Cantidad de elementos
     * @returns {HTMLElement}
     */
    _createAccessibleText = (count) => {
        const text = document.createElement("span");
        const pluralSuffix = count === 1 ? "" : "s";
        text.textContent = ` elemento${pluralSuffix}`;
        text.className = "pm-visually-hidden";
        return text;
    };


    /**
     * Valida el campo de un grupo.
     *
     * @param {object} entry Entrada de datos
     * @param {integer} group Índice del grupo de filtros
     * @param {integer} index Índice del filtro dentro del grupo.
     * @returns {boolean}
     */
    _search = (entry, group, index) => {
        // Usar caché al obtener los fields
        const filter = this._fieldsToUse(this.filters[group], group)[index];
        const filterKey = filter[0];

        // Early return si la entrada no tiene la propiedad
        if(!entry.hasOwnProperty(filterKey)){
            return false;
        }

        const search_for = filter[2];
        const entryValue = entry[filterKey];

        // Buscar con cortocircuito
        for(const searchTerm of search_for){
            if(searchTerm && entryValue.includes(searchTerm)){
                return true;
            }
        }

        return false;
    };


    /**
     * Valida los fields del grupo.
     *
     * @param {object} entry Entrada de datos
     * @param {object} fieldsGroup
     * @param {number} groupIndex Índice del grupo
     * @return {boolean}
     */
    _validateGroup = (entry, fieldsGroup, groupIndex) => {
        // Si el grupo está vacío
        if(fieldsGroup.length === 0){
            // Para selects, si está vacío significa "Todos" seleccionado
            if(this.filters[groupIndex]?.type === "select"){
                return true;
            }
            // Para checkboxes/radios, si está vacío significa que nada está seleccionado
            // por lo tanto NO debe mostrar ningún marker
            return false;
        }

        // Short-circuit: retornar true al encontrar el primer match
        for(const field of fieldsGroup){
            if(this._search(entry, field[0], field[1])){
                return true;
            }
        }
        return false;
    };


    /**
     * Valida una entrada
     *
     * @summary
     * 1. Obtengo la cantidad de grupos que tengo.
     * 2. Evaluo los fields de cada grupo y junto los resultados en un array
     * para retornar true los grupos tienen que dar true
     * @param {object} entry - La entrada a validar
     * @param {Map} groupedFilters - Filtros ya agrupados por grupo
     * @param {number} totalGroups - Total de grupos de filtros
     * @returns {boolean}
     */
    _validateEntry = (entry, groupedFilters, totalGroups) => {
        if(totalGroups < 1){
            return true;
        }

        // Validar cada grupo (cortocircuito)
        for(let i = 0; i < totalGroups; i++){
            const fieldsGroup = groupedFilters.get(i) || [];
            if(!this._validateGroup(entry, fieldsGroup, i)){
                return false;
            }
        }

        return true;
    };


    /**
     * Filtra los markers.
     */
    _filterData = () => {
        // 1. Obtengo los filtros del formulario activos.
        const availableFilters = this.formFilters();
        const totalGroups = this.filters.length;
        const inputValue = this.inputSearchValue;
        const hasInputSearchValue = !this.isEmptyString(inputValue);

        // Pre-calcular valores que son constantes durante el filtrado
        const refactorSearchTerm = hasInputSearchValue
            ? replaceSpecialChars(inputValue).toUpperCase()
            : "";

        // Pre-calcular searchFields fuera del loop (solo si hay búsqueda)
        const searchFields = hasInputSearchValue
            ? new Set([this.title, ...this.search_fields])
            : null;

        // Pre-agrupar los filtros UNA SOLA VEZ (antes era por cada entrada)
        const groupedFilters = new Map();
        for(const filter of availableFilters){
            const group = filter[0];
            if(!groupedFilters.has(group)){
                groupedFilters.set(group, []);
            }
            groupedFilters.get(group).push(filter);
        }

        // 2. Filtro las entradas en función de los filtros activos y el
        // criterio de búsqueda, si existiera.
        const activeFiltersEntries = this.entries.filter(entry => {
            // Valido si la entrada se encuentra dentro de los criterios
            // del grupo o filtros
            if(!this._validateEntry(entry.properties, groupedFilters, totalGroups)){
                return false;
            }

            // Si hay término de búsqueda, filtrar también por eso
            if(hasInputSearchValue){
                return this.searchEntry(
                    refactorSearchTerm,
                    entry.properties,
                    searchFields
                );
            }

            return true;
        });

        this.filtered_entries = activeFiltersEntries;
        return activeFiltersEntries;
    };


    /**
     * Render de funciones
     */
    _filteredData = (feed) => {
        // Usar feed si está definido, de lo contrario filtrar datos
        feed = (typeof feed !== "undefined") ? feed : this._filterData();

        // Solo clonar si es necesario (verificar si markersMap lo requiere)
        this.markersMap(feed);

        this._selectedMarker();
        this._helpText(feed);
        // this._resetSearch();
        // this._clickToggleFilter();

        if(this.slider){
            this._renderSlider();
            this._clickeableMarkers();
            this._clickeableFeatures();
            this._clickToggleSlider();
        }

        this._urlHash();
        this._setFetureAttributes();
        this._accesibleMenu();

        if(this.fit_bounds_after_filter){
            this.fitBounds();
        }
    };


    /**
     * Establece el valor del search _input hidden_ en el
     * campo de filtros.
     * @param {string} name - El valor a asignar al input de búsqueda.
     * @returns {undefined}
     */
    _setSearchInputValue = (name) => {
        const hiddenInputSelector = `#js-search-input${this.scope_sufix}`;

        if(!hiddenInputSelector){
            this.logger.warn("No se encuentra el input search");
            return;
        }
        const hiddenElement = document.querySelector(hiddenInputSelector);
        hiddenElement.value = name;
    }


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
        document.addEventListener("click", (event) => {
            const target = event.target;

            if(target.matches(`.js-poncho-map-reset${this.scope_sufix}`)){
                event.preventDefault();
                event.stopPropagation();

                this.removeHash();

                try {
                    // Obtengo el elemento text hidden con el valor de la 
                    // búsqueda. En este está impreso el dataset scope de
                    // ponchoSearch.
                    const searchHiddenInputSelector = `#js-search-input${this.scope_sufix}`;
                    const searchHiddenInput = document.querySelector(
                        searchHiddenInputSelector);
                    if(!searchHiddenInput){
                        return;
                    }

                    // Obtengo el input de búsqueda y borro el value.
                    const searchScope = searchHiddenInput.dataset.searchScope;
                    const searchSelector = `#id-poncho-map-search--${searchScope}`;
                    const searchInput = document.querySelector(searchSelector);
                    if(searchInput){
                        searchInput.value = "";
                    }
                } catch (error) {
                    this.logger.error(error);
                }

                try {
                    this._resetFormFilters();
                } catch (error) {
                    this.logger.error(error);
                }
                try {
                    this._filteredData(this.entries);
                } catch (error) {
                    this.logger.error(error);
                }
                try {
                    this._clearSearchInput();
                } catch (error) {
                    this.logger.error(error);
                }
                try {
                    this.resetView();
                } catch (error) {
                    this.logger.error(error);
                }
            }
        });
    };


    /**
     * Cambia la lista de markers en función de la selección de 
     * los filtros en PonchoMapFilter.
     * @TODO Ver el modo de hacer focus sobre el scope
     * @param {Function} callback - La función a ejecutar cuando el valor 
     * del filtro cambie.
     * @returns {undefined}
     */
    filterChange(callback) {
        // Asegura que callback es una función antes de proceder
        if (typeof callback !== 'function') {
            this.logger.error('filterChange requiere una función de callback.');
            return;
        }

        const selector = `.js-filters${this.scope_sufix || ''}`;
        const filterSelects = document.querySelectorAll(selector);
        filterSelects.forEach(element => {
            element.onchange = callback;
        });
    }


    /**
     * Actualiza el estado del checkbox "marcar todos" basado en los checkboxes individuales
     *
     * @param {string} field - El campo del filtro
     * @returns {undefined}
     */
    _updateCheckAllState = (field) => {
        const checkAllCheckbox = document.querySelector(
            `${this.scope_selector} #check-all-${field}`
        );

        if(!checkAllCheckbox) return;

        const inputsSelector = `${this.scope_selector} [id^=id__${field}]`;
        const inputs = Array.from(document.querySelectorAll(inputsSelector));

        if(inputs.length === 0) return;

        const checkedInputs = inputs.filter(input => input.checked);
        const allChecked = checkedInputs.length === inputs.length;
        const noneChecked = checkedInputs.length === 0;

        checkAllCheckbox.checked = allChecked;
        checkAllCheckbox.indeterminate = !allChecked && !noneChecked;
    };


    /**
     * Marca o desmarca todos los filtros
     *
     * @returns {undefined}
     */
    checkUncheckFilters = () => {
        const checkboxesSelector = `${this.scope_selector} .js-select-all-checkbox`;
        const checkboxes = document.querySelectorAll(checkboxesSelector);

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                const field = checkbox.dataset.field;
                const isChecked = checkbox.checked;

                const inputsSelector = `${this.scope_selector} [id^=id__${field}]`;
                const inputs = document.querySelectorAll(inputsSelector);

                inputs.forEach(input => input.checked = isChecked);

                // Remover el estado indeterminate después de cambiar
                checkbox.indeterminate = false;

                this._filteredData();
            });
        });

        // Agregar listeners a los checkboxes individuales para actualizar el estado del "marcar todos"
        const allInputsSelector = `${this.scope_selector} [id^=id__]`;
        const allInputs = document.querySelectorAll(allInputsSelector);

        allInputs.forEach(input => {
            input.addEventListener("change", () => {
                // Extraer el field del id del input (formato: id__field__group__index)
                const idParts = input.id.split("__");
                if(idParts.length >= 2){
                    const field = idParts[1];
                    this._updateCheckAllState(field);

                }
                this._filteredData();

            });
        });

        // Inicializar el estado de todos los checkboxes "marcar todos"
        checkboxes.forEach((checkbox) => {
            const field = checkbox.dataset.field;
            this._updateCheckAllState(field);
        });
    };


    /**
     * imprime el mapa
     */ 
    render = () =>{
        this._addSummary();

        this._hiddenSearchInput();
        this._resetViewButton(); 

        this._menuTheme();
        this._setThemes();

        if(this.filters.length > 0){
            this._filterButton();
            this._filterContainer();
            this._createFilters(this.filters);
        }

        this.tileLayer.addTo(this.map);

        this._filteredData();
        this.filterChange((event) => {
            event.preventDefault();
            this._filteredData();
        });
        this.checkUncheckFilters();

        this._totalsInfo();
        if(this.scroll && this.hasHash()){
            this.scrollCenter();
        }
        
        setTimeout(this.gotoHashedEntry, this.anchor_delay);
        if(this.filters_visible){
            this._filterContainerHeight();
        }
        
        this._setSliderSize();
        this.mapOpacity();
        this.mapBackgroundColor();

        this._listeners();
        this._accesibleExtras();
        
        this.layerViewConf.setVisuals();
        this.setMapAlignment(this.map_align);
        this._resetSearch();
        this._clickToggleFilter();
    };
};
// end of class