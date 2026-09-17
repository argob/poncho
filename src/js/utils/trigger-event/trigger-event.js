/**
 * MIT License
 *
 * Copyright (c) 2026
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
  * Asigna un valor a un elemento del DOM y dispara un evento
  * tras un retraso.
  * 
  * @param {string|Element} selector - Selector CSS o elemento del DOM.
  * @param {*} [value] - Valor opcional a asignar al elemento.
  * @param {string} eventType - Tipo de evento a disparar (ej. "input").
  * @param {number} [timeout=50] - Retraso en milisegundos.
  * @returns {number|undefined} ID del temporizador o undefined si falla.
  */
function triggerEvent(selector, value, eventType, timeout=50){
    let element;
    if(selector instanceof Element){
        element = selector;
    } else if(typeof selector === "string" && selector !== ""){
        element = document.querySelector(selector);
    }

    if(!element){
        console.error(
            "[triggerEvent]", 
            "Debe incorporar un selector o un objeto Element."
        );
        return;
    }

    if(typeof eventType !== "string" || eventType.trim() === ""){
        console.error(
            "[triggerEvent]", 
            "Debe incorporar un eventType válido."
        );
        return;
    }

    return setTimeout(function(){
        if(value !== undefined){
            element.value = value;
        }

        const event = new Event(eventType, { bubbles: true });
        element.dispatchEvent(event);
    }, timeout);
}