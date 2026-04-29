/**
 * @file collections.js
 * @description Utility functions for flattening nested objects and arrays.
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
 * Aplana un objeto anidado en un objeto plano usando `__` como
 * separador de claves.
 *
 * Las claves del objeto resultante representan la ruta completa al
 * valor original, concatenando cada nivel con doble guión bajo (`__`).
 *
 * @param {Object} obj - El objeto a aplanar. Puede tener cualquier
 *   nivel de anidamiento.
 * @param {string} prefix - Prefijo acumulado para las claves. Usar
 *   cadena vacía `""` en la llamada inicial.
 * @returns {Object} Un nuevo objeto plano sin propiedades anidadas.
 *
 * @example
 * flattenObject({ a: { b: { c: 1 } } }, "")
 * // => { "a__b__c": 1 }
 *
 * @example
 * const direccion = { ciudad: "Mendoza", cp: "5500" };
 * flattenObject({ nombre: "Juan", direccion }, "")
 * // => {
 * //   nombre: "Juan",
 * //   "direccion__ciudad": "Mendoza",
 * //   "direccion__cp": "5500"
 * // }
 */
function flattenObject(obj, prefix) {
    const flattened = {};
    for (const key in obj) {
        const value = obj[key];
        const newKey = (prefix ? `${prefix}__${key}` : key);

        if (typeof value === "object" && value !== null) {
            Object.assign(flattened, flattenObject(value, newKey));
        } else {
            flattened[newKey] = value;
        }
    }
    return flattened;
}


/**
 * Aplana un array de objetos anidados, transformando cada elemento
 * con {@link flattenObject}.
 *
 * Útil para normalizar colecciones de registros con estructura
 * jerárquica antes de procesarlos, filtrarlos o renderizarlos
 * en una tabla plana.
 *
 * @param {Object[]} entries - Array de objetos que pueden tener
 *   propiedades anidadas.
 * @returns {Object[]} Nuevo array donde cada objeto está
 *   completamente aplanado.
 *
 * @example
 * flattenNestedObjects([
 *   { id: 1, info: { nombre: "Ana", cargo: "Dev" } },
 *   { id: 2, info: { nombre: "Luis", cargo: "QA" } }
 * ])
 * // => [
 * //   { id: 1, "info__nombre": "Ana", "info__cargo": "Dev" },
 * //   { id: 2, "info__nombre": "Luis", "info__cargo": "QA" }
 * // ]
 */
function flattenNestedObjects(entries) {
    return entries.map(entry => {
        return flattenObject(entry, "");
    });
}


if (typeof exports !== "undefined") {
    module.exports = {flattenObject, flattenNestedObjects};
}
