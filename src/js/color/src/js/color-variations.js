/**
 * Configuración de colores www.argentina.gob.ar
 * 
 * MIT License
 * 
 * Copyright (c) 2024 Argentina.gob.ar
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rightsto use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
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
 * Códigos de color válidos para utilizar en ilustraciones. 
 */
const illustrationColors = [
    "arg-azul",
    "arg-arena",
    "arg-amarillo",
    "arg-palta",
    "arg-verde",
    "arg-arandano",
    "arg-rosado",
    "miarg-azul",
];


/**
 * Variaciones de color
 */
const colorVariations = {
    high: [
        'arg-azul', 'gna-verde-jade', 'arg-verde', 'arg-naranja', 'arg-rojo', 
        'arg-arandano', 'arg-uva', 'arg-cielo', 'arg-palta', 'arg-verdin', 
        'arg-amarillo', 'arg-tomate', 'arg-fucsia', 'arg-lavanda', 'arg-negro'
    ],
    medium: [
        "arg-info","arg-verde-azulado","arg-verdin","arg-amarillo","arg-tomate",
        "arg-fucsia","arg-lavanda","arg-palta","arg-lima","arg-maiz",
        "arg-gris-intermedio"
    ]
};


// @legacy Creo ponchoColor como una variable global.
var ponchoColor;
if (typeof Color !== 'undefined') {
    const color = new Color(ponchoColorDefinitionsList);
    ponchoColor = color.ponchoColor;
}


if (typeof exports !== "undefined") {
    module.exports = {
        colorVariations, illustrationColors
    };
}
