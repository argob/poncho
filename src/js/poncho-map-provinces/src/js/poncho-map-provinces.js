/**
 * PONCHO MAP FILTRO POR PROVINCIAS
 *
 * @summary Assets para configrar poncho map con un geoJSON de provincias.
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 *
 *
 *
 * MIT License
 *
 * Copyright (c) 2023 Argentina.gob.ar
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
const PONCHOMAP_GEOJSON_PROVINCES = "/profiles/argentinagobar/"
        + "themes/contrib/poncho/resources/jsons/"
        + "geo-provincias-argentinas.json";


/**
 * Junta el geoJSON con el JSON de Google Sheet
 *
 * @summary Este objeto no puede estar dentro de la clase porque no se puede
 * utiliar `this` antes de `super()` en ES6.
 *
 * @param {object} geoProvinces GeoJSON
 * @param {object} entries JSON con entradas por provincia.
 * @returns {object}
 */
const ponchoMapProvinceMergeData = (geoProvinces={}, entries=[],
                                    provinceIndex="provincia") => {

    if (!geoProvinces || !geoProvinces.hasOwnProperty("features")) {
        throw new Error(
            "Formato de datos inválido."
        );
    }

    const entriesMap = new Map();
    entries.forEach(entry => {
        if (entry && entry[provinceIndex]) {
            const entryTerm = slugify(entry[provinceIndex]);
            entriesMap.set(entryTerm, entry);
        }
    });

    const newFeatures = [];

    geoProvinces.features.forEach(feature => {
        if (!feature.properties || 
            (!feature.properties.fna && !feature.properties.nam)) {
            return;
        }

        // Nombre de provincia antecedidos por: "Provincia de", 
        // ej. "Provincia de Buenos Aires" 
        const fnaTerm = (feature.properties.fna ? 
                slugify(feature.properties.fna) : null);
        // Nombre de provincia, ej. "Buenos Aires" 
        const namTerm = (feature.properties.nam ? 
                slugify(feature.properties.nam) : null);

        // Búsqueda en el Mapa
        let jsonEntry = null;
        if (fnaTerm && entriesMap.has(fnaTerm)) {
            jsonEntry = entriesMap.get(fnaTerm);
        } else if (namTerm && entriesMap.has(namTerm)) {
            jsonEntry = entriesMap.get(namTerm);
        }

        // Si no existe la provincia en el JSON, y tiene un nombre, lo descartamos
        if (!jsonEntry && (feature.properties.fna || feature.properties.nam)) {
            return;
        }

        if (jsonEntry) {
            // definido un key _color_, usa el color en el fill.
            if (jsonEntry.color && !feature.properties["pm-type"]) {
                feature.properties.stroke = ponchoColor(jsonEntry.color);
            }
            
            // Remuevo la propiedad interactive del json para que no se interponga
            const entryToMerge = {...jsonEntry};
            if (feature.properties["pm-interactive"] === "n" && 
                entryToMerge["pm-interactive"] !== "n") {
                delete entryToMerge["pm-interactive"];
            }
            Object.assign(feature.properties, entryToMerge);
        }

        newFeatures.push(feature);
    });

    geoProvinces.features = newFeatures;
    
    return geoProvinces;
};


/**
 * Remueve estilos toggle del select y el contenedor del mapa
 * 
 * @summary 
 * Cuando la opción sea verdadera (true en inglés), y  el viewport o 
 * tamaño del display, sea inferior a los 992 píxeles de ancho; 
 * el componente html, select, con el listado de provincias se mostrará, 
 * mientras que el mapa permanecerá oculto. 
 * 
 * Cuando la opción sea falsa (false en inglés), tanto el componente 
 * html, select, como el mapa estarán visibles en todo momento.
 * 
 * @todo Este objeto no puede estar dentro de la clase porque no se puede
 * utiliar `this` antes de `super()` en ES6.
 * @returns {undefined}
 */
const ponchoMapProvinceCssStyles = flag => {
    if(typeof flag !== "boolean"){
        return
    }

    if(flag){
        return;
    }
    
    const classToRemove = [
        "poncho-map-province__toggle-map",
        "poncho-map-province__toggle-element"
    ];

    const selector = classToRemove.map(cls => `.${cls}`).join(",");
    document.querySelectorAll(selector).forEach(ele => {
        ele.classList.remove(...classToRemove);
    });
};


class PonchoMapProvinces extends PonchoMapFilter {
    constructor(geoProvinces, entries, options){

        const defaultOptions = {
            map_align: "left",
            slider_size: "default",
            fit_bounds: true,
            hide_select: false,
            initial_entry: false,
            map_init_options: {
                boxZoom: false,
                doubleClickZoom: false,
                scrollWheelZoom: false,
                zoomControl: true,
                zoomSnap: 0.1,
            },
            map_layers: false,
            map_view:[-40.47815508388363, -62.802101128049806],
            map_zoom: 4.4,
            overlay_image: true,
            overlay_image_bounds: [
                [ -20.70565857951651, -24.50543849552044 ],
                [ -88.20759652502107, -74.4619171280653 ]
            ],
            overlay_image_opacity: 0.8,
            overlay_image_url: 
                "/profiles/argentinagobar/themes/contrib/poncho/img/map-shadow-antartida.png",
            province_index: "provincia",
            random_entry: false,
            slider: true,
            toggle_select: true,
            tooltip: true,
            tooltip_options: {
                className: "leaflet-tooltip-own",
                direction: "auto",
                offset: [0, -3],
                opacity: 1,
                permanent: false,
                sticky: true,
            },
        };
        // Merge options
        let opts = Object.assign({}, defaultOptions, options);
        ponchoMapProvinceCssStyles(opts.toggle_select);

        // PonchoMapFilter instance
        const mergedJSONs = ponchoMapProvinceMergeData(
            geoProvinces, entries, opts.province_index
        );

        super(mergedJSONs, opts);

        this.initialEntry = opts.initial_entry;
        this.randomEntry = opts.random_entry;
        this.overlayImage = opts.overlay_image;
        this.overlayImageUrl = opts.overlay_image_url;
        this.overlayImageBounds = opts.overlay_image_bounds;
        this.overlayImageOpacity = opts.overlay_image_opacity;
        this.mapView = opts.map_view;
        this.toggleSelect = opts.toggle_select;
        this.hideSelect = opts.hide_select;
        this.fitToBounds = opts.fit_bounds

    }


    /**
     * Ordena un array por uno de sus keys.
     * @param {object} obj Objeto a ordenar.
     * @param {integer} key Posición del array.
     * @param {object} obj Objeto ordenado.
     */
    sortObject = (obj, key=0) => obj.sort((a, b) => {
        const valA = a[key].toUpperCase();
        const valB = b[key].toUpperCase();
        if (valA > valB) {
            return 1;
        }
        if (valA < valB) {
            return -1;
        }
        return 0;
    });


    /**
     * Oculta el select
     * @param {*} status 
     * @returns 
     */
    hideSelectProvinces = status => {
        if(typeof status != "boolean"){
            return;
        }

        const selector = `[data-scope-related="${this.scope}"]`;
        const obj = document.querySelectorAll(selector);
        obj.forEach(element => {
            element.style.display = (this.hideSelect ? "none" : "");
        });
    }


    /**
     * Retorna un valor aleatório.
     * @param {object} list Listado de provincias
     * @returns {object}
     */
    _randomEntry = list => {
        return list[Math.floor(Math.random()*list.length)][0];
    };


    /**
     * Retorna un array con clave y valor de provincias argentinas
     * @param {object} geoJSON Objeto geoJSON con los features por provincia
     * @param {string} idKey Key del propertie que se usa como id.
     * @returns {object}
     */
    _provincesFromGeoJSON = (geoJSON, idKey) => {
        let prov = {};
        geoJSON.features.map(p => {
            const {
                name=false,
                "pm-interactive":pmInteractive=false} = p.properties;

            if(pmInteractive === "n" || !name){
                return false;
            }
            prov[p.properties[idKey]] = name;
        }).filter(Boolean);

        let provincesToList = this.sortObject( Object.entries(prov), 1);
        return provincesToList;
    };


    /**
     * Imprime la región según las opciones de precedencia.
     * @param {string} prov Id de provincia
     * @returns {undefined}
     */
    _selectedEntry = prov => {
        const hash = window.location.hash.replace("#", "");
        let selected = "";
        if(hash){
            selected = hash;
        } else if(this.initialEntry){
            selected = this.initialEntry;
        } else if(this.randomEntry){
            selected = this._randomEntry(prov);
        }
        return selected;
    }


    /**
     * Crea los options para el select de provincias
     * @param {object} map 
     * @returns {object}
     */
    _setSelectProvinces = map => {
        const hash = window.location.hash.replace("#", "");
        const prov = this._provincesFromGeoJSON(map.geoJSON, map.id);
        const selected = this._selectedEntry(prov);

        // Creo los options
        const selectProvinces = document.getElementById("id_provincia");
        const optionsSelect = [["", "Elegí una provincia"], ...prov];
        optionsSelect.forEach(province => {
            const option = document.createElement("option");

            if(province[0] === selected){
                option.setAttribute("selected", "selected");
            }
            option.value = province[0];
            option.textContent = province[1];
            selectProvinces.appendChild(option);
        });
        return {object: selectProvinces, selected: selected};         
    };


    /**
     * Selected option cuando selecciono un polígono
     * @param {object} map Objeto return ponchoMap 
     */
    _selectedPolygon = map => {
        map.map.eachLayer(layer => {
            layer.on("keypress click", (e) => {
                if( e?.target?.feature?.properties ){
                    const {id} = e.target.feature.properties;
                    document.getElementById("id_provincia").value = id;
                }
            });
        })
    }


    /**
     * Crea el listener para la interacción del select con el mapa.
     * @param {object} map 
     */
    _selectProvinces = map => {
        this._selectedPolygon(map);

        // Arma el select con las provincias
        const selectProvinces = this._setSelectProvinces(map);

        if(selectProvinces.selected){
            map.gotoEntry(selectProvinces.selected)
        }

        // cambia los datos de la provincia 
        selectProvinces.object.addEventListener("change", e => {
            map.gotoEntry(e.target.value);
            e.value = selectProvinces.selected
        });
    };


    /**
     * Implementa una imagen sobre el mapa
     * @returns {undefined}
     */
    _overlayImage = () => {
        if(!this.overlayImageUrl){
            return;
        }

        if(typeof this.overlayImageUrl !== "string"){
            console.error("Hubo un problema con la ruta o nombre de la imagen");
            return;
        }

        if(typeof this.overlayImageOpacity !== "number"){
            console.error("El valor de la opacidad debe ser un número.");
            return;
        }

        L.imageOverlay(
            this.overlayImageUrl, this.overlayImageBounds, 
            {opacity: this.overlayImageOpacity}
        ).addTo(this.map);
    }


    /**
     * imprime el mapa
     */ 
    renderProvinceMap = () =>{
        this.hideSelectProvinces(this.hideSelect);
        this._overlayImage();

        this.render(); // Imprime PonchoMapsFilter
        if(this.fitToBounds){
            this.fitBounds();
        }
        this._selectProvinces(this);
    };
}
// end class