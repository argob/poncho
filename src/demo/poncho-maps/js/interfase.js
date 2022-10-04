var conf;
const ponchoMapFilterSearch = (values) => {
    const {gsheet_id, dataset_conf, dataset, gapi_key} = values;
    (async() => {
        const gapi = new GapiSheetData();
        const googlesheet_data = await fetch_json(
                gapi.url(encodeURIComponent(dataset), gsheet_id, gapi_key)
        ); 
        const googlesheet_conf = await fetch_json(
            gapi.url(encodeURIComponent(dataset_conf),gsheet_id, gapi_key)
        ); 
        
        conf = googlesheet_conf
                .values.reduce((r, e) => ({...r, [e[0]]:e[1]}), {});
        const gapi_data = gapi.json_data(googlesheet_data);

        // Utilities
        const yesno = key => (conf.hasOwnProperty(key) && conf[key] == "TRUE" ? 
                true : false);
        const spliter = (str, separator=",") => {
            return str.trim().split(separator).map(e => e.trim());
        };

        const group_separator = (str) => {
            const regex = /\[\s{0,3}(?:("|')(.*?)\1|(.+?))\s{0,3},\s{0,3}([\w-]+)\s{0,3}\]/gm;
            let results = [];
            while ((m = regex.exec(str)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                const r = m.filter(e => e)
                results.push([r[1], r[2]])
            }
            return results;
        };

        const options = {
            "scope": "poncho-map",
            "id": conf.id.toLowerCase(),
            "title": conf.title,
            "latitud": conf.latitud,
            "longitud": conf.longitud,
            "template_markdown": yesno("markdown"),
            "template_structure" : {
                "values": conf.values.split(",").map(e => e.trim()),
            },
            "headers": gapi_data.headers,
            "marker": (_, ele) => {
                let color = "azul";
                if(typeof ele.color !== "undefined" && ele.color != ""){
                    color = ele.color;
                }
                return color;
            },
            "slider": yesno("slider"),
            "hash": yesno("hash"),
            "scroll": yesno("scroll"),
            "filters": group_separator(conf.filters).map(e => {
                    return ({
                        "legend": e[0],
                        "field": [e[1]]
                    });
                }),
            };
            console.log(options);
            const filter = new PonchoMapFilter(gapi_data.entries, options);
            filter.render();

            // Buscador
            const search_options = {
                "scope": "poncho-map-search", 
                "placeholder": conf.placeholder,
                "search_fields": spliter(conf["search-fields"])
            };
            const search = new PonchoMapSearch(filter, search_options);
            search.render();
    })();
}