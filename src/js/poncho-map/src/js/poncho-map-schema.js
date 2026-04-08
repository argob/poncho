/**
 * PONCHO MAP SCHEMA
 *
 * @summary Genera un schema JSON-LD (schema.org/ItemList) con los
 * marcadores del mapa para mejorar el SEO.
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js, leaflet.markercluster.js, leaflet.css,
 * MarkerCluster.Default.css, MarkerCluster.css, PonchoMap,
 * PonchoMapFilter
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 *
 *
 * MIT License
 *
 * Copyright (c) 2026 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
class PonchoMapSchema {
    /**
     * @param {Array} data - Array de features GeoJSON tipo Point.
     * @param {Object} [options={}] - Opciones de configuración.
     * @param {string} [options.summary="Mapa de ubicaciones"] -
     *   Nombre descriptivo del listado para el schema.
     */
    constructor(data, options = {}) {
        const { origin = "", pathname = "" } = location ?? {};
        this.location = `${origin}${pathname}`;

        const defaults = { 
            summary: "Mapa de ubicaciones",
            scope: "pmSchema",
            id_key: "id"
        };
        const opts = Object.assign({}, defaults, options);
        this.summary = String(opts.summary || defaults.summary);
        this.scope = String(opts.scope);
        this.id_key = opts.id_key;
        this.data = data;
    }

    /**
     * Genera el objeto raíz del schema JSON-LD (ItemList).
     *
     * @param {Array} [items=[]] - Lista de elementos ListItem.
     * @returns {Object} Objeto schema.org/ItemList.
     */
    header = (items = []) => ({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": this.summary,
        "itemListElement": items
    });

    /**
     * Crea un elemento ListItem a partir de un feature GeoJSON.
     *
     * Valida que el feature tenga geometría de tipo Point y que
     * sus propiedades incluyan `name` e `id`.
     *
     * @param {number} position - Posición del elemento en la lista.
     * @param {Object} entry - Feature GeoJSON.
     * @returns {Object|undefined} Objeto schema.org/ListItem, o
     *   undefined si el feature no es válido.
     */
    item = (position, entry) => {
        if (!entry?.geometry || !entry?.properties) {
            return;
        }
        if (entry.geometry.type !== "Point") {
            console.warn(
                "El geoJson debe ser un punto, no un polígono."
            );
            return;
        }
        const [latitude, longitude] = entry.geometry.coordinates;
        const { name } = entry.properties;
        const id = entry.properties[this.id_key];

        if (!name || !id) {
            console.warn(
                "La entrada no tiene 'name' o 'id' en properties.",
                entry
            );
            return;
        }

        const safeId = encodeURIComponent(id);
        return {
            "@type": "ListItem",
            position,
            "item": {
                "@type": "Place",
                name,
                "geo": {
                    "@type": "GeoCoordinates",
                    latitude,
                    longitude
                },
                "url": `${this.location}#${safeId}`
            }
        };
    };


    /**
     * Construye el schema completo como objeto JSON-LD.
     *
     * @returns {Object} Schema JSON-LD listo para serializar.
     */
    schema = () => this.header(this.createItems(this.data));

    /**
     * Recorre el array de datos y genera los ListItem válidos.
     *
     * @param {Array} data - Array de features GeoJSON.
     * @returns {Array} Array de objetos ListItem.
     */
    createItems = (data) =>
        data.reduce((collector, entry, index) => {
            const schemaItem = this.item(index + 1, entry);
            if (schemaItem) {
                collector.push(schemaItem);
            }
            return collector;
        }, []);


    /**
     * Inserta o actualiza el elemento
     * `<script type="application/ld+json">` en el `<head>`.
     *
     * Si ya existe un elemento con id `pmSchema`, actualiza su
     * contenido en lugar de crear uno nuevo.
     *
     * No se ejecuta si la cantidad de features supera
     * `PonchoMapSchema.MAX_FEATURES` (500).
     */
    render = () => {
        if (this.data.length > PonchoMapSchema.MAX_FEATURES) {
            console.warn(
                `PonchoMapSchema: se omite el schema porque el ` +
                `número de features (${this.data.length}) supera ` +
                `el límite de ${PonchoMapSchema.MAX_FEATURES}.`
            );
            return;
        }
        const json = JSON.stringify(this.schema());
        const existing = document.getElementById("pmSchema");
        if (existing) {
            existing.text = json;
            return;
        }
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = `pmschema__${this.scope}`;
        script.text = json;
        document.head.appendChild(script);
    };
}

/** Máximo de features permitidos para generar el schema. */
PonchoMapSchema.MAX_FEATURES = 1000;
