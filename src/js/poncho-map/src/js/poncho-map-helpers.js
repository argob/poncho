/**
 * Genera el HTML para un resultado de búsqueda con una estructura de plantilla optimizada.
 *
 * @param {Object} data - Objeto con los datos para generar el template
 * @param {string} [data.figure] - URL o ruta de la imagen a mostrar (opcional)
 * @param {string} data.title - Título del resultado (requerido)
 * @param {string[]} data.text - Array de strings con información adicional a mostrar
 * @param {string} [data.separator=", "] - Separador para unir los elementos del array text
 * @returns {string|null} HTML string del elemento generado o null si hay error en validación
 *
 * @example
 * const html = ponchoMapTplSearch({
 *   figure: 'foto',
 *   title: 'nombre',
 *   text: ['provincia', 'localidad', 'direccion'],
 *   separator: ' - '
 * });
 */
function ponchoMapTplSearch(data){
    if (!data || typeof data !== 'object') {
        console.error('tplSearch: data debe ser un objeto válido');
        return null;
    }

    const {figure="", title, text, separator = ", "} = data;

    if (!title || typeof title !== 'string') {
        console.error('tplSearch: title es requerido y debe ser un string');
        return null;
    }

    if (!Array.isArray(text)) {
        console.error('tplSearch: text debe ser un array');
        return null;
    }

    const validText = text.filter(m => m && typeof m === 'string');

    // Contenedor principal
    const container = document.createElement('div');
    container.classList.add('pm-search-result-option');

    // Agregar imagen si existe
    if (figure && typeof figure === 'string') {
        const figureEl = document.createElement('figure');
        figureEl.classList.add('pm-search-result-option__figure');
        const img = document.createElement('img');
        img.src = `{{${figure}}}`;
        img.width = 90;
        img.alt = '';
        img.loading = "lazy";
        img.classList.add('pm-search-result-option__image');
        
        figureEl.appendChild(img);

        const textCondition = `{% '${figureEl.outerHTML}' if ${figure} != '' else '' %}`;
        container.insertAdjacentHTML('beforeend', textCondition);
    }

    // Columna de contenido
    const colDiv = document.createElement('div');
    colDiv.classList.add('pm-search-result-option__text');

    // Título
    const titleP = document.createElement('p');
    titleP.classList.add(
        'm-y-0', 
        'fw-semibold', 
        'opt-name'
    );
    titleP.textContent = `{{${title}}}`;
    colDiv.appendChild(titleP);

    // Texto
    const locationP = document.createElement('p');
    locationP.classList.add(
        'm-y-0', 
        'small', 
        'text-arg-gris-intermedio', 
        'opt-location'
    );

    if (validText.length > 0) {
        const textContent = validText.map(m => `{{${m}}}`).join(separator);
        locationP.textContent = textContent;
    }

    colDiv.appendChild(locationP);
    container.appendChild(colDiv);

    return container.outerHTML;
}