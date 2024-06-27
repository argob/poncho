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
async function fetch_json(uri, options={}) {

    let defaultOptions = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        redirect: "follow"
    };
    let opts = Object.assign({}, defaultOptions, options);
    const response = await fetch(uri, opts);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};