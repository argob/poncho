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
 * Hace un refactor del número hexa
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

    if (hex.length < 3 || hex.length > 6){
        return false;
    } else if(hex.length == 3){
        hex = Array.from(hex).map(a => a.repeat(2)).join("");
    }
    return `#${hex}`;
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
const ponchoColorByHex = value => ponchoColorDefinitionsList.find(f => {
    const colorToFind = cleanUpHex(value);
    const colorToCompare = cleanUpHex(f.color);
    if(colorToFind == colorToCompare){
        return true;
    }
    return false;
});


// $START_TEST$
// ¡Atención! Patch para testear non-module
module.exports = {ponchoColorDefinitionsList, ponchoColorDefinitions, ponchoColor, ponchoColorByHex, cleanUpHex};
// $END_TEST$