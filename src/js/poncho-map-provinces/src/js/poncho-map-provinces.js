/**
 * PONCHO MAP
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
class PonchoMapProvinces {
    constructor(options){
        const defaultOptions = {
            geoJSON: "https://www.argentina.gob.ar/"
                + "profiles/argentinagobar/"
                + "themes/contrib/poncho/resources/jsons/" 
                + "geo-provincias-argentinas.json",
            cssDefinitions: `.mapa-provincias{display:none}`
                + `@media screen and (max-width:992px){`
                + `.mapa-svg{display:none}.mapa-provincias{`
                + `display:inherit}}`,
        };
        let opts = Object.assign({}, defaultOptions, options);
        this.geoJSON = opts.geoJSON;
        this.cssDefinitions = opts.cssDefinitions;
    }


    /**
     * Aplica los estilos en el <head>
     * @returns {undefined}
     */
    cssStyles = () => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = this.cssDefinitions;
        const head = document.querySelector("head");
        head.appendChild(styleSheet)
    };


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
     * Retorna un array con clave y valor de provincias argentinas
     * @param {object} geoJSON Objeto geoJSON con los features por provincia
     * @param {string} idKey Key del propertie que se usa como id.
     * @returns {object}
     */
    provincesFromGeoJSON = (geoJSON, idKey) => {
        let prov = {};
        geoJSON.features.map(p => {
            const {
                name=false,
                "pm-interactive":pmInteractive=false} = p.properties;

            if(pmInteractive === "n" || !name){
                return false;
            }
            prov[p.properties[idKey]] = name;
        }).filter(f => f);
        
        let provincesToList = this.sortObject( Object.entries(prov), 1);
        return provincesToList;
    };



    /**
     * Crea los options para el select de provincias
     * @param {object} map 
     * @returns {object}
     */
    setSelectProvinces = map => {
        let hash = window.location.hash.replace("#", "");
        let selected = hash ?? "";

        let prov = this.provincesFromGeoJSON(map.geoJSON, map.id);

        // Creo los options
        const selectProvinces = document.getElementById("id_provincia");
        const optionsSelect = [["", "Seleccione una provincia"], ...prov];
        optionsSelect.forEach(province => {
            const option = document.createElement("option");

            if(province[0] === selected){
                option.setAttribute("selected", "selected");
            }
            option.value = province[0];
            option.textContent = province[1];
            selectProvinces.appendChild(option);
        });
        return selectProvinces;         
    };


    /**
     * Junta el geoJSON con el JSON de Google Sheet
     * 
     * @param {object} geoProvinces GeoJSON
     * @param {object} entries JSON con entradas por provincia.
     * @returns {object}
     */
    mergeData = (geoProvinces, entries) => {
        geoProvinces.features.forEach((feature, key) => {
            const jsonEntry = entries.find(entry => 
                (entry["filttro-provincia"] == feature.properties.fna ||
                entry["filttro-provincia"] == feature.properties.nam)
            );

            // Si no existe la provincia en el JSON, borra el feature.
            if(!jsonEntry && feature.properties.fna){
                delete geoProvinces.features[key];
                return;
            }

            // Si hay definido un key _color_, usa el color en el fill.
            if(jsonEntry?.color && !feature.properties["pm-type"]){
                geoProvinces
                    .features[key]
                    .properties.stroke = ponchoColor(jsonEntry.color);
            }

            // Remuevo la propiedad interactive del json para que no se interponga
            // con el valor del geoJSON.
            if(feature.properties["pm-interactive"] === "n" && 
                        jsonEntry?.["pm-interactive"] !== "n"){
                delete jsonEntry["pm-interactive"];
            }

            Object.assign(geoProvinces.features[key].properties, jsonEntry);
        });
        return geoProvinces;
    };


    /**
     * Crea el listener para la interacción del select con el mapa.
     * @param {object} map 
     */
    selectProvinces = map => {
        // Arma el select con las provincias
        const selectProvinces = this.setSelectProvinces(map);
        // cambia los datos de la provincia 
        selectProvinces.addEventListener("change", e => {
            map.gotoEntry(e.target.value);
        });
    };
}

