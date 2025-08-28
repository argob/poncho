/**
 * PONCHO MAP FILTRO POR PROVINCIAS PARA CONTENIDOS
 * 
 *
 * @summary Instancia del la app PonchoMapProvinces ajustado a las necesidades
 * de presentación del equipo de contendios de argentina.gob.ar.
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 *
 * 
 * MIT License
 *
 * Copyright (c) 2024 Argentina.gob.ar
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


/**
 * Refactoriza los headers
 * 
 * @summary Reformula el índice headers y filtra los encabezados que _no_ 
 * deben mostrar su título.
 * @param {object} options Opciones
 * @returns {object}
 */
const __setHeaders = (options) => {
    if(!options.hasOwnProperty('headers') && options.headers.length < 1){
        return false;
    }
    const headers = options.headers;
    let h = {};
    Object.keys(headers).forEach(key => {
        if(key.endsWith("--ignore")){
            h[key] = "";
        } else {
            h[key] = headers[key];
        }
    });
    return h;
}


/**
 * Refactoriza del índice `template_Sturcture`
 * 
 * @summary Los encabezados pasados por parámetros se filtran y se utiliza
 * un listado previamente definido
 * @param {object} headers Encabezados que deben ir en values 
 * @returns {object}
 */
const __templateStructure = (headers) => {
    return { // Asigno estilos contentido
        values: (function(){
            return Object.keys(headers).filter(key => {
                const blacklist = [
                    // Blacklist GSheet
                    'volanta', 'filttro-provincia', 'filtro-provincia', 
                    'color',
                    // Blacklist GeoJSON
                    'gna', 'gid', 'fna', 'nam', 'in1', 'sag', 'region',
                    'region_id', 'stroke-opacity', 'stroke-width',
                    'stroke-color', 'stroke'
                ];
                if(!blacklist.includes(key)){
                    return key;
                }
            });
        })(),
        title_classlist: ["h3", "m-y-1"],
        term_classlist: ["h5", "m-b-05"], 
        lead: {
            key: "volanta", 
            style: "text-transform:uppercase;" 
                + "border-bottom: 1px solid var(--gray-border, #ccc);" 
                + "padding-bottom:.25em; color:var(--default);" 
                + "font-size:small;"
        },  
    };
};


/**
 * Objeto ponchoMapProvincesCustom
 */
class ponchoMapProvincesCustom extends PonchoMapProvinces {
    constructor(geoProvinces, entries, options){
        const templateStructure = Object.assign(
            {}, __templateStructure(options.headers), options?.template_structure);
        options["headers"] = __setHeaders(options);
        options.template_structure = templateStructure;

        const defaultOptions = {
            id_mixing: ["in1", "nam"],
            scope: "poncho-map", 
            title: "filttro-provincia",
            template_markdown: true,
            allowed_tags: ['*'],
            // headers: headers,
            template_structure: templateStructure,
            tooltip: true,
            hash: true,
            province_index: "filttro-provincia",
            fit_bounds_onevent: true,
            // theme: "relax"
            theme_ui: "default",
            theme_map: "transparent",
            // map_opacity: 1,
            // map_background: "white",
            // initial_entry: "42-la-pampa",
            hide_select: true,
            overlay_image: true,
            overlay_image_opacity: 0.75,
            fit_bounds: false,
            
        };



        let opts = Object.assign({}, defaultOptions, options);
        super(geoProvinces, entries, opts);
    }
};