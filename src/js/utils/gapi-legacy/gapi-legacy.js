/**
 * MIT License
 *
 * Copyright (c) 2024 Agustín Bouillet
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * GAPI LEGACY
 *
 * Converts a Google Sheets API v4 response into the legacy v3
 * structure expected by older integrations.
 *
 * The Google Sheets API v4 returns a flat `values` array of arrays.
 * This function transforms that into the feed/entry format used by
 * the deprecated v3 API, where each column is keyed as
 * `gsx$<columnName>` and its value is stored under `$t`.
 *
 * Column names are normalized: spaces, slashes, and underscores are
 * removed and the name is lowercased.
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 *
 * @example
 * // Input (Google Sheets API v4 response)
 * const response = {
 *   values: [
 *     ["name", "age"],
 *     ["Alice", "30"],
 *     ["Bob",   "25"]
 *   ]
 * };
 *
 * gapi_legacy(response);
 * // Returns:
 * // {
 * //   feed: {
 * //     entry: [
 * //       { "gsx$name": { "$t": "Alice" },
 * //         "gsx$age":  { "$t": "30" } },
 * //       { "gsx$name": { "$t": "Bob" },
 * //         "gsx$age":  { "$t": "25" } }
 * //     ]
 * //   }
 * // }
 *
 * @param  {object} response
 *   Google Sheets API v4 response object.
 * @param  {Array<Array<string>>} response.values
 *   2D array where the first row contains column headers and
 *   subsequent rows contain data values.
 * @throws {TypeError} If `response` is falsy, has no `values`
 *   property, or `values` is not a 2D array.
 * @return {object} Object matching the v3 feed/entry structure.
 */
const gapi_legacy = (response) => {

  if (
    !response ||
    !response.values ||
    response.values.length === 0
  ) {
    throw new TypeError("Invalid response format");
  }

  if (
    !Array.isArray(response.values) ||
    !Array.isArray(response.values[0])
  ) {
    throw new TypeError(
      "Invalid response format: values should be arrays"
    );
  }

  const keys = response.values[0];
  const regex = / |\/|_/ig;
  let entry = [];

  response.values.forEach((v, k) => {
    if (k > 0) {
      let zip = {};
      for (const i in keys) {
        const d = v.hasOwnProperty(i) ? v[i].trim() : "";
        const key = keys[i].toLowerCase().replace(regex, "");
        zip[`gsx$${key}`] = {"$t": d};
      }
      entry.push(zip);
    }
  });

  return {"feed": {"entry": entry}};
};


if (typeof exports !== "undefined") {
  module.exports = gapi_legacy;
}
