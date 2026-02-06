/**
 * Exporta datos a un archivo CSV con opciones configurables
 * @param {string} nombreArchivo - Nombre del archivo a descargar (incluir extensión .csv)
 * @param {Array<Array>} datos - Array de arrays con los datos a exportar
 * @param {Object} opciones - Opciones de configuración
 * @param {string} opciones.separador - Carácter separador (por defecto: ',')
 * @param {boolean} opciones.incluirBOM - Incluir BOM UTF-8 para Excel (por defecto: true)
 */
const exportarCSV = (nombreArchivo, datos, opciones = {}) => {
    // Validar parámetros
    if (!nombreArchivo || typeof nombreArchivo !== 'string') {
        console.error('exportarCSV: El nombre de archivo es requerido y debe ser un string');
        return;
    }

    if (!Array.isArray(datos) || datos.length === 0) {
        console.error('exportarCSV: Los datos deben ser un array no vacío');
        return;
    }

    // Configuración por defecto
    const config = {
        separador: ',',
        incluirBOM: true,
        ...opciones
    };

    /**
     * Escapa un valor según el estándar RFC 4180
     * Si contiene el separador, comillas o saltos de línea, lo envuelve en comillas
     * y escapa las comillas dobles duplicándolas
     */
    const escaparValor = (valor) => {
        if (valor === null || valor === undefined) {
            return '';
        }

        const valorStr = String(valor);
        const necesitaEscape = valorStr.includes(config.separador) ||
                               valorStr.includes('"') ||
                               valorStr.includes('\n') ||
                               valorStr.includes('\r');

        if (necesitaEscape) {
            return `"${valorStr.replace(/"/g, '""')}"`;
        }

        return valorStr;
    };

    // Crear el contenido del CSV
    const contenidoCSV = datos
        .map(fila => {
            if (!Array.isArray(fila)) {
                console.warn('exportarCSV: Se encontró una fila que no es un array, se omitirá');
                return null;
            }
            return fila.map(escaparValor).join(config.separador);
        })
        .filter(fila => fila !== null)
        .join('\n');

    // Agregar BOM UTF-8 si está configurado (mejora compatibilidad con Excel)
    const bom = config.incluirBOM ? '\uFEFF' : '';
    const contenidoFinal = bom + contenidoCSV;

    // Crear un objeto Blob con el tipo de contenido adecuado
    const blob = new Blob([contenidoFinal], { type: 'text/csv;charset=utf-8;' });

    // Crear un enlace oculto en el documento
    const link = document.createElement('a');

    // Crear una URL para el Blob y asignarla al enlace
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', nombreArchivo);

    // Simular el clic y limpiar
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Liberar la URL del objeto para evitar fugas de memoria
    URL.revokeObjectURL(url);
};

// Ejemplos de uso:

// 1. Uso básico con separador por defecto (coma)
// const misDatos = [
//     ["Nombre", "Edad", "Ciudad"],
//     ["Alex", "28", "Madrid"],
//     ["Lucía", "32", "Barcelona"]
// ];
// exportarCSV("reporte_ventas.csv", misDatos);

// 2. Usando punto y coma como separador (común en regiones con coma decimal)
// const datosConSeparadorPuntoYComa = [
//     ["Producto", "Precio", "Stock"],
//     ["Laptop", "1250,99", "15"],
//     ["Mouse", "25,50", "100"]
// ];
// exportarCSV("productos.csv", datosConSeparadorPuntoYComa, { separador: ';' });

// 3. Datos con caracteres especiales que necesitan escape
// const datosConCaracteresEspeciales = [
//     ["Nombre", "Descripción", "Notas"],
//     ["Juan Pérez", "Cliente \"VIP\"", "Importante, contactar pronto"],
//     ["María González", "Proyecto:\nDesarrollo web", "Revisar presupuesto"]
// ];
// exportarCSV("clientes.csv", datosConCaracteresEspeciales);

// 4. Sin BOM (si no necesitas compatibilidad especial con Excel)
// exportarCSV("datos.csv", misDatos, { incluirBOM: false });



/**
 * Transforma datos de mapa en formato CSV
 * @param {Array} entries - Array de entradas del mapa a procesar
 * @param {Array<string>} values - Array de claves para extraer de cada entrada
 * @returns {Array<Array>} Array bidimensional listo para exportar como CSV
 */
const convertGeoJsonToCsv = (entries, values, headers) => {
    if (!Array.isArray(entries)) {
        console.error(
            'convertGeoJsonToCsv:', 
            'entries debe ser un array');
        return [[]];
    }

    if (!Array.isArray(values)) {
        console.error(
            'convertGeoJsonToCsv:', 
            'values debe ser un array');
        return [[]];
    }

    if (entries.length === 0) {
        console.warn(
            'convertGeoJsonToCsv:', 
            'entries está vacío');
        return [[]];
    }

    if (values.length === 0) {
        console.warn(
            'convertGeoJsonToCsv:',
            'values está vacío, no hay columnas para exportar');
        return [[]];
    }

    // Validar que headers sea un objeto si está definido
    if (headers && (typeof headers !== 'object' || Array.isArray(headers))) {
        console.error(
            'convertGeoJsonToCsv:',
            'headers debe ser un objeto o undefined');
        return [[]];
    }

    // Generar encabezados: si headers está vacío o es undefined, usar values
    // Si no, usa el valor en headers[key] o la key si no existe
    const csvHeader = (!headers || Object.keys(headers).length === 0)
        ? values
        : values.map(key => headers[key] || key);

    // Optimización: arrow function implícita más compacta
    // Si entries tiene solo un elemento, devolver solo el header
    if (entries.length === 1) {
        return [csvHeader];
    }

    const csvRows = entries.slice(1).map(entry => {
        // Validar que entry tenga la estructura esperada
        if (!entry || typeof entry !== 'object') {
            console.warn('setCsv: Se encontró una entrada inválida, se omitirá');
            return values.map(() => '');
        }

        return values.map(key => entry.properties?.[key] ?? '');
    });

    // Simplificación: no necesita spread doble
    return [csvHeader, ...csvRows];
}

// Ejemplo
// var _keyList = [
//     'tipo',
//     'nombre',
//     'descripcion',
//     'estado',
//     'foto',
//     'provincia',
//     'localidad'
// ]
// const entries = [
//     ["Nombre", "Apellido"],
//     ["Agustín", "Bouillet"],
//     ["Emilia", "Bouillet"],
//     ["Olivia", "Bouillet"],
// ]
// ejempolo setCsv(entries, _keyList)