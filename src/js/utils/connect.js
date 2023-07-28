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
async function fetch_json(url, method="GET"){
    const response = await fetch(
        url,
        {
            method: method, 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};