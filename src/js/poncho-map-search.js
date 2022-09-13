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
    constructor(filter, options){
        const defaults = {
            "scope": false,
            "text": "text",
            "id": "id",
            "template": false,
            "allow_clear": true,
            "placeholder": "Su búsqueda",
            "theme": "poncho",
            "minimum_input_length": 0,
            "search_fields": [],
            "sort": true,
            "sort_reverse": false,
            "sort_key": "text"
        };
        this.data = filter;
        let opts = Object.assign({}, defaults, options);
        this.theme = opts.theme;
        this.template = (
              typeof(opts.template) === "function" ? opts.template: false);
        this.text = opts.text;
        this.id = opts.id;
        this.placeholder = opts.placeholder;
        this.allow_clear = opts.allow_clear;
        this.search_fields = opts.search_fields;
        this.scope = opts.scope;
        this.sort_key = opts.sort_key;
        this.minimum_input_length = opts.minimum_input_length;
        this.sort = opts.sort;
        this.sort_reverse = opts.sort_reverse;
        this.search_scope_selector = (
              this.scope ? `[data-scope="${this.scope}"]`: "");
    };

    /**
     * Remueve acentos y caracteres especiales.
     * @param {string} data - cadena de texto a limpiar. 
     * @returns {string}
     * 
     * >>> removeAccents("Acción Murciélago árbol")
     * Accion murcielago arbol
     */
    removeAccents = (data) => {
        if(!data){
            return "";
        }

        return data
            .replace(/έ/g, "ε")
            .replace(/[ύϋΰ]/g, "υ")
            .replace(/ό/g, "ο")
            .replace(/ώ/g, "ω")
            .replace(/ά/g, "α")
            .replace(/[ίϊΐ]/g, "ι")
            .replace(/ή/g, "η")
            .replace(/\n/g, " ")
            .replace(/[áÁ]/g, "a")
            .replace(/[éÉ]/g, "e")
            .replace(/[íÍ]/g, "i")
            .replace(/[óÓ]/g, "o")
            .replace(/[Öö]/g, "o")
            .replace(/[úÚ]/g, "u")
            .replace(/ê/g, "e")
            .replace(/î/g, "i")
            .replace(/ô/g, "o")
            .replace(/è/g, "e")
            .replace(/ï/g, "i")
            .replace(/ü/g, "u")
            .replace(/ã/g, "a")
            .replace(/õ/g, "o")
            .replace(/ç/g, "c")
            .replace(/ì/g, "i");
    };

    /**
     * Ordena un listado de objetos.
     * @param {object} entries - Array de objetos.
     * @param {string} key - Clave por la que se quiere ordenar. 
     * @returns {object} - Entradas ordenadas
     */
    sortData = (entries, key) => {
      let order = entries.sort((a, b) => {
        const clearString = e => this.removeAccents(e).toUpperCase();
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
    matcher = (params, data) => {
        // console.log(typeof params.term)
        if ( typeof(params.term) === "undefined" || params.term.toString().trim() === "" ){
            return data;
        }

        const search_for = [...["text"], ...this.search_fields].filter(e => e);
        for(const item of search_for){
          if(!data.hasOwnProperty(item)){
              continue;
          }

          const term = this.removeAccents(params.term).toUpperCase();
          const field = this.removeAccents(data[item]).toString().toUpperCase();
          try {
              if(field.includes(term)){
                  return data;
              }
          } catch (error) {
              console.error(error);
          }
        }
        return null;
    };

    /**
     * Prepara las entradas para la búsqueda
     * @param {object} entries 
     */
    dataSelect = (entries) => {
        return entries.map( (e) => {
            let entry = {id: e[this.id], text: e[this.text]};
            entry.html = (this.template ? this.template(this, e) : e[this.text]);
            return ({...e, ...entry, ...{selected:false}});
        });
    };

    /**
     * Configuración para el componenete select2.
     */
    selectTwo = () => {
        const data = ((this.data instanceof PonchoMapFilter) ? 
              this.data.filtered_entries : this.data.entries);
        let data_select = this.dataSelect(this.sortData(data, this.sort_key));

        if(!this.sort){
            data_select = this.dataSelect(data);
        }

      const select = jQuery(`.poncho-map-search${this.search_scope_selector}`).select2({
            data: data_select,
            matcher: this.matcher,
            tags:true,
            allowClear: this.allow_clear,
            theme: this.theme,
            minimumInputLength: this.minimum_input_length,
            placeholder : this.placeholder,
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
            this.data.gotoEntry(e.params.data.id);
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
          .querySelectorAll(`.poncho-map-search${this.search_scope_selector}`)
          .forEach(e => {
      e.innerHTML = "";
      e.appendChild(document.createElement("option"));
    });

    /**
     * Cambia la lista de markers en función de la selección de 
     * los filtros en PonchoMapFilter.
     * @TODO Ver el modo de hacer focus sobre el scope
     * @returns {void}
     */
    change = () => document
        .querySelectorAll(`${this.data.scope_selector} .js-formulario input`)
        .forEach(k => {
            k.addEventListener("change", () => {
                this.selectTwo();
            });
    });

    /**
     * Ejecuta el componente select2 y activa el listener de los filtros.
     */
    render = () => {
        this.firstEmptyOption();
        this.selectTwo();
        this.change();
    }  
};