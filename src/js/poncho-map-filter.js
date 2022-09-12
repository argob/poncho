/**
 * PONCHO MAP FILTER
 * 
 * @summary Generador de mapas con filtro utilizando 
 * OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, august 2022
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap
 */
class PonchoMapFilter extends PonchoMap {
  constructor(data, options){
    super(data, options);

    const defaults = {
        "filters": {},
        "filters_visible": false
    };
    let opts = Object.assign({}, defaults, options);
    this.filters = opts.filters;
    this.filters_visible = opts.filters_visible;
    this.valid_fields = ["checkbox", "radio"];
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
   * Ejecuta los filtros.
   */
  toggleFilter = () => document
      .querySelector(`${this.scope_selector} .js-poncho-map-filters`)
      .classList.toggle("filter--in");

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
    const filter_container = document.querySelector(".js-filter-container");
    const filter_button = document.querySelector(".js-close-filter");

    const poncho_map_height = filter_container.offsetParent.offsetHeight;
    // Valor tomado de la hoja de estilos
    // @TODO calcular el valor dinámicamente.
    const container_position_distance = 20;
    const filters_height = poncho_map_height
          - filter_container.offsetTop
          - filter_button.offsetHeight
          - container_position_distance;

    const pos = document
          .querySelector(`${this.scope_selector} .js-poncho-map-filters`);
    pos.style.maxHeight = `${filters_height}px`;

    // Valor tomado de la hoja de estilos
    // @TODO calcular el valor dinámicamente.
    const inner_padding = 45;
    const height = pos.offsetHeight - inner_padding;
    document
          .querySelector(`${this.scope_selector} .js-filters`)
          .style.height = `${height}px`;
  }
      
  /**
   * Ejecuta toggle en el onclick
   */
  clickToggleFilter = () => document
      .querySelectorAll(`${this.scope_selector} .js-close-filter`)
      .forEach(e => e.addEventListener("click", (e) => {
            e.preventDefault();
            this.toggleFilter(); 
            this.filterContainerHeight();
      }
  ));

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
        if(typeof field[3] !== "undefined" && field[3]=="checked")
            input.setAttribute("checked", "checked");

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
    button_text.textContent = "Filtrar";
    button_text.classList.add("sr-only");

    const button = document.createElement("button");
    button.title = "Filtrar elementos en el mapa";
    button.classList.add("btn","btn-secondary","btn-filter","js-close-filter");
    button.appendChild(filter_icon);
    button.appendChild(button_text);

    const button_container = document.createElement("div");
    button_container.classList.add("js-filter-container", "filter-container");

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
      fields_container.className = "js-filters";  

      const close_button = document.createElement("button");
      close_button.classList.add("btn", "btn-xs", "btn-secondary", "btn-close", 
                                 "js-close-filter");
      close_button.setAttribute("title", "Cerrar panel");
      close_button.innerHTML = "<span class=\"sr-only\">Cerrar </span>✕";

      const form = document.createElement("form");
      form.classList.add("js-formulario");
      form.appendChild(close_button); 
      form.appendChild(fields_container); 

      const container = document.createElement("div");
      container.classList.add("js-poncho-map-filters", "poncho-map-filters");
      if(this.filters_visible)
            container.classList.add("filter--in");

      container.appendChild(form); 
      document
            .querySelector(this.scope_selector + " .js-filter-container")
            .appendChild(container);
  };

  /**
   * Crea los checkbox para los filtros.
   */ 
  createFilters = (data) => {
    const form_filters = document
          .querySelector(`${this.scope_selector} .js-filters`);

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
    const form_filters = document
          .querySelector(`${this.scope_selector} .js-formulario`);
    const form_data = new FormData(form_filters);
    return Array.from(
        form_data).map(ele => [this.filterPosition(ele[0]), parseInt(ele[1])]);
  };

  /**
   * Total de ocurrencias por clave y valor sobre entradas dadas.
   * @param {object} arr Entradas
   * @param {array} val Array con los elementos a buscar.
   * @param {string} index Clave de la entrada de datos. 
   */
  countOccurrences = (arr, val, index) => {
    return arr.reduce(
          (a, v) => (val.some(e => (v[index].includes(e)) ? a + 1 : a)), 0);
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
    const results = this.formFilters().map(e => {
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
   * Filtra los markers.
   */ 
  filterData = () => {
    this.markers.clearLayers();
    const available_filters = this.formFilters();

    let feed = this.entries.filter(row => {
      let strict_items = [];
      let optional_items = [];

      for(const key of available_filters){
        let group, index;
        [group, index] = key;

        const filter = this.filters[group].fields[index];
        const search_for = filter[2];
        const is_strict = (
            (typeof filter[4] !== "undefined" && filter[4] === "strict") ? 
            true : false);
        const found = search_for.some(e => row[filter[0]].includes(e));
        if(is_strict){
          strict_items.push(found);
        } else {
          optional_items.push(found);
        }
      }

      let validate = [];
      if(optional_items.length > 0){
        validate.push(optional_items.some(e => e));
      }
      if(strict_items.length > 0){
        validate.push(strict_items.every(e => e));
      }
      if(validate.every(e => e)){
        return row;
      }
    });

    feed = ((available_filters.length > 0) ? feed: []);
    this.filtered_entries = feed;
    return feed;
  };

  /**
   * Render de funciones 
   */ 
  filteredData = () => {
    const feed = this.filterData();
    this.markersMap(feed); 

    if(this.slider){
        this.renderSlider();
        this.clickeableMarkers();
        this.clickToggleSlider();
    }
    if(this.hash){
      this.urlHash();
    }

    if(this.scroll && this.hasHash()){
      this.scrollCenter();
    }
  };

  /**
   * Filtra los markers en el onchange de los filtros
   * @returns {void}
   */
  filterListener = () => document
      .querySelectorAll(`${this.scope_selector} .js-filters input`)
      .forEach(e => e.addEventListener("change", this.filteredData));

  /**
   * imprime el mapa
   */ 
  render = () =>{
    this.resetViewButton();  
    this.filterButton();
    this.filterContainer();
    this.createFilters(this.filters);
    this.clickToggleFilter();
    this.filteredData();
    this.filterListener();
    setTimeout(this.gotoHashedEntry, this.anchor_delay);
    if(this.filters_visible){
        this.filterContainerHeight();
    }
  };
};
// end of class