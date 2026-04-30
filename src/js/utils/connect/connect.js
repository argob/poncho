/**
 * @file connect.js
 * @description Fetch con manejo automático de errores CORS mediante
 * un proxy configurable.
 *
 * MIT License
 *
 * Copyright (c) 2024 Agustin Bouillet / Secretaría de Innovación Pública
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


/**
 * Realiza una petición HTTP y devuelve la respuesta como JSON.
 *
 * Intenta la petición directamente contra `uri`. Si falla con un
 * error de red o CORS y `useCorsProxy` es `true`, reintenta a través
 * de `corsProxyUrl` sin credenciales. Si el segundo intento también
 * falla, lanza un error con el mensaje de ambos fallos.
 *
 * @async
 * @param {string} uri - URL del recurso a consultar.
 * @param {Object} [options={}] - Opciones de configuración.
 * @param {boolean} [options.useCorsProxy=true] - Habilita el
 *   fallback al proxy CORS cuando la petición directa falla.
 * @param {string} [options.corsProxyUrl=""] - URL base del proxy
 *   CORS. La URI del recurso se añade codificada al final.
 * @param {string} [options.credentials="same-origin"] - Política
 *   de credenciales: `"include"`, `"same-origin"` u `"omit"`.
 * @param {...*} [options.fetchOptions] - Cualquier otra opción
 *   válida para la API `fetch` nativa (method, headers, body…).
 * @returns {Promise<*>} Objeto o array resultante de parsear el
 *   cuerpo de la respuesta como JSON.
 * @throws {Error} Si la respuesta HTTP no es satisfactoria o si
 *   fallan tanto la petición directa como la del proxy.
 *
 * @example
 * // Uso básico — fallback a proxy CORS activado por defecto
 * const data = await fetch_json("https://arg.gob.ar/data.json");
 *
 * @example
 * // Sin proxy CORS
 * const data = await fetch_json(
 *     "https://arg.gob.ar/data.json",
 *     { useCorsProxy: false }
 * );
 *
 * @example
 * // Con credenciales y proxy personalizado
 * const data = await fetch_json(
 *     "https://arg.gob.ar/data.json",
 *     {
 *         credentials: "include",
 *         corsProxyUrl: "https://mi-proxy.example.com/?url="
 *     }
 * );
 */
async function fetch_json(uri, options={}) {
    const {
        useCorsProxy = true,
        corsProxyUrl = "",
        credentials = "same-origin",
        ...fetchOptions
    } = options;

    const defaultOptions = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        credentials: credentials,
        redirect: "follow"
    };

    const opts = Object.assign({}, defaultOptions, fetchOptions);

    try {
        const response = await fetch(uri, opts);
        if (!response.ok) {
            throw new Error(
                `HTTP error! status: ${response.status}`
            );
        }
        return await response.json();

    } catch (error) {
        const isCorsOrNetwork = (
            error.message.includes("CORS") ||
            error.message.includes("Network") ||
            error.name === "TypeError"
        );

        if (useCorsProxy && isCorsOrNetwork) {
            try {
                const proxyUri =
                    `${corsProxyUrl}${encodeURIComponent(uri)}`;
                console.warn(
                    "CORS error detectado. "
                    + `Intentando con proxy: ${proxyUri}`
                );

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
                    "Fetch fallido directo y con proxy. "
                    + `Error original: ${error.message}`
                );
            }
        }

        throw error;
    }
}
