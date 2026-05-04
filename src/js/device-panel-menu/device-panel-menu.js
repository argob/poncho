/**
 * DEVICE PANEL MENU
 *
 * @summary Configura dinámicamente la visibilidad del menú secundario 
 * (expandido en desktop y colapsado en móviles) mediante los eventos 
 * onLoad y onResize.
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2022 Argentina.gob.ar
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
 * Controla el status del componente <details>.
 * @summary Según el _media query_ lo imprime abierto o cerrado.
 * @returns {undefined}
 */
const panelMenu = () => {
    const details = document.querySelectorAll(".device-panel-menu");
    if (!details.length) {
        return;
    }
    if (window.innerWidth >= 991) {
        details.forEach((e) => e.setAttribute("open", true));
    } else {
        details.forEach((e) => e.removeAttribute("open"));
    }
};

// panelMenu() onLoad and onResize
document.addEventListener("DOMContentLoaded", panelMenu);
window.addEventListener('resize', panelMenu, true);