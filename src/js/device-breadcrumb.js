/**
 * DEVICE BREADCRUMB
 *
 * @summary Cambia el layout de los bredcrumb dependiendo del 
 * Media query. Cuando un usuario entra al sitio de Argentina.gob.ar 
 * desde un dispositivo móvil, las migas suelen ser muy extensas por
 * la cantidad de caracteres en los títulos o por la profundidad del 
 * árbol jerárquico en la navegación. Para ello se ocultan los items 
 * que anteceden al nivel dónde se está situado y se ofrece la opción
 * de expandir la miga de pan para visualizarla completa.
 * 
 * Se pueden ver algunos ejemplos dentro de src/demos/device-breadcrum
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
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
class DeviceBreadcrumb {
    constructor(options){
        this.breakPoint = 991;
        this.selector = ".breadcrumb";
        this.addGlobalClass();
    }

    /**
     * Crea el botón expandir
     * @returns {object}
     */ 
    expandButton = () => {
        const btn = document.createElement("button");
        btn.textContent = "…";
        btn.classList.add("js-ellip", "device-breadcrumb__expand-button");
        btn.dataset.title = "Expandir menú";
        btn.setAttribute("aria-hidden", true);
        btn.setAttribute("aria-label", "Expande el menú de miga de pan");
        return btn;
    };

    /**
    * Crea el botón de cerrar
    * @returns {object}
    */ 
    closeButton = () => {
        const btn = document.createElement("button");
        btn.textContent = "Cerrar";
        btn.classList.add("js-close", "device-breadcrumb__compress-button");
        btn.dataset.title = "Contraer menú";
        btn.setAttribute("aria-hidden", true);
        btn.setAttribute("aria-label", "Cierra el menú de miga de pan");
        return btn;
    };

    /**
    * Agrega el estilo de menú expandido.
    * @returns {undefined}
    */ 
    _removeDeviceHidden = (menus) => menus
        .forEach(e => e.classList.add("device-breadcrumb--expanded"));

    /**
    * Agrega la clase global device-breadcrumbs
    * @returns {undefined}
    */
    addGlobalClass = () => document
        .querySelectorAll(".breadcrumb")
        .forEach(e => e.classList.add("device-breadcrumb"));

    /**
    * Remueve la clase expanded
    * @returns {undefined}
    */ 
    _removeExpanded = (menus) => menus
        .forEach(e => e.classList.remove("device-breadcrumb--expanded"));

    /**
     * Chequea si es un enlace de inicio
     * @param {object} element Elemento li 
     * @returns {boolean}
     */
    isHomeLink = (element) => {
        let rgxResult;
        if(typeof element.firstChild === "object" && 
          element.firstChild !== null && "getAttribute" in element.firstChild){
              const href = element.firstChild.getAttribute("href");
              const rgx = new RegExp("(^/$|argentina.gob.ar$|argentina.gob.ar/$)");
              rgxResult = rgx.exec(href);
        }
        return rgxResult || false;
    };

    /**
     * Tiene o no tiene, página de inicio.
     * @param {object} menuItems Retorno del selector
     * @returns {boolean}
     */
    _isFirstElementHome = (menuItems) => {
        let result = false;
        menuItems.forEach((e, k) => {
            if(k == 0){
                result = this.isHomeLink(e); 
            }
        });
        return result;
    };

    /**
     * Verifica si el elemento es texto y no un enlace.
     * @param {object} element Elemento li 
     * @returns {boolean}
     */
    isTextItem = (element) => (element.firstChild.tagName != "A" && 
        element.firstChild.textContent != "");

    /**
     * Verifica si el último <li/> tiene un enlace dentro.
     * @param {object} menuItems Retorno del selector 
     * @returns {boolean}
     */
    _isLastElementText = (menuItems) => {
        let result;
        menuItems.forEach(e => result = this.isTextItem(e));
        return result;
    }

    /**
     * Borra los botones de expandir y contraer
     * @returns {undefined}
     */
    removeButtons = () => document
        .querySelectorAll(".js-ellip, .js-close").forEach(ele => ele.remove());


    /**
     * Contrae el menú
     * @param {object} breadcrumb Resultado del selector .breadcrumb 
     * @returns {undefined}
     */
    _onClickExpandButton = (breadcrumb) => document
        .querySelectorAll(".js-ellip")
        .forEach(e => e.addEventListener(
            "click", () => this._removeDeviceHidden(breadcrumb) 
        ));

    /**
     * Expande el menu
     * @param {object} breadcrumb Resultado del selector .breadcrumb 
     * @returns {undefined}
     */
    _onClickCloseButton = (breadcrumb) => document
        .querySelectorAll(".js-close")
        .forEach(e => e.addEventListener(
            "click", () => this._removeExpanded(breadcrumb)
        ));

    /**
    * Procesa la lógica de las migas de pan.
    * @param {integer} innerWidth Tamaño en pixeles de la pantalla.
    */
    render = (innerWidth) => {
        this.removeButtons();
        const menuItems = document.querySelectorAll(`${this.selector} li`);
        const breadcrumb = document.querySelectorAll(this.selector);
        const totalItems = menuItems.length;
        const lastElementText = this._isLastElementText(menuItems); 
        const firstElementHome = this._isFirstElementHome(menuItems);
        const counter = (lastElementText ? totalItems - 2 : totalItems - 1);

        menuItems.forEach((element, key) => {
            // si es página de inicio le agrega una clase para distinguirlo.
            if(this.isHomeLink(element) && totalItems > 1){
                element.classList.add("device-breadcrumb__hidden-item");
            }
            // Agrego una clase al último elemento visible
            // Hack por si no está el dash final.
            else if(lastElementText && key == totalItems - 2){
                element.classList.add("device-breadcrumb__last-visible-item");
            }
            // Toggle items
            else if(key < counter){
                element.classList.add("device-breadcrumb__toggle-item");
            }
            // Si es el último (o único), item y no tiene anchor.
            else if (this.isTextItem(element) && key == totalItems - 1){
                element.classList.add("device-breadcrumb__last-item");
            }
        });

        let totals = totalItems;
        totals = (lastElementText ? totals - 1 : totals);
        totals = (firstElementHome ? totals - 1 : totals);

        if(innerWidth <= this.breakPoint && totals > 1){
            // Agrega el botón expandir antes del primer <li/>.
            const firstItem = menuItems[0];
            const parentDiv = firstItem.parentNode;
            parentDiv.insertBefore(this.expandButton(), firstItem);
            
            // Agrega el botón de cerrar.
            breadcrumb.forEach(menu => {
                menu.appendChild(this.closeButton());
            });
        } 

        // Listeners
        this._onClickExpandButton(breadcrumb);
        this._onClickCloseButton(breadcrumb);
    };
};
// end class


// CALL
document.addEventListener("DOMContentLoaded", () => {
    const deviceBreadcrumb = new DeviceBreadcrumb();
    deviceBreadcrumb.render(window.innerWidth);
});
window.addEventListener("resize", () =>  {
    const deviceBreadcrumb = new DeviceBreadcrumb();
    deviceBreadcrumb.render(window.innerWidth)}, true);