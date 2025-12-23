/**
 * PONCHO MAP SEARCH
 * 
 * @summary Busca marcadores 
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap, 
 * PonchoMapFilter
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
class PonchoMapSearch {
    /**
     * Constructor
     * @param {object} instance PonchoMap() o PonchoMapFilter() 
     * @param {object} options Grupo de opciones para el buscador. 
     */
    constructor(instance, options){
        const defaults = {
            scope: false,
            placeholder: "search_placeholder",
            search_fields: instance.search_fields,
            sort: true,
            sort_reverse: false,
            sort_key: "text",
            datalist: true,
            combobox: false,
            combobox_options: false
        };
        this.instance = instance;
        let opts = Object.assign({}, defaults, options);
        this.text = (instance.title ? instance.title : false);
        this.datalist = opts.datalist;
        this.combobox = opts.combobox;
        this.combobox_options = opts.combobox_options;
        this.placeholder = opts.placeholder;
        this.scope = opts.scope;
        this.scope_sufix = `--${this.scope}`;
        this.sort = opts.sort;
        this.sort_reverse = opts.sort_reverse;

        this.search_scope_selector = (
            this.scope ? `[data-scope="${this.scope}"]`: "");
        this.instance.search_fields = opts.search_fields;
        this.instance.accesible_menu_search = [];

        if(this.isSearch()){
            this.instance.accesible_menu_search.push({
                label: "search_data",
                link: `#id-poncho-map-search${this.scope_sufix}`
            });
        }

        this.selectors = {
            datalist: [
                `${this.search_scope_selector} .js-porcho-map-search__list`,
                `${this.search_scope_selector} .js-poncho-map-search__list`
            ].join(","),
            searchInput: `${this.search_scope_selector} .js-poncho-map-search__input`,
            scope: this.search_scope_selector,
            resultItem: `${this.search_scope_selector} .js-pm-search-result-item`,
            submit: `${this.search_scope_selector} .js-poncho-map-search__submit`,
            searchResultContainer:`${this.search_scope_selector} .js-pm-search`
        };
        
        this.cachedDataEntries = [];

        // Cachear selectores para mejorar rendimiento DOM
        this._cachedElements = {
            input: null,
            submit: null,
            filterSearchInput: null,
            searchContainer: null
        };
        this._searchHandlerBound = false;
    };


    /**
     * Crea el render para el template
     * @param {object} entry Entrada de datos json. 
     * @returns {boolean|string}
     */
    _comboboxLabel = (entry) => {
        if(!this.instance.isObject(this.combobox_options) || 
            this.instance.isEmptyObject(!this.combobox_options)){
            return false;
        }
        const template = this.combobox_options?.template;
        if(!this.instance.isEmptyString){
            this.instance.logger.error(
                "_comboboxLabel", 
                "Requiere una cadena de texto en template"
            );
            return false;
        }

        if(this.instance.isEmptyString(template)){
            this.instance.logger.error(
                "_comboboxLabel", 
                "template no puede estar vacío."
            );
            return false;
        }

        
        return this.instance.tpl(template, entry, ["*"]);
    }


    /**
     * Cachea las entradas de datos con términos de búsqueda procesados.
     * Filtra valores nulos/vacíos y maneja entradas sin propiedades.
     * @returns {undefined}
     */
    _cacheDataEntries = () => {
        if(!this.combobox){
            return;
        }

        if (!this.instance.entries || this.instance.entries.length === 0) {
            this.cachedDataEntries = [];
            return;
        }

        this.cachedDataEntries = this.instance.entries
            .map(entry => {
                if (!entry.properties) {
                    return null;
                }
                const searhFields = [
                    "name", 
                    ... new Set(this.instance.search_fields)
                ];
                const properties = entry.properties;
                const valuesToSearchIn = searhFields
                    .map(key => properties[key])
                    .filter(value => value !== null && 
                            value !== undefined && value !== "")
                    .map(value => String(value).trim());

                const results = slugify(valuesToSearchIn.join(" "));
                const pm_search_option_template = this._comboboxLabel(properties);

                return {
                    ...properties,
                    results, 
                    pm_search_option_template
                };
            })
            .filter(entry => entry !== null);
    }


    /**
     * Vefifica si está habilitado para hacer búsquedas.
     * @returns 
     */
    isSearch = () => (document.querySelector(this.search_scope_selector) ? 
            true : false);


    /**
     * Ordena un listado de objetos.
     * @param {object} entries - Array de objetos.
     * @param {string} key - Clave por la que se quiere ordenar. 
     * @returns {object} - Entradas ordenadas
     */
    sortData = (entries, key) => {
        let order = entries.sort((a, b) => {
            const clearString = (e) => {
                this.instance.removeAccents(e).toUpperCase()
            };
            if (clearString(a[key]) < clearString(b[key])){
                return -1;
            }
            if (clearString(a[key]) > clearString(b[key])){
                return 1;
            }
            return 0;
        });

        if(this.sort_reverse){
            return order.reverse();
        }      
        return order;
    };


    /**
     * Ejecuta una búsqueda desde un input text
     * @returns {undefined}
     */
    _triggerSearch = () => {
        // Cachear input solo si no está en cache
        if (!this._cachedElements.input) {
            this._cachedElements.input = document.querySelector(this.selectors.searchInput);
        }

        const input = this._cachedElements.input;
        if (!input) {
            return;
        }

        // Actualizar ID y label una sola vez
        const refactoredSelector = `id-poncho-map-search${this.scope_sufix}`;
        if (input.id !== refactoredSelector) {
            const inputLabel = document.querySelector(`[for="${input.id}"]`);
            if (inputLabel) {
                inputLabel.setAttribute("for", refactoredSelector);
            }
            input.id = refactoredSelector;
        }

        // Cachear submit solo si no está en cache
        if (!this._cachedElements.submit) {
            this._cachedElements.submit = document.querySelector(this.selectors.submit);
        }

        const submit = this._cachedElements.submit;
        if (!submit || this._searchHandlerBound) {
            return;
        }

        const eleSelector = `#js-search-input${this.instance.scope_sufix}`;
        this._cachedElements.filterSearchInput = document.querySelector(eleSelector);

        // Marcar que el handler ya fue agregado
        this._searchHandlerBound = true;

        // Agregar event listener una sola vez
        submit.addEventListener("click", (event) => {
            event.preventDefault();

            if (this._cachedElements.filterSearchInput) {
                this._cachedElements.filterSearchInput.value = input.value;
                this._renderSearch(input.value);
            }
        });
    };


    /**
     * Búsca un término en el mapa.
     * 
     * @param {string} term - Término a buscar.
     * @returns {undefined}
     */
    searchTerm = (term) => {

        if(this.instance.isEmptyString(term)){
            this.logger.warn(
                "searchTerm", 
                "El término de búsqueda no puede estar vacío.");
            return;
        }
        
        const hiddenInputselector = `#js-search-input${this.instance.scope_sufix}`;
        const filterValue = document.querySelectorAll(hiddenInputselector);
        filterValue.forEach(element => element.value = term);
        
        const searchInputSelector = `#id-poncho-map-search${this.scope_sufix}`;
        const searchInput = document.querySelectorAll(searchInputSelector);
        searchInput.forEach(element => element.value = term);

        this.instance._resetSearch();
        this._renderSearch(term);
    };


    /**
     * en el keyup copia el value al input hidden de filtros.
     * @returns {undefined}
     */
    _keyup = () => {
        const inputs = document.querySelectorAll(this.selectors.searchInput);

        // Cachear filter_search_input fuera del loop
        const filter_search_input = document.querySelector(
            `#js-search-input${this.instance.scope_sufix}`);

        if (!filter_search_input) {
            return;
        }

        filter_search_input.dataset.searchScope = this.scope;

        // Usar la misma función handler para ambos eventos
        const updateValue = (ele) => {
            filter_search_input.value = ele.value;
        };

        inputs.forEach(ele => {
            ele.addEventListener('keyup', () => updateValue(ele));
            ele.addEventListener('keydown', () => updateValue(ele));
        });
    };


    /**
     * Agrega el placeholder si fué seteado en las opciones.
     * @returns {undefined}
     */
    _placeHolder = () => {
        if(!this.placeholder){
            return "";
        }
        document.querySelectorAll(this.selectors.searchInput)
            .forEach(element => 
                    element.placeholder = this.instance._t(this.placeholder));
    };


    /**
     * Hace una búsqueda basado en el término escrito en el input de
     * búsqueda.
     * @returns {undefined}
     */
    _renderSearch = (term) => {
        if(this.instance.isEmptyString(term)){
            this.logger.error(
                "_renderSearch", 
                "El término de búsqueda no puede estar vacío.");
            return;
        }

        const entries = this.instance._filterData();
        // Renderizo el mapa
        // @see PonchoMap
        this.instance.markersMap(entries); 

        if(this.instance.slider){
            this.instance._renderSlider();
            this.instance._clickeableFeatures();
            this.instance._clickeableMarkers();
            this.instance._clickToggleSlider();
        }

        if(this.instance.hash){
            this.instance._urlHash();
        }
        // Alejo el mapa a su posición por defecto.
        // @see PonchoMap resetView()
        // this.instance.resetView();
        
        // Si la búsqueda encontró una sola entrada, voy a esa
        // entrada y muestro la info, ya sea un popUp o un slider.
        // Si hay más de una entrada muestro los markers y hago 
        // zoom abarcando el límite de todos ellos.
        if(entries.length == 1){
            this.instance.gotoEntry(entries[0].properties[this.instance.id]);
        } else if(term.trim() != "") {
            this.instance.removeHash();
            setTimeout(this.instance.fitBounds, this.instance.anchor_delay);
        }

        this.instance._helpText(entries);
        this.instance._resetSearch();
        // this.instance._clickToggleFilter();
        this.instance._setFetureAttributes();
        this.instance._accesibleMenu();
    };


    /**
     * Agrega options en el claslist del input de búsqueda.
     * ```
     * <datalist>
     *     <option>Agregado 1</option>
     *     <option>Agregado 2</option>
     *     ...
     * </datalist>
     * ```
     * @returns {undefined}
     */
    _addDataListOptions = () => {
        if(!this.datalist){
            return null;
        }

        // Buscar el input una sola vez antes del loop
        const search_input = document.querySelector(this.selectors.searchInput);

        if(!search_input){
            return null;
        }

        const datalist_id = `id-datalist${this.scope_sufix}`;
        search_input.setAttribute("list", datalist_id);
        const fragment = document.createDocumentFragment();

        // Pre-filtrar entradas válidas
        const validEntries = this.instance.filtered_entries.filter(
            e => e.properties && e.properties[this.text]
        );

        // Crear todas las options de una vez
        validEntries.forEach(e => {
            const opt = document.createElement("option");
            opt.value = e.properties[this.text];
            fragment.appendChild(opt);
        });

        // Selector corregido sin el typo
        document.querySelectorAll(this.selectors.datalist)
            .forEach(element => {
                element.id = datalist_id;
                element.replaceChildren(fragment.cloneNode(true));
            });
    };


    /**
     * Agrega el aria role y aria label al grupo de buscador.
     * @accesibility
     * @returns {undefined}
     */
    _searchRegion = () => {
        const element = document.querySelector(this.search_scope_selector);
        element.setAttribute("role", "region");
        element.setAttribute("aria-label", "Buscador");
    };


    /**
     * Busca entradas que coincidan con los valores proporcionados.
     * @param {string} values - Término de búsqueda a procesar.
     * @returns {Array} Array de entradas que coinciden con el término de búsqueda.
     */
    findEntries = (values) => {
        const slugifiedTerm = slugify(values);

        return this.cachedDataEntries.filter(entry => {
            return entry.results.includes(slugifiedTerm);
        });
    };


    /**
     * Crea un elemento de lista para un resultado de búsqueda.
     * @param {object} entry - Entrada de datos con las propiedades del marcador.
     * @returns {HTMLElement} Elemento <li> con el enlace del resultado de búsqueda.
     */
    _creatSearchItem = (entry) => {

        // const template = this._comboboxLabel(entry);
        const template = entry.pm_search_option_template;

        var searchItem = document.createElement("li");
        searchItem.setAttribute("role", "option");
        searchItem.classList.add("m-y-0", "pm-search-results__option");

        const defaultLabel = entry[ this.text ];
        const url = `${window.location.pathname}#${entry[this.instance.id]}`;

        var a = document.createElement("a");
        a.href = url;
        a.tabIndex = 0;
        a.dataset.name = defaultLabel;
        a.classList.add(
            "js-pm-search-result-item", 
            "pm-search-results__action"
        );
        a.setAttribute("data-entry-id", entry[this.instance.id]);

        if(template){
            a.innerHTML = template;
        } else {
            a.textContent = defaultLabel;
        }

        searchItem.appendChild(a);
        return searchItem;
    };


    /**
     * Define el tañamo del desplegable para las búsquedas
     * @returns {boolean|string}
     */
    _comboboxWidth = () => {
        if(!this.combobox_options?.display){
            return false;
        }

        const stylesAvaiable = ["expanded", "fit-content"];
        const styleToApply = this.combobox_options?.display;

        if(!stylesAvaiable.includes(styleToApply)){
            return this.instance.logger(
                "_comboboxWidth", 
                "El estilo asignado al ancho del desplegable no existe."
            );
        }

        return `pm-search-results__${styleToApply}`;
    };


    /**
     * Cierra el contenedor de resultados de búsqueda.
     * @returns {undefined}
     */
    _closeSearchResults = () => {
        // Usar el elemento cacheado si existe
        const searchContainer = this._cachedElements.searchContainer ||
                document.querySelector(this.selectors.searchResultContainer);
        if (searchContainer) {
            searchContainer.classList.remove("pm-search-results");
            searchContainer.replaceChildren();
        }
    }


    /**
     * Configura el buscador tipo combobox con funcionalidad de autocompletado.
     * Implementa navegación por teclado (ArrowUp, ArrowDown, Escape) y muestra
     * resultados en tiempo real mientras el usuario escribe.
     * @returns {undefined}
     */
    searcher = () => {
        if(!this.combobox){
            return;
        }

        const comboboxWidth = this._comboboxWidth();
        const dataList = document.querySelectorAll(this.selectors.datalist);
        dataList.forEach(ele => ele.remove());

        // Usar elemento cacheado o buscarlo
        const searchElement = this._cachedElements.input ||
                            document.querySelector(this.selectors.searchInput);

        if (!searchElement) {
            return;
        }

        // Batch DOM writes para mejorar rendimiento
        searchElement.setAttribute("autocomplete", "off");
        searchElement.setAttribute("aria-autocomplete", "list");
        searchElement.setAttribute("aria-expanded", "true" );
        searchElement.setAttribute("aria-haspopup", "listbox");
        searchElement.setAttribute("aria-controls", "results-list");
        searchElement.setAttribute("role", "combobox");

        // Crear y cachear el contenedor de búsqueda
        const searchContainer = document.createElement("div");
        searchContainer.classList.add("js-pm-search");
        searchContainer.setAttribute("aria-live", "polite");
        this._cachedElements.searchContainer = searchContainer;

        const debounceTimer = { current: null };
        const DEBOUNCE_DELAY = 150;

        const parentNode = searchElement.parentElement;
        parentNode.after(searchContainer);

        // Event listener para keyup con debounce
        searchElement.addEventListener("keyup", () => {
            clearTimeout(debounceTimer.current);

            debounceTimer.current = setTimeout(() => {
                searchContainer.classList.remove("pm-search-results");
                if(comboboxWidth){
                    searchContainer.classList.remove(comboboxWidth);
                }
                searchContainer.replaceChildren();

                const value = String(searchElement.value);

                if (!value.trim() || value.length < 2) {
                    return;
                }

                const searchResult = this.findEntries(value);
                if(searchResult.length < 1){
                    return;
                }

                const ul = document.createElement("ul");
                // ul.tabIndex = 0;
                ul.classList.add("pm-search-results__listbox");
                ul.setAttribute("role", "listbox");
                const fragment = document.createDocumentFragment();

                for (let i of searchResult.slice(0, 20)) {
                    fragment.appendChild(this._creatSearchItem(i));
                }

                ul.appendChild(fragment);
                searchContainer.classList.add("pm-search-results");
                if(comboboxWidth){
                    searchContainer.classList.add(comboboxWidth);
                }

                searchContainer.appendChild(ul);
            }, DEBOUNCE_DELAY);
        });

        // Event listener para navegación con teclado en el input
        searchElement.addEventListener("keydown", (e) => {
            if(e.key == "ArrowDown"){
                e.preventDefault();
                const firstAnchor = searchContainer.querySelector(this.selectors.resultItem);
                if(firstAnchor){
                    firstAnchor.focus();
                }
            }
        });

        // Navegación dentro de los resultados de búsqueda
        searchContainer.addEventListener("keydown", (e) => {
            const target = e.target;

            if(e.key == "ArrowDown"){
                e.preventDefault();

                if(target.matches(this.selectors.resultItem)){
                    const currentLi = target.closest("li");
                    const nextLi = currentLi.nextElementSibling;

                    if(nextLi){
                        const nextAnchor = nextLi.querySelector(this.selectors.resultItem);
                        if(nextAnchor){
                            nextAnchor.focus();
                        }
                    }
                }
            }

            if(e.key == "ArrowUp"){
                e.preventDefault();

                if(target.matches(this.selectors.resultItem)){
                    const currentLi = target.closest("li");
                    const prevLi = currentLi.previousElementSibling;

                    if(prevLi){
                        const prevAnchor = prevLi.querySelector(this.selectors.resultItem);
                        if(prevAnchor){
                            prevAnchor.focus();
                        }
                    } else {
                        // Si estamos en el primer elemento, volver al input
                        searchElement.focus();
                    }
                }
            }

            if(e.key == "Tab"){
                if(target.matches(this.selectors.resultItem)){
                    const currentLi = target.closest("li");
                    const nextLi = currentLi.nextElementSibling;

                    // Si no hay siguiente elemento y se presiona Tab (sin Shift)
                    if(!nextLi && !e.shiftKey){
                        this._closeSearchResults();
                    }
                }
            }

            if(e.key == "Escape"){
                this._closeSearchResults();
                searchElement.value = "";
                searchElement.focus();
            }
        });

        // Agregar el listener de clicks aquí
        window.addEventListener("click", (e) => {
            const target = e.target.closest(this.selectors.resultItem);

            if (target) {
                e.preventDefault();

                const id = target.dataset.entryId;
                const name = target.dataset.name;

                searchElement.value = name;
                this._closeSearchResults();
                this.instance.gotoEntry(id);
            } else if (!searchElement.contains(e.target) && !searchContainer.contains(e.target)) {
                // Cerrar si se hace click fuera del input y del contenedor de resultados
                this._closeSearchResults();
            }
        });
    }


    /**
     * Prepara el componente de búsqueda
     */
    render = () => {
        this._placeHolder();
        this._triggerSearch();
        this._addDataListOptions();
        
        this.instance.filterChange((event) => {
            event.preventDefault();
            this.instance._filteredData();
            this._addDataListOptions();
        })
        this._searchRegion();
        this._keyup();
        this.instance._accesibleMenu();
        this._cacheDataEntries();
        this.searcher();
    }
};