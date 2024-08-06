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
    "gob-azul",
    "gob-arena",
    "gob-amarillo",
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
        "primary","verde-jade","success","naranja","danger","arandano",
        "uva","celeste-argentina","palta","verdin","warning","tomate",
        "fucsia","lavanda","black"
    ],
    medium: [
        "info","verde-azulado","verdin","warning","tomate","fucsia",
        "lavanda","palta","lima","maiz","muted"
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