/**
 * Definición de colores Poncho
 */
const ponchoColorDefinitionsList = [
    {
        description: "",
        name: "Azul",
        color: "#0072bb",
        code: "primary",
        alias: ["azul", "primary"],
    },
    {
        description: "Acción principal o exitosa",
        name: "Verde",
        color: "#2e7d33",
        code: "success",
        alias: ["verde", "success"],
    },
    {
        description: "Atención o peligro",
        name: "Rojo",
        color: "#c62828",
        code: "danger",
        alias: ["rojo", "danger"],
    },
    {
        description: "Foco o alerta",
        name: "Amarillo",
        color: "#f9a822",
        code: "warning",
        alias: ["amarillo", "warning"],
    },
    {
        description: "",
        name: "Celeste",
        color: "#2897d4",
        code: "info",
        alias: ["celeste", "info"],
    },
    {
        description: "Elementos básicos",
        name: "Negro",
        color: "#333",
        code: "black",
        alias: ["negro", "black"],
    },
    {
        description: "Enlace visitado",
        name: "Uva",
        color: "#6a1b99",
        code: "uva",
        alias: ["uva"],
    },
    {
        description: "Texto secundario (subtitulos)",
        name: "Gris",
        color: "#525252",
        code: "muted",
        alias: ["gris", "muted"],
    },
    {
        description: "Gris área",
        name: "Gris intermedio",
        color: "#f2f2f2",
        code: "gray",
        alias: ["grisintermedio", "gris-area", "gray"],
    },
    {
        description: "Fondo footer/header",
        name: "Celeste Argentina",
        color: "#37bbed",
        code: "celeste-argentina",
        alias: ["celesteargentina", "celeste-argentina"],
    },
    {
        description: "",
        name: "Fucsia",
        color: "#ec407a",
        code: "fucsia",
        code: "fucsia",
        alias: ["fucsia"],
    },
    {
        description: "",
        name: "Arándano",
        color: "#c2185b",
        code: "arandano",
        alias: ["arandano"],
    },
    {
        description: "",
        name: "Cielo",
        color: "#039be5",
        code: "cielo",
        alias: ["cielo"],
    },
    {
        description: "",
        name: "Verdin",
        color: "#6ea100",
        code: "verdin",
        alias: ["verdin"],
    },
    {
        description: "",
        name: "Lima",
        color: "#cddc39",
        code: "lima",
        alias: ["lima"],
    },
    {
        description: "",
        name: "Maiz",
        color: "#ffce00",
        code: "maiz",
        alias: ["maiz", "maíz"],
    },
    {
        description: "",
        name: "Tomate",
        color: "#ef5350",
        code: "tomate",
        alias: ["tomate"],
    },
    {
        description: "",
        name: "Naranja oscuro",
        color: "#EF6C00",
        code: "naranja",
        alias: ["naranjaoscuro", "naranja"],
    },
    {
        description: "",
        name: "Verde azulado",
        color: "#008388",
        code: "verde-azulado",
        alias: ["verdeazulado", "verde-azulado"],
    },
    {
        description: "",
        name: "Escarapela",
        color: "#2cb9ee",
        code: "escarapela",
        alias: ["escarapela"],
    },
    {
        description: "",
        name: "Lavanda",
        color: "#9284be",
        code: "lavanda",
        alias: ["lavanda"],
    },
    {
        description: "",
        name: "Mandarina",
        color: "#f79525",
        code: "mandarina",
        alias: ["mandarina"],
    },
    {
        description: "",
        name: "Palta",
        color: "#50b7b2",
        code: "palta",
        alias: ["palta"],
    },
    {
        description: "",
        name: "Cereza",
        color: "#ed3d8f",
        code: "cereza",
        alias: ["cereza"],
    },
    {
        description: "",
        name: "Limón",
        color: "#d7df23",
        code: "limon",
        alias: ["limon"],
    },
    {
        description: "",
        name: "Verde Jade",
        color: "#066",
        code:  "verde-jade",
        alias: ["verdejade", "verde-jade"],
    },
    {
        description: "",
        name: "Verde Aloe",
        color: "#4fbb73",
        code: "verde-aloe",
        alias: ["verdealoe", "verde-aloe"],
    },
    {
        description: "",
        name: "Verde Cemento",
        color: "#b4beba",
        code: "verde-cemento",
        alias: ["verdecemento", "verde-cemento"],
    },
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
const hexToBinary = value => {
    let hex = value.toString().replace("#", "").trim();
    if(hex.length == 3){
        hex = Array.from(hex).map(a => a.repeat(2)).join("");
    }
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
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
    const colorToFind = hexToBinary(value);
    const colorToCompare = hexToBinary(f.color);
    if(colorToFind == colorToCompare){
        return true;
    }
    return false;
});


// $START_TEST$
// ¡Atención! Patch para testear non-module
module.exports = {ponchoColorDefinitionsList, ponchoColorDefinitions, ponchoColor, findPonchoColorByHex};
// $END_TEST$