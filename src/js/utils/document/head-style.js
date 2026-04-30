/**
 * MIT License
 *
 * Copyright (c) 2023 Argentina.gob.ar
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
 * HEAD STYLE
 *
 * @summary Inserta un bloque de estilos CSS en el elemento <head>
 * del documento.
 *
 * @description Crea un elemento <style> con el id indicado y lo
 * agrega al <head>. Si ya existe un elemento con el mismo id y
 * las mismas definiciones, la función no hace nada. Si existe el
 * id pero con definiciones distintas, reemplaza el bloque
 * existente. El parámetro mediaType permite limitar los estilos
 * a un media query específico.
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 *
 * @param {string} id Nombre único para identificar el bloque de
 *     estilos en el DOM. Si se omite o no es válido, se usa el
 *     valor por defecto "argob-custom-css".
 * @param {string} styleDefinitions Cadena con las definiciones
 *     CSS a insertar dentro del elemento <style>.
 * @param {string} [mediaType] Valor del atributo media del
 *     elemento <style>. Permite aplicar estilos condicionalmente
 *     según el media query indicado.
 * @returns {undefined}
 *
 * @example
 * // Insertar estilos simples
 * // <style id="custom-id">div { border: 2px solid red }</style>
 * headStyle("custom-id", `div { border: 2px solid red }`);
 *
 * @example
 * // Insertar estilos con media query
 * // <style id="custom-id" media="all and (max-width: 500px)">
 * //     div { border: 2px solid red }
 * // </style>
 * headStyle(
 *     "custom-id",
 *     `div { border: 2px solid red }`,
 *     "all and (max-width: 500px)"
 * );
 */
const headStyle = (id, styleDefinitions, mediaType) => {
    if (typeof id !== "string" || id.trim() === "") {
        console.warn("No se ha provisto un _id_ válido. Se usará: "
            + "'argob-custom-css'.");
        id = "argob-custom-css";
    }

    if (typeof styleDefinitions !== "string"
            || styleDefinitions.trim() === "") {
        console.warn("No se ha provisto definición de estilos. "
            + "Se pasa por alto la petición.");
        return;
    }

    const styleExists = document.getElementById(id);
    if (styleExists !== null) {
        const sameContent = styleExists.textContent.trim()
            === styleDefinitions.trim();
        if (sameContent) {
            console.warn("[addHeadStyle] Una definición de estilos "
                + "con las mismas definiciones ya existe.");
            return;
        } else {
            styleExists.remove();
            console.warn("[addHeadStyle] Un estilo con el mismo "
                + "_id_ existe, pero tiene definiciones distintas."
                + " Se pisa.");
        }
    }

    document.querySelectorAll("head").forEach(h => {
        const tag = document.createElement("style");
        tag.setAttribute("rel", "stylesheet");
        tag.id = id;
        if (typeof mediaType === "string" && mediaType.trim() !== "") {
            tag.setAttribute("media", mediaType);
        }

        tag.textContent = styleDefinitions;

        h.appendChild(tag);
    });
};
