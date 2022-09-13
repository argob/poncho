/**
 * GAPI LEGACY
 * Retorna la estructura de la versión 3 de la API GoogleSheets.
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, 2021.
 * @summary La estructura del objeto que retorna es de este modo:
 *  .
 *  \--feed
 *      \-- entry
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 * 
 * @param  {object} response Response JSON.
 * @return {void}
 */
 const gapi_legacy = (response) => {

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