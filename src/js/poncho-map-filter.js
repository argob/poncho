//#####################################################################
//######################## PONCHO MAP FILTER ##########################
//#####################################################################

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
    };
    let opts = Object.assign({}, defaults, options);
    this.filters = opts.filters;
  }

  /**
   * Obtiene el índice del filtro
   * @param {string} str — Input name attribute. 
   * @returns {string}
   * 
   * >>> dilter_position('name__1')
   * 1
   */
  filter_position = (str) => {
    const regex = /__([0-9]+)$/gm;
    const rgx =  regex.exec(str) 
    return rgx ? parseInt(rgx[1]) : null;
  }

  /**
   * Arma un grupo de inputs
   *
   * @param {object} fields_items - Listado de opciones para los fields. 
   */
  fields = (fields_items) => {
    const fields_container = document.createElement('div');
    for(const key in fields_items){
        const field = fields_items[key];

        const input = document.createElement('input');
        input.type = "checkbox";
        input.id = `id__${field[0]}__${key}`;
        input.name = `${field[0]}__${key}`;
        input.className = 'form-check-input';
        input.value = 1;
        if(typeof field[3] !== 'undefined' && field[3]=='checked')
            input.setAttribute("checked", 'checked');

        const label = document.createElement('label');
        label.style.marginLeft = '.33rem';
        label.textContent=field[1];
        label.className = "form-check-label";
        label.setAttribute("for", `id__${field[0]}__${key}`);

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
   * Crea el contenedor para los filtros.
   */
  filter_container = () => {
      const fields_container = document.createElement('div');
      fields_container.className = "js-filters";  

      const button = document.createElement('button');
      button.textContent = 'Filtrar';
      button.classList.add('js-poncho-map-filter', 'btn', 'btn-sm', 
                            'btn-primary', 'm-t-1', 'm-b-0'); 

      const button_container = document.createElement('div');
      button_container.className = "text-center";
      button_container.appendChild(button);

      const container = document.createElement('div');
      container.className = "poncho-map-filters";
      container.appendChild(fields_container); 
      container.appendChild(button_container); 

      const form = document.createElement('form');
      form.className = "js-formulario";
      form.appendChild(container);

      document.querySelector(this.scope_selector).appendChild(form);
  }

  /**
   * Crea los checkbox para los filtros.
   */ 
  create_filters = (data) => {
    const form_filters = document.querySelector(`${this.scope_selector} .js-filters`);

    data.forEach(item => {
      let legend = document.createElement('legend');
      legend.classList.add("m-b-1", 'text-muted');
      legend.textContent = item.legend;

      let fieldset = document.createElement('fieldset');
      fieldset.appendChild(legend);
      fieldset.appendChild(this.fields(item.fields));

      form_filters.appendChild(fieldset);
    });
  };

  /**
   * Obtengo los checkbox marcados.
   */ 
   form_filters = () => {
    const form_filters = document.querySelector(`${this.scope_selector} .js-formulario`);
    const form_data = new FormData(form_filters);
    return Array.from(form_data).map(ele => this.filter_position(ele[0]));
  };

  /**
   * Filtra los markers
   */ 
  filter_data = () => {
      this.markers.clearLayers();
      const available_filters = this.form_filters();
      const feed = this.json_data.filter(row => {
        let strict_items = [];
        let optional_items = [];

        for(const key of available_filters){
          const filter = this.filters[0].fields[key];
          const search_for = filter[2];
          const is_strict = (typeof filter[4] !== 'undefined' && filter[4] === 'strict') ? true : false;
          const found = search_for.includes(row[filter[0]]) ? true : false;
          is_strict ? strict_items.push(found) : optional_items.push(found);
        }

        let validate = [];
        if(optional_items.length > 0)
          validate.push(optional_items.some(e => e));

        if(strict_items.length > 0)
          validate.push(strict_items.every(e => e));

        if(validate.every(e => e))
          return row;
      });

    return feed;
  }

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

    if(this.scroll)
      this.scroll_center();

  };

  /**
   * imprime el mapa
   */ 
  render = () =>{
    this.filter_container();

    const btn = document.querySelector(`${this.scope_selector} .js-poncho-map-filter`);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.filtered_data();
    });
    this.create_filters(this.filters);
    this.filtered_data();
    setTimeout(this.showitem, this.anchor_delay);
  }
}