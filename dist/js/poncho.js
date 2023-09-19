/**
 * Definición de colores Poncho
 */
const ponchoColorDefinitionsList = [
    {
        description: "",
        name: "Azul",
        color: "#0072BB",
        code: "primary",
        alias: [
            "azul",
            "primary"
        ]
    },
    {
        description: "Acción principal o exitosa",
        name: "Verde",
        color: "#2E7D33",
        code: "success",
        alias: [
            "verde",
            "success"
        ]
    },
    {
        description: "Atención o peligro",
        name: "Rojo",
        color: "#C62828",
        code: "danger",
        alias: [
            "rojo",
            "danger"
        ]
    },
    {
        description: "Foco o alerta",
        name: "Amarillo",
        color: "#F9A822",
        code: "warning",
        alias: [
            "amarillo",
            "warning"
        ]
    },
    {
        description: "",
        name: "Celeste",
        color: "#2897D4",
        code: "info",
        alias: [
            "celeste",
            "info"
        ]
    },
    {
        description: "Elementos básicos",
        name: "Negro",
        color: "#333333",
        code: "black",
        alias: [
            "negro",
            "black"
        ]
    },
    {
        description: "Enlace visitado",
        name: "Uva",
        color: "#6A1B99",
        code: "uva",
        alias: [
            "uva"
        ]
    },
    {
        description: "Texto secundario (subtitulos)",
        name: "Gris",
        color: "#525252",
        code: "muted",
        alias: [
            "gris",
            "muted"
        ]
    },
    {
        description: "Gris área",
        name: "Gris intermedio",
        color: "#F2F2F2",
        code: "gray",
        alias: [
            "grisintermedio",
            "gris-area",
            "gray"
        ]
    },
    {
        description: "Fondo footer/header",
        name: "Celeste Argentina",
        color: "#37BBED",
        code: "celeste-argentina",
        alias: [
            "celesteargentina",
            "celeste-argentina"
        ]
    },
    {
        description: "",
        name: "Fucsia",
        color: "#EC407A",
        code: "fucsia",
        alias: [
            "fucsia"
        ]
    },
    {
        description: "",
        name: "Arándano",
        color: "#C2185B",
        code: "arandano",
        alias: [
            "arandano"
        ]
    },
    {
        description: "",
        name: "Cielo",
        color: "#039BE5",
        code: "cielo",
        alias: [
            "cielo"
        ]
    },
    {
        description: "",
        name: "Verdin",
        color: "#6EA100",
        code: "verdin",
        alias: [
            "verdin"
        ]
    },
    {
        description: "",
        name: "Lima",
        color: "#CDDC39",
        code: "lima",
        alias: [
            "lima"
        ]
    },
    {
        description: "",
        name: "Maiz",
        color: "#FFCE00",
        code: "maiz",
        alias: [
            "maiz",
            "maíz"
        ]
    },
    {
        description: "",
        name: "Tomate",
        color: "#EF5350",
        code: "tomate",
        alias: [
            "tomate"
        ]
    },
    {
        description: "",
        name: "Naranja oscuro",
        color: "#EF6C00",
        code: "naranja",
        alias: [
            "naranjaoscuro",
            "naranja"
        ]
    },
    {
        description: "",
        name: "Verde azulado",
        color: "#008388",
        code: "verde-azulado",
        alias: [
            "verdeazulado",
            "verde-azulado"
        ]
    },
    {
        description: "",
        name: "Escarapela",
        color: "#2CB9EE",
        code: "escarapela",
        alias: [
            "escarapela"
        ]
    },
    {
        description: "",
        name: "Lavanda",
        color: "#9284BE",
        code: "lavanda",
        alias: [
            "lavanda"
        ]
    },
    {
        description: "",
        name: "Mandarina",
        color: "#F79525",
        code: "mandarina",
        alias: [
            "mandarina"
        ]
    },
    {
        description: "",
        name: "Palta",
        color: "#50B7B2",
        code: "palta",
        alias: [
            "palta"
        ]
    },
    {
        description: "",
        name: "Cereza",
        color: "#ED3D8F",
        code: "cereza",
        alias: [
            "cereza"
        ]
    },
    {
        description: "",
        name: "Limón",
        color: "#D7DF23",
        code: "limon",
        alias: [
            "limon"
        ]
    },
    {
        description: "",
        name: "Verde Jade",
        color: "#006666",
        code: "verde-jade",
        alias: [
            "verdejade",
            "verde-jade"
        ]
    },
    {
        description: "",
        name: "Verde Aloe",
        color: "#4FBB73",
        code: "verde-aloe",
        alias: [
            "verdealoe",
            "verde-aloe"
        ]
    },
    {
        description: "",
        name: "Verde Cemento",
        color: "#B4BEBA",
        code: "verde-cemento",
        alias: [
            "verdecemento",
            "verde-cemento"
        ]
    }
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


/**
 * Definición por color
 * 
 * @see ponchoColorDefinitionsList
 * @param {string} color Nombre del cólor a buscar. 
 * @returns {string|boolean}
 */
const ponchoColorDefinitions = color => {
    const result = ponchoColorDefinitionsList.find(
        f => f.alias.some(s => typeof color != undefined && s == color)
    );
    return result || false;
};


/**
 * Colores poncho a hexa
 * 
 * @see https://argob.github.io/poncho/identidad/colores/
 * @param {string} color Nombre de color Poncho.
 * @example
 * // returns "#2897d4"
 * getColor("celeste")
 * @returns {string} Color en formato hexadecimal.
 */
const ponchoColor = color => ponchoColorDefinitions(color)?.color || color;


/**
 * Conversor de hex a binary
 * 
 * @param {string} value Valor hexadecimal 
 * @returns {string}
 */
const cleanUpHex = value => {
    let hex = value
            .toString()
            .replace("#", "")
            .trim()
            .toUpperCase();

    if(hex.length == 3){
        hex = Array.from(hex).map(a => a.repeat(2)).join("");
    }
    return hex;
};


/**
 * Retorna el código de color poncho por hexadecimal.
 * @param {string} value Valor hexadecimal a buscar 
 * @see ponchoColorDefinitionsList
 * @example
 * // {
 * //    "description": "",
 * //    "name": "Mandarina",
 * //    "color": "#f79525",
 * //    "code": "mandarina",
 * //    "alias": [
 * //        "mandarina"
 * //    ]
 * // }
 * findByHex("#f79525");
 * @returns {object} Objecto con la defición del color
 */
const findPonchoColorByHex = value => ponchoColorDefinitionsList.find(f => {
    const colorToFind = cleanUpHex(value);
    const colorToCompare = cleanUpHex(f.color);
    if(colorToFind == colorToCompare){
        return true;
    }
    return false;
});


/* module.exports REMOVED */

/**
 * Fetch data
 * 
 * @example
 * ```js
 * (async() => {
 *     const data = await fetch_json("https://som.url.com");
 * });
 * ```
 */
async function fetch_json(url, method="GET"){
    const response = await fetch(
        url,
        {
            method: method, 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};

/**
 * Remueve acentos y caracteres especiales.
 * 
 * @param {string} data Cadena de texto a limpiar. 
 * @example
 * // returns Accion murcielago arbol nino
 * removeAccents("Acción Murciélago árbol niño")
 * @returns {string} Cadena de texto sin acentos.
 */
const replaceSpecialChars = (data) => {
    if(!data){
        return "";
    }
    const search = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
    + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
    const replace = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
    + "rrsssssttuuuuuuuuuwxyyzzz";
    const a = search + search.toUpperCase();
    const b = replace + replace.toUpperCase();
    const p = new RegExp(a.split("").join("|"), "g");  
    return data.toString().replace(p, c => b.charAt(a.indexOf(c)))
};


/**
 * Slugify
 * 
 * @param {string} string Cadena de texto a convertir.
 * @example
 * // returns el-murcielago-remolon-parece-un-nino
 * slugify("El murciélago remolón parece un niño")
 * @returns {string} Cadena de texto en formato slug.
 */
const slugify = (string) =>{
    if(!string){
        return string;
    }
    const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
                + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
                + "rrsssssttuuuuuuuuuwxyyzzz------";
    const p = new RegExp(a.split("").join("|"), "g");

    return string.toString().toLowerCase()
        .replace(/\s+/g, "-")
        .replace(p, c => b.charAt(a.indexOf(c)))
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};


/* module.exports REMOVED */

/**
 * Impide que se impriman etiquetas HTML.
 * 
 * @summary Impide que se impriman etiquetas HTML exceptuando aquellas
 * asignadas en el parámetro exclude.
 * @param {string} str Cadena de texto a remplazar.
 * @param {object} exclude Etiquetas que deben preservarse.
 * @example
 * // returns &lt;h1&gt;Hello world!&lt;/h1&gt; <a href="#">Link</a>
 * secureHTML('<h1>Hello world!</h1> <a href="#">Link</a>', ["a"])
 * 
 * @returns {string} Texto remplazado.
 */
const secureHTML = (str, exclude=[]) => {
    if(exclude.some(e => e === "*")){
        return str;
    }

    let replaceString = str.toString()
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // let replaceString = str.toString()
    //     .replace(/<(?=[a-zA-Z])([^<>]*)>/gm, "&lt;$1&gt;")
    //     .replace(/<\/(?=[a-zA-Z])([^<>]*)>/gm, "&lt;/$1&gt;");


    if(exclude.length > 0){
        const regexStart = new RegExp(
            "&lt;(" + exclude.join("|") + ")(.*?)&gt;", "g");
        const regexEnd = new RegExp(
            "&lt;\/(" + exclude.join("|") + ")(.*?)&gt;", "g");

        return replaceString
            .replace(regexStart, "<$1$2>")
            .replace(regexEnd, "</$1>");
    }
    return replaceString;
};



/* module.exports REMOVED */

/**
 * 
 */
ponchoTableLegacyPatch = () => {
    document
        .querySelectorAll("select[id=ponchoTableFiltro]")
        .forEach(element => {
            // const node = element.closest(".form-group");
            const node = element.parentElement;
            const newElement = document.createElement("div");
            newElement.id = "ponchoTableFiltro";
            newElement.classList.add("row");
            node.parentElement.appendChild(newElement);
            node.remove();
    });
};


function ponchoTable(opt) {
    ponchoTableLegacyPatch();
    return ponchoTableDependant(opt);
}


/**
 * PONCHO TABLE
 *
 * @summary PonchoTable con filtros dependientes
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires jQuery
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 * @see https://datatables.net
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
const ponchoTableDependant = opt => {
    var gapi_data;
    var filtersList = [];
    var wizard = (opt.hasOwnProperty("wizard") && opt.wizard ? 
            true : false);
    var emptyLabel = (opt.hasOwnProperty("emptyLabel") && opt.emptyLabel ? 
            opt.emptyLabel : "Todos");
    var filtro = {};
    var orderFilter = (opt.hasOwnProperty("orderFilter") && opt.orderFilter ? 
            true : false);
    var asFilter = {};
    var allowedTags = ["*"];
    let markdownOptions = {
        "tables": true,
        "simpleLineBreaks": true,
        "extensions": [
            'details', 
            'images', 
            'alerts', 
            'numbers', 
            'ejes', 
            'button', 
            'target',
            'bootstrap-tables', 
            'video'
        ]
    };

    // Loader
    document.querySelector("#ponchoTable").classList.add("state-loading");
    
    if (jQuery.fn.DataTable.isDataTable("#ponchoTable")) {
        jQuery("#ponchoTable").DataTable().destroy();
    }


    /**
     * Ordena alfanuméricamente
     * @example
     * // ["Arroz", "zorro"]
     * ["zorro", "Arroz"].sort(_sortAlphaNumeric)
     * @return {object}
     */
    const sortAlphaNumeric = (a, b) => {
        return a.toString().localeCompare(b.toString(), "es", {numeric: true});
    };


    /**
     * De acuerdo a las opciones del usuario, ordena el listado o lo deja
     * en la secuencia en la que llega.
     * 
     * @summary Alias de sortAlphaNumeric
     * @param {object} a 
     * @param {object} b 
     * @returns {object}
     */
    const _sortAlphaNumeric = (a, b) => (orderFilter ? 
        sortAlphaNumeric(a, b) : null);


    /**
     * Resultados únicos
     * 
     * @param {object} list Array del que se quiere obtener 
     * resultados únicos.
     * @returns {object}
     */
    const distinct = list => [... new Set(list)];
    

    /**
     * Select option
     * 
     * @summary Crea un tag _option_ para un _select_. 
     * @param {integer} parent Índice según el listado de filtros.
     * @param {string} label Valor para el label o texto visible.
     * @param {string} value Valor para el attributo _value_.
     * @param {boolean} selected Si el item debe mostrarse seleccionado.
     * @return {object}
     */
    const _optionSelect = (parent=0, label, value, selected=false) => {
            var select_option = document.createElement("option");
            select_option.value = value.toString().trim();
            select_option.dataset.column = parent;
            select_option.textContent = label.toString().trim();
            if(selected){
                select_option.setAttribute("selected", "selected");
            }
            return select_option;
    };


    /**
     * Prepara el término para ser buscado por REGEX
     *
     * @summary Escapa caracteres especiales utilizados en la sintáxis
     * de expresiones regulares.
     * @see replaceSpecialChars() en poncho.min.js
     * @param {string} term Término a buscar.
     * @example
     * // return Simbrón \(3\.180\)
     * _searchTerm("Simbrón (3.180)")
     * @return {string}
     */
    const _searchTerm = (term="") => {
        return term.toString().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    };


    /**
     * Evita un valor negativo
     */
    const _parentElement = value => (value <= 0 ? 0 : value);


    /**
     * Retorna los valores de los filtros
     */
    const _filterValues = () => {
        return [...document.querySelectorAll("[data-filter]")].map(e => e.value);
    };


    /**
     * Showdown habilitado.
     * 
     * Verifica si la librería _showdown_ está disponible.
     * @returns {boolean}
     */
    const _isMarkdownEnable = () => {
        if(typeof showdown !== "undefined" && 
            showdown.hasOwnProperty("Converter")){
                return true;
        }
        return false;
    }; 

    /**
     * Verifica si las extensiones showdown están definidas.
     * 
     * @param {object} extensions 
     * @returns {boolean}
     */
    const _isShowdownExtensionEnable = extensions => 
        extensions.every(e => {
            try {
                showdown.extension(e);
                return true;
            } catch (error) {
                return false;
            }
    });

    /**
     * Botón poncho
     *
     * @summary Imprime un botón bootstrap.
     * @param {string} label Label para el botón.
     * @param {string} value Href para el botón
     * @return {undefined}
     */ 
    const button = (label, value) => {
        const btn = document.createElement("a");
        btn.setAttribute("aria-label", label);
        btn.classList.add(
            "btn", "btn-primary", "btn-sm", "margin-btn");
        btn.target = "_blank";
        btn.href = value;
        btn.textContent = label;
        btn.setAttribute("rel", "noopener noreferrer");
        return btn.outerHTML;
    };

    /**
     * Formato de fecha
     *
     * @summary Agrega una etiqueta datetime para mejorar la indexación
     * y el ordenamiento.
     * @return {undefined}
     */ 
    const tdDate = value => {
        const dateSplit = value.split("/");
        const finalDateIso = new Date(
            dateSplit[2], dateSplit[1] - 1, dateSplit[0]
        );

        const hiddenSpan = document.createElement("span");
        hiddenSpan.style.display = "none";
        hiddenSpan.textContent = finalDateIso.toISOString().split('T')[0];
        return hiddenSpan.outerHTML + value;
    };


    /**
     * Imprime los filtros
     *
     * @param {object} gapi_data Objeto con la información separada del
     * documento Google Sheet
     */
    const _createFilters = gapi_data => {
        // Contenedor
        const tableFiltroCont = document.querySelector("#ponchoTableFiltro");
        tableFiltroCont.innerHTML = "";

        // Imprime cada uno de los filtros
        Object.keys(filtro).forEach((f, key) => {
            const columna = filtro[f][0].columna ? filtro[f][0].columna : 0;
            const list_filter = filtro[f]
                .map(e => e.value)
                .sort(_sortAlphaNumeric);

            const tplCol = document.createElement("div");

            if(opt.hasOwnProperty("filterClassList")){
                const classList = (typeof opt.filterClassList === "string" ? 
                        opt.filterClassList.split(" ") : opt.filterClassList);
                tplCol.classList.add(...classList);     
            } else {
                const cols = Math.floor(12 / Object.keys(filtro).length);
                tplCol.classList.add("col-sm-12", `col-md-${cols}`); 
            }
            tplCol.dataset.index = key;
            tplCol.dataset.filterName = f;

            // If wizzard
            if(wizard && key > 0){
                tplCol.style.display = "none";   
            }

            const tplForm = document.createElement("div");
            tplForm.className = "form-group";

            const formLabel = document.createElement("label");
            formLabel.setAttribute("for", f);
            formLabel.textContent = gapi_data.headers[`filtro-${f}`];

            const select = document.createElement("select");
            select.classList.add("form-control");
            select.dataset.filter = 1;
            select.name = f;
            select.id = f;
            select.appendChild(_optionSelect(columna, emptyLabel, "", true));
            list_filter.forEach(item => {
                if(!item){
                    return;
                }
                select.appendChild(_optionSelect(columna, item, item, false));
            });

            tplForm.appendChild(formLabel);
            tplForm.appendChild(select);
            tplCol.appendChild(tplForm);
            tableFiltroCont.appendChild(tplCol);
        // }
        });
    };


    /**
     * Imprime la tabla
     *
     * @param {object} gapi_data Objeto con la información separada del
     * documento Google Sheet
     */
    const _createTable = gapi_data => {
        // Table thead > th
        const thead = document.querySelector("#ponchoTable thead");
        thead.innerHTML = "";

        const theadTr = document.createElement("tr"); 
        Object.keys(gapi_data.headers).forEach((header, key) => {
            const th = document.createElement("th");
            th.textContent = gapi_data.headers[header];
            th.setAttribute("scope", "col");
            theadTr.appendChild(th);
        }); 
        thead.appendChild(theadTr);

        // Table caption
        const tableCaption = document.querySelector("#ponchoTable caption");
        tableCaption.innerHTML = "";
        tableCaption.textContent = opt.tituloTabla;

        // Tbody instance
        const tableTbody = document.querySelector("#ponchoTable tbody");
        tableTbody.innerHTML = "";

        // CONTENIDO FILAS
        gapi_data.entries.forEach((entry, key) => {

            if(!Object.values(entry).some(f => String(f).trim())){
                return;
            }

            // si se desea modificar la entrada desde opciones
            entry = (typeof opt.customEntry === "function" && 
                opt.customEntry !== null ? opt.customEntry(entry) : entry);

            // Inserta el row.
            const tbodyRow = tableTbody.insertRow();
            tbodyRow.id = "id_" + key;

            // Verifico sin las extensiones showdown existen
            let showdownOptions;
            if(_isMarkdownEnable()){
                const registeredOptions = (opt.hasOwnProperty("markdownOptions") ? 
                        opt.markdownOptions : markdownOptions);
                showdownOptions = (_isShowdownExtensionEnable(
                        registeredOptions.extensions) ? registeredOptions : {});
            }

            // Recorro cada uno de los títulos
            Object.keys(gapi_data.headers).forEach(header => {
                filas = entry[header];

                if (header.startsWith("btn-") && filas != "") {
                    filas = button(
                        header.replace("btn-", "").replace("-", " "), filas
                    );
                } else if (header.startsWith("fecha-") && filas != "") {
                    filas = tdDate(filas);
                }

                const cell = tbodyRow.insertCell();
                cell.dataset.title = gapi_data.headers[header];
                if (filas == ""){
                    cell.className = "hidden-xs";
                }

                // Si showdown está incluido lo uso
                // @todo Usar showdown fuera de la función. Usarlo en options.
                let allowed_tags = (opt.hasOwnProperty("allowedTags") ? 
                        opt.allowedTags : allowedTags);
                
                // Anchor como filtro está permitido por defecto.
                allowed_tags = (  header.startsWith("btn-") && filas != "" ? 
                        [...allowed_tags, "a"] : allowed_tags);
                
                const cleannedText = secureHTML(filas, allowed_tags);
                if(_isMarkdownEnable()){
                    const converter = new showdown.Converter(showdownOptions);
                    cell.innerHTML = converter.makeHtml(cleannedText);
                } else {
                    cell.innerHTML = cleannedText;
                }
            });
        });
    };


    /**
     * Matriz filtro
     * 
     * @summary Reune los filtros y por cada uno de ellos guarda los
     * datos —únicos—, de esa entrada.
     * @param {object} gapi_data Objeto con la información separada del
     * documento Google Sheet
     * @example
     * {
     *    nombre_filtro : [
     *        {
     *            columna: 0,
     *            value: "elemento"
     *        },
     *        ...
     *    ]
     * }
     * @return {object}
     */
    const flterMatrix = (gapi_data, filtersList) => {
        let filters = {};
        filtersList.forEach((filter, key) => {
            let entiresByFilter = [];
            if(asFilter.hasOwnProperty(filtersList[key])){
                entiresByFilter = asFilter[filtersList[key]];
            } else {
                entiresByFilter = gapi_data.entries.map(entry => entry[filter]);
            }

            const uniqueEntries = distinct(entiresByFilter);
            uniqueEntries.sort(_sortAlphaNumeric);
            filter = filter.replace("filtro-", "");
            filters[filter] = [];
            uniqueEntries.forEach(entry => {
                filters[filter].push({"columna": key, "value": entry});
            });
        });
        return filters;
    };


    /* HELPERS FILTRO DEPENDIENTE */
    /**
     * Valida los parents
     * 
     * @param {integer} parent Índice (filtro) seleccionado.
     * @return {boolean}
     */ 
    const _validateSteps = (parent, entry, label, values) => {
        // Verifico que por cada entrada el valor(label), se 
        // encuentre en cada uno de los parents.
        // El bucle termina cuando llega al índice seleccionado.
        const range = [...Array(_parentElement(parent + 1)).keys()];
        const results = range.map(i => {
            // Chequeo si el valor del select es igual al parent o
            // si en su defecto, está vacío.
            if(
                (
                (entry[filtersList[_parentElement(parent-1)]] == 
                values[_parentElement(parent-1)]) && 
                (entry[filtersList[_parentElement(parent)]] == label)
                ) ||  values[_parentElement(parent-1)] == "")
            {
                return true;
            }
            return false;
        });
        return results.every(e => e);
    };


    /**
     * Trae todos los elementos de un filtro en base a su parent.
     *
     * @param {integer} parent Indice de filtro seleccionado.
     * @param {integer} children Indice del hijo del seleccionado.
     * @param {string} label value del filtro seleccionado.
     * @return {object} Listado de elementos únicos para el select.
     */ 
    const _allFromParent = (parent, children, label) => {
        const filterList = gapi_data.entries.flatMap(e => {
            const evaluatedEntry = e[filtersList[_parentElement(children)]];
            if(e[filtersList[_parentElement(parent)]] == label || label == ""){
                if(_isCustomFilter(children, filtro)){
                    const customFilters = _customFilter(children, filtro)
                        .filter(e => {
                            return _toCompareString(evaluatedEntry)
                                .includes(_toCompareString(e));
                    });
                    return customFilters;
                } 
                return evaluatedEntry;
            } 
            return false;

        }).filter(f => f);

        const uniqueList = distinct(filterList);
        uniqueList.sort(_sortAlphaNumeric);
        return uniqueList;
    };

    
    /**
     * Prepara un string para una comparación case sensitive y sin
     * caracteres especiales.
     * @param {string} value Valor a comparar. 
     * @returns {boolean}
     */
    const _toCompareString = value => replaceSpecialChars(value.toLowerCase());


    /**
     * Lista los valores que deben ir en un filtro según su parent.
     * 
     * @param {integer} parent Indice de filtro seleccionado.
     * @param {string} label value del filtro seleccionado.
     * @param {integer} children Indice del hijo del seleccionado.
     */
    const _filterOptionList = (parent, children, label) => {
        children = (children == filtersList.length ? children - 1 : children);
        const values = _filterValues();

        // Recorro todas las entradas del JSON
        const items = gapi_data.entries.flatMap(entry => {
            const range = _validateSteps(parent, entry, label, values);
            if(
                (entry[filtersList[_parentElement(children - 1)]] == label) && 
                (range)){
                    const evaluatedEntry = entry[filtersList[_parentElement(children)]];
                    if(_isCustomFilter(children, filtro)){
                        const customFilters = _customFilter(children, filtro)
                            .filter(e => {
                                return _toCompareString(evaluatedEntry)
                                    .includes(_toCompareString(e));
                            });
                        return customFilters;
                    } else {
                        return evaluatedEntry;
                    }

            }
            return;
        }).filter(f => f);

        const uniqueList = distinct(items);
        uniqueList.sort(_sortAlphaNumeric);
        return uniqueList;
    };


    /**
     * Tiene filtros personalizados
     * @param {integer} key Indice de filtro
     * @returns {boolean}
     */
    const _isCustomFilter = key => {
        const filtersKeys = Object.keys(filtro);
        if(asFilter.hasOwnProperty(`filtro-${filtersKeys[key]}`)){
            return true   
        }
        return false;
    };


    /**
     * Listado de filtros personalizado
     * @param {integer} key Indice de filtro
     * @returns {object}
     */
    const _customFilter = key => {
        const filtersKeys = Object.keys(filtro);
        if(asFilter.hasOwnProperty(`filtro-${filtersKeys[key]}`)){
            return asFilter[`filtro-${filtersKeys[key]}`];   
        }
        return [];
    };


    /**
     * Filtra select hijos en base a un item del padre.
     * 
     * @param {integer} filterIndex Índice de filtro o número de filtro.
     * @param {string} label Label del indice seleccionado
     * @return {void}
     */
    const _dependantFilters = (filterIndex, label) => {
        const filtros = Object.keys(filtro);
        const filterValues = _filterValues();
        // Redibujo los _option_ por cada `select` (filtro).
        // Hago un `for()` iniciando en el hijo de filterIndex.
        for(let i = filterIndex + 1; i <= filtros.length; i++){
            if(filtros.length == i ){ 
                break; 
            }
            let itemList = _filterOptionList(filterIndex, i, label);
            if(itemList.length == 0){
                itemList = _allFromParent(filterIndex, i, label);
            }
            const select = document.querySelector(`#${filtros[i]}`);
            select.innerHTML = "";

            select.appendChild(_optionSelect(i, emptyLabel, "", true));
            itemList.forEach(e => {
                if(!e.trim()){
                    return;
                }
                // Mantengo el filtro del hijo si existe en el 
                // listado filtrado.
                let checked = (filterValues[i] == e ? true : false);
                select.appendChild(_optionSelect(i, e, e, checked));
            });
        }
    };

    /**
     * Asigna selectores al contenedor de los filtros.
     * @returns {undefined}
     */
    const _filtersContainerClassList = () =>{
        if(opt.hasOwnProperty("filterContClassList") && opt.filterContClassList){
            const fc = document.getElementById("ponchoTableFiltroCont");
            fc.removeAttribute("class");
            fc.classList.add(...opt.filterContClassList);
        }
    };


    /**
     * Asigna selectores al contenedor del buscador.
     * @returns {undefined}
     */
    const _searchContainerClassList = () =>{
        if(opt.hasOwnProperty("searchContClassList") && opt.searchContClassList){
            const element = document.getElementById("ponchoTableSearchCont");
            element.removeAttribute("class");
            element.classList.add(...opt.searchContClassList)
        }
    };


    /**
     * Si la URL tiene un valor por _hash_ lo obtiene considerandolo su id.
     * @returns {void}
     */
    const hasHash = () => {
        let hash = window.location.hash.replace("#", "");
        return hash || false;
    };


    /**
     * Visualización de la tabla
     * 
     * @param {boolean} visibility Oculta y muestra la tabla.
     * @returns {undefined}
     */
    _hideTable = (visibility=true) => {
        const display = (visibility ? "none" : "block");
        const reverseDisplay = (visibility ? "block" : "none");
        document
            .querySelectorAll(
                `[data-visible-as-table="true"],#ponchoTable_wrapper`)
            .forEach(element => element.style.display = display);

        document
            .querySelectorAll(`[data-visible-as-table="false"]`)
            .forEach(element => element.style.display = reverseDisplay);
    };


    /**
     * Inicializa DataTable() y modifica elementos para adaptarlos a 
     * GoogleSheets y requerimientos de ArGob.
     */
    const initDataTable = () => {
        const searchType = jQuery.fn.DataTable.ext.type.search;
        searchType.string = data => {
            return (!data ?
                "" :
                (typeof data === "string" ?
                    replaceSpecialChars(data) :
                    data));
        };

        searchType.html = data => {
            return (!data ?
                "" :
                (typeof data === "string" ?
                    replaceSpecialChars(data.replace( /<.*?>/g, "")) :
                    data));
        };

        /**
         * Instacia DataTable()
         */ 
        let tabla = jQuery("#ponchoTable").DataTable({
            "initComplete" : (settings, json) => {
                if(wizard){
                    _hideTable();
                }
            },
            "lengthChange": false,
            "autoWidth": false,
            "pageLength": opt.cantidadItems,
            "columnDefs": [
                { "type": "html-num", "targets": opt.tipoNumero },
                { "targets": opt.ocultarColumnas, "visible": false }
            ],
            "ordering": opt.orden,
            "order": [
                [opt.ordenColumna - 1, opt.ordenTipo]
            ],
            "dom": "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                "<'row'<'col-sm-12'i>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8'p>>",
            "language": {
                "sProcessing": "Procesando...",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "sZeroRecords": "No se encontraron resultados",
                "sEmptyTable": "Ningún dato disponible en esta tabla",
                "sInfo": "_TOTAL_ resultados",
                "sInfoEmpty": "No hay resultados",
                //"sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sInfoFiltered": "",
                "sInfoPostFix": "",
                "sSearch": "Buscar:",
                "sUrl": "",
                "sInfoThousands": ".",
                "sLoadingRecords": "Cargando...",

                "oPaginate": {
                    "sFirst": "<<",
                    "sLast": ">>",
                    "sNext": ">",
                    "sPrevious": "<"
                },
                "oAria": {
                    "sSortAscending": 
                        ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": 
                        ": Activar para ordenar la columna de manera descendente",
                    "paginate": {
                        "first": 'Ir a la primera página',
                        "previous": 'Ir a la página anterior',
                        "next": 'Ir a la página siguiente',
                        "last": 'Ir a la última página'
                    }
                }
            }
        });

        /**
         * Buscador por palabra
         * @summary Ejecuta la búsqueda en cada keyup.
         */
        jQuery("#ponchoTableSearch").keyup(function() {
            tabla
                .search(jQuery.fn.DataTable.ext.type.search.string(this.value))
                .draw();
        });

        // REMUEVE LOS FILTROS
        jQuery("#ponchoTable_filter").parent().parent().remove();

        // MUESTRA FILTRO PERSONALIZADO
        const ponchoTableOption = document.querySelectorAll("#ponchoTableFiltro option");
        if (ponchoTableOption.length > 1) {
            document.querySelector("#ponchoTableFiltroCont").style.display = "block";
        }


        /**
         * Valida si un componente select tiene options con value. 
         * 
         * @summary El objeto de éste método es evitar traer selects que tengan
         * options vacíos. 
         * @param {string} selector Selector del elemento select 
         * @returns {boolean}
         */
        const _selectHasValues = selector => {
            const options = document.querySelectorAll(`${selector} option`);
            const result = Object.values(options).map(m => m.value).some(s => s);
            return result;
        }


        /**
         * Modo wizard para los filtros.
         * 
         * @param {object} filters Listado de filtros.
         * @param {interger} column Indice de columna.
         * @param {string} valFilter Value del select
         * @returns {undefined}
         */
        const _wizardFilters = (filters, column=0, valFilter="") => {
            let tableStatus = false;

            filters.forEach((filter, key) => {
                const selectHasValues = _selectHasValues(`#${filter}`);
                let displayStatus = "none";

                if(selectHasValues && valFilter && key <= column + 1){
                    displayStatus = "block";

                } else if(selectHasValues && !valFilter &&  key <= column + 1) {
                    const nextFilter = document
                        .querySelectorAll(`#${filters[column + 1]}`)
                    nextFilter.forEach(element => element.innerHTML = "");
                    displayStatus = "block";
                    tableStatus = false;
                } 

                const currentFilter = document
                    .querySelectorAll(`[data-filter-name="${filter}"]`)
                currentFilter
                    .forEach(element => element.style.display = displayStatus);
            });

            if( 
                _selectHasValues(`#${filters[column]}`) && 
                valFilter && 
                !_selectHasValues(`#${filters[column + 1]}`)
            ){
                tableStatus = true;
            } 


            if(tableStatus){
                _hideTable(false);
            } else {
                _hideTable();
            }
        };


        /**
         * Filtro en el change de cada select (filtro).
         * 
         * @summary Por por cada interacción con un filtro, obtiene el índice de
         * columna y lo pasa con el valor del select a _dependantFilters(). Ésta
         * funciión redibuja los filtros en de forma dependiente según el valor
         * de la elección.
         * @see replaceSpecialChars() on poncho.min.js
         * @return {undefined}
         */ 
        jQuery("select[data-filter]").change(function() {
            const column = jQuery(this).find("option:selected").data("column");
            const valFilter = jQuery(this).find("option:selected").val();

            _dependantFilters(column, valFilter);

            // Restablece los datos en la tabla
            tabla.columns().search("").columns().search("").draw();

            const filters = Object.keys(filtro);
            const filterValues = _filterValues();
            const filterIndex = filter => {
                return Object 
                        .keys(gapi_data.headers)
                        .indexOf(`filtro-${filter}`);
            };

            filterValues.forEach((f, k) => {
                const columnIndex = filterIndex(filters[k]);
                const term = _searchTerm(filterValues[k]);
                const cleanTerm = _searchTerm(
                    replaceSpecialChars(filterValues[k]));
                if(_isCustomFilter(k, filtro)){
                    tabla.columns(columnIndex)
                        .search(_toCompareString(filterValues[k]));
                } else {
                    tabla
                        .columns(columnIndex)
                        .search(
                            (filterValues[k] ? `^(${term}|${cleanTerm})$` : ""), 
                            true, false, true  
                        );
                }
            });
            tabla.draw();
            if(wizard){     
                _wizardFilters(filters, column, valFilter);
            }
        });

        
        // Si está habilitada la búsqueda por hash.
        if(opt.hasOwnProperty("hash") && opt.hash){
            const term = hasHash();
            const searchTerm = (term ? decodeURIComponent(term) : "");     
            const element = document.querySelectorAll("#ponchoTableSearch");
            element.forEach(ele => {
                ele.value = searchTerm;
                tabla
                    .search(jQuery.fn.DataTable.ext.type.search.string(searchTerm))
                    .draw();
            });
        }
    } // end initDataTable
    



    /**
     * Imprime DataTable
     * 
     * @param {object} data JSON data
     */
    const render = data => {
        // Defino la variable global
        gapi_data = data;
        // Defino las entradas
        gapi_data.entries = (
            typeof opt.refactorEntries === "function" && 
            opt.refactorEntries !== null ? 
            opt.refactorEntries(gapi_data.entries) : gapi_data.entries
        );
        // Defino los headers que se van a utilizar
        gapi_data.headers = (opt.hasOwnProperty("headers") && opt.headers ?
                opt.headers : gapi_data.headers);
        // Listado de filtros
        filtersList = Object
                .keys(gapi_data.headers)
                .filter(e => e.startsWith("filtro-"));

        asFilter = (opt.asFilter ? opt.asFilter(gapi_data.entries) : {});
        filtro = flterMatrix(gapi_data, filtersList);

        _filtersContainerClassList();
        _searchContainerClassList();
        _createTable(gapi_data);
        _createFilters(gapi_data); 

        document.querySelector("#ponchoTableSearchCont")
            .style.display = "block";
        document.querySelector("#ponchoTable")
            .classList.remove("state-loading");

        initDataTable();
    };


    /**
     * Obtiene el sheet e inicializa la tabla y filtros.
     * 
     * @param {string} url URL del dataset JSON
     */
    const getSheetValues = url => {
        jQuery.getJSON(url, function(data){
            const gapi = new GapiSheetData();
            gapi_data = gapi.json_data(data);
            
            render(gapi_data);
        }); // end async
    };


    /**
     * Obtiene el sheet por número de hoja y nombre del spread.
     * 
     * @param {integer} sheetNumber Número de hoja sin iniciar en 0.
     */
    const getSheetName = sheetNumber => {
        const gapi = new GapiSheetData();
        const uriApi = [
            'https://sheets.googleapis.com/v4/spreadsheets/',
            opt.idSpread, '/?alt=json&key=',
            gapi.gapi_key].join("");

        jQuery.getJSON(uriApi, function function_name(response) {
            var sheetName = response.sheets[sheetNumber - 1].properties.title;
            const uriSheet = gapi.url(sheetName, opt.idSpread);
            getSheetValues(uriSheet);
        });
    };

    // Según el caso en optiones.
    if (opt.jsonData){
        const headers = Object.fromEntries(
            Object.keys(opt.jsonData[0]).map(e => [e,e])
        );
        const data = {entries: opt.jsonData, headers: headers};
        render(data);
    } else if (opt.jsonUrl) {
        getSheetValues(opt.jsonUrl);
    } else if(opt.hojaNombre && opt.idSpread){
        const url = new GapiSheetData().url(opt.hojaNombre, opt.idSpread);
        getSheetValues(url);
    } else if(opt.hojaNumero && opt.idSpread){
        getSheetName(opt.hojaNumero);
    } else {
        throw "¡Error! No hay datos suficientes para crear la tabla.";
    }

};


/**
 * POPOVER
 */
var content_popover = document.getElementById("content-popover");

function popshow(){
    content_popover.classList.toggle("hidden");
}

function pophidde(){
    content_popover.classList.add("hidden");
}

/**
 * PONCHO UBICACIÓN
 * 
 * @param {object} options 
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2023 Argentina.gob.ar
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
var ponchoUbicacion = function(options) {
    var urlProvincias = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geoprovincias.json';
    var urlLocalidades = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geolocalidades.json';
    var provincias;
    var localidades;
    var iProvincia = jQuery('input[name="submitted[' + options.provincia + ']"]');
    var iLocalidad = jQuery('input[name="submitted[' + options.localidad + ']"]');
    var sProvincia;
    var sLocalidades;

    function init() {
        urlProvincias = (options.urlProvincias ? options.urlProvincias : urlProvincias);
        urlLocalidades = (options.urlLocalidades ? options.urlLocalidades : urlLocalidades);

        jQuery.getJSON(urlProvincias, function(data) {
            provincias = parseJsonProvincias(data);
            sProvincia = getSelectProvincias(provincias);
            addProvEvent();
            iProvincia.after(sProvincia);
            jQuery(sProvincia).select2();
        });

        jQuery.getJSON(urlLocalidades, function(data) {
            localidades = parseJsonLocalidades(data);
            sLocalidades = getSelectLocalidades(localidades, sProvincia.val());
            addLocEvent();
            iLocalidad.after(sLocalidades);
            jQuery(sLocalidades).select2();
        });
        iProvincia.hide();
        iLocalidad.hide();
    }


    /**
     * 
     * @param {*} data 
     * @returns 
     */
    function parseJsonProvincias(data) {
        provincias = [];
        data.results.forEach(function(provincia, index) {
            provincias.push(provincia);
        });
        return provincias;
    }


    /**
     * 
     * @param {*} string 
     * @returns 
     */
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    /**
     * 
     * @param {*} data 
     * @returns 
     */
    function parseJsonLocalidades(data) {
        localidades = [];
        data.results.forEach(function(localidad, index) {
            localidades.push(localidad);
        });
        return localidades;
    }


    /**
     * 
     */
    function addProvEvent() {
        sProvincia.on('change', function(e) {
            iProvincia.val('');
            iLocalidad.val('');
            sLocalidades.children('option:not(:first)').remove();
            if (sProvincia.val() != '') {
                iProvincia.val(sProvincia.find(":selected").text());
                var sAux = getSelectLocalidades(localidades, sProvincia.val());
                var sOpt = sAux.find('option');
                sLocalidades.append(sOpt);
                sLocalidades.val('');
            }
        });
    }


    /**
     * 
     */
    function addLocEvent() {
        sLocalidades.on('change', function(e) {
            iLocalidad.val('');
            if (sLocalidades.val() != '') {
                iLocalidad.val(sLocalidades.find(":selected").text());
            }
        });
    }


    /**
     * 
     * @param {*} name 
     * @param {*} id 
     * @param {*} optionList 
     * @param {*} required 
     * @param {*} emptyOption 
     * @param {*} selected_item 
     * @returns 
     */
    function getDropDownList(name, id, optionList, required = false,
        emptyOption = false, selected_item = false) {

        var combo = jQuery("<select></select>")
            .attr("id", id).attr("name", name)
            .addClass("form-control form-select")
            .prop('required', required);
        
        if (emptyOption) {
            combo.append("<option value=''>Seleccione una opción</option>");
        }

        jQuery.each(optionList, function(i, el) {
            let selected = '';
            if (selected_item == el.nombre) {
                selected = 'selected="selected"';
            }
            combo.append(
                "<option value='" + el.id + "' " + selected + ">" +
                el.nombre +
                "</option>"
            );
        });
        return combo;
    }


    /**
     * 
     * @param {*} provincias 
     * @returns 
     */
    function getSelectProvincias(provincias) {
        var provinciasOptions = [];

        provinciasOptions = provincias.sort(function(a, b) {
            var nameA = a.nombre.toUpperCase();
            var nameB = b.nombre.toUpperCase();
            return nameA.localeCompare(nameB);
        });
        var required = iProvincia.prop('required');
        var select = getDropDownList(
            'sProvincias', 'sProvincias', provinciasOptions,
            required, true, iProvincia.val()
        );
        return select;
    }


    /**
     * 
     * @param {*} localidades 
     * @param {*} provincia 
     * @returns 
     */
    function getSelectLocalidades(localidades, provincia) {
        var locaSelect = {};
        var required = iLocalidad.prop('required');
        var select = null;

        if (iProvincia.val()) {
            locaSelect = localidades
                .filter(function(localidad) {
                    return String(localidad.provincia.id) == String(provincia);
                })
                .map(function(a) {
                    if (a.departamento.nombre) {
                        a.nombre = capitalizeFirstLetter(
                            a.departamento.nombre.toLowerCase()) + ' - ' + 
                            capitalizeFirstLetter(a.nombre.toLowerCase());
                    }
                    return a;
                })
                .sort(function(a, b) {
                    var nameA = a.nombre.toUpperCase();
                    var nameB = b.nombre.toUpperCase();
                    return nameA.localeCompare(nameB);
                });
            
            emptyOption = (iLocalidad.val() ? true : false);
            select = getDropDownList(
                'sLocalidades', 'sLocalidades',
                locaSelect, required, emptyOption, iLocalidad.val()
            );
        } else {
            select = getDropDownList(
                'sLocalidades', 'sLocalidades',
                [], required, true, false
            );
        }

        return select;
    }

    init();
};

/**
 * PONCHO CHART
 * 
 * @param {object} opt Objeto con configuraciones. 
 */
function ponchoChart(opt) {
    "use strict";

    if (chequeoOpcionesObligatorias(opt)) {
        if (opt.jsonInput) {
            console.log(opt.jsonInput);
            drawChart(jQuery.parseJSON(opt.jsonInput), opt);
        } else {
            var url = opt.jsonUrl ? opt.jsonUrl : 
                "https://sheets.googleapis.com/v4/spreadsheets/" 
                + opt.idSpread 
                + "/values/"
                + opt.hojaNombre
                + "?alt=json&key=AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY";
            jQuery.getJSON(url, function(data) {
                drawChart(data, opt)
            });
        }
    } else {
        //informo por consola el faltante
        if (typeof opt.idSpread == "undefined" || opt.idSpread == "") {
            console.warn("Completar valor para la opción de Configuración idSpread");
        }
        if (typeof opt.hojaNombre == "undefined" || opt.hojaNombre == "") {
            console.warn("Completar valor para la opción de Configuración hojaNombre");
        }
        if (typeof opt.tipoGrafico == "undefined" || opt.tipoGrafico == "") {
            console.warn("Completar valor para la opción de Configuración tipoGrafico");
        }
        if (typeof opt.idComponenteGrafico == "undefined" || opt.idComponenteGrafico == "") {
            console.warn("Completar valor para la opción de Configuración idComponenteGrafico");
        }
        if (getTipoGrafico(opt.tipoGrafico) == "") {
            console.warn("Ingrese un tipo de gafico válido");
        }
    }


    /**
     * Retrona el código de gráfico según la elección del usuario.
     * 
     * @param {string} tipo Tipo de gráfico 
     * @returns {string}
     */
    function getTipoGrafico(tipo) {
        const options = {    
            Line: "line",
            Bar: "bar",
            Pie: "pie",
            Area: "line",
            "Horizontal Bar": "horizontalBar",
            "Stacked Bar": "bar",
            Mixed: "mixed",
            HeatMap: "heatmap",
            default: ""
        };
        return (options[tipo] || options["default"]);
    }


    /**
     * Gráfico de torta
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} tipoGrafico 
     * @param {*} colores 
     * @param {*} idGrafico 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoTorta(etiquetas, datos, tipoGrafico, colores, idGrafico, 
                posicionLeyendas, toltips, mostrarLeyendas) {
        const $grafica = document.getElementById(idGrafico);
        const dataset = {
            data: datos,
            borderColor: colores,
            backgroundColor: colores,
            borderWidth: 2,
        };
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: [
                    dataset,
                ]
            },
            options: {
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas
                },
                responsive: true,
                tooltips: toltips,
            }
        });
    }


    /**
     * Gráfico de línea (simple)
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} tipoGrafico 
     * @param {*} color 
     * @param {*} label 
     * @param {*} empiezaYenCero 
     * @param {*} idGrafico 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoLineaSimple(etiquetas, datos, tipoGrafico, color, label, 
                empiezaYenCero, idGrafico, posicionLeyendas, toltips, 
                mostrarLeyendas) {
        const $grafica = document.getElementById(idGrafico);
        const dataset = {
            data: datos,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            lineTension: 0,
            fill: false,
            label: label,
        };
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: [
                    dataset,
                ]
            },
            options: {
                legend: { display: mostrarLeyendas, position: posicionLeyendas },
                tooltips: toltips,
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }]
                }
            }
        });
    }


    /**
     * Gráfico de barra (simple)
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} tipoGrafico 
     * @param {*} color 
     * @param {*} label 
     * @param {*} empiezaYenCero 
     * @param {*} idGrafico 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoAreaBarraSimple(etiquetas, datos, tipoGrafico, color, 
                label, empiezaYenCero, idGrafico, posicionLeyendas, 
                toltips, mostrarLeyendas) {
        const $grafica = document.getElementById(idGrafico);
        const dataset = {
            data: datos,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            lineTension: 0,
            label: label,
        };
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: [
                    dataset,
                ]
            },
            options: {
                legend: {
                    display: mostrarLeyendas, 
                    position: posicionLeyendas
                },
                tooltips: toltips,
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }]
                }
            }
        });
    }


    /**
     * Gráfico de barra horizontal (simple)
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} tipoGrafico 
     * @param {*} color 
     * @param {*} label 
     * @param {*} empiezaYenCero 
     * @param {*} idGrafico 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoBarraHorizontalSimple(etiquetas, datos, tipoGrafico, color, 
                label, empiezaYenCero, idGrafico, posicionLeyendas, 
                toltips, mostrarLeyendas) {
        const $grafica = document.getElementById(idGrafico);
        const dataset = {
            data: datos,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            lineTension: 0,
            label: label,
        };
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: [
                    dataset,
                ]
            },
            options: {
                legend: {
                    display: mostrarLeyendas, 
                    position: posicionLeyendas
                },
                tooltips: toltips,
                responsive: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }]
                }
            }
        });
    }


    /**
     * Gráfico complejo
     * 
     * @param {*} etiquetas 
     * @param {*} tipoGrafico 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} empiezaYenCero 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoComplejo(etiquetas, tipoGrafico, datos, idGrafico, 
                empiezaYenCero, posicionLeyendas, toltips, mostrarLeyendas) {
        const $grafica = document.getElementById(idGrafico);
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: datos
            },
            options: {
                legend: {
                    display: mostrarLeyendas, 
                    position: posicionLeyendas,
                    labels: { 
                        textAlign: "center"
                    }
                },
                tooltips: toltips,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }],
                },
            }
        });
    }


    /**
     * Gráfico complejo horizontal
     * 
     * @param {*} etiquetas 
     * @param {*} tipoGrafico 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} empiezaYenCero 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoComplejoHorizontal(etiquetas, tipoGrafico, datos, 
                idGrafico, empiezaYenCero, posicionLeyendas, 
                toltips, mostrarLeyendas) {
        const $grafica = document.getElementById(idGrafico);
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: datos
            },
            options: {
                legend: {
                    display: mostrarLeyendas, 
                    position: posicionLeyendas, 
                    labels: {
                        textAlign: "center"
                    }
                },
                tooltips: toltips,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }],
                },
            }
        });
    }


    /**
     * Gráfico complejo (stacked)
     * 
     * @param {*} etiquetas 
     * @param {*} tipoGrafico 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} empiezaYenCero 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoComplejoStacked(etiquetas, tipoGrafico, datos, idGrafico,
                empiezaYenCero, posicionLeyendas, toltips, mostrarLeyendas) {
        const $grafica = document.getElementById(idGrafico);
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: datos
            },
            options: {
                legend: {
                    display: mostrarLeyendas, 
                    position: posicionLeyendas, 
                    labels: { textAlign: "center" }
                },
                tooltips: toltips,
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        },
                        stacked: true,
                    }],
                    xAxes: [{ stacked: true }],
                },
            }
        });
    }


    /**
     * 
     * @param {*} etiquetas 
     * @param {*} tipoGrafico 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} empiezaYenCero 
     * @param {*} posicionLeyendas 
     * @param {*} indice 
     * @param {*} label1 
     * @param {*} label2 
     * @param {*} mostrarLeyendas 
     */
    function graficoComplejoMixed(etiquetas, tipoGrafico, datos, idGrafico, 
                empiezaYenCero, posicionLeyendas, indice, label1, label2, 
                mostrarLeyendas) {
        const $grafica = document.getElementById(idGrafico);
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: datos
            },
            options: { 
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas,
                    labels: {
                        textAlign: "center"
                    }
                },
                tooltips: {
                enabled: true,
                mode: "single",
                callbacks: {
                    label: function(tooltipItems, data) {
                        var text = "";
                        if (indice == 2){
                            text = "%";
                        } else if (tooltipItems.datasetIndex == indice){
                            text = "%";
                        }
                        var value = numeroFormateado(tooltipItems.yLabel);
                        return data.datasets[tooltipItems.datasetIndex].label 
                            + ": " + value + " " + text;
                    }
                }
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            id: "left-y-axis",
                            type: "linear",
                            position: "left",
                            ticks: {
                                beginAtZero: empiezaYenCero,
                                callback: function(value) {
                                    var text = "";
                                    if (indice == 1 || indice == 2){
                                        text = "%";
                                    }
                                    return value + text;
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: label2,
                                fontColor: "black"
                            }
                        }, 
                        {
                            id: "right-y-axis",
                            type: "linear",
                            position: "right",
                            ticks: {
                                beginAtZero: empiezaYenCero,
                                callback: function(value) {
                                    var text = "";
                                    if (indice == 0 || indice == 2){
                                        text = "%";
                                    }
                                    return value + text;
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: label1,
                                fontColor: "black"
                            }
                        }
                    ],
                },
            }
        });
    }


    /**
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} labelsY 
     * @param {*} rango 
     * @param {*} labelX 
     * @param {*} labelY 
     * @param {*} labelValor 
     * @param {*} titulo 
     * @param {*} mostrarYaxis 
     * @param {*} posicionLeyendas 
     * @param {*} mostrarLeyendas 
     */
    function graficoHeatMap(etiquetas, datos, idGrafico, labelsY, rango, 
                labelX, labelY, labelValor, titulo, mostrarYaxis, 
                posicionLeyendas, mostrarLeyendas) {

        const $grafica = document.getElementById(idGrafico);

        var options = {
            series: datos,
            chart: {
                height: 650,
                type: "heatmap",
            },
            dataLabels: {
                enabled: false
            },
            title: {
                text: titulo
            },
            tooltip: {
                custom: function({series, seriesIndex, dataPointIndex, w}) {
                var value = series[seriesIndex][dataPointIndex];
                value = numeroFormateado(value);
                return "<div class=\"arrow_box\">" +
                    "<span>" + labelX + ": " + labelsY[seriesIndex] + "<br>" +
                    labelY + ": " + w.globals.labels[dataPointIndex] + "<br>" +
                    labelValor + ": " + value + "</span>" +
                    "</div>"
                }
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    useFillColorAsStroke: false,
                    colorScale: {
                        ranges: rango
                    }
                }
            },
            yaxis: {
                show: mostrarYaxis,
            },
            legend: {
                show: mostrarLeyendas,
                position: posicionLeyendas,
            },
            responsive: [{
                breakpoint: 1000,
                options: {
                    yaxis: {
                        show: false,
                    },
                    legend: {
                        show: mostrarLeyendas,
                        position: "top",
                    },
                },
            }]
        };

        var chart = new ApexCharts($grafica, options);
        chart.render(); 

        const collection = document.getElementsByClassName("apexcharts-toolbar");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display = "none";
        } 
    }


    /**
     * 
     * @param {*} idTag 
     * @param {*} titulo 
     */
    function graficaTitulo(idTag, titulo) {
        if (document.getElementById(idTag)) {
            document.getElementById(idTag).innerHTML = titulo;
        }
    }


    /**
     * 
     * @param {*} opt 
     * @returns 
     */
    function chequeoOpcionesObligatorias(opt) {
        var chequeo = false;
        if (((opt.idSpread  && opt.hojaNombre) || opt.jsonUrl || opt.jsonInput) && 
            (typeof opt.tipoGrafico != "undefined" && opt.tipoGrafico != "") && 
            (typeof opt.idComponenteGrafico != "undefined" && opt.idComponenteGrafico != "") && 
            (getTipoGrafico(opt.tipoGrafico) != "")){
            chequeo = true;
        }
        return chequeo;
    }


    /**
     * 
     * @param {*} numero 
     * @returns 
     */
    function numeroFormateado(numero) {
        var value = numero.toString().replace(".",",");
        var array = value.split(",");
        var result1 = new Intl.NumberFormat("es-AR", {maximumFractionDigits:2 }).format(array[0]);
        if (array.length > 1){
            value = result1.concat(",",array[1].substr(0,2));
        } else {
            value = result1;
        }
        return value;
    }


    /**
     * 
     * @param {*} data 
     * @param {*} opt 
     */
    function drawChart(data, opt) {
        var etiquetas = [];
        var filteredTitleName = [];
        var filteredTitlePos = [];
        var color = "";
        var colores = [];
        var codigosColores = [];
        var columnas = [];
        var valores = [];
        var datos = [];
        var cantDatos = 0;
        var urlOrigen = "";
        var toltips = "";
        var tipoGraficosMixed = [];
        var indicePorcentajeMixed = 0;
        var porcentajesMixed = [];
        var labelsYCortos = [];
        var indiceNombreCorto = 0;
        var posicionLeyendas = opt.posicionLeyendas ? opt.posicionLeyendas : "top";

        var mostrarLeyendas = "";
        if (typeof opt.mostrarLeyendas == "undefined"){
            mostrarLeyendas = true;
        } else {
            mostrarLeyendas = opt.mostrarLeyendas;
        }

        var mostrarTotal = "";
        if (typeof opt.mostrarTotalStacked == "undefined"){
            mostrarTotal = true;
        } else {
            mostrarTotal = opt.mostrarTotalStacked;
        }

        var tipoGrafico = getTipoGrafico(opt.tipoGrafico);
        var listado = data["values"];

        //TITULOS
        jQuery.each(Object.keys(listado[0]), function(index, key) {
            if (listado[0][index].substr(0, 5) == "eje-y") {
                var split = listado[0][index].split("-");
                var pos = split[0] + split[1];
                filteredTitleName.push(pos);
                filteredTitlePos.push(index);
            } else if (listado[0][index] == "nombre-corto"){
                if (tipoGrafico == "heatmap"){
                    indiceNombreCorto = index;
                }
            }
        });


        jQuery.each(listado, function(row, value) {
            if (row == 0) { //construyo arrays para los dataset, recupero colores y labels
                jQuery.each(filteredTitlePos, function(index, title) {
                    var split = listado[row][filteredTitlePos[index]].split("-");
                    var pos = split[0] + split[1];
                    valores[pos] = []; //construyo los array para los dataset
                    colores.push(split[2]); //recupero colores

                    if (tipoGrafico == "mixed") {
                        if (split.length > 3){ //ingresaron un tipo de grafico
                            //verifico que sea un tipo de grafico valido
                            if (split[3] == "barra" || split[3] == "linea") {
                                //recupero tipo de grafico para cada dataset   
                                tipoGraficosMixed.push(split[3]);
                            } else { //seteo graficos por defecto
                                if (index == 0) {
                                    //por defecto seteo barra
                                    tipoGraficosMixed.push("barra");
                                }
                                if (index == 1) {
                                    //por defecto seteo linea
                                    tipoGraficosMixed.push("linea");
                                }
                            }
                        } else { //seteo graficos por defecto
                            if (index == 0) {
                                // por defecto seteo barra
                                tipoGraficosMixed.push("barra");
                            }
                            if (index == 1) {
                                // por defecto seteo linea
                                tipoGraficosMixed.push("linea");
                            }
                        }
                    }

                });
            }

            if (row == 1) {
                jQuery.each(filteredTitlePos, function(index, title) {
                    if (tipoGrafico != "pie") {
                        if (tipoGrafico == "heatmap") {
                            //recupero etiquetas (eje x)
                            etiquetas.push(listado[row][filteredTitlePos[index]]); 
                        } else {
                            //recupero columnas para label
                            columnas.push(listado[row][filteredTitlePos[index]]); 
                            cantDatos = cantDatos + 1;
                        }
                    } else {
                        //recupero las etiquetas de la torta
                        etiquetas.push(listado[row][filteredTitlePos[index]]); 
                    }
                });
            }

            if (row > 1) { //recupero los datos para los dataset y los colores para torta
                var label = false;
                jQuery.each(filteredTitlePos, function(index, title) {
                    //Detectar si es etiqueta x
                    var split = listado[0][filteredTitlePos[index]].split("-");
                    var pos = split[0] + split[1];

                    if (tipoGrafico == "pie") { //recupero datos para la torta
                        valores[pos].push(listado[row][filteredTitlePos[index]]);
                    } else {
                        if (tipoGrafico == "heatmap") {

                            if (label == false) {
                                //recupero las columnas (eje y)
                                columnas.push(listado[row][0]); 
                                label = true;
                                cantDatos = cantDatos + 1;
                            }
                            if (index != indiceNombreCorto) {
                                //recupero datos
                                valores[pos].push(listado[row][filteredTitlePos[index]]);
                            }
                            if (index + 2 == indiceNombreCorto) {
                                if (typeof listado[row][index + 2] == "undefined"){
                                    //en caso que no completen nombre-corto
                                    labelsYCortos.push("*");
                                } else {
                                    //recupero labels Y cortos
                                    labelsYCortos.push(listado[row][index + 2]); 
                                }
                            }

                        } else {

                            if (label == false) {
                                //recupero las etiquetas
                                etiquetas.push(listado[row][0]); 
                                label = true;
                            }
                            //recupero datos
                            valores[pos].push(listado[row][filteredTitlePos[index]]); 
                        }
                    }
                });
            }
        });



        if (tipoGrafico == "pie") {
            var datosTorta = [];

            jQuery.each(Object.keys(filteredTitleName), function(index, key) {
                var pos = filteredTitleName[index];

                if (valores.hasOwnProperty(pos)) {
                    datosTorta.push(valores[pos]);
                }
            });
            datos = datosTorta;

        } else if (cantDatos == 1) { //es un solo juego de datos

            jQuery.each(Object.keys(filteredTitleName), function(index, key) {
                var pos = filteredTitleName[index];

                if (valores.hasOwnProperty(pos)) {
                    datos = valores[pos];
                }
            });
        }

        if (tipoGrafico == "mixed") {
            var cadena = opt.porcentajesMixed ? opt.porcentajesMixed : "";
            if (cadena.length > 0) {
                porcentajesMixed = cadena.split(",");
            }
        }

        //seteo toltips para mostrar porcentaje o no
        if (opt.porcentajes == true) {
        
            if (tipoGrafico == "line" && cantDatos > 1){
                //seteo tooltips
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ": " + value + "%";
                        }
                    },
                    mode: "index",
                    intersect: false,
                };
            } else if  (tipoGrafico == "pie"){
                //seteo tooltips
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data["labels"][tooltipItem.index] + ": " +  value + "%";
                        }
                    }
                };

            } else if  (opt.tipoGrafico == "Stacked Bar"){
                //seteo tooltips
                if (mostrarTotal == true) {
                    toltips = {
                        enabled: true,
                        mode: "index",
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[tooltipItem.datasetIndex].label + ": " +  value + "%";
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                                return "Total: " + new Intl.NumberFormat("es-AR", {maximumFractionDigits:2 }).format(total) + "%";
                            }
                        }
                    };
                } else {
                    toltips = {
                        enabled: true,
                        mode: "index",
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[tooltipItem.datasetIndex].label + ": " +  value + "%";
                            }
                        }
                    };
                }
            } else {
                //seteo tooltips
                toltips = {
                    enabled: true,
                    mode: "index",
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ": " +  value + "%";
                        }
                    }
                };
            }

        } else {

            if (tipoGrafico == "line" && cantDatos > 1){
                //seteo tooltips
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ": " + value;
                        }
                    },
                    mode: "index",
                    intersect: false,
                };
            } else if  (tipoGrafico == "pie"){
                //seteo tooltips
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data["labels"][tooltipItem.index] + ": " +  value;
                        }
                    }
                };

            } else if (opt.tipoGrafico == "Stacked Bar" && cantDatos > 1){
                //seteo tooltips
                if (mostrarTotal == true) {
                    toltips = {
                        enabled: true,
                        mode: "index",
                        intersect: false,
                            callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[tooltipItem.datasetIndex].label + ": " + value;
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                                return "Total: " + new Intl.NumberFormat("es-AR", {maximumFractionDigits:2 }).format(total);
                            }
                            }
                    };
                } else {
                    toltips = {
                    enabled: true,
                    mode: "index",
                    intersect: false,
                        callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ": " + value;
                        }
                        }
                    };
                }
            } else {
                //seteo tooltips
                toltips = {
                    enabled: true,
                    mode: "index",
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ": " +  value;
                        }
                    }
                };
            }
        }

        //llamo a los constructores para cada tipo de grafico
        if (tipoGrafico == "pie") {

            colores.forEach(function(valor, indice, array) {
                codigosColores.push(ponchoColor(valor));
            });

            graficoTorta(
                etiquetas, datos, tipoGrafico, codigosColores, 
                opt.idComponenteGrafico, posicionLeyendas, toltips, 
                mostrarLeyendas
            );
        }

        if (cantDatos == 1) {
            color = ponchoColor(colores[0]);

            if (opt.tipoGrafico == "Line") {
                graficoLineaSimple(
                    etiquetas, datos, tipoGrafico, color, columnas[0],
                    opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, 
                    toltips, mostrarLeyendas
                );
            }

            if (tipoGrafico == "bar" || opt.tipoGrafico == "Area") {
                graficoAreaBarraSimple(
                    etiquetas, datos, tipoGrafico, color, columnas[0], 
                    opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, 
                    toltips, mostrarLeyendas
                );
            }

            if (tipoGrafico == "horizontalBar") {
                graficoBarraHorizontalSimple(
                    etiquetas, datos, tipoGrafico, color, columnas[0], 
                    opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, 
                    toltips, mostrarLeyendas
                );
            }

        }

        if (cantDatos > 1) {
            if (tipoGrafico == "heatmap") {
                if ((typeof opt.heatMapColors != "undefined" && opt.heatMapColors != "") && 
                    (typeof opt.heatMapColorsRange != "undefined" && opt.heatMapColorsRange != "")){

                    var datosFull = [];
                    var labelX = "labelFila";
                    var labelY = "labelColumna";
                    var labelValor = "labelValor";

                    if ((typeof opt.datosTooltip != "undefined") && (opt.datosTooltip.length > 0)){
                        if ((typeof opt.datosTooltip[0] != "undefined") && 
                            (typeof opt.datosTooltip[0].labelFila != "undefined")){
                            labelX = opt.datosTooltip[0].labelFila;
                        }
                        if ((typeof opt.datosTooltip[1] != "undefined") && 
                            (typeof opt.datosTooltip[1].labelColumna != "undefined")){
                            labelY = opt.datosTooltip[1].labelColumna
                        };
                        if ((typeof opt.datosTooltip[2] != "undefined") && 
                            (typeof opt.datosTooltip[2].labelValor != "undefined")){
                            labelValor = opt.datosTooltip[2].labelValor;
                        }
                    }                        

                    //getDatos
                    jQuery.each(Object.keys(filteredTitleName), function(index, key) {
                        var pos = filteredTitleName[index];
                        if (valores.hasOwnProperty(pos)) {
                            datos = valores[pos];
                            datosFull.push(datos);
                        };
                    });

                    var series = [];

                    for (var i=0;i<columnas.length;i++) {
                        var data = [];
                        for (var l=0;l<etiquetas.length;l++) {
                            var datos = {
                                x: etiquetas[l],
                                y: parseInt(datosFull[l][i])
                            };

                            data.push(datos);
                        } 

                        var serie = {
                            name: labelsYCortos[i] != "*" ? labelsYCortos[i] : columnas[i],
                            data: data
                        } 

                        series.push(serie);
                    }   

                    var rango = [];

                    //construyo range object
                    for (var i=0; i<opt.heatMapColorsRange.length -1; i++){
                            var data = {
                            from: opt.heatMapColorsRange[i],
                            to: opt.heatMapColorsRange[i + 1],
                            color: ponchoColor(opt.heatMapColors[i])
                            };
                        rango.push(data);
                    }

                    var mostrarYaxis = "";
                    if (typeof opt.mostrarEjeY == "undefined"){
                        mostrarYaxis = true;
                    } else {
                        mostrarYaxis = opt.mostrarEjeY;
                    }

                    graficoHeatMap(
                        etiquetas, series, opt.idComponenteGrafico, columnas, 
                        rango, labelX, labelY, labelValor, opt.tituloGrafico, 
                        mostrarYaxis, posicionLeyendas, mostrarLeyendas);

                } else {
                    //informo por consola el faltante
                    if (typeof opt.heatMapColors == "undefined" || opt.heatMapColors == "") {
                        console.log("Completar vector con valores para los colores");
                    }

                    if (typeof opt.heatMapColorsRange == "undefined" || opt.heatMapColorsRange == "") {
                        console.log("Completar vector con el rango de valores para los colores");
                    }
                }
            } else {

                var datasets = [];
                var indiceColor = 0;

                //getColores
                colores.forEach(function(valor, indice, array) {
                    codigosColores.push(ponchoColor(valor));
                });
                var indiceMixed = 0;

                //getDatos
                jQuery.each(Object.keys(filteredTitleName), function(index, key) {
                    var pos = filteredTitleName[index];
                    if (valores.hasOwnProperty(pos)) {

                        datos = valores[pos];

                        if (opt.tipoGrafico == "Line") {
                            //construyo datasets
                            var dataset = {
                                label: columnas[indiceColor],
                                data: datos,
                                borderColor: codigosColores[indiceColor],
                                fill: false,
                                borderWidth: 2,
                                lineTension: 0,
                                backgroundColor: codigosColores[indiceColor], 
                            };
                        } else if (opt.tipoGrafico == "Bar" || 
                            opt.tipoGrafico == "Area" || 
                            opt.tipoGrafico == "Horizontal Bar" || 
                            opt.tipoGrafico == "Stacked Bar") {
                            //construyo datasets
                            var dataset = {
                                label: columnas[indiceColor],
                                data: datos,
                                borderColor: codigosColores[indiceColor],
                                backgroundColor: codigosColores[indiceColor], //BARRAS y AREA
                                borderWidth: 2,
                                lineTension: 0, //linea  y area
                            };
                        } else if (opt.tipoGrafico == "Mixed"){ 
                            var tipo = tipoGraficosMixed[indiceMixed];
                            //construyo datasets
                            if (tipo == "barra") {
                                var dataset = {
                                    label: columnas[indiceColor],
                                    data: datos, 
                                    backgroundColor: codigosColores[indiceColor],
                                    // This binds the dataset to the left y axis
                                    yAxisID: "left-y-axis",
                                    type: "bar",
                                };
                            } else if (tipo == "linea"){
                                var dataset = {
                                    label: columnas[indiceColor],
                                    data: datos, 
                                    borderColor: codigosColores[indiceColor],
                                    backgroundColor: codigosColores[indiceColor],
                                    // Changes this dataset to become a line
                                    type: "line",
                                    // This binds the dataset to the right y axis
                                    yAxisID: "right-y-axis",
                                    fill: false,
                                };
                            }
                        }

                        datasets.push(dataset);
                        indiceColor = indiceColor + 1;
                        indiceMixed = indiceMixed + 1;
                    }
                });

                if (tipoGrafico == "mixed") { 
                    if (porcentajesMixed.length == 2) {
                        //los 2 dataset usan porcentaje
                        indicePorcentajeMixed = 2; 
                    } else if (porcentajesMixed.length == 1){

                        if (porcentajesMixed[0] == "eje-y1") {
                            //solo el primer dataset usa porcentaje
                            indicePorcentajeMixed = 0; 
                        } else if (porcentajesMixed[0] == "eje-y2") {
                            //solo el segundo dataset usa porcentaje
                            indicePorcentajeMixed = 1; 
                        }

                    } else  {
                        //ningun dataset usa escala de porcentaje
                        indicePorcentajeMixed = 3;
                    } 
                }
                

                if (opt.tipoGrafico == "Stacked Bar"){ 
                    graficoComplejoStacked(
                        etiquetas, tipoGrafico, datasets, 
                        opt.idComponenteGrafico, opt.ejeYenCero, 
                        posicionLeyendas, toltips, mostrarLeyendas);
                } else if (opt.tipoGrafico == "Mixed") {
                    graficoComplejoMixed(
                        etiquetas, "bar", datasets, opt.idComponenteGrafico, 
                        opt.ejeYenCero, posicionLeyendas, 
                        indicePorcentajeMixed, columnas[0], columnas[1], 
                        mostrarLeyendas);
                } else if (opt.tipoGrafico == "Horizontal Bar") {
                    graficoComplejoHorizontal(
                        etiquetas, tipoGrafico, datasets, 
                        opt.idComponenteGrafico, opt.ejeYenCero, 
                        posicionLeyendas, toltips, mostrarLeyendas);
                } else {
                    graficoComplejo(
                        etiquetas, tipoGrafico, datasets, 
                        opt.idComponenteGrafico, opt.ejeYenCero, 
                        posicionLeyendas, toltips, mostrarLeyendas);
                }
            }

        }

        //verifica si viene titulo del grafico, si no viene no dibuja nada
        if (opt.tituloGrafico != "" && typeof opt.tituloGrafico != "undefined") {
            graficaTitulo(opt.idTagTituloGrafico, opt.tituloGrafico);
        }
    } 
}


/**
 * GAPI LEGACY
 * Retorna la estructura de la versión 3 de la API GoogleSheets.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @summary La estructura del objeto que retorna es de este modo:
 * @example
 * // Estructura de retorno
 *  .
 *  \--feed
 *      \-- entry
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 *          |-- gsx$[nombre columna]
 *          |   \-- $t
 * 
 * @param  {object} response Response JSON.
 * @return {object} JSON con la estructura V3 de la api de google sheet
 */
const gapi_legacy = (response) => {

  const keys = response.values[0];
  const regex = / |\/|_/ig;
  let entry = [];

  response.values.forEach((v, k) => {
    if(k > 0){
        let zip = {};
        for(const i in keys){
            const d = (v.hasOwnProperty(i))? v[i].trim() : "";
            zip[`gsx$${keys[i].toLowerCase().replace(regex, "")}`] = {"$t": d};
        }
        entry.push(zip);
    }
  });

  return {"feed": {"entry": entry}};
};


/* module.exports REMOVED */

/**
 * PONCHO MAP
 *
 * @summary Generador de mapas utilizando OpenStreetMap / leafleft
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,utils.js,
 * MarkerCluster.Default.css,MarkerCluster.css
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 * @see https://geojson.org/
 * @see https://leafletjs.com/
 *
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
class PonchoMap {
    constructor(data, options){
        const defaults = {
            error_reporting: true,
            no_info: false,
            title: false,
            id: "id",
            template: false,
            template_structure: {
                // lead: [],
                // header: false,
                // title: "",
                // mixing: [],
                // values: [],
                // exclude: [],
                container_classlist: ["info-container"],
                definition_classlist: [],
                definition_list_classlist:["definition-list"],
                definition_list_tag: "dl",
                definition_tag: "dd",
                term_classlist: ["h6", "m-b-0"],
                term_tag: "dt",
                title_classlist: ["h4","color-primary","m-t-0"]
            },
            allowed_tags: [],
            template_innerhtml: false,
            template_markdown: false,
            ui_theme: false,
            map_theme: false,
            theme_tool: true,
            theme: "default",
            default_themes: [
                ["default", "Original"], 
                ["contrast", "Alto contraste"],
                ["dark", "Oscuro"],
                ["grayscale", "Gris"],
                ["sepia", "Sepia"],
                ["blue", "Azul"],
                ["relax", "Relax"]
            ],
            markdown_options: {
                extensions :[
                    "details",
                    "images",
                    "alerts",
                    "numbers",
                    "ejes",
                    "button",
                    "target",
                    "bootstrap-tables",
                    "video"
                ],
                simpleLineBreaks: true,
                tables: true
            },
            render_slider: true,
            scope: "",
            slider: false,
            scroll: false,
            hash: false,
            headers: {},
            header_icons: [],
            content_selector: false,
            map_selector: "map",
            anchor_delay: 0,
            slider_selector: ".slider",
            map_view: [-40.44, -63.59],
            map_anchor_zoom: 16,
            map_zoom: 4,
            min_zoom: 2,
            reset_zoom: true,
            latitud: "latitud",
            longitud: "longitud",
            marker: "azul",
            tooltip: false,
            tooltip_options:{
                permanent: false,
                className: "leaflet-tooltip-own",
                direction: "auto",
                offset: [13,-18], 
                sticky: false,
                opacity: 0.8,
            },
            marker_cluster_options: {
                spiderfyOnMaxZoom: true,
                showCoverageOnHover: false,
                zoomToBoundsOnClick: true,
                maxClusterRadius: 30,
                spiderfyDistanceMultiplier: 0.5,
                spiderLegPolylineOptions: {
                    weight: 1,
                    color: "#666666",
                    opacity: 0.5,
                    "fill-opacity": 0.5
                }
            },
            accesible_menu_extras: [
                {
                    text: "Ayudá a mejorar el mapa",
                    anchor: "https://www.argentina.gob.ar/sugerencias",
                }
            ]
        };
        let opts = Object.assign({}, defaults, options);
        this.error_reporting = opts.error_reporting;
        this.scope = opts.scope;
        this.render_slider = opts.render_slider;
        this.template = opts.template;
        this.template_structure = {
            ...defaults.template_structure,
            ...options.template_structure
        };
        this.template_innerhtml = opts.template_innerhtml;
        this.template_markdown = opts.template_markdown;
        this.markdown_options = opts.markdown_options;
        this.allowed_tags = opts.allowed_tags;
        this.map_selector = opts.map_selector;
        this.headers = this.setHeaders(opts.headers);
        this.header_icons = opts.header_icons;
        this.hash = opts.hash;
        this.scroll = opts.scroll;
        this.map_view = opts.map_view;
        this.anchor_delay = opts.anchor_delay;
        this.map_zoom = opts.map_zoom;
        this.min_zoom = opts.min_zoom;
        this.map_anchor_zoom = opts.map_anchor_zoom;
        this.tooltip_options = opts.tooltip_options;
        this.tooltip = opts.tooltip;
        this.marker_cluster_options = opts.marker_cluster_options;
        this.marker_color = opts.marker;
        this.id = opts.id;
        this.title = opts.title;
        this.theme = opts.theme,
        this.theme_tool = opts.theme_tool,
        this.default_themes = opts.default_themes,
        this.ui_theme = opts.ui_theme;
        this.map_theme = opts.map_theme;
        this.latitude = opts.latitud;
        this.longitude = opts.longitud;
        this.slider = opts.slider;
        this.no_info = opts.no_info;
        this.reset_zoom = opts.reset_zoom;
        this.slider_selector=this._selectorName(opts.slider_selector);
        this.selected_marker;
        this.scope_selector = `[data-scope="${this.scope}"]`;
        this.scope_sufix = `--${this.scope}`;
        this.content_selector = (opts.content_selector ? 
            opts.content_selector : `.js-content${this.scope_sufix}`);
        this.data = this.formatInput(data);
        this.geometryTypes = [
            "Point",
            "LineString",
            "Polygon",
            "MultiPoint",
            "MultiLineString"
        ];
        this.featureStyle = {
            stroke: "dodgerblue",
            "stroke-opacity": 1,
            "stroke-width": 2,
            "fill-opacity": 0.5
        };
        this.accesible_menu_search = [];
        this.accesible_menu_filter = [];
        this.accesible_menu_extras = opts.accesible_menu_extras;
        this.geojson;

        // OSM
        this.map = new L.map(this.map_selector, {renderer:L.svg()}
        ).setView(this.map_view, this.map_zoom);
        this.titleLayer = new L.tileLayer("https://mapa-ign.argentina.gob.ar/osm/{z}/{x}/{-y}.png",
        { 
            attribution: ("Contribuidores: "
                + "<a href=\"https://www.ign.gob.ar/AreaServicios/Argenmap/Introduccion\" " 
                + "target=\"_blank\">"
                + "Instituto Geográfico Nacional</a>, "
                + "<a href=\"https://www.openstreetmap.org/copyright\" "
                + "target=\"_blank\">"
                + "OpenStreetMap</a>")
        });
        this.markers = new L.markerClusterGroup(this.marker_cluster_options);
        this.ponchoLoaderTimeout;
    }


    /**
     * Crea el menú para cambiar de temas
     */
    _menuTheme = () => {
        if(!this.theme_tool){
            return;
        }
        const element = document.querySelectorAll(this.scope_selector);

        const navContainer = document.createElement("ul");
        navContainer.classList.add("pm-unstyled", "pm-tools");

    
        const item = document.createElement("li");
        item.dataset.toggle="true";

        const icon = document.createElement("i");
        icon.setAttribute("aria-hidden", "true");
        icon.classList.add("fa", "fa-adjust");

        const button = document.createElement("button");
        button.title = "Cambiar tema";
        button.classList.add("pm-btn");
        button.appendChild(icon);
        button.setAttribute("role", "button");
        button.setAttribute("aria-label", "Abre el panel de temas");

        const list = document.createElement("ul");
        list.classList.add(
            "pm-container", "pm-unstyled", 
            "pm-p-1", "caret-s", "pm-toggle");

        this.default_themes.map(m => m[0]).map((value, key)  => {
            const buttonTheme = document.createElement("button");
            buttonTheme.dataset.theme = value;
            buttonTheme.textContent = this.default_themes[key][1];
            buttonTheme.classList.add("js-set-theme", "pm-item-link");
            
            const li = document.createElement("li");
            li.appendChild(buttonTheme);

            list.appendChild(li);
        });

        item.appendChild(button);
        item.appendChild(list);
        navContainer.appendChild(item)


        element.forEach(e => {
            e.appendChild(navContainer);
        })


        document
            .querySelectorAll(".js-set-theme")
            .forEach(ele => ele.addEventListener(
                "click", () => {
                    const th = ele.dataset.theme;
                    this.useTheme(th);
                })
            );
    };


    _setTheme = (theme=false, prefix=[])  => {
        const styles = useTheme => prefix.map(m => {
            if(["ui", "map"].includes(m)){
                return `${m}-${useTheme}`;
            }
            return false;
        });

        const element = document.querySelectorAll(this.scope_selector);
        element.forEach(ele => {
            this.default_themes.map(m => m[0]).forEach(th => {
                ele.classList.remove( ...styles(th) )
            });
            ele.classList.add( ...styles(theme) ); 
        });
    }

    useTheme = (theme = false) => {
        const useTheme = (theme ? theme : this.theme);
        this._setTheme(useTheme, ["ui", "map"]);
    }


    useMapTheme = theme => this._setTheme(theme, ["map"]);


    useUiTheme = theme => this._setTheme(theme, ["ui"]);


    _setThemes = () => {
        if(!this.ui_theme && !this.map_theme){
            this.useTheme();
            return;
        }

        if(this.ui_theme){
            this._setTheme(this.ui_theme, ["ui"]);
        }
        if(this.map_theme){
            this._setTheme(this.map_theme, ["map"]);
        }
    }


    /**
     * Es un geoJSON
     * 
     * @summary Valida si un documento JSON psado por parámetro cumple
     * con el estándar geoJSON.
     * @param {object} gj Documento JSON.
     * @returns {boolean} True o False
     */
    isGeoJSON = (gj)=>{
        if(gj?.type === "FeatureCollection"){
            return true;
        }
        return false;
    };

    /**
     * JSON input
     * 
     * @return {object} Listado de entradas con formato `feature` de geoJSON.
     */
    get entries(){
        return this.data.features;
    }

    /**
     * Retrona las entradas en formato geoJSON
     */
    get geoJSON(){
        return this.featureCollection(this.entries);
    }


    /**
     * Retorna los datos de entrada en formato geoJSON
     * 
     * @summary Si los datos de entrada cumplen con el estándar GeoJSON,
     * mantiene la información como está. Si el objeto de entrada no 
     * cumple con el estándar, es tratado como un JSON de 
     * entradas simples.
     * @see https://geojson.org/
     * @return {object} Retorna un documento en formato geoJSON
     */
    formatInput = (input) => {
        if(input.length < 1){
            this.errorMessage(
                "No se puede visualizar el mapa, el documento está vacío", 
                "warning"
            );
        }

        let geoJSON;
        if(this.isGeoJSON(input)){
            geoJSON = input;
        } else {
            const features = this.features(input);
            geoJSON = this.featureCollection(features);
        }
        return this._setIdIfNotExists(geoJSON);
    };

        
    /**
     * Reporta un error bloqueante
     * 
     * @summary Reporta un error bloqueante y ejecuta una excepción 
     * mostrando un mensaje y removiendo el contenedor del mapa.
     * @param {string} text Mensaje de error 
     */
    errorMessage = (text=false, type="danger") => {
        document.querySelectorAll(`#js-error-message${this.scope_sufix}`)
                .forEach(e => e.remove());

        const container = document.createElement("div");
        container.id = `js-error-message${this.scope_sufix}`;
        container.classList.add("poncho-map--message", type);


        const mapIcon = document.createElement("i");
        mapIcon.classList.add(
            "icono-arg-mapa-argentina", "poncho-map--message__icon"
        );

        const title = document.createElement("h2");
        title.classList.add("h6", "title", "sr-only");
        title.textContent = "¡Se produjo un error!";

        container.appendChild(mapIcon);
        container.appendChild(title);

        const messagesList = [
            [
                "En estos momentos tenemos inconvenientes para mostrar el mapa.", 
                "text-center"
            ],
            [
                "<em>Disculpe las molestias</em>", 
                "text-center",
                "p"
            ]
        ];

        messagesList.forEach(entry => {
            const elementTag = (tag) => (
                    typeof tag !== "undefined" || tag ? tag : "p"); 
            const message = document.createElement(elementTag(entry[2]));
            if(typeof entry[1] !== "undefined" || entry[1]){
                message.className = entry[1];
            }
            message.innerHTML = entry[0];
            container.appendChild(message);
        });

        if(this.error_reporting) {
            const node = document.querySelector(
                `${this.scope_selector}.poncho-map`
            );
            node.parentNode.insertBefore(container, node);
            if(type == "danger"){
                document.getElementById(this.map_selector).remove();
            }
        }

        console.error(this.critical_error)
        throw text;
    };


    /**
     * Compone un _feature_ GeoJSON
     * 
     * @param {object} entry Entrada JSON
     * @returns {object} Objeto con formato geoJSON feature.
     */
    feature = (entry) => {
        const latitude = entry[this.latitude];
        const longitude = entry[this.longitude];
        [latitude, longitude].forEach(e => {
            if(isNaN(Number(e))){
                this.errorMessage(
                    `El archivo contiene errores en la definición de `
                    + `latitud y longitud.\n ${e}`
                );
            }
        });

        delete entry[this.latitude];
        delete entry[this.longitude];

        return {
            type: "Feature",
            properties: entry,
            geometry: {
                type: "Point",
                coordinates: [
                    longitude,
                    latitude
                ]
            }
        };
    };


    featureCollection = (features) => { 
        return {
            type: "FeatureCollection",
            features: features
        };
    }; 


    /**
     * Entradas JSON
     * @param {object} entries Entradas JSON 
     * @returns {object}
     */
    features = (entries) => {
        return entries.map(this.feature);
    };


    /**
     * Crea una entrada ID autonumerada si no posee una.
     * 
     * @summary Verifica si en las claves existe una posición asignada
     * a *id*. si no la tuviera genera una automáticamente. Por otro lado, 
     * si el usuario asoció una columna a la opción ID de la 
     * configuración, usa esa.
     * @param {object} entries
     * @return {object}
     */
    _setIdIfNotExists = (entries) => {
        const has_id = entries.features
                .filter((_,k) => k===0)
                .every(e => e.properties.hasOwnProperty("id"));

        if(!has_id){
            const new_entries = entries.features.map(
                (v,k) => {
                    const auto_id = k + 1;
                    const use_title = (this.title && v.properties[this.title] ? 
                            `-${slugify(v.properties[this.title])}` : "");
                    v.properties.id = auto_id + use_title;
                    return v;
                });
            entries.features = new_entries;
        }
        return entries;
    };


    /**
     * Agrega el hash en la barra de url.
     * 
     * @param {string|integer} value
     * @return {undefined}
     */
    addHash = (value) => {
        if(!this.hash || this.no_info){
            return null;
        }
        window.location.hash = `#${value}`;
    };


    /**
     * Obtiene una entrada por su id
     * 
     * @param {integer} id Id de Punto Digital
     * @return {object}
     */
    entry = (id) => {
        return this.entries.find(e => e.properties[this.id] == id);
    }

    /**
     * Busca un término en un listado de entradas.
     * 
     * @param {string} term Término a buscar.
     * @returns {object} Listado filtrado por los match
     */
    searchEntries = (term, dataset) => {
        dataset = (typeof dataset === "undefined" ? this.geoJSON: dataset);
        if(!term){
            return dataset;
        }
        const entries = dataset.filter(e => {
            if(this.searchEntry(term, e.properties)){
                return e;
            };
        })
        return entries;
    };

    /**
     * Busca un término en cada uno de los indices de una entrada.
     */
    searchEntry = (search_term, data) => {
        const search_for = [
            ...new Set([...[this.title], ...this.search_fields])
        ].filter(e => e);

        for(const item of search_for){
            if(!data.hasOwnProperty(item)){
                continue;
            }
            const term = replaceSpecialChars(search_term)
                    .toUpperCase();
            const field = replaceSpecialChars(data[item])
                    .toString()
                    .toUpperCase();
            try {
                if(field.includes(term)){
                    return data;
                }
            } catch (error) {
                console.error(error);
            }
        }
        return null;
    };


    /**
     * Quita la definición a un selector.
     * 
     * @param {string} selector Selector a quitarle la definición.
     * @example
     * // returns foo
     * _selectorName(".foo")
     * @example
     * // returns foo
     * _selectorName("#foo")
     * @return {string} Nombre del selector sin caracter de tipo.
     */
    _selectorName = (selector) => {
        return selector.replace(/^(\.|\#)/, "");
    };


    /**
     * Acomoda la pantalla ubicando el mapa en el borde superior del
     * navegador.
     */
    scrollCenter = () => {
        const pos = document.getElementById(this.map_selector);
        const rect = pos.getBoundingClientRect();
        const pos_center_horizontal = (pos.offsetLeft + pos.offsetWidth) / 2;
        const pos_center_vertical =  rect.top + window.scrollY;
        window.scrollTo({
            top: pos_center_vertical,
            left: pos_center_horizontal,
            behavior: "smooth"
        });
    };


    /**
     * Limpia el contenido.
     * @return {undefined}
     */
    _clearContent = () => document
        .querySelector(`.js-content${this.scope_sufix}`).innerHTML = "";


    /**
     * Abre o cierra el slider.
     * 
     */
    toggleSlider = () => { 
        if(this.no_info){
            return;
        }
        document
            .querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(e => {
                e.classList.toggle(`${this.slider_selector}--in`);
            });

        document
            .querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(panel => {
                panel.style.display = (this.isSliderOpen() ? "block" : "none");  
            });
    };


    /**
     * Hace foto en un feature.
     * @accesibility
     * @param {integer} id Id de la entrada
     * @return {undefined}
     */
    _focusOnFeature = (id) => {
        this.map.eachLayer(e => {
            if(e?.options?.id != id){
                return;
            }
            if(e?._path){
                e._path.focus();
            } else if (e?._icon){
                e._icon.focus();
            }
        });
    };


    /**
     * Ejecuta `toggleSlider()` en el onclick
     * @return {undefined} 
     */
    _clickToggleSlider = () => document
        .querySelectorAll(`.js-close-slider${this.scope_sufix}`)
        .forEach(e => e.addEventListener("click", () => {
            this._clearContent();
            this.toggleSlider();
            this._focusOnFeature(e.dataset.entryId);
        }
    ));


    /**
     * Estado del slider.
     * 
     * @return {boolean} `true` si esta abierto, `false` si esta cerrado.
     */
    isSliderOpen = () => {
        let status = [];
        const qry = document.querySelectorAll(`.js-slider${this.scope_sufix}`);
        qry.forEach(e => {
            if(e.classList.contains(`${this.slider_selector}--in`)){
                status.push(true);
            }
        });
        return status.some(e => e);
    };


    /**
     * Imprime la información del Punto Digital en el slider.
     * @param {object} data feature
     * @return {string} HTML del contenido del slider.
     */
    setContent = (data) => {
        if(this.no_info){
            return;
        }
        this._focusOnSlider();
        if(!this.isSliderOpen()){
            this.toggleSlider();
        }
        const html = (typeof this.template == "function") ? 
            this.template(this, data) : this.defaultTemplate(this, data);

        document
            .querySelectorAll(this.content_selector)
            .forEach(e => {
                e.innerHTML = html;
            });
        document
            .querySelectorAll(`.js-close-slider${this.scope_sufix}`)
            .forEach(e => {
                e.dataset.entryId = data[this.id];
            });      
    };


    /**
     * Foco en marker activo
     * 
     * @summary Hace foco en el slider cuando se hace *click* o 
     * *keypress* sobre un marker. La idea es que un usuario con lector 
     * de pantalla mueva el foto a la información.
     */
    _focusOnSlider = () => {
        if(this.no_info){
            return;
        }
        if(this.isSliderOpen()){
            document.querySelector(`.js-close-slider${this.scope_sufix}`)
                    .focus();
        } else {
            const animation = document.querySelector(
                `.js-slider${this.scope_sufix}`
            );
            if(animation){
                animation.addEventListener("animationend", () => {
                    document
                        .querySelector(`.js-close-slider${this.scope_sufix}`)
                        .focus();
                });
            }
        }
    };


    /**
     * Compila los headers
     * 
     * @summary Compila los headers pasados en el key `headers` con
     * aquellos incorporados en el key `mixing`.
     * @param {object} headers Encabezados para las entradas. 
     * @returns {object} Encabezados con la incoporación de los asignados
     * en los mixings.
     */
    setHeaders = (headers) => {
        if(![
                this.template_structure, 
                this.template_structure.mixing].every(e => e)){
            return headers;
        }

        const new_headers = this.template_structure.mixing.reduce((i, e) => {
            if(![e.key].every(i => i)){
                return;
            }
            return ({ ...i, ...({[e.key]: (e.header ? e.header : "")})});
        }, {});
        return {...headers, ...new_headers};
    };


    /**
     * Mapea los headers.
     * 
     * @return {string} key Key del item.
     */
    header = (key) => {
        return (this.headers.hasOwnProperty(key) ? this.headers[key] : key);
    };


    /**
     * Crea el bloque html para el slider.
     */
    _renderSlider = () => {
        if(!this.render_slider){
            return;
        } else if(this.no_info){
            return;
        }
        document
            .querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(e => e.remove());
        const close_button = document.createElement("button");
        close_button.classList.add(
                "btn", "btn-xs", "btn-secondary", "btn-close", 
                `js-close-slider${this.scope_sufix}`);
        close_button.title = "Cerrar panel";
        close_button.setAttribute("role", "button");
        close_button.setAttribute("aria-label", "Cerrar panel de información");
        close_button.innerHTML = "<span class=\"sr-only\">Cerrar</span>✕";

        const anchor = document.createElement("a");

        anchor.setAttribute("tabindex", 0);
        anchor.id = `js-anchor-slider${this.scope_sufix}`;

        const content_container = document.createElement("div");
        content_container.classList.add("content-container");

        const content = document.createElement("div");
        content.classList.add("content", `js-content${this.scope_sufix}`);
        content.tabIndex = 0;
        content_container.appendChild(content);

        const container = document.createElement("div");
        container.style.display = "none";
        container.setAttribute("role", "region");
        container.setAttribute("aria-live", "polite");
        container.setAttribute("aria-label", "Panel de información");
        container.classList.add("pm-container", "slider",`js-slider${this.scope_sufix}`);
        container.id = `slider${this.scope_sufix}`;
        container.appendChild(close_button);
        container.appendChild(anchor);
        container.appendChild(content_container);
        document
            .querySelector(`${this.scope_selector}.poncho-map`)
            .appendChild(container);
    };


    /**
     * Proyecta el slider y hace zoom en el marker.
     */
    _showSlider = (layer, feature) => {
        if(layer.hasOwnProperty("_latlng")){
            this.map.setView(layer._latlng, this.map_anchor_zoom);
        } else {
            this.map.fitBounds(layer.getBounds());
        }
        layer.fireEvent("click");
    };


    /**
     * Proyecta el popUp y hace zoom en el marker.
     */
    _showPopup = (layer) => {
        if(layer.hasOwnProperty("_latlng")){
            this.markers.zoomToShowLayer(layer, () => {
                layer.openPopup();
            });
        } else {
            this.map.fitBounds(layer.getBounds());
            layer.openPopup();
        }
    };


    /**
     * Borra el hash de la url
     * @returns {void}
     */
    removeHash = () => history.replaceState(null, null, ' ');


    /**
     * Si la URL tiene un valor por _hash_ lo obtiene considerandolo su id.
     * @returns {void}
     */
    hasHash = () => {
        let id = window.location.hash.replace("#", "");
        return id || false;
    };


    /**
     * Obtiene un hash, hace zoom sobre el marker y abre su popUp o 
     * el slider.
     */
    gotoHashedEntry = () => {
        let id = this.hasHash();
        if(!id){
            return;
        }
        this.gotoEntry(id);
    };


    /**
     * Muestra un marker
     * @param {string|integer} id Valor identificador del marker. 
     */
    gotoEntry = (id) => {
        const entry = this.entry(id);
        const setAction = (layer, id, entry) => {
            if(!layer.options.hasOwnProperty("id")){
                return;
            }
            if(layer.options.id == id){
                this._setSelectedMarker(id, layer);
                if(this.hash){
                    this.addHash(id);
                }
                if(this.slider && this.hash){
                    this._showSlider(layer, entry);
                } else {
                    this._showPopup(layer);
                }
            }
        };
        this.markers.eachLayer(layer => setAction(layer, id, entry));
        this.map.eachLayer(layer => {
            if(layer.hasOwnProperty("feature") && 
                layer.feature.geometry.type != "Point"){
                setAction(layer, id, entry);
            }
        });
    };


    /**
     * Asigna un evento en el onclick a un layer.
     * @todo Buscar un método más eficiente para lograr esto sin tener
     * que evaluar el tipo de objeto geoJSON.
     * @param {object} layer 
     */
    _setClickeable = (layer) => {
        layer.on("keypress click", (e) => {
            document
                .querySelectorAll(".marker--active")
                .forEach(e => e.classList.remove("marker--active"));
                
            ["_icon", "_path"].forEach(ele => {
                if(!e.sourceTarget.hasOwnProperty(ele)){
                    return;
                }
                e.sourceTarget[ele].classList.add("marker--active");
            });
            const content = this.entries.find(e => {
                return e.properties[this.id]==layer.options.id;
            });
            this.setContent(content.properties);
        });
    };


    /**
     * Es un feature 
     * @param {object} layer Objeto Feature GeoJSON. 
     * @returns {boolean}
     */
    isFeature = (layer) => {
        if(!layer.hasOwnProperty("feature")){
            return false;
        }
        return true;
    };


    /**
     * Setea los features para ejecutarse en un evento onlick
     */
    _clickeableFeatures = () => {
        if(!this.reset_zoom){
            return;
        }
        this.map.eachLayer(layer => {
            if(!this.isFeature(layer) || 
                layer.feature.geometry.type == "Point" ||
                layer.feature.geometry.type == "MultiPoint"){
                return;
            }
            this._setClickeable(layer);
        });
    };


    /**
     * Setea los markers para ejecutarse en un evento onlick
     */
    _clickeableMarkers = () => {
        if(this.no_info){
            return;
        }
        this.markers.eachLayer(this._setClickeable)
    };


    /**
     * Setea los markers para ejecutarse en un evento onlick
     */   
    _urlHash = () => {
        const setHash = (layer) => {
            layer.on("click", () => {
                this.addHash(layer.options.id);
            });
        }
        this.markers.eachLayer(setHash);
        this.map.eachLayer(layer => {
            if(!layer.hasOwnProperty("feature") || 
                layer.feature.geometry.type == "Point" ||
                layer.feature.geometry.type == "MultiPoint"){
                return;
            }
            setHash(layer);
        });
    };


    /**
     * Remueve un elemento de una lista.
     * @param {object} list Array de elementos
     * @param {string} key Elemento a remover 
     */
    removeListElement = (list, key) => {
        const index = list.indexOf(key);
        if(index > -1){
            list.splice(index,1);
        }
        return list;
    };


    /**
     * Titulo para el default template
     * 
     * @summary El título puede tener un formato por defecto, tomando el
     * índice de la entrada seleccionada a tal fin en `this.title`, cuya
     * asignación es general y se utiliza para otras propiedades como:
     * texto alterantivo de los markers o title de un marker.
     * 
     * También se puede especificar un title particular en la entrada
     * `template_structure.title`, ésta opción se ofrece como una 
     * alternativa que puede estar dada por el formato en el texto u
     * otras características consideradas por el editor. 
     * 
     * Por último puede recibir de: this.template_header, una función
     * que retorne un html en formato string. Es importante tener en cuenta
     * que el uso de markdown y la insersión directa de html puedo producir
     * una vulnerabilidad XSS, tenga a bien asignar cuidadosamente el 
     * uso de estas opciones. 
     * 
     * @see https://showdownjs.com/docs/xss/#strip-html-tags-is-not-enough
     * @param {object} row Entrada 
     */
    _templateTitle = (row) => {
        if(!row.hasOwnProperty(this.title)){
            return false;
        }
        const structure = this.template_structure;
        const structure_title = (structure.hasOwnProperty("title") ? 
            structure.title : false);
        const optons_title = (this.title ? this.title : false);
        // si intencionalmente no se quiere usar el titulo y se 
        // agrega la opción `false` en `template_structure.title`. 
        if(structure.hasOwnProperty("title") && 
            typeof structure.title == "boolean"){
            return false;
        } 
        // Si los dos son false, retorno false
        else if(!structure_title && !optons_title){
            return false;
        }
        // Defino el title que voy a usar.
        // template_structure.title tiene precedencia
        const use_title = (structure_title ? structure_title : optons_title);
        let title;
        if(structure?.header){
            const wrapper = document.createElement("div");
            wrapper.innerHTML = this._mdToHtml(structure.header(this, row));
            if(this.template_innerhtml){
                wrapper.innerHTML = structure.header(this, row);
            }
            title = wrapper;
        } else {
            title = document.createElement("h2");
            title.classList.add(...structure.title_classlist);
            title.textContent = row[use_title];
        }

        const header = document.createElement("header");
        header.className = "header";
        header.appendChild(title);

        return header;
    };


    /**
     * Listado de keys para mostrar en una entrada del default template.
     * 
     * @summary Si el usuario configuró los valores en 
     * `template_structure.values` o `template_structure.exclude` se obtiene
     * el listado de índices, consideranto `values` con presedencia ante
     * `exclude` y retorna el objeto que se utilizará en `defaultTemplate()`.
     * @param {object} row Entrada de datos.
     * @return {object} Listado de índices seleccionados de la entrada.
     */
    _templateList = (row) => {
        const estructura = this.template_structure;
        let lista = Object.keys(row);

        let list = lista;
        if(estructura.hasOwnProperty("values") && estructura?.values?.length > 0){
            list = estructura.values;
        } else if(estructura.hasOwnProperty("exclude") && 
                estructura.exclude.length > 0){
            for(const key of estructura.exclude){
                list = this.removeListElement(lista, key);
            }
        }
        return list;
    };

    
    /**
     * Convierte un texto a MarkDwon usando la librería showdown.
     * 
     * @summary Pregunta si está incluida la librería showdown. Si está
     * la usa y convierte el string, caso contrario retorna la entrada
     * sin procesar.
     * @param {string} text Texto a convertir 
     * @returns {string}
     * @see https://showdownjs.com/
     */
    _mdToHtml = (text) => {
        if(this.template_markdown && this._markdownEnable()){
            const converter = new showdown.Converter(this.markdown_options);
            const cleannedText = secureHTML(text, this.allowed_tags);
            return converter.makeHtml(`${cleannedText}`.trim());
        }
        return text;
    }


    /**
     * Showdown habilitado.
     * 
     * Verifica si la librería _showdown_ está disponible.
     * @returns {boolean}
     */
    _markdownEnable = () => {
        if(typeof showdown !== "undefined" && 
            showdown.hasOwnProperty("Converter")){
                return true;
        }
        return false;
    } 


    /**
     * Si el usuario usó la opción mixing reformulamos la entrada.
     * 
     * @summary La opción mixing, permite concatenar el valor de los
     * índices de la entrada asignados en el índice 
     * `template_structure.mixing.values`, utilizando como separador una
     * cadena de texto asignada en el índice 
     * `template_structure.mixing.separator`
     * @param {object} row Entrada del json 
     * @returns {object}
     */
    _templateMixing = (row) => {
        if(this.template_structure.hasOwnProperty("mixing") && 
            this.template_structure.mixing.length > 0){
                const mixing = this.template_structure.mixing;

                let new_row = {}; 
                mixing.forEach(element => {
                    const {values, separator = ", ", key} = element;
                    if(typeof key === "undefined"){
                        this.errorMessage(
                            "Mixing requiere un valor en el atributo «key».",
                            "warning"
                        );
                    }
                    new_row[key] = values
                        .map(i => (i in row ? row[i] : i.toString()))
                        .filter(v => v)
                        .join(separator);
                });
                return Object.assign({}, row, new_row);
        }
        return row;
    };


    /**
     * Prepara un objeto según su tipo
     * @param {object} ele 
     * @param {object} entry 
     * @param {*} value 
     * @returns {*} De acuerdo a la entrada.
     */
    _setType = (ele, entry=false, value=false) => {
        if(typeof(ele) === "function"){
            return ele(this, entry, value);
        } 
        return ele;
    };


    /**
     * Imprime una volanta en la estructura por defecto.
     * 
     * @returns {object|boolean} Elemento html <p> o false si no 
     * fué configurado.
     */
    _lead  = (entry) => {
        if(!this.template_structure.hasOwnProperty("lead")){
            return;
        } else if(!this.template_structure.lead.hasOwnProperty("key")){
            this.errorMessage(
                "Lead requiere un valor en el atributo «key».",
                "warning"
            );
        }

        const {
            key = false, css = "small", style = false 
        } = this.template_structure.lead;

        const p = document.createElement("p");
        p.textContent = entry[key];
        // Style definitions
        const setStyle = this._setType(style, entry);
        if(setStyle){
            p.setAttribute("style", setStyle);
        }
        // CSS Class
        const setClasslist = this._setType(css, entry);
        if(setClasslist){
            p.classList.add(...setClasslist.split(" "));
        }
        return p;
    }; 


    /**
     * Ícono para el término
     * 
     * @param {object} entry Entrada de datos. 
     * @param {string} key Key del header. 
     * @returns {object|boolean} Si existe el key retorna un objeto 
     * element de otro modo un boolean `false`.
     */
    _termIcon = (entry, key) => {
        const item = this.header_icons.find(e => e.key == key);

        if(item){
            const {css=false, style=false, html=false} = item;
            const setHtml = this._setType(html, entry, key);
            const setStyle = this._setType(style, entry, key);
            const setClasslist = this._setType(css, entry, key);

            if(setClasslist){
                const icon = document.createElement("i");
                icon.setAttribute("aria-hidden","true");
                icon.classList.add(...setClasslist.split(" "));
                if(setStyle){
                    icon.setAttribute("style", setStyle);
                }
                return icon;

            } else if (setHtml){
                const ic = document.createElement("template");
                ic.innerHTML = setHtml;
                return ic.content;
            }
        }
        return false;
    };


    /**
     * Template por defecto
     * 
     * Arma un listado de datos usando la clave y el valor del objeto
     * pasado cómo argumento. 
     * @param {object} row Entrada para dibujar un marker.
     */  
    defaultTemplate = (self, row) => {
        row = this._templateMixing(row);
        const {template_structure:structure} = this;
        const tpl_list = this._templateList(row);
        const tpl_title = this._templateTitle(row);
        const container = document.createElement("article");
        container.classList.add(... structure.container_classlist);
        const definitions = document.createElement(structure.definition_list_tag);
        definitions.classList.add(...structure.definition_list_classlist);
        definitions.style.fontSize = "1rem";

        for(const key of tpl_list){
            // excluyo los items vacíos.
            if(!row.hasOwnProperty(key) || !row[key]){
                continue;
            }
            const term = document.createElement(structure.term_tag);
            term.classList.add(...structure.term_classlist)
            const header_icon = this._termIcon(row, key);
            if(header_icon){
                term.appendChild(header_icon);
                term.insertAdjacentText("beforeend", " ");
            }
            term.insertAdjacentText("beforeend", this.header(key));
            
            const definition = document.createElement(structure.definition_tag);
            definition.classList.add(...structure.definition_classlist)
            definition.textContent = row[key];

            if(this.template_markdown){
                definition.innerHTML = this._mdToHtml(row[key]);
            } else if(this.template_innerhtml){
                definition.innerHTML = secureHTML(row[key], this.allowed_tags);
            }

            if(this.header(key) != ""){
                definitions.appendChild(term);
            }
            definitions.appendChild(definition);
        };

        const tpl_lead = this._lead(row);
        if(tpl_lead){
            container.appendChild(tpl_lead);
        }

        if(tpl_title){
            container.appendChild(tpl_title);
        }

        container.appendChild(definitions);
        return container.outerHTML;
    };


    /**
     * Icono con color Poncho.
     * 
     * @summary Retorna un marker SVG con color poncho. Por defecto se
     * utiliza el azul (primary), pero se puede cambiar el clor usando
     * el parámetro «color». Los colores están limitados a los cargados
     * en Drupal. 
     * @param {string} color Nombre del color según poncho colores. 
     * @see https://leafletjs.com/examples/custom-icons/
     * @returns {object}
     */
    icon = (color="azul") => {
        return new L.icon({
            iconUrl: `https://www.argentina.gob.ar/sites/default/files/` 
                    + `marcador-${color}.svg`,
            iconSize: [29, 40],
            iconAnchor: [14, 40],
            popupAnchor: [0, -37]
        });
    };


    /**
     * Resetea el mapa a su punto inicial por defecto.
     */
    resetView = () => this.map.setView(this.map_view, this.map_zoom);


    /**
     * Hace zoom hasta los límites de los markers
     * @return {undefined}
     */
    fitBounds = () => {
        try {
            this.map.fitBounds(this.geojson.getBounds());
        } catch (error) {
            console.error(error);
        }
    };


    /**
     * Agrega un botón entre zoom-in y zoom-out para volver a la vista
     * original. 
     */
    _resetViewButton = () => {
        if(!this.reset_zoom){
            return;
        }
        // función a evaluar. Busca y remueve un botón de reset si existiera.
        document.querySelectorAll(
            `.js-reset-view${this.scope_sufix}`).forEach(e => e.remove());
        
        document
            .querySelectorAll(`${this.scope_selector} .leaflet-control-zoom-in`)
            .forEach(ele => {

            const icon = document.createElement("i");
            icon.classList.add("fa", "fa-expand");
            icon.setAttribute("aria-hidden","true");

            const button = document.createElement("a");
            button.classList.add(`js-reset-view${this.scope_sufix}`, 
                                "leaflet-control-zoom-reset");
            button.href = "#";
            button.title = "Zoom para ver todo el mapa";
            button.setAttribute("role", "button");
            button.setAttribute("aria-label", "Zoom para ver todo el mapa");
            button.appendChild(icon);
            button.onclick = (e) => {
                e.preventDefault();
                this.cleanState();
                this.resetView();
            };
            ele.after(button);
        });
    };


    /**
     * Define el objeto icon.
     * @param {object} row entrada de json 
     * @returns {object} Instancia L.icon
     */
    marker = (row) => {
        // Si marker_color no viene o es null usa el marker por defecto 
        // de Open Street Map
        if(!this.marker_color || typeof this.marker_color === "boolean"){
            return null
        }
        if(typeof this.marker_color === "string"){
            return this.icon(this.marker_color);
        } else if (typeof this.marker_color(this, row) === "string"){
            const color = this.marker_color(this, row);
            return this.icon(color);
        } else if (typeof this.marker_color === "function"){
            return this.marker_color(this, row);
        }
    };


    /**
     * Remueve los layers y limpia los markers
     * @todo buscar una función similar a `markers.clearLayers`, que 
     * abarque los features.
     */
    _clearLayers = () => {
        this.markers.clearLayers();
        this.map.eachLayer(e => {
            if(this.isFeature(e)){
                this.map.removeLayer(e);    
            }
        });
    };


    /**
     * Prepara las características del mapa y de cada uno de los markers.
     * @see https://leafletjs.com/reference.html#path
     */
    markersMap = (entries) => { 
        var _this = this;
        this._clearLayers();
        this.geojson = new L.geoJson(entries, {
            pointToLayer: function(feature, latlng) {
                const {properties} = feature;
                const icon = _this.marker(properties);
                
                let marker_attr = {};
                marker_attr.id = properties[_this.id];
                if(icon){
                    marker_attr.icon = icon;
                }
                if(_this.title){
                    marker_attr.alt = properties[_this.title];
                }
                
                const marker = new L.marker(latlng, marker_attr);
                _this.map.options.minZoom = _this.min_zoom;
                _this.markers.addLayer(marker);

                // Si el usuario eligió usar tooltip
                if(_this.tooltip && properties[_this.title]){
                    marker.bindTooltip(
                        properties[_this.title], _this.tooltip_options
                    );
                }
                // Si el usuario desea utilizar popUp en vez de slider.
                if(!_this.no_info && !_this.slider){
                    const html = (typeof _this.template == "function" ? 
                            _this.template(_this, properties) : 
                            _this.defaultTemplate(_this, properties));
                    marker.bindPopup(html);
                }
                
                return _this.markers;
            },
            onEachFeature: function(feature, layer){
                const {properties, geometry} = feature;
                layer.options.id = properties[_this.id];
                feature.properties.name = properties[_this.title];

                // Si el usuario eligió usar tooltip
                if(_this.tooltip && properties[_this.title] && 
                    geometry.type != "Point" && geometry.type != "MultiPoint"){
                    layer.bindTooltip(
                        properties[_this.title], _this.tooltip_options
                    );
                }
                
                if(!_this.no_info && !_this.slider && 
                    geometry.type != "Point" && geometry.type != "MultiPoint"){
                    const html = (typeof _this.template == "function" ? 
                            _this.template(_this, properties) : 
                            _this.defaultTemplate(_this, properties));
                    layer.bindPopup(html);
                }
            },
            style: function(feature) {
                const {properties} = feature;
                const setProp = (key, alternative=false) => {
                    if( properties.hasOwnProperty(key)) {
                        return properties[key];
                    } else if(alternative) {
                        return alternative; 
                    } else {
                        return _this.featureStyle[key];
                    }
                };
                return {
                    color: setProp("stroke-color", setProp("stroke")), 
                    strokeOpacity: setProp("stroke-opacity"), 
                    weight: setProp("stroke-width"), 
                    fillColor: setProp("stroke"), 
                    opacity: setProp("stroke-opacity"), 
                    fillOpacity: setProp("fill-opacity")
                };  
            }, 
            
        });
        this.geojson.addTo(this.map);  
    };


    /**
     * Setea el marker activo.
     */
    _setSelectedMarker = (id, instance) => {
        const val = {entry: this.entry(id), marker: instance};
        this.selected_marker = val;
        return val;
    };


    /**
     * Haciendo clic en un marker setea el marker como 
     * actualmente seleccionado.
     */
    _selectedMarker = () => {
        this.map.eachLayer(layer => {
            if(!this.isFeature(layer)){
                return;
            }
            layer.on("click", (e) => {
                this._setSelectedMarker(layer.options.id, layer);
            });
        });
    };


    /**
     * Crea un input hidden dentro del contenedor poncho maps.
     * 
     * @summary El input se utiliza cuando está activada la clase 
     * PonchoMapsFilter y PonchoMapSearch cuando el usuario escribe sobre
     * el imput visible se copia el texto a este input y desde ahi se
     * toma el termino a buscar o filtrar.
     */
    _hiddenSearchInput = () => {
        const search = document.createElement("input");
        search.type ="hidden";
        search.name = `js-search-input${this.scope_sufix}`;
        search.setAttribute("disabled", "disabled");
        search.id = `js-search-input${this.scope_sufix}`;
        const container = document
                .querySelectorAll(`${this.scope_selector}.poncho-map`);
        container.forEach(element => element.appendChild(search));
    }


    /**
     * Agrega atributos a los features.
     * 
     * @accesibility
     * @summary Cubre un aspecto importante de accesibilidad permitiendo
     * que el usuario navegue los markers tabulando.
     * @todo Encontrar el modo de hacerlo en la creación del feature
     * y no recorriendo cada elemento una vez creados.
     * @returns {undefined}
     */
    _setFetureAttributes = () => {
        const setAttributes = (ele, key) => {
            if(!ele.hasOwnProperty(key)){
                return;
            }
            ele[key].setAttribute(
                "aria-label", ele?.feature?.properties?.[this.title]
            );
            ele[key].setAttribute("role", "button");
            ele[key].setAttribute("tabindex", 0);
            ele[key].dataset.entryId = ele?.feature?.properties?.[this.id];
            ele[key].dataset.leafletId = ele._leaflet_id;
        };

        this.map.eachLayer(e => setAttributes(e, "_path"));
    };

    /**
     * Anclas de salto
     * 
     * @summary Anclas para creadas especialmente para la navegación
     * por tabs. 
     * @accesibility
     * @returns {objects} Objeto con las anclas.
     */
    _accesibleAnchors = () => {
        const anchors = [
            [
                `${this.scope_selector} .leaflet-map-pane`, 
                `leaflet-map-pane${this.scope_sufix}`, [
                    ["role", "region"]
                ]
            ],
            [
                `${this.scope_selector} .leaflet-control-zoom`,
                `leaflet-control-zoom${this.scope_sufix}`,
                [
                    ["aria-label", "Herramientas de zoom"],
                    ["role", "region"],
                ]   
            ],
        ];
        anchors.forEach(anchor => {
            const element = document.querySelector(anchor[0]);
            element.id = anchor[1];
            anchor[2].forEach(e => element.setAttribute(e[0], e[1]));
        });
        return anchors;
    };


    /**
     * Agrega anclas y enlaces para un menú accesible.
     * 
     * @accesibility
     * @summary El mapa es muy complicado de leer con un lector de 
     * pantalla. El contexto es dificil de entender. Estos enlaces 
     * ayudan a navegar dos o tres de los sectores que contienen y 
     * manejan información: los filtros, los markers y el control 
     * de zoom.
     * @todo Revisar el modo de activar el enlace para visualizar el 
     * slider cuando éste está visible. Como sugerencia se puede 
     * utilizar Aria para setear el estado, pero esto hay que 
     * chequearlo con expertos.
     * @see https://www.w3.org/WAI/standards-guidelines/aria/
     * @see https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics
     */
    _accesibleMenu = () => {
        // Remuevo instancias anteriores si existieran.
        document.querySelectorAll(`${this.scope_selector} .accesible-nav`)
            .forEach(e => e.remove());

        // Anclas que se deben crear.
        const anchors = this._accesibleAnchors();

        // Enlace
        let values = [
            {
                text: "Ir a los marcadores del mapa",
                anchor: `#${anchors[0][1]}`
            },
            {
                text: "Ajustar marcadores al mapa",
                anchor: "#",
                class: "js-fit-bounds"
            },
            {
                text: "Ir al panel de zoom",
                anchor: `#${anchors[1][1]}` 
            }
        ]
        values = [
            ...values,
            ...this.accesible_menu_filter,
            ...this.accesible_menu_search,
            ...this.accesible_menu_extras
        ];

        // Imprimo los enlaces
        const icon = document.createElement("i");
        icon.classList.add(
            "icono-arg-sitios-accesibles", 
            "accesible-nav__icon"
        );
        icon.setAttribute("aria-hidden", "true");

        const nav = document.createElement("div");
        nav.classList.add("accesible-nav", "top");
        nav.id = `accesible-nav${this.scope_sufix}`;
        nav.setAttribute("aria-label", "Menú para el mapa");
        nav.setAttribute("role", "navigation");
        nav.tabIndex=0;

        const ul = document.createElement("ul");
        values.forEach((link, index) => {
            const a = document.createElement("a");
            a.textContent = link.text;
            a.tabIndex = 0;
            a.href = link.anchor;
            if(link.hasOwnProperty("class") && link.class != ""){
                a.classList.add(...link.class.split(" "))
            }

            const li = document.createElement("li");
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        nav.appendChild(icon);
        nav.appendChild(ul);

        // enlace de retorno
        const back_to_nav = document.createElement("a");
        back_to_nav.textContent = "Ir a la navegación del mapa";
        back_to_nav.href = `#accesible-nav${this.scope_sufix}`;
        back_to_nav.id = `accesible-return-nav${this.scope_sufix}`;

        const return_nav = document.createElement("div");
        return_nav.classList.add("accesible-nav", "bottom");
        return_nav.appendChild(icon.cloneNode(true));
        return_nav.appendChild(back_to_nav);

        const navigation = document.querySelectorAll(`${this.scope_selector}`);
        navigation.forEach(element => {
            element.insertBefore(nav, element.children[0]);
            element.appendChild(return_nav);
        });
        this.fit();
    };


    /**
     * Ajusta marcadores a los bordes del mapa en un onclick
     * @returns {undefined}
     */
    fit = () => document
        .querySelectorAll(`${this.scope_selector} .js-fit-bounds`)
        .forEach(e => {
            e.onclick = (event => {
                event.preventDefault();
                this.fitBounds();
        });
    });


    /**
     * Remueve elementos agregados al mapa
     */
    clearAll = () => {
        const elements = [
            `.js-filter-container${this.scope_sufix}`,
            `.js-slider${this.scope_sufix}`,
        ];
        elements.forEach(e => document
                .querySelectorAll(e)
                .forEach(i => i.remove()));
    };


    /**
     * Remueve parametros y/o el hash de una url.
     * @returns {undefined}
     */
    cleanState = () => history.replaceState(null, null, ' ');


    /**
     * Hace el render del mapa.
     */
    render = () => {
        this._hiddenSearchInput();
        this._resetViewButton();

        this._setThemes();
        
        this.titleLayer.addTo(this.map);
        this.markersMap(this.entries);
        this._selectedMarker();

        if(this.slider){
            this._renderSlider();
            this._clickeableFeatures();
            this._clickeableMarkers();
            this._clickToggleSlider();
        }

        if(this.hash){
            this._urlHash();
        }

        if(this.scroll && this.hasHash()){
            this.scrollCenter();
        }

        setTimeout(this.gotoHashedEntry, this.anchor_delay);
        this._setFetureAttributes();
        this._accesibleMenu();
    };
};
// end class


/**
 * PONCHO MAP LOADER
 * 
 * @summary Permite incorporar a un mapa un spinner. 
 */
class PonchoMapLoader {

    constructor(options){
        const defaults = {
            scope: "",
            timeout: 50000
        };
        let opts = Object.assign({}, defaults, options);
        this.scope = opts.scope;
        this.timeout = opts.timeout;
        this.scope_sufix = `--${this.scope}`;
        this.scope_selector = `[data-scope="${this.scope}"]`;
        this.ponchoLoaderTimeout;
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

        const element = document.querySelector(`.poncho-map${this.scope_selector}`);
        
        const loader = document.createElement("span");
        loader.className = "loader";

        const cover = document.createElement('div');
        cover.dataset.scope = this.selector
        cover.classList.add(
            "poncho-map__loader", `js-poncho-map__loader${this.scope_sufix}`
        );
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
            this.remove();
        }, timeout);
    };
}

/**
 * PONCHO MAP FILTER
 * 
 * @summary Generador de mapas con filtro utilizando
 * OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
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
class PonchoMapFilter extends PonchoMap {
    constructor(data, options){
        super(data, options);
        
        const defaults = {
            filters: [],
            filters_visible: false,
            filters_info: false,
            search_fields: [],
            messages: {
                reset: " <a href=\"#\" class=\"{{reset_search}}\" "
                        + "title=\"Restablece el mapa a su estado inicial\">"
                        + "Restablecer mapa</a>",
                initial: "Hay {{total_results}} puntos en el mapa.",
                no_results_by_term: "No encontramos resultados para tu búsqueda.",
                no_results: "No s + this.messages.resete encontraron entradas.",
                results: "{{total_results}} resultados coinciden con tu búsqueda.",
                one_result: "{{total_results}} resultado coincide con tu búsqueda.",
                has_filters: "<i title=\"¡Advertencia!\" aria-hidden=\"true\" "
                        + "class=\"fa fa-warning text-danger\"></i> "
                        + "Se están usando filtros."
            }
        };
        let opts = Object.assign({}, defaults, options);
        this.filters = opts.filters;
        this.filters_info = opts.filters_info;
        this.filters_visible = opts.filters_visible;
        this.valid_fields = ["checkbox", "radio"];
        this.search_fields = opts.search_fields;
        this.messages = opts.messages;
        this.accesible_menu_filter = [
            {
                text: "Ir al panel de filtros",
                anchor: `#filtrar-busqueda${this.scope_sufix}`
            },
        ];
    }

    /**
     * Parser de template simple
     * 
     * @param {string} value Cadena de texto a parsear
     * @param {object} kwargs Objeto con clave valor para hacer la sustitución.
     * @example
     * // returns Mi hija se llama Olivia.
     * tplParser("Mi hija se llama {{nombre}}.", {nombre:"Olivia"})
     * @returns {string} Cadena de texto con los *placeholders* reemplazados.
     */
    tplParser = (value, kwargs) => {
        return Object.keys(kwargs).reduce(function(str, key){
            const regex = new RegExp(
                '\\{\\{\\s{0,2}' + key + '\\s{0,2}\\}\\}', 'gm');
            str = str.replace(regex, kwargs[key]);
            return str;
        }, value);
    };


    /**
     * Mensajes de ayuda
     * 
     * @param {string} term Término buscado
     * @param {object} results Resultados de la búsqueda.
     * @returns {undefined}
     */
    _helpText = (results) => {
        const help_container = document
            .querySelectorAll(`${this.scope_selector} .js-poncho-map__help`);

        const values = {
            total_results: results.length,
            total_entries: this.entries.length,
            total_filtered_entries: this.filtered_entries.length,
            filter_class: `js-close-filter${this.scope_sufix}`,
            anchor: "#",
            term: this.inputSearchValue,
            reset_search: `js-poncho-map-reset${this.scope_sufix}`
        };

        help_container.forEach(element => {
            element.innerHTML = "";

            // Arma el listado de mensajes.
            const ul = document.createElement("ul");
            ul.classList.add("m-b-0", "list-unstyled");
            ul.setAttribute("aria-live", "polite");
            const li = content => { 
                const item = document.createElement("li"); 
                item.innerHTML = content; 
                return item;
            };

            // Estado inicial. Totalidad de registros.
            if(values.total_entries === values.total_results){
                ul.appendChild(
                    li(this.tplParser(this.messages.initial, values))
                );
            }
            // 0 entradas con criterio de búsqueda.
            else if(values.total_results < 1){
                ul.appendChild(
                    li(this.tplParser(this.messages.no_results_by_term 
                                    + this.messages.reset, values))
                );
            }
            // 0 entradas, sin creterio de búsqueda.
            else if(this.inputSearchValue === "" && values.total_results < 1){
                ul.appendChild(
                    li(this.tplParser(this.messages.no_results 
                                    + this.messages.reset, values))
                );
            }
            // Si solo hay un resultado
            else if(values.total_results == 1){
                ul.appendChild(
                    li(this.tplParser(this.messages.one_result 
                                    + this.messages.reset, values))
                );
            }
            // Si hay más de un resultado
            else if(values.total_results > 1){
                ul.appendChild(
                    li(this.tplParser(this.messages.results 
                                    + this.messages.reset, values))
                );
            }
            // Si los resultados están siendo filtrados.
            if(!this.usingFilters()){
                // ul.appendChild(
                //     li(this.tplParser(this.messages.has_filters, values))
                // );
            }
            element.appendChild(ul);
        });
    };


    /**
     * Obtiene el índice y el grupo del filtro
     * @param {string} str Input name attribute.
     * @example
     * // returns 1
     * dilter_position("name__1")
     * @returns {string}
     */
    _filterPosition = (str) => {
        const regex = /^([\w\-]+?)(?:__([0-9]+))(?:__([0-9]+))?$/gm;
        const rgx = regex.exec(str);
        return (rgx ? [rgx[1], rgx[2]] : null);
    };


    /**
     * Estado del slider.
     *
     * @return {boolean} true si esta abierto, false si esta cerrado.
     */
    isFilterOpen = () => document
        .querySelector(`.js-poncho-map-filters${this.scope_sufix}`)
        .classList.contains("filter--in");


    /**
     * Abre o cierra el panel de filtros.
     */
    toggleFilter = () => {
        document
            .querySelector(`.js-poncho-map-filters${this.scope_sufix}`)
            .classList.toggle("filter--in");
    };


    /**
     * Altura para el contenedor de filtros.
     *
     * @summary En función de la altura del mapa y del tamaño y posición
     * del botón de filtro y su contenedor, se calcula el tamaño que tiene
     * el *popup* que contiene los inputs para los filtros. La idea es que,
     * si se configuraran muchos filtros se active la función
     * `overflow:auto` en la hoja de estilos.
     * @todo calcular el valor de `container_position_distance` e 
     * `inner_padding` dinámicamente.
     * @return {undefined}
     */
    _filterContainerHeight = () => {    
        const filter_container = document
            .querySelector(`.js-filter-container${this.scope_sufix}`);
        const filter_button = document
            .querySelector(`.js-close-filter${this.scope_sufix}`);

        const poncho_map_height = filter_container.offsetParent.offsetHeight;
        // Valor tomado de la hoja de estilos
        const container_position_distance = this._cssVarComputedDistance() * 2;
        const filters_height = poncho_map_height
            - filter_container.offsetTop
            - filter_button.offsetHeight
            - container_position_distance;

        const pos = document
            .querySelector(`.js-poncho-map-filters${this.scope_sufix}`);
        pos.style.maxHeight = `${filters_height}px`;

        // Valor tomado de la hoja de estilos
        const inner_padding = 45;
        const height = pos.offsetHeight - inner_padding;
        const filters = document.querySelector(`.js-filters${this.scope_sufix}`);
        filters.style.height = `${height}px`;
        filters.style.overflow = "auto";
    };


    /**
     * Ejecuta toggle en el onclick
     * @return {undefined}
     */
    _clickToggleFilter = () => document
        .querySelectorAll(`.js-close-filter${this.scope_sufix}`)
        .forEach(element => element.onclick = (event) => {
            event.preventDefault();
            this.toggleFilter();
            this._filterContainerHeight();
    });


    /**
     * Prepara el objeto para los filtros.
     * 
     * @summary Obtiene un _distinct_ de elementos asociados a un clave
     * dentro dentro de las entradas.
     * @param {object} args Array con dos propiedades, siedo la 
     * segunda optativa.
     * @propertie
     * @example
     * // returns ["clave", "elemento-unico", ["elemento-unico"], "checked"]
     * _setFilter("clave")
     * @return {object} Entradas filtradas
     */
    _setFilter = (args) => {
        const [key, status="checked"] = args;
        const entries = this.entries.map(entry => {
            if(entry.properties.hasOwnProperty(key)){
                return entry.properties[key];
            }
        }).filter(e => e);

        const obj = [...new Set(entries)]
                .map(item => [key, item, [item], status]);

        obj.sort((a, b) => {
            const valA = a[1].toUpperCase();
            const valB = b[1].toUpperCase();
            if (valA > valB) {
                return 1;
            }
            if (valA < valB) {
                return -1;
            }
            return 0;
        });

        return obj;
    };


    /**
     * Retorna el tipo de filtro seleccionado por el usuario.
     * 
     * @summary Hay dos modos de configurar filtros
     * template_structure.filters.fields y template_structure.filters.field
     * @example
     * Fields, peromite configurar manualmente el listado de entradas por
     * las cuales se va a realizar la búsqueda:
     *   [
     *     {label},
     *     {índice entrada},
     *     [{valor a buscar 1},
     *     {valor a buscar 2}],
     *     {status:"checked"|boolean}
     *   ]
     * 
     * ["tipo", "Archivo provincial", ["Archivo provincial"], "checked"],
     * @example
     * — Field, permite asignar el índice por el cual se quiere filtrar,
     * el programa hace un UNIQUE de los elementos del indice (o columna),
     * y genera un checkbox (o radio), por cada una de los resultados.
     *   [
     *     {indice entrada},
     *     {status:"checked"|boolean}
     *   ]
     * Ejemplo:
     *   ["tipo"]
     * o, si se desean todos los checkbox desmarcados.
     *   ["tipo", false]
     */
    _fieldsToUse = (fields_items) => {
        const {
            fields: opt_fields = false, 
            field: opt_field = false} = fields_items;
        if(!opt_fields && !opt_field){
            this.errorMessage(
                "Filters requiere el uso del atributo `field` o `fields`.",
                "warning"
            );
        }
        const fields_to_use = (opt_fields ? opt_fields : 
            this._setFilter(opt_field));
        return fields_to_use
    };


    /**
     * Arma un grupo de inputs
     *
     * @param {object} fields_items Listado de opciones para los fields.
     */
    _fields = (fields_items, group) => {
        const fields_container = document.createElement("div");
        fields_container.classList.add("field-list", "p-b-1");

        const fields_to_use = this._fieldsToUse(fields_items);

        for(const key in fields_to_use){
            const field = fields_to_use[key];
            const input = document.createElement("input");
            input.type = (this.valid_fields.includes(fields_items.type) ?
            fields_items.type : "checkbox");
            input.id = `id__${field[0]}__${group}__${key}`;
            if(fields_items.type == "radio"){
                input.name = `${field[0]}__${group}`;
            } else {
                input.name = `${field[0]}__${group}__${key}`;
            }

            input.className = "form-check-input";
            input.value = key;
            if(typeof field[3] !== "undefined" && field[3]=="checked"){
                input.setAttribute("checked", "checked");
            }

            const label = document.createElement("label");
            label.style.marginLeft = ".33rem";
            label.textContent=field[1];
            label.className = "form-check-label";
            label.setAttribute("for", `id__${field[0]}__${group}__${key}`);
            const info = document.createElement("span");
            info.dataset.info = `${field[0]}__${group}__${key}`;
            label.appendChild(info);

            const field_container = document.createElement("div");
            field_container.className = "form-check";
            field_container.appendChild(input);
            field_container.appendChild(label);
            fields_container.appendChild(field_container);
        }

        const fieldset = document.createElement("div");
        fieldset.appendChild(fields_container);
        return fieldset;
    };


    /**
     * Crea el botón para los filtros
     */
    _filterButton = () => {
        const filter_icon = document.createElement("i");
        filter_icon.setAttribute("aria-hidden", "true");
        filter_icon.classList.add("fa", "fa-filter");

        const button_text = document.createElement("span");
        button_text.textContent = "Abre o cierra el filtro de búsqueda";
        button_text.classList.add("sr-only");

        const button = document.createElement("button");
        button.classList.add(
            "pm-btn", "pm-my-1",
            `js-close-filter${this.scope_sufix}`
        );
        button.id = `filtrar-busqueda${this.scope_sufix}`
        button.appendChild(filter_icon);
        button.appendChild(button_text);
        button.setAttribute("role", "button");
        button.setAttribute(
            "aria-label", "Abre o cierra el filtro de búsqueda"
        );
        button.setAttribute(
            "aria-controls", `poncho-map-filters${this.scope_sufix}`
        );

        const button_container = document.createElement("div");
        button_container.classList.add(
            `js-filter-container${this.scope_sufix}`, "filter-container"
        );
        button_container.appendChild(button);

        const container = document
            .querySelector(`.poncho-map${this.scope_selector}`);
        container.appendChild(button_container);
    }


    /**
     * Medida definida en la variable CSS --slider-distance
     * 
     * @summary Esta medida puede ser variable según el estilo que se
     * quiera dar al mapa el diseñador. 
     * @returns {integer}
     */
    _cssVarComputedDistance = () => {
        const container = document.querySelector(".poncho-map");
        const computedDistance = getComputedStyle(container)
                .getPropertyValue('--slider-distance');
        const distance = parseInt(
            computedDistance.toString().replace(/[^0-9]*/gm, ""));
        return distance || 0;
    };


    /**
     * Retorna las medidas y la distancia de margen del control de zoom leaflet. 
     * @returns {object}
     */
    _controlZoomSize = () =>{
        const leafletControlZoom = document
                .querySelector(`${this.scope_selector} .leaflet-control-zoom`);
        return {
            controlHeight: leafletControlZoom.offsetHeight,
            controlTop: leafletControlZoom.offsetTop
        };
    };


    /**
     * Crea el contenedor para los filtros.
     */
    _filterContainer = () => {
        const fields_container = document.createElement("div");
        fields_container.className = `js-filters${this.scope_sufix}`;

        const close_button = document.createElement("button");
        close_button.classList.add(
            "btn", "btn-xs",
            "btn-secondary",
            "btn-close",
            `js-close-filter${this.scope_sufix}`
        );
        close_button.title = "Cerrar panel";
        close_button.setAttribute("role", "button");
        close_button.setAttribute("aria-label", "Cerrar panel de filtros");
        close_button.innerHTML = "<span class=\"sr-only\">Cerrar </span>✕";


        const form = document.createElement("form");
        form.classList.add(`js-formulario${this.scope_sufix}`);
        form.appendChild(close_button); 
        form.appendChild(fields_container); 

        const container = document.createElement("div");
        container.classList.add(
            `js-poncho-map-filters${this.scope_sufix}`,
            "pm-container",
            "poncho-map-filters",
            "caret-n"
        );
        container.setAttribute("role", "region");
        container.setAttribute("aria-live", "polite");
        container.setAttribute("aria-label", "Panel de filtros");
        container.id = `poncho-map-filters${this.scope_sufix}`;

        if(this.filters_visible){
            container.classList.add("filter--in");
        }

        const cssVarComputedDistance = this._cssVarComputedDistance();
        const controlZoomSize = this._controlZoomSize();
        const styleTop = controlZoomSize.controlHeight 
                + controlZoomSize.controlTop 
                + cssVarComputedDistance 
                + "px";

        container.appendChild(form); 
        document.querySelectorAll(`.js-filter-container${this.scope_sufix}`)
            .forEach(element => {
                element.style.top = styleTop;
                element.appendChild(container);
            });
    };

    /**
     * Crea los botones para seleccionar o des-seleccionar todos
     * los filtros.
     * @param {object} item Objetos con los nombres de grupo e 
     * indice de grupo.
     * @returns {object} Objeto HTML
     */
    _checkUncheckButtons = (item) => {
        const checkAllButton = document.createElement("button");
        checkAllButton.classList.add(
            "js-select-items","select-items__button");
        checkAllButton.textContent = "Marcar todos";
        checkAllButton.dataset.field = item.field[0];
        checkAllButton.dataset.value = 1;

        const uncheckAllButton = document.createElement("button");
        uncheckAllButton.classList.add(
            "js-select-items","select-items__button");
        uncheckAllButton.textContent = "Desmarcar todos";
        uncheckAllButton.dataset.field = item.field[0];
        uncheckAllButton.dataset.value = 0;
        

        const checkAllItems = document.createElement("div");
        checkAllItems.classList.add("select-items");
        checkAllItems.appendChild(checkAllButton);
        checkAllItems.appendChild(uncheckAllButton);

        return checkAllItems;
    }

    /**
     * Crea los checkbox para los filtros.
     */
    _createFilters = (data) => {
      // debugger
        const form_filters = document
            .querySelector(`.js-filters${this.scope_sufix}`);

        data.forEach((item, group) => {
            let legend = document.createElement("legend");
            legend.textContent = item.legend;
            legend.classList.add("m-b-1", "color-primary", "h6")

            let fieldset = document.createElement("fieldset");
            fieldset.appendChild(legend);
            if(item.hasOwnProperty("check_uncheck_all") && item.check_uncheck_all){
                fieldset.appendChild(this._checkUncheckButtons(item));
            }
            fieldset.appendChild(this._fields(item, group));
            form_filters.appendChild(fieldset);
        });
    };

    /**
     * Obtengo los checkbox marcados.
     */
    formFilters = () => {
        if(this.filters.length < 1){
            return [];
        }
        const form_filters = document
            .querySelector(`.js-formulario${this.scope_sufix}`);
        const form_data = new FormData(form_filters);

        return Array.from(form_data).map(ele => {
            let val = [];
                const pos = this._filterPosition(ele[0]);
                val = [parseInt(pos[1]), parseInt(ele[1]), pos[0]];
            return val;
        });
    };

    /**
     * Configuración de estado de los filtros seteados por el usuario.
     * @returns {object}
     */
    defaultFiltersConfiguration = () => {
        // Obtengo todos los filtros y los colecciono en un array.
        const filters = this.filters.map((g, gk) => {
            const fields = this._fieldsToUse(g);
            const conf_fields = fields.map((f, fk) => {
                return [
                    gk, fk, f[0], 
                    (typeof f[3] !== "undefinded" && f[3] == "checked" ?
                        true : false)
                ];
            });
            return conf_fields;
        }).flat();
        return filters;
    };

    /**
     * Verifica si se están filtrando los datos.
     * @return {boolean}
     */
    usingFilters = () => {
        const result = this.defaultFiltersConfiguration().every(
            (e) => {
                return document
                    .querySelector(`#id__${e[2]}__${e[0]}__${e[1]}`)
                    .checked;
        });
        return result;
    };

    /**
     * Reestablece los filtros a la configuración creada por el usuario.
     * @return {undefined}
     */
    _resetFormFilters = () => {
        this.defaultFiltersConfiguration().forEach(e => {
            const field = document.querySelector(`#id__${e[2]}__${e[0]}__${e[1]}`);
            field.checked = e[3];
        });
    };

    /**
     * Value del input hidden (search)
     * @returns {string|boolean} Valor en el input *hidden* o false.
     */
    get inputSearchValue(){
        const search_value = document
            .querySelector(`#js-search-input${this.scope_sufix}`);
        const result = search_value.value.trim();
        if(result !== ""){
            return result;
        }
        return false;
    }


    /**
     * Total de ocurrencias por clave y valor sobre entradas dadas.
     * @param {object} feature Entradas
     * @param {array} val Array con los elementos a buscar.
     * @param {string} index Clave de la entrada de datos.
     * @returns {integer} Total de ocurrencias. 
     */
    _countOccurrences = (feature, val, index) => {
        const ocurrences = feature.reduce((a, v) => {
            return val.some(e => v.properties[index].includes(e)) ? a + 1 : a
        }, 0);
        return ocurrences;
    };


    /**
     * Total de resultados por filtro marcado.
     * @returns {Array} Retorna un array estructurado del siguiente modo:
     * ```
     *      [
     *        {nombre del filtro},
     *        {total coincidencias},
     *        {indice de grupo de filtros},
     *        {indice input dentro del grupo}
     *      ]
     * ```
     */
    totals = () => {
        const results = this.formFilters().map(e => {
            const item = this._fieldsToUse( this.filters[e[0]] )[e[1]];
            return [
                item[1],
                this._countOccurrences(this.filtered_entries, item[2], item[0]),
                ...e
            ];
        });
        return results;
    };


    /**
     * **¡EXPERIMENTAL!** Agrega un title con el total de elementos en 
     * el panel de filtros.
     */
    _totalsInfo = () => {
        if(!this.filters_info){
            return "";
        }
        this.totals().forEach(field => {
            const element = document.querySelector(
                    `${this.scope_selector}`
                    + ` [data-info="${field[4]}__${field[2]}__${field[3]}"]`);
            const plurals = (field[1] < 2 ? "" : "s");
            
            const i = document.createElement("i");
            i.style.cursor = "help";
            i.style.opacity = ".75";
            i.style.marginLeft = ".5em";
            i.style.marginRight = ".25em";
            i.classList.add("fa", "fa-info-circle","small", "text-info");
            i.title = `${field[1]} resultado${plurals}`;
            i.setAttribute("aria-hidden", "true");

            const span = document.createElement("span");
            span.className = "sr-only";
            span.style.fontWeight = "400";
            span.textContent = `${field[1]} elemento${plurals}.`;

            const info_container = document.createElement("small");
            info_container.appendChild(i);
            info_container.appendChild(span);
            element.appendChild(info_container);
        });
    };


    /**
     * Valida una entrada
     * @summary
     * 1. Obtengo la cantidad de grupos que tengo.
     * 2. Evaluo los fields de cada grupo y junto los resultados en un array
     * para retornar true los grupos tienen que dar true
     * @returns {boolean}
     */
    _validateEntry = (entry, form_filters) => {
        const fields_group = (group) => form_filters.filter(e => e[0] == group);
        // Reviso cuantos grupos tengo que validar.
        const total_groups = this.filters.length;
        let validations = [];
        for(let i = 0; i < total_groups; i++){
            // por cada grupo de fields obtengo un resultado de grupo.
            validations.push(this._validateGroup(entry, fields_group(i)));
        }
        return validations.every(e => e);
    };


    /**
     * Valida el campo de un grupo.
     * 
     * @param {object} entry Entrada de datos
     * @param {integer} group Índice del grupo de filtros
     * @param {integer} index Índice del filtro dentro del grupo.
     * @returns {object}
     */
    _search = (entry, group, index) => {
        const filter = this._fieldsToUse(this.filters[group])[index];
        const search_for = filter[2];
        const found = search_for.filter(i => i).some(e => {
            if(entry.hasOwnProperty(filter[0])){
                return entry[filter[0]].includes(e)
            }
        });
        return found;
    };


    /**
     * Valida los fields del grupo.
     * 
     * @param {object} entry Entrada de datos
     * @param {object} fields_group 
     * @return {boolean}
     */
    _validateGroup = (entry, fields_group) => {
        const result = fields_group.map(e => this._search(entry, e[0], e[1]));
        return result.some(e => e);
    };


    /**
     * Filtra los markers.
     */ 
    _filterData = () => {
        const available_filters = this.formFilters();
        let feed = this.entries.filter(
            entry => this._validateEntry(entry.properties, this.formFilters())
        );
        feed = this.searchEntries(this.inputSearchValue, feed);
        feed = (this.filters.length < 1 || 
                available_filters.length > 0 ? feed : []);
        this.filtered_entries = feed;
        return feed;
    };


    /**
     * Render de funciones 
     */ 
    _filteredData = (feed) => {
        feed = (typeof feed !== "undefined" ? this.entries : 
                this._filterData());
        
        this.markersMap(feed); 
        this._selectedMarker();
        this._helpText(feed);
        this._resetSearch();
        this._clickToggleFilter();
        if(this.slider){
            this._renderSlider();
            this._clickeableMarkers();
            this._clickeableFeatures();
            this._clickToggleSlider();
        }

        if(this.hash){
            this._urlHash();
        }
        this._setFetureAttributes();
        this._accesibleMenu();
    };


    /**
     * Borra los valores del search _input hidden_ en el 
     * campo de filtros.
     * @returns {undefined}
     */
    _clearSearchInput = () => document
        .querySelectorAll(`#js-search-input${this.scope_sufix}`)
        .forEach(element => element.value = "");


    /**
     * Restablece el mapa a su instancia inicial.
     * @summary Reestablace la búsqueda a través del input search o 
     * por filtros.
     * @returns {undefined}
     */
    _resetSearch = () => {  
        document
            .querySelectorAll(`.js-poncho-map-reset${this.scope_sufix}`)
            .forEach(e => {
                e.onclick = (event => {
                    event.preventDefault();
                    this._resetFormFilters();
                    this._filteredData(this.entries);
                    this._clearSearchInput();
                    this.resetView();
            });
        });
    };


    /**
     * Cambia la lista de markers en función de la selección de 
     * los filtros en PonchoMapFilter.
     * @TODO Ver el modo de hacer focus sobre el scope
     * @returns {undefined}
     */
    filterChange = (callback) => document
        .querySelectorAll(`.js-filters${this.scope_sufix}`)
        .forEach(element => {
            element.onchange = (callback);
    });


    /**
     * Marca o desmarca todos los filtros
     * 
     * @returns {undefined}
     */
    checkUncheckFilters = () => {
        const buttons = document.querySelectorAll(
            `${this.scope_selector} .js-select-items`);
        buttons.forEach(element => {
            element.onclick = (event) => {
                event.preventDefault();
                const inputs = document.querySelectorAll(
                    `${this.scope_selector} [id^=id__${element.dataset.field}]`);
                inputs.forEach(input => {
                    input.checked = parseInt(element.dataset.value);
                });
                this._filteredData();
            };
        });
    };


    /**
     * imprime el mapa
     */ 
    render = () =>{
        this._hiddenSearchInput();
        this._resetViewButton(); 

        this._menuTheme();

        if(this.filters.length > 0){
            this._filterButton();
            this._filterContainer();
            this._createFilters(this.filters);
        }

        this.titleLayer.addTo(this.map);

        this._filteredData();
        this._totalsInfo();
        if(this.scroll && this.hasHash()){
            this.scrollCenter();
        }
        this.checkUncheckFilters();
        this.filterChange((event) => {
            event.preventDefault();
            this._filteredData();
        });

        setTimeout(this.gotoHashedEntry, this.anchor_delay);
        if(this.filters_visible){
            this._filterContainerHeight();
        }
        this._setThemes();
        
    };
};
// end of class

/**
 * PONCHO MAP SEARCH
 * 
 * @summary Busca marcadores 
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css, PonchoMap, 
 * PonchoMapFilter
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
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
class PonchoMapSearch {
    /**
     * Constructor
     * @param {object} instance PonchoMap() o PonchoMapFilter() 
     * @param {object} options Grupo de opciones para el buscador. 
     */
    constructor(instance, options){
        const defaults = {
            "scope": false,
            "placeholder": "Su búsqueda",
            "search_fields": instance.search_fields,
            "sort": true,
            "sort_reverse": false,
            "sort_key": "text",
            "datalist": true
        };
        this.instance = instance;
        let opts = Object.assign({}, defaults, options);
        this.text = (instance.title ? instance.title : false);
        this.datalist = opts.datalist;
        this.placeholder = opts.placeholder;
        this.scope = opts.scope;
        this.scope_sufix = `--${this.scope}`;
        this.sort = opts.sort;
        this.sort_reverse = opts.sort_reverse;
        this.search_scope_selector = (
            this.scope ? `[data-scope="${this.scope}"]`: "");
        this.instance.search_fields = opts.search_fields;
        this.instance.accesible_menu_search = [
            {
              "text": "Hacer una búsqueda",
              "anchor": `#id-poncho-map-search${this.scope_sufix}`
            }
        ];
    };

    /**
     * Ordena un listado de objetos.
     * @param {object} entries - Array de objetos.
     * @param {string} key - Clave por la que se quiere ordenar. 
     * @returns {object} - Entradas ordenadas
     */
    sortData = (entries, key) => {
        let order = entries.sort((a, b) => {
            const clearString = (e) => {
                this.instance.removeAccents(e).toUpperCase()
            };
            if (clearString(a[key]) < clearString(b[key])){
                return -1;
            }
            if (clearString(a[key]) > clearString(b[key])){
                return 1;
            }
            return 0;
        });

        if(this.sort_reverse){
            return order.reverse();
        }      
        return order;
    };

    /**
     * Ejecuta una búsqueda desde un input text
     * @returns {undefined}
     */
    _triggerSearch = () => {
        const input = document.querySelector(
            `${this.search_scope_selector} .js-poncho-map-search__input`);
            input.id = `id-poncho-map-search${this.scope_sufix}`;
        const submit = document.querySelectorAll(
                `${this.search_scope_selector} .js-poncho-map-search__submit`);

        submit.forEach(e => {
            e.onclick = (event => {
                event.preventDefault();
                const element = document.querySelector(
                      `#js-search-input${this.instance.scope_sufix}`);
                element.value = input.value;
                const term = input.value;
                this._renderSearch(term);
            });
        });
    };

    /**
     * en el keyup copia el value al input hidden de filtros.
     * @returns {undefined}
     */
    _keyup = () => {
        const input = document.querySelectorAll(
              `${this.search_scope_selector} .js-poncho-map-search__input`);
        input.forEach(ele => {

            const filter_search_input = document.querySelector(
                `#js-search-input${this.instance.scope_sufix}`);
            ele.onkeyup = (() => {
              filter_search_input.value = ele.value;
            });
            ele.onkeydown = (() => {
              filter_search_input.value = ele.value;
            });
        });
    };

    /**
     * Agrega el placeholder si fué seteado en las opciones.
     * @returns {undefined}
     */
    _placeHolder = () => {
        if(!this.placeholder){
            return "";
        }
        document.querySelectorAll(
              `${this.search_scope_selector} .js-poncho-map-search__input`)
            .forEach(element => element.placeholder = this.placeholder.toString());
    };

    /**
     * Hace una búsqueda basado en el término escrito en el input de
     * búsqueda.
     * @returns {undefined}
     */
    _renderSearch = (term) => {
        const entries = this.instance._filterData();
        // Renderizo el mapa
        // @see PonchoMap
        this.instance.markersMap(entries); 
        if(this.instance.slider){
            this.instance._renderSlider();
            this.instance._clickeableFeatures();
            this.instance._clickeableMarkers();
            this.instance._clickToggleSlider();
        }

        if(this.instance.hash){
            this.instance._urlHash();
        }
        // Alejo el mapa a su posición por defecto.
        // @see PonchoMap resetView()
        this.instance.resetView();
        // Si la búsqueda encontró una sola entrada, voy a esa
        // entrada y muestro la info, ya sea un popUp o un slider.
        // Si hay más de una entrada muestro los markers y hago 
        // zoom abarcando el límite de todos ellos.
        if(entries.length == 1){
            this.instance.gotoEntry(entries[0].properties[this.instance.id]);
        } else if(term.trim() != "") {
            this.instance.removeHash();
            setTimeout(this.instance.fitBounds, this.instance.anchor_delay);
        }

        this.instance._helpText(entries);
        this.instance._resetSearch();
        this.instance._clickToggleFilter();
        this.instance._setFetureAttributes();
        this.instance._accesibleMenu();
    };

    /**
     * Agrega options en el claslist del input de búsqueda.
     * ```
     * <datalist>
     *     <option>Agregado 1</option>
     *     <option>Agregado 2</option>
     *     ...
     * </datalist>
     * ```
     * @returns {undefined}
     */
    _addDataListOptions = () => {
        if(!this.datalist){
            return null;
        }
        document.querySelectorAll(
                // se corrige un typo.
                `${this.search_scope_selector} .js-porcho-map-search__list,`
                + ` ${this.search_scope_selector} .js-poncho-map-search__list`)
            .forEach(element => {
                element.innerHTML = "";
                const options = (content) => {
                    const opt = document.createElement("option"); 
                    opt.value = content; 
                    return opt;
                };
                // Asocio el input con el datalist.
                const search_input = document.querySelector(
                  `${this.search_scope_selector} .js-poncho-map-search__input`
                );
                const datalist_id = `id-datalist${this.scope_sufix}`;
                search_input.setAttribute("list", datalist_id);
                element.id = datalist_id;
                this.instance.filtered_entries.forEach(e => {
                    if(!e.properties[this.text]){
                        return;
                    }
                    element.appendChild(options(e.properties[this.text]));
                });
        });
    };

    /**
     * Agrega el aria role y aria label al grupo de buscador.
     * @accesibility
     * @returns {undefined}
     */
    _searchRegion = () => {
        const element = document.querySelector(this.search_scope_selector);
        element.setAttribute("role", "region");
        element.setAttribute("aria-label", "Buscador");
    };

    /**
     * Prepara el componente de búsqueda
     */
    render = () => {
        this._placeHolder();
        this._triggerSearch();
        this._addDataListOptions();
        
        this.instance.filterChange((event) => {
            event.preventDefault();
            this.instance._filteredData();
            this._addDataListOptions();
        })
        this._searchRegion();
        this._keyup();
        this.instance._accesibleMenu();
    }
};

/**
 * Helpers para manejar los json provenientes de Google Sheets.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 */
class GapiSheetData {
    constructor(options){
        const defaults = {
            "gapi_key": "AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY",
            "gapi_uri": "https://sheets.googleapis.com/v4/spreadsheets/"
        };
        let opts = Object.assign({}, defaults, options);
        this.gapi_key = opts.gapi_key;
        this.gapi_uri = opts.gapi_uri;
    }

    /**
     * URI para obtener el json de google sheet.
     * 
     * @param {string} page Nombre de la página a obtener.
     * @param {string} spreadsheet Id del documento Google Sheet.
     * @param {string} api_key Google API Key.
     * @returns {string} URL
     */
    url = (page, spreadsheet, api_key) => {
        const key = (typeof api_key !== "undefined" ? api_key : this.gapi_key);
        return [
            "https://sheets.googleapis.com/v4/spreadsheets/",
            spreadsheet, "/values/", page, "?key=", key, "&alt=json"
        ].join("");
    };

    /**
     * Retorna los elemento del json
     */
    json_data = (json) => {
        const feed = this.feed(json);
        return {
            "feed": feed,
            "entries": this.entries(feed),
            "headers": this.headers(feed)
        };
    };

    /**
     * Retorna con una estructura más cómoda para usar
     * @param {object} response Feed Json 
     * @returns {object}
     */
    feed = (response, lowercase = true) => {
        const keys = response.values[0];
        const regex = / |\/|_/ig;
        let entry = [];

        response.values.forEach((v, k) => {
            if(k > 0){

            let zip = {};
            for(var i in keys){
                var d = (v.hasOwnProperty(i))? v[i].trim() : "";
                if(lowercase){
                    zip[`${ keys[i].toLowerCase().replace(regex, "") }`] = d;
                } else {
                    zip[`${ keys[i].replace(regex, "") }`] = d;
                }
            }
            entry.push(zip);
            }
        });
        return entry;
    };

    /**
     * Variables.
     */
    gapi_feed_row = (data, separator="-", filter_prefix=true) => {
        const prefix = filter_prefix ? "filtro-" : "";
        const feed_keys = Object.entries(data);
        const clean = k => k.replace("gsx$", "")
                            .replace(prefix, "").replace(/-/g, separator);
        let list = {};
        feed_keys.map(v => list[clean(v[0])] = v[1]["$t"]);
        return list;
    };

    /**
     * Retrona las entradas excluyendo el primer row, ya que 
     * pertenece a los headers.
     * 
     * @param {object} feed 
     * @returns {object}
     */
    entries = (feed) => {
        return  feed.filter((v,k) => k > 0);
    };

    /**
     * Obtiene el primer row que es igual a los headers.
     * @param {*} feed 
     * @returns 
     */
    headers = (feed) => {
        return feed.find((v,k) => k == 0);
    };
};



/* module.exports REMOVED */

/**
 * TRANSLATE
 * 
 * @summary Traductor de cadenas de texto
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * 
 * 
 * MIT License
 * 
 * Copyright (c) 2023 Argentina.gob.ar
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
class TranslateHTML {
    ATTRIBUTES = [
        "title", "placeholder", "alt", "value", "href", "src", "lang"
    ];


    /**
     * @param {object} dictionary Objeto con diccionario de terminos 
     * a traducir.
     * @param {object} attributes Objeto con diccionario de terminos 
     * a traducir.
     */
    constructor(dictionary = [], attributes = []) {
        this.dictionary = dictionary;
        this.attributes = (attributes.length ? attributes : this.ATTRIBUTES);
    }


    /**
     * Traduce atributos html
     * 
     * @param {object} dictionary Objeto con texto a buscar y reemplazo.
     * @summary Traduce el listado parado en el constructor o admite 
     * un listado por parámetros. 
     * @example 
     * const list = [
     *     ["traducir", "translate"]
     * ] 
     * (new TranslateHTML).translateAttributes(list)
     */
    translateAttributes = (dictionary=false) => {
        const dict = (dictionary ? dictionary : this.dictionary);
        this.attributes.forEach((item) =>
            dict.forEach((translate) =>
                document
                    .querySelectorAll(`[${item}='${translate[0]}']`)
                    .forEach((t) => (t[item] = translate[1]))
            )
        );
    };


    /**
     * Traduce una cadena de texto dentro de cualquier etiqueta HTML.
     * 
     * @param {string} search Cadena de texto a buscar
     * @param {string} replacement Cadena de texto con la traducción
     * @example
     * (new TranslateHTML).translateHTML("traducir", "translate")
     */
    translateHTML = (search, replacement) => {
        var xpathResult = document.evaluate(
            "//*/text()",
            document,
            null,
            XPathResult.ORDERED_NODE_ITERATOR_TYPE,
            null
        );
        var results = [];
        var res;
        while ((res = xpathResult.iterateNext())) {
            results.push(res);
        }
        results.forEach((res) => {
            var newTextContent = res.textContent.replace(search, replacement);
            if (newTextContent !== res.textContent) {
                var newNode = document.createTextNode(newTextContent);
                res.parentNode.replaceChild(newNode, res);
            }
        });
    };


    /**
     * Traduce el diccionario de términos
     */
    translate = () => {
        this.dictionary.forEach((t) => {
            const re = new RegExp(t[0], "g");
            this.translateHTML(re, t[1]);
        });
    };
}

