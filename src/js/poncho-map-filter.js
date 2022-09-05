/**
 * PONCHO MAP FILTER
 * 
 * @summary Generador de mapas con filtro utilizando OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, august 2022
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap
 */
class PonchoMapFilter extends PonchoMap {
  constructor(data, options){
    super(data, options);

    const defaults = {
        'filters': {},
        'filters_visible': false
    };
    let opts = Object.assign({}, defaults, options);
    this.filters = opts.filters;
    this.filters_visible = opts.filters_visible;
    this.filtered_entries = [];
  };

  /**
   * Obtiene el índice del filtro
   * @param {string} str — Input name attribute. 
   * @returns {string}
   * 
   * >>> dilter_position('name__1')
   * 1
   */
  filter_position = (str) => {
    const regex = /(?:__([0-9]+))(?:__([0-9]+))?$/gm;
    const rgx =  regex.exec(str) 
    return rgx ? parseInt(rgx[1]) : null;
  };

  /**
   * Ejecuta los filtros.
   */
  toggle_filtro = () => document
      .querySelector(`${this.scope_selector} .js-poncho-map-filters`)
      .classList.toggle(`filter--in`);

  /**
   * Asigna el tamaño en pixeles para el contenedor de inputs.
   */
  filter_container_height = () => {
    const pos = document.querySelector(this.scope_selector + ' .js-poncho-map-filters');
    // const padding = window.getComputedStyle(pos).getPropertyValue('padding').split(' ');
    const height = pos.offsetHeight - 45;
    document.querySelector(this.scope_selector + ' .js-filters').style.height = height + 'px';
  }
      
  /**
   * Ejecuta toggle_slider en el onclick
   */
  click_toggle_filtro = () => document
      .querySelectorAll(`${this.scope_selector} .js-close-filter`)
      .forEach(e => e.addEventListener('click', (e) => { 
            e.preventDefault();
            this.toggle_filtro(); 
            this.filter_container_height();
      }
  ));

  /**
   * Arma un grupo de inputs
   *
   * @param {object} fields_items - Listado de opciones para los fields. 
   */
  fields = (fields_items, group) => {

    const fields_container = document.createElement('div');
    fields_container.classList.add('field-list', 'p-b-1');

    for(const key in fields_items.fields){
        const field = fields_items.fields[key];

        const input = document.createElement('input');
        input.type =fields_items.type;
        input.id = `id__${field[0]}__${group}__${key}`;
        
        if(fields_items.type == 'radio'){
          input.name = `${field[0]}__${group}`;
        } else {
          input.name = `${field[0]}__${group}__${key}`;
        }

        input.className = 'form-check-input';
        input.value = key;
        if(typeof field[3] !== 'undefined' && field[3]=='checked')
            input.setAttribute("checked", 'checked');

        const label = document.createElement('label');
        label.style.marginLeft = '.33rem';
        label.textContent=field[1];
        label.className = "form-check-label";
        label.setAttribute("for", `id__${field[0]}__${group}__${key}`);

        const field_container = document.createElement('div');
        field_container.className = "form-check";
        field_container.appendChild(input);
        field_container.appendChild(label);

        fields_container.appendChild(field_container);
    }

    const fieldset = document.createElement('div');
    fieldset.appendChild(fields_container);
    
    return fieldset;
  };

  /**
   * Crea el botón para los filtros
   */
  filter_button = () => {
    const button = document.createElement('button');
    button.title = "Filtrar elementos en el mapa";
    button.classList.add("btn","btn-secondary","btn-filter","js-close-filter");
    button.innerHTML = '<i class="fa fa-filter" aria-hidden="true"></i>'
        + '<span class="sr-only">Filtrar</span>';

    const button_container = document.createElement('div');
    button_container.classList.add('js-filter-container', 'filter-container');
    button_container.appendChild(button);

    const container = document
          .querySelector(`.poncho-map${this.scope_selector}`);
    container.appendChild(button_container);
  }

  /**
   * Crea el contenedor para los filtros.
   */
  filter_container = () => {
      const fields_container = document.createElement('div');
      fields_container.className = "js-filters";  

      const close_button = document.createElement('button');
      close_button.classList.add("btn", "btn-xs", "btn-secondary", "btn-close", 
                                 'js-close-filter');
      close_button.setAttribute("title", "Cerrar panel");
      close_button.innerHTML = '<span class="sr-only">Cerrar </span>✕';

      const form = document.createElement('form');
      form.classList.add("js-formulario");
      form.appendChild(close_button); 
      form.appendChild(fields_container); 

      const container = document.createElement('div');
      container.classList.add("js-poncho-map-filters", "poncho-map-filters");
      if(this.filters_visible)
            container.classList.add('filter--in');

      container.appendChild(form); 
      document
            .querySelector(this.scope_selector + ' .js-filter-container')
            .appendChild(container);
  };

  /**
   * Crea los checkbox para los filtros.
   */ 
  create_filters = (data) => {
    const form_filters = document
          .querySelector(`${this.scope_selector} .js-filters`);

    data.forEach((item, group) => {
      let legend = document.createElement('legend');
      legend.textContent = item.legend;
      legend.classList.add('m-b-1','text-primary', 'h6')

      let fieldset = document.createElement('fieldset');
      fieldset.appendChild(legend);
      fieldset.appendChild(this.fields(item, group));

      form_filters.appendChild(fieldset);
    });
  };

  /**
   * Obtengo los checkbox marcados.
   */ 
  form_filters = () => {
    const form_filters = document
          .querySelector(`${this.scope_selector} .js-formulario`);
    const form_data = new FormData(form_filters);
    return Array.from(form_data).map(ele => [this.filter_position(ele[0]), parseInt(ele[1])]);
  };

  /**
   * Total de ocurrencias por clave y valor sobre entradas dadas.
   * @param {object} arr Entradas
   * @param {array} val Array con los elementos a buscar.
   * @param {string} index Clave de la entrada de datos. 
   */
  count_occurrences = (arr, val, index) => {
    return arr.reduce((a, v) => (val.some(e => v[index].includes(e)) ? a + 1 : a), 0)
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
    const results = this.form_filters().map(e => {
      const item = this.filters[e[0]].fields[e[1]];
      return [
          item[1],
          this.count_occurrences(this.filtered_entries, item[2], item[0]),
          ...e
      ];
    });
    return results;
  };

  /**
   * Filtra los markers.
   */ 
  filter_data = () => {
    this.markers.clearLayers();
    const available_filters = this.form_filters();
    if(available_filters.length == 0)
        return [];

    const feed = this.json_data.filter(row => {
      let strict_items = [];
      let optional_items = [];

      for(const key of available_filters){
        let group, index;
        [group, index] = key;

        const filter = this.filters[group].fields[index];
        const search_for = filter[2];
        const is_strict = (typeof filter[4] !== 'undefined' && filter[4] === 'strict') ? true : false;
        const found = search_for.some(e => row[filter[0]].includes(e));
        if(is_strict){
          strict_items.push(found);
        } else {
          optional_items.push(found);
        }
      }

      let validate = [];
      if(optional_items.length > 0)
        validate.push(optional_items.some(e => e));

      if(strict_items.length > 0)
        validate.push(strict_items.every(e => e));

      if(validate.every(e => e))
        return row;
    });
    this.filtered_entries = feed;
    return feed;
  };

  /**
   * Render de funciones 
   */ 
  filtered_data = () => {
    const feed = this.filter_data();
    this.markers_map(feed);   

    if(this.slider){
        this.render_slider();
        this.clickeable_markers();
        this.click_toggle_slider();
    }
    if(this.hash)
      this.url_hash();

    if(this.scroll && this.has_hash())
      this.scroll_center();
  };

  /**
   * Filtra los markers en el onchange de los filtros
   * @returns {void}
   */
  filter_listener = () => document
      .querySelectorAll(`${this.scope_selector} .js-filters input`)
      .forEach(e => e.addEventListener('change', this.filtered_data));

  /**
   * imprime el mapa
   */ 
  render = () =>{
    this.filter_button();
    this.filter_container();
    this.create_filters(this.filters);
    this.click_toggle_filtro();
    this.filtered_data();
    this.filter_listener();
    setTimeout(this.showitem, this.anchor_delay);
    if(this.filters_visible)
        this.filter_container_height();
  };
}


