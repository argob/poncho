/*
{
    es: {
        holidays: [
            { 
                "date": "01/01/2027", 
                "label": "Año nuevo", 
                "type": "inamovible" 
            }
        ],
        legal_info: [
            {
                order: 0,
                name: "",
                description: ""
            }
        ]
    }
}
*/

/**
 * Showdown habilitado.
 * 
 * Verifica si la librería _showdown_ está disponible.
 * @returns {boolean}
 */
const _markdownEnable = () => {
    if(typeof showdown !== "undefined" && 
        showdown.hasOwnProperty("Converter")){
            return true;
    }
    return false;
} 

/**
 * Imprime la información legal para cada calendario anual.
 *
 * Itera sobre los ítems del array `data` y genera elementos HTML con el
 * nombre y la descripción de cada entrada. La descripción se convierte de
 * Markdown a HTML usando Showdown. El resultado reemplaza el contenido del
 * elemento con clase `.js-legal-info-container`.
 *
 * @param {Array<{name: string, description: string}>} data - Lista de ítems legales.
 * @param {string} [lang="es"] - Idioma activo (reservado para uso futuro).
 */
function legalInfo(data, lang="es"){
    if(!data?.length) return;
    const container = document.querySelector(".js-legal-info-container");
    if(!container){
        console.warn("no se puede encontrar el contenedor");
        return;
    }

    if(!_markdownEnable()){
        alert("hello")
    }

    const converter = new showdown.Converter(this.markdown_options);

    const fragment = document.createDocumentFragment();
    for(const {name, description} of data){
        const heading = document.createElement("h2");
        heading.classList.add("h4");
        heading.textContent = name;
        
        const body = document.createElement("p");
        body.innerHTML = converter.makeHtml(description);

        fragment.appendChild(heading);
        fragment.appendChild(body);
    }
    container.replaceChildren(fragment);
}


/**
 * Obtiene el año desde los parámetros de la URL.
 *
 * Acepta años en un rango de los últimos 7 años contando desde el actual.
 * Si el parámetro `year` no está presente o queda fuera del rango permitido,
 * devuelve el año corriente.
 *
 * @param {URL} url - Objeto URL de la página actual.
 * @returns {number} Año validado.
 */
function getYearFromUrl(url) {
    const currentYear = new Date().getFullYear();
    const allowedYears = Array.from({length: 7}, (_, i) => currentYear - i);
    const paramYear = parseInt(url.searchParams.get("year"), 10);
    return allowedYears.includes(paramYear) ? paramYear : currentYear;
}


/**
 * Obtiene el idioma desde los parámetros de la URL.
 *
 * Los valores aceptados son `"es"` e `"en"`. Si el parámetro `lang` no está
 * presente o contiene un valor inválido, devuelve `"es"` por defecto.
 *
 * @param {URL} url - Objeto URL de la página actual.
 * @returns {"es"|"en"} Código de idioma validado.
 */
function getLangFromUrl(url) {
    const allowedLangs = ["es", "en"];
    const paramLang = url.searchParams.get("lang");
    return allowedLangs.includes(paramLang) ? paramLang : "es";
}


function calendarNotFound(data={}){
    const container = document.querySelector(".not-found-message");
    container.innerHTML = "";
    const tpl = document.querySelector("#calendar-not-found");
    if(!tpl){
        return;
    }
    const clone = document.importNode(tpl.content, true);
    for(let [key, value] of Object.entries(data)){
        const ele = clone.querySelector(`.tpl-${key}`);
        if(!ele){
            continue;
        }
        ele.textContent = value;
    }

    container.appendChild(clone);
}


/**
 * Inicializa el calendario de feriados para el año e idioma indicados.
 *
 * Descarga el archivo JSON `./data/holidays-{year}.json`, valida que contenga
 * feriados para el idioma solicitado y luego renderiza el calendario llamando
 * a `calendar.render()`. Si el archivo no se puede cargar o no hay datos
 * válidos, la función retorna sin hacer nada.
 *
 * @param {number} year - Año del calendario a cargar.
 * @param {"es"|"en"} lang - Idioma en el que se mostrará el calendario.
 * @returns {Promise<void>}
 */
async function initCalendar(year, lang) {
    let geoJsonData;
    try {
        geoJsonData = await fetch_json(`./data/holidays-${year}.json`);
    } catch (error) {
        console.error("Error al cargar el calendario:", error);
        calendarNotFound({year, lang});
        return;
    }

    // debugger
    if (!geoJsonData?.[lang]?.holidays?.length) {;
        calendarNotFound({year, lang});
        return;
    }

    legalInfo( geoJsonData?.[lang]?.legalInfo, lang );
    calendar.render({
        calendarYear: year,
        markers: { es: geoJsonData["es"].holidays, en: geoJsonData["en"]?.holidays  },
        lang,
        allowHTML: true
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const url = new URL(window.location.href);
    const year = getYearFromUrl(url);
    const lang = getLangFromUrl(url);

    document
        .querySelectorAll(".js-current-year")
        .forEach(ele => ele.textContent = year);

    initCalendar(year, lang);
});