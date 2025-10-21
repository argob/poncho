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
            "scope": false,
            "placeholder": "search_placeholder",
            "search_fields": instance.search_fields,
            "sort": true,
            "sort_reverse": false,
            "sort_key": "text",
            "datalist": true
        };
        this.instance = instance;
        let opts = Object.assign({}, defaults, options);
        this.text = (instance.title ? instance.title : false);
        this.datalist = opts.datalist;
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
    };


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

        const inputSelector = `${this.search_scope_selector} `
                + `.js-poncho-map-search__input`;
        const input = document.querySelector(inputSelector);
        if(input){
            input.id = `id-poncho-map-search${this.scope_sufix}`;
        }

        const submitSelector = `${this.search_scope_selector} `
                + `.js-poncho-map-search__submit`;
        const submit = document.querySelector(submitSelector);

        if(submit){
            submit.addEventListener("click", (event) => {
                event.preventDefault();
        
                const eleSelector = `#js-search-input${this.instance.scope_sufix}`;
                const element = document.querySelector(eleSelector);

                if(element){
                    element.value = input.value;
                    const term = input.value;
                    this._renderSearch(term);
                }
            });
        }
    };


    /**
     * Búsca un término en el mapa.
     * 
     * @param {string} term - Término a buscar.
     * @returns {undefined}
     */
    searchTerm = (term) => {

        if(this.instance.isEmptyString(term)){
            console.error(
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
        const input = document.querySelectorAll(
            `${this.search_scope_selector} .js-poncho-map-search__input`);
        input.forEach(ele => {

            const filter_search_input = document.querySelector(
                `#js-search-input${this.instance.scope_sufix}`);
            
            ele.onkeyup = (() => {
                filter_search_input.value = ele.value;
            });

            ele.onkeydown = (() => {
                filter_search_input.value = ele.value;
            });
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
        document.querySelectorAll(
            `${this.search_scope_selector} .js-poncho-map-search__input`)
            .forEach(element => element.placeholder = this.instance._t(this.placeholder));
    };

    /**
     * Hace una búsqueda basado en el término escrito en el input de
     * búsqueda.
     * @returns {undefined}
     */
    _renderSearch = (term) => {
        if(this.instance.isEmptyString(term)){
            console.error(
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
        document.querySelectorAll(
                // se corrige un typo.
                `${this.search_scope_selector} .js-porcho-map-search__list,`
                + ` ${this.search_scope_selector} .js-poncho-map-search__list`)
            .forEach(element => {
                element.innerHTML = "";
                const options = (content) => {
                    const opt = document.createElement("option"); 
                    opt.value = content; 
                    return opt;
                };
                // Asocio el input con el datalist.
                const search_input = document.querySelector(
                    `${this.search_scope_selector} .js-poncho-map-search__input`
                );
                const datalist_id = `id-datalist${this.scope_sufix}`;
                search_input.setAttribute("list", datalist_id);
                element.id = datalist_id;
                this.instance.filtered_entries.forEach(e => {
                    if(!e.properties[this.text]){
                        return;
                    }
                    element.appendChild(options(e.properties[this.text]));
                });
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
    }
};