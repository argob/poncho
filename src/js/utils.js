/**
 * Colores poncho a hexa
 * 
 * @see https://argob.github.io/poncho/identidad/colores/
 * @param {string} color Nombre de color Poncho.
 * @example
 * // returns "#2897d4"
 * getColor("celeste")
 * @returns {string} Color en formato hexadecimal.
 */
const ponchoColor = (color) => {
    let codigoColor;
    switch (color.toLocaleLowerCase()) {
        case "celeste":
        case "info":
            codigoColor = "#2897d4";
            break;
        case "verde":
        case "success":
            codigoColor = "#2e7d33";
            break;
        case "rojo":
        case "danger":
            codigoColor = "#c62828";
            break;
        case "amarillo":
        case "warning":
            codigoColor = "#f9a822";
            break;
        case "azul":
        case "primary":
            codigoColor = "#0072bb";
            break;
        case "negro":
        case "black":
            codigoColor = "#333";
            break;
        case "uva":
            codigoColor = "#6a1b99";
            break;
        case "gris":
        case "muted":
            codigoColor = "#525252";
            break;
        case "grisintermedio":
        case "gris-area":
        case "gray":
            codigoColor = "#f2f2f2";
            break;
        case "celesteargentina":
        case "celeste-argentina":
            codigoColor = "#37bbed";
            break;
        case "fucsia":
            codigoColor = "#ec407a";
            break;
        case "arandano":
            codigoColor = "#c2185b";
            break;
        case "cielo":
            codigoColor = "#039be5";
            break;
        case "verdin":
            codigoColor = "#6ea100";
            break;
        case "lima":
            codigoColor = "#cddc39";
            break;
        case "maiz":
        case "maíz":
            codigoColor = "#ffce00";
            break;
        case "tomate":
            codigoColor = "#ef5350";
            break;
        case "naranjaoscuro":
        case "naranja":
            codigoColor = "#EF6C00";
            break;
        case "verdeazulado":
        case "verde-azulado":
            codigoColor = "#008388";
            break;
        case "escarapela":
            codigoColor = "#2cb9ee";
            break;
        case "lavanda":
            codigoColor = "#9284be";
            break;
        case "mandarina":
            codigoColor = "#f79525";
            break;
        case "palta":
            codigoColor = "#50b7b2";
            break;
        case "cereza":
            codigoColor = "#ed3d8f";
            break;
        case "limon":
            codigoColor = "#d7df23";
            break;
        case "verdejade":
        case "verde-jade":
            codigoColor = "#066";
            break;
        case "verdealoe":
        case "verde-aloe":
            codigoColor = "#4fbb73";
            break;
        case "verdecemento":
        case "verde-cemento":
            codigoColor = "#b4beba";
            break;
        default:
            codigoColor = color;
            // console.warn(
            //     `No se encuentra el color con nombre «${color}». `
            //     + `Revise cual aplica en: `
            //     + `https://argob.github.io/poncho/identidad/colores/`
            // );
    }
    return codigoColor;
};

/**
 * Remueve acentos y caracteres especiales.
 * 
 * @param {string} data Cadena de texto a limpiar. 
 * @example
 * // returns Accion murcielago arbol nino
 * removeAccents("Acción Murciélago árbol niño")
 * @returns {string} Cadena de texto sin acentos.
 */
const replaceSpecialChars = (data) => {
  if(!data){
      return "";
  }
  const search = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
  + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
  const replace = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
  + "rrsssssttuuuuuuuuuwxyyzzz";
  const a = search + search.toUpperCase();
  const b = replace + replace.toUpperCase();
  const p = new RegExp(a.split("").join("|"), "g");  
  return data.toString().replace(p, c => b.charAt(a.indexOf(c)))
};

/**
 * Slugify
 * 
 * @param {string} string Cadena de texto a convertir.
 * @example
 * // returns el-murcielago-remolon-parece-un-nino
 * slugify("El murciélago remolón parece un niño")
 * @returns {string} Cadena de texto en formato slug.
 */
const slugify = (string) =>{
  if(!string){
      return string;
  }
  const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
            + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
            + "rrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string.toString().toLowerCase()
      .replace(/\s+/g, "-")
      .replace(p, c => b.charAt(a.indexOf(c)))
      .replace(/&/g, "-and-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
};

/**
 * Fetch data
 * 
 * @example
 * ```js
 * (async() => {
 *     const data = await fetch_json("https://som.url.com");
 * });
 * ```
 */
async function fetch_json(url, method="GET"){
    const response = await fetch(
      url,{
          method: method, 
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          }
      }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};

/**
 * Impide que se impriman etiquetas HTML.
 * 
 * @summary Impide que se impriman etiquetas HTML exceptuando aquellas
 * asignadas en el parámetro exclude.
 * @param {string} str Cadena de texto a remplazar.
 * @param {object} exclude Etiquetas que deben preservarse.
 * @example
 * // returns &lt;h1&gt;Hello world!&lt;/h1&gt; <a href="#">Link</a>
 * secureHTML('<h1>Hello world!</h1> <a href="#">Link</a>', ["a"])
 * 
 * @returns {string} Texto remplazado.
 */
const secureHTML = (str, exclude=[]) => {
    if(exclude.some(e => e === "*")){
        return str;
    }

    let replaceString = str.toString()
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    if(exclude.length > 0){
        const regexStart = new RegExp(
            "&lt;(" + exclude.join("|") + ")(.*?)&gt;", "g");
        const regexEnd = new RegExp(
            "&lt;\/(" + exclude.join("|") + ")(.*?)&gt;", "g");

        return replaceString
            .replace(regexStart, "<$1$2>")
            .replace(regexEnd, "</$1>");
    }
    return replaceString;
};


const getScroll = () => {
  if (window.pageYOffset != undefined) {
      return [pageXOffset, pageYOffset];
  } else {
      var sx, sy, d = document,
          r = d.documentElement,
          b = d.body;
      sx = r.scrollLeft || b.scrollLeft || 0;
      sy = r.scrollTop || b.scrollTop || 0;
      return [sx, sy];
  }
};


// $START_TEST$
// ¡Atención! Patch para testear non-module
module.exports = {slugify, ponchoColor, replaceSpecialChars, secureHTML};
// $END_TEST$