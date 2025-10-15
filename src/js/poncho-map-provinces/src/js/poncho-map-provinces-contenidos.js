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
    return {
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
        // map_align: "left",
        lead: {
            key: "volanta", 
            css: "text-default small text-uppercase p-b-xs m-b-1",
            style: "border-bottom: 1px solid var(--gray-border, #ccc);" 
        },  
        term_classlist: ["h5", "m-b-05"], 
        title_classlist: ["h3", "m-b-1", "m-t-0"]
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
            allowed_tags: ['*'],
            fit_bounds: false,
            fit_bounds_onevent: true,
            hash: true,
            hide_select: true,
            // headers: headers,
            id_mixing: ["in1", "nam"],
            // initial_entry: "42-la-pampa",
            // map_background: "white",
            // map_opacity: 1,
            overlay_image: true,
            overlay_image_opacity: 0.75,
            province_index: "filttro-provincia",
            scope: "poncho-map",
            // theme: "relax"
            theme_map: "transparent",
            theme_ui: "default",
            template_markdown: true,
            template_structure: templateStructure,
            title: "filttro-provincia",
            tooltip: true,
        };

        let opts = Object.assign({}, defaultOptions, options);
        super(geoProvinces, entries, opts);
    }
};