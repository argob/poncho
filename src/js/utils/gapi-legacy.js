/**
 * GAPI LEGACY
 * Retorna la estructura de la versión 3 de la API GoogleSheets.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @summary La estructura del objeto que retorna es de este modo:
 * @example
 * // Estructura de retorno
 *  .
 *  \--feed
 *      \-- entry
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 * 
 * @param  {object} response Response JSON.
 * @return {object} JSON con la estructura V3 de la api de google sheet
 */
const gapi_legacy = (response) => {

  if (!response || !response.values || response.values.length === 0) {
    throw new TypeError("Invalid response format");
  }

  if (!Array.isArray(response.values) || !Array.isArray(response.values[0])) {
    throw new TypeError("Invalid response format: values should be arrays");
  }

  const keys = response.values[0];
  const regex = / |\/|_/ig;
  let entry = [];

  response.values.forEach((v, k) => {
    if(k > 0){
        let zip = {};
        for(const i in keys){
            const d = (v.hasOwnProperty(i))? v[i].trim() : "";
            zip[`gsx$${keys[i].toLowerCase().replace(regex, "")}`] = {"$t": d};
        }
        entry.push(zip);
    }
  });

  return {"feed": {"entry": entry}};
};


if (typeof exports !== "undefined") {
  module.exports = gapi_legacy;
}