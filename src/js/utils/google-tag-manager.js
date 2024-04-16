
/**
 * Parámetros de Google Tag Manager en www.argentina.gob.ar
 * 
 * @summary Obtiene los valores utilizados para Google Tag Manager en el sitio
 * web <www.argentina.gob.ar>
 * @example
 * //{
 * //    "id": "404634",
 * //    "tipo": "noticia",
 * //    "padres": [
 * //        404463
 * //    ],
 * //    "padre": "Área Circular",
 * //    "raiz": "Área Circular"
 * //}
 * googleTagManager();
 * @returns {object}
 */
const googleTagManager = () => {
    const gtm = document.querySelectorAll('meta[name^="gtm"]');
    const gtmData = Object.values(gtm).map(v => {
        const [name, content] = v.attributes;
        let value;
        if (name.value === "gtm-padres") {
            value = content.value.split(" ").map(f => parseInt(f));
        } else {
            value = content.value;
        }
        return { [name.value.replace("gtm-", "")]: value };
    });
  
    return Object.assign({}, ...gtmData);
};


if (typeof exports !== "undefined") {
    module.exports = {googleTagManager};
}
