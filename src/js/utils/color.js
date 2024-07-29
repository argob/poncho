/**
 * Configuración de colores www.argentina.gob.ar
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
const ponchoColorDefinitionsList = [{"name":"Colores gestión","space":"gob","data":[{"scope":"gob","name":"Azul","group":"azul","color":{"900":"#232D4F","800":"#2C3C5F","700":"#354B6E","600":"#3E5A7E","500":"#5A7290","400":"#7589A3","300":"#91A1B5","200":"#ACB8C8","100":"#C8D0DA","50":"#E3E7ED"},"instance":[{"name":"Azul","color_code":"gob-azul","description":"Color principal","scope":"gob","related_color":"900","parent_group":"azul","color":"#232D4F","variant":{"half":"#9296A7"},"alias":["azul","primary","gob-azul"]},{"name":"Secondary","color_code":"gob-secundario","description":"","scope":"gob","related_color":"600","parent_group":"azul","color":"#3E5A7E","variant":{},"alias":["gob-secundario","secundario","secondary","info"]}]},{"scope":"gob","name":"Ocre","group":"ocre","color":{"50":"#FAF8ED","100":"#F4F0DB","200":"#EAE1B7","300":"#E9CE8C","400":"#E7BA61","500":"#C98941","600":"#AA5821","700":"#8C2701","800":"#6F2001","900":"#511901"},"instance":[{"name":"Arena","color_code":"gob-arena","description":"","scope":"gob","related_color":"200","parent_group":"ocre","color":"#EAE1B7","variant":{"light":"#FAF8ED","dark":"#E7BA61","half":"#F5F0DB"},"alias":["gob-arena"]},{"name":"Amarillo","color_code":"gob-amarillo","description":"Foco o alerta","scope":"gob","related_color":"400","parent_group":"ocre","color":"#E7BA61","variant":{"light":"#EAE1B7","dark":"#AA5821","half":"#F3DDB0"},"alias":["warning","amarillo-intenso","gob-amarillo","amarillo"]},{"name":"Marrón oscuro","color_code":"gob-marron-oscuro","description":"","scope":"gob","related_color":"900","parent_group":"ocre","color":"#511901","variant":{},"alias":["gob-marron-oscuro"]}]},{"scope":"gob","name":"Morado","group":"morado","color":{"default":"#3A3796"},"instance":[{"name":"Azul morado","color_code":"gob-azul-morado","description":"","scope":"gob","related_color":"default","parent_group":"morado","color":"#3A3796","variant":{},"alias":["gob-azul-morado"]}]}]},{"name":"www.argentina.gob.ar","space":"arg","data":[{"scope":"arg","name":"Verde","group":"verde","color":{"50":"#F1F5D7","100":"#DEE8A3","200":"#CCDB6E","300":"#B9CE39","400":"#93B727","500":"#6EA015","600":"#4E8F24","700":"#2E7D33","800":"#27692A","900":"#1F5421"},"instance":[{"name":"Verde","color_code":"arg-verde","description":"","scope":"arg","related_color":"700","parent_group":"verde","color":"#2E7D33","variant":{"light":"#6EA015","half":"#96BE99","dark":"#1F5421"},"alias":["verde","arg-verde","success"]},{"name":"Verdín","color_code":"arg-verdin","description":"","scope":"arg","related_color":"500","parent_group":"verde","color":"#6EA015","variant":{"light":"#B9CE39","dark":"#2E7D33"},"alias":["arg-verdin","verdin"]},{"name":"Lima","color_code":"arg-lima","description":"","scope":"arg","related_color":"300","parent_group":"verde","color":"#B9CE39","variant":{"light":"#DEE8A3","dark":"#6EA015"},"alias":["arg-lima","limon","lima"]}]},{"scope":"arg","name":"Amarillo","group":"amarillo","color":{"50":"#FFFAE8","100":"#FFF1C0","200":"#FFE997","300":"#FFE06E","400":"#FFD745","500":"#FFCE1C","600":"#D8AE18","700":"#B18F15","800":"#8A6F12","900":"#634F0E"},"instance":[{"name":"Maíz","color_code":"arg-maiz","description":"","scope":"arg","related_color":"500","parent_group":"amarillo","color":"#FFCE1C","variant":{"light":"#FFE997","dark":"#B18F15"},"alias":["arg-maiz","maiz"]}]},{"scope":"arg","name":"Fucsia","group":"fucsia","color":{"50":"#FCDDE6","100":"#F8B6C9","200":"#F48EAB","300":"#F16798","400":"#ED3F85","500":"#EC407A","600":"#D72C6B","700":"#C2185B","800":"#9A144A","900":"#721038"},"instance":[{"name":"Arándano","color_code":"arg-arandano","description":"","scope":"arg","related_color":"700","parent_group":"fucsia","color":"#C2185B","variant":{"light":"#EC407A","dark":"#721038","half":"#E18CAD"},"alias":["arg-arandano","arandano"]},{"name":"Fucsia","color_code":"arg-fucsia","description":"","scope":"arg","related_color":"500","parent_group":"fucsia","color":"#EC407A","variant":{"light":"#F16798","dark":"#9A144A"},"alias":["fucsia","arg-fucsia","cereza"]},{"name":"Rosado","color_code":"arg-rosado","description":"","scope":"arg","related_color":"200","parent_group":"fucsia","color":"#F48EAB","variant":{"light":"#FCDDE6","dark":"#ED3F85","half":"#FAC7D5"},"alias":["arg-rosado"]}]},{"scope":"arg","name":"Violeta","group":"violeta","color":{"50":"#E9E6F2","100":"#D3CEE5","200":"#BEB5D8","300":"#A89DCB","400":"#9284BE","500":"#8561B2","700":"#6A1B99","800":"#4B0F7A","900":"#2C035C","600":"#773EA5"},"instance":[{"name":"Lavanda","color_code":"arg-lavanda","description":"","scope":"arg","related_color":"400","parent_group":"violeta","color":"#9284BE","variant":{},"alias":["lavanda","arg-lavanda"]},{"name":"Uva","color_code":"arg-uva","description":"","scope":"arg","related_color":"700","parent_group":"violeta","color":"#6A1B99","variant":{},"alias":["uva","arg-uva"]}]},{"scope":"arg","name":"Negro","group":"negro","color":{"50":"#EDEDEF","100":"#DADCDF","200":"#C8CACF","300":"#B5B9BE","400":"#A3A7AE","500":"#90969E","600":"#7E848E","700":"#5B5F65","800":"#37393D","900":"#141414"},"instance":[{"name":"Negro","color_code":"arg-black","description":"Elementos básicos","scope":"arg","related_color":"800","parent_group":"negro","color":"#37393D","variant":{},"alias":["negro","arg-black","black"]},{"name":"Muted","color_code":"arg-muted","description":"Texto secundario (subtítulos)","scope":"arg","related_color":"600","parent_group":"negro","color":"#7E848E","variant":{},"alias":["arg-muted","muted","gris"]}]},{"scope":"arg","name":"Turquesa","group":"turquesa","color":{"50":"#DCF1F0","100":"#C0E5E3","200":"#A4D9D7","300":"#88CECB","400":"#6CC3BE","500":"#50B7B2","600":"#459E99","700":"#3B8681","800":"#306D69","900":"#255450"},"instance":[{"name":"Palta","color_code":"arg-palta","description":"","scope":"arg","related_color":"500","parent_group":"turquesa","color":"#50B7B2","variant":{"half":"#A8DBD9"},"alias":["arg-palta","palta"]},{"name":"Verde azulado","color_code":"arg-verde-azulado","description":"","scope":"arg","related_color":"700","parent_group":"turquesa","color":"#3B8681","variant":{},"alias":["arg-verde-azulado","verdeazulado","verde-azulado"]}]},{"scope":"arg","name":"Azul","group":"azul","color":{"50":"#D8F0FA","100":"#BEE6F6","200":"#75D0F2","300":"#2CB9EE","400":"#18AAEA","500":"#039BE5","600":"#0B7FC0","700":"#14639A","800":"#1C4875","900":"#242C4F"},"instance":[{"name":"Cielo","color_code":"arg-cielo","description":"","scope":"arg","related_color":"500","parent_group":"azul","color":"#039BE5","variant":{},"alias":["cielo","escarapela","arg-cielo","celeste-argentina","celesteargentina"]}]},{"scope":"arg","name":"Rojo","group":"rojo","color":{"50":"#FCDDDC","100":"#F9BBB9","200":"#F69896","300":"#F27673","400":"#EF5350","500":"#E14543","600":"#D43635","700":"#C62828","800":"#A12222","900":"#7C1C1C"},"instance":[{"name":"Rojo","color_code":"arg-rojo","description":"Atención o peligro","scope":"arg","related_color":"700","parent_group":"rojo","color":"#C62828","variant":{"light":"#E14543","dark":"#7C1C1C"},"alias":["danger","arg-rojo","rojo"]},{"name":"Tomate","color_code":"arg-tomate","description":"","scope":"arg","related_color":"400","parent_group":"rojo","color":"#EF5350","variant":{"light":"#F69896","dark":"#C62828"},"alias":["arg-tomate","complementary","tomate"]}]},{"scope":"arg","name":"Naranja","group":"naranja","color":{"50":"#FDE7BF","100":"#FBCE80","200":"#F9B640","300":"#F79D00","400":"#F38500","500":"#EF6C00","600":"#CE5701","700":"#AE4203","800":"#8D2D04","900":"#6C1805"},"instance":[{"name":"Naranja","color_code":"arg-naranja","description":"","scope":"arg","related_color":"500","parent_group":"naranja","color":"#EF6C00","variant":{"light":"#EF6C00","dark":"#6C1805"},"alias":["arg-naranja","naranjaoscuro","naranja"]},{"name":"Mandarina","color_code":"arg-mandarina","description":"","scope":"arg","related_color":"400","parent_group":"naranja","color":"#F38500","variant":{"light":"#F9B640","dark":"#CE5701"},"alias":["arg-mandarina","mandarina"]}]},{"scope":"arg","name":"Blanco","group":"blanco","color":{"default":"#FFFFFF"},"instance":[{"name":"Blanco","color_code":"arg-blanco","description":"","scope":"arg","related_color":"default","parent_group":"blanco","color":"#FFFFFF","variant":{},"alias":["arg-blanco","blanco","white"]}]}]},{"name":"MiArgentina","space":"miarg","data":[{"scope":"miarg","name":"Azul MiArgentina","group":"azul","color":{"default":"#3526C3"},"instance":[{"name":"Azul MiArgentina","color_code":"miarg-azul","description":"Azul principal para aplicaciones MiArgentina","scope":"miarg","related_color":"default","parent_group":"azul","color":"#3526C3","variant":{"half":"#6B66CC"},"alias":["miarg-azul"]}]},{"scope":"miarg","name":"Celeste MiArgentina","group":"celeste","color":{"default":"#2CB9EE"},"instance":[{"name":"Celeste MiArgentina","color_code":"miarg-celeste","description":"","scope":"miarg","related_color":"default","parent_group":"celeste","color":"#2CB9EE","variant":{},"alias":["miarg-celeste"]}]},{"scope":"miarg","name":"Amarillo claro MiArgentina","group":"amarillo-claro","color":{"default":"#ffe9b8"},"instance":[{"name":"Amarillo claro MiArgentina","color_code":"miarg-amarillo-claro","description":"","scope":"miarg","related_color":"default","parent_group":"amarillo-claro","color":"#ffe9b8","variant":{},"alias":["miarg-amarillo-claro"]}]},{"scope":"miarg","name":"Rosa claro MiArgentina","group":"rosa-claro","color":{"default":"#EECCCF"},"instance":[{"name":"Rosa claro MiArgentina","color_code":"miarg-rosa-claro","description":"","scope":"miarg","related_color":"default","parent_group":"rosa-claro","color":"#EECCCF","variant":{},"alias":["miarg-rosa-claro"]}]},{"scope":"miarg","name":"Verde claro MiArgentina","group":"verde-claro","color":{"default":"#CFEEDC"},"instance":[{"name":"Verde claro MiArgentina","color_code":"miarg-verde-claro","description":"","scope":"miarg","related_color":"default","parent_group":"verde-claro","color":"#CFEEDC","variant":{},"alias":["miarg-verde-claro"]}]},{"scope":"miarg","name":"Azul oscuro MiArgentina","group":"azul-oscuro","color":{"default":"#222C50"},"instance":[{"name":"Azul oscuro MiArgentina","color_code":"miarg-oscuro","description":"","scope":"miarg","related_color":"default","parent_group":"azul-oscuro","color":"#222C50","variant":{},"alias":["miarg-oscuro"]}]},{"scope":"miarg","name":"Gris MiArgentina","group":"gris","color":{"default":"#7E848E"},"instance":[{"name":"Gris MiArgentina","color_code":"miarg-gris","description":"","scope":"miarg","related_color":"default","parent_group":"gris","color":"#7E848E","variant":{},"alias":["miarg-gris"]}]},{"scope":"miarg","name":"Celeste claro MiArgentina","group":"celeste-claro","color":{"default":"#BEE6F6"},"instance":[{"name":"Celeste claro MiArgentina","color_code":"miarg-celeste-claro","description":"","scope":"miarg","related_color":"default","parent_group":"celeste-claro","color":"#BEE6F6","variant":{},"alias":["miarg-celeste-claro"]}]}]},{"name":"Colores de la bandera de la República Argentina","space":"bandera","data":[{"scope":"bandera","name":"Amarillo","group":"amarillo","color":{"default":"#FCBF49"},"instance":[{"name":"Amarillo Bandera","color_code":"bandera-amarillo","description":"Color amarillo oficial para la bandera Argentina","scope":"bandera","related_color":"default","parent_group":"amarillo","color":"#FCBF49","variant":{},"alias":["bandera-amarillo"]}]},{"scope":"bandera","name":"Celeste","group":"celeste","color":{"default":"#75AADB"},"instance":[{"name":"Celeste Bandera","color_code":"bandera-celeste","description":"Color celeste oficial para la bandera Argentina","scope":"bandera","related_color":"default","parent_group":"celeste","color":"#75AADB","variant":{},"alias":["bandera-celeste"]}]},{"scope":"bandera","name":"Marrón","group":"marron","color":{"default":"#843511"},"instance":[{"name":"Marrón Bandera","color_code":"bandera-marron","description":"Color marrón oficial para la bandera Argentina","scope":"bandera","related_color":"default","parent_group":"marron","color":"#843511","variant":{},"alias":["bandera-marron"]}]}]},{"name":"Gendarmería Nacional","space":"gna","data":[{"scope":"gna","name":"Verde jade","group":"verde-jade","color":{"default":"#006666"},"instance":[{"name":"Verde jade","color_code":"gna-verde-jade","description":"","scope":"gna","related_color":"default","parent_group":"verde-jade","color":"#006666","variant":{},"alias":["gna-verde-jade","verde-jade","verdejade"]}]},{"scope":"gna","name":"Verde aloe","group":"verde-aloe","color":{"default":"#4FBB73"},"instance":[{"name":"Verde aloe","color_code":"gna-verde-aloe","description":"","scope":"gna","related_color":"default","parent_group":"verde-aloe","color":"#4FBB73","variant":{},"alias":["gna-verde-aloe","verde-aloe"]}]},{"scope":"gna","name":"Verde cemento","group":"verde-cemento","color":{"default":"#B4BEBA"},"instance":[{"name":"Verde cemento","color_code":"gna-verde-cemento","description":"","scope":"gna","related_color":"default","parent_group":"verde-cemento","color":"#B4BEBA","variant":{},"alias":["verde-cemento","verdecemento","gna-verde-cemento"]}]}]}];


/**
 * Códigos de color válidos para utilizar en ilustraciones. 
 */
const illustrationColors = [
    "primary",
    "miarg-azul",
    "palta",
    "success",
    "arandano",
    "rosado",
    "arena",
    "warning"
];


const ponchoColorList = (colorDefinitionsList) => {
    result = colorDefinitionsList
        .flatMap( m => m.data.flatMap(i => i.instance.map(x => x)) );
    return result || [];
};


const ponchoColorVariables = (colorDefinitions) => { 
    const colors = ponchoColorList(colorDefinitions);

    let collect = [];
    
    colors.flatMap(m => {
        const {alias, color, variant={}} = m;

        alias.forEach(function(a){
            collect.push( [a, color] );
            Object.entries(variant).forEach(function(value){
                collect.push( [`${a}-${value[0]}`, value[1]] );
            });
        })
    });
    return collect;
};


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
function ponchoColorDefinitions(ponchoColor){
    if(typeof ponchoColor == undefined || !ponchoColor.trim()){
        return;
    }
    const lowerCasePonchoColor = ponchoColor.toLowerCase();
    let result = null;
    let gSpace = "";
    
    // Iteración por espacios (space)
    for(let i = 0; i <= ponchoColorDefinitionsList.length - 1; i += 1){
        const {data, space} = ponchoColorDefinitionsList[i];
        gSpace = space;
        
        // Itero por cada grupo de color dentro de data
        for(let y = 0; y <= data.length - 1; y += 1) {
            const {instance} = data[y];

            // Itero sobre las instancias de color
            for(let x = 0; x <= instance.length - 1; x += 1) {
            const {alias} = instance[x];
                if (alias.includes( lowerCasePonchoColor )) {
                    result = instance[x];
                    break;
                }
            }
            if (result) break;

        }
    }

    return result;
};


/**
 * Grupo de color
 * @param {string} name Nombre del grupo
 * @returns
 */
const ponchoColorGroup = (themeSpace, spaceGroup) => {

    if(typeof spaceGroup == undefined || !spaceGroup?.trim()){
        return;
    }
    let result;
    for(let i = 0; i <= ponchoColorDefinitionsList.length -1; i += 1){
        const {data, space} = ponchoColorDefinitionsList[i];
        result = data.find(obj => (obj.group==spaceGroup && space==themeSpace));
        if (result) break;
    }
    return result;
};


/**
 * Espacio de color
 * @param {string} name Nombre del espacio
 * @returns
 */
const ponchoColorSpace = (space) => {
    if(typeof space == undefined || !space?.trim()){
        return;
    }

    return ponchoColorDefinitionsList.find(obj => obj.space==space);
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
const ponchoColor = color => {
    const defaultColor = "#99999";

    if (typeof color !== "string") {
        console.warn(`Invalid color provided. Using default: ${defaultColor}`);
        return defaultColor;
    }

    const definition = ponchoColorDefinitions( color.toLocaleLowerCase() );
    if (definition) {
        return definition.color || defaultColor;
    }

    return defaultColor;
};


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
function ponchoColorByHex(hexColor){
    if(!isValidHex(hexColor)){
        return;
    }

    var result = [];
    const targetColor = cleanUpHex(hexColor);

    for(let i = 0; i <= ponchoColorDefinitionsList.length -1; i += 1){
        let {data} = ponchoColorDefinitionsList[i];

        for(let entry of data){
            const {instance} = entry;
            for(let item of instance){
                const {color} = item;
                if( cleanUpHex(color) == targetColor ){
                    result.push(item);
                }
            }
        }
    }
    return result;
}


/**
 * Converson de HEX a RGB.
 * @param {string} hexColor Color hexadecimal
 * @returns {object}
 */
const hexToRgb = hexColor => {
    if (!isValidHex(hexColor)) {
        return null;
    }

    const hex = cleanUpHex(hexColor);
    const cleanedHex = (hex.startsWith("#") ? hex.slice(1) : hex);

    const red = parseInt(cleanedHex.slice(0, 2), 16);
    const green = parseInt(cleanedHex.slice(2, 4), 16);
    const blue = parseInt(cleanedHex.slice(4, 6), 16);

    return [red, green, blue];
}


function isValidPonchoColorDefList(colorDefinitins){
    return (
        Array.isArray(colorDefinitins) &&
        colorDefinitins.length > 0 &&
        colorDefinitins[0].hasOwnProperty('space')
    );
}


/**
 * Valida un color hexadecimal
 * @param {string} hexColor Color hexadecimal 
 * @returns {boolean}
 */
function isValidHex(hexColor){
    if (hexColor === null || hexColor === undefined) {
        return false;
    }

    if (typeof hexColor !== 'string') {
        return false;
    }

    const regx = new RegExp(/^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/);
    if (!regx.test(hexColor)) {
        console.warn("Invalid hex color format:", hexColor);
        return false;
    }
    return true;    
}




if (typeof exports !== "undefined") {
    module.exports = {
        ponchoColorDefinitions, ponchoColor, ponchoColorByHex, cleanUpHex,
        ponchoColorDefinitionsList, illustrationColors
    };
}