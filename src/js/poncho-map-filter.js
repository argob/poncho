/**
 * PONCHO MAP FILTER
 * 
 * @summary Generador de mapas con filtro utilizando 
 * OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, august 2022
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap
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
class PonchoMapFilter extends PonchoMap {
  constructor(data, options){
    super(data, options);

    const defaults = {
      "filters": [],
      "filters_visible": false, 
      "search_fields":[],
      "messages": {
          "reset": "<a href=\"#\" class=\"{{reset_search}}\">Reestablecer</a>",
          "initial": "Hay {{total_results}} puntos en el mapa.",
          "no_results_by_term": "No encontramos resultados para tu búsqueda. " 
                  + "<a href=\"#\" class=\"{{reset_search}}\">Reestablecer</a>",
          "no_results": "No se encontraron entradas. " 
                  + "<a href=\"#\" class=\"{{reset_search}}\">Reestablecer</a>",
          "results": "{{total_results}} resultados coinciden con tu búsqueda." 
                  + " <a href=\"#\" class=\"{{reset_search}}\">Reestablecer</a>",
          "one_result": "{{total_results}} resultado coincide con tu búsqueda." 
                  + " <a href=\"#\" class=\"{{reset_search}}\">Reestablecer</a>",
          "has_filters": "<i title=\"¡Advertencia!\" aria-hidden=\"true\" " 
                  + "class=\"fa fa-warning text-mandarina\"></i> " 
                  + "Se están usando " 
                  + "<a href=\"{{anchor}}\" " 
                  + "title=\"Abre o cierra el panel de filtros\""
                  + "class=\"{{filter_class}}\">" 
                  + "filtros</a>."
        }
    };
    let opts = Object.assign({}, defaults, options);
    this.filters = opts.filters;
    this.filters_visible = opts.filters_visible;
    this.valid_fields = ["checkbox", "radio"];
    this.search_fields = opts.search_fields;
    this.messages = opts.messages;
  };

  /**
   * Parser de template simple
   * @param {string} str - Cadena de texto a parsear 
   * @param {object} values  
   * @returns {string}
   * 
   * >>> tplParser("Mi hija se llama {{ nombre}}.", {nombre:"Olivia"})
   * Mi hija se llama Olivia.
   */
  tplParser = (value, kwargs) => {
      return Object.keys(kwargs).reduce((str, key) => {
          const regex = new RegExp(
                '\\{\\{\\s{0,2}' + key + '\\s{0,2}\\}\\}', 'gm');
          str = str.replace(regex, kwargs[key]);
          return str;
      }, value);
  };

  /**
   * Mensajes de ayuda
   * @param {string} term - Término buscado
   * @param {object} results - Resultados de la búsqueda.
   * @returns {void}
   */
  helpText = (results) => {
      const help_container = document.querySelectorAll(
          `${this.scope_selector} .js-poncho-map__help`);
      help_container.forEach(element => {
          element.innerHTML = "";
          //
          const values = {
              "total_results": results.length,
              "total_entries": this.entries.length,
              "total_filtered_entries": this.filtered_entries.length,
              "filter_class": `js-close-filter${this.scope_sufix}`,
              "anchor": "#",
              "term": this.inputSearchValue,
              "reset_search": `js-poncho-map-reset${this.scope_sufix}`
          };

          // Arma el listado de mensajes.
          const ul = document.createElement("ul");
          ul.classList.add("m-b-0", "list-unstyled");
          ul.setAttribute("role", "region");
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
                  li(this.tplParser(this.messages.no_results_by_term, values))
              );
          }
          // 0 entradas, sin creterio de búsqueda.
          else if(this.inputSearchValue === "" && values.total_results < 1){
              ul.appendChild(
                  li(this.tplParser(this.messages.no_results, values))
              );
          } 
          // Si solo hay un resultado
          else if(values.total_results == 1){
              ul.appendChild(
                  li(this.tplParser(this.messages.one_result, values))
              );
          } 
          // Si hay más de un resultado
          else if(values.total_results > 1){
              ul.appendChild(
                  li(this.tplParser(this.messages.results, values))
              );
          }
          // Si los resultados están siendo filtrados.
          if(!this.usingFilters()){
              ul.appendChild(
                  li(this.tplParser(this.messages.has_filters, values))
              );
          }

          element.appendChild(ul);
      });
  };

  /**
   * Obtiene el índice del filtro
   * @param {string} str — Input name attribute. 
   * @returns {string}
   * 
   * >>> dilter_position("name__1")
   * 1
   */
  filterPosition = (str) => {
    const regex = /(?:__([0-9]+))(?:__([0-9]+))?$/gm;
    const rgx =  regex.exec(str) 
    return (rgx ? parseInt(rgx[1]) : null);
  };

  /**
   * Estado del slider.
   * 
   * @return {boolean} - ture si esta abierto, false si esta cerrado.
   */
   isFilterOpen = () => document
      .querySelector(`.js-poncho-map-filters${this.scope_sufix}`)
      .classList.contains("filter--in");

  /**
   * Ejecuta los filtros.
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
   * el popup que contiene los inputs para los filtros. La idea es que,
   * si se configuraran muchos filtros se active la función
   * `overflow:auto` en la hoja de estilos.
   */
  filterContainerHeight = () => {    
    const filter_container = document
          .querySelector(`.js-filter-container${this.scope_sufix}`);
    const filter_button = document
          .querySelector(`.js-close-filter${this.scope_sufix}`);

    const poncho_map_height = filter_container.offsetParent.offsetHeight;
    // Valor tomado de la hoja de estilos
    // @todo calcular el valor dinámicamente.
    const container_position_distance = 20;
    const filters_height = poncho_map_height
          - filter_container.offsetTop
          - filter_button.offsetHeight
          - container_position_distance;

    const pos = document
          .querySelector(`.js-poncho-map-filters${this.scope_sufix}`);
    pos.style.maxHeight = `${filters_height}px`;

    // Valor tomado de la hoja de estilos
    // @todo calcular el valor dinámicamente.
    const inner_padding = 45;
    const height = pos.offsetHeight - inner_padding;
    const filters = document.querySelector(`.js-filters${this.scope_sufix}`);
    filters.style.height = `${height}px`;
    filters.style.overflow = "auto";
  }
      
  /**
   * Ejecuta toggle en el onclick
   */
  clickToggleFilter = () => document
      .querySelectorAll(`.js-close-filter${this.scope_sufix}`)
      .forEach(element => element.onclick = (event) => {
            event.preventDefault();
            this.toggleFilter(); 
            this.filterContainerHeight();
           
      });

  /**
   * Arma un grupo de inputs
   *
   * @param {object} fields_items - Listado de opciones para los fields.
   */
  fields = (fields_items, group) => {

    const fields_container = document.createElement("div");
    fields_container.classList.add("field-list", "p-b-1");

    for(const key in fields_items.fields){
        const field = fields_items.fields[key];

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
  filterButton = () => {
    const filter_icon = document.createElement("i");
    filter_icon.setAttribute("aria-hidden", "true");
    filter_icon.classList.add("fa", "fa-filter");

    const button_text = document.createElement("span");
    button_text.textContent = "Abre o cierra el filtro de búsqueda";
    button_text.classList.add("sr-only");
   
    const button = document.createElement("button");
    // button.title = "Filtrar elementos en el mapa";
    button.classList.add("btn","btn-secondary","btn-filter",
                         `js-close-filter${this.scope_sufix}`);
    button.id = `filtrar-busqueda${this.scope_sufix}`
    button.appendChild(filter_icon);
    button.appendChild(button_text);
    button.setAttribute("role", "button");
    button.setAttribute("aria-label", "Abre o cierra el filtro de búsqueda");
    button.setAttribute("aria-controls", `poncho-map-filters${this.scope_sufix}`);
    // if(this.filters_visible){
    //     button.setAttribute("aria-expanded", "true");
    // } else {
    //     button.setAttribute("aria-expanded", "false");
    // }

    const button_container = document.createElement("div");
    button_container.classList.add(`js-filter-container${this.scope_sufix}`, 
                                   "filter-container");

    if(this.reset_zoom)
        button_container.classList.add("filter-container--zoom-expand");

    button_container.appendChild(button);

    const container = document
          .querySelector(`.poncho-map${this.scope_selector}`);
    container.appendChild(button_container);
  }

  /**
   * Crea el contenedor para los filtros.
   */
  filterContainer = () => {
      const fields_container = document.createElement("div");
      fields_container.className = `js-filters${this.scope_sufix}`;  

      const close_button = document.createElement("button");
      close_button.classList.add("btn", "btn-xs", "btn-secondary", "btn-close", 
                                 `js-close-filter${this.scope_sufix}`);
      close_button.title = "Cerrar panel";
      close_button.setAttribute("role", "button");
      close_button.setAttribute("aria-label", "Cerrar panel de filtros");
      close_button.innerHTML = "<span class=\"sr-only\">Cerrar </span>✕";


      
      const form = document.createElement("form");
      form.classList.add(`js-formulario${this.scope_sufix}`);
      form.appendChild(close_button); 
      // form.appendChild(search); 
      form.appendChild(fields_container); 

      const container = document.createElement("div");
      container.classList.add(`js-poncho-map-filters${this.scope_sufix}`, 
                              "poncho-map-filters");
      container.setAttribute("role", "region");
      container.setAttribute("aria-live", "polite");
      container.id = `poncho-map-filters${this.scope_sufix}`;

      if(this.filters_visible){
          container.classList.add("filter--in");
      }

      container.appendChild(form); 
      document.querySelectorAll(`.js-filter-container${this.scope_sufix}`)
          .forEach(element => element.appendChild(container));
          
  };

  /**
   * Crea los checkbox para los filtros.
   */ 
  createFilters = (data) => {
    const form_filters = document
          .querySelector(`.js-filters${this.scope_sufix}`);

    data.forEach((item, group) => {
      let legend = document.createElement("legend");
      legend.textContent = item.legend;
      legend.classList.add("m-b-1", "text-primary", "h6")

      let fieldset = document.createElement("fieldset");
      fieldset.appendChild(legend);
      fieldset.appendChild(this.fields(item, group));

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
        if(typeof this.filterPosition(ele[0]) == "number"){
          val = [this.filterPosition(ele[0]), parseInt(ele[1])];   
        } else if (ele[0] == `js-search-input${this.scope_sufix}`) {
          val = ['input', form_data.get(`js-search-input${this.scope_sufix}`)];
        }
        return val;
    });
  };

  /**
   * Configuración de estado de los filtros seteados por el usuario.
   * @returns {object}
   */
  defaultFiltersConfiguration = () => {
      // Obtengo todos los filtros y los colecciono en un array.
      const filters = this.filters.map(
        (g, gk) => g.fields.map(
          (f, fk) => [
              gk, fk, f[0], 
              (typeof f[3] !== "undefinded" && f[3] == "checked" ? true : false)
          ]
        )
      ).flat();
      return filters;
  }

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
   * @return {void}
   */
  resetFormFilters = () => {
    // Seteo los inputs de acuerdo a las opciones del usuario.
    this.defaultFiltersConfiguration().forEach(e => {
        const field = document.querySelector(`#id__${e[2]}__${e[0]}__${e[1]}`);
        field.checked = e[3];
    });
  };

  /**
   * Value del input hidden (search)
   */
  get inputSearchValue(){
      // const search_value = this.formFilters().find(e => e[0] == "input");
      const search_value = document
            .querySelector(`#js-search-input${this.scope_sufix}`);
      // const result = search_value[1].trim();
      const result = search_value.value.trim();
      if(result !== ""){
          return result;
      }
      return false;
  }

  /**
   * Total de ocurrencias por clave y valor sobre entradas dadas.
   * @param {object} arr Entradas
   * @param {array} val Array con los elementos a buscar.
   * @param {string} index Clave de la entrada de datos. 
   */
  countOccurrences = (arr, val, index) => {
    return arr.reduce(
          (a, v) => val.some(e => v[index].includes(e)) ? a + 1 : a, 0);
  };

  /**
   * Total de resultados por filtro marcado.
   * @returns {Array} — retorna un array estructurado del siguiente modo:
   *      [
   *        {nombre del filtro},
   *        {total coincidencias},
   *        {indice de grupo de filtros},
   *        {indice input dentro del grupo}
   *      ]
   */
  totals = () => {
    const results = this.formFilters().filter(e => e[0]!="input").map(e => {
        const item = this.filters[e[0]].fields[e[1]];
        return [
            item[1],
            this.countOccurrences(this.filtered_entries, item[2], item[0]),
            ...e
        ];
    });
    return results;
  };

  /**
   * Valida una entrada
   * 
   * 1. Obtengo la cantidad de grupos que tengo.
   * 2. Evaluo los fields de cada grupo y junto los resultados en un array.
   * para retornar true los grupos tienen que dar true
   */
  _validateEntry = (row, form_filters) => {
      const fields_group = (group) => form_filters.filter(e => e[0] == group);
      // Reviso cuantos grupos tengo que validar.
      const total_groups = this.filters.length;
      let validations = [];
      for(let i = 0; i < total_groups; i++){
          // por cada grupo de fields obtengo un resultado de grupo.
          validations.push(this._validateGroup(row, fields_group(i)));
      }
      return validations.every(e => e);
  };

  /**
   * Valida el campo de un grupo.
   * @param {object} row 
   * @param {integer} group 
   * @param {integer} index 
   * @returns {object}
   */
  _search = (row, group, index) => {
      const filter = this.filters[group].fields[index];
      const search_for = filter[2];
      const found = search_for.some(e => row[filter[0]].includes(e));
      return found;
  };

  /**
   * Valida los fields del grupo.
   * @return boolean
   */
  _validateGroup = (row, fields_group) => {
      const result = fields_group.map(
          e => this._search(row, e[0], e[1])
      );
      return result.some(e => e);
  };

  /**
   * Filtra los markers.
   */ 
  filterData = () => {
      const available_filters = this.formFilters();
      let feed = this.entries.filter(
            row => this._validateEntry(row, available_filters)
      );
      feed = this.searchEntry(this.inputSearchValue, feed);
      feed = (this.filters.length < 1 || 
              available_filters.length > 0 ? feed : []);

      this.filtered_entries = feed;
      return feed;
  };

  /**
   * Render de funciones 
   */ 
  filteredData = (feed) => {
      feed = (typeof feed !== "undefined" ? this.entries : this.filterData());
      this.markersMap(feed); 
      this.selectedMarker();
      this.helpText(feed);
      this.resetSearch();
      this.clickToggleFilter();
    
      if(this.slider){
          this.renderSlider();
          this.clickeableMarkers();
          this.clickToggleSlider();
      }

      if(this.hash){
        this.urlHash();
      }
  };

  /**
   * Borra los valores del search input en el campo de filtros.
   */
  clearSearchInput = () => document
      .querySelectorAll(`#js-search-input${this.scope_sufix}`)
      .forEach(element => element.value = "");

  /**
   * Filtra los markers en el onchange de los filtros
   * @returns {void}
   */
  resetSearch = () => document
      .querySelectorAll(`.js-poncho-map-reset${this.scope_sufix}`)
          .forEach(e => {
              e.onclick = (event => {
                  event.preventDefault();
                  this.resetFormFilters();
                  this.filteredData(this.entries);
                  this.clearSearchInput();
          });
   });

  /**
   * Cambia la lista de markers en función de la selección de 
   * los filtros en PonchoMapFilter.
   * @TODO Ver el modo de hacer focus sobre el scope
   * @returns {void}
   */
  filterChange = (callback) => document
      .querySelectorAll(`.js-filters${this.scope_sufix}`)
      .forEach(element => {
          element.onchange = (callback);
  });

  /**
   * imprime el mapa
   */ 
  render = () =>{
    console.log(
        "%cPonchoMapFilter",
        'padding:5px;border-radius:6px;background: #aaff00;color: #000');
    this.hiddenSearchInput();
    this.resetViewButton(); 
    
    if(this.filters.length > 0){        
        this.filterButton();
        this.filterContainer();
        this.createFilters(this.filters);
    }

    this.filteredData();

    if(this.scroll && this.hasHash()){
      this.scrollCenter();
    }

    this.filterChange((event) => {
        // console.log(">>> PonchoFilter (listener)");
        event.preventDefault();
        this.filteredData();
    })

    setTimeout(this.gotoHashedEntry, this.anchor_delay);
    if(this.filters_visible){
        this.filterContainerHeight();
    }
    this.accesibleMenu();
  };
};
// end of class