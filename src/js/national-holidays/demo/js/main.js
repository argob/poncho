const CURRENT_YEAR = new Date().getFullYear();
const ALLOWED_YEARS = Array.from(
    {length: HOLIDAY_CALENDAR_SETTINGS.years_limit}, 
    (_, i) => CURRENT_YEAR - i);


function appendAlternateJsonLink(url) {
    if (typeof url !== 'string') return;
    let parsed;
    try {
        parsed = new URL(url, window.location.origin);
    } catch {
        return;
    }
    if (!['https:', 'http:'].includes(parsed.protocol)) return;

    const link = document.createElement('link');
    link.rel = 'alternate';
    link.type = 'application/json';
    link.href = parsed.href;
    document.head.appendChild(link);
}


/**
 * Formatea un valor de fecha al formato DD/MM/AAAA en español.
 *
 * @param {string|number|Date} value - Valor de fecha parseable por `new Date()`.
 * @returns {string} Fecha formateada, por ejemplo `"09/07/2026"`.
 */
function formatDate(value){
    const [year, month, day] = String(value).split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const format = date.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'America/Argentina/Buenos_Aires'
    });
    return format; // "09/07/2026"
}


/**
 * Convierte la estructura JSON-LD de feriados al formato interno del calendario.
 *
 * Extrae los ítems de `mainEntity.itemListElement` y los transforma en objetos
 * planos con las propiedades `label`, `type` y `date`.
 *
 * @param {Object} geoJsonData - Objeto JSON-LD con la estructura de feriados.
 * @returns {Array<{label: string, type: string, date: string}>} Lista de feriados normalizados.
 */
function calendarConversor(geoJsonData){
    const items = geoJsonData?.mainEntity?.itemListElement;
    if(!Array.isArray(items) || !items.length) return [];
    return items.map(e => {
    const {
        item: {
            name: label,
            startDate
        },
        item: {
            additionalProperty: {
                value: type
            }
        },
    } = e;
        const date = formatDate(startDate);
    return { label, type, date };
    });
}


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
    if(!data?.length) {
        return;
    };
    const container = document.querySelector(".js-legal-info-container");
    if(!container){
        console.warn("no se puede encontrar el contenedor");
        return;
    }

    if(!_markdownEnable()){
        console.warn(
            "legalInfo: showdown no está disponible, se omite la info legal."
        );
        return;
    }

    const converter = new showdown.Converter(this.markdown_options);
    
    const fragment = document.createDocumentFragment();
    for(const [name, description] of data){
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


function setDrowdownYearsMenu(){
    const combobox = document.querySelectorAll(".js-dropdown-years-menu");

    combobox.forEach(element => {

        for(let year of ALLOWED_YEARS){
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href=`${ location.pathname }?year=${year}`;
            a.textContent = HOLIDAY_CALENDAR_SETTINGS.dropdown_label.replace(/\{\{year\}\}/g, year);
            li.appendChild(a);
            element.appendChild(li);
        }
    });
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
    const paramYear = parseInt(url.searchParams.get("year"), 10);
    return ALLOWED_YEARS.includes(paramYear) ? paramYear : CURRENT_YEAR;
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


/**
 * Muestra el mensaje de calendario no encontrado usando el template 
 * `#calendar-not-found`.
 *
 * Clona el template y rellena los elementos con clase `.tpl-{key}` con los
 * valores del objeto `data`. El resultado se inserta en `.not-found-message`.
 *
 * @param {Object} [data={}] - Pares clave/valor para rellenar los slots 
 *          del template.
 * @param {number} [data.year] - Año del calendario no encontrado.
 * @param {string} [data.lang] - Idioma solicitado.
 * @param {string} [data.message] - Mensaje descriptivo del error.
 */
function calendarNotFound(data={}){
    const container = document.querySelector(".not-found-message");
    if(!container) return;
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
 * Muestra u oculta los elementos de alternancia de vista.
 *
 * Aplica `display: initial` o `display: none` a todos los elementos con
 * la clase `.js-view-switcher` según el valor de `status`.
 *
 * @param {boolean} [status=false] - `true` para mostrar, `false` para ocultar.
 */
const viewSwitcher = (status=false) => {
    document.querySelectorAll(".js-view-switcher").forEach((e) => {
        e.style.display = status ? "initial" : "none";
    });
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
        const url = HOLIDAY_CALENDAR_SETTINGS
                .service_url
                .replaceAll(/\{\{\year}\}/g, year)
                .replaceAll(/\{\{\lang}\}/g, lang)
        geoJsonData = await fetch_json(url);
        appendAlternateJsonLink(url);
    } catch (error) {
        console.error("Error al cargar el calendario:", error);
        viewSwitcher(false);
        calendarNotFound({
            year, 
            lang, 
            message: `Error al cargar el calendario ${year}.`
        });
    
        return;
    }

    const jsonLdLang = geoJsonData?.inLanguage?.replace(/-AR/g, '');
    if(jsonLdLang && jsonLdLang !== lang){
        console.warn(
            `initCalendar: idioma del JSON ("${jsonLdLang}") `
            + `no coincide con el solicitado ("${lang}").`
        );
        viewSwitcher(false);
        calendarNotFound({
            year, 
            lang, 
            message: `Error al cargar el calendario ${year}.`
        });
        return;
    }

    let calendarData = {}
    calendarData[lang] = calendarConversor(geoJsonData);

    if (!calendarData[lang].length) {
        viewSwitcher(false);
        calendarNotFound({
            year, 
            lang,  
            message: "No se encontraron fechas en el calendario."
        });
        return;
    }

    legalInfo( geoJsonData?.subjectOf, lang );
    calendar.render({
        calendarYear: year,
        markers: calendarData,
        lang,
        allowHTML: true
    });

    viewSwitcher(true);
}


document.addEventListener("DOMContentLoaded", function() {
    headStyle('id', `ul.dropdown-menu.holidays-dropdown-menu li a:hover { color: var(--arg-tomate) !important;}.dropdown #share-table-data  {color:var(--arg-secundario) !important}`);
    const url = new URL(window.location.href);
    const year = getYearFromUrl(url);
    const lang = getLangFromUrl(url);
    setDrowdownYearsMenu();
    document
        .querySelectorAll(".js-current-year")
        .forEach(ele => ele.textContent = year);

    initCalendar(year, lang);
});