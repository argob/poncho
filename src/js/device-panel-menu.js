/**
 * Controla el status del componente <details>.
 * @summary Según el _media query_ lo imprime abierto o cerrado.
 * @returns {undefined}
 */
const panelMenu = () => {
    const details = document.querySelectorAll(".device-panel-menu");
    if (window.innerWidth >= 991) {
        details.forEach((e) => e.setAttribute("open", true));
    } else if (window.innerWidth < 991) {
        details.forEach((e) => e.removeAttribute("open"));
    }
};
// panelMenu() onLoad and onResize
document.addEventListener("DOMContentLoaded", panelMenu);
window.addEventListener('resize', panelMenu, true);