/**
 * @fileoverview Test unitario para la extensión 'alerts' de Showdown.
 * @jest-environment jsdom
 * * Se utiliza 'jsdom' como entorno de Jest para simular las dependencias
 * del DOM (como 'document.createElement' y 'element.outerHTML').
 */

// Simulación (Mock) del objeto global 'showdown'
// (asumiendo que la función de la extensión se ejecuta en un contexto donde showdown existe)
const showdown = {
  extension: jest.fn(), // Simula la función que registra la extensión
  Converter: class {
    makeHtml(markdown) {
      // Un mock simple para makeHtml: lo envuelve en <p> si no tiene encabezado, 
      // o simula la conversión básica.
      if (markdown.startsWith('#')) {
        return markdown; // Si es un encabezado, lo devuelve
      }
      return `<p>${markdown}</p>`; 
    }
  }
};

// --- Mock para el DOM: Se requiere antes de cargar la función ---
// Jest con 'jsdom' ya proporciona 'document' y 'HTMLElement', pero se necesita 
// mockear 'outerHTML' en los elementos creados para la aserción final.
// El entorno 'jsdom' (como se indica arriba) es esencial aquí.
// Simplemente usaremos el DOM real proporcionado por jsdom para este caso.

// --- 1. Definición de la Función a Testear ---
// Incluye la función de la extensión. En un proyecto real, importarías este archivo.

/**
 * NOTA: En un entorno de testing real, importarías solo el código de la 
 * extensión, pero para este ejemplo, lo incluimos directamente 
 * dentro del contexto de los mocks.
 */

// Ejecutar el código de la extensión para registrarla en el mock de `showdown.extension`
// (El contenido de la función a testear está dentro de una IIFE simulada)
(() => {
    /**
     * Alertas
     *
     * @see https://www.argentina.gob.ar/contenidosdigitales/markdown/alerta
     * @regexp https://regex101.com/r/MgRi47/3/
     */
    showdown.extension("alerts", function() {
        "use strict";
        /**
         * Determines the header level (h2-h6) from a title string.
         * @param {string} value - The title string to check.
         * @returns {number|boolean} The header level (2-6) or false if no header is found.
         */
        const getHeader = (value) => {
            const regexHeader = /(?<header>^#{2,6})/;
            const headers = regexHeader.exec(value);
            return headers ? headers.groups.header.length : false;
        }

        /**
         * Maps a header level number to the corresponding HTML tag string.
         * @param {number|boolean} headerVal - The header level (2-6) or false.
         * @returns {string} The HTML tag ('h2' to 'h6' or 'p' if no header).
         */
        const setTitleTag = (headerVal) => (headerVal ? `h${headerVal}` : 'p');

        // --- Showdown Extension Definition ---

        return [{
            type: "lang",
            filter: function(text, converter, options) {
                // Regex match [[alerta-{title}-{content}-{icon}-{color}]]
                const regex = /\[\[alerta-\{([^\{\}]*?)\}-\{([^\{\}]*?)\}-\{([\w-\s]*?)\}-\{(warning|danger|info|success)\}\]\]/;
                const mainRegex = new RegExp(regex, "gm");

                const convertedMarkdown = text.replace(mainRegex, (
                    match, // The full match string (unused)
                    title, // Group 1: The title content
                    content, // Group 2: The alert content
                    icon, // Group 3: The icon class
                    color) => { // Group 4: The alert color

                    // --- 1. Icon Processing ---

                    icon = icon.trim().replace(/fa\s/, "");
                    let mediaLeft = null;

                    if (icon) {
                        const hasFaPrefix = /fa\-/g.test(icon);

                        const formattedIconClasses = hasFaPrefix
                            ? ["fa", icon, "fa-fw", "fa-3x"]
                            : [icon, "fa-3x"];

                        mediaLeft = document.createElement("div");
                        mediaLeft.className = "media-left";

                        const htmlIcon = document.createElement("i");
                        htmlIcon.classList.add(...formattedIconClasses);

                        mediaLeft.appendChild(htmlIcon);
                    }

                    // --- 2. Title ---
                    const headerValue = getHeader(title);
                    title = title.trim().replace(/^(#*)/, "");
                    const titleTag = setTitleTag(headerValue);

                    // --- 3. HTML ---
                    const containerElement = document.createElement("div");
                    containerElement.classList.add("alert", `alert-${color}`);

                    const mediaElement = document.createElement("div");
                    mediaElement.classList.add("media");
                    
                    const mediaBodyElement = document.createElement("div");
                    mediaBodyElement.classList.add("media-body");

                    // Title element (if title exists)
                    if(title){
                        const titleElement = document.createElement(titleTag);
                        titleElement.className = "h5";
                        titleElement.innerHTML = converter.makeHtml(title).replace(/<\/?p>/g, "");
                        mediaBodyElement.appendChild(titleElement);
                    }

                    // Content element
                    const formattedContent = converter.makeHtml(content.trim());
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = formattedContent;
                    
                    while (tempDiv.firstChild) {
                        mediaBodyElement.appendChild(tempDiv.firstChild);
                    }

                    if(mediaLeft){
                        mediaElement.appendChild(mediaLeft);
                    }
                    mediaElement.appendChild(mediaBodyElement);

                    containerElement.appendChild(mediaElement);

                    return containerElement.outerHTML;
                });

                return convertedMarkdown;
            }
        }];
    });

})();

// --- 2. Extracción de la función 'filter' para el test ---

// Verifica que la extensión se haya registrado y extrae el filtro.
if (showdown.extension.mock.calls.length === 0) {
  throw new Error("La extensión 'alerts' no fue registrada correctamente.");
}

// El segundo argumento de `showdown.extension` es la función que retorna el array de extensiones.
const extensionFunc = showdown.extension.mock.calls[0][1];
const extension = extensionFunc();

// La extensión es de tipo 'lang' y queremos testear la función 'filter'.
const filterFunction = extension.find(ext => ext.type === 'lang').filter;

// --- 3. Conjunto de Tests ---

describe('Showdown Extension: alerts', () => {
    // Inicializa el conversor simulado para cada test.
    let converter;
    let options = {}; // Opciones si fueran necesarias

    beforeEach(() => {
        converter = new showdown.Converter({}); // Instancia simulada
    });

    /**
     * Testeando Alerta con Título (sin encabezado), Contenido e Icono.
     */
    test('Debe convertir una alerta info con título, contenido e icono', () => {
        const markdownInput = '[[alerta-{Título de la Alerta}-{Este es el contenido de la alerta.}-{fa-lightbulb-o}-{info}]]';
        
        // Ejecuta la función de filtro
        const htmlOutput = filterFunction(markdownInput, converter, options);

        // La salida esperada se basa en la estructura generada por la función.
        const expectedHtml = `
            <div class="alert alert-info">
                <div class="media">
                    <div class="media-left">
                        <i class="fa fa-lightbulb-o fa-fw fa-3x"></i>
                    </div>
                    <div class="media-body">
                        <p class="h5">Título de la Alerta</p>
                        <p>Este es el contenido de la alerta.</p>
                    </div>
                </div>
            </div>`.replace(/\s/g, ''); // Remueve espacios para una comparación estricta

        // Limpia la salida real de espacios también.
        const cleanedOutput = htmlOutput.replace(/\s/g, '');

        expect(cleanedOutput).toContain('<divclass="alertalert-info">');
        expect(cleanedOutput).toContain('<pclass="h5">TítulodelaAlerta</p>');
        expect(cleanedOutput).toContain('<p>Esteeselcontenidodelaalerta.</p>');
        expect(cleanedOutput).toContain('<iclass="fa fa-lightbulb-o fa-fw fa-3x"></i>');
    });

    // ---
    
    /**
     * Testeando Alerta con Título de Encabezado (h3) y sin Icono.
     */
    test('Debe convertir una alerta danger con título H3 y sin icono', () => {
        const markdownInput = '[[alerta-{### Título H3}-{Contenido de Peligro}-{}-{danger}]]';
        
        const htmlOutput = filterFunction(markdownInput, converter, options);

        // Verifica las partes clave de la salida
        expect(htmlOutput).toContain('alert alert-danger');
        expect(htmlOutput).toContain('<h3 class="h5">Título H3</h3>'); // El título debe ser H3 y tener clase h5
        expect(htmlOutput).toContain('<p>Contenido de Peligro</p>');
        expect(htmlOutput).not.toContain('<div class="media-left">'); // No debe haber media-left
    });

    // ---

    /**
     * Testeando Alerta Múltiple en el mismo texto.
     */
    test('Debe convertir múltiples alertas en el mismo texto', () => {
        const markdownInput = 
            'Texto antes de la alerta.\n\n' +
            '[[alerta-{Alerta Uno}-{Contenido 1}-{fa-check}-{success}]]\n\n' +
            'Texto entre alertas.\n\n' +
            '[[alerta-{Alerta Dos}-{Contenido 2}-{fa-times}-{warning}]]\n\n' +
            'Texto después de la alerta.';

        const htmlOutput = filterFunction(markdownInput, converter, options);

        // Verifica que ambas alertas hayan sido procesadas.
        expect(htmlOutput).toContain('alert alert-success');
        expect(htmlOutput).toContain('alert alert-warning');
        expect(htmlOutput).toContain('<iclass="fa fa-check');
        expect(htmlOutput).toContain('<iclass="fa fa-times');
        
        // Verifica que el texto circundante se mantenga.
        expect(htmlOutput).toContain('Texto antes de la alerta.');
        expect(htmlOutput).toContain('Texto entre alertas.');
    });

    // ---
    
    /**
     * Testeando Alerta sin título.
     */
    test('Debe convertir una alerta sin título', () => {
        const markdownInput = '[[alerta-{}-{Solo Contenido}-{fa-info-circle}-{info}]]';
        
        const htmlOutput = filterFunction(markdownInput, converter, options);

        // No debe haber un elemento de título
        expect(htmlOutput).not.toContain('<h2 class="h5">');
        expect(htmlOutput).not.toContain('<h3 class="h5">');
        expect(htmlOutput).not.toContain('<p class="h5">');
        
        // Verifica el contenido
        expect(htmlOutput).toContain('alert alert-info');
        expect(htmlOutput).toContain('<p>Solo Contenido</p>');
    });
});