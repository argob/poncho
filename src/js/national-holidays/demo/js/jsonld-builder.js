/**
 * Hook de ciclo de vida de Google Apps Script; se ejecuta al abrir
 * la hoja de cálculo e inicializa el menú personalizado.
 */
function onOpen() {
    createMenu();
}


/**
 * Crea el menú "Contenidos" en la barra de herramientas de Sheets
 * con acciones para mostrar el panel de feriados como sidebar o
 * como diálogo modal.
 */
function createMenu() {
    SpreadsheetApp.getUi().createMenu("Contenidos")
        .addItem("🗓️ Feriados Nacionales (aside)", "sliderAdd")
        .addItem("🗓️ Feriados Nacionales (popup)", "modalAdd")
        .addToUi();
}


/**
 * Enrutador HTTP de la web app; delega al handler correspondiente
 * según el parámetro `page` de la URL.
 * @param {Object} e Objeto de evento con los parámetros del
 *     request.
 * @returns {GoogleAppsScript.HTML.HtmlOutput} HTML a devolver al
 *     cliente.
 */
function doGet(e) {
    const router = {
        home: pageIndex,
        default: pageIndex
    };
    return (router[e.parameter.page] || router["default"])();
}


/**
 * Renderiza y devuelve la plantilla principal de la web app con el
 * prefijo de archivo inyectado como variable de plantilla.
 * @returns {GoogleAppsScript.HTML.HtmlOutput} Plantilla "menu"
 *     evaluada.
 */
function pageIndex() {
    const template = HtmlService
        .createTemplateFromFile("menu")
        .evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

    template.outputFilePrefix = OUTPUT_FILE_PREFIX;

    return template;
}


/**
 * Construye y devuelve el objeto HtmlOutput de la interfaz de
 * feriados configurado con dimensiones y título.
 * @returns {GoogleAppsScript.HTML.HtmlOutput} Objeto HTML listo
 *     para mostrarse como sidebar o diálogo.
 */
function ui(){
    const html = HtmlService
        .createTemplateFromFile("menu")
        .evaluate()
        .setXFrameOptionsMode(
            HtmlService.XFrameOptionsMode.ALLOWALL);

    const ui = HtmlService
        .createHtmlOutput(html)
        .setWidth(450)
        .setHeight(650)
        .setTitle("🗓️ Feriados Nacionales");

    return ui

    return SpreadsheetApp
        .getUi()
        .showSidebar(ui);

    SpreadsheetApp
        .getUi()
        .showModelessDialog(ui, "Nueva entrada");
}


/**
 * Abre la interfaz de feriados como panel lateral en Sheets.
 */
function sliderAdd(){
    return SpreadsheetApp.getUi().showSidebar(ui());
}


/**
 * Abre la interfaz de feriados como diálogo modeless en Sheets.
 */
function modalAdd(){
    return SpreadsheetApp.getUi().showModelessDialog(ui(), "🗓️ Feriados Nacionales");
}


/**
 * Expone las constantes de configuración del servidor al frontend
 * via google.script.run.
 * @returns {{ OUTPUT_FILE_PREFIX: string,
 *     DRIVE_BACKUP_FOLDER: string }} Valores de configuración.
 */
function getDefaults() {
  return {OUTPUT_FILE_PREFIX, DRIVE_BACKUP_FOLDER};
}


/**
 * Alias de holidaySheets(); expone la función al frontend
 * via google.script.run.
 * @returns {{year: string, lang: string, name: string}[]}
 */
function sheets() {
    return holidaySheets();
}


/**
 * Genera el documento JSON-LD de feriados y lo guarda como archivo
 * JSON en Google Drive.
 * @param {string} year Año del calendario (ej. "2026").
 * @param {string} [lang=DEFAULT_LANG] Código de idioma BCP 47
 *     (ej. "es-AR"). Por defecto usa la constante global LANG.
 * @param {string|null} [folder=null] ID o nombre de la carpeta de
 *     Drive donde guardar el archivo. Si es null, se guarda en la
 *     raíz del Drive del usuario.
 * @returns {GoogleAppsScript.Drive.File} Archivo creado en Drive.
 */
function saveJsonld(year, lang=DEFAULT_LANG, folder=null){
    const data = fetchHolidays(year, lang);
    const json = JSON.stringify(data, null, 2);
    const fileName = `${[OUTPUT_FILE_PREFIX, year, lang].join('-')}.json`;
    if(!folder){
        return DriveApp.createFile(fileName, json, MimeType.PLAIN_TEXT);
    }
    let driveFolder;
    try {
        driveFolder = DriveApp.getFolderById(folder);
    } catch(e) {
        const folders = DriveApp.getFoldersByName(folder);
        if(!folders.hasNext()){
            throw new Error(`No se encontró la carpeta en Drive: "${folder}"`);
        }
        driveFolder = folders.next();
    }
    return driveFolder.createFile(fileName, json, MimeType.PLAIN_TEXT);
}


/**
 * Genera el documento JSON-LD de feriados y dispara su descarga en el
 * navegador como archivo JSON.
 * @param {string} year Año del calendario (ej. "2026").
 * @param {string} [lang=LANG] Código de idioma BCP 47 (ej. "es-AR").
 *     Por defecto usa la constante global LANG.
 */
/*
function downloadJsonld(year, lang=DEFAULT_LANG){
    const data = fetchHolidays(year, lang);
    const json = JSON.stringify(data, null, 2);

    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${[OUTPUT_FILE_PREFIX, year, lang].join('-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
*/


/**
 * Obtiene los feriados desde Google Sheets y construye el documento
 * JSON-LD. Realiza un request HTTP a la API de Google Sheets y
 * delega la construcción del JSON-LD a buildJsonld().
 * @param {string} year Nombre de la hoja del spreadsheet y año del
 *     calendario (ej. "2026").
 * @param {string} lang Código de idioma BCP 47 para el documento
 *     JSON-LD (ej. "es-AR").
 * @returns {Object} Documento JSON-LD completo con los feriados del
 *     año indicado.
 */
function fetchHolidays(year, lang="es"){
    const entries = modelHolidays(year, lang);
    if(entries.length < 1){
        console.warn(`No se pudo encontrar feriados para el año: ${year}.`);
        return;
    }

    const items = buildItemsList(entries);
    const legalEntries = fetchHolidaysLegal(year);
    return buildJsonld(items, year, lang, legalEntries)
}


/**
 * Obtiene la información legal asociada al año desde Google Sheets.
 * @param {string} year Nombre de la hoja del spreadsheet y año del
 *     calendario (ej. "2026").
 * @param {string} [lang="es"] Código de idioma BCP 47
 *     (ej. "es-AR").
 * @returns {Object[]} Lista de objetos CreativeWork con la
 *     información legal del año indicado.
 */
function fetchHolidaysLegal(year, lang="es"){
    const entries = modelHolidaysLegal(year, lang);
    if(entries.length < 1){
        console.warn(
            `No se pudo encontrar legales para los feriados del año: ${year}.`
        );
        return;
    }
    return entries;
}


/**
 * Construye el documento JSON-LD completo con metadatos del dataset
 * de feriados.
 * @param {Object[]} items Lista de ítems generada por
 *     buildItemsList().
 * @param {string} year Año del calendario de feriados (ej. "2026").
 * @param {string} lang Código de idioma BCP 47 (ej. "es-AR").
 * @param {Object[]} [legalInfo=[]] Información legal del dataset.
 * @returns {Object} Documento JSON-LD con estructura
 *     schema.org Dataset > ItemList.
 */
function buildJsonld(items, year, lang, legalInfo=[]){
    return {
        "@context": {
            "@vocab": "https://schema.org/",
            "@language": lang
        },
        "@type": "Dataset",
        "name": tpl(i18n[lang].name, {"year":year}),
        "description": tpl(i18n[lang].description, {"year":year}),
        "dateModified": new Date().toISOString().split('.')[0] + 'Z',
        "temporalCoverage": year,
        "inLanguage": lang,
        "additionalProperty": {
            "@type": "PropertyValue",
            "name": "timezone",
            "value": "America/Argentina/Buenos_Aires"
        },
        "publisher": {
            "@type": "Organization",
            "name": i18n[lang].publisherOrganization,
        },
        "subjectOf": legalInfo,
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": items.length,
            "itemListElement": items
        }
    }
}


/**
 * Construye la lista completa de ítems JSON-LD a partir de las filas
 * del spreadsheet.
 * @param {Array[]} rows Lista de filas, donde cada fila es una lista
 *     de valores tal como la devuelve la API de Google Sheets
 *     (sin encabezado).
 * @returns {Object[]} Lista de objetos ListItem en formato JSON-LD.
 */
function buildItemsList(rows){
    return rows.slice(1).map((row, i) => buildItem(i + 1, row)).filter(Boolean);
}


/**
 * Construye un objeto JSON-LD de tipo ListItem que representa un
 * feriado.
 * @param {number} position Posición del ítem en la lista (base 1).
 * @param {Array} entry Fila de datos del spreadsheet. Se esperan al
 *     menos 3 columnas: entry[0] fecha DD/MM/YYYY, entry[1] nombre
 *     del feriado, entry[2] tipo (ej. "inamovible", "trasladable").
 * @returns {Object} Objeto JSON-LD con estructura
 *     schema.org ListItem > Event.
 */
function buildItem(position, entry){
    const d = formatDate(entry[0]);
    if(!d){
        return null;
    }
    return {
        "@type": "ListItem",
        "position": position,
        "item": {
            "@type": "Event",
            "name": entry[1],
            "startDate": d,
            "additionalProperty": {
                "@type": "PropertyValue",
                "name": "tipo",
                "value": entry[2]
            },
            "description": HOLIDAY_TYPE[entry[2]],
            "location": {
                "@type": "Country",
                "name": "Argentina",

            }
        }
    };
}


/**
 * Retorna las solapas del spreadsheet que coinciden con el patrón
 * holidays-[0-9]{4}-(es|en|br|fr), mapeadas a {year, lang, name}.
 * @returns {{year: string, lang: string, name: string}[]} Lista de
 *     objetos con el año y el código de idioma de cada solapa.
 */
function holidaySheets(){
    const langList = Object.keys(i18n).join("|");
    const pattern = RegExp(`^holidays-(\\d{4})-(${langList})$`);

    return SpreadsheetApp.openById(SPREADSHEET_KEY)
        .getSheets()
        .map(sheet => sheet.getName())
        .map(name => {
            const toCompareString = name.toLocaleLowerCase();
            if(!toCompareString.match(pattern)){
                return false;
            }
            const [, year, lang] = toCompareString.split("-");
            return {year, lang, name}
        })
        .filter(Boolean);
}


/**
 * Obtiene todas las filas de una hoja del spreadsheet global en orden
 * inverso (última fila primero).
 * @param {string} preadSheetName Nombre de la hoja a leer.
 * @returns {string[][]} Lista de filas con los valores formateados
 *     tal como se muestran en la celda, en orden inverso.
 */
function model(preadSheetName){
    const sheet = sheetData(SPREADSHEET_KEY, preadSheetName);
    const list = sheet.getDataRange().getDisplayValues();
    return list;
}


/**
 * Obtiene las filas de la hoja de feriados del año indicado.
 * @param {string} year Año del calendario (ej. "2026").
 * @returns {string[][]} Lista de filas con los datos de feriados.
 */
function modelHolidays(year, lang){
    const sheet = model(`holidays-${year}-${lang}`);
    return sheet;
}


/**
 * Obtiene las filas de la hoja de información legal del año indicado.
 * @param {string} year Año del calendario (ej. "2026").
 * @returns {string[][]} Lista de filas con los datos legales.
 */
function modelHolidaysLegal(year, lang){
    const sheet = model(`legal-${year}-${lang}`);
    return sheet;
}


/**
 * Abre un Google Spreadsheet y devuelve la hoja indicada.
 * @param {string} sheeId ID del spreadsheet de Google Sheets.
 * @param {string} sheetName Nombre de la hoja dentro del
 *     spreadsheet.
 * @returns {GoogleAppsScript.Spreadsheet.Sheet} Objeto Sheet
 *     correspondiente al nombre indicado.
 */
function sheetData(sheeId, sheetName){
    const ss = SpreadsheetApp.openById(sheeId);
    const sheet = ss.getSheetByName(sheetName);
    return sheet;
}


/**
 * Evalúa una plantilla HTML e inyecta su contenido como string;
 * utilizada para includes server-side en HtmlService.
 * @param {string} filename Nombre del archivo de plantilla (sin
 *     extensión .html).
 * @returns {string} Contenido HTML evaluado de la plantilla.
 */
function include(filename) {
    return HtmlService
        .createTemplateFromFile(filename)
        .evaluate()
        .getContent();
}


//console.log(holidaySheets())
//saveJsonld(2025, DEFAULT_LANG, DRIVE_BACKUP_FOLDER);
