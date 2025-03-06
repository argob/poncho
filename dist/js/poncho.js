/**
 * Listado de colores colores www.argentina.gob.ar
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
const ponchoColorDefinitionsList = 
[{"name": "www.argentina.gob.ar", "space": "arg", "hidden_space": false, "description": "", "data": [{"scope": "arg", "name": "Azul principal", "group": "primary", "color": {"900": "#232D4F", "800": "#2C3C5F", "700": "#354B6E", "600": "#3E5A7E", "500": "#5A7290", "400": "#7589A3", "300": "#91A1B5", "200": "#ACB8C8", "100": "#C8D0DA", "50": "#E3E7ED"}, "instance": [{"name": "Azul", "code": "arg-azul", "description": "Color principal", "scope": "arg", "related_color": "900", "parent_group": "primary", "color": "#232D4F", "variant": [{"variant": "half", "color": "#9296A7", "name": "Azul medio tono", "code": "arg-azul-half"}, {"variant": "lighter", "color": "#C8D0DA", "name": "Azul muy claro", "code": "arg-azul-lighter"}], "alias": [{"code": "arg-azul", "exclude": false}, {"code": "primary", "exclude": true}, {"code": "azul", "exclude": true}, {"code": "azul-marino", "exclude": true}, {"code": "primary-alt", "exclude": true}]}, {"name": "Azul cobalto", "code": "arg-secundario", "description": "", "scope": "arg", "related_color": "600", "parent_group": "primary", "color": "#3E5A7E", "variant": [], "alias": [{"code": "arg-secundario", "exclude": false}, {"code": "secondary", "exclude": true}, {"code": "secundario", "exclude": true}]}, {"name": "Primary light", "code": "arg-primary-light", "description": "", "scope": "arg", "related_color": "50", "parent_group": "primary", "color": "#E3E7ED", "variant": [], "alias": [{"code": "arg-primary-light", "exclude": false}, {"code": "primary-light", "exclude": true}]}, {"name": "Azul acero", "code": "arg-info", "description": "", "scope": "arg", "related_color": "500", "parent_group": "primary", "color": "#5A7290", "variant": [{"variant": "lighter", "color": "#E3E7ED", "name": "Azul acero muy claro", "code": "arg-info-lighter"}], "alias": [{"code": "arg-info", "exclude": false}, {"code": "info", "exclude": true}]}]}, {"scope": "arg", "name": "Verde", "group": "verde", "color": {"50": "#F1F5D7", "100": "#DEE8A3", "200": "#CCDB6E", "300": "#B9CE39", "400": "#93B727", "500": "#6EA015", "600": "#4E8F24", "700": "#2E7D33", "800": "#27692A", "900": "#1F5421"}, "instance": [{"name": "Verde", "code": "arg-verde", "description": "", "scope": "arg", "related_color": "700", "parent_group": "verde", "color": "#2E7D33", "variant": [{"variant": "light", "color": "#6EA015", "name": "Verde claro", "code": "arg-verde-light"}, {"variant": "half", "color": "#96BE99", "name": "Verde medio tono", "code": "arg-verde-half"}, {"variant": "dark", "color": "#1F5421", "name": "Verde oscuro", "code": "arg-verde-dark"}], "alias": [{"code": "arg-verde", "exclude": false}, {"code": "success", "exclude": true}, {"code": "verde", "exclude": true}]}, {"name": "Verd\u00edn", "code": "arg-verdin", "description": "", "scope": "arg", "related_color": "500", "parent_group": "verde", "color": "#6EA015", "variant": [{"variant": "light", "color": "#B9CE39", "name": "Verd\u00edn claro", "code": "arg-verdin-light"}, {"variant": "dark", "color": "#2E7D33", "name": "Verd\u00edn oscuro", "code": "arg-verdin-dark"}], "alias": [{"code": "arg-verdin", "exclude": false}, {"code": "verdin", "exclude": true}]}, {"name": "Lima", "code": "arg-lima", "description": "", "scope": "arg", "related_color": "300", "parent_group": "verde", "color": "#B9CE39", "variant": [{"variant": "light", "color": "#DEE8A3", "name": "Lima claro", "code": "arg-lima-light"}, {"variant": "dark", "color": "#6EA015", "name": "Lima oscuro", "code": "arg-lima-dark"}], "alias": [{"code": "arg-lima", "exclude": false}, {"code": "limon", "exclude": true}, {"code": "lima", "exclude": true}]}]}, {"scope": "arg", "name": "Amarillo", "group": "amarillo", "color": {"50": "#FFFAE8", "100": "#FFF1C0", "200": "#FFE997", "300": "#FFE06E", "400": "#FFD745", "500": "#FFCE1C", "600": "#D8AE18", "700": "#B18F15", "800": "#8A6F12", "900": "#634F0E"}, "instance": [{"name": "Ma\u00edz", "code": "arg-maiz", "description": "", "scope": "arg", "related_color": "500", "parent_group": "amarillo", "color": "#FFCE1C", "variant": [{"variant": "light", "color": "#FFE997", "name": "Ma\u00edz claro", "code": "arg-maiz-light"}, {"variant": "dark", "color": "#B18F15", "name": "Ma\u00edz oscuro", "code": "arg-maiz-dark"}], "alias": [{"code": "arg-maiz", "exclude": false}, {"code": "maiz", "exclude": true}]}]}, {"scope": "arg", "name": "Fucsia", "group": "fucsia", "color": {"50": "#FCDDE6", "100": "#F8B6C9", "200": "#F48EAB", "300": "#F16798", "400": "#ED3F85", "500": "#EC407A", "600": "#D72C6B", "700": "#C2185B", "800": "#9A144A", "900": "#721038"}, "instance": [{"name": "Ar\u00e1ndano", "code": "arg-arandano", "description": "", "scope": "arg", "related_color": "700", "parent_group": "fucsia", "color": "#C2185B", "variant": [{"variant": "light", "color": "#EC407A", "name": "Ar\u00e1ndano claro", "code": "arg-arandano-light"}, {"variant": "dark", "color": "#721038", "name": "Ar\u00e1ndano oscuro", "code": "arg-arandano-dark"}, {"variant": "half", "color": "#E18CAD", "name": "Ar\u00e1ndano medio tono", "code": "arg-arandano-half"}, {"variant": "lighter", "color": "#FCDDE6", "name": "Ar\u00e1ndano muy claro", "code": "arg-arandano-lighter"}], "alias": [{"code": "arg-arandano", "exclude": false}, {"code": "arandano", "exclude": true}]}, {"name": "Fucsia", "code": "arg-fucsia", "description": "", "scope": "arg", "related_color": "500", "parent_group": "fucsia", "color": "#EC407A", "variant": [{"variant": "light", "color": "#F16798", "name": "Fucsia claro", "code": "arg-fucsia-light"}, {"variant": "dark", "color": "#9A144A", "name": "Fucsia oscuro", "code": "arg-fucsia-dark"}], "alias": [{"code": "arg-fucsia", "exclude": false}, {"code": "cereza", "exclude": true}, {"code": "fucsia", "exclude": true}]}, {"name": "Rosado", "code": "arg-rosado", "description": "", "scope": "arg", "related_color": "200", "parent_group": "fucsia", "color": "#F48EAB", "variant": [{"variant": "light", "color": "#FCDDE6", "name": "Rosado claro", "code": "arg-rosado-light"}, {"variant": "dark", "color": "#ED3F85", "name": "Rosado oscuro", "code": "arg-rosado-dark"}, {"variant": "half", "color": "#FAC7D5", "name": "Rosado medio tono", "code": "arg-rosado-half"}], "alias": [{"code": "arg-rosado", "exclude": false}]}]}, {"scope": "arg", "name": "Violeta", "group": "violeta", "color": {"50": "#E9E6F2", "100": "#D3CEE5", "200": "#BEB5D8", "300": "#A89DCB", "400": "#9284BE", "500": "#8561B2", "700": "#6A1B99", "800": "#4B0F7A", "900": "#2C035C", "600": "#773EA5"}, "instance": [{"name": "Lavanda", "code": "arg-lavanda", "description": "", "scope": "arg", "related_color": "400", "parent_group": "violeta", "color": "#9284BE", "variant": [], "alias": [{"code": "arg-lavanda", "exclude": false}, {"code": "lavanda", "exclude": true}]}, {"name": "Uva", "code": "arg-uva", "description": "", "scope": "arg", "related_color": "700", "parent_group": "violeta", "color": "#6A1B99", "variant": [], "alias": [{"code": "arg-uva", "exclude": false}, {"code": "uva", "exclude": true}]}]}, {"scope": "arg", "name": "Negro", "group": "negro", "color": {"50": "#F0F0F0", "100": "#E9E9E9", "200": "#DDDDDD", "300": "#838383", "150": "#DEE2E6", "75": "#F2F2F2", "500": "#555555", "600": "#444444", "900": "#141414", "25": "#FFFFFF"}, "instance": [{"name": "Negro", "code": "arg-negro", "description": "Elementos b\u00e1sicos", "scope": "arg", "related_color": "900", "parent_group": "negro", "color": "#141414", "variant": [{"variant": "lighter", "color": "#F0F0F0", "name": "Negro muy claro", "code": "arg-negro-lighter"}, {"variant": "light", "color": "#DDDDDD", "name": "Gris", "code": "arg-negro-light"}], "alias": [{"code": "arg-negro", "exclude": false}, {"code": "negro", "exclude": true}, {"code": "black", "exclude": true}, {"code": "gray-base", "exclude": true}]}, {"name": "Default", "code": "arg-default", "description": "", "scope": "arg", "related_color": "300", "parent_group": "negro", "color": "#838383", "variant": [], "alias": [{"code": "arg-default", "exclude": false}, {"code": "default", "exclude": true}]}, {"name": "Gray light", "code": "arg-gray-light", "description": "", "scope": "arg", "related_color": "200", "parent_group": "negro", "color": "#DDDDDD", "variant": [], "alias": [{"code": "arg-gray-light", "exclude": false}, {"code": "gray-light", "exclude": true}]}, {"name": "Gray hover", "code": "arg-gray-hover", "description": "", "scope": "arg", "related_color": "100", "parent_group": "negro", "color": "#E9E9E9", "variant": [], "alias": [{"code": "arg-gray-hover", "exclude": false}, {"code": "gray-hover", "exclude": true}]}, {"name": "Gray hover light", "code": "arg-gray-hover-light", "description": "", "scope": "arg", "related_color": "50", "parent_group": "negro", "color": "#F0F0F0", "variant": [], "alias": [{"code": "arg-gray-hover-light", "exclude": false}, {"code": "gray-hover-light", "exclude": true}]}, {"name": "Gris intermedio", "code": "arg-gris-intermedio", "description": "", "scope": "arg", "related_color": "500", "parent_group": "negro", "color": "#555555", "variant": [], "alias": [{"code": "arg-gris-intermedio", "exclude": false}, {"code": "gray", "exclude": true}, {"code": "grisintermedio", "exclude": true}, {"code": "gris-area", "exclude": true}, {"code": "gris", "exclude": false}]}, {"name": "Gray dark", "code": "arg-gray-dark", "description": "", "scope": "arg", "related_color": "600", "parent_group": "negro", "color": "#444444", "variant": [], "alias": [{"code": "arg-gray-dark", "exclude": false}, {"code": "gray-dark", "exclude": true}]}, {"name": "Gray border", "code": "arg-gray-border", "description": "", "scope": "arg", "related_color": "150", "parent_group": "negro", "color": "#DEE2E6", "variant": [], "alias": [{"code": "arg-gray-border", "exclude": false}, {"code": "gray-border", "exclude": true}]}, {"name": "Gris niebla", "code": "arg-gris-niebla", "description": "", "scope": "arg", "related_color": "75", "parent_group": "negro", "color": "#F2F2F2", "variant": [], "alias": [{"code": "arg-gris-niebla", "exclude": false}, {"code": "gray-lighter", "exclude": true}]}, {"name": "Gray background", "code": "arg-gray-background", "description": "", "scope": "arg", "related_color": "25", "parent_group": "negro", "color": "#FFFFFF", "variant": [], "alias": [{"code": "arg-gray-background", "exclude": false}, {"code": "gray-background", "exclude": true}]}]}, {"scope": "arg", "name": "Turquesa", "group": "turquesa", "color": {"50": "#DCF1F0", "100": "#C0E5E3", "200": "#A4D9D7", "300": "#88CECB", "400": "#6CC3BE", "500": "#50B7B2", "600": "#459E99", "700": "#3B8681", "800": "#306D69", "900": "#255450"}, "instance": [{"name": "Palta", "code": "arg-palta", "description": "", "scope": "arg", "related_color": "500", "parent_group": "turquesa", "color": "#50B7B2", "variant": [{"variant": "half", "color": "#A8DBD9", "name": "Palta medio tono", "code": "arg-palta-half"}, {"variant": "lighter", "color": "#C0E5E3", "name": "Palta muy claro", "code": "arg-palta-lighter"}], "alias": [{"code": "arg-palta", "exclude": false}, {"code": "palta", "exclude": true}]}, {"name": "Verde azulado", "code": "arg-verde-azulado", "description": "", "scope": "arg", "related_color": "700", "parent_group": "turquesa", "color": "#3B8681", "variant": [], "alias": [{"code": "arg-verde-azulado", "exclude": false}, {"code": "verde-azulado", "exclude": true}, {"code": "verdeazulado", "exclude": true}]}, {"name": "Eucalipto", "code": "arg-eucalipto", "description": "", "scope": "arg", "related_color": "800", "parent_group": "turquesa", "color": "#306D69", "variant": [{"variant": "lighter", "color": "#A4D9D7", "name": "Eucalipto muy claro", "code": "arg-eucalipto-lighter"}, {"variant": "dark", "color": "#255450", "name": "Eucalipto oscuro", "code": "arg-eucalipto-dark"}], "alias": [{"code": "arg-eucalipto", "exclude": false}]}]}, {"scope": "arg", "name": "Azul", "group": "azul", "color": {"50": "#CDEBFA", "100": "#9AD7F5", "200": "#68C3EF", "300": "#35AFEA", "400": "#039BE5", "500": "#0581C6", "600": "#0767A7", "700": "#084E87", "800": "#0A3468", "900": "#0C1A49"}, "instance": [{"name": "Cielo", "code": "arg-cielo", "description": "", "scope": "arg", "related_color": "400", "parent_group": "azul", "color": "#039BE5", "variant": [], "alias": [{"code": "arg-cielo", "exclude": false}, {"code": "cielo", "exclude": true}, {"code": "celeste", "exclude": true}]}, {"name": "Escarapela", "code": "arg-escarapela", "description": "", "scope": "arg", "related_color": "200", "parent_group": "azul", "color": "#68C3EF", "variant": [], "alias": [{"code": "arg-escarapela", "exclude": false}, {"code": "escarapela", "exclude": true}, {"code": "celesteargentina", "exclude": true}, {"code": "celeste-argentina", "exclude": false}]}]}, {"scope": "arg", "name": "Rojo", "group": "rojo", "color": {"50": "#FCDDDC", "100": "#F9BBB9", "200": "#F69896", "300": "#F27673", "400": "#EF5350", "500": "#E14543", "600": "#D43635", "700": "#C62828", "800": "#A12222", "900": "#7C1C1C"}, "instance": [{"name": "Rojo", "code": "arg-rojo", "description": "Atenci\u00f3n o peligro", "scope": "arg", "related_color": "700", "parent_group": "rojo", "color": "#C62828", "variant": [{"variant": "light", "color": "#E14543", "name": "Rojo claro", "code": "arg-rojo-light"}, {"variant": "dark", "color": "#7C1C1C", "name": "Rojo oscuro", "code": "arg-rojo-dark"}, {"variant": "lighter", "color": "#FCDDDC", "name": "Rojo muy claro", "code": "arg-rojo-lighter"}], "alias": [{"code": "arg-rojo", "exclude": false}, {"code": "danger", "exclude": true}, {"code": "rojo", "exclude": true}]}, {"name": "Tomate", "code": "arg-tomate", "description": "", "scope": "arg", "related_color": "400", "parent_group": "rojo", "color": "#EF5350", "variant": [{"variant": "light", "color": "#F69896", "name": "Tomate claro", "code": "arg-tomate-light"}, {"variant": "dark", "color": "#C62828", "name": "Tomate oscuro", "code": "arg-tomate-dark"}], "alias": [{"code": "arg-tomate", "exclude": false}, {"code": "complementary", "exclude": true}, {"code": "tomate", "exclude": true}]}]}, {"scope": "arg", "name": "Naranja", "group": "naranja", "color": {"50": "#FDE7BF", "100": "#FBCE80", "200": "#F9B640", "300": "#F79D00", "400": "#F38500", "500": "#EF6C00", "600": "#CE5701", "700": "#AE4203", "800": "#8D2D04", "900": "#6C1805"}, "instance": [{"name": "Marr\u00f3n claro", "code": "arg-marron-claro", "description": "", "scope": "arg", "related_color": "800", "parent_group": "naranja", "color": "#8D2D04", "variant": [{"variant": "light", "color": "#CE5701", "name": "Marr\u00f3n claro claro", "code": "arg-marron-claro-light"}, {"variant": "dark", "color": "#6C1805", "name": "Marr\u00f3n claro oscuro", "code": "arg-marron-claro-dark"}], "alias": [{"code": "arg-marron-claro", "exclude": false}, {"code": "marron-claro", "exclude": true}]}, {"name": "Naranja", "code": "arg-naranja", "description": "", "scope": "arg", "related_color": "500", "parent_group": "naranja", "color": "#EF6C00", "variant": [{"variant": "light", "color": "#EF6C00", "name": "Naranja claro", "code": "arg-naranja-light"}, {"variant": "dark", "color": "#6C1805", "name": "Naranja oscuro", "code": "arg-naranja-dark"}], "alias": [{"code": "arg-naranja", "exclude": false}, {"code": "naranjaoscuro", "exclude": true}, {"code": "naranja", "exclude": true}]}, {"name": "Mandarina", "code": "arg-mandarina", "description": "", "scope": "arg", "related_color": "300", "parent_group": "naranja", "color": "#F79D00", "variant": [{"variant": "light", "color": "#FBCE80", "name": "Mandarina claro", "code": "arg-mandarina-light"}, {"variant": "dark", "color": "#CE5701", "name": "Mandarina oscuro", "code": "arg-mandarina-dark"}], "alias": [{"code": "arg-mandarina", "exclude": false}, {"code": "mandarina", "exclude": true}]}]}, {"scope": "arg", "name": "Blanco", "group": "blanco", "color": {"150": "#FFFFFF"}, "instance": [{"name": "Blanco", "code": "arg-white", "description": "", "scope": "arg", "related_color": "150", "parent_group": "blanco", "color": "#FFFFFF", "variant": [], "alias": [{"code": "arg-white", "exclude": false}, {"code": "white", "exclude": true}]}]}, {"scope": "arg", "name": "Ocre", "group": "ocre", "color": {"50": "#FAF8ED", "100": "#F4F0DB", "200": "#EAE1B7", "300": "#E9CE8C", "400": "#E7BA61", "500": "#C98941", "600": "#AA5821", "700": "#8C2701", "800": "#6F2001", "900": "#511901"}, "instance": [{"name": "Arena", "code": "arg-arena", "description": "", "scope": "arg", "related_color": "200", "parent_group": "ocre", "color": "#EAE1B7", "variant": [{"variant": "light", "color": "#FAF8ED", "name": "Arena claro", "code": "arg-arena-light"}, {"variant": "dark", "color": "#E7BA61", "name": "Arena oscuro", "code": "arg-arena-dark"}, {"variant": "half", "color": "#F5F0DB", "name": "Arena medio tono", "code": "arg-arena-half"}], "alias": [{"code": "arg-arena", "exclude": false}]}, {"name": "Amarillo", "code": "arg-amarillo", "description": "Foco o alerta", "scope": "arg", "related_color": "400", "parent_group": "ocre", "color": "#E7BA61", "variant": [{"variant": "light", "color": "#EAE1B7", "name": "Amarillo claro", "code": "arg-amarillo-light"}, {"variant": "dark", "color": "#AA5821", "name": "Amarillo oscuro", "code": "arg-amarillo-dark"}, {"variant": "half", "color": "#F3DDB0", "name": "Amarillo medio tono", "code": "arg-amarillo-half"}], "alias": [{"code": "arg-amarillo", "exclude": false}, {"code": "warning", "exclude": true}, {"code": "amarillo", "exclude": true}, {"code": "amarillo-intenso", "exclude": true}]}, {"name": "Marr\u00f3n oscuro", "code": "arg-marron-oscuro", "description": "", "scope": "arg", "related_color": "900", "parent_group": "ocre", "color": "#511901", "variant": [], "alias": [{"code": "arg-marron-oscuro", "exclude": false}]}]}, {"scope": "arg", "name": "Morado", "group": "morado", "color": {"150": "#3A3796"}, "instance": [{"name": "Azul morado", "code": "arg-azul-morado", "description": "", "scope": "arg", "related_color": "150", "parent_group": "morado", "color": "#3A3796", "variant": [], "alias": [{"code": "arg-azul-morado", "exclude": false}]}]}]}, {"name": "MiArgentina", "space": "miarg", "hidden_space": false, "description": "", "data": [{"scope": "miarg", "name": "Azul MiArgentina", "group": "azul", "color": {"150": "#3526C3"}, "instance": [{"name": "Azul MiArgentina", "code": "miarg-azul", "description": "Azul principal para aplicaciones MiArgentina", "scope": "miarg", "related_color": "150", "parent_group": "azul", "color": "#3526C3", "variant": [{"variant": "half", "color": "#6B66CC", "name": "Azul MiArgentina medio tono", "code": "miarg-azul-half"}], "alias": [{"code": "miarg-azul", "exclude": false}]}]}, {"scope": "miarg", "name": "Celeste MiArgentina", "group": "celeste", "color": {"150": "#2CB9EE"}, "instance": [{"name": "Celeste MiArgentina", "code": "miarg-celeste", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "celeste", "color": "#2CB9EE", "variant": [], "alias": [{"code": "miarg-celeste", "exclude": false}]}]}, {"scope": "miarg", "name": "Amarillo claro MiArgentina", "group": "amarillo-claro", "color": {"150": "#ffe9b8"}, "instance": [{"name": "Amarillo claro MiArgentina", "code": "miarg-amarillo-claro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "amarillo-claro", "color": "#ffe9b8", "variant": [], "alias": [{"code": "miarg-amarillo-claro", "exclude": false}]}]}, {"scope": "miarg", "name": "Rosa claro MiArgentina", "group": "rosa-claro", "color": {"150": "#EECCCF"}, "instance": [{"name": "Rosa claro MiArgentina", "code": "miarg-rosa-claro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "rosa-claro", "color": "#EECCCF", "variant": [], "alias": [{"code": "miarg-rosa-claro", "exclude": false}]}]}, {"scope": "miarg", "name": "Verde claro MiArgentina", "group": "verde-claro", "color": {"150": "#CFEEDC"}, "instance": [{"name": "Verde claro MiArgentina", "code": "miarg-verde-claro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "verde-claro", "color": "#CFEEDC", "variant": [], "alias": [{"code": "miarg-verde-claro", "exclude": false}]}]}, {"scope": "miarg", "name": "Azul oscuro MiArgentina", "group": "azul-oscuro", "color": {"150": "#222C50"}, "instance": [{"name": "Azul oscuro MiArgentina", "code": "miarg-oscuro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "azul-oscuro", "color": "#222C50", "variant": [], "alias": [{"code": "miarg-oscuro", "exclude": false}]}]}, {"scope": "miarg", "name": "Gris MiArgentina", "group": "gris", "color": {"150": "#7E848E"}, "instance": [{"name": "Gris MiArgentina", "code": "miarg-gris", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "gris", "color": "#7E848E", "variant": [], "alias": [{"code": "miarg-gris", "exclude": false}]}]}, {"scope": "miarg", "name": "Celeste claro MiArgentina", "group": "celeste-claro", "color": {"150": "#BEE6F6"}, "instance": [{"name": "Celeste claro MiArgentina", "code": "miarg-celeste-claro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "celeste-claro", "color": "#BEE6F6", "variant": [], "alias": [{"code": "miarg-celeste-claro", "exclude": false}]}]}]}, {"name": "Colores de la bandera de la Rep\u00fablica Argentina", "space": "bandera", "hidden_space": false, "description": "De acuerdo al <a href=\"https://www.argentina.gob.ar/normativa/nacional/decreto-1650-2010-175328\">Decreto  1650/2010</a>, que establece las medidas, caracter\u00edsticas de la tela, colores y accesorios de la Bandera Argentina.", "data": [{"scope": "bandera", "name": "Amarillo", "group": "amarillo", "color": {"150": "#FCBF49"}, "instance": [{"name": "Amarillo Bandera", "code": "bandera-amarillo", "description": "Color amarillo oficial para la bandera Argentina", "scope": "bandera", "related_color": "150", "parent_group": "amarillo", "color": "#FCBF49", "variant": [], "alias": [{"code": "bandera-amarillo", "exclude": false}]}]}, {"scope": "bandera", "name": "Celeste", "group": "celeste", "color": {"150": "#75AADB"}, "instance": [{"name": "Celeste Bandera", "code": "bandera-celeste", "description": "Color celeste oficial para la bandera Argentina", "scope": "bandera", "related_color": "150", "parent_group": "celeste", "color": "#75AADB", "variant": [], "alias": [{"code": "bandera-celeste", "exclude": false}]}]}, {"scope": "bandera", "name": "Marr\u00f3n", "group": "marron", "color": {"150": "#843511"}, "instance": [{"name": "Marr\u00f3n Bandera", "code": "bandera-marron", "description": "Color marr\u00f3n oficial para la bandera Argentina", "scope": "bandera", "related_color": "150", "parent_group": "marron", "color": "#843511", "variant": [], "alias": [{"code": "bandera-marron", "exclude": false}]}]}]}, {"name": "Gendarmer\u00eda Nacional", "space": "gna", "hidden_space": false, "description": "", "data": [{"scope": "gna", "name": "Verde jade", "group": "verde-jade", "color": {"150": "#006666"}, "instance": [{"name": "Verde oscuro Gendarmer\u00eda", "code": "gna-verde-jade", "description": "", "scope": "gna", "related_color": "150", "parent_group": "verde-jade", "color": "#006666", "variant": [], "alias": [{"code": "gna-verde-jade", "exclude": false}, {"code": "verde-jade", "exclude": true}, {"code": "verdejade", "exclude": true}]}]}, {"scope": "gna", "name": "Verde aloe", "group": "verde-aloe", "color": {"150": "#4FBB73"}, "instance": [{"name": "Verde claro Gendarmer\u00eda", "code": "gna-verde-aloe", "description": "", "scope": "gna", "related_color": "150", "parent_group": "verde-aloe", "color": "#4FBB73", "variant": [], "alias": [{"code": "gna-verde-aloe", "exclude": false}, {"code": "verde-aloe", "exclude": true}]}]}, {"scope": "gna", "name": "Verde cemento", "group": "verde-cemento", "color": {"150": "#B4BEBA"}, "instance": [{"name": "Gris Gendarmer\u00eda", "code": "gna-verde-cemento", "description": "", "scope": "gna", "related_color": "150", "parent_group": "verde-cemento", "color": "#B4BEBA", "variant": [], "alias": [{"code": "gna-verde-cemento", "exclude": false}, {"code": "verde-cemento", "exclude": true}, {"code": "verdecemento", "exclude": true}]}]}]}];

if (typeof exports !== "undefined") {
    module.exports = {
        ponchoColorDefinitionsList,
    };
}


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
class Color { //jslint-ignore-line
    constructor(colorDefinitions){
        if(!this.isValidColorDefinitionList(colorDefinitions)){
            console.error("No se pasado por argumento el listado de color");
            return;
        }
        this.definitions = colorDefinitions;
    }


    /**
     * Remueve acentos y caracteres especiales.
     *
     * @param {string} data Cadena de texto a limpiar.
     * @example
     * // returns Accion Murcielago arbol nino
     * removeAccents("Acción Murciélago árbol niño")
     * @returns {string} Cadena de texto sin acentos.
     */
    replaceSpecialChars = (data) => {
        if(typeof data !== "string" || data.trim().length === 0){
            console.warn("replaceSpecialChars: Debe pasar una cadena de texto.");
            return "";
        }

        const search = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
                + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
        const replace = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
                + "rrsssssttuuuuuuuuuwxyyzzz";

        const a = search + search.toUpperCase();
        const b = replace + replace.toUpperCase();
        const p = new RegExp(a.split("").join("|"), "g");
        return data.toString().replace(p, c => b.charAt(a.indexOf(c)));
    };


    /**
     *
     * @param {array} definitions
     * @returns {boolean}
     */
    isValidColorDefinitionList(definitions){
        return (
            Array.isArray(definitions) &&
            definitions.length > 0 &&
            definitions[0].hasOwnProperty('space')
        );
    }


    /**
     * Listado de colores
     * @returns {object}
     */
    get list(){
        let result = this.definitions
        .flatMap( m => m.data.flatMap(i => i.instance.map(x => x)) );

        return result || [];
    }


    /**
     * Buscador de colores.
     *
     * @param {string} value Color a buscar.
     * @returns {object}
     */
    findColor = value => {
        if(typeof value !== "string" || value.trim().length === 0){
            console.error(
                "findColor:",
                "El valor a buscar debe ser una cadena de texto.");
            return [];
        }
        let searchTerm = value.toLowerCase();
        let searchList = [
            ...this.variables.map(([code, color]) => [code, color]),
            ...this.colors];

        let searchResults = searchList.filter( function(item){
            if( item[0].includes( searchTerm ) ){
                return item;
            }
        }).map(([code, color]) => [code, color]);

        return searchResults;
    }


    /**
     *
     * @param {*} colorDefinitions
     * @returns
     */
    get variables(){
        let collect = [];

        this.list.flatMap(m => {
            const {alias, color, description, code, variant=[], name} = m;

            alias.forEach(function(a){
                collect.push( [a.code, color, description, code, name] );

                variant.forEach(function(value){
                    if(!a.exclude){
                        collect.push( [`${a.code}-${value.variant}`, value.color, "", code, value.name] );
                    }
                });
            })
        });
        return collect.sort();
    };


    get spaces(){
        return this.definitions.map(m => m.space).sort();
    }


    groupsBySpace = space => {
        if (typeof space !== 'string') {
            throw new TypeError('groupsBySpace: El argumetno debe ser un string');
        }
        const spaceToLower = space.toLocaleLowerCase();
        const data = this.definitions
            .find(f => f.space == spaceToLower)?.data?.map(m => m.group);

        const result = data ? data.sort() : [];
        return result;
    }


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
    ponchoColor = color => {
        const defaultColor = "#999999";
        const self = this;

        if (typeof color !== "string") {
            console.warn(
                `Invalid color provided. Using default: ${defaultColor}`
            );
            return defaultColor;
        }

        const searchTerm = self.replaceSpecialChars(color).toLowerCase();

        const definition = (this.variables.find(v => v[0] === searchTerm) ||
            this.colors.find(c => c[0] === searchTerm));

        return (definition ? definition[1] : defaultColor);
    };


    /**
     * Listado de colores 
     * @returns 
     */
    get colors(){
        const colorList = this.definitions
            .map(space => space.data)
            .flatMap(function(spaceGroups){

                return spaceGroups.flatMap(function(groupColor){
                    const {color, group, scope} = groupColor;
                    return Object.entries(color).map(function(colorValues){
                        const [label, value] = colorValues;
                        return [`${scope}-${group}-${label}`, value]
                    });
                });
        });

        return colorList || [];
    }


    /**
     * Definición por color
     *
     * @see colorDefinitionsList
     * @param {string} color Nombre del cólor a buscar.
     * @returns {string|boolean}
     */
    colorDefinitions = (ponchoColor) => {
        if(typeof ponchoColor == undefined || !ponchoColor.trim()){
            return;
        }

        const lowerCasePonchoColor = this.replaceSpecialChars(ponchoColor).toLowerCase();
        let result;
        let gSpace = "";

        // Iteración por espacios (space)
        for(let i = 0; i <= this.definitions.length - 1; i += 1){
            const {data, space} = this.definitions[i];
            gSpace = space;

            // Itero por cada grupo de color dentro de data
            for(let y = 0; y <= data.length - 1; y += 1) {
                const {instance} = data[y];

                // Itero sobre las instancias de color
                for(let x = 0; x <= instance.length - 1; x += 1) {
                    const {alias, variant} = instance[x];
                    debugger
                    if ( alias.some(s => s.code == lowerCasePonchoColor) ) {
                        result = instance[x];
                        break;
                    }
                    else if( variant.some(s => s.code == lowerCasePonchoColor) ){
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
    colorGroup = (themeSpace, spaceGroup) => {
        if(typeof spaceGroup == undefined || !spaceGroup?.trim()){
            return;
        }

        let result;
        for(let i = 0; i <= this.definitions.length -1; i += 1){
            const {data, space} = this.definitions[i];
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
    colorSpace = (space) => {
        if(typeof space == undefined || !space?.trim()){
            return;
        }

        return this.definitions.find(obj => obj.space==space);
    };


    /**
     * Retorna el código de color poncho por hexadecimal.
     * @param {string} value Valor hexadecimal a buscar
     * @see colorDefinitionsList
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
    colorByHex = (hexColor) => {
        if(!this.isValidHex(hexColor)){
            return;
        }

        var result = [];
        const targetColor = this.cleanHex(hexColor);

        for(let i = 0; i <= this.definitions.length -1; i += 1){
            let {data} = this.definitions[i];

            for(let entry of data){
                const {instance} = entry;
                for(let item of instance){
                    const {color} = item;
                    if( this.cleanHex(color) == targetColor ){
                        result.push(item);
                    }
                }
            }
        }
        return result;
    };


    /**
     * Hace un refactor del número hexa
     *
     * @param {string} value Valor hexadecimal
     * @returns {string}
     */
    cleanHex = value => {
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
     * Valida un color hexadecimal
     * @param {string} hexColor Color hexadecimal
     * @returns {boolean}
     */
    isValidHex = (hexColor) => {
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
    };


    /**
     * Converson de HEX a RGB.
     * @param {string} hexColor Color hexadecimal
     * @returns {object}
     */
    hexToRgb = hexColor => {
        if (!this.isValidHex(hexColor)) {
            return;
        }

        const hex = this.cleanHex(hexColor);
        const cleanedHex = (hex.startsWith("#") ? hex.slice(1) : hex);

        const red = parseInt(cleanedHex.slice(0, 2), 16);
        const green = parseInt(cleanedHex.slice(2, 4), 16);
        const blue = parseInt(cleanedHex.slice(4, 6), 16);

        return [red, green, blue];
    }


    /**
     * Imprime el nombre de un color
     * 
     * @param  {array} args Array list [arg, arg, arg]
     * @param  {array} options object Objeto con opciones para los switch.
     * @example
     * // maíz - azul a verde
     * colorName(
     *     ["arg-maiz", "arg-azul", "arg-verde"], 
     *     {
     *         switchLastConnector: {'i': "a", "o": "a"}, 
     *         defaultLastConnector: "a", 
     *         listConnector: " - "
     *     }
     * )
     * @returns {string}
     */
    colorName = (args, options={}) => {
        if(typeof args == "undefined"){
            return
        }

        if(args.length < 1){
            console.error("Error.", "Debe pasar al menos un argumento.");
            return;
        }

        if(typeof args == "string"){
            args = [args];
        }

        if(!args.every(e => typeof e === "string")){
            console.error("Error.", "Solo se admiten cadenas de texto");
            return;
        }

        // Options
        const defaultConnectorSwitch = {"i": "e", "o": "u"};
        const defaultConnector = "y";
        const defaultListConnector = ", ";

        const optionConnectorSwitch = (typeof options == "object" && 
            options.hasOwnProperty('switchLastConnector') ? 
            options.switchLastConnector : defaultConnectorSwitch);
        const optionDefaultConnector = (typeof options == "object" && 
            options.hasOwnProperty('defaultLastConnector') ? 
            options.defaultLastConnector : defaultConnector);
        const optionDefaultListConnector = (typeof options == "object" && 
            options.hasOwnProperty('listConnector') ? 
            options.listConnector : defaultListConnector);


        const getColorName = (arg) => {
            const result = this.variables.find(f => (f[0] == arg)); 
            return typeof result != "undefined" ? result[4] : arg;
        };

        if (args.length === 1) {
            return getColorName(args.join(""));
        }

        const totalArgs = args.length;
        const lastArg = args.pop(totalArgs - 1);
        const firstCharName = Array.from( getColorName(lastArg) )[0].toLowerCase();
        const connector = (optionConnectorSwitch[firstCharName] || 
                optionDefaultConnector);
    
        const result = `${args.map(m => getColorName(m)).join(optionDefaultListConnector)} ${connector}` 
                + ` ${getColorName(lastArg)}`; 
    
        return result.toLowerCase();
    };
}


if (typeof exports !== "undefined") {
    module.exports = {Color};
}

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
    "arg-azul",
    "arg-arena",
    "arg-amarillo",
    "arg-palta",
    "arg-verde",
    "arg-arandano",
    "arg-rosado",
    "miarg-azul",
];

const headersBackground = {
    solid: [
        "bg-arg-azul",
        "bg-arg-rojo",
        "bg-arg-info",
        "bg-arg-eucalipto",
        "bg-arg-palta",
        "bg-arg-arandano",
        "bg-arg-negro-light"
    ],
    mixed: [
        "bg-mix-azul-info",
        "bg-mix-info-azul",
        "bg-mix-palta-azul",
        "bg-mix-azul-palta"
    ]
};

/**
 * Variaciones de color
 */
const colorVariations = {
    high: [
        'arg-azul', 'arg-eucalipto', 'arg-verde', 'arg-naranja', 'arg-rojo', 
        'arg-arandano', 'arg-uva', 'arg-cielo', 'arg-palta', 'arg-verdin', 
        'arg-amarillo', 'arg-tomate', 'arg-fucsia', 'arg-lavanda', 'arg-negro'
    ],
    medium: [
        "arg-info","arg-verde-azulado","arg-verdin","arg-amarillo","arg-tomate",
        "arg-fucsia","arg-lavanda","arg-palta","arg-lima","arg-maiz",
        "arg-gris-intermedio"
    ]
};


// @legacy Creo ponchoColor y color como una variable global.
var ponchoColor;
var color;
if (typeof Color !== 'undefined') {
    color = new Color(ponchoColorDefinitionsList);
    ponchoColor = color.ponchoColor;
}


if (typeof exports !== "undefined") {
    module.exports = {
        colorVariations, illustrationColors, headersBackground, color
    };
}

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
async function fetch_json(uri, options={}) {

    let defaultOptions = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        redirect: "follow"
    };
    let opts = Object.assign({}, defaultOptions, options);
    const response = await fetch(uri, opts);

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
 * // returns Accion Murcielago arbol nino
 * removeAccents("Acción Murciélago árbol niño")
 * @returns {string} Cadena de texto sin acentos.
 */
const replaceSpecialChars = (data) => {
    if(typeof data !== "string" || data.trim().length === 0){
        console.warn("replaceSpecialChars: Debe pasar una cadena de texto.");
        return "";
    }

    const search = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
            + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
    const replace = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
            + "rrsssssttuuuuuuuuuwxyyzzz";

    const a = search + search.toUpperCase();
    const b = replace + replace.toUpperCase();
    const p = new RegExp(a.split("").join("|"), "g");  
    return data.toString().replace(p, c => b.charAt(a.indexOf(c)));
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
const slugify = (str) =>{
    if(typeof str !== "string" || str.trim().length === 0){
        console.warn("slugify: Debe pasar una cadena de texto.");
        return str;
    }
    const a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕ"
                + "ŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnooooooooop"
                + "rrsssssttuuuuuuuuuwxyyzzz------";
    const p = new RegExp(a.split("").join("|"), "g");

    return str.toString().toLowerCase()
        .replace(/\s+/g, "-")
        .replace(p, c => b.charAt(a.indexOf(c)))
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
};


/**
 * Palabras en title-case.
 * @param {string} str Cadena a transformar
 * @param {boolean} allWords True title-case a todas las palabras
 * @returns {string}
 */
const toTitleCase = (str, allWords=true) => {
    if(typeof str !== "string" || str.trim().length === 0){
        console.warn("[toTitleCase] Debe ingresar una cadena de texto.");
        return str;
    }
    const titleCase = w => w[0].toUpperCase() + w.substring(1).toLowerCase();
    str = str.replace(/(^\s+|\s+$)/g, "");
    
    if(!allWords){
        return titleCase(str);
    }
    const words = str.split(/\s+/);
    return words.map(w => titleCase(w)).join(" ");
}


if (typeof exports !== "undefined") {
    module.exports = {slugify, replaceSpecialChars, toTitleCase};
}

/**
 * HTML utilities
 * 
 * @summary Validadores y herramientas para manipulación de código HTML.
 * 
 * ADVERTENCIA
 * 
 * Estas funciones JavaScript no fueron realizadas con el propósito de 
 * proporcionar seguridad contra ataques externos en aplicaciones. Para 
 * proteger aplicaciones web construidas con JavaScript, es crucial 
 * implementar medidas de seguridad adicionales como validación de datos en 
 * el lado del servidor, protección contra inyección de código (XSS) y el 
 * uso de bibliotecas y frameworks que promuevan prácticas de 
 * seguridad sólidas.
 * 
 * Si no está seguro de cómo utilizarla y los posibles riesgos que corre al 
 * exponerla en su sitio web, tome el recaudo de asesorarse con 
 * un especialista.
 * 
 * 
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
    if(typeof str !== "string" || str.trim().length === 0){
        console.error("secureHTML:", "Solo admite cadenas de texto.");
        return str;
    }

    if(!Array.isArray(exclude)){
        console.error(
            "secureHTML:", "El segundo argumento debe ser un Array.");
        return;
    }

    if(exclude.some(e => e === "*")){
        return str;
    }

    let replaceString = str.toString()
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

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


if (typeof exports !== "undefined") {
    module.exports = {secureHTML};
}


/**
 * HEAD STYLE
 * 
 * @summary Permite agregar definiciones css dentro del head.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @param {string} id Nombre único para identificar las asignaciones css
 * @param {string} styleDefinitions Definiciones CSS
 * @param {string} mediaType Definición para media query
 * @example
 * //<style id="custom-id">div {border: 2px solid red}</div>
 * headStyle("custom-id", `div { border: 2px solid red}`);
 * 
 * //<style id="custom-id" media="all and (max-width: 500px)">
 * //    div {border: 2px solid red}
 * //</div>
 * headStyle(
 *     "custom-id", 
 *     `div { border: 2px solid red}`,
 *     "all and (max-width: 500px)"
 * );
 * @returns {undefined}
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
const headStyle = (id, styleDefinitions, mediaType) => {
    if (typeof id !== "string" || id.trim() === "") {
        console.warn("No se ha provisto un _id_ válido. Se usará: "
            + "'argob-custom-css'.");
        id = "argob-custom-css";
    }

    if (typeof styleDefinitions !== "string" || styleDefinitions.trim() == ""){
        console.warn("No se ha provisto definición de estilos. "
            + "Se pasa por alto la petición.");
        return;
    }

    const styleExists = document.getElementById(id);
    if (styleExists !== null) {
        if (styleExists.textContent.trim() === styleDefinitions.trim()) {
            console.warn("[addHeadStyle] Una definición de estilos "
                + "con las mismas definiciones ya existe.");
            return;
            
        } else {
            styleExists.remove();
            console.warn("[addHeadStyle] Un estilo con el mismo _id_ "
                + "existe, pero tiene definiciones distintas. Se pisa.");
        }
    }

    document.querySelectorAll("head").forEach(h => {
        const tag = document.createElement("style");
        tag.setAttribute("rel", "stylesheet");
        tag.id = id;
        if(typeof mediaType === "string" && mediaType.trim() !== ""){
            tag.setAttribute("media", mediaType);
        }

        tag.textContent = styleDefinitions;

        h.appendChild(tag);
    });
};


/**
 * Copia texto en el portapapeles (clipboard)
 * 
 * @param {string} selector Selector html, ej: .class o #id
 * @param {function} callback Función de retorno.
 * @returns {void}
 */
function copyToClipboard(selector, callback) {
    if(typeof selector !== "string" || selector == ""){
        return;
    }

    const copyText = document.querySelector(selector);
    if(!copyText){
        console.error("[copyToClipboard] No se puede encontrar el elemento.");
        return;
    }
    const str = copyText.textContent;
    navigator.clipboard.writeText(str)
        .then(function(){
            if(typeof callback === "function"){
                callback(copyText);
            }
        }, function(){
            console.error("[copyToClipboard] No se puede copiar el texto.");
        });
}

function flattenNestedObjects(entries) {
    return entries.map(entry => {
        return flattenObject(entry, "");
    });
}

function flattenObject(obj, prefix) {
    const flattened = {};
    for (const key in obj) {
        const value = obj[key];
        const newKey = (prefix ? `${prefix}__${key}` : key);

        if (typeof value === "object" && value !== null) {
            Object.assign(flattened, flattenObject(value, newKey));
        } else {
            flattened[newKey] = value;
        }
    }
    return flattened;
}


if (typeof exports !== "undefined") {
    module.exports = {flattenObject, flattenNestedObjects};
}

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
 * Agenda
 *
 * @summary Agenda de eventos basada en PonchoTable donde se agrupan las
 * entradas por fecha de inicio, fecha de fin, y categoría.
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * @requires jQuery, dataTables
 * @see https://github.com/argob/poncho/tree/master/src/js/poncho-table
 *
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
class PonchoAgenda {

    DATE_REGEX = /^([1-9]|0[1-9]|[1-2][0-9]|3[0-1])\/([1-9]|0[1-9]|1[0-2])\/([1-9][0-9]{3})$/;

    constructor(options={}){
        options.headers = this._refactorHeaders(options);
        options.headersOrder = this._refactorHeadersOrder(options);

        // Global Options
        this.opts = Object.assign({}, this.defaults, options);

        this.categoryTitleClassList = this.opts.categoryTitleClassList;
        this.itemContClassList = this.opts.itemContClassList;
        this.itemClassList = this.opts.itemClassList;
        this.groupCategory = this.opts.groupCategory;
        this.dateSeparator = this.opts.dateSeparator;
        this.startDateId = this.opts.startDateId;
        this.endDateId = this.opts.endDateId;
        this.timeId = this.opts.timeId;

        this.descriptionId = this.opts.descriptionId;
        this.criteriaOneId = this.opts.criteriaOneId;
        this.criteriaTwoId = this.opts.criteriaTwoId;
        this.criteriaThreeId = this.opts.criteriaThreeId;
    }


    /**
     * Opciones por defecto
     */
    defaults = {
        allowedTags: [
            "strong","span", "dl", "dt", "dd", "img", "em","button", "button",
            "p", "div", "h3", "ul", "li", "time", "a", "h1"],

        criteriaOneId: "destinatarios",
        criteriaThreeId: "destacado",
        criteriaTwoId: "url",
        descriptionId: "descripcion",
        categoryTitleClassList: ["h6", "text-secondary"],
        itemContClassList: ["list-unstyled"],
        itemClassList: ["m-b-2"],
        dateSeparator: "/",
        filterStatus: {
            header: "Estado",
            nextDates: "Próximas",
            pastDates: "Anteriores",
        },
        endDateId: "hasta",
        groupCategory: "filtro-ministerio",
        rangeLabel: "Fechas",
        startDateId: "desde",
        timeId: "horario",
    };


    /**
     * Agrega los indices range y filtro-status al al array si no existieran.
     *
     * @param {object} options Opciones para ponchoTabla y Agenda
     * @returns {object}
     */
    _refactorHeadersOrder = options => {
        if(options.hasOwnProperty("headersOrder") &&
                options.headersOrder.length > 0){
            let order = options.headersOrder;
            for(const i of ["range", "filtro-status"]){
                if(!options.headersOrder.includes(i)){
                    options.headersOrder.push(i);
                }
            }
            return order;
        }
        return [];
    };

    /**
     * Mapea los headers.
     *
     * @return {string} key Key del item.
     */
    _header = (key) => {
        return (this.opts.headers.hasOwnProperty(key) ?
                this.opts.headers[key] : key);
    };

    /**
     * Refactor de headers
     *
     * @summary Agrega los headers de range y filterheader a los
     * asignados en el JSON.
     * @param {object} options Opciones para ponchoTabla y Agenda
     * @returns {object}
     */
    _refactorHeaders = options => {
        let labelStatus = this.defaults.filterStatus.header;
        if(options?.filterStatus?.header){
            labelStatus = options.filterStatus.header;
        }

        let rangeLabel = this.defaults.rangeLabel;
        if(options?.rangeLabel){
            rangeLabel = options.rangeLabel;
        }

        const headers = {
            ...{ "range": rangeLabel},
            ...options.headers,
            ...{"filtro-status": labelStatus}
        };

        return headers;
    }


    /**
     * Showdown habilitado.
     *
     * Verifica si la librería _showdown_ está disponible.
     * @returns {boolean}
     */
    _isMarkdownEnable = () => {
        if(typeof showdown !== "undefined" &&
            showdown.hasOwnProperty("Converter")){
                return true;
        }
        return false;
    };


    /**
     * Opciones para markdown
     * @returns {object}
     */
    _markdownOptions = () => {
        if(this._isMarkdownEnable()){
            if(this.opts.hasOwnProperty("markdownOptions") &&
                typeof this.opts.markdownOptions === "object"){
                return this.opts.markdownOptions;
            }
        }
        return {};
    };


    /**
     * Convierte un string a markdown
     *
     * @param {string} str Cadena de texto a convertir
     * @returns {string}
     */
    _markdownConverter = str => {
        if(this._isMarkdownEnable()){
            const converter = new showdown.Converter(this._markdownOptions());
            return converter.makeHtml(str);
        }
        return str;
    };


    /**
     * Fecha pasada
     *
     * @param {string} fecha Fecha a evaluar
     * @returns {boolean}
     */
    _isPastDate = fecha => {
        if(!this._isValidDateFormat(fecha)){
            console.error(`La fecha no tiene un formato válido: ${fecha}`);
            return false;
        }

        const dateToEvaluate = this._dateParser(fecha).date.getTime();
        const current = this._currentDate().date.getTime();
        return current > dateToEvaluate;
    }


    /**
     * Formato para fecha y hora
     *
     * @param {objecct} date Fecha como objeto {day, month, year}
     * @param {object} time Tiempo como objeto {hours, minutes, seconds}
     * @returns {string}
     */
    _dateTimeFormat = (date, time=false) => {
        const {day, month, year} = date;
        const dateFormat = [day, month, year].join(this.dateSeparator);
        let timeFormat = "";
        if(time){
            timeFormat = [hours, minutes].join(":");
        }
        return dateFormat + timeFormat;
    };


    /**
     * Fecha al momento de ejecutarse el script.
     *
     * @returns {object} Retorna un objeto con: el día, mes, año y el
     * objeto Date en fecha.
     */
    _currentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const format = [
            this._pad(day),
            this._pad(month),
            year].join(this.dateSeparator);

        return {...this._dateParser(format), ...{format}};
    }

    /**
     * Rellena con ceros a la izquierda
     *
     * @param {string|int} num Numero a rellenar con ceros.
     * @param {int} counter Cantidad total de caracteres.
     * @returns {string}
     */
    _pad = (num, counter=2) => num.toString().padStart(counter, "0");


    /**
     * Parsea una fecha.
     *
     * @param {string} date Fecha en formato dd/mm/yyyy.
     * @param {string} time Tiempo en formato hh:mm:ss
     * @example
     * // {
     * //     day: '09',
     * //     month: '05',
     * //     year: '2012',
     * //     hours: '00',
     * //     minutes: '00',
     * //     date: Wed May 09 2012 00:00:00 GMT-0300...
     * // }
     * this._dateParser("09/05/2012")
     * @returns {object|boolean}
     */
    _dateParser = (date, time="00:00:00") => {
        if(!this._isValidDateFormat(date)){
            console.error(`Formato de fecha incorrecto: ${date}`);
            return;
        }
        const regex = this.DATE_REGEX;
        const result = regex.exec(date);
        const [, day, month, year] = result;
        const objectDate = new Date(`${year}-${month}-${day} ${time}`);

        return {
            day: this._pad(day),
            month: this._pad(month),
            year,
            hours: this._pad(objectDate.getHours()),
            minutes: this._pad(objectDate.getMinutes()),
            "date": objectDate
        }
    }


    /**
     * Valida el formato de la fecha.
     * @summary El formato de fecha aceptado es: dd/mm/yyyy.
     * Al momento de escribir este documento, no hay otro habilitado.
     * @example
     * // true
     * this._isValidDateFormat("09/05/2012")
     *
     * // false
     * this._isValidDateFormat("09/10/15")
     * @param {string} str Fecha en formato dd/mm/yyyy.
     * @returns {boolean}
     */
    _isValidDateFormat = str => {
        const regex = this.DATE_REGEX;
        const result = regex.exec(str);

        return (result !== null ? true : false);
    }


    /**
     * Agrupa contenidos por fecha y la categoría asignada.
     *
     * @param {object} datos JSON a procesar
     * @returns {object}
     */
    _groupByFingerprintAndCategory = (datos) => {
        const agrupados = {};

        for (const dato of datos) {
            const categoria = dato[this.groupCategory];
            const {fingerprint} = dato;
            if (!agrupados[fingerprint]) {
                agrupados[fingerprint] = {};
            }
            if (!agrupados[fingerprint][categoria]) {
                agrupados[fingerprint][categoria] = [];
            }
            agrupados[fingerprint][categoria].push(dato);
        }

        return agrupados;
    }


    /**
     * Rearmo el JSON para agregar filtros.
     *
     * @param {object} jsonData
     * @returns {object}
     */
    _refactorEntries = jsonData => {
        if(!jsonData){
            console.error("No se puede recorrer el script")
        }

        let entries = [];
        jsonData.forEach(element => {
            let desde = element[this.startDateId];
            let hasta = element[this.endDateId];
            // Si la columna `hasta` viene vacía le copio los datos de `desde`.
            hasta = (hasta.trim() === "" ? desde : hasta);

            const {pastDates, nextDates} = this.opts.filterStatus;
            const estado = (this._isPastDate(hasta) ? pastDates : nextDates);
            // dates
            const startDate = this._dateParser(desde);
            const endDate = this._dateParser(hasta);
            const startDateTime = startDate.date.getTime();
            const endDateTime = endDate.date.getTime();
            const fingerprint = [startDateTime, endDateTime].join("_");

            let range = this._dateTimeFormat(startDate);
            if(startDateTime != endDateTime){
                range = `Del ${this._dateTimeFormat(startDate)} al `
                    + `${this._dateTimeFormat(endDate)}`;
            }

            // refactor entry
            const entry = {
                ...element,
                ...{
                    "range": range,
                    "filtro-status": estado,
                    fingerprint,
                    desde,
                    hasta,
                }
            };
            entries.push(entry);
        });

        return entries;
    };


    /**
     * Compone el template para el item de la agenda
     *
     * @param {string} description Descriptión del item de la agenda.
     * @param {string} date Fecha formato dd/mm/yyyy
     * @param {string} time Horario en formato hh:mm:ss
     * @returns {object}
     */
    itemTemplate = (description, destinatarios, url,
            destacados, date, time) => {
        const itemContainer = document.createElement("dl");
                
        // time
        let timeElement;
        if(time){
            const datetime = this._dateParser(date, time);
            timeElement = document.createElement("time");
            timeElement.setAttribute("datetime", datetime.date.toISOString());
            timeElement.textContent = `${datetime.hours}:`
                + `${datetime.minutes}hs.`;
        } else {
            timeElement = document.createElement("span");
            timeElement.textContent = "--:--";
        }

        const data = [
            // Térm, definition, screenreader, dtoff, className
            [
                "Descripción",
                this._markdownConverter(description),
                true, true, "description"],
            [
                this._header(this.criteriaOneId),
                this._markdownConverter(destinatarios),
                false, true, "criteria-one"],
            [
                this._header(this.criteriaThreeId),
                this._markdownConverter(destacados),
                false, true, "criteria-three"],
            [
                this._header(this.criteriaTwoId),
                this._markdownConverter(url),
                false, true, "criteria-two"],
            [
                this._header(this.timeId),
                timeElement.outerHTML,
                false, true, "time"],
        ];

        data.forEach( elem => {
            const [term, definition, srOnly, dtOff, className] = elem;
            if(!definition){
                return;
            }

            const dt = document.createElement("dt");
            dt.textContent = term;
            dt.classList.add("agenda-item__dt", `agenda-item__dt-${className}`);
            if(srOnly){
                dt.classList.add("sr-only");
            }
            
            const dd = document.createElement("dd");
            dd.textContent = definition;
            dd.classList.add("agenda-item__dd", `agenda-item__dd-${className}`);

            if(dtOff){
                itemContainer.appendChild(dt);
            }
            itemContainer.appendChild(dd);
        });

        if(this.itemClassList.some(f=>f)){
            itemContainer.classList.add("agenda-item", ...this.itemClassList);
        }

        return itemContainer;
    };


    /**
     * Reagrupa las entradas dejando, por fecha, las entradas de la categoría.
     *
     * @param {object} entries
     * @returns {object}
     */
    _groupedEntries = entries => {
        let collect = [];
            // Nivel mismas fechas
            Object.values(entries).forEach(ele => {
            var entry;

            // Nivel ministerio
            // Cada iteración es un ministerio.
            Object.values(ele).forEach((element) => {
                var block = "";
                var title = "";

                const itemsContainer = document.createElement("div");
                if(this.itemContClassList.some(f=>f)){
                    itemsContainer.classList.add(...this.itemContClassList);
                }

                // Nivel items por ministerio
                element.forEach(a => {
                    entry = a;
                    if(title != entry[this.groupCategory]){
                        title = entry[this.groupCategory];

                        const titleElement = document.createElement("p");
                        if(this.categoryTitleClassList.some(f=>f)){
                            titleElement.classList.add(
                                ...this.categoryTitleClassList);
                            titleElement.textContent = title;
                            itemsContainer.appendChild(titleElement);
                        }
                    }

                    const item = this.itemTemplate(
                        a.descripcion, a.destinatarios, a.url,
                        a.destacados, a.desde, a.horario);
                    itemsContainer.appendChild(item);
                });

                block += itemsContainer.outerHTML;
                delete entry.fingerprint;
                let customData={};

                customData[this.descriptionId] = block;
                collect.push( {...entry, ...customData} );
            });
        });

        return collect;
    };


    /**
     * Valida si poncho tabla está importado
     * @returns {boolean}
     */
    _ponchoTableExists = () => {
        if(typeof ponchoTable !== "undefined"){
            return true;
        }
        return false;
    };


    /**
     * Imprime la tabla ponchoTable
     *
     * @returns {undefined}
     */
    render = () => {
        if(!this.opts.hasOwnProperty("jsonData")){
            console.error(
                "¡Hay un error en los datos pasados "
                + "a la función `PonchoAgenda`!");
            return;
        }

        const refactorEntries = this._refactorEntries(this.opts.jsonData);
        const groupedByDateAndCategory = 
                this._groupByFingerprintAndCategory(refactorEntries);
        this.opts.jsonData = this._groupedEntries(groupedByDateAndCategory);

        if(this._ponchoTableExists()){
            ponchoTable( this.opts );
        }
    };
};


if (typeof exports !== "undefined") {
    module.exports = PonchoAgenda;
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
            opt.orderFilter : false);
    var asFilter = {};
    var allowedTags = ["*"];
    var pushState = (opt.hasOwnProperty("pushState") && 
        opt.pushState == true ? true : false);
    var copyResults = (opt.hasOwnProperty("copyResults") && 
        opt.copyResults == true ? true : false);

    // urlParams dependiente de las opciones copyResults o pushState
    var urlParams = false;
    if(opt.hasOwnProperty("urlParams") && opt.urlParams == true){
        urlParams = true;
    } else if( copyResults == true || pushState == true){
        urlParams = true;
    }

    let markdownOptions = {
        "tables": true,
        "simpleLineBreaks": true,
        "extensions": [
            "details",
            "images",
            "alerts",
            "numbers",
            "ejes",
            "button",
            "target",
            "bootstrap-tables",
            "video"
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
     * Objeto agrupando filtros descendentes y ascendentes.
     * 
     * @param {object} data Array con la configuración realizada por el 
     * usuario en `orderFilter`.
     * @example
     * // {
     * //     asc: ["filtro-estado", "filtro-categoria"], 
     * //     desc: ["filtro-ubicacion"]
     * // }
     * [["filtro-ubicacion", "desc"],[ "filtro-estado"], "filtro-categoria"]
     * @returns {object}
     */
    const _getOrderType = (data) => {
        if (!Array.isArray(data)) {
            return { asc: [], desc: [] };
        }

        return data.reduce((acc, item) => {
            const [field, order="asc"] = (Array.isArray(item) ? 
                    item : [item, 'asc']);

                    const orderToLower = order.toLowerCase();
            const validKey = (["asc", "desc"].includes(orderToLower) ? 
                    orderToLower : "asc");

            acc[validKey].push(field);
            return acc;
        }, {asc: [], desc: []});
    };


    /**
     * De acuerdo a las opciones del usuario, ordena el listado o lo deja
     * en la secuencia en la que llega.
     *
     * @summary Si `orderFilter` es _boolean_ y es true, entonces todos usan sort.
     * Si `orderFilter` es array filtro según la disponibilidad del filtro.
     * 
     * @see sortAlphaNumeric()
     * @param {object} data Array con el contenido de cada filtro.
     * @param {string} filter Nombre del filtro.  
     * @returns {object}
     */
    const _sortAlphaNumeric = (data, filter) => {
        // filter debe ser string
        if(typeof filter !== "string"){
            console.error(
                "Error:", 
                `_filter_ debe ser string. Recibió: ${typeof filter}`);
            return;
        }
        // data debe ser array
        if(!Array.isArray(data)){
            console.error(
                "Error:", 
                `_data_ debe ser object. Recibió: ${typeof data}`);
            return;
        }

        // Validación
        if(typeof orderFilter === "boolean" && orderFilter){
            return data.sort(sortAlphaNumeric);
        } 

        const orderType = _getOrderType(orderFilter);
        const {asc, desc} = orderType;

        if(Array.isArray(orderFilter) && asc.includes(filter)){
            return data.sort(sortAlphaNumeric);
        } else if(desc.includes(filter)){
            return data.sort(sortAlphaNumeric).reverse();
        }

        return data;
    };


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
        return [...document.querySelectorAll("[data-filter]")]
            .map(e => e.value);
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
    const _isShowdownExtensionEnable = () => {
        const markdownOptions = _markdownOptions();
        const r = markdownOptions.extensions.every(e => {
            try {
                showdown.extension(e);
                return true;
            } catch (error) {
                return false;
            }
        });
        return r;
    };


    /**
     * Opciones para el componente showdonwjs
     *
     * @summary Si el usuario asigno opciones y extensiones, las usa; de otro
     * modo, usa las que están por defecto.
     * @returns {object}
     */
    const _markdownOptions = () => {
        if(opt.hasOwnProperty("markdownOptions") &&
                opt.markdownOptions === "object"){
            return opt.markdownOptions;
        }
        return markdownOptions;
    };


    /**
     * Convierte un string con sintaxis markdown
     * @param {stirng} str Cadena de texto a convertir
     * @returns {string}
     */
    const _markdownConvert = str => {
        if( typeof str !== "string" ){
            return;
        }
        if( !_isMarkdownEnable() ){
            return str;
        }
        
        let converter;
        if(_isShowdownExtensionEnable()){
            converter = new showdown.Converter( _markdownOptions() );
            return converter.makeHtml(str);
        }

        converter = new showdown.Converter();
        return converter.makeHtml(str);
    };


    /**
     * Botón poncho
     *
     * @summary Imprime un botón bootstrap.
     * @param {string} label Label para el botón.
     * @param {string} value Href para el botón.
     * @return {undefined}
     */
    const button = (label, value) => {
        const btn = document.createElement("a");
        btn.classList.add(
            "btn", "btn-primary", "btn-sm", "margin-btn");
        btn.href = value;
        btn.target = "_blank";
        // btn.textContent = label;
        btn.innerHTML = `${label} <span class="sr-only">(Abre en una nueva ventana)</span>`;
        btn.setAttribute("aria-label", `${label} (Abre en una nueva ventana)`);
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

        const datetime = finalDateIso.toISOString().split("T")[0];

        const hiddenSpan = document.createElement("span");
        hiddenSpan.style.display = "none";
        hiddenSpan.textContent = datetime;

        const time = document.createElement("time");
        time.setAttribute("datetime", datetime);
        time.textContent = value;

        return hiddenSpan.outerHTML + time.outerHTML;
    };


    /**
     * Imprime los filtros
     *
     * @param {object} gapi_data Objeto con la información separada del
     * documento Google Sheet
     */
    const _createFilters = gapi_data => {
        // Contenedor
        document
            .querySelectorAll("#ponchoTableFiltro")
            .forEach(e => e.innerHTML = "");

        // Imprime cada uno de los filtros
        Object.keys(filtro).forEach((f, key) => {
            const columna = filtro[f][0].columna ? filtro[f][0].columna : 0;
            let toSort = filtro[f].map(e => e.value)
            let list_filter = _sortAlphaNumeric(toSort, f);

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
            const tableFiltroCont = document.querySelector("#ponchoTableFiltro");
            tableFiltroCont.appendChild(tplCol);
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

            // Recorro cada uno de los títulos
            Object.keys(gapi_data.headers).forEach(header => {
                let filas = entry[header];

                if (header.startsWith("btn-") && filas != "") {
                    const label = header.replace("btn-", "").replace("-", " ");
                    filas = button(label, filas);
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

                // Las etiquetas `<a>` y `<time>` junto con `<span>`, están
                // permitidas si existen los prefijos _btn-_ y _fecha-_
                // respectivamente.
                if(header.startsWith("btn-") && filas != ""){
                    allowed_tags = [...allowed_tags, "a", "span"];
                } else if(header.startsWith("fecha-") && filas != ""){
                    allowed_tags = [...allowed_tags, "span", "time"];
                }

                const cleannedText = secureHTML(filas, allowed_tags);
                if(_isMarkdownEnable()){
                    cell.innerHTML = _markdownConvert(cleannedText);
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

            const uniqueEntries = _sortAlphaNumeric(
                distinct(entiresByFilter), filter
            );

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

        const uniqueList =  _sortAlphaNumeric( 
            distinct(filterList), filtersList[children] 
        );
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

        const uniqueList = _sortAlphaNumeric( 
            distinct(items), filtersList[children] 
        );
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
     * Tipo de tabla responsive.
     * 
     * @param {string} type Uno de los tres tipo de columna.
     * @returns {string|undefined}
     */
    _responsiveType = function(type){
        if(typeof type !== "string"){
            console.error("El tipo de columna responsive debe ser un string.");
            return;
        }
        const typeToLower = type.toLowerCase();
        const types = ["none", "column", "inline"];
        if(!types.includes(typeToLower)){
            console.error("El tipo de columna responsive es inválido.");
            return;
        }

        return typeToLower;
    }


    /**
     * Valida las columnas para la tabla responsive
     * 
     * @param {object} cols Array con los números de columna válidos.
     * @returns {object|undefined}
     */
    _responsiveColumns = function(cols){
        if(!Array.isArray(cols)){
            console.error("Las columnas ocultas deben ");
            return;
        }

        if(!cols.every(e => typeof e === "number")){
            console.error("Solo son válidos los númerso enteros para columnas");
            return;
        }

        let sanitizedArray = [... new Set(cols)];
        const hasZeroAsigned = sanitizedArray.indexOf(0);
        const removedElement = (hasZeroAsigned !== -1 ? sanitizedArray.splice( 
                hasZeroAsigned, 1) : sanitizedArray);

        if(removedElement){
            console.warn(
                "la columna 0 no se puede asignar. Se borra la asignación.");
        }
        if(sanitizedArray.length < 1){
            console.error(
                `No hay columnas asignadas en el array: ${sanitizedArray}`);
            return;
        }

        return sanitizedArray;
    }


    /**
     * Compone el objeto para colsDefs.
     * 
     * @param {object} columns Array con los números de columna válidos.
     * @param {string} type Tipo de columna válido
     * @param {boolean} orderable Especifica si se puede ordenar por la columna.
     * @returns {object}
     */
    _responsiveCols = function(columns, orderable, type="none"){
        columns = _responsiveColumns(columns);

        if(!columns){
            return {};
        }

        return { 
            className: _responsiveType(type),
            orderable: (typeof orderable === "boolean" ? orderable : false),
            targets: columns                  
        };
    }


    /**
     * Asignación de prioridades en la versión responsive.
     * 
     * @example 
     * _responsivePriorities([1,2]);
     * // [{responsivePriority: 1, targets: 2}]
     * @param {*} priorities 
     */
    function _responsivePriorities(priorities){
        if(!Array.isArray(priorities)){
            console.error("`responsivePriorities`, debe ser un array.");
            return [];
        }
        const results = priorities.map(m => {
            const [responsivePriority=false, targets=false] = m;
            if(typeof responsivePriority !== "number"){
                console.error("El orden de prioridad debe ser un número.");
                return;
            }
            if(typeof targets !== "number"){
                console.warn(
                    `La asignación de columna debe ser un número. Se 
                    elimina el valor: "${targets}".`)
                return {responsivePriority};
            }
            return {responsivePriority, targets};
        });
        
        return results.filter(f => f);
    }


    /**
     * Modifica el tamaño de las columnas
     * @param {object} def Array con definiciones de ancho y target
     * @returns {object}
     */
    function _columnsWidth(def){
        if(!Array.isArray(def)){
            console.error("`columnsWidth`, debe ser un array.");
            return [];
        }
        const regex = /(?<value>[0-9]+)(?<measure>\%|px|em|rem|pt)/;
        const results = def.map(m => {
            const [width=false, targets=false] = m;
            if(!regex.test(width)){
                console.error(
                    "El valor asignado al ancho de columna no es válido.");
                return;
            }
            if(typeof targets !== "number"){
                console.warn(
                    `La asignación de columna debe ser un número. Se 
                    elimina el valor: "${targets}".`)
                return {width};
            }
            return {width, targets};
        });

        return results.filter(f => f);
    }


    /**
     * Ejecuta un evento
     * 
     * @param {string} selector Selector html
     * @param {string} value Valor para definir en el input
     * @param {string} eventType Tipo de evento, ej: click, change, keypress
     */
    function _eventDispatcher(selector, value, eventType){
        const element = document.querySelectorAll(`#${selector}`);
        element.forEach(ele => {
            setTimeout(function(){
                ele.value = value;
                const event = new Event(eventType);
                ele.dispatchEvent(event);
            },50)
        });
    }


    /**
     * window pushState
     * 
     * @param {string} url Url
     * @returns {undefined}
     */
    function _pushState(url){
        if (!pushState) {
            console.log('sin pushstate')
            return;
        }
        window.history.pushState({}, "", url);
    }


    /**
     * Imprime la url
     * @summary Imprime la url con varios métodos
     */
    function _shareLink(){
        if(!urlParams){
            return;
        }

        // @todo Permitir que se mantengan parámetros seteados previamente.
        // const searchUrl = new URLSearchParams(window.location.search);
        // let searchValues = Object.entries(Object.fromEntries(searchUrl));
        
        const url = new URL(window.location.pathname, window.location.origin);

        const filters = filtersList.map(m => m.replace("filtro-", ""));
        const inputs = [ ...filters, "ponchoTableSearch" ];
        const inputValuesConcat = inputs.map(function(input){
            const v = document.getElementById(input);
            if(v){
                return [input, v.value];
            }
            return [];
        });




        if(!inputValuesConcat.some(s => s.length > 0)){
            return;
        }

        if(inputValuesConcat.some(e => e[1].length > 0)){
            _sharing();
        } else {
            document
                .querySelectorAll("#ponchoTableShareButton")
                .forEach(e => e.remove());
        }

        // Agrego parámetros
        inputValuesConcat.forEach(input => {
            let [key, value] = input;
            key = (key == "ponchoTableSearch" ? "buscar" : key);
            if(value.trim() == ""){
                return;
            }
            url.searchParams.append(key, value);
        });

        // Crea un tag <a/>
        document.querySelectorAll(".js-sharelink-tag").forEach(function(e){
            e.innerHTML = "";
            const label = e.dataset.label;
            const link = document.createElement("a");
            link.href = url.href;

            let refactorLabel = (label ? label : url.href);
            link.textContent = refactorLabel;

            e.appendChild(link);
        });

        // Imprime la url como texto en un attributo o en el cuerpo de la 
        // etiqueta.
        document.querySelectorAll(".js-sharelink-text").forEach(function(e){
            // Si el usuario agregó el dataset attr, imprimo la url 
            // en el attributo pasado como valor.
            const attr = e.dataset.attr;
            if(attr){
                e.setAttribute(attr, url.href);
            } else {
                e.innerHTML = url.href;
            }
        }); 

        _pushState(url.href);
    }


    /**
     * Crea un listener para copiar a porta-papeles
     * @returns {undefined}
     */
    function _copyToClipboard(){
        if(typeof copyToClipboard != "function"){
            return;
        }
        const toclipboard = document.querySelectorAll("[data-toclipboard]");
        toclipboard.forEach(elem => {
            const id = elem.dataset.toclipboard;
            elem.addEventListener("click", (e) => {
                e.preventDefault();
                copyToClipboard(`#${id}`);
            });
        });
    }


    /**
     * Crea un botón para compartir resultados
     * @returns {undefined}
     */
    function _sharing(){
        if(!copyResults){
            return;
        }

        try {
            document
                .querySelectorAll("#ponchoTableShareButton")
                .forEach(e => e.remove());
        } catch (error) {
            console.error("Error:", "No se encuentra el selector");
        }

        const b = document.createElement('div');
        b.id = "ponchoTableShareButton";
        b.innerHTML = `<div class="dropdown">
            <button 
                class="btn btn-sm btn-default dropdown-toggle" 
                type="button" 
                id="share-table-data" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
            Compartir resultados
            <span class="caret"></span>
            </button>
            <div 
                class="dropdown-menu p-y-1 p-x-1" 
                aria-labelledby="share-table-data">
                <p class="js-sharelink-tag m-b-0 small" id="foo"></p>
                <a 
                    href="#" data-toclipboard="foo" 
                    class="small btn btn-sm btn-default m-b-0 m-t-1">
                    Copiar al portapapeles</a>
            </div>
        </div>`;

        const info = document.querySelector("#ponchoTable_info");
        const infoContainer = info.parentElement;
        infoContainer.classList.add("share");
        infoContainer.appendChild(b);

        headStyle(
            "ponchoTable-share-button", 
            `.share{display:flex;gap:1.5em;align-items:baseline}.share .dropdown-menu{min-width:250px}`);
        _copyToClipboard();
    }


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
        let dataTableOptions = {
            initComplete: (settings, json) => {
                if(wizard){
                    _hideTable();
                }
            },
            lengthChange: false,
            autoWidth: false,
            pageLength: opt.cantidadItems,
            columnDefs: [
                { 
                    type: "html-num",
                    targets: opt.tipoNumero
                },
                { 
                    targets: opt.ocultarColumnas, 
                    visible: false 
                }
            ],
            ordering: opt.orden,
            order: [
                [opt.ordenColumna - 1, opt.ordenTipo]
            ],
            dom: "<\"row\"<\"col-sm-6\"l><\"col-sm-6\"f>>" +
                "<\"row\"<\"col-sm-12\"i>>" +
                "<\"row\"<\"col-sm-12\"tr>>" +
                "<\"row\"<\"col-md-offset-3 col-md-6 "
                + "col-sm-offset-2 col-sm-8\"p>>",
            language: {
                sProcessing: "Procesando...",
                sLengthMenu: "Mostrar _MENU_ registros",
                sZeroRecords: "No se encontraron resultados",
                sEmptyTable: "Ningún dato disponible en esta tabla",
                sInfo: "_TOTAL_ resultados",
                sInfoEmpty: "No hay resultados",
                //"sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                sInfoFiltered: "",
                sInfoPostFix: "",
                sSearch: "Buscar:",
                sUrl: "",
                sInfoThousands: ".",
                sLoadingRecords: "Cargando...",
                oPaginate: {
                    sFirst: "<<",
                    sLast: ">>",
                    sNext: ">",
                    sPrevious: "<"
                },
                oAria: {
                    sSortAscending:
                        ": Activar para ordenar la columna "
                        + "de manera ascendente",
                    sSortDescending:
                        ": Activar para ordenar la columna de "
                        + "manera descendente",
                    paginate: {
                        first: "Ir a la primera página",
                        previous: "Ir a la página anterior",
                        next: "Ir a la página siguiente",
                        last: "Ir a la última página"
                    }
                }
            }
        };

        // Ancho de columnas
        if(typeof opt.columnsWidth !== "undefined" && opt.columnsWidth){
            dataTableOptions.columnDefs = dataTableOptions.columnDefs.concat(
                _columnsWidth(opt.columnsWidth));
        }

        /**
         * Opciones responsive
         */
        if(typeof opt.responsiveDetailsColumns !== "undefined" && 
                opt.responsiveDetailsColumns.length > 0){

            const responsiveDetails = _responsiveCols(
                opt.responsiveDetailsColumns, 
                opt.responsiveDetailsOrderable, 
                opt.responsiveDetailsType);

            const priorities = _responsivePriorities(opt.responsivePriorities);

            dataTableOptions.columnDefs = dataTableOptions.columnDefs.concat(
                responsiveDetails, priorities);

            dataTableOptions.responsive = true;
        }

        let tabla = jQuery("#ponchoTable").DataTable(dataTableOptions);

        /**
         * Buscador por palabra
         * @summary Ejecuta la búsqueda en cada keyup.
         */
        jQuery("#ponchoTableSearch").keyup(function() {
            tabla
                .search(jQuery.fn.DataTable.ext.type.search.string(this.value))
                .draw();
            _shareLink();
        });


        // REMUEVE LOS FILTROS
        jQuery("#ponchoTable_filter").parent().parent().remove();

        // MUESTRA FILTRO PERSONALIZADO
        const ponchoTableOption = 
            document.querySelectorAll("#ponchoTableFiltro option");
        if (ponchoTableOption.length > 1) {
            document
                .querySelector("#ponchoTableFiltroCont")
                .style.display = "block";
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

                } else if(selectHasValues && !valFilter &&  key <= column + 1){
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
            window.addEventListener("popstate", (event) => {

            });
            if(wizard){
                _wizardFilters(filters, column, valFilter);
            }
            _shareLink();
        });


        function filterParams(filterList, str){
            const regex = new RegExp('filter(?<index>(?:[1-9][0-9]|[1-9]))', '');
            const regexResult = regex.exec(str);

            if(regexResult === null){
                return str;
            }

            const filters = filterList.map(m => m.replace("filtro-", ""));
            const filter = filters[ regexResult.groups.index - 1 ];
            return (typeof filter !== "undefined" ? filter : str);
        }


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


        // Si está seteado urlParams habilita los filtros y búsquedas por
        // Url.
        if(urlParams){
            const u = new URLSearchParams(window.location.search);
            for (const key of u.keys()){
                let value =  u.get(key);
                let refactorKey = filterParams(filtersList, key);

                if(value.trim() == ""){
                    return;
                }

                if(key == "buscar"){
                    _eventDispatcher(`ponchoTableSearch`, value, "keyup");
                } else {
                    _eventDispatcher(refactorKey, value, "change");
                }
            };
        }
    } // end initDataTable


    /**
     * Permite definir el orden de los headers.
     * @param {*} headers {object}
     * @param {*} order
     * @returns
     */
    const _headersOrder = (headers) => {
        if(opt.hasOwnProperty("headersOrder") && opt.headersOrder.length > 0){
            let refactorHeaders = {};
            for(i of opt.headersOrder){
                if( headers.hasOwnProperty(i) ){
                    refactorHeaders[i] = headers[i];
                }
            }
            return refactorHeaders;
        }
        return headers;
    };


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

        gapi_data.headers = _headersOrder(gapi_data.headers, opt.headersOrder);

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

        _shareLink();

        setTimeout(() => {
            const ele = document.querySelectorAll(`[id^="dt-search-"], #ponchoTable_filter`);
            ele.forEach(elem => {
                elem.closest(".row").remove();
            });
        }, 300);
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
            "https://sheets.googleapis.com/v4/spreadsheets/",
            opt.idSpread, "/?alt=json&key=",
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

        const data = {entries: opt.jsonData, headers};
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
    var urlMunicipios = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geomunicipios.json';
    var urlLocalidades = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geolocalidades.json';
    var provincias;
    var municipios;
    var localidades;
    var iProvincia = jQuery('input[name="submitted[' + options.provincia + ']"]');
    var iMunicipio = jQuery('input[name="submitted[' + options.municipio + ']"]');
    var iLocalidad = jQuery('input[name="submitted[' + options.localidad + ']"]');
    var sProvincia;
    var sMunicipios;
    var sLocalidades;

    function init() {
        urlProvincias = (options.urlProvincias ? options.urlProvincias : urlProvincias);
        urlMunicipios = (options.urlMunicipios ? options.urlMunicipios : urlMunicipios);
        urlLocalidades = (options.urlLocalidades ? options.urlLocalidades : urlLocalidades);

        jQuery.getJSON(urlProvincias, function(data) {
            provincias = parseJsonProvincias(data);
            sProvincia = getSelectProvincias(provincias);
            addProvEvent();
            iProvincia.after(sProvincia);
            jQuery(sProvincia).select2();
        });

        jQuery.getJSON(urlMunicipios, function(data) {
            municipios = parseJsonMunicipios(data);
            sMunicipios = getSelectMunicipios(municipios, sProvincia.val());
            addMunEvent();
            iMunicipio.after(sMunicipios);
            jQuery(sMunicipios).select2();
        });

        jQuery.getJSON(urlLocalidades, function(data) {
            localidades = parseJsonLocalidades(data);
            sLocalidades = getSelectLocalidades(localidades, sProvincia.val());
            addLocEvent();
            iLocalidad.after(sLocalidades);
            jQuery(sLocalidades).select2();
        });
        iProvincia.hide();
        iMunicipio.hide();
        iLocalidad.hide();
    }


    /**
     * 
     * @param {*} data 
     * @returns 
     */
    function parseJsonProvincias(data) {
        provincias = [];
        data.provincias.forEach(function(provincia, index) {
            provincias.push(provincia);
        });
        return provincias;
    }

    /**
    * 
    * @param {*} data 
    * @returns 
    */
    function parseJsonMunicipios(data) {
        const groupedData = data.municipios.reduce((acc, current) => {
            const key = `${current.nombre}`;
            current.label = key;
            if (!acc[key]) {
                acc[key] = current;
            }
            return acc;
        }, {});
    return Object.values(groupedData);
    }
    
    /**
     * 
     * @param {*} data 
     * @returns 
     */
    function parseJsonLocalidades(data) {
        const groupedData = data.localidades.reduce((acc, current) => {
            const key = `${current.departamento.nombre} - ${current.nombre}`;
            current.label = key;
            if (!acc[key]) {
                acc[key] = current;
            }
            return acc;
        }, {});
        return Object.values(groupedData);
    }


    /**
     * 
     */
    function addProvEvent() {
        sProvincia.on('change', function(e) {
            iProvincia.val('');
            iMunicipio.val('');
            iLocalidad.val('');
            sMunicipios.children('option:not(:first)').remove();
            sLocalidades.children('option:not(:first)').remove();
            if (sProvincia.val() != '') {
                iMunicipio.val(sMunicipios.find(":selected").text());
                iProvincia.val(sProvincia.find(":selected").text());

                var sAuxM = getSelectMunicipios(municipios, sProvincia.val());
                var sOptM = sAuxM.find('option');
                sMunicipios.append(sOptM);
                sMunicipios.val('');
                
                var sAuxL = getSelectLocalidades(localidades, sProvincia.val());
                var sOptL = sAuxL.find('option');
                sLocalidades.append(sOptL);
                sLocalidades.val('');

            }
        });
    }

    /**
    * 
    */
    function addMunEvent() {
        sMunicipios.on('change', function(e) {
            iMunicipio.val('');
            if (sMunicipios.val() != '') {
                iMunicipio.val(sMunicipios.find(":selected").text());
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
                selected = ' selected="selected"';
            }
            const label = (el.label ? el.label : el.nombre);
            combo.append(
                `<option value="${el.id}"${selected}>${label}</option>`
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
    * @param {*} municipios 
    * @param {*} provincia
    * @returns 
    */
    function getSelectMunicipios(municipios, provincia) {
        var muniSelect = {};
        var required = iMunicipio.prop('required');
        var select = null;
        
        if (iProvincia.val()) {
        muniSelect = municipios
                .filter(function(municipio) {
                    return String(municipio.provincia.id) == String(provincia);
                })
                .sort(function(a, b) {
                    var nameA = a.label.toUpperCase();
                    var nameB = b.label.toUpperCase();
                    return nameA.localeCompare(nameB);
                });
        emptyOption = false;
            select = getDropDownList(
                'sMunicipios', 'sMunicipios',
                muniSelect, required, emptyOption, iMunicipio.val()
            );
        }else {
            select = getDropDownList(
                'sMunicipios', 'sMunicipios',
            [], required, true, false
            );
        }
        
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
                .sort(function(a, b) {
                    var nameA = a.label.toUpperCase();
                    var nameB = b.label.toUpperCase();
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
                    const regex = /(?<axis>eje-(x|y(?:[1-9]|[1-9][0-9])))-(?<color>[\w-]*?)(?:-(?<type>linea|barra))?$/;
                    const result = regex.exec(listado[row][filteredTitlePos[index]]);
                    if(!result){
                        return;
                    }
                    
                    const graphType = result.groups.type;
                    const pos = result.groups.axis.replace('-', '');

                    valores[pos] = []; //construyo los array para los dataset
                    colores.push( result.groups.color ); //recupero colores

                    if (tipoGrafico == "mixed") {
                        if (graphType){ //ingresaron un tipo de grafico
                            //verifico que sea un tipo de grafico valido
                            if (graphType == "barra" || graphType == "linea") {
                                //recupero tipo de grafico para cada dataset   
                                tipoGraficosMixed.push(graphType);
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
                console.log(valor)
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

  if (!response || !response.values || response.values.length === 0) {
    throw new TypeError("Invalid response format");
  }

  if (!Array.isArray(response.values) || !Array.isArray(response.values[0])) {
    throw new TypeError("Invalid response format: values should be arrays");
  }

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


if (typeof exports !== "undefined") {
  module.exports = gapi_legacy;
}

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
            id_mixing: [],
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
                title_classlist: ["h4","pm-color-primary","m-t-0"]
            },
            fit_bounds_onevent: true,
            allowed_tags: [],
            template_innerhtml: false,
            template_markdown: false,
            theme_ui: false,
            theme_map: false,
            theme_tool: true,
            map_opacity: 1,
            map_background: "#DDD",
            theme: "default",
            default_themes: [
                ["default", "Original"], 
                ["contrast", "Alto contraste"],
                ["dark", "Oscuro"],
                ["grayscale", "Gris"],
                // ["sepia", "Sepia"],
                // ["blue", "Azul"],
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
            map_init_options: {
                // zoomSnap: .2,
                // zoomControl: false,
                // scrollWheelZoom: false,
                // touchZoom: false,
                // doubleClickZoom: false,
                // scrollWheelZoom: false,
                // boxZoom: false,
                // dragging:false
            },
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
                opacity: 1,
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
        this.fit_bounds_onevent = opts.fit_bounds_onevent;
        this.map_view = opts.map_view;
        this.map_init_options = opts.map_init_options;
        this.anchor_delay = opts.anchor_delay;
        this.map_zoom = opts.map_zoom;
        this.min_zoom = opts.min_zoom;
        this.map_anchor_zoom = opts.map_anchor_zoom;
        this.tooltip_options = opts.tooltip_options;
        this.tooltip = opts.tooltip;
        this.marker_cluster_options = opts.marker_cluster_options;
        this.marker_color = opts.marker;
        this.id = opts.id;
        this.id_mixing = opts.id_mixing;
        this.title = opts.title;
        this.map_background = opts.map_background;
        this.theme = opts.theme;
        this.theme_tool = opts.theme_tool;
        this.default_themes = opts.default_themes;
        this.temes_not_visibles = [["transparent", "Transparent"]];
        this.theme_ui = opts.theme_ui;
        this.theme_map = opts.theme_map;
        this.map_opacity = opts.map_opacity;
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
        this.content_outside = (this.content_selector !== `.js-content${this.scope_sufix}` ? true : false);
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
        this.map = new L.map(this.map_selector, {
            renderer: L.svg(),
            ...this.map_init_options
        }
        ).setView(this.map_view, this.map_zoom);
        this.titleLayer = new L.tileLayer(
            "https://mapa-ign.argentina.gob.ar/osm/{z}/{x}/{-y}.png",
            { 
                attribution: ("Contribuidores: "
                    + "<a href=\"https://www.ign.gob.ar/AreaServicios/Argenmap/Introduccion\" " 
                    + "target=\"_blank\">"
                    + "Instituto Geográfico Nacional</a>, "
                    + "<a href=\"https://www.openstreetmap.org/copyright\" "
                    + "target=\"_blank\">"
                    + "OpenStreetMap</a>")
            });
        if(L.hasOwnProperty("markerClusterGroup")){
            this.markers = new L.markerClusterGroup(this.marker_cluster_options);
        } 
        this.ponchoLoaderTimeout;
    }


    //
    // TEMA PARA EL MAPA
    //

    /**
     * Modifica la opacidad del mapa
     * @param {double|string} value Número _(double)_, o porcentaje de valor
     * @example
     * mapOpacity(0.5)
     * mapOpacity("50%")
     * @returns {undefined}  
     */
    mapOpacity = (value=false) => {
        const opacity = (value ? value : this.map_opacity);
        document
            .querySelectorAll(
                `${this.scope_selector} .leaflet-pane .leaflet-tile-pane`)
            .forEach(e => e.style.opacity=opacity);
    }


    /**
     * Define el color de fondo para el mapa. 
     * @param {string} value Color en hexadecimal o cualquier sistema de color
     * aceptado por html.
     * @example
     * // #ffcc00
     * // Se representará como: style="background-color:#ffcc00;"
     * mapBackgroundColor("#ffcc00")
     * @returns {undefined} 
     */
    mapBackgroundColor = (value=false) => {
        const color = (value ? value : this.map_background);
        document
            .querySelectorAll(`${this.scope_selector} .leaflet-container`)
            .forEach(e => e.style.backgroundColor = color);
    };


    /**
     * Crea el menú para cambiar de temas
     * @returns {undefined} 
     */
    _menuTheme = () => {
        if(!this.theme_tool){
            return;
        }
        document
        .querySelectorAll(`#themes-tool${this.scope_sufix}`)
        .forEach(ele => ele.remove());

        const navContainer = document.createElement("ul");
        navContainer.classList.add(
            "pm-list-unstyled", "pm-list",
            "pm-tools",
            `js-themes-tool${this.scope_sufix}`
        );


        const item = document.createElement("li");
        item.setAttribute("tabindex", "-1");
        item.dataset.toggle="true";

        const icon = document.createElement("i");
        icon.setAttribute("aria-hidden", "true");
        icon.classList.add("pmi", "pmi-adjust");

        const button = document.createElement("button");
        button.title = "Cambiar tema";
        button.id = `themes-tool-button${this.scope_sufix}`;
        button.tabIndex = "0";
        button.classList.add("pm-btn", "pm-btn-rounded-circle");
        button.appendChild(icon);
        button.setAttribute("role", "button");
        button.setAttribute("aria-label", "Abre el panel de temas");

        const list = document.createElement("ul");
        list.classList.add(
            "pm-container", "pm-list", "pm-list-unstyled", 
            "pm-p-1", "pm-caret", "pm-caret-b", "pm-toggle");

        // Botón para restablecer el mapa
        const restart = document.createElement("button");
        restart.textContent = "Restablecer";
        restart.classList.add("pm-item-link", "js-reset-theme");
        const li = document.createElement("li");
        li.classList.add("pm-item-separator");
        li.appendChild(restart);
        list.appendChild(li);

        this.default_themes.map(m => m[0]).forEach((value, key)  => {
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

        const element = document.querySelectorAll(this.scope_selector);
        element.forEach(e => e.appendChild(navContainer));

        // listeners
        document
            .querySelectorAll(".js-reset-theme")
            .forEach(ele => ele.addEventListener(
                "click", () => {
                    localStorage.removeItem("mapTheme");
                    this._removeThemes();
                    this._setThemes();
                })
            );

        document
            .querySelectorAll(".js-set-theme")
            .forEach(ele => ele.addEventListener(
                "click", () => {
                    const th = ele.dataset.theme;
                    this.useTheme(th);
                    localStorage.setItem("mapTheme", th);
                })
            );
    };


    /**
     * Compone los estilos según la elección del usuario.
     * @param {string} theme Nombre del tema 
     * @param {object} prefix Lista de prefijos. ui o map 
     * @returns {object} Array con los estilos definidos.
     */
    _setThemeStyles = (theme=false, prefix=["ui", "map"]) => prefix.map(m => {
        return (["ui", "map"].includes(m) ? `${m}-${theme}` : false);
    });


    /**
     * Remueve los estilos de tema
     * @param {object} prefix Lista de prefijos. ui o map 
     * @returns {undefined}
     */
    _removeThemes = (prefix=["ui", "map"]) => {
        const element = document.querySelectorAll(this.scope_selector);
        element.forEach(ele => {
            [
                ...this.default_themes,
                ...this.temes_not_visibles
            ].map(m => m[0]).forEach(th => {
                ele.classList.remove(...this._setThemeStyles(th, prefix));
            });
        });
    };


    /**
     * Agrega un tema en el mapa e interfase.
     * @param {string} theme Nombre del tema
     * @param {object} prefix Lista de prefijos. ui o map 
     * @returns {undefined}
     */
    _setTheme = (theme, prefix)  => {
        const element = document.querySelectorAll(this.scope_selector);
        this._removeThemes(prefix);
        element.forEach(ele => {
            ele.classList.add( ...this._setThemeStyles(theme, prefix) ); 
        });
    }


    /**
     * Permite setear un tema completo
     * @param {string} theme Nombre del tema
     * @returns {undefined}
     */
    useTheme = (theme = false) => {
        const useTheme = (theme ? theme : this.theme);
        this._setTheme(useTheme, ["ui", "map"]);
    }


    /**
     * Setea un tema para el mapa
     * @param {string} theme Nombre del tema
     * @returns {undefined}
     */
    useMapTheme = theme => this._setTheme(theme, ["map"]);


    /**
     * Setea un tema para el mapa
     * @param {string} theme Nombre del tema
     * @returns {undefined}
     */
    useUiTheme = theme => this._setTheme(theme, ["ui"]);


    /**
     * Setea el tema elegido por el usuario o el que lleva por defecto.
     * @returns {undefined}
     */
    _setThemes = () => {
        if(localStorage.hasOwnProperty("mapTheme")){
            this._setTheme(localStorage.getItem("mapTheme"), ["ui", "map"]);
            return;
        }

        if(!this.theme_ui && !this.theme_map){
            this.useTheme();
            return;
        }

        if(this.theme_ui){
            this._setTheme(this.theme_ui, ["ui"]);
        }

        if(this.theme_map){
            this._setTheme(this.theme_map, ["map"]);
        }
    }


    /**
     * Alias de sluglify
     * 
     * @param {string} val Texto a formatear 
     * @returns {string}
     */
    _slugify = val => slugify(val);


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
        title.classList.add("h6", "title", "pm-visually-hidden");
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
     * El indice id_mixing ¿Está siendo usado?
     * @returns {boolean}
     */
    _isIdMixing = () => (Array.isArray(this.id_mixing) && 
            this.id_mixing > 0 || typeof this.id_mixing === 'function');


    /**
     * Array con valores a concatenar en el id.
     * 
     * @summary Dependiendo de la opción que haya elegido el usario, retorna
     * una array de valors pasado por funcion o _array object_.
     * @param {object} entry Objeto con una entrada del geoJson
     * @returns {object} Array con los valores a concatenar.
     */
    _idMixing = entry => {
        if(!this._isIdMixing()){
            return;
        }

        if(typeof this.id_mixing === "function"){
            return this.id_mixing(this, entry).join('');
        } 
        
        const values = this.id_mixing.map(val => {
            if(entry.properties[val]){
                return entry.properties[val].toString();
            } 
            return val;
        });

        return this._slugify(values.join("-"));
    }


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
        const hasId = entries.features
            .filter((_, k) => k === 0)
            .every(e => e.properties.hasOwnProperty("id"));

        // Si no se configuró id_mixing y el json tiene id.
        if(!this._isIdMixing() && hasId){
            return entries;
        }
 
        const newEntries = entries.features.map((entry, k) => {
            if(this._isIdMixing()){
                // Procesa la opción de id_mixing
                entry.properties.id = this._idMixing(entry);
            } else {
                // Genera un ID automático
                const autoId = k + 1;
                const useTitle = (this.title && entry.properties[this.title] ? 
                        this._slugify(entry.properties[this.title]) : "");
                entry.properties.id = [autoId, useTitle].filter(f=>f).join('-');
            }
            
            return entry;
        }); 
        entries.features = newEntries;
        return entries;
    };


    /**
     * Agrega el hash en la barra de url.
     * 
     * @param {string|integer} value
     * @return {undefined}
     */
    addHash = (value) => {

        if (typeof value !== "string" && !value) {
            console.error('Invalid value provided to update hash');
            return;
        }

        if (!this.hash || this.no_info) {
            return;
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
        return this.entries.find(e => {
            if(e?.properties && e.properties[this.id] === id && 
               e.properties?.["pm-interactive"] !== "n"){
                return true;
            }
            return false;
        });
    }


    /**
     * Busca un término en un listado de entradas.
     * 
     * @param {string} term Término a buscar.
     * @returns {object} Listado filtrado por los match
     */
    searchEntries = (term, dataset) => {
        dataset = (typeof dataset === "undefined" ? this.geoJSON: dataset);
        if(typeof term !== "string" || term.trim().length === 0){
            return dataset;
        }
        const entries = dataset.filter(entry => {
            return (this.searchEntry(term, entry.properties));
        })
        return entries;
    };


    /**
     * Busca un término en cada uno de los indices de una entrada.
     */
    searchEntry = (searchTerm, data) => {
        const searchFor = [
            ...new Set([...[this.title], ...this.search_fields])
        ].filter(e => e);

        const term = replaceSpecialChars(searchTerm).toUpperCase();
        const result = searchFor.some(function(key){
            const field = replaceSpecialChars(data[key])
                    .toString()
                    .toUpperCase();

            try {
                return (field.includes(term));
            } catch (error) {
                console.error(error);
            }
        });

        return (result ? data : null);
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
        if(!this.render_slider || this.content_outside){
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
        close_button.innerHTML = "<span class=\"pm-visually-hidden\">Cerrar</span>✕";

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


    _removeTooltips = () => {
        let _this = this;
        this.map.eachLayer(function(layer) {
            if(layer.options.pane === "tooltipPane") {
                layer.removeFrom(_this.map);
            }
        });
    }


    /**
     * Proyecta el slider y hace zoom en el marker.
     */
    _showSlider = layer => {
        this._removeTooltips();

        if(layer.hasOwnProperty("_latlng")){
            this.map.setView(layer._latlng, this.map_anchor_zoom);
        } else if(this.fit_bounds_onevent) {
            this.map.fitBounds(layer.getBounds().pad(0.005));
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
            this.map.fitBounds(layer.getBounds().pad(0.005));
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
     * 
     * @param {string|integer} id Valor identificador del marker. 
     * @returns {undefined}
     */
    gotoEntry = id => {
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

                if(this.slider){
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
    _setClickeable = layer => {
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
                return (e?.properties && e.properties[this.id]===layer.options.id);
            });
            this.setContent(content.properties);
        });
    };


    /**
     * Es un feature 
     * @param {object} layer Objeto Feature GeoJSON. 
     * @returns {boolean}
     */
    isFeature = layer => {
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
            } else if(layer?.feature?.properties["pm-interactive"] == "n"){
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
        if(!this.hash){
            return;
        }

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

        if(!entry[key].trim()){
            return;
        }

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
            this.map.fitBounds(this.geojson.getBounds().pad(0.005));
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

        document.querySelectorAll(
            `.js-reset-view${this.scope_sufix}`).forEach(e => e.remove());
        
        document
            .querySelectorAll(`${this.scope_selector} .leaflet-control-zoom-in`)
            .forEach(ele => {

            const icon = document.createElement("i");
            icon.classList.add("pmi", "pmi-expand");
            icon.setAttribute("aria-hidden","true");

            const button = document.createElement("a");
            button.classList.add(`js-reset-view${this.scope_sufix}`, 
                                "leaflet-control-zoom-reset");
            button.href = "#";
            button.title = "Ver mapa completo";
            button.setAttribute("role", "button");
            button.setAttribute("aria-label", "Ver mapa completo");
            button.appendChild(icon);
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
            
            ele[key].setAttribute("tabindex", 0);
            ele[key].dataset.entryId = ele?.feature?.properties?.[this.id];
            
            if(ele?.feature?.properties?.["pm-interactive"] == "n"){
                ele[key].dataset.interactive = "n";
                ele[key].setAttribute("role", "graphics-symbol");
            } else {
                ele[key].setAttribute("role", "button");
            }
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
            [
                `.js-themes-tool-button${this.scope_sufix}`,
                `themes-tool-button${this.scope_sufix}`,
                [
                    ["aria-label", "Herramienta para cambiar de tema visual"],
                    ["role", "region"],
                ]   
            ],
        ];
        anchors.forEach(anchor => {
            const element = document.querySelectorAll(anchor[0]);
            element.forEach( ele => {
                ele.id = anchor[1]
                anchor[2].forEach(e => ele.setAttribute(e[0], e[1]));
            } );
            
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
        document.querySelectorAll(`${this.scope_selector} .pm-accesible-nav`)
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
                text: "Ver mapa completo",
                anchor: "#",
                class: `js-reset-view${this.scope_sufix}`
            },
            {
                text: "Ir al panel de zoom",
                anchor: `#${anchors[1][1]}` 
            },
            {
                text: "Cambiar de tema",
                anchor: `#${anchors[2][1]}`,
                class: `js-themes-tool-button${this.scope_sufix}`
            },
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
            "pmi", 
            "pmi-universal-access", 
            "accesible-nav__icon"
        );
        icon.setAttribute("aria-hidden", "true");

        const nav = document.createElement("div");
        nav.classList.add("pm-accesible-nav", "top", "pm-list");
        nav.id = `pm-accesible-nav${this.scope_sufix}`;
        nav.setAttribute("aria-label", "Menú para el mapa");
        nav.setAttribute("role", "navigation");
        nav.tabIndex=0;

        const ul = document.createElement("ul");
        ul.classList.add("pm-list-unstyled");

        values.forEach((link, index) => {
            const a = document.createElement("a");
            a.classList.add("pm-item-link", "pm-accesible")
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
        back_to_nav.classList.add("pm-item-link", "pm-accesible");
        back_to_nav.href = `#pm-accesible-nav${this.scope_sufix}`;
        back_to_nav.id = `accesible-return-nav${this.scope_sufix}`;

        const return_nav = document.createElement("div");
        return_nav.classList.add("pm-accesible-nav", "bottom");
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
     * Listener global
     */
    _listeners = () => {
        const _this = this;
    
        /**
         * Zoom out
         * @summary Adjusts the map markers to fit the view.
         */
        const handleResetView = (e) => {
            const resetViewButton = e.target.closest(
                    `.js-reset-view${this.scope_sufix}`);
            if (resetViewButton) {
                e.preventDefault();

                _this.cleanState();
                _this.resetView();
            }
        };

        /**
         * themes focus
         * @summary Hace foco en la herramienta para cambiar de tema.
         */
        const handleThemeToolFocus = (e) => {
            const resetViewButton = e.target.closest(
                    `.js-themes-tool-button${_this.scope_sufix}`);

            if (resetViewButton) {
                e.preventDefault();
                document
                    .querySelector(`#themes-tool-button${_this.scope_sufix}`)
                    .focus({ focusVisible: true, preventScroll: false })
            }
        };

        // mount
        document.body.addEventListener("click", handleResetView);
        document.body.addEventListener("click", handleThemeToolFocus);

        // unmount
        this.removeListeners = () => {
            document.body.removeEventListener("click", handleResetView);
            document.body.removeEventListener("click", handleThemeToolFocus);
        };
    };


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

        this._urlHash();

        if(this.scroll && this.hasHash()){
            this.scrollCenter();
        }

        setTimeout(this.gotoHashedEntry, this.anchor_delay);
        this._setFetureAttributes();
        this._accesibleMenu();
        this.mapOpacity();
        this.mapBackgroundColor();

        this._listeners();
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
            selector: "",
            scope: "",
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
        // Background opacity
        Object.assign(cover.style, this.cover_style);
        if(this.cover_opacity){
            cover.style.backgroundColor = `color-mix(in srgb, transparent, var(--pm-loader-background) ${this.cover_opacity.toString() * 100}%)`;
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
        const container_position_distance = this._cssVarComputedDistance() * 3;
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
    _fieldsToUse = (fieldsItems) => {
        const {
            type = "checkbox",
            fields: optFields = false, 
            field: optField = false} = fieldsItems;

        if(!optFields && !optField){
            this.errorMessage(
                "Filters requiere el uso del atributo `field` o `fields`.",
                "warning"
            );
        }
        // Evito que a los radio se les asigne un valor checked.
        if (optField && type === "radio"){
            optField[1] = false;
        }

        let fieldsToUse = (optFields ? optFields : this._setFilter(optField));
        // Hasta que se defina su uso, todos los radio tienen un item `Todos`.
        if(type === "radio" && optFields === false){
            const f = fieldsToUse.map(m => m[1]);
            fieldsToUse = [
                [fieldsToUse[0][0], "Todos", f, "checked"], ...fieldsToUse
            ];
        }
        
        return fieldsToUse;
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
        filter_icon.classList.add("pmi", "pmi-filter");

        const button_text = document.createElement("span");
        button_text.textContent = "Abre o cierra el filtro de búsqueda";
        button_text.classList.add("pm-visually-hidden");

        const button = document.createElement("button");
        button.classList.add(
            "pm-btn", "pm-btn-rounded-circle", "pm-my-1",
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
     * Medida definida en la variable CSS --pm-slider-distance
     * 
     * @summary Esta medida puede ser variable según el estilo que se
     * quiera dar al mapa el diseñador. 
     * @returns {integer}
     */
    _cssVarComputedDistance = () => {
        const container = document.querySelector(".poncho-map");
        const computedDistance = getComputedStyle(container)
                .getPropertyValue('--pm-slider-distance');
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
        close_button.innerHTML = "<span class=\"pm-visually-hidden\">Cerrar </span>✕";


        const form = document.createElement("form");
        form.classList.add(`js-formulario${this.scope_sufix}`);
        form.appendChild(close_button); 
        form.appendChild(fields_container); 

        const container = document.createElement("div");
        container.classList.add(
            `js-poncho-map-filters${this.scope_sufix}`,
            "pm-container",
            "poncho-map-filters",
            "pm-caret", "pm-caret-t",
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
        const form_filters = document
            .querySelector(`.js-filters${this.scope_sufix}`);

        data.forEach((item, group) => {
            let legend = document.createElement("legend");
            legend.textContent = item.legend;
            legend.classList.add("m-b-1", "color-primary", "h6")

            let fieldset = document.createElement("fieldset");
            fieldset.appendChild(legend);
            if(item.hasOwnProperty("check_uncheck_all") && 
                    item.check_uncheck_all && item?.type != "radio"){
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
            span.className = "pm-visually-hidden";
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
        const total_groups = this.filters.length;

        const validations = Array.from( {length: total_groups}, (_, i) => {
            return this._validateGroup(entry, fields_group(i));
        }).reduce((acc, val) => acc && val, true);

        return validations;
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

        this._urlHash();
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
        this._setThemes();

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
        this.mapOpacity();
        this.mapBackgroundColor();

        this._listeners();
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
 * PONCHO MAP FILTRO POR PROVINCIAS
 *
 * @summary Assets para configrar poncho map con un geoJSON de provincias.
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 *
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
const PONCHOMAP_GEOJSON_PROVINCES = "/profiles/argentinagobar/"
        + "themes/contrib/poncho/resources/jsons/"
        + "geo-provincias-argentinas.json";

/**
 * Junta el geoJSON con el JSON de Google Sheet
 *
 * @summary Este objeto no puede estar dentro de la clase porque no se puede
 * utiliar `this` antes de `super()` en ES6.
 *
 * @param {object} geoProvinces GeoJSON
 * @param {object} entries JSON con entradas por provincia.
 * @returns {object}
 */
const ponchoMapProvinceMergeData = (geoProvinces={}, entries={},
                                    provinceIndex="provincia") => {

    if(!geoProvinces.hasOwnProperty("features")){
        throw new Error("Invalid data format");
    }

    geoProvinces.features.forEach((feature, key) => {
        const jsonEntry = entries.find(entry =>
            (entry[provinceIndex] == feature.properties.fna ||
            entry[provinceIndex] == feature.properties.nam)
        );
        // Si no existe la provincia en el JSON, borra el feature.
        if(!jsonEntry && feature.properties.fna){
            delete geoProvinces.features[key];
            return;
        }
        // Si hay definido un key _color_, usa el color en el fill.
        if(jsonEntry?.color && !feature.properties["pm-type"]){
            geoProvinces
                .features[key]
                .properties.stroke = ponchoColor(jsonEntry.color);
        }
        // Remuevo la propiedad interactive del json para que no se interponga
        // con el valor del geoJSON.
        if(feature.properties["pm-interactive"] === "n" && 
                    jsonEntry?.["pm-interactive"] !== "n"){
            delete jsonEntry["pm-interactive"];
        }

        Object.assign(geoProvinces.features[key].properties, jsonEntry);
    });
    return geoProvinces;
};


/**
 * Remueve estilos toggle del select y el contenedor del mapa
 * 
 * @summary 
 * Cuando la opción sea verdadera (true en inglés), y  el viewport o 
 * tamaño del display, sea inferior a los 992 píxeles de ancho; 
 * el componente html, select, con el listado de provincias se mostrará, 
 * mientras que el mapa permanecerá oculto. 
 * 
 * Cuando la opción sea falsa (false en inglés), tanto el componente 
 * html, select, como el mapa estarán visibles en todo momento.
 * 
 * @todo Este objeto no puede estar dentro de la clase porque no se puede
 * utiliar `this` antes de `super()` en ES6.
 * @returns {undefined}
 */
const ponchoMapProvinceCssStyles = flag => {
    if(typeof flag !== "boolean"){
        return
    }

    if(flag){
        return;
    }
    
    const s = document.querySelectorAll(
        ".poncho-map-province__toggle-map,"
        + ".poncho-map-province__toggle-element"
    );
    s.forEach(element => {
        element.classList.remove(
            "poncho-map-province__toggle-map",
            "poncho-map-province__toggle-element"
        ); 
    });
};


class PonchoMapProvinces extends PonchoMapFilter {
    constructor(geoProvinces, entries, options){

        const defaultOptions = {
            initial_entry: false,
            random_entry: false,
            overlay_image: true,
            overlay_image_bounds: [
                [-20.56830872133435, -44.91768177759874],
                [-55.861359445914566, -75.2246121480093]
            ],
            overlay_image_opacity: 0.8,
            overlay_image_url: "https://www.argentina.gob.ar/"
                + "sites/default/files/map-shadow.png",
            hide_select: false,
            toggle_select: true,
            province_index: "provincia",
            fit_bounds: true,
            // Sobreescribo opciones de PonchoMap
            map_view:[-40.47815508388363,-60.0045383246273],
            map_init_options: {
                zoomSnap: 0.2,
                zoomControl: true,
                doubleClickZoom: false,
                scrollWheelZoom: false,
                boxZoom: false
            },
            map_zoom: 4.4,
            tooltip_options: {
                permanent: false,
                className: "leaflet-tooltip-own",
                direction: "auto",
                offset: [0, -3],
                sticky: true,
                opacity: 1,
            },
            tooltip: true,
            slider: true
        };
        // Merge options
        let opts = Object.assign({}, defaultOptions, options);
        console.log(opts)
        ponchoMapProvinceCssStyles(opts.toggle_select);

        // PonchoMapFilter instance
        const mergedJSONs = ponchoMapProvinceMergeData(
            geoProvinces, entries, opts.province_index
        );

        super(mergedJSONs, opts);

        this.initialEntry = opts.initial_entry;
        this.randomEntry = opts.random_entry;
        this.overlayImage = opts.overlay_image;
        this.overlayImageUrl = opts.overlay_image_url;
        this.overlayImageBounds = opts.overlay_image_bounds;
        this.overlayImageOpacity = opts.overlay_image_opacity;
        this.mapView = opts.map_view;
        this.toggleSelect = opts.toggle_select;
        this.hideSelect = opts.hide_select;
        this.fitToBounds = opts.fit_bounds

    }


    /**
     * Ordena un array por uno de sus keys.
     * @param {object} obj Objeto a ordenar.
     * @param {integer} key Posición del array.
     * @param {object} obj Objeto ordenado.
     */
    sortObject = (obj, key=0) => obj.sort((a, b) => {
        const valA = a[key].toUpperCase();
        const valB = b[key].toUpperCase();
        if (valA > valB) {
            return 1;
        }
        if (valA < valB) {
            return -1;
        }
        return 0;
    });


    /**
     * Oculta el select
     * @param {*} status 
     * @returns 
     */
    hideSelectProvinces = status => {
        if(typeof status != "boolean"){
            return;
        }

        const selector = `[data-scope-related="${this.scope}"]`;
        const obj = document.querySelectorAll(selector);
        obj.forEach(element => {
            element.style.display = (this.hideSelect ? "none" : "");
        });
    }


    /**
     * Retorna un valor aleatório.
     * @param {object} list Listado de provincias
     * @returns {object}
     */
    _randomEntry = list => {
        return list[Math.floor(Math.random()*list.length)][0];
    };


    /**
     * Retorna un array con clave y valor de provincias argentinas
     * @param {object} geoJSON Objeto geoJSON con los features por provincia
     * @param {string} idKey Key del propertie que se usa como id.
     * @returns {object}
     */
    _provincesFromGeoJSON = (geoJSON, idKey) => {
        let prov = {};
        geoJSON.features.map(p => {
            const {
                name=false,
                "pm-interactive":pmInteractive=false} = p.properties;

            if(pmInteractive === "n" || !name){
                return false;
            }
            prov[p.properties[idKey]] = name;
        }).filter(f => f);

        let provincesToList = this.sortObject( Object.entries(prov), 1);
        return provincesToList;
    };


    /**
     * Imprime la región según las opciones de precedencia.
     * @param {string} prov Id de provincia
     * @returns {undefined}
     */
    _selectedEntry = prov => {
        const hash = window.location.hash.replace("#", "");
        let selected = "";
        if(hash){
            selected = hash;
        } else if(this.initialEntry){
            selected = this.initialEntry;
        } else if(this.randomEntry){
            selected = this._randomEntry(prov);
        }
        return selected;
    }


    /**
     * Crea los options para el select de provincias
     * @param {object} map 
     * @returns {object}
     */
    _setSelectProvinces = map => {
        const hash = window.location.hash.replace("#", "");
        const prov = this._provincesFromGeoJSON(map.geoJSON, map.id);
        const selected = this._selectedEntry(prov);

        // Creo los options
        const selectProvinces = document.getElementById("id_provincia");
        const optionsSelect = [["", "Elegí una provincia"], ...prov];
        optionsSelect.forEach(province => {
            const option = document.createElement("option");

            if(province[0] === selected){
                option.setAttribute("selected", "selected");
            }
            option.value = province[0];
            option.textContent = province[1];
            selectProvinces.appendChild(option);
        });
        return {object: selectProvinces, selected: selected};         
    };


    /**
     * Selected option cuando selecciono un polígono
     * @param {object} map Objeto return ponchoMap 
     */
    _selectedPolygon = map => {
        map.map.eachLayer(layer => {
            layer.on("keypress click", (e) => {
                if( e?.target?.feature?.properties ){
                    const {id} = e.target.feature.properties;
                    document.getElementById("id_provincia").value = id;
                }
            });
        })
    }


    /**
     * Crea el listener para la interacción del select con el mapa.
     * @param {object} map 
     */
    _selectProvinces = map => {
        this._selectedPolygon(map);

        // Arma el select con las provincias
        const selectProvinces = this._setSelectProvinces(map);

        if(selectProvinces.selected){
            map.gotoEntry(selectProvinces.selected)
        }

        // cambia los datos de la provincia 
        selectProvinces.object.addEventListener("change", e => {
            map.gotoEntry(e.target.value);
            e.value = selectProvinces.selected
        });
    };


    /**
     * Implementa una imagen sobre el mapa
     * @returns {undefined}
     */
    _overlayImage = () => {
        if(!this.overlayImage){
            return;
        }
console.log(this.overlayImageUrl)
        if(typeof this.overlayImageUrl !== "string"){
            console.error("Hubo un problema con la ruta o nombre de la imagen");
            return;
        }

        if(typeof this.overlayImageOpacity !== "number"){
            console.error("El valor de la opacidad debe ser un número.");
            return;
        }

        L.imageOverlay(
            this.overlayImageUrl, this.overlayImageBounds, 
            {opacity: this.overlayImageOpacity}
        ).addTo(this.map);
    }


    /**
     * imprime el mapa
     */ 
    renderProvinceMap = () =>{
        this.hideSelectProvinces(this.hideSelect);
        this._overlayImage();

        this.render(); // Imprime PonchoMapsFilter
        if(this.fitToBounds){
            this.fitBounds();
        }
        this._selectProvinces(this);
    };
}
// end class

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



if (typeof exports !== "undefined") {
    module.exports = GapiSheetData;
}

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
        "title", "placeholder", "alt", "value", "href", "src", "html.lang"
    ];

    /**
     * @param {object} dictionary Objeto con diccionario de terminos 
     * a traducir.
     * @param {object} attributes Objeto con diccionario de terminos 
     * a traducir.
     */
    constructor(dictionary = [], attributes = []) {
        this.dictionary = this.sortByLength(dictionary);
        this.attributes = (attributes.length ? attributes : this.ATTRIBUTES);
    }


    /**
     * Ordena los términos
     * 
     * @summary Ordena el diccionario de mayor a menor según el total de 
     * caracteres de cada término.
     * @param {object} obj Listado a ordenar
     * @returns {object} Listado ordenado
     */
    sortByLength = obj => {
        obj.sort((a, b) => {
            if (a[0].length > b[0].length) {
                return -1;
            } else if (a[0].length < b[0].length) {
                return 1;
            } else {
                return a[0] - b[0];
            }
        });
        return obj;
    };


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
        this.attributes.forEach((item) => {

            const attrDef = item.split(".").slice(-2);
            const tag = (attrDef.length === 2 ? attrDef[0] : "");
            const attr = (attrDef.length === 2 ? attrDef[1] : attrDef[0]);

            dict.forEach(translate => {
                
                console.log(`${tag}[${attr}='${translate[0]}']`, translate[1])
                
                document
                    .querySelectorAll(`${tag}[${attr}='${translate[0]}']`)
                    .forEach(t => (t[attr] = translate[1]));
            });
        });
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

