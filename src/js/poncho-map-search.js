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
    constructor(instance, options){
        const defaults = {
            "scope": false,
            "placeholder": "Su búsqueda",
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
        this.sort = opts.sort;
        this.sort_reverse = opts.sort_reverse;
        this.search_scope_selector = (
            this.scope ? `[data-scope="${this.scope}"]`: "");
        this.instance.search_fields = opts.search_fields;
    };

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
     * @returns 
     */
    _triggerSearch = () => {
        const input = document.querySelector(
            `${this.search_scope_selector} .js-poncho-map-search__input`);
        const submit = document.querySelectorAll(
                `${this.search_scope_selector} .js-poncho-map-search__submit`);

        submit.forEach(e => {
            e.onclick = (event => {
                event.preventDefault();
                const element = document.querySelector(
                      `#js-search-input${this.instance.scope_sufix}`);
                element.value = input.value;
                const term = input.value;
                this._renderSearch(term);
            });
        });
    };

    /**
     * en el keyup copia el value al input hidden de filtros.
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
            .forEach(element => element.placeholder = this.placeholder.toString());
    };

    /**
     * Hace una búsqueda basado en el término escrito en el input de
     * búsqueda.
     */
    _renderSearch = (term) => {
        const entries = this.instance._filterData();
        // Renderizo el mapa
        // @see PonchoMap
        this.instance.markersMap(entries); 
        if(this.instance.slider){
            this.instance._renderSlider();
            this.instance._clickeableFeature();
            this.instance._clickeableMarkers();
            this.instance.clickToggleSlider();
        }

        if(this.instance.hash){
            this.instance._urlHash();
        }
        // Alejo el mapa a su posición por defecto.
        // @see PonchoMap resetView()
        this.instance.resetView();
        // Si la búsqueda encontró una sola entrada, voy a esa
        // entrada y muestro la info, ya sea un popUp o un slider.
        // Si hay más de una entrada muestro los markers y hago 
        // zoom abarcando el límite de todos ellos.
        if(entries.length == 1){
            this.instance.gotoEntry(entries[0].properties[this.instance.id]);
        } else if(term.trim() != "") {
            this.instance.removeHash();
            setTimeout(this.instance.fitBounds, 350);
        }

        this.instance._helpText(entries);
        this.instance.resetSearch();
        this.instance.clickToggleFilter();
        this.instance._setFetureAttributes();
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
     */
    _addDataListOptions = () => {
        if(!this.datalist){
            return null;
        }
        document.querySelectorAll(
                `${this.search_scope_selector} .js-porcho-map-search__list`)
            .forEach(element => {
                element.innerHTML = new Date();
                const options = (content) => {
                    const opt = document.createElement("option"); 
                    opt.textContent = content; 
                    return opt;
                };
                this.instance.filtered_entries.forEach(e => 
                    element.appendChild(options(e.properties[this.text]))
                );
        });
    };

    /**
     * Agrega el aria role y aria label al grupo de buscador.
     * @accesibility
     */
    _searchRegion = () => {
        const element = document.querySelector(this.search_scope_selector);
        element.setAttribute("role", "region");
        element.setAttribute("aria-label", "Buscador");
    };

    /**
     * Ejecuta el componente select2 y activa el listener de los filtros.
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
    }  
};