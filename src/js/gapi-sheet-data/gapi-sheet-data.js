/**
 * Helpers para manejar los json provenientes de Google Sheets.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 */
class GapiSheetData {
    constructor(options){
        const defaults = {
            gapi_key: "AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY",
            gapi_uri: "https://sheets.googleapis.com/v4/spreadsheets/"
        };
        let opts = Object.assign({}, defaults, options);
        this.gapi_key = opts.gapi_key;
        this.gapi_uri = opts.gapi_uri;
    }


    /**
     * URI para obtener el json de google sheet.
     * 
     * @param {string} page Nombre de la página a obtener.
     * @param {string} spreadsheet Id del documento Google Sheet.
     * @param {string} api_key Google API Key.
     * @returns {string} URL
     */
    url = (page, spreadsheet, api_key) => {
        if(!page || typeof page !== "string"){
            throw new Error("El parámetro 'page' es requerido.");
        }
        if(!spreadsheet || typeof spreadsheet !== "string"){
            throw new Error("El parámetro 'spreadsheet' es requerido.");
        }
        const key = api_key || this.gapi_key;
        return [
            this.gapi_uri, spreadsheet, "/values/",
            encodeURIComponent(page), "?key=", key, "&alt=json"
        ].join("");
    };


    /**
     * Retorna los elementos del json estructurados en feed,
     * entries y headers.
     *
     * @param {object} json Respuesta JSON de la API de Google Sheets.
     * @returns {{feed: object[], entries: object[], headers: object}}
     */
    json_data = (json) => {
        if(!json || !json.values || !json.values.length){
            throw new Error(
                "El parámetro 'json' debe contener una propiedad 'values'"
                + " con al menos una fila."
            );
        }
        const feed = this.feed(json);
        return {
            "feed": feed,
            "entries": this.entries(feed),
            "headers": this.headers(feed)
        };
    };


    /**
     * Retorna con una estructura más cómoda para usar
     * @param {object} response Feed Json 
     * @returns {object}
     */
    feed = (response, lowercase = true) => {
        const rawKeys = response.values[0];
        const regex = / |\/|_/ig;
        const keyCount = rawKeys.length;
        const processedKeys = new Array(keyCount);
        for(let i = 0; i < keyCount; i++){
            processedKeys[i] = lowercase
                ? rawKeys[i].toLowerCase().replace(regex, "")
                : rawKeys[i].replace(regex, "");
        }

        const rows = response.values;
        const len = rows.length;
        const entry = new Array(len - 1);
        for(let k = 1; k < len; k++){
            const v = rows[k];
            const zip = {};
            for(let i = 0; i < keyCount; i++){
                zip[processedKeys[i]] = i < v.length ? v[i].trim() : "";
            }
            entry[k - 1] = zip;
        }
        return entry;
    };


    /**
     * Variables.
     */
    gapi_feed_row = (data, separator="-", filter_prefix=true) => {
        const prefix = filter_prefix ? "filtro-" : "";
        const feed_keys = Object.entries(data);
        const clean = k => k.replace("gsx$", "")
                            .replace(prefix, "").replace(/-/g, separator);
        let list = {};
        feed_keys.map(v => list[clean(v[0])] = v[1]["$t"]);
        return list;
    };

    /**
     * Retrona las entradas excluyendo el primer row, ya que 
     * pertenece a los headers.
     * 
     * @param {object} feed 
     * @returns {object}
     */
    entries = (feed) => {
        return feed.slice(1);
    };

    /**
     * Obtiene el primer row que es igual a los headers.
     * @param {*} feed 
     * @returns 
     */
    headers = (feed) => {
        return feed[0];
    };
};



if (typeof exports !== "undefined") {
    module.exports = GapiSheetData;
}