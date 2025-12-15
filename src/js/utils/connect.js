/**
 * Fetch data con manejo de CORS
 *
 * @param {string} uri - URL del recurso
 * @param {Object} options - Opciones de configuración
 * @param {boolean} options.useCorsProxy - Usar proxy CORS en caso de error 
 * (default: true)
 * @param {string} options.corsProxyUrl - URL del proxy CORS personalizado
 * @param {boolean} options.credentials - Incluir credenciales ('include', 
 * 'same-origin', 'omit')
 *
 * @example
 * ```js
 * (async() => {
 *     // Uso básico con fallback a proxy CORS
 *     const data = await fetch_json("https://arg.gob.ar");
 *
 *     // Sin proxy CORS
 *     const data2 = await fetch_json(
 *         "https://arg.gob.ar", { useCorsProxy: false }
 *     );
 *
 *     // Con credenciales
 *     const data3 = await fetch_json(
 *         "https://arg.gob.ar", { credentials: "include" };
 *     );
 * ```
 */
async function fetch_json(uri, options={}) {
    const {
        useCorsProxy = true,
        corsProxyUrl = "",
        credentials = "same-origin",
        ...fetchOptions
    } = options;

    let defaultOptions = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: credentials,
        redirect: "follow"
    };

    let opts = Object.assign({}, defaultOptions, fetchOptions);

    try {
        const response = await fetch(uri, opts);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();

    } catch (error) {
        // Si falla y está habilitado el proxy CORS, intentar con proxy
        if (useCorsProxy && (
            error.message.includes('CORS') ||
            error.message.includes('Network') ||
            error.name === 'TypeError'
        )) {
            try {
                const proxyUri = `${corsProxyUrl}${encodeURIComponent(uri)}`;
                console.warn(
                    `CORS error detectado. Intentando con proxy: ${proxyUri}`
                );

                // Remover credenciales para el proxy
                const proxyOpts = { ...opts, credentials: "omit" };
                const proxyResponse = await fetch(proxyUri, proxyOpts);

                if (!proxyResponse.ok) {
                    throw new Error(
                        `HTTP error! status: ${proxyResponse.status}`
                    );
                }
                return await proxyResponse.json();

            } catch (proxyError) {
                console.error("Error con proxy CORS:", proxyError);
                throw new Error(
                    `Fetch fallido directo y con proxy. `
                    + `Error original: ${error.message}`
                );
            }
        }

        // Re-lanzar el error original si no se usa proxy
        throw error;
    }
};