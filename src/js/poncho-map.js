/**
 * PONCHO MAP
 * 
 * @summary Generador de mapas utilizando OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, august 2022
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css
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
class PonchoMap {
  constructor(data, options){
    this.data = data;
    // Confs
    const defaults = {
        "template": false,
        "template_structure": {},
        "template_container_class_list":["info-container"],
        "template_title_class_list":["h4","title","m-t-0"],
        "template_dl_class_list":["definition-list"],
        "template_innerhtml": false,
        "template_header": false,
        "scope": "",
        "slider": false,
        "scroll": false,
        "hash": false,
        "headers": {},
        "map_selector": "map",
        "anchor_delay":0,
        "slider_selector": ".slider",
        "map_view": [-40.44, -63.59],
        "map_anchor_zoom":16,
        "map_zoom":4,
        "id": "id",
        "reset_zoom":true,
        "latitud":"latitud",
        "longitud":"longitud",
        "marker": "cielo",
        "marker_cluster_options": {
            "spiderfyOnMaxZoom": false,
            "showCoverageOnHover": false,
            "zoomToBoundsOnClick": true,
            "maxClusterRadius": 45,
            "spiderfyDistanceMultiplier": 0.1,
            "spiderLegPolylineOptions": {
                "weight": 1,
                "color": "#666",
                "opacity": 0.5,
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
    this.template_header = opts.template_header;
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
    this.reset_zoom = opts.reset_zoom;
    this.slider_selector=this.selectorName(opts.slider_selector);
    this.selected_marker;
    this.scope_selector = `[data-scope="${this.scope}"]`;
    this.scope_sufix = `--${this.scope}`;

    // OSM
    this.map = new L.map(this.map_selector,{preferCanvas: false})
        .setView(this.map_view, this.map_zoom);
    new L.tileLayer(
        "https://gis.argentina.gob.ar/osm/{z}/{x}/{y}.png", 
        { 
          attribution: ("&copy; Contribuidores "
              + "<a href=\"https://www.openstreetmap.org/copyright\">" 
              + "OpenStreetMap</a>")
        }
    ).addTo(this.map);
    this.markers = new L.markerClusterGroup(this.marker_cluster_options);
  }

  /**
  * JSON input
  * @return {object}
  */
  get entries(){
    return this.data;
  }

  /**
   * Agrega el hash en la barra de url.
   * @param {string|integer} value 
   */
  addHash = (value) => {
      window.location.hash = `#${value}`;
  }

  /**
  * Obtiene una entrada por su id
  * @property {integer} id - Id de Punto Digital
  * @return {object}
  */
  entry = (id) => {
      return this.entries.find(v => v[this.id]==id);
  }

  /**
   * Busca un término en un listado de entradas.
   * @param {string} term - término a buscar.
   * @returns {object} - listado filtrado por los match
   */
  searchEntry = (term, dataset) => {
      dataset = (typeof dataset === "undefined" ? this.entries: dataset);
      if(!term){
          return dataset;
      }
      const entries = dataset.filter(e => {
        if(this.searchTerm(term, e)){
            return e;
        };
      })
      return entries;
  };

  /**
   * Busca un término en cada uno de los indices de una entrada.
   */
  searchTerm = (search_term, data) => {
      // [text] es solo por si se usa select2
      const search_for = [...["text"], ...this.search_fields].filter(e => e);
      for(const item of search_for){
        if(!data.hasOwnProperty(item)){
            continue;
        }
        const term = this.removeAccents(search_term).toUpperCase();
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
   * Quita la definición a un selector.
   * 
   * @param {string} selector - Selector a quitarle la definición.
   * @return {string}
   * 
   * >>> selectorName(".foo")
   * "foo"
   * >>> selectorName("#foo")
   * "foo"
   */
  selectorName = (selector) => {
    return selector.replace(/^(\.|\#)/, "");
  };

  /**
   * Acomoda la pantalla ubicando el mapa en el borde superior del
   * navegador.
   */
  scrollCenter = () => {
    const pos = document.getElementById(this.map_selector);
    const rect = pos.getBoundingClientRect();
    const pos_center_horizontal = (pos.offsetLeft + pos.offsetWidth) / 2;
    const pos_center_vertical =  rect.top + window.scrollY;
    window.scrollTo({
        top: pos_center_vertical,
        left: pos_center_horizontal,
        behavior: "smooth"
    });
  };

  /**
   * Limpia el contenido.
   */
  clearContent = () => document
        .querySelector(`.js-content${this.scope_sufix}`).innerHTML = "";

  /**
   * Abre o cierra el slider.
   */
  toggleSlider = () => document
        .querySelector(`.js-slider${this.scope_sufix}`)
        .classList.toggle(`${this.slider_selector}--in`);

  /**
   * Ejecuta toggleSlider en el onclick
   */
  clickToggleSlider = () => document
        .querySelectorAll(`.js-close-slider${this.scope_sufix}`)
        .forEach(e => e.addEventListener("click", () => {
              this.clearContent();
              this.toggleSlider();
        }
  ));

  /**
   * Estado del slider.
   * 
   * @return {boolean} - ture si esta abierto, false si esta cerrado.
   */
  isOpen = () => document
        .querySelector(`.js-slider${this.scope_sufix}`)
        .classList.contains(`${this.slider_selector}--in`);

  /**
   * Imprime la información del Punto Digital en el slider.
   * 
   * @return {string} - HTML del contenido del slider.
   */
  setContent = (data) => {
    if(!this.isOpen()){
        this.toggleSlider();
    }

    const html = (typeof this.template == "function") ? 
          this.template(this, data) : this.defaultTemplate(this, data);
    document.querySelector(`.js-content${this.scope_sufix}`)
            .innerHTML = html;
    // document.querySelector('#js-anchor-slider'+this.scope_sufix).focus()
  };

  /**
   * Mapea los headers.
   * 
   * @return {string} key - key del item.
   */
  header = (key) => {
    return (this.headers.hasOwnProperty(key) ? this.headers[key] : key);
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
   * Crea el bloque html para el slider.
   */
  renderSlider = () => {
    // Remuevo el slider
    document.querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(e => e.remove());

    // Creo el slider
    const close_button = document.createElement("button");
    close_button.classList.add("btn", "btn-xs", "btn-secondary", "btn-close", 
                               `js-close-slider${this.scope_sufix}`);
    close_button.setAttribute("title", "Cerrar panel");
    close_button.innerHTML = "<span class=\"sr-only\">Cerrar</span>✕";

    const anchor = document.createElement("a");
    anchor.href = "#";
    // anchor.textContent = "";
    anchor.id = `js-anchor-slider${this.scope_sufix}`;

    const content_container = document.createElement("div");
    content_container.classList.add("content-container");

    const content = document.createElement("div");
    content.classList.add("content", `js-content${this.scope_sufix}`);
    content_container.appendChild(content);

    const container = document.createElement("div");
    // container.id = `js-anchor-slider${this.scope_sufix}`;
    container.setAttribute("role", "region");
    container.setAttribute("aria-live", "polite");
    container.classList.add("slider",`js-slider${this.scope_sufix}`);
    container.appendChild(close_button);
    container.appendChild(anchor);
    container.appendChild(content_container);
    document.querySelector(`${this.scope_selector}.poncho-map`).appendChild(container);
  };

  /**
   * Proyecta el slider y hace zoom en el marker.
   */
  showSlider = (layer, item) => {
    this.map.setView(
        [item[this.latitud], item[this.longitud]], this.map_anchor_zoom
    );
    layer.fireEvent("click");
  };

  /**
   * Proyecta el popUp y hace zoom en el marker.
   */
  showPopup = (layer) => {
    this.markers.zoomToShowLayer(layer, () => {
      layer.__parent.spiderfy();
      layer.openPopup();
    });
  };

  /**
   * Borra el hash de la url
   * @returns {void}
   */
  removeHash = () => history.replaceState(null, null, ' ');

  /**
   * Si la URL tiene un valor por hash lo obtiene considerandolo su id.
   * @returns {void}
   */
  hasHash = () => {
    let id = window.location.hash.replace("#", "");
    return id || false;
  };

  /**
   * Obtiene un hash, hace zoom sobre el marker y abre su popUp o 
   * el slider.
   */
  gotoHashedEntry = () => {
    let id = this.hasHash();
    if(!id){
        return; 
    }
    
    this.gotoEntry(id);
  };

  /**
   * Muestra un marker pasándo por parámetro su id.
   * @param {string|integer} id - valor identificador del marker. 
   */
  gotoEntry = (id) => {
      const entry = this.entry(id);
      this.markers.eachLayer(layer => {
        if(layer.options.id == id){
          // seteo el marker activo porque se produzco sin un clic.
          this.setSelectedMarker(id, layer);

          if(this.hash){
              this.addHash(id);
          }

          if(this.slider && this.hash){
              this.showSlider(layer, entry);
          } else {
              this.showPopup(layer);
          }
        }
      });
  };

  /**
   * Setea los markers para ejecutarse en un evento onlick
   * @TODO Usar un método para escapar el error cuando no encuentra la
   * propiedad classList.
   */
  clickeableMarkers = () => {
    this.markers.eachLayer(layer => {
      layer.on("click", (e) => {

        document.querySelectorAll(".marker--active")
                .forEach(e => e.classList.remove("marker--active"))
        try {
          e.sourceTarget._icon.classList.add("marker--active");
        } catch (error) {
          // console.error(error);
        }
        const content = this.entries.find(e => e[this.id]==layer.options.id);
        this.setContent(content);
      });
    });
  };

  /**
   * Setea los markers para ejecutarse en un evento onlick
   */   
   urlHash = () => {
      this.markers.eachLayer(layer => {
          layer.on("click", (e) => {
            this.addHash(layer.options.id);
          });
      });
  };

  /**
   * Remueve un elemento de una lista.
   * @param {object} list Array de elementos
   * @param {string} key Elemento a remover 
   */
  removeListElement = (list, key) => {
    const index = list.indexOf(key);
    if(index > -1){
      list.splice(index,1);
    }
    return list;
  };

  /**
   * Titulo para el default template
   * @param {object} row Entrada 
   */
  templateTitle = (row) => {
    const structure = this.template_structure;
    if(!structure.hasOwnProperty("title")){
        return false;
    }
    let title;

    if(this.template_header){
      const wrapper = document.createElement("div");
      wrapper.innerHTML = this.template_header(this, row);
      title = wrapper;
    } else {
      title = document.createElement("h1");
      title.classList.add(... this.template_title_class_list);
      title.textContent = row[structure.title];
    }

    const header = document.createElement("header");
    header.className = "header";
    header.appendChild(title);
    return header;
  }

  /**
   * Listado de keys para mistrar en una entrada del default template.
   * @param {object} row — Entrada de datos 
   */
  templateList = (row) => {
    const estructura = this.template_structure;
    let lista = Object.keys(row);

    let list = lista;
    if(estructura.hasOwnProperty("values") && estructura.values.length > 0){
        list = estructura.values;
    } else if(estructura.hasOwnProperty("exclude") && estructura.exclude.length > 0){
      for(const key of estructura.exclude)
         list = this.removeListElement(lista, key);
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
  defaultTemplate = (self, row) => {
    const tpl_list = this.templateList(row);
    const tpl_title = this.templateTitle(row);

    const container = document.createElement("article");
    container.classList.add(... this.template_container_class_list);

    const dl = document.createElement("dl");
    dl.classList.add(...this.template_dl_class_list);
    dl.style.fontSize = "1rem";

    for(const key of tpl_list){
      // excluyo los items vacíos.
      if(row.hasOwnProperty(key) && !row[key]){
        continue;
      }

      const dt = document.createElement("dt");
      dt.textContent = this.header(key);
      if(this.template_innerhtml){
          dt.innerHTML = this.header(key);
      }
      const dd = document.createElement("dd");
      dd.textContent = row[key];
      if(this.template_innerhtml){
          dd.innerHTML = row[key];
      }
      dl.appendChild(dt);
      dl.appendChild(dd);
    };

    if(tpl_title){
      container.appendChild(tpl_title);
    }

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
   icon = (color="azul") => {
    return new L.icon({
      iconUrl: `https://www.argentina.gob.ar/sites/default/files/marcador-${color}.svg`,
      iconSize: [27, 38],
      iconAnchor: [13, 38],
      popupAnchor: [0, -37]
    });
  };

  /**
   * Resetea el mapa a su punto inicial por defecto.
   */
  resetView = () => this.map.setView(this.map_view, this.map_zoom);

  /**
   * Hace zoom hasta los límites de los markers
   */
  fitBounds = () => {
      try {
        this.map.fitBounds(this.markers.getBounds());
      } catch (error) {
        console.error(error);
      }
  };

  /**
   * Agrega un botón entre zoom-in y zoom-out para volver a la vista
   * original. 
   */
  resetViewButton = () => {
    if(!this.reset_zoom){
       return;
    }
    // función a evaluar. Busca y remueve un botón de reset si existiera.
    document.querySelectorAll(
          `.js-reset-view${this.scope_sufix}`).forEach(e => e.remove());
    document
          .querySelectorAll(`${this.scope_selector} .leaflet-control-zoom-in`)
          .forEach(ele => {

        const icon = document.createElement("i");
        icon.classList.add("fa", "fa-expand");
        icon.setAttribute("aria-hidden","true");

        const button = document.createElement("a");
        button.classList.add(`js-reset-view${this.scope_sufix}`, 
                            "leaflet-control-zoom-reset");
        button.href = "#";
        button.title = "Ver todo el mapa";
        button.appendChild(icon);

        button.onclick = (e) => {
          e.preventDefault();
          this.resetView();
        };
        ele.after(button);
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
    if(!this.marker_color || typeof this.marker_color == "boolean")
      return null;

    if(typeof this.marker_color === "string"){
      return this.icon(this.marker_color);

    } else if (typeof this.marker_color(this, row) === "string"){
      const color = this.marker_color(this, row);
      return this.icon(color);

    } else if (typeof this.marker_color === "function"){
      return this.marker_color(this, row);
    }
  };

  /**
   * Prepara las características del mapa y de cada uno de los markers.
   */
   markersMap = (entries) => {
    this.markers.clearLayers();
    entries.forEach(row => {
      const icon = this.marker(row);
      const id = row[this.id];
      const latitud = row[this.latitud];
      const longitud = row[this.longitud];

      if(!this.validateLatLng(latitud) || !this.validateLatLng(longitud)){ 
        return;
      }
      let marker_attr = {};
      if(id){
        marker_attr.id = id;
      }
      if(icon){
        marker_attr.icon = icon;
      }
      const marker = new L.marker([latitud, longitud], marker_attr);
      this.markers.addLayer(marker);
      
      if(!this.slider){
        const html = (typeof this.template == "function") ? 
              this.template(this, row) : this.defaultTemplate(this, row);
        marker.bindPopup(html);
      }

    });
    this.map.options.minZoom = 2;
    this.map.addLayer(this.markers)

    // var endTime = performance.now()
    // console.log(`[markersMap] ${endTime - startTime} milliseconds`)
  };

  /**
   * Setea el marker activo.
   */
  setSelectedMarker = (id, instance) => {
      const val = {entry: this.entry(id), marker: instance};
      this.selected_marker = val;
      return val;
  };

  /**
   * 
   */
  selectedMarker = () => {
      this.markers.eachLayer(layer => {
          layer.on("click", (e) => {
              this.setSelectedMarker(layer.options.id, layer);
          });
      });
  };

  /**
   * Hace el render del mapa.
   */
  render = () => {
    this.resetViewButton();
    this.markersMap(this.entries);
    this.selectedMarker();

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
    setTimeout(this.gotoHashedEntry, this.anchor_delay);
  };
};