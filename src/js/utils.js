/**
 * Validador de latitud y longitud.
 * 
 * @param {float} latlng Latitud o Longitud.
 * @return {boolean}
 */
const validateLatLng = (latlng) => {
  let latlngArray = latlng.toString().split(",");
  for(let i = 0; i < latlngArray.length; i++) {
      if(isNaN(latlngArray[i]) || latlngArray[i] < -127 || latlngArray[i] > 75){
        return false;
      }
      return true;
  }
};

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
            console.warn(
                `No se encuentra el color con nombre «${color}». `
                + `Revise cual aplica en: `
                + `https://argob.github.io/poncho/identidad/colores/`
            );
    }
    return codigoColor;
};

/**
 * Remueve acentos y caracteres especiales.
 * 
 * @param {string} data Cadena de texto a limpiar. 
 * @example
 * // returns Accion murcielago arbol
 * removeAccents("Acción Murciélago árbol")
 * @returns {string} Cadena de texto sin acentos.
 */
const removeAccents = (data) => {
  if(!data){
      return "";
  }
  return data
      .replace(/έ/g, "ε")
      .replace(/[ύϋΰ]/g, "υ")
      .replace(/ό/g, "ο")
      .replace(/ώ/g, "ω")
      .replace(/ά/g, "α")
      .replace(/[ίϊΐ]/g, "ι")
      .replace(/ή/g, "η")
      .replace(/\n/g, " ")
      .replace(/[áÁ]/g, "a")
      .replace(/[éÉ]/g, "e")
      .replace(/[íÍ]/g, "i")
      .replace(/[óÓ]/g, "o")
      .replace(/[Öö]/g, "o")
      .replace(/[úÚ]/g, "u")
      .replace(/ê/g, "e")
      .replace(/î/g, "i")
      .replace(/ô/g, "o")
      .replace(/è/g, "e")
      .replace(/ï/g, "i")
      .replace(/ü/g, "u")
      .replace(/ã/g, "a")
      .replace(/õ/g, "o")
      .replace(/ç/g, "c")
      .replace(/ì/g, "i");
};

/**
 * Slugify
 * 
 * @param {string} string Cadena de texto a convertir.
 * @example
 * // returns el-murcielago-remolon 
 * slugify("El murciélago remolón")
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