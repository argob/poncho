
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
        title_classlist: ["h2"],
        term_classlist: ["h3", "class=h5"], 
        lead: {
            key: "volanta", 
            style: "text-transform:uppercase;" 
                + "border-bottom: 1px solid var(--gray-border, #ccc);" 
                + "padding-bottom:.25em; color:var(--default) " 
                + "font-size:small;"
        },  
    };
};

class ponchoMapProvincesCustom extends PonchoMapProvinces {
    constructor(geoProvinces, entries, options){
        const headers = __setHeaders(options);
        console.log( __templateStructure(headers) )
        let templateStructure = Object.assign({}, __templateStructure(headers), options?.template_structure);
        delete options["template_structure"];
        console.log(templateStructure)

        const defaultOptions = {
            id_mixing: ["in1", "nam"],
            scope: "poncho-map", 
            title: "filttro-provincia",
            template_markdown: true,
            allowed_tags: ['*'],
            headers: headers,
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
            fit_bounds: true
        };

        let opts = Object.assign({}, defaultOptions, options);
        super(geoProvinces, entries, opts);
    }

};