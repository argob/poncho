/**
 * PONCHO MAP LOADER
 * 
 * @summary Permite incorporar a un mapa un spinner. 
 */
class Loader {

    constructor(options){
        const defaults = {
            selector: "",
            scope: "poncho-loader",
            timeout: 50000,
            cover_opacity: 1,
            cover_style: {},
        };
        let opts = Object.assign({}, defaults, options);
        this.scope = opts.scope;
        this.cover_opacity = opts.cover_opacity;
        this.cover_style = opts.cover_style;
        this.timeout = opts.timeout;
        this.scope_sufix = `--${this.scope}`;
        this.scope_selector = `[data-scope="${this.scope}"]`;
        this.ponchoLoaderTimeout;
        this.selector = opts.selector;
    }


    /**
     * Cierra el spinner.
     * @returns {undefined}
     */
    close = () => document
            .querySelectorAll(`.js-poncho-map__loader${this.scope_sufix}`)
            .forEach(e => e.remove());


    /**
     * Carga el spinner.
     * @returns {undefined}
     */
    load = () => {
        this.close();
        clearTimeout(this.ponchoLoaderTimeout);
        const selector = `${this.selector}${this.scope_selector}`;
        const element = document.querySelector(selector);
;
        const loader = document.createElement("span");
        loader.className = "load";

        const cover = document.createElement('div');
        cover.dataset.scope = this.selector
        cover.classList.add(
            "loader", 
            `js-poncho-map__loader${this.scope_sufix}`
        );
        // Background opacity
        Object.assign(cover.style, this.cover_style);
        if(this.cover_opacity){
            cover.style.backgroundColor = `color-mix(in srgb, transparent, `
                + `var(--pm-loader-background) ` 
                + `${this.cover_opacity.toString() * 100}%)`;
        }

        cover.appendChild(loader);
        element.appendChild(cover);  
        this.ponchoLoaderTimeout = setTimeout(this.remove, this.timeout);
    };


    /**
     * Loader
     * @param {integer} timeout Tiempo máximo de ejecución del loader. 
     * @returns {unde}
     */
    loader = (callback, timeout=500) => {
        this.load();
        setTimeout(() => {
            callback();
            this.close();
        }, timeout);
    };
}


