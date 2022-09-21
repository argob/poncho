/**
 * PONCHO MAP SEARCH
 * 
 * @summary Busca marcadores usando el componente select2
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, septiembre 2022
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap, 
 * PonchoMapFilter, select2.js
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2022 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class PonchoMapSearch {
    constructor(instance, options){
        const defaults = {
            "scope": false,
            "template": false,
            "allow_clear": false,
            "placeholder": "Su búsqueda",
            "theme": "poncho",
            "minimum_input_length": 0,
            "search_fields": instance.search_fields,
            "sort": true,
            "sort_reverse": false,
            "sort_key": "text",
        };
        this.instance = instance;
        let opts = Object.assign({}, defaults, options);
        this.theme = opts.theme;
        this.template = (
              typeof(opts.template) === "function" ? opts.template: false);
        this.text = (instance.title ? instance.title : false);
        this.placeholder = opts.placeholder;
        this.allow_clear = opts.allow_clear;
        this.scope = opts.scope;
        this.sort_key = opts.sort_key;
        this.minimum_input_length = opts.minimum_input_length;
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
        const clearString = e => this.instance.removeAccents(e).toUpperCase();
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
     * Busca el térmono en cada una de las entradas.
     * 
     * @param {object} params - Define los parametros de búsqueda del 
     * componente select2. 
     * @param {objecct} data - Entrada donde hacer la búsqueda.
     * @returns {objecct|null}
     */
    matchTerm = (params, data) => {
        if (typeof(params.term) === "undefined" || 
            params.term.toString().trim() === ""){
          return data;
        }
        return this.instance.searchTerm(params.term, data);
    };

    /**
     * Prepara las entradas para la búsqueda
     * @param {object} entries 
     */
    dataSelect = (entries) => {
        return entries.map( (e) => {
            let entry = {id: e[this.instance.id], text: e[this.text]};
            entry.html = (this.template ? this.template(this, e) : e[this.text]);
            return ({...e, ...entry, ...{selected:false}});
        });
    };

    /**
     * Prepara el listado de entradas que se utilizará para la búsqueda.
     * @returns {object}
     */
    dataset = () => {
        const data = ((this.instance instanceof PonchoMapFilter) ? 
                      this.instance.filtered_entries : this.instance.entries);
        let data_select = this.dataSelect(this.sortData(data, this.sort_key));

        if(!this.sort){
            data_select = this.dataSelect(data);
        }
        return data_select;
    };

    /**
     * Configuración para el componenete select2.
     */
    selectTwo = () => {
        if(!jQuery.isFunction( jQuery.fn.select2 )){
            return;
        }

        jQuery(`${this.search_scope_selector} .js-poncho-map-search__select2`).select2({
              data: this.dataset(),
              matcher: this.matchTerm,
              tags:true,
              language: {
                  inputTooShort: function () {
                      return `Debe introducir al menos 2 caracteres…`;
                  }
              },
              allowClear: this.allow_clear,
              theme: this.theme,
              minimumInputLength: this.minimum_input_length,
              placeholder: this.placeholder,
              escapeMarkup: function(markup) {
                  return markup;
              },
              templateResult: function(data) {
                  return data.html;
              },
              templateSelection: function(data) {
                  return data.text;
              },
          }).on("select2:select", e => {
              this.instance.gotoEntry(e.params.data.id);
          }).on("select2:open", () => {
              document
                  .querySelectorAll(".select2-search__field")
                  .forEach(e => e.focus());
          });
    };

    /**
     * Fix para solucionar el que quede seleccionado el primer option 
     * del select.
     */
    firstEmptyOption = () => document
          .querySelectorAll(
              `${this.search_scope_selector} .js-poncho-map-search__select2`)
          .forEach(element => {
      element.innerHTML = "";
      element.appendChild(document.createElement("option"));
    });

    /**
     * Ejecuta una búsqueda desde un input text
     * @returns 
     */
    triggerSearch = () => {
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
                this.renderSearch(term);
            });
        });
        

    }

    /**
     * en el keyup copia el value al input hidden de filtros.
     */
    keyup = () => {
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
     * Límpia del input search el término de búsqueda. 
     * @returns {void}
     */
    cleanInput = () => document
        .querySelector(
            `${this.search_scope_selector} .js-poncho-map-search__input`)
        .value = "";

    /**
     * Agrega el placeholder si fué seteado en las opciones. 
     * @returns {void}
     */
    placeHolder = () => {
        if(!this.placeholder){
            return "";
        }
       
        document.querySelectorAll(
              `${this.search_scope_selector} .js-poncho-map-search__input`)
            .forEach(element => element.placeholder = this.placeholder.toString());
    };

    /**
     * Vacía el contenido del elemento que contiene los textos de ayuda.
     * @returns {void}
     */
    cleanHelpText = () => document
        .querySelector(
            `${this.instance.scope_selector} .js-poncho-map__help`)
        .innerHTML = "";

    /**
     * Hace una búsqueda basado en el término escrito en el input de
     * búsqueda.
     */
    renderSearch = (term) => {
        const entries = this.instance.filterData();
        // Renderizo el mapa
        // @see PonchoMap
        this.instance.markersMap(entries); 
        if(this.instance.slider){
            this.instance.renderSlider();
            this.instance.clickeableMarkers();
            this.instance.clickToggleSlider();
        }

        if(this.instance.hash){
            this.instance.urlHash();
        }
        // Alejo el mapa a su posición por defecto.
        // @see PonchoMap resetView()
        this.instance.resetView();
        // Si la búsqueda encontró una sola entrada, voy a esa
        // entrada y muestro la info, ya sea un popUp o un slider.
        // Si hay más de una entrada muestro los markers y hago 
        // zoom abarcando el límite de todos ellos.
        if(entries.length == 1){
            this.instance.gotoEntry(entries[0][this.instance.id]);
        } else if(term.trim() != "") {
            this.instance.removeHash();
            setTimeout(this.instance.fitBounds, 350);
        }

        this.instance.helpText(entries);
        this.instance.resetSearch();
        this.instance.clickToggleFilter();
    };
  
    /**
     * Agrega options en el claslist del input de búsqueda.
     * <datalist>
     *     <option>Agregado 1</option>
     *     <option>Agregado 2</option>
     *     ...
     * </datalist>
     */
    addDataListOptions = () => document
        .querySelectorAll(
            `${this.search_scope_selector} #js-porcho-map-search__list`)
        .forEach(element => {
            element.innerHTML = new Date();
            const options = (content) => {
                const opt = document.createElement("option"); 
                opt.textContent = content; 
                return opt;
            };

            this.instance.filtered_entries.forEach(e => 
                element.appendChild(options(e[this.text]))
            );
    });

    /**
     * Ejecuta el componente select2 y activa el listener de los filtros.
     */
    render = () => {
        console.log(
            "%cPonchoMapFilterSearch",
            'padding:5px;border-radius:6px;background: #ff4400;color: #fff');

        this.firstEmptyOption();
        this.selectTwo();
        this.placeHolder();
        this.triggerSearch();
        this.addDataListOptions();
        this.instance.filterChange((event) => {
            // console.log("%cPonchoFilterSearch (listener)", 'color: #ff4400;');
            event.preventDefault();
            this.instance.filteredData();
            this.addDataListOptions();
        })
        this.keyup();
        /*
        jQuery(document).on('keyup keypress keydown', ".select2-search__field", 
            function (e) {
            if (e.which == 13) {
                search.renderSearch( 
                    document
                        .querySelector(`.select2-selection__rendered`)
                        .textContent
                )
            }
        });
        */
    }  
};