/**
 * PONCHO MAP
 * 
 * @summary Generador de mapas utilizando OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, august 2022
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css
 */
class PonchoMap {
  constructor(data, options){
    this.data = data;
    // Confs
    const defaults = {
        'template': (self, element) => this.default_template(self, element),
        'template_structure': {},
        'template_container_class_list':['info-container'],
        'template_title_class_list':['h4','title'],
        'template_dl_class_list':['definition-list'],
        'template_innerhtml': false,
        'scope': '',
        'slider': false,
        'scroll': false,
        'hash': false,
        'headers': {},
        'map_selector': 'map',
        'anchor_delay':0,
        'slider_selector': '.slider',
        'slider_close_selector': '.js-close-slider',
        'map_view': [-40.44, -63.59],
        'map_anchor_zoom':16,
        'map_zoom':4,
        'id': 'id',
        'latitud':'latitud',
        'longitud':'longitud',
        'marker': 'azul',
        'marker_cluster_options': {
            'spiderfyOnMaxZoom': true,
            'showCoverageOnHover': false,
            'zoomToBoundsOnClick': true,
            'maxClusterRadius': 10,
            'spiderfyDistanceMultiplier': 1.5,
            'spiderLegPolylineOptions': {
                'weight': 1,
                'color': "#666",
                'opacity': 0.5,
          }
        }
    };
    let opts = Object.assign({}, defaults, options);
    this.scope = opts.scope;
    this.template = opts.template;
    this.template_structure = opts.template_structure;
    this.template_title_class_list = opts.template_title_class_list;
    this.template_dl_class_list = opts.template_dl_class_list;
    this.template_container_class_list = opts.template_container_class_list;
    this.template_innerhtml = opts.template_innerhtml;
    this.map_selector = opts.map_selector;
    this.headers = opts.headers;
    this.hash = opts.hash;
    this.scroll = opts.scroll;
    this.map_view = opts.map_view;
    this.anchor_delay = opts.anchor_delay;
    this.map_zoom = opts.map_zoom;
    this.map_anchor_zoom = opts.map_anchor_zoom;
    this.marker_cluster_options = opts.marker_cluster_options;
    this.marker_color = opts.marker;
    this.id = opts.id;
    this.latitud = opts.latitud;
    this.longitud = opts.longitud;
    this.slider = opts.slider;
    this.slider_selector=this.selector_name(opts.slider_selector);
    this.slider_close_selector = opts.slider_close_selector;

    // OSM
    this.map = new L.map(this.map_selector,{preferCanvas: true})
        .setView(this.map_view, this.map_zoom);
    new L.tileLayer(
        'https://gis.argentina.gob.ar/osm/{z}/{x}/{y}.png', 
        { attribution: `&copy; Contribuidores <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`}
    ).addTo(this.map);
    this.markers = new L.markerClusterGroup(this.marker_cluster_options);
    //
    this.scope_selector = `[data-scope="${this.scope}"]`;
  }

  /**
  * JSON input
  * @return {object}
  */
  get json_data(){
    return this.data;
  }

  /**
  * Obtiene una entrada por su id
  * @property {integer} id - Id de Punto Digital
  * @return {object}
  */
  entry = (id) => {
    return this.json_data.find(v => v[this.id]==id);
  }

  /**
   * Quita la definición a un selector.
   * 
   * @param {string} selector - Selector a quitarle la definición.
   * @return {string}
   * 
   * >>> selector_name('.foo')
   * 'foo'
   * >>> selector_name('#foo')
   * 'foo'
   */
  selector_name = (selector) => {
    return selector.replace(/^(\.|\#)/, '');
  };

  /**
   * Acomoda la pantalla ubicando el mapa en el borde superior del 
   * navegador.
   */
  scroll_center = () => {
    const pos = document.getElementById(this.map_selector);
    const rect = pos.getBoundingClientRect();
    const pos_center_horizontal = (pos.offsetLeft + pos.offsetWidth) / 2;
    const pos_center_vertical =  rect.top + window.scrollY;
    window.scrollTo({
        top: pos_center_vertical,
        left: pos_center_horizontal,
        behavior: 'smooth'
    });
  };

  /**
   * Limpia el contenido.
   */
  clear_content = () => document
        .querySelector(`${this.scope_selector} .js-content`).innerHTML = '';

  /**
   * Abre o cierra el slider.
   */
  toggle_slider = () => document
        .querySelector(`${this.scope_selector} .${this.slider_selector}`)
        .classList.toggle(`${this.slider_selector}--in`);

  /**
   * Ejecuta toggle_slider en el onclick
   */
  click_toggle_slider = () => document
        .querySelectorAll(`${this.scope_selector} ${this.slider_close_selector}`)
        .forEach(e => e.addEventListener('click', () => {
              this.clear_content();
              this.toggle_slider();
        }
  ));

  /**
   * Estado del slider.
   * 
   * @return {boolean} - ture si esta abierto, false si esta cerrado.
   */
  is_open = () => document
        .querySelector(`${this.scope_selector} .${this.slider_selector}`)
        .classList.contains(`${this.slider_selector}--in`);

  /**
   * Imprime la información del Punto Digital en el slider.
   * 
   * @return {string} - HTML del contenido del slider.
   */
  set_content = (data) => {
    if(!this.is_open())
        this.toggle_slider();
    
    const html = this.template(this, data);
    document.querySelector(`${this.scope_selector} .js-content`)
            .innerHTML = html;
  };

  /**
   * Mapea los headers.
   * 
   * @return {string} key - key del item.
   */
  header = (key) => {
    return this.headers.hasOwnProperty(key) ? this.headers[key] : key;
  };

  /**
   * Validador de latitud y longitud.
   * 
   * @param {float} latlng - Latitud o Longitud.
   * @return {boolean}
   */
  validateLatLng = (latlng) => {
    let latlngArray = latlng.toString().split(",");
    for(let i = 0; i < latlngArray.length; i++) {
      if(isNaN(latlngArray[i]) || latlngArray[i] < -127 || latlngArray[i] > 75){
        return false;
      }
      return true;
    }
  };

  /**
   * Crea el bloque html para el slider.
   */
  render_slider = () => {
    // Remuevo el slider
    document.querySelectorAll(`${this.scope_selector} .slider`)
            .forEach(e => e.remove());

    // Creo el slider
    let close_button = document.createElement('button');
    close_button.classList.add("btn", "btn-xs", "btn-secondary", "btn-close", 
                               this.selector_name(this.slider_close_selector));
    close_button.setAttribute("title", "Cerrar panel");
    close_button.innerHTML = '<span class="sr-only">Cerrar</span>✕';

    let content_container = document.createElement('div');
    content_container.classList.add("content-container");

    let content = document.createElement('div');
    content.classList.add("content", `js-content`);
    content_container.appendChild(content);

    let container = document.createElement('div');
    container.classList.add("slider");
    container.appendChild(close_button);
    container.appendChild(content_container);
    document.querySelector(`${this.scope_selector}`).appendChild(container);
  };

  /**
   * Proyecta el slider y hace zoom en el marker.
   */
  show_slider = (layer, item) => {
    this.map.setView(
        [item[this.latitud], item[this.longitud]], this.map_anchor_zoom
    );
    layer.fireEvent('click');
  };

  /**
   * Proyecta el popUp y hace zoom en el marker.
   */
  show_popup = (layer) => {
    this.markers.zoomToShowLayer(layer, () => {
      layer.__parent.spiderfy();
      layer.openPopup();
    });
  };

  has_hash = () => {
    let id = window.location.hash.replace('#', '');
    return id || false;
  };

  /**
   * Obtiene un hash, hace zoom sobre el marker y abre su popUp o 
   * el slider.
   */
  showitem = () => {
    let id = this.has_hash();
    if(!id)
        return;

    const pd = this.entry(id);
    this.markers.eachLayer(layer => {
      if(layer.options.id == id){
        if(this.slider && this.hash){
          this.show_slider(layer, pd);
        } else {
          this.show_popup(layer);
        }
      }
    });
  };

  /**
   * Setea los markers para ejecutarse en un evento onlick
   */   
  clickeable_markers = () => {
    this.markers.eachLayer(layer => {
      layer.on('click', (e) => {

        document.querySelectorAll('.marker--active').forEach(e => e.classList.remove('marker--active'))
        e.sourceTarget._icon.classList.add('marker--active');
        
        const content = this.json_data.find(e => e[this.id]==layer.options.id);
        this.set_content(content);
      });
    });
  };

  /**
   * Setea los markers para ejecutarse en un evento onlick
   */   
   url_hash = () => {
      this.markers.eachLayer(layer => {
          layer.on('click', (e) => {
            window.location.hash = `#${layer.options.id}`;
          });
      });
  };

  /**
   * Remueve un elemento de una lista.
   * @param {object} list Array de elementos
   * @param {string} key Elemento a remover 
   */
  remove_list_element = (list, key) => {
    const index = list.indexOf(key);
    if(index > -1)
      list.splice(index,1);
    return list;
  };

  /**
   * Titulo para el default template
   * @param {object} row Entrada 
   */
  template_title = (row) => {
    const structure = this.template_structure;
    if(structure.hasOwnProperty('title') && structure.title.length > 0){
      const title = document.createElement('h1');
      title.classList.add(... this.template_title_class_list);
      title.textContent = row[structure.title];
      return title;
    }
    return false;
  }

  /**
   * Listado de keys para mistrar en una entrada del default template.
   * @param {object} row — Entrada de datos 
   */
  template_list = (row) => {
    const estructura = this.template_structure;
    let lista = Object.keys(row);

    let list = lista;
    if(estructura.hasOwnProperty('values') && estructura.values.length > 0){
        list = estructura.values;
    } else if(estructura.hasOwnProperty('exclude') && estructura.exclude.length > 0){
      for(const key of estructura.exclude)
         list = this.remove_list_element(lista, key);
    }

    return list;
  }

  /**
   * Template por defecto
   * 
   * Arma un listado de datos usando la clave y el valor del objeto
   * pasado cómo argumento. 
   * @param {object} row - Entrada para dibujar un marker.
   */  
  default_template = (self, row) => {
    const tpl_list = this.template_list(row);
    const tpl_title = this.template_title(row);

    const container = document.createElement('article');
    container.classList.add(... this.template_container_class_list);

    const dl = document.createElement('dl');
    dl.classList.add(...this.template_dl_class_list);
    dl.style.fontSize = "1rem";
    
    for(const key of tpl_list){
      // excluyo los items vacíos.
      if(row.hasOwnProperty(key) && !row[key])
        continue;

      const dt = document.createElement('dt');
      dt.textContent = this.header(key);
      if(this.template_innerhtml)
          // alert('hello')
          dt.innerHTML = this.header(key);

      const dd = document.createElement('dd');
      dd.textContent = row[key];
      if(this.template_innerhtml)
          dd.innerHTML = row[key];
      
      dl.appendChild(dt);
      dl.appendChild(dd);
    };

    if(tpl_title)
      container.appendChild(tpl_title);

    container.appendChild(dl);
    return container.outerHTML;
  };

  /**
   * Icono poncho
   * 
   * @summary Retorna el color según el parámetro que se le pase. 
   * @param {string} color - Nombre del color según poncho colores. 
   * @returns {object}
   */
   icon = (color='azul') => {
    return new L.icon({
      iconUrl: `https://www.argentina.gob.ar/sites/default/files/marcador-${color}.svg`,
      iconSize: [38, 38],
      iconAnchor: [22, 41],
      popupAnchor: [-3, -40]
    });
  };

  /**
   * Define el objeto icon.
   * @param {object} row - entrada de json 
   * @returns {object} Instancia L.icon
   */
  marker = (row) => {
    // Si marker_color no viene o es null usa el marker por defecto 
    // de Open Street Map
    if(!this.marker_color || typeof this.marker_color == 'boolean')
      return null;

    if(typeof this.marker_color === 'string'){
      return this.icon(this.marker_color);

    } else if (typeof this.marker_color(this, row) === 'string'){
      const color = this.marker_color(this, row);
      return this.icon(color);

    } else if (typeof this.marker_color === 'function'){
      return this.marker_color(this, row);
    }
  };

  /**
   * Prepara las características del mapa y de cada uno de los markers.
   */
   markers_map = (json_data) => {
    json_data.forEach(row => {
      const icon = this.marker(row);
      const id = row[this.id];
      const latitud = row[this.latitud];
      const longitud = row[this.longitud];

      if(!this.validateLatLng(latitud) || !this.validateLatLng(longitud))
        return;

      let marker_attr = {};
      id ? marker_attr.id = id : null;
      icon ? marker_attr.icon = icon : null;
      const marker = new L.marker([latitud, longitud], marker_attr);
      this.markers.addLayer(marker);
      !this.slider ? marker.bindPopup(this.template(this, row)) : null;
    });
    this.map.options.minZoom = 2;
    this.map.addLayer(this.markers)
  };

  /**
   * Hace el render del mapa.
   */
  render = () => {
    this.markers_map(this.json_data);

    if(this.slider){
        this.render_slider();
        this.clickeable_markers();
        this.click_toggle_slider();
    }

    if(this.hash)
      this.url_hash();

    if(this.scroll && this.has_hash())
      this.scroll_center();

    setTimeout(this.showitem, this.anchor_delay);
  };
};
// End class.

