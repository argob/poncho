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
const ponchoColorDefinitionsList = [{"name": "www.argentina.gob.ar", "space": "arg", "hidden_space": false, "description": "", "data": [{"scope": "arg", "name": "Azul principal", "group": "primary", "color": {"900": "#232D4F", "800": "#2C3C5F", "700": "#354B6E", "600": "#3E5A7E", "500": "#5A7290", "400": "#7589A3", "300": "#91A1B5", "200": "#ACB8C8", "100": "#C8D0DA", "50": "#E3E7ED"}, "instance": [{"name": "Azul", "code": "arg-azul", "description": "Color principal", "scope": "arg", "related_color": "900", "parent_group": "primary", "color": "#232D4F", "variant": [{"variant": "half", "color": "#9296A7", "name": "Azul medio tono", "code": "arg-azul-half"}, {"variant": "lighter", "color": "#C8D0DA", "name": "Azul muy claro", "code": "arg-azul-lighter"}], "alias": [{"code": "arg-azul", "exclude": false}, {"code": "primary", "exclude": true}, {"code": "azul", "exclude": true}, {"code": "azul-marino", "exclude": true}, {"code": "primary-alt", "exclude": true}, {"code": "arg-primary", "exclude": true}]}, {"name": "Azul cobalto", "code": "arg-secundario", "description": "", "scope": "arg", "related_color": "600", "parent_group": "primary", "color": "#3E5A7E", "variant": [], "alias": [{"code": "arg-secundario", "exclude": false}, {"code": "secondary", "exclude": true}, {"code": "secundario", "exclude": true}]}, {"name": "Primary light", "code": "arg-primary-light", "description": "", "scope": "arg", "related_color": "50", "parent_group": "primary", "color": "#E3E7ED", "variant": [], "alias": [{"code": "arg-primary-light", "exclude": false}, {"code": "primary-light", "exclude": true}]}, {"name": "Azul acero", "code": "arg-info", "description": "", "scope": "arg", "related_color": "500", "parent_group": "primary", "color": "#5A7290", "variant": [{"variant": "lighter", "color": "#E3E7ED", "name": "Azul acero muy claro", "code": "arg-info-lighter"}], "alias": [{"code": "arg-info", "exclude": false}, {"code": "info", "exclude": true}]}]}, {"scope": "arg", "name": "Verde", "group": "verde", "color": {"50": "#F1F5D7", "100": "#DEE8A3", "200": "#CCDB6E", "300": "#B9CE39", "400": "#93B727", "500": "#6EA015", "600": "#4E8F24", "700": "#2E7D33", "800": "#27692A", "900": "#1F5421"}, "instance": [{"name": "Verde", "code": "arg-verde", "description": "", "scope": "arg", "related_color": "700", "parent_group": "verde", "color": "#2E7D33", "variant": [{"variant": "light", "color": "#6EA015", "name": "Verde claro", "code": "arg-verde-light"}, {"variant": "half", "color": "#96BE99", "name": "Verde medio tono", "code": "arg-verde-half"}, {"variant": "dark", "color": "#1F5421", "name": "Verde oscuro", "code": "arg-verde-dark"}], "alias": [{"code": "arg-verde", "exclude": false}, {"code": "success", "exclude": true}, {"code": "verde", "exclude": true}]}, {"name": "Verd\u00edn", "code": "arg-verdin", "description": "", "scope": "arg", "related_color": "500", "parent_group": "verde", "color": "#6EA015", "variant": [{"variant": "light", "color": "#B9CE39", "name": "Verd\u00edn claro", "code": "arg-verdin-light"}, {"variant": "dark", "color": "#2E7D33", "name": "Verd\u00edn oscuro", "code": "arg-verdin-dark"}], "alias": [{"code": "arg-verdin", "exclude": false}, {"code": "verdin", "exclude": true}]}, {"name": "Lima", "code": "arg-lima", "description": "", "scope": "arg", "related_color": "300", "parent_group": "verde", "color": "#B9CE39", "variant": [{"variant": "light", "color": "#DEE8A3", "name": "Lima claro", "code": "arg-lima-light"}, {"variant": "dark", "color": "#6EA015", "name": "Lima oscuro", "code": "arg-lima-dark"}], "alias": [{"code": "arg-lima", "exclude": false}, {"code": "limon", "exclude": true}, {"code": "lima", "exclude": true}]}]}, {"scope": "arg", "name": "Amarillo", "group": "amarillo", "color": {"50": "#FFFAE8", "100": "#FFF1C0", "200": "#FFE997", "300": "#FFE06E", "400": "#FFD745", "500": "#FFCE1C", "600": "#D8AE18", "700": "#B18F15", "800": "#8A6F12", "900": "#634F0E"}, "instance": [{"name": "Ma\u00edz", "code": "arg-maiz", "description": "", "scope": "arg", "related_color": "500", "parent_group": "amarillo", "color": "#FFCE1C", "variant": [{"variant": "light", "color": "#FFE997", "name": "Ma\u00edz claro", "code": "arg-maiz-light"}, {"variant": "dark", "color": "#B18F15", "name": "Ma\u00edz oscuro", "code": "arg-maiz-dark"}], "alias": [{"code": "arg-maiz", "exclude": false}, {"code": "maiz", "exclude": true}]}]}, {"scope": "arg", "name": "Fucsia", "group": "fucsia", "color": {"50": "#FCDDE6", "100": "#F8B6C9", "200": "#F48EAB", "300": "#F16798", "400": "#ED3F85", "500": "#EC407A", "600": "#D72C6B", "700": "#C2185B", "800": "#9A144A", "900": "#721038"}, "instance": [{"name": "Ar\u00e1ndano", "code": "arg-arandano", "description": "", "scope": "arg", "related_color": "700", "parent_group": "fucsia", "color": "#C2185B", "variant": [{"variant": "light", "color": "#EC407A", "name": "Ar\u00e1ndano claro", "code": "arg-arandano-light"}, {"variant": "dark", "color": "#721038", "name": "Ar\u00e1ndano oscuro", "code": "arg-arandano-dark"}, {"variant": "half", "color": "#E18CAD", "name": "Ar\u00e1ndano medio tono", "code": "arg-arandano-half"}, {"variant": "lighter", "color": "#FCDDE6", "name": "Ar\u00e1ndano muy claro", "code": "arg-arandano-lighter"}], "alias": [{"code": "arg-arandano", "exclude": false}, {"code": "arandano", "exclude": true}]}, {"name": "Fucsia", "code": "arg-fucsia", "description": "", "scope": "arg", "related_color": "500", "parent_group": "fucsia", "color": "#EC407A", "variant": [{"variant": "light", "color": "#F16798", "name": "Fucsia claro", "code": "arg-fucsia-light"}, {"variant": "dark", "color": "#9A144A", "name": "Fucsia oscuro", "code": "arg-fucsia-dark"}], "alias": [{"code": "arg-fucsia", "exclude": false}, {"code": "cereza", "exclude": true}, {"code": "fucsia", "exclude": true}]}, {"name": "Rosado", "code": "arg-rosado", "description": "", "scope": "arg", "related_color": "200", "parent_group": "fucsia", "color": "#F48EAB", "variant": [{"variant": "light", "color": "#FCDDE6", "name": "Rosado claro", "code": "arg-rosado-light"}, {"variant": "dark", "color": "#ED3F85", "name": "Rosado oscuro", "code": "arg-rosado-dark"}, {"variant": "half", "color": "#FAC7D5", "name": "Rosado medio tono", "code": "arg-rosado-half"}], "alias": [{"code": "arg-rosado", "exclude": false}]}]}, {"scope": "arg", "name": "Violeta", "group": "violeta", "color": {"50": "#E9E6F2", "100": "#D3CEE5", "200": "#BEB5D8", "300": "#A89DCB", "400": "#9284BE", "500": "#8561B2", "700": "#6A1B99", "800": "#4B0F7A", "900": "#2C035C", "600": "#773EA5"}, "instance": [{"name": "Lavanda", "code": "arg-lavanda", "description": "", "scope": "arg", "related_color": "400", "parent_group": "violeta", "color": "#9284BE", "variant": [], "alias": [{"code": "arg-lavanda", "exclude": false}, {"code": "lavanda", "exclude": true}]}, {"name": "Uva", "code": "arg-uva", "description": "", "scope": "arg", "related_color": "700", "parent_group": "violeta", "color": "#6A1B99", "variant": [], "alias": [{"code": "arg-uva", "exclude": false}, {"code": "uva", "exclude": true}]}]}, {"scope": "arg", "name": "Negro", "group": "negro", "color": {"50": "#F0F0F0", "100": "#E9E9E9", "200": "#DDDDDD", "300": "#838383", "150": "#DEE2E6", "75": "#F2F2F2", "500": "#555555", "600": "#444444", "900": "#141414", "25": "#FFFFFF"}, "instance": [{"name": "Negro", "code": "arg-negro", "description": "Elementos b\u00e1sicos", "scope": "arg", "related_color": "900", "parent_group": "negro", "color": "#141414", "variant": [{"variant": "lighter", "color": "#F0F0F0", "name": "Negro muy claro", "code": "arg-negro-lighter"}, {"variant": "light", "color": "#DDDDDD", "name": "Gris", "code": "arg-negro-light"}], "alias": [{"code": "arg-negro", "exclude": false}, {"code": "negro", "exclude": true}, {"code": "black", "exclude": true}, {"code": "gray-base", "exclude": true}]}, {"name": "Default", "code": "arg-default", "description": "", "scope": "arg", "related_color": "300", "parent_group": "negro", "color": "#838383", "variant": [], "alias": [{"code": "arg-default", "exclude": false}, {"code": "default", "exclude": true}]}, {"name": "Gray light", "code": "arg-gray-light", "description": "", "scope": "arg", "related_color": "200", "parent_group": "negro", "color": "#DDDDDD", "variant": [], "alias": [{"code": "arg-gray-light", "exclude": false}, {"code": "gray-light", "exclude": true}]}, {"name": "Gray hover", "code": "arg-gray-hover", "description": "", "scope": "arg", "related_color": "100", "parent_group": "negro", "color": "#E9E9E9", "variant": [], "alias": [{"code": "arg-gray-hover", "exclude": false}, {"code": "gray-hover", "exclude": true}]}, {"name": "Gray hover light", "code": "arg-gray-hover-light", "description": "", "scope": "arg", "related_color": "50", "parent_group": "negro", "color": "#F0F0F0", "variant": [], "alias": [{"code": "arg-gray-hover-light", "exclude": false}, {"code": "gray-hover-light", "exclude": true}]}, {"name": "Gris intermedio", "code": "arg-gris-intermedio", "description": "", "scope": "arg", "related_color": "500", "parent_group": "negro", "color": "#555555", "variant": [], "alias": [{"code": "arg-gris-intermedio", "exclude": false}, {"code": "gray", "exclude": true}, {"code": "grisintermedio", "exclude": true}, {"code": "gris-area", "exclude": true}, {"code": "gris", "exclude": false}]}, {"name": "Gray dark", "code": "arg-gray-dark", "description": "", "scope": "arg", "related_color": "600", "parent_group": "negro", "color": "#444444", "variant": [], "alias": [{"code": "arg-gray-dark", "exclude": false}, {"code": "gray-dark", "exclude": true}]}, {"name": "Gray border", "code": "arg-gray-border", "description": "", "scope": "arg", "related_color": "150", "parent_group": "negro", "color": "#DEE2E6", "variant": [], "alias": [{"code": "arg-gray-border", "exclude": false}, {"code": "gray-border", "exclude": true}]}, {"name": "Gris niebla", "code": "arg-gris-niebla", "description": "", "scope": "arg", "related_color": "75", "parent_group": "negro", "color": "#F2F2F2", "variant": [], "alias": [{"code": "arg-gris-niebla", "exclude": false}, {"code": "gray-lighter", "exclude": true}]}, {"name": "Gray background", "code": "arg-gray-background", "description": "", "scope": "arg", "related_color": "25", "parent_group": "negro", "color": "#FFFFFF", "variant": [], "alias": [{"code": "arg-gray-background", "exclude": false}, {"code": "gray-background", "exclude": true}]}]}, {"scope": "arg", "name": "Turquesa", "group": "turquesa", "color": {"50": "#DCF1F0", "100": "#C0E5E3", "200": "#A4D9D7", "300": "#88CECB", "400": "#6CC3BE", "500": "#50B7B2", "600": "#459E99", "700": "#3B8681", "800": "#306D69", "900": "#255450"}, "instance": [{"name": "Palta", "code": "arg-palta", "description": "", "scope": "arg", "related_color": "500", "parent_group": "turquesa", "color": "#50B7B2", "variant": [{"variant": "half", "color": "#A8DBD9", "name": "Palta medio tono", "code": "arg-palta-half"}, {"variant": "lighter", "color": "#C0E5E3", "name": "Palta muy claro", "code": "arg-palta-lighter"}], "alias": [{"code": "arg-palta", "exclude": false}, {"code": "palta", "exclude": true}]}, {"name": "Verde azulado", "code": "arg-verde-azulado", "description": "", "scope": "arg", "related_color": "700", "parent_group": "turquesa", "color": "#3B8681", "variant": [], "alias": [{"code": "arg-verde-azulado", "exclude": false}, {"code": "verde-azulado", "exclude": true}, {"code": "verdeazulado", "exclude": true}]}, {"name": "Eucalipto", "code": "arg-eucalipto", "description": "", "scope": "arg", "related_color": "800", "parent_group": "turquesa", "color": "#306D69", "variant": [{"variant": "lighter", "color": "#A4D9D7", "name": "Eucalipto muy claro", "code": "arg-eucalipto-lighter"}, {"variant": "dark", "color": "#255450", "name": "Eucalipto oscuro", "code": "arg-eucalipto-dark"}], "alias": [{"code": "arg-eucalipto", "exclude": false}]}]}, {"scope": "arg", "name": "Azul", "group": "azul", "color": {"50": "#CDEBFA", "100": "#9AD7F5", "200": "#68C3EF", "300": "#35AFEA", "400": "#039BE5", "500": "#0581C6", "600": "#0767A7", "700": "#084E87", "800": "#0A3468", "900": "#0C1A49"}, "instance": [{"name": "Cielo", "code": "arg-cielo", "description": "", "scope": "arg", "related_color": "400", "parent_group": "azul", "color": "#039BE5", "variant": [], "alias": [{"code": "arg-cielo", "exclude": false}, {"code": "cielo", "exclude": true}, {"code": "celeste", "exclude": true}]}, {"name": "Escarapela", "code": "arg-escarapela", "description": "", "scope": "arg", "related_color": "200", "parent_group": "azul", "color": "#68C3EF", "variant": [], "alias": [{"code": "arg-escarapela", "exclude": false}, {"code": "escarapela", "exclude": true}, {"code": "celesteargentina", "exclude": true}, {"code": "celeste-argentina", "exclude": false}]}, {"name": "Enlace", "code": "arg-enlace", "description": "Enlace", "scope": "arg", "related_color": "600", "parent_group": "azul", "color": "#0767A7", "variant": [{"variant": "dark", "color": "#084E87", "name": "Enlace oscuro", "code": "arg-enlace-dark"}, {"variant": "light", "color": "#0581C6", "name": "Enlace claro", "code": "arg-enlace-light"}], "alias": [{"code": "arg-enlace", "exclude": false}]}]}, {"scope": "arg", "name": "Rojo", "group": "rojo", "color": {"50": "#FCDDDC", "100": "#F9BBB9", "200": "#F69896", "300": "#F27673", "400": "#EF5350", "500": "#E14543", "600": "#D43635", "700": "#C62828", "800": "#A12222", "900": "#7C1C1C"}, "instance": [{"name": "Rojo", "code": "arg-rojo", "description": "Atenci\u00f3n o peligro", "scope": "arg", "related_color": "700", "parent_group": "rojo", "color": "#C62828", "variant": [{"variant": "light", "color": "#E14543", "name": "Rojo claro", "code": "arg-rojo-light"}, {"variant": "dark", "color": "#7C1C1C", "name": "Rojo oscuro", "code": "arg-rojo-dark"}, {"variant": "lighter", "color": "#FCDDDC", "name": "Rojo muy claro", "code": "arg-rojo-lighter"}], "alias": [{"code": "arg-rojo", "exclude": false}, {"code": "danger", "exclude": true}, {"code": "rojo", "exclude": true}]}, {"name": "Tomate", "code": "arg-tomate", "description": "", "scope": "arg", "related_color": "400", "parent_group": "rojo", "color": "#EF5350", "variant": [{"variant": "light", "color": "#F69896", "name": "Tomate claro", "code": "arg-tomate-light"}, {"variant": "dark", "color": "#C62828", "name": "Tomate oscuro", "code": "arg-tomate-dark"}], "alias": [{"code": "arg-tomate", "exclude": false}, {"code": "complementary", "exclude": true}, {"code": "tomate", "exclude": true}]}]}, {"scope": "arg", "name": "Naranja", "group": "naranja", "color": {"50": "#FDE7BF", "100": "#FBCE80", "200": "#F9B640", "300": "#F79D00", "400": "#F38500", "500": "#EF6C00", "600": "#CE5701", "700": "#AE4203", "800": "#8D2D04", "900": "#6C1805"}, "instance": [{"name": "Marr\u00f3n claro", "code": "arg-marron-claro", "description": "", "scope": "arg", "related_color": "800", "parent_group": "naranja", "color": "#8D2D04", "variant": [{"variant": "light", "color": "#CE5701", "name": "Marr\u00f3n claro claro", "code": "arg-marron-claro-light"}, {"variant": "dark", "color": "#6C1805", "name": "Marr\u00f3n claro oscuro", "code": "arg-marron-claro-dark"}], "alias": [{"code": "arg-marron-claro", "exclude": false}, {"code": "marron-claro", "exclude": true}]}, {"name": "Naranja", "code": "arg-naranja", "description": "", "scope": "arg", "related_color": "500", "parent_group": "naranja", "color": "#EF6C00", "variant": [{"variant": "light", "color": "#EF6C00", "name": "Naranja claro", "code": "arg-naranja-light"}, {"variant": "dark", "color": "#6C1805", "name": "Naranja oscuro", "code": "arg-naranja-dark"}], "alias": [{"code": "arg-naranja", "exclude": false}, {"code": "naranjaoscuro", "exclude": true}, {"code": "naranja", "exclude": true}]}, {"name": "Mandarina", "code": "arg-mandarina", "description": "", "scope": "arg", "related_color": "300", "parent_group": "naranja", "color": "#F79D00", "variant": [{"variant": "light", "color": "#FBCE80", "name": "Mandarina claro", "code": "arg-mandarina-light"}, {"variant": "dark", "color": "#CE5701", "name": "Mandarina oscuro", "code": "arg-mandarina-dark"}], "alias": [{"code": "arg-mandarina", "exclude": false}, {"code": "mandarina", "exclude": true}]}]}, {"scope": "arg", "name": "Blanco", "group": "blanco", "color": {"150": "#FFFFFF"}, "instance": [{"name": "Blanco", "code": "arg-blanco", "description": "", "scope": "arg", "related_color": "150", "parent_group": "blanco", "color": "#FFFFFF", "variant": [], "alias": [{"code": "arg-blanco", "exclude": false}, {"code": "white", "exclude": true}, {"code": "arg-white", "exclude": false}]}]}, {"scope": "arg", "name": "Ocre", "group": "ocre", "color": {"50": "#FAF8ED", "100": "#F4F0DB", "200": "#EAE1B7", "300": "#E9CE8C", "400": "#E7BA61", "500": "#C98941", "600": "#AA5821", "700": "#8C2701", "800": "#6F2001", "900": "#511901"}, "instance": [{"name": "Arena", "code": "arg-arena", "description": "", "scope": "arg", "related_color": "200", "parent_group": "ocre", "color": "#EAE1B7", "variant": [{"variant": "light", "color": "#FAF8ED", "name": "Arena claro", "code": "arg-arena-light"}, {"variant": "dark", "color": "#E7BA61", "name": "Arena oscuro", "code": "arg-arena-dark"}, {"variant": "half", "color": "#F5F0DB", "name": "Arena medio tono", "code": "arg-arena-half"}], "alias": [{"code": "arg-arena", "exclude": false}]}, {"name": "Amarillo", "code": "arg-amarillo", "description": "Foco o alerta", "scope": "arg", "related_color": "400", "parent_group": "ocre", "color": "#E7BA61", "variant": [{"variant": "light", "color": "#EAE1B7", "name": "Amarillo claro", "code": "arg-amarillo-light"}, {"variant": "dark", "color": "#AA5821", "name": "Amarillo oscuro", "code": "arg-amarillo-dark"}, {"variant": "half", "color": "#F3DDB0", "name": "Amarillo medio tono", "code": "arg-amarillo-half"}], "alias": [{"code": "arg-amarillo", "exclude": false}, {"code": "warning", "exclude": true}, {"code": "amarillo", "exclude": true}, {"code": "amarillo-intenso", "exclude": true}]}, {"name": "Marr\u00f3n oscuro", "code": "arg-marron-oscuro", "description": "", "scope": "arg", "related_color": "900", "parent_group": "ocre", "color": "#511901", "variant": [], "alias": [{"code": "arg-marron-oscuro", "exclude": false}]}]}, {"scope": "arg", "name": "Morado", "group": "morado", "color": {"150": "#3A3796"}, "instance": [{"name": "Azul morado", "code": "arg-azul-morado", "description": "", "scope": "arg", "related_color": "150", "parent_group": "morado", "color": "#3A3796", "variant": [], "alias": [{"code": "arg-azul-morado", "exclude": false}]}]}]}, {"name": "MiArgentina", "space": "miarg", "hidden_space": false, "description": "", "data": [{"scope": "miarg", "name": "Azul MiArgentina", "group": "azul", "color": {"150": "#3526C3"}, "instance": [{"name": "Azul MiArgentina", "code": "miarg-azul", "description": "Azul principal para aplicaciones MiArgentina", "scope": "miarg", "related_color": "150", "parent_group": "azul", "color": "#3526C3", "variant": [{"variant": "half", "color": "#6B66CC", "name": "Azul MiArgentina medio tono", "code": "miarg-azul-half"}], "alias": [{"code": "miarg-azul", "exclude": false}]}]}, {"scope": "miarg", "name": "Celeste MiArgentina", "group": "celeste", "color": {"150": "#2CB9EE"}, "instance": [{"name": "Celeste MiArgentina", "code": "miarg-celeste", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "celeste", "color": "#2CB9EE", "variant": [], "alias": [{"code": "miarg-celeste", "exclude": false}]}]}, {"scope": "miarg", "name": "Amarillo claro MiArgentina", "group": "amarillo-claro", "color": {"150": "#ffe9b8"}, "instance": [{"name": "Amarillo claro MiArgentina", "code": "miarg-amarillo-claro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "amarillo-claro", "color": "#ffe9b8", "variant": [], "alias": [{"code": "miarg-amarillo-claro", "exclude": false}]}]}, {"scope": "miarg", "name": "Rosa claro MiArgentina", "group": "rosa-claro", "color": {"150": "#EECCCF"}, "instance": [{"name": "Rosa claro MiArgentina", "code": "miarg-rosa-claro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "rosa-claro", "color": "#EECCCF", "variant": [], "alias": [{"code": "miarg-rosa-claro", "exclude": false}]}]}, {"scope": "miarg", "name": "Verde claro MiArgentina", "group": "verde-claro", "color": {"150": "#CFEEDC"}, "instance": [{"name": "Verde claro MiArgentina", "code": "miarg-verde-claro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "verde-claro", "color": "#CFEEDC", "variant": [], "alias": [{"code": "miarg-verde-claro", "exclude": false}]}]}, {"scope": "miarg", "name": "Azul oscuro MiArgentina", "group": "azul-oscuro", "color": {"150": "#222C50"}, "instance": [{"name": "Azul oscuro MiArgentina", "code": "miarg-oscuro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "azul-oscuro", "color": "#222C50", "variant": [], "alias": [{"code": "miarg-oscuro", "exclude": false}]}]}, {"scope": "miarg", "name": "Gris MiArgentina", "group": "gris", "color": {"150": "#7E848E"}, "instance": [{"name": "Gris MiArgentina", "code": "miarg-gris", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "gris", "color": "#7E848E", "variant": [], "alias": [{"code": "miarg-gris", "exclude": false}]}]}, {"scope": "miarg", "name": "Celeste claro MiArgentina", "group": "celeste-claro", "color": {"150": "#BEE6F6"}, "instance": [{"name": "Celeste claro MiArgentina", "code": "miarg-celeste-claro", "description": "", "scope": "miarg", "related_color": "150", "parent_group": "celeste-claro", "color": "#BEE6F6", "variant": [], "alias": [{"code": "miarg-celeste-claro", "exclude": false}]}]}]}, {"name": "Colores de la bandera de la Rep\u00fablica Argentina", "space": "bandera", "hidden_space": false, "description": "De acuerdo al <a href=\"https://www.argentina.gob.ar/normativa/nacional/decreto-1650-2010-175328\">Decreto  1650/2010</a>, que establece las medidas, caracter\u00edsticas de la tela, colores y accesorios de la Bandera Argentina.", "data": [{"scope": "bandera", "name": "Amarillo", "group": "amarillo", "color": {"150": "#FCBF49"}, "instance": [{"name": "Amarillo Bandera", "code": "bandera-amarillo", "description": "Color amarillo oficial para la bandera Argentina", "scope": "bandera", "related_color": "150", "parent_group": "amarillo", "color": "#FCBF49", "variant": [], "alias": [{"code": "bandera-amarillo", "exclude": false}]}]}, {"scope": "bandera", "name": "Celeste", "group": "celeste", "color": {"150": "#75AADB"}, "instance": [{"name": "Celeste Bandera", "code": "bandera-celeste", "description": "Color celeste oficial para la bandera Argentina", "scope": "bandera", "related_color": "150", "parent_group": "celeste", "color": "#75AADB", "variant": [], "alias": [{"code": "bandera-celeste", "exclude": false}]}]}, {"scope": "bandera", "name": "Marr\u00f3n", "group": "marron", "color": {"150": "#843511"}, "instance": [{"name": "Marr\u00f3n Bandera", "code": "bandera-marron", "description": "Color marr\u00f3n oficial para la bandera Argentina", "scope": "bandera", "related_color": "150", "parent_group": "marron", "color": "#843511", "variant": [], "alias": [{"code": "bandera-marron", "exclude": false}]}]}]}, {"name": "Gendarmer\u00eda Nacional", "space": "gna", "hidden_space": false, "description": "", "data": [{"scope": "gna", "name": "Verde jade", "group": "verde-jade", "color": {"150": "#006666"}, "instance": [{"name": "Verde oscuro Gendarmer\u00eda", "code": "gna-verde-jade", "description": "", "scope": "gna", "related_color": "150", "parent_group": "verde-jade", "color": "#006666", "variant": [], "alias": [{"code": "gna-verde-jade", "exclude": false}, {"code": "verde-jade", "exclude": true}, {"code": "verdejade", "exclude": true}]}]}, {"scope": "gna", "name": "Verde aloe", "group": "verde-aloe", "color": {"150": "#4FBB73"}, "instance": [{"name": "Verde claro Gendarmer\u00eda", "code": "gna-verde-aloe", "description": "", "scope": "gna", "related_color": "150", "parent_group": "verde-aloe", "color": "#4FBB73", "variant": [], "alias": [{"code": "gna-verde-aloe", "exclude": false}, {"code": "verde-aloe", "exclude": true}]}]}, {"scope": "gna", "name": "Verde cemento", "group": "verde-cemento", "color": {"150": "#B4BEBA"}, "instance": [{"name": "Gris Gendarmer\u00eda", "code": "gna-verde-cemento", "description": "", "scope": "gna", "related_color": "150", "parent_group": "verde-cemento", "color": "#B4BEBA", "variant": [], "alias": [{"code": "gna-verde-cemento", "exclude": false}, {"code": "verde-cemento", "exclude": true}, {"code": "verdecemento", "exclude": true}]}]}]}];

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
    ponchoColor = (color, mode = "hex") => {
        const defaultColor = "#999999";

        if (typeof color !== "string" || color.trim() === "") {
            console.warn(`El valor pasado es inválido.`);
            return defaultColor;
        }

        const normalizedColor = this.replaceSpecialChars(color).toLowerCase();
        const colorDefinition = this.variables?.find(v => v[0] === normalizedColor) ||
                                this.colors?.find(c => c[0] === normalizedColor);


        const hexColor = !colorDefinition ? defaultColor : colorDefinition[1];
        const lowerCaseMode = mode.trim().toLowerCase();

        switch (lowerCaseMode) {
            case "rgb":
                return this.hexToRgb(hexColor);
            case "hsl":
                return this.rgbToHsl(...this.hexToRgb(hexColor));
            default:
                return hexColor;
        }
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
                    
                    if ( alias.some(s => s.code == lowerCasePonchoColor) ) {
                        result = instance[x];
                        break;
                    }
                    else if( variant.some(s => s.code == lowerCasePonchoColor) ){
                        result = instance[x];
                        break;
                    }
                }
                if (result) {
                    break;
                }
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
     * Convierte un color RGB a HSL.
     * 
     * @param {number} r Color rojo (Red).
     * @param {number} g Color verde (Green).
     * @param {number} b Color blue (Blue).
     * @returns {object} Array con el siguiente formato: [11, '1.1%', '1.1%']
     */
    rgbToHsl = (r, g, b) => {
        // 1. Normalizar los valores RGB a un rango de 0 a 1
        const rNorm = r / 255;
        const gNorm = g / 255;
        const bNorm = b / 255;
      
        // 2. Encontrar el valor máximo (Cmax) y el valor mínimo (Cmin)
        const cmax = Math.max(rNorm, gNorm, bNorm);
        const cmin = Math.min(rNorm, gNorm, bNorm);
        const delta = cmax - cmin;
      
        // 3. Calcular la luminancia (L)
        const l = ((cmax + cmin) / 2) * 100;
      
        // 4. Calcular la saturación (S)
        let s = 0;
        if (delta !== 0) {
            s = (delta / (1 - Math.abs(2 * l / 100 - 1))) * 100;
        }
      
        // 5. Calcular el tono (H)
        let h = 0;
        if (delta !== 0) {
            switch (cmax) {
                case rNorm:
                    h = 60 * (((gNorm - bNorm) / delta) % 6);
                break;
                case gNorm:
                    h = 60 * ((bNorm - rNorm) / delta + 2);
                break;
                case bNorm:
                    h = 60 * ((rNorm - gNorm) / delta + 4);
                break;
            }
        }
      
        // Asegurarse de que el tono esté en el rango de 0 a 360
        if (h < 0) {
            h += 360;
        }
      
        return [Math.round(h),`${s.toFixed(1)}%`, `${l.toFixed(1)}%`];
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
    const element = (typeof selector === 'string' ? 
            document.querySelector(selector) : selector);

    if (!element || !(element instanceof HTMLElement)) {
        return; 
    }

    const copyText = element;
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

    var resetValues = (opt.hasOwnProperty("resetValues") && typeof opt.resetValues == "boolean" ? 
            opt.resetValues : true);

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
    const button = (label, value, ariaLabel=false) => {

        let refactorAriaLabel = (ariaLabel ? `: ${ariaLabel}` : "");
        refactorAriaLabel = refactorAriaLabel.replaceAll("*", "");

        const btn = document.createElement("a");
        btn.classList.add(
            "btn", "btn-primary", "btn-sm", "margin-btn");
        btn.href = value;
        btn.target = "_blank";
        btn.innerHTML = `${label}<span class="sr-only">${refactorAriaLabel} (Abre en una nueva ventana)</span>`;
        // btn.setAttribute("aria-label", `${refactorAriaLabel} (Abre en una nueva ventana)`);
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

                    let ariaLabel = false;
                    let repl = "";
                    const getAriaLabel = header.split("-").slice(-1);
                    if(gapi_data.headers.hasOwnProperty(getAriaLabel)){
                        ariaLabel = entry[ getAriaLabel ];
                        repl = `-${getAriaLabel}`;
                    }
                    const label = header.replace("btn-", "").replace(repl, "").replaceAll("-", " ");
                    // const refactorLabel = (ariaLabel ? 
                    //         label.replace(repl,"") : label);
                    filas = button(label, filas, ariaLabel);

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
    /*
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
    */

    /**
     * Trae todos los elementos de un filtro en base a su parent.
     *
     * @param {integer} parent Indice de filtro seleccionado.
     * @param {integer} children Indice del hijo del seleccionado.
     * @param {string} label value del filtro seleccionado.
     * @return {object} Listado de elementos únicos para el select.
     */
    const _allFromParent = (parent, children, label) => {
        const parentIndex = _parentElement(parent);
        const childIndex = _parentElement(children);
        const isCustom = _isCustomFilter(children, filtro);
        const isEmptyLabel = label === "";
        
        // Pre-calcular filtros custom si es necesario
        let customFiltersLower;
        if (isCustom) {
            customFiltersLower = _customFilter(children, filtro)
                .map(e => _toCompareString(e));
        }
        
        // Usar Set para eliminar duplicados eficientemente
        const uniqueItems = new Set();
        
        // Un solo bucle sin flatMap
        for (const entry of gapi_data.entries) {
            // Verificación temprana del parent
            if (!isEmptyLabel && entry[filtersList[parentIndex]] !== label) {
                continue;
            }
            
            const evaluatedEntry = entry[filtersList[childIndex]];
            if (!evaluatedEntry) continue;
            
            if (isCustom) {
                const entryLower = _toCompareString(evaluatedEntry);
                // Buscar coincidencias en filtros custom
                for (const customFilter of customFiltersLower) {
                    if (entryLower.includes(customFilter)) {
                        uniqueItems.add(evaluatedEntry);
                        break; // Evitar agregar múltiples veces
                    }
                }
            } else {
                uniqueItems.add(evaluatedEntry);
            }
        }
        
        // Convertir Set a Array y ordenar
        return _sortAlphaNumeric(Array.from(uniqueItems), filtersList[children]);
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
        const adjustedChildren = (children === filtersList.length ? 
                children - 1 : children);
        const values = _filterValues();
        const parentIndex = _parentElement(adjustedChildren - 1);
        const childIndex = _parentElement(adjustedChildren);
        const isCustom = _isCustomFilter(adjustedChildren, filtro);
        
        // Pre-calcular filtros custom si es necesario
        let customFiltersLower;
        if (isCustom) {
            customFiltersLower = _customFilter(adjustedChildren, filtro)
                .map(e => _toCompareString(e));
        }

        const uniqueItems = new Set();

        for (const entry of gapi_data.entries) {
            // Verificaciones tempranas para evitar procesamiento innecesario
            if (entry[filtersList[parentIndex]] !== label) continue;
            if (!_validateSteps(parent, entry, label, values)) continue;
            
            const evaluatedEntry = entry[filtersList[childIndex]];
            if (!evaluatedEntry) continue;
            
            if (isCustom) {
                const entryLower = _toCompareString(evaluatedEntry);

                // Buscar coincidencias en filtros custom
                for (const customFilter of customFiltersLower) {
                    if (entryLower.includes(customFilter)) {
                        uniqueItems.add(evaluatedEntry);
                        break; // Evitar agregar múltiples veces
                    }
                }

            } else {
                uniqueItems.add(evaluatedEntry);
            }
        }
        
        // Convertir Set a Array y ordenar
        return _sortAlphaNumeric(
            Array.from(uniqueItems), filtersList[adjustedChildren]
        );
    };


    /**
     * Lista los valores que deben ir en un filtro según su parent.
     *
     * @param {integer} parent Indice de filtro seleccionado.
     * @param {string} label value del filtro seleccionado.
     * @param {integer} children Indice del hijo del seleccionado.
     */
    /*
    const ___filterOptionList = (parent, children, label) => {
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
    };*/


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
     * 
     */
    function _resetForm(){
        const filters = filtersList.map(m => m.replace("filtro-", ""));

        document
            .querySelectorAll(`#ponchoTableSearch`)
            .forEach(function(e){
                e.value = '';
            _eventDispatcher("ponchoTableSearch", "", "keyup");
        });

        for(let filter of filters){
            document
                .querySelectorAll(`#${filter}`)
                .forEach(function(e){
                    e.selectedIndex = 0;
            });
            _eventDispatcher(filter, "", "change");
        }
    }


    /**
     * Permite restablecer los filtros de búsqueda y el input search.
     * @returns {undefined}
     */
    /*
    function _resetFormButton(){
 
        if( !resetValues ){
            return;
        }

        try {
            document
                .querySelectorAll("#poncho-table-reset-form")
                .forEach(e => e.remove());
        } catch (error) {
            console.error(error);
        }
        
        const resetBtn = document.createElement("a");
        resetBtn.setAttribute(
            "aria-label", "Restablecer resultados de la tabla");
        resetBtn.id = "poncho-table-reset-form";
        resetBtn.href = "#";
        resetBtn.textContent = "Restablecer";
        resetBtn.classList.add("js-pt-reset-form");
        
        const info = document.querySelector("#ponchoTable_info");
        if(info){
            const infoContainer = info.parentElement;
            infoContainer.classList.add("share");
            infoContainer.appendChild(resetBtn);
        }

        const element = document.querySelectorAll(".js-pt-reset-form");
        element.forEach(function(event){
            event.addEventListener("click", e => {
                e.preventDefault();
                _resetForm();
            });
        });
    }
    */

    function _resetFormButton() {
        // Verificación temprana
        if (!resetValues) {
            return;
        }

        // Remover botones existentes
        try {
            document
                .querySelectorAll("#poncho-table-reset-form")
                .forEach(e => e.remove());
        } catch (error) {
            console.error(error);
        }

        // Buscar contenedor de info
        const info = document.querySelector("#ponchoTable_info");
        if (!info) {
            return;
        }

        // Crear y configurar botón de reset
        const resetBtn = document.createElement("a");
        resetBtn.id = "poncho-table-reset-form";
        resetBtn.href = "#";
        resetBtn.textContent = "Restablecer";
        resetBtn.setAttribute("aria-label", "Restablecer resultados de la tabla");
        resetBtn.classList.add("js-pt-reset-form");

        // Agregar evento al botón
        resetBtn.addEventListener("click", e => {
            e.preventDefault();
            _resetForm();
        });

        // Agregar botón al contenedor
        const infoContainer = info.parentElement;
        infoContainer.classList.add("share");
        infoContainer.appendChild(resetBtn);
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

        // 1. Crear el contenedor principal: <div class="dropdown">
        const dropdownDiv = document.createElement('div');
        dropdownDiv.classList.add('dropdown');
        dropdownDiv.id = "ponchoTableShareButton";

        // 2. Crear el botón: <button ...>
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-sm', 'btn-default', 'dropdown-toggle');
        button.setAttribute('type', 'button');
        button.setAttribute('id', 'share-table-data');
        button.setAttribute('data-toggle', 'dropdown');
        button.setAttribute('aria-haspopup', 'true');
        button.setAttribute('aria-expanded', 'false');

        // Texto del botón
        button.textContent = 'Compartir resultados';

        // Span caret
        const caretSpan = document.createElement('span');
        caretSpan.classList.add('caret');
        button.appendChild(document.createTextNode(' '));
        button.appendChild(caretSpan);

        // 3. Crear el menú desplegable: <div class="dropdown-menu ...">
        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu', 'p-y-1', 'p-x-1');
        dropdownMenu.setAttribute('aria-labelledby', 'share-table-data');

        // 4. Crear el párrafo para el enlace: <p class="js-sharelink-tag ...">
        const shareLinkP = document.createElement('p');
        shareLinkP.classList.add('js-sharelink-tag', 'm-b-0', 'small');
        shareLinkP.setAttribute('id', 'foo');

        // 5. Crear el enlace para copiar: <a href="#" ...>
        const copyLink = document.createElement('a');
        copyLink.setAttribute('href', '#');
        copyLink.setAttribute('data-toclipboard', 'foo');
        copyLink.classList.add(
            'small', 'btn', 'btn-sm', 'btn-default', 'm-b-0', 'm-t-1');
        copyLink.textContent = 'Copiar al portapapeles';

        // 6. Ensamblar la estructura
        dropdownMenu.appendChild(shareLinkP);
        dropdownMenu.appendChild(copyLink);

        dropdownDiv.appendChild(button);
        dropdownDiv.appendChild(dropdownMenu);

        const info = document.querySelector("#ponchoTable_info");
        const infoContainer = info.parentElement;
        infoContainer.classList.add("ponchotable-share");
        infoContainer.appendChild(dropdownDiv);

        // _styleOnHead();
        _copyToClipboard();
    }


    // function _styleOnHead(){
    //     headStyle(
    //         "ponchoTable-share", 
    //         `.share{display:flex;gap:1.5em;align-items:baseline}`
    //         +`.share .dropdown-menu{min-width:250px}`);
    // }


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
        _resetFormButton();
        // _styleOnHead();

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
        return data.municipios.map(municipio => {
            return {
                ...municipio,
                label: municipio.nombre_completo
            };
        });
    }
    
    /**
     * 
     * @param {*} data 
     * @returns 
     */
    function parseJsonLocalidades(data) {
        const seenByProvincia = new Map();
        return data.localidades.filter(localidad => {
            const provinciaId = localidad.provincia.id;
            const label = `${localidad.departamento.nombre} - ${localidad.nombre}`;
            if (!seenByProvincia.has(provinciaId)) {
                seenByProvincia.set(provinciaId, new Set());
            }
            const seenLabels = seenByProvincia.get(provinciaId);
            if (seenLabels.has(label)) {
                return false;
            }
            seenLabels.add(label);
            return true;
        }).map(localidad => {
            return {
                ...localidad,
                label: `${localidad.departamento.nombre} - ${localidad.nombre}`
            };
        });
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
 * @see https://github.com/argob/poncho/tree/master/src/js/poncho-map
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
const PM_TRANSLATE = {
es: {
        cluster_click: "Clic para expandir grupo",
        cluster_large: "Grupo grande de {{count}} ubicaciones",
        cluster_medium: "Grupo mediano de {{count}} ubicaciones",
        cluster_small: "Grupo chico de {{count}} ubicaciones",
        filter_initial: "Hay {{total_results}} puntos en el mapa."
                        + ` <a href="#" class="{{reset_search}}"`
                        + `aria-label="Restablecer valores del mapa">`
                        + "Restablecer mapa</a>",
        filter_no_results: "No se encontraron entradas.",
        filter_no_results_by_term: "No encontramos resultados para tu búsqueda.",
        filter_one_result: "{{total_results}} resultado coincide con tu búsqueda.",
        filter_reset_values_link: ` <a href="#" class="{{reset_search}}"`
                        + `aria-label="Restablecer valores del mapa">`
                        + "Restablecer mapa</a>",
        filter_results: "{{total_results}} resultados coinciden con tu búsqueda.",
        filters_aria_label_close_panel: "Cerrar panel de filtros",
        filters_aria_label_open_close_panel: "Abre o cierra el panel de filtros",
        filters_aria_label_panel: "Panel de filtros",
        filters_aria_label_reset: "Restablecer valores del mapa",
        filters_check_all: "Marcar todos",
        filters_close_panel_text: "Cerrar panel",
        filters_has: "Se están usando filtros.",
        filters_reset: "Restablecer mapa",
        filters_uncheck_all: "Desmarcar todos",
        map_exit: "Salir del mapa",
        map_fit_bounds: "Ajustar marcadores al mapa",
        map_full_view: "Ver mapa completo",
        map_goto_markers: "Ir a los marcadores del mapa",
        map_help_us: "Ayudá a mejorar el mapa",
        openmap_aria_label: "Abrir el punto geográfico en un mapa alternativo",
        openmap_label: "Abrir en:",
        search_data: "Hacer una búsqueda",
        search_placeholder: "Su búsqueda",
        theme_aria_label_panel: "Herramienta para cambiar de tema visual",
        theme_change: "Cambiar tema del mapa",
        theme_description_contrast: "Fondo oscuro con bordes blancos.",
        theme_description_dark: "Fondo oscuro con bordes blancos de contraste medio.",
        theme_description_default: "Colores predeterminados del proveedor del mapa.",
        theme_description_grayscale: "Mapa e interfaz en tonos de gris.",
        theme_description_relax: "Paleta de colores suaves.",
        theme_name_contrast: "Alto contraste",
        theme_name_dark: "Oscuro",
        theme_name_default: "Original",
        theme_name_grayscale: "Gris",
        theme_name_relax: "Relax",
        theme_open_panel: "Abre el panel de temas",
        theme_reset: "Restablece el tema del mapa a su configuración original",
        zoom_aria_label_panel: "Herramientas de zoom",
        zoom_goto_panel: "Ir a la herramienta de zoom",
        zoom_in: "Acercar",
        zoom_out: "Alejar"
    }
};

class PonchoMap {
    constructor(data, options){
        const defaults = {
            accesible_menu_extras: [
                {
                    label: "map_help_us",
                    link: "https://www.argentina.gob.ar/sugerencias",
                    target: "_blank"
                }
            ],
            allowed_tags: [],
            anchor_delay: 0,
            map_breakpoint: {
                large: {
                    lg: {fraction: "3:10", value: 992},
                    md: {fraction: "2:7", value: 768},
                    sm: {fraction: "1:4", value: 576},
                    xl: {fraction: "2:7", value: 1200},
                    xs: {fraction: "1:1", value: 0},
                    xxl: {fraction: "2:7", value: 1400}
                },
                default: {
                    lg: {fraction: "4:10", value: 992},
                    md: {fraction: "2:6", value: 768},
                    sm: {fraction: "1:4", value: 576},
                    xl: {fraction: "2:7", value: 1200},
                    xs: {fraction: "1:1", value: 0},
                    xxl: {fraction: "2:7", value: 1400}
                }
            },
            media_breakpoint: {
                lg: 992,
                md: 768,
                sm: 576,
                xl: 1200,
                xs: 0,
                xxl: 1400
            },
            content_selector: false,
            default_themes: [
                {
                    aria_label: false,
                    code: "default",
                    description: "theme_description_default",
                    name: "theme_name_default",
                },
                {
                    aria_label: false,
                    code: "contrast",
                    description: "theme_description_contrast",
                    name: "theme_name_contrast",
                },
                {
                    aria_label: false,
                    code: "dark",
                    description: "theme_description_dark",
                    name: "theme_name_dark",
                },
                {
                    aria_label: false,
                    code: "grayscale",
                    description: "theme_description_grayscale",
                    name: "theme_name_grayscale",
                },
                {
                    aria_label: false,
                    code: "relax",
                    description: "theme_description_relax",
                    name: "theme_name_relax",
                }
            ],
            error_reporting: false,
            fit_bounds_onevent: true,
            hash: false,
            header_icons: [],
            headers: {},
            id: "id",
            id_mixing: [],
            lang: "es",
            latitud: "latitud",
            longitud: "longitud",
            map_align: "center",
            map_anchor_zoom: 16,
            map_background: "#DDD",
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
            map_layers: true,
            map_layers_default: "osm",
            map_opacity: 1,
            map_selector: "map",
            map_style: {},
            map_view: [-40.44, -63.59],
            map_zoom: 4,
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
            marker: "azul",
                marker_cluster_options: {
                maxClusterRadius: 30,
                showCoverageOnHover: false,
                spiderLegPolylineOptions: {
                    color: "#666666",
                    "fill-opacity": 0.5,
                    opacity: 0.5,
                    weight: 1
                },
                spiderfyDistanceMultiplier: 0.5,
                spiderfyOnMaxZoom: true,
                zoomToBoundsOnClick: true
            },
            min_zoom: 2,
            no_info: false,
            open_maps: false,
            open_maps_options: {
                aria_label: "openmap_aria_label",
                items:[
                    {
                        aria_label: false,
                        hreflang: "en",
                        label: "Apple maps",
                        lang: "en",
                        link: "https://maps.apple.com/?q={{latitude}},{{longitude}}",
                        platform: "mac",
                        rel: [
                            "alternate"
                        ]
                    },
                    {
                        aria_label: false,
                        hreflang: false,
                        label: "Google maps",
                        lang: "en",
                        link: "https://www.google.com/maps/search/?api=1&query={{latitude}},{{longitude}}",
                        rel: [
                            "alternate"
                        ]
                    },
                    {
                        aria_label: false,
                        hreflang: "es",
                        label: `<abbr lang="es" title="Instituto Geográfico Nacional">IGN</abbr> – ArgenMap`,
                        lang: "es",
                        link: "https://mapa.ign.gob.ar/beta/?zoom=17&lat={{latitude}}&lng={{longitude}}&layers=argenmap&marker={{latitude}},{{longitude}}",
                        rel: [
                            "alternate"
                        ]
                    },
                    {
                        aria_label: false,
                        hreflang: "en",
                        label: "Open street maps",
                        lang: "en",
                        link: "https://www.openstreetmap.org/?mlat={{latitude}}&mlon={{longitude}}#map=16/{{latitude}}/{{longitude}}",
                        rel: [
                            "alternate"
                        ]
                    }
                ],
                label: "openmap_label"
            },
            render_slider: true,
            reset_zoom: true,
            scope: "",
            scroll: false,
            slider: false,
            slider_selector: ".pm-slider",
            slider_size: false, // large | default
            summary: false,
            template: false,
            template_innerhtml: false,
            template_markdown: false,
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
            theme: "default",
            theme_map: false,
            theme_tool: true,
            theme_ui: false,
            throw_exceptions: false,
            title: false,
            tooltip: false,
            tooltip_options:{
                className: "leaflet-tooltip-own",
                direction: "auto",
                offset: [13,-18],
                opacity: 1,
                permanent: false,
                sticky: false
            }
        };

        // Assign options
        let opts = Object.assign({}, defaults, options);

        // Set variables
        this.lang = opts.lang;
        this.dictionary = PM_TRANSLATE[this.lang];
        this.error_reporting = opts.error_reporting;
        this.throw_exceptions = opts.throw_exceptions;
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
        this.slider_size = opts.slider_size;
        this.no_info = opts.no_info;
        this.reset_zoom = opts.reset_zoom;
        this.slider_selector=this._selectorName(opts.slider_selector);
        this.selected_marker;
        this.scope_selector = `[data-scope="${this.scope}"]`;
        this.scope_sufix = `--${this.scope}`;
        this.content_selector = (opts.content_selector ?
                opts.content_selector : `.js-content${this.scope_sufix}`);
        this.content_outside = (this.content_selector !==
                `.js-content${this.scope_sufix}` ? true : false);
        this.data = this.formatInput(data);
        this.geometryTypes = [
            "Point",
            "LineString",
            "Polygon",
            "MultiPoint",
            "MultiLineString"
        ];
        this.map_layers = opts.map_layers;
        this.map_layers_default = opts.map_layers_default;
        this.featureStyle = {
            stroke: "dodgerblue",
            "stroke-opacity": 1,
            "stroke-width": 2,
            "fill-opacity": 0.5
        };
        this.accesible_menu_search = [];
        this.accesible_menu_filter = [];
        this.open_maps = opts.open_maps;
        this.open_maps_options = Object.assign(
            {},
            defaults.open_maps_options,
            options?.open_maps_options
        );
        this.media_breakpoint = opts.media_breakpoint;
        this.map_breakpoint = opts.map_breakpoint;
        this.map_breakpoint_fractions = opts.map_breakpoint_fractions;
        this.map_align = opts.map_align;
        this.map_style = opts.map_style;
        this.accesible_menu_extras = opts.accesible_menu_extras;
        this.summary = opts.summary;
        this.geojson;

        // Map tiles
        this.ersiURL ='https://server.arcgisonline.com/arcgis/rest/services/'
            + 'World_Imagery/MapServer/tile/{z}/{y}/{x}';
        this.osmURL = "https://mapa-ign.argentina.gob.ar/osm/{z}/{x}/{-y}.png";

        // Attribution settings
        const attributions = {
            ersi: {
                attributes: {tabindex: -1},
                hreflang: "es",
                label: `© <abbr lang="en" title="Environmental Systems Research Institute">Esri</abbr>`,
                lang: "en",
                link: "https://www.esri.com/es-es/home",
            },
            ign: {
                attributes: {tabindex: -1},
                hreflang: "es",
                label: `<abbr lang="es" title="Instituto Geográfico Nacional">IGN</abbr>`,
                lang: "es",
                link: "https://www.ign.gob.ar/AreaServicios/Argenmap/Introduccion",
            },
            leaflet: {
                attributes: {tabindex: -1},
                hreflang: "en",
                label: "Leaflet",
                lang: "en",
                link: "https://leafletjs.com/",
                title: "Biblioteca JavaScript para mapas interactivos",
            },
            osm: {
                attributes: {tabindex: -1},
                hreflang: "en",
                label: `<abbr lang="en" title="Open Street Map">OSM</abbr>`,
                lang: "en",
                link: "https://www.openstreetmap.org/copyright",
            },
        };

        // Attribution links
        const {leaflet, ersi, ign, osm} = attributions;
        this.prefix = this.addAnchorElement(leaflet, "html");
        this.ersiAttribution = `Contribuidores: `
                + `${this.addAnchorElement(ersi, "html")}`;
        this.osmAttribution = `Contribuidores: `
                + `${this.addAnchorElement(ign, "html")}, `
                + `${this.addAnchorElement(osm, "html")}`;

        // Layer set
        this.layerViewSettings = {
            satelital:{
                attribution: this.ersiAttribution,
                label: "Mapa satelital",
                tilesUrl: this.ersiURL,
                setVisuals: this._setSatelitalView,
            },
            osm:{
                attribution: this.osmAttribution,
                label: "Mapa",
                setVisuals: this._setOsmView,
                tilesUrl: this.osmURL,
            }
        };

        // Bloquea el componente si no existe leaflet.
        if (typeof L === "undefined" || !L.hasOwnProperty("map")){
            const helpLink = {
                hreflang: "en",
                label: "<em>Quick start</em>",
                lang: "en",
                link: "https://leafletjs.com/examples/quick-start/",
                target: "_blank"
            }
            this.showAlert({
                title: "No se encuentra el componenete Leaflet",
                messages: [
                    "Verifique que <strong>Leaflet</strong>, esté incluido "
                    + "en el documento HTML.",
                    `Lea las indicaciones para usar el componente leaflet `
                    + `en: ${this.addAnchorElement(helpLink, "html")}.`,
                ]
            }, "danger", true);
        }

        // Tipo de visualización
        this.layerViewConf = (this.map_layers_default == "satelital" ? 
            this.layerViewSettings[this.map_layers_default] : 
            this.layerViewSettings["osm"]);

        this.tileLayer = new L.tileLayer(this.layerViewConf.tilesUrl);
        const mapOptions = {
            renderer: L.svg(), 
            keyboard: true,
            ...this.map_init_options,
            zoomControl: false, // Desactiva el control por defecto
        };

        // Inicializa el mapa
        this.map = new L.map(this.map_selector, mapOptions);
        this.map.setView(this.map_view, this.map_zoom);
        this.map.attributionControl.setPrefix(this.prefix);

        // Redefine los valores para la herramienta zoom
        if(this.map_init_options?.zoomControl !== false){
            const customZoomControl = L.control.zoom({
                position: 'topleft',
                zoomControl: true,
                zoomInText: '+',
                zoomInTitle: this._t("zoom_in"),
                zoomOutText: '-',
                zoomOutTitle: this._t("zoom_out"),
            });
            customZoomControl.addTo(this.map);
        }

        // Si se importó el componente _markerCluster_, lo usa. De otro modo
        // Utiliza _FeatureGroup_ y muestra todos los markers simultáneamente.
        if(L.hasOwnProperty("markerClusterGroup")){
            this.markers = new  L.markerClusterGroup({
                ...this.marker_cluster_options,
                ...this.customClusters()
            });
        } else {
            this.markers = new L.FeatureGroup();
        }

        this.ponchoLoaderTimeout;
    }


    /**
     * Versión poncho
     */
    get version(){
        return "2.2.0";
    }


    /**
     * Dicionario de términos según el lenguaje.
     * 
     * @param {string} definition Clave de diccionario
     * @param {object} tpl Objeto con clave valor a reemplazar
     * @returns {string|undefined}
     */
    _t = (definition, tpl={}) => {
        if(this.isEmptyString(definition)){
            console.warn("_t", "Está recibiendo una definición vacía.");
            return definition;
        }

        if(!this.isObject(tpl)) {
            console.warn("_t", "tpl requiere un objeto clave/valor.");
            return;
        }

        const replaceDef = (this.dictionary.hasOwnProperty(definition) ? 
                this.dictionary[definition] : definition);

        return this.tplParser(replaceDef, tpl);
    };


    /**,.bv
     * Redefine los clusters
     * @returns 
     */
    customClusters = () => {
        if(!L.hasOwnProperty("divIcon")){
            return;
        }

        return {
            iconCreateFunction: (cluster) => {
                const count = cluster.getChildCount();
                let sizeClass;
                let ariaLabelText;

                if (count < 10) {
                    sizeClass = 'small';
                } else if (count < 100) {
                    sizeClass = 'medium';
                } else {
                    sizeClass = 'large';
                }

                const ariaLabels = {
                    small: this._t("cluster_small", {count}),
                    medium: this._t("cluster_medium", {count}),
                    large: this._t("cluster_large", {count}),
                };
                ariaLabelText = ariaLabels[sizeClass];
                const classNames = [
                    "leaflet-marker-icon",
                    "marker-cluster",
                    `marker-cluster-${sizeClass}`,
                    "leaflet-zoom-animated",
                    "leaflet-interactive",
                ];
                const htmlContent = `<div title="${this._t("cluster_click")}"`
                    + ` aria-label="${ariaLabelText}">`
                    + `<span>${count}</span></div>`;

                return L.divIcon({
                    html: htmlContent,
                    className: classNames.join(" "),
                    iconSize: L.point(40, 40),
                });
            }
        }
    };


    /* VALIDATORS */
    /**
     * Comprueba si un valor es un string.
     * @param {*} value El valor a comprobar.
     * @returns {boolean} Retorna `true` si el valor es un string; de 
     * lo contrario, `false`.
     */
    isString(value) {
        return typeof value === 'string';
    }

    /**
     * Comprueba si un valor es un string vacío o que solo contiene 
     * espacios en blanco.
     * @param {*} str El string a comprobar.
     * @returns {boolean} Retorna `true` si el string está vacío o es nulo; 
     * de lo contrario, `false`.
     */
    isEmptyString(str) {
        return typeof str === "string" && str.trim().length === 0;
    }

    /**
     * Comprueba si un valor es un número finito.
     * @param {*} num El valor a comprobar.
     * @returns {boolean} Retorna `true` si el valor es un número y es 
     * finito; de lo contrario, `false`.
     */
    isNumber(num) {
        return typeof num === "number" && isFinite(num);
    }

    /**
     * Valida que el input sea un objeto
     * @param {*} obj Elemento a validar  
     * @returns {boolean}
     */
    isObject(obj) {
        return typeof obj === "object" && obj !== null && !Array.isArray(obj);
    }

    /**
     * Comprueba si un valor es un objeto vacío.
     * Excluye arrays y valores nulos.
     * @param {*} obj El valor a comprobar.
     * @returns {boolean} Retorna `true` si el valor es un objeto válido y 
     * está vacío; de lo contrario, `false`.
     */
    isEmptyObject(obj) {
        if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
            return false;
        }
        return Object.keys(obj).length === 0;
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
        if(!this.isString(value)){
            return;
        }

        if (this.isEmptyString(value)) {
            return value;
        }

        if (!this.isObject(kwargs)) {
            return;
        }
        
        if (this.isEmptyObject(kwargs)) {
            return value;
        }

        return Object.keys(kwargs).reduce(function(str, key){
            if(!kwargs.hasOwnProperty(key)){
                return;
            }
            const regex = new RegExp(
                '\\{\\{\\s{0,2}' + key + '\\s{0,2}\\}\\}', 'gm');
            str = str.replace(regex, kwargs[key]);
            return str;
        }, value);
    };


    /**
     * Especifica el tamaño del slider
     * @returns {undefined}
     */
    _setSliderSize = () => {
        if(!this.isString(this.slider_size)){
            return;
        }

        const validSizes = ['large', 'default', 'medium'];
        if (!validSizes.includes(this.slider_size)) {
            console.warn(`Invalid slider size: ${this.slider_size}. Defaulting to 'default'.`);
            this.slider_size = 'default';
        }

        const sliderElement = document.querySelector(`.poncho-map${this.scope_selector}`);
        if (sliderElement) {
            sliderElement.classList.remove(
                'slider-large', 
                'slider-default', 
                'slider-medium'
            );
            sliderElement.classList.add(`slider-${this.slider_size}`);
        }
    };


    /**
     * Define la fracción en la que puede alinearse el mapa.
     * 
     * @summary Si el usuario elige alineación: «left» o «right»; en función
     * del tamaño del mapa, elige la fracción que mejor representa el mapa
     * alineado.
     * @param {Number} mediaSize Número entero.
     * @returns {string} Fracción, ej: 1:3
     */
    _setFraction = (mediaSize) => {
        let fraction;

        // Tamaño del contenedor del mapa.
        // Si se especifica tamaño, lo usa. De otro modo accede al tamaño
        // del ancho del mapa.
        const elementSize = (this.isNumber(mediaSize) ? mediaSize : 
            document.getElementById(this.map_selector).offsetWidth);

        // obtengo el listado de breakpoints válidos.
        const validMediaBreakpoints = Object.keys(this.media_breakpoint);

        // Defino el tamaño del slider
        const sliderSize = (["large", "default"].includes(
                this.slider_size) ? this.slider_size : "default");
        const mapBrekpoint = this.map_breakpoint[sliderSize];

        // Las claves existen
        const hasValidKeys = Object
                .keys(mapBrekpoint)
                .every(entry => validMediaBreakpoints.includes(entry));

        // Si las claves están mal, muestro un error y corto la ejecución. 
        if(!hasValidKeys){
            this.showAlert({
                title: `Una o muchas claves en: `
                    + `<code>map_breakpoints</code>, no son `
                    + `claves correctas.`,
                messages: [
                    `Compruebe que las claves coincidan con alguna de `
                    + `las siguientes: `
                    + `${validMediaBreakpoints.join(", ")}.`,
                    
                ],
                terminal: mapBrekpoint
            }, "danger", true);

            return;
        }

        // Valido las definiciones por cada breakpoint
        const hasValidDefinitions = Object
                .values(mapBrekpoint)
                .every(function(entry){
                    return (typeof entry === "object" && entry !== null && 
                        'value' in entry && 'fraction' in entry);
                });

        // La validación se hace ANTES del ordenamiento
        if (!hasValidDefinitions){
            this.showAlert({
                title: "La definición de <code>map_breakpoints</code>, "
                    + "tiene errores",
                messages: [
                    "Verifique que para cada entrada existan las claves: "
                    + "`value` y `fraction`."],
                terminal: mapBrekpoint
            }, "warning");

            return; 
        }

        // Ordeno los valores de mayor a menor. 
        const sortedEntries = Object
            .entries(mapBrekpoint)
            .sort(([, a], [, b]) => b.value - a.value);

        // Verifico cual de los MAP breakpoints es el adecuado.
        for(let entry of sortedEntries){
            let [breakpoint, {value, fraction:definedFraction}] = entry;
            if(!this.isNumber(value)){
                continue;
            }

            if(elementSize >= value){
                fraction = definedFraction;
                console.table(sortedEntries)
                console.log(breakpoint, value, fraction, elementSize)
                break;
            }
        }

        return fraction || "1:1";
    }


    /**
     * Alinea el mapa horizontalmente hacia la izquierda o la derecha.
     *
     * @param {string} align - La alineación horizontal del mapa. Los 
     * valores válidos son 'left' o 'right'.
     * @param {string} [fraction=false] - Opcional. Una cadena de fracción 
     * (por ejemplo, '1:3') para centrar el mapa en la vista alineada.
     * @param {number[]} [initialCenter=this.map_view] - Opcional. Un array 
     * `[latitud, longitud]` para establecer un punto central inicial.
     * @returns {undefined}
     */
    setMapAlignment = (align, fraction=false, initialCenter=this.map_view) => {
        if(!["left", "right"].includes(align.toLowerCase())){
            return;
        }

        fraction = (!fraction ? this._setFraction() : fraction);
        if(!/^[0-9]{1,2}\:[0-9]{1,2}$/.test(fraction)){
            console.error(
                "La fracción para posicionar el mapa tiene errores sintácticos.");
            return;
        }

        const [numerator, denominator] = fraction.split(":");
        const result = numerator/denominator;
        if((Number(result) === 1 || Number(result) === 0.5)){
            return null;
        }

        const [lat, lng] = initialCenter;
        const currentCenter = (Array.isArray(initialCenter) ? {lat, lng} : 
                this.map.getCenter());

        let currentCenterPoint = this.map.latLngToContainerPoint(currentCenter);
        const fractionPos = (align == "left" ? denominator - numerator : numerator);
        let newX = ((document.querySelector(".poncho-map").offsetWidth / 
                denominator) * fractionPos);

        let newY = currentCenterPoint.y;
        let newCenterPoint = L.point(newX, newY);

        let newCenterLatLng = this.map.containerPointToLatLng(newCenterPoint);

        this.map_view = [newCenterLatLng.lat, newCenterLatLng.lng]
        this.map.setView(newCenterLatLng);
    };


    /**
     * Crea un elemento anchor <a>
     * * @param {object} options 
     * @param {object} options.id Especifica el id del elemento.
     * @param {object} options.title Especifica el title del elemento.
     * @param {object} options.css Array de clases CSS para el elemento.
     * @param {string} options.label El texto que se mostrará dentro del enlace.
     * @param {string} options.aria_label El texto para el atributo 
     * 'aria-label'.
     * @param {string} options.link La URL a la que apunta el enlace.
     * @param {string} options.hreflang El idioma del documento de destino.
     * @param {string} options.lang El idioma del elemento.
     * @param {string} options.target Especifica dónde se abrirá el documento 
     * vinculado. Valores posibles: '_self', '_blank', '_parent', '_top'.
     * @param {string[]} options.rel Especifica la relación entre el 
     * documento actual y el documento vinculado.
     * @param {object} options.datasets Un objeto de pares clave-valor para 
     * los atributos de datos (data-*).
     * @param {object} options.attributes Un objeto de pares clave-valor 
     * para otros atributos personalizados.
     * @returns {HTMLAnchorElement}
     */
    addAnchorElement = (options, output="object") => {
        const {
            id,
            title,
            css,
            label = null,
            aria_label,
            link = '#',
            hreflang,
            lang,
            target,
            rel,
            datasets = {},
            attributes = {}
        } = options;

        const regexLang = /^[a-zA-Z]{2}$/;
        const isValidLang = (this.isString(lang) &&
                regexLang.test(lang));
        const isValidHrefLang = (this.isString(hreflang) &&
                regexLang.test(hreflang));
        const isValidTarget = [
                '_self', '_blank', '_parent', '_top'].includes(target);

        // Anchor
        const element = document.createElement("a");
        element.href = link;

        if(label && isValidTarget && target == "_blank"){
            element.innerHTML = `${label} <span class="sr-only">`
                    + `(Abre en una nueva pestaña)</span>`; 
        } else if(label){
            element.innerHTML = label;
        }

        if (Array.isArray(rel)) {
            const uniqueRel = [...new Set(rel)];
            if (isValidTarget && target === "_blank") {
                uniqueRel.push('noopener', 'noreferrer');
            }
            element.rel = uniqueRel.join(" ");
        }

        if(isValidLang){
            element.lang = lang;
        }
        if(isValidHrefLang){
            element.hreflang = hreflang;
        }
        if(isValidTarget){
            element.target = target;
        }
        if(aria_label){
            element.setAttribute("aria-label", aria_label);
        }
        if(id){
            element.id = id;
        }
        if(title){
            element.title = title;
        }
        if(Array.isArray(css)){
            element.classList.add(...css);
        }
        Object
            .entries(attributes)
            .forEach(([key, value]) => 
                element.setAttribute(key, value));
        Object
            .entries(datasets)
            .forEach(([key, value]) => 
                element.setAttribute(`data-${key}`, value));

        return output == "html" ? element.outerHTML : element;
    };


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
        this.tileLayer.setOpacity(opacity);
    }


    /**
     * Define el color de fondo para el mapa. 
     *
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

        const selector = `${this.scope_selector} .leaflet-container`;
        const mapBackgroundColor = document.querySelector(selector);

        if(mapBackgroundColor){
            mapBackgroundColor.style.background = color;
        }

        return;
    };


    /**
     * Habilita o deshabilita un botón
     * 
     * @param {Array} themes Array de temas, ej: ['map-dark', 'map-contrast']
     * @param {string} attr Estado del atributo. Default: disabled
     * @returns {undefined}
     */
    _disabledEnableThemes = (themes, attr="disabled") => {
        for(let item of themes){
            const selector = `${this.scope_selector} [data-theme="${item}"]`;
            document.querySelectorAll(selector).forEach(function(ele){
                if(attr == "disabled"){
                    ele.ariaHidden = "true";
                    ele.parentElement.style.display = "none";
                } else {
                    ele.removeAttribute("aria-hidden");
                    ele.parentElement.style.display = "initial";
                }
            });
        }
    };


    /**
     * Setea el estado de los CSS en los menú y en el mapa.
     * 
     * @param {Array} removeList  Lista de temas que deben removerse al 
     *                            aplicar la vista.
     * @param {string} addLayer   Esitlo para el layer que se utilizará.
     * @param {string} disabled   Agrega el atributo disabled en los botones.
     * @returns {undefined}
     */
    _setLayerTheme = (removeList, addLayer, disabled) => {
        const selector = document.querySelectorAll(this.scope_selector);
        selector.forEach(function(ele){
            ele.classList.remove(...removeList);
            ele.classList.add(addLayer);
        });
        this._disabledEnableThemes(["contrast", "dark"], disabled);

        const menuItemSelector = `${this.scope_selector} [data-theme^="layer-"]`;
        const menuitemLayerTheme = document.querySelectorAll(menuItemSelector);
        menuitemLayerTheme.forEach(function(ele){
            if(ele.dataset.theme == addLayer){
                ele.ariaCurrent = "true";
            } else {
                ele.ariaCurrent = "false";
            }
        });
    }


    /**
     * Características para aplicar el mapa OSM
     * @returns {undefined}
     */
    _setOsmView = () => {
        this.tileLayer.setUrl(this.osmURL);
        this.map.attributionControl.removeAttribution(this.ersiAttribution);
        this.map.attributionControl.addAttribution(this.osmAttribution);
        this._setLayerTheme(["layer-satelital"], "layer-osm", false);
    };
    


    /**
     * Características para aplicar el mapa satelital.
     * @returns {undefined}
     */
    
    _setSatelitalView = () => {
        this.tileLayer.setUrl(this.ersiURL);
        this.map.attributionControl.removeAttribution(this.osmAttribution);
        this.map.attributionControl.addAttribution(this.ersiAttribution);
        this._setLayerTheme(
            ["layer-osm","map-contrast", "map-dark", "ui-contrast", "ui-dark"], 
            "layer-satelital", "disabled");
    };


    /**
     * Crea el menú para cambiar de temas
     * @returns {undefined} 
     */
    _menuTheme = () => {
        if(!this.theme_tool){
            return;
        }
        // const themeDetails = document.createElement("details");
        // const themeSummary = document.createElement("summary");
        // themeSummary.textContent = "Details";
        // const themeDetailsContent = document.createElement("div");
        // themeDetailsContent.textContent = "hola mundo"
        // themeDetails.appendChild(themeSummary);
        // themeDetails.appendChild(themeDetailsContent);

        document
            .querySelectorAll(`#themes-tool${this.scope_sufix}`)
            .forEach(ele => ele.remove());

        // Contenedor general
        const navContainer = document.createElement("div");
        navContainer.classList.add(
            "pm-list-unstyled", "pm-list","pm-tools",
            `js-themes-tool${this.scope_sufix}`
        );

        // contenedor enlaces
        const item = document.createElement("div");
        item.tabIndex = "-1";
        item.dataset.toggle="true";

        // icono del menú
        const icon = document.createElement("i");
        icon.ariaHidden = "true";
        icon.classList.add("pmi", "pmi-adjust");

        // Botón para abrir el menú.
        const button = document.createElement("button");
        button.title = this._t("theme_change");
        button.id = `themes-tool-button${this.scope_sufix}`;
        button.tabIndex = "0";
        button.classList.add("pm-btn", "pm-btn-rounded-circle");
        button.ariaHasPopup = "true";
        button.ariaControls = "menu";
        button.role = "button";
        button.ariaLabel = this._t("theme_open_panel");
        button.appendChild(icon);

        const list = document.createElement("ul");
        list.id = `list-themes-tool-button${this.scope_sufix}`;
        list.role = "menu";
        list.ariaLabelledby = `themes-tool-button${this.scope_sufix}`;
        list.classList.add(
            "pm-container", "pm-list", "pm-list-unstyled", 
            "pm-p-1", "pm-caret", "pm-caret-b", "pm-toggle", 
            "pm-accesible-menu");

        // Botón para restablecer el mapa
        const restartLinkOptions = {
            label: "Restablecer",
            attributes: {role: "menuitem", tabIndex: 0},
            aria_label: this._t("theme_reset"),
            css: ["pm-item-link", "js-reset-theme"]
        };
        const restart = this.addAnchorElement(restartLinkOptions);

        const li = document.createElement("li");
        li.role = "presentation";
        li.classList.add("pm-item-separator");
        li.appendChild(restart);

        list.appendChild(li);

        // Genero los botones para los temas. 
        const totalItems = this.default_themes.length;
        for(let i = 0; i <= totalItems - 1; i++){
            const {code, name, aria_label, description} = this.default_themes[i];
            const buttonThemeOptions = {
                aria_label,
                css: ["js-set-theme", "pm-item-link"],
                attributes: {role: "menuitem",tabIndex: 0},
                datasets: {theme: code}
            };

            // Label para el botón
            const spanName = document.createElement("span");
            spanName.textContent = this._t(name);
            
            const buttonTheme = this.addAnchorElement(buttonThemeOptions);
            buttonTheme.appendChild(spanName);

            if(description){
                const small = document.createElement("small");
                small.classList.add("d-block", "small", "sr-only");
                small.textContent = this._t(description);

                const comma = document.createElement("span");
                comma.textContent = ", ";
                comma.className = "sr-only";

                buttonTheme.appendChild(comma);
                buttonTheme.appendChild(small);
            }

            // Agrego una línea de separación.
            // @todo Separar los botones con details/summary
            const li = document.createElement("li");
            li.role="presentation";
            if(i == totalItems -1 && this.map_layers){
                li.classList.add("pm-item-separator");
            }

            li.appendChild(buttonTheme);
            list.appendChild(li);
        }	

        // Si no se setea multilayer, oculto los items del menú.
        if(this.map_layers){
            for(let item of Object.keys(this.layerViewSettings)){
                const {label} = this.layerViewSettings[item];
                const layersOptions = {
                    label,
                    css: ["pm-item-link", `js-${item}-layer`],
                    attributes: {role: "menuitem", tabIndex: 0},
                    datasets: {theme: `layer-${item}`},
                };
                const sateliteButton = this.addAnchorElement(layersOptions);

                const li = document.createElement("li");
                li.role = "presentation";
                li.appendChild(sateliteButton);
                list.appendChild(li);
            }
        }

        item.appendChild(button);
        item.appendChild(list);
        navContainer.appendChild(item);

        // imprimo el menú en el mapa
        const element = document.querySelectorAll(this.scope_selector);
        element.forEach(e => e.appendChild(navContainer));

        // listeners
        document
            .querySelectorAll(`${this.scope_selector} .js-satelital-layer`)
            .forEach(ele => ele.addEventListener(
                "click", (e) => {
                    e.preventDefault();
                    this._setSatelitalView();
                })
            );
        document
            .querySelectorAll(`${this.scope_selector} .js-osm-layer`)
            .forEach(ele => ele.addEventListener(
                "click", (e) => {
                    e.preventDefault();
                    this._setOsmView();
                })
            );
        document
            .querySelectorAll(`${this.scope_selector} .js-reset-theme`)
            .forEach(ele => ele.addEventListener(
                "click", (e) => {
                    e.preventDefault();
                    localStorage.removeItem("mapTheme");
                    this._removeThemes();
                    this._setThemes();
                    this.layerViewConf.setVisuals();
                })
            );
        document
            .querySelectorAll(`${this.scope_selector} .js-set-theme`)
            .forEach(ele => ele.addEventListener(
                "click", (e) => {
                    e.preventDefault();
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
    _setThemeStyles = (theme=false, prefix=["ui", "map"]) => {
        return prefix.map(function(m){
            return (["ui", "map"].includes(m) ? `${m}-${theme}` : false);
        });
    };


    /**
     * Remueve los estilos de tema
     * @param {object} prefix Lista de prefijos. ui o map 
     * @returns {undefined}
     */
    _removeThemes = (prefix=["ui", "map"]) => {
        const element = document.querySelectorAll(this.scope_selector);
        element.forEach(ele => {
            [
                ...this.default_themes.map(m => m.code),
                ...this.temes_not_visibles.map(m => m[0])
            ].forEach(th => {
                ele.classList.remove(...this._setThemeStyles(th, prefix));
            });
        });
        // Aria-current false
        const themeMenuItems = document.querySelectorAll(
            `${this.scope_selector} .js-set-theme`);
        themeMenuItems.forEach(ele => ele.setAttribute("aria-current", "false"));
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
        // Agrega aria-current al item seleccionado
        const themeMenuItems = document.querySelectorAll(
            `${this.scope_selector} .js-set-theme[data-theme="${theme}"]`);
        themeMenuItems.forEach(ele => ele.setAttribute("aria-current", "true"));
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
     * Abre las coordenadas en varios servicios de mapas configurados
     * 
     * @summary
     * lang y href lang solo aceptan lenguajes tipo: ISO-639-1.
     * 
     * @param {number|string} latitude - Latitud de la ubicación
     * @param {number|string} longitude - Longitud de la ubicación
     * @returns {HTMLElement|null} - El contenedor creado o null si no se pudo crear
     */
    _openOnMaps = (latitude, longitude) => {
        if(typeof this.open_maps != "boolean" || !this.open_maps){
            return;
        }

        if(!this.validateCoordinates(latitude, longitude)){
            console.warn(
                `Coordenadas inválidas: lat=${latitude}, lng=${longitude}`);
            return;
        }

        const ul = document.createElement("ul");
        ul.classList.add("pm-list-unstyled", "pm-pb-1");

        const {items=[], label, aria_label} = this.open_maps_options;

        for(const item of items){
            const {link: templateLink, platform = "all"} = item;
            const regex = /(?=.*\{\{latitude\}\})(?=.*\{\{longitude\}\}).*/gm;
            if (platform === 'mac' && !navigator.userAgent.includes('Mac')) {
                continue;
            }
            if(!regex.test(templateLink)){
                continue;
            }

            const link = this.tplParser(templateLink, {latitude, longitude});
            const anchorOptions = {...item, link, attributes: {tabIndex: 0}};

            const a = this.addAnchorElement(anchorOptions);
            const li = document.createElement("li");
            li.appendChild(a);
            ul.appendChild(li);
        }

        const summary = document.createElement("summary");
        summary.textContent = this._t(label);
        summary.tabIndex = 0;
        summary.ariaLabel = this._t(aria_label);

        const details = document.createElement("details");
        details.classList.add("blank");

        const container = document.createElement("footer");
        container.className = "pm-open-map";
        
        const parentSelector = `.js-content${this.scope_sufix}`;
        const parentNode = document.querySelector(parentSelector);

        details.appendChild(summary);
        details.appendChild(ul);
        container.appendChild(details);
        parentNode.appendChild(container);
    }


    /**
     * Valida si las coordenadas de latitud y longitud son válidas
     * @param {number|string} latitude - Latitud a validar (-90 a 90)
     * @param {number|string} longitude - Longitud a validar (-180 a 180)
     * @returns {boolean} - Verdadero si ambas coordenadas son válidas, 
     * falso en caso contrario.
     */
    validateCoordinates(latitude, longitude) {
        // Convertir a números en caso de que se pasen como strings
        const lat = (this.isString(latitude) ? 
            parseFloat(latitude) : latitude);
        const lng = (this.isString(longitude) ? 
            parseFloat(longitude) : longitude);
        
        // Verificar que sean números válidos (no NaN)
        if (isNaN(lat) || isNaN(lng)) {
            return false;
        }
        
        // Validar rango de latitud: -90 a 90 grados
        if (lat < -90 || lat > 90) {
            return false;
        }
        
        // Validar rango de longitud: -180 a 180 grados
        if (lng < -180 || lng > 180) {
            return false;
        }
        
        return true;
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
            this.showAlert(
                {
                    title: "No se puede visualizar el mapa, el documento está vacío",
                    messages: [
                        "Es posible que el documento esté vacío.",
                        "Verifique el formato del documento JSON o GeoJSON."
                    ]
                }, 
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
    showAlert = (entry, type, block=false) => {
        if(!this.isObject(entry)){
            console.error("showAlert", "Espera un objeto de tipo clave/valor.");
            return;
        }

        // 1. Validación
        if(this.isEmptyObject(entry)){
        // if(typeof entry === "object" && Object.keys(entry).length === 0){
            console.error("No se encontraron las claves: title o messages.");
            return;
        }

        if(!["danger", "warning", "info"].includes(type)){
            type = "danger";
        }

        // Contenedor de errores
        let logContainer = document
                .querySelector(`#log-container${this.scope_sufix}`);
        if(!logContainer){
            logContainer = document.createElement("div");
            logContainer.role = "alert";
            logContainer.id = `log-container${this.scope_sufix}`;

            // Ubico el contenedor de logs antes del
            const node = document.querySelector(
                `${this.scope_selector}.poncho-map`
            );
            node.parentNode.insertBefore(logContainer, node);
        }
        logContainer.innerHTML = "";

        // Contenedor de alerta
        let container = document.createElement("div");
        container.classList.add(
            `js-error-message${this.scope_sufix}`, 
            "poncho-map--message", 
            type);

        // Título de la alerta
        const heading = document.createElement("h2");
        heading.classList.add("pm-visually-hidden", "sr-only");
        heading.textContent = "Registro de errores en el mapa";

        // Mensajes
        const {title, messages=[], terminal=false} = entry;
        if(!this.isEmptyString(title)){
            const messageLabel = document.createElement("p");
            messageLabel.innerHTML = title;
            // Agrego el título al contenedor.
            container.appendChild(messageLabel);
        }

        if(Array.isArray(messages) && messages.length > 0){
            const contentList = document.createElement("ul");
            for(let item of messages){
                const contentListItem = document.createElement("li");
                contentListItem.innerHTML = item;
                contentList.appendChild(contentListItem);
            }

            // Agrego listado de sugerencias al contenedor
            container.appendChild(contentList);
        }

        if(terminal){
            const detailsContainer = document.createElement("div");
            detailsContainer.classList.add("console-message-container");
            
            const details = document.createElement("details");
            details.classList.add("caret-small", "caret-dark");
            
            const summary = document.createElement("summary");
            summary.textContent = "Mensaje";

            const consoleContainer = document.createElement("div");
            consoleContainer.classList.add("console");

            const showConsole = document.createElement("code");
            showConsole.innerHTML = JSON.stringify(terminal);

            // APPEND
            consoleContainer.appendChild(showConsole);
            details.appendChild(summary);
            details.appendChild(consoleContainer);
            detailsContainer.appendChild(details);
            // Agrego el mensaje terminal al contenedor
            container.appendChild(detailsContainer);
        }

        // Imprimo el error en la página
        if(this.error_reporting || block) {
            logContainer.appendChild(heading);
            logContainer.appendChild(container);

            if(this.throw_exceptions || block){
                document.getElementById(this.map_selector).remove();
                throw new Error(JSON.stringify(entry));
            }
        }

        // Imprimo el error en la consola
        console.error( JSON.stringify(entry) );
    };


    /**
     * Compone un _feature_ GeoJSON
     * 
     * @param {object} entry Entrada JSON
     * @returns {object} Objeto con formato geoJSON feature.
     */
    feature = (entry) => {
        if(![this.latitude, this.longitude].every(k => Object.keys(entry).includes(k))){
            this.showAlert(
                {
                    title: `La entrada debe incluir las claves para latitud y longitud.`,
                    terminal: entry
                },
                "warning"
            ); 
            return;
        }

        const latitude = entry[this.latitude];
        const longitude = entry[this.longitude];
        
        if(!this.validateCoordinates(latitude, longitude)){
            this.showAlert(
                {
                    title: `El documento JSON contiene errores en la definición de `
                        + `latitud y longitud.`,
                    messages: [
                        `Corrobore que los valores de las claves para `
                            + `<code>latitud</code> `
                            + `(${this.latitude}) y <code>longitud</code> `
                            + `(${this.longitude}), no estén vacíos.`,
                        "Revise que el separador de decimales sea un punto y no una coma.",
                        "Verifque que los rangos de latitud y longitud sean correctos."
                    ],
                    terminal: entry
                },
                "warning"
            ); 
        };

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
            this.id_mixing.length > 0 || typeof this.id_mixing === 'function');


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
            if(entry.properties.hasOwnProperty(val)){
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
        if (!entries || !Array.isArray(entries.features)) {
            return entries;
        }

        const firstEntry = entries.features[0];
        const hasId = firstEntry?.properties.hasOwnProperty("id");


        const isIdMixingEnabled = this._isIdMixing();

        // Si no se configuró id_mixing y el json tiene id.
        if(!isIdMixingEnabled && hasId){
            return entries;
        }

        for (let i = 0; i < entries.features.length; i++) {
            const entry = entries?.features[i];
            if(!entry){
                continue;
            }

            const {properties} = entry;

            if (isIdMixingEnabled) {
                // Procesa la opción de id_mixing
                properties.id = this._idMixing(entry);
            } else {
                // Genera un ID automático
                const autoId = i + 1;
                const useTitle = properties[this.title] ?
                    this._slugify(properties[this.title]) : "";
                properties.id = [autoId, useTitle].filter(Boolean).join('-');
            }
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
        if (this.isEmptyString(value)) {
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


    searchEntries = (searchTerm, dataset) => {
        const dataToSearch = dataset || this.geoJSON;

        if(this.isEmptyString(searchTerm)){
            console.info("searchEntries", "Término vacío.");
            return dataToSearch;
        }

        // Término de búsqueda sanitizado
        // Sin acéntos o caracteres especiales.
        const sanitizedSearchTerm = 
                replaceSpecialChars(searchTerm).toUpperCase();

        // Armo un array con los índices de búsqueda
        const searchFields = new Set([...[this.title], ...this.search_fields]);

        const entries = dataToSearch.filter(entry => {
            return this.searchEntry(
                sanitizedSearchTerm, 
                entry.properties,
                searchFields
            );
        })

        return entries;
    };


    /**
     * Busca un término en una entrada
     * 
     * @param {string} searchTerm Término a buscar
     * @param {object} entry Entrada de datos
     * @see searchEntries()
     * @returns {object|null}
     */
    searchEntry = (sanitizedSearchTerm, entry, searchFields=[]) => {
        if (!sanitizedSearchTerm) {
            return entry;
        }

        if(searchFields.length < 1){
            return entry;
        }

        const result = [...searchFields].some(function(key){
            if (!entry.hasOwnProperty(key)) {
                return false;
            }

            const field = replaceSpecialChars(entry[key])
                    .toString()
                    .toUpperCase();
            return field.includes(sanitizedSearchTerm);
        });

        return result ? entry : false;
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
     * Hace foco en un feature.
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
        .forEach(e => e.addEventListener("click", (event) => {
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
        const qry = document.querySelectorAll(`.js-slider${this.scope_sufix}`);
        return Array
            .from(qry)
            .some(e => e.classList.contains(`${this.slider_selector}--in`));
    };


    /**
     * Imprime la información en el slider.
     * 
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
                e.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "auto"
                }); 
            });
        document
            .querySelectorAll(`.js-close-slider${this.scope_sufix}`)
            .forEach(e => {
                e.dataset.entryId = data[this.id];
            });      


        const [latitude, longitude] = this.entry(data[this.id]).geometry.coordinates
        this._openOnMaps(longitude, latitude);
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

        const animationSelector = `.js-slider${this.scope_sufix}`;
        const sliderElement = document.querySelector(animationSelector);

        if (!sliderElement) {
            return;
        }

        if(this.isSliderOpen()){
            sliderElement.focus();
            return;
        }

        sliderElement.addEventListener("animationend", (event) => {
            if (event.animationName === "open") {
                // pach para detectar el movimiento de <details>
                // @TODO enontrar un método distinto
                return;
            }
            sliderElement.focus();
        }, { once: true });
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
        const mixing = this.template_structure?.mixing ?? [];

        const additionalHeaders = mixing.reduce((accumulator, item) => {
            const key = item.key;
            
            if (key) {
                accumulator[key] = item.header ?? "";
            }
            return accumulator;
        }, {});
        
        return { ...headers, ...additionalHeaders };
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
        // 1. Validación
        if (!this.render_slider || this.content_outside || this.no_info) {
            return;
        }

        // 2. Limpieza (eliminando sliders existentes)
        document
            .querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(e => e.remove());

        // 3. Creación y configuración de elementos
        // Backdrop
        const backdrop = document.createElement("div");
        backdrop.className = "pm-backdrop";
        
        // Contenedor principal del slider
        const container = document.createElement("dialog");
        container.id = `slider${this.scope_sufix}`;
        container.classList.add(
            "pm-container",
            "pm-slider",
            `js-slider${this.scope_sufix}`
        );
        container.style.display = "none";
        container.role = "region";
        container.ariaLive = "polite";
        container.ariaLabel = "Panel de información";

        // Icono para el botón 
        const icon = document.createElement("i");
        icon.classList.add("pmi", "pmi-close");
        icon.ariaHidden = "true";
        
        // Botón para cerrar el slider
        const closeButton = document.createElement("button");
        closeButton.classList.add(
            "btn",
            "pm-btn-xs",
            "btn-secondary",
            "pm-btn-close", 
            `js-close-slider${this.scope_sufix}`
        );
        closeButton.setAttribute("autofocus", "autofocus");
        closeButton.title = "Cerrar panel";
        closeButton.role = "button";
        closeButton.tabIndex = 0;
        closeButton.ariaLabel = "Cerrar panel de información";

        // Enlace anchor.
        const anchorOptions = {
            attributes: {tabIndex: 0},
            id: `js-anchor-slider${this.scope_sufix}`,
            css: ['sr-only']
        };
        const anchor = this.addAnchorElement(anchorOptions);

        // Contenedor del contenido
        const contentContainer = document.createElement("article");
        contentContainer.classList.add("pm-content-container");
        contentContainer.role = "article";

        // Contenido
        const content = document.createElement("div");
        content.classList.add("pm-content", `js-content${this.scope_sufix}`);
        content.tabIndex = 0;
        
        // 4. Append
        contentContainer.appendChild(content);
        closeButton.appendChild(icon);
        container.appendChild(closeButton);
        // container.appendChild(anchor);
        container.appendChild(contentContainer);

        // 5. Inserción en el DOM
        const ponchoMapElement = document.querySelector(`${this.scope_selector}.poncho-map`);
        if(ponchoMapElement){
            ponchoMapElement.appendChild(backdrop);
            ponchoMapElement.appendChild(container);
        }
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
    _setClickeable = (layer) => {
        layer.on("click keypress", (event) => {
            // Borro la clase activa de los markers.
            document
                .querySelectorAll(".marker--active")
                .forEach(ele => ele.classList.remove("marker--active"));

            // Le agrego la clase activa al marker.         
            const targetElement = (event.sourceTarget._icon || 
                    event.sourceTarget._path);
            
            if (targetElement) {
                targetElement.classList.add('marker--active');
            }

            // Busco el contenido correspondiente para actualizar.
            const content = this.entries.find(
                (entry) => entry?.properties?.[this.id] === layer.options.id
            );

            if (content) {
                this.setContent(content.properties);
            }
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
            layer.on("keypress click", () => {
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
        header.className = "pm-header";
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
        // 1. Validar y usar 'values' si están definidos
        if (this.template_structure?.values?.length) {
            return this.template_structure.values;
        }

        // 2. Si no hay 'values', obtener todas las claves de 'row'
        let list = Object.keys(row);

        // 3. Si hay 'exclude', eliminar las claves de la lista
        if (this.template_structure?.exclude?.length) {
            const excludedKeys = new Set(this.template_structure.exclude);
            list = list.filter(key => !excludedKeys.has(key));
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
        if (!this.template_markdown || !this._markdownEnable()) {
            return text;
        }

        const converter = new showdown.Converter(this.markdown_options);
        const cleanedText = secureHTML(text, this.allowed_tags);
        return converter.makeHtml( String(cleanedText).trim() );
    };


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

                let customRow = {}; 
                mixing.forEach(element => {
                    const {values, separator = ", ", key, template} = element;
                    
                    if(typeof key === "undefined"){
                        this.showAlert({
                                title: "Mixing requiere un valor en " 
                                    + "el atributo «key».",
                                terminal: element
                            },
                            "warning"
                        );
                    }

                    if(!this.isEmptyString(template)){
                        customRow[key] = this.tplParser(template, row);
                    } else {
                        customRow[key] = values
                            .map(i => (i in row ? row[i] : i.toString()))
                            .filter(Boolean)
                            .join(separator);
                    }

                });
                return Object.assign({}, row, customRow);
        }
        return row;
    };


    /**
     * Prepara un objeto según su tipo
     * 
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
     * Retorna un listado de selectores css.
     * 
     * @param {string|array} value 
     * @example _setClassList(["agustin, ,,, bouillet amor,", "olivia",'##.', ".#emilia"])
     * //[ "agustin", "bouillet", "amor", "olivia", "emilia" ]
     * @returns {array|undefined}
     */
    _setClassList = (value) => {
        // Regex. 
        // Admite errores como agregar:`,`, `.`, `#` y `[space]`.
        const spliter = str => String(str).split(/\s|\,|\#|\./).filter(Boolean);
        
        if (this.isString(value)) {
            return spliter(value);
        } else if(Array.isArray(value) && value.length > 0 ){
            return value.flatMap(m => spliter(m));
        }
        return [];
    }


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
            this.showAlert(
                {
                    title: "Lead requiere la clave «key»",
                    messages: [
                        "En la sección de configuraciones verifique que, "
                        + "dentro de <code>template_structure</code>, la "
                        + "entrada <code>lead</code> contenga la clave "
                        + "<code>key</code>.",
                        "Compruebe que la clave esté escrita de forma "
                        + "correcta y que no haya espacios o caracteres "
                        + "inválidos."
                    ],
                    terminal: this.template_structure.lead
                },
                "warning"
            );
            return;
        }

        const {
            key, css="small", style=false
        } = this.template_structure.lead;

        if(!entry.hasOwnProperty(key)){
            return;
        }

        const p = document.createElement("p");
        p.textContent = entry[key];
        // Style definitions
        const setStyle = this._setType(style, entry);

        if(setStyle){
            this._setStyle(p, setStyle);
        }
        // CSS Class
        const setClasslist = this._setClassList(this._setType(css, entry));
        if(setClasslist){
            p.classList.add(...setClasslist);
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
            const setClasslist = this._setClassList(
                this._setType(css, entry, key));

            if(setClasslist){
                const icon = document.createElement("i");
                icon.setAttribute("aria-hidden","true");
                icon.classList.add(...setClasslist);

                if(setStyle){
                    this._setStyle(icon, setStyle);
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

        const container = document.createElement("div");
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
    fitBounds = (padding=0.005) => {
        try {
            this.map.fitBounds(this.geojson.getBounds().pad(padding));
        } catch (error) {
            // console.error("fitBounds", error);
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

        document
            .querySelectorAll(`.js-reset-view${this.scope_sufix}`)
            .forEach(e => e.remove());
        
        document
            .querySelectorAll(`${this.scope_selector} .leaflet-control-zoom-in`)
            .forEach(ele => {

            const icon = document.createElement("i");
            icon.classList.add("pmi", "pmi-expand");
            icon.ariaHidden = "true";

            const buttonOptions = {
                link: "#",
                title: this._t("map_full_view"),
                attributes: {role: "button", tabIndex: 0},
                aria_label: this._t("map_full_view"),
                css: [
                    `js-reset-view${this.scope_sufix}`, 
                    "leaflet-control-zoom-reset"]
            };
            const button = this.addAnchorElement(buttonOptions);

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
        if(this.isString(this.marker_color)){
            return this.icon(this.marker_color);
        } else if (this.isString(this.marker_color(this, row))){
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
                
                if(properties.hasOwnProperty("pm-interactive") && 
                    properties["pm-interactive"] === "n"){
                    layer.options.interactive = false;
                }

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
        const container = document
                .querySelector(`${this.scope_selector}.poncho-map`);
        
        if (!container) {
            console.error(
                `Contenedor no encontrado: ${this.scope_selector}.poncho-map`);
            return;
        }

        const search = document.createElement("input");
        search.type = "hidden";
        search.name = `js-search-input${this.scope_sufix}`;
        search.id = `js-search-input${this.scope_sufix}`;
        search.disabled = true;

        container.appendChild(search);
    };


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
        const { title, id } = this;
        
        this.map.eachLayer(layer => {
            const { _path, feature, _leaflet_id } = layer;
            if (!feature || !_path) {
                return;
            }
            const { properties } = feature;
            const isInteractive = properties?.["pm-interactive"] !== "n";

            Object.assign(_path, {
                'aria-label': properties?.[title],
                'tabIndex': (properties["pm-interactive"] === "n" ? -1 : 0),
                'data-entry-id': properties?.[id],
                'data-leaflet-id': _leaflet_id,
                'data-interactive': isInteractive ? null : "n",
                'role': isInteractive ? "button" : "graphics-symbol"
            });
        });
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
            {
                selector: `${this.scope_selector} .leaflet-map-pane`, 
                id: `leaflet-map-pane${this.scope_sufix}`, 
                attributes: {
                    tabIndex: 0,
                    role: "region"
                }
            },
            {
                selector: `${this.scope_selector} .leaflet-control-zoom`,
                id: `leaflet-control-zoom${this.scope_sufix}`,
                attributes: {
                    "aria-label": this._t("zoom_aria_label_panel"),
                    role: "region",
                    tabIndex: 0,
                }   
            },
            {
                selector: `.js-themes-tool-button${this.scope_sufix}`,
                id: `themes-tool-button${this.scope_sufix}`,
                attributes: {
                    "aria-label": this._t("theme_aria_label_panel"),
                    "role": "region",
                    tabIndex: 0,
                }   
            },
        ];

        anchors.forEach(entry => {
            const { selector, id, attributes } = entry;
            const element = document.querySelector(selector);
            
            if (element) {
                element.id = id;
                for (const key in attributes) {
                    element.setAttribute(key, attributes[key]);
                }
            }
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
                label: this._t("map_goto_markers"),
                link: `#${anchors[0]["id"]}`
            },
            {
                label: this._t("map_fit_bounds"),
                link: "#",
                css: ["js-fit-bounds"]
            },
            {
                label: this._t("map_full_view"),
                link: "#",
                css: [`js-reset-view${this.scope_sufix}`]
            }
        ];

        // Agrego el botón para controlar el zoom
        if(!this.map_init_options.hasOwnProperty("zoomControl") || 
            this.map_init_options.zoomControl !== false){
            values.splice(2, 0, {
                label: this._t("zoom_goto_panel"),
                link: `#${anchors[1]["id"]}` 
            });
        }

        // Agrego el item para cambiar temas
        if(this.theme_tool){
            values.push({
                label: this._t("theme_change"),
                link: `#${anchors[2]["id"]}`,
                css: [`js-themes-tool-button${this.scope_sufix}`]
            });
        }

        let accesibleMenuEndItems = [
            {
                label: this._t("map_exit"),
                link: `#accesible-return-nav${this.scope_sufix}`
            }
        ];

        values = [
            ...values,
            ...this.accesible_menu_filter,
            ...this.accesible_menu_search,
            ...this.accesible_menu_extras,
            ...accesibleMenuEndItems
        ];

        // Imprimo los enlaces
        const icon = document.createElement("i");
        icon.classList.add(
            "pmi", 
            "pmi-universal-access", 
            "accesible-nav__icon"
        );
        icon.ariaHidden = "true";

        const nav = document.createElement("div");
        nav.classList.add("pm-accesible-nav", "top", "pm-list");
        nav.id = `pm-accesible-nav${this.scope_sufix}`;
        nav.ariaLabel = "Menú para el mapa";
        nav.role = "navigation";
        nav.tabIndex=0;

        const ul = document.createElement("ul");
        ul.role = "menu";
        ul.classList.add("pm-list-unstyled");

        values.forEach((links) => {
            const {label, css=[], aria_label, link} = links;

            const anchorOpts = {
                ...links,
                label: this._t(label),
                aria_label: this._t(aria_label),
                css:[...css, ...["pm-item-link", "pm-accesible"]], 
                attributes: {
                    role: "menuitem",
                    tabIndex: 0
                }
            };
            const a = this.addAnchorElement(anchorOpts);

            const li = document.createElement("li");
            li.role = "presentation";
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        nav.appendChild(icon);
        nav.appendChild(ul);

        // enlace de retorno
        const anchorOptions = {
            label: "Ir al menú del mapa",
            link: `#pm-accesible-nav${this.scope_sufix}`,
            id: `accesible-return-nav${this.scope_sufix}`,
            css: ["pm-item-link", "pm-accesible"],
            attributes: {tabIndex: 0}
        };
        const backToNav = this.addAnchorElement(anchorOptions);
        const returnNav = document.createElement("div");
        returnNav.classList.add("pm-accesible-nav", "bottom");
        returnNav.appendChild(icon.cloneNode(true));
        returnNav.appendChild(backToNav);

        const navigation = document.querySelectorAll(`${this.scope_selector}`);
        navigation.forEach(element => {
            element.insertBefore(nav, element.children[0]);
            element.appendChild(returnNav);
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
     * Seteo de opciones accesibles de uso general.
     */
    _accesibleExtras = () => {
        document
            .querySelectorAll(".js-poncho-map__help")
            .forEach(e => e.ariaLive = "polite");
    }


    /**
     * Agrega un summary para identificar el propósito del mapa
     * 
     * @summary Si el mapa no tiene un título que define su propósito, 
     * agregando summary se vincula el id del summary con el mapa.
     */
    _addSummary = () => {
        if(
            this.isEmptyObject(this.summary) || 
            this.isEmptyString(this.summary)){
            return;
        }
        
        let summary;
        let isObject = false;

        // Si es un string
        if(this.isString(this.summary)){
            summary = this.summary;
        } else if(
            this.isObject(this.summary) && 
            this.summary.hasOwnProperty("title")){
            isObject = true;
            summary = this.summary.title;
        }

        const selector = `.poncho-map${this.scope_selector}`;
        const element = document.querySelector(selector);
        if(!element){
            return;
        }

        const id = `summary_${this.map_selector}`;
        const elementParent = element.parentNode;

        if (element.ariaLabelledby !== id) {
            element.setAttribute("aria-labelledby", id);
        }

        // Creo el elemento
        const p = document.createElement("p");
        p.textContent = summary;
        p.id = id;
        p.classList.add("pm-summary");

        if(isObject){
            const {style, css, position="top", hidden=false} = this.summary;
            p.classList.add( ...this._setClassList(css) );
            this._setStyle(p, style);

            if(hidden){
                p.className = "pm-visually-hidden";
            }

            if(position == "bottom"){
                elementParent.insertBefore(p, element.nextSibling);
                return;
            }
        }

        elementParent.insertBefore(p, element);
    };


    /**
     * Asigna definciones de estilo a un objeto.
     * 
     * @param {*} values 
     * @returns {object}
     */
    _setStyle = (obj, values) => {
        if(!values){
            return;
        }

        if(!this.isObject(obj) || !obj instanceof HTMLElement){
            this.showAlert({
                title: "La función <code>_setStyle</code>, debe recibir un "
                    + "objeto <code>HTMLElement</code>.",
                terminal: [typeof obj, obj]
            }, "danger", true);
            return;
        }

        const regex = /([^;:]+)\s*\:\s*([^;:]+)/;
        if(
            this.isString(values) && 
            !(this.isEmptyString(values) || values.match(regex))){

            this.showAlert({
                title: "La función <code>_setStyle</code>, debe recibir un "
                    + "objeto del tipo clave/valor o una cadena de texto"
                    + " con una sintaxis CSS.",
                terminal: [typeof values, values]
            }, "danger", true);
            return;
        }

        // Si se pasa por parámetro un objeto, lo usa directamente.
        if(this.isObject(values) && !this.isEmptyObject(values)){
            for(const key in values){
                if (values.hasOwnProperty(key)) {
                    obj.style[key] = values[key];
                }
            }
            return;
        }

        // Si values es un string lo parseo
        var styles = {};
        for(let entry of values.split(";")){
            const m = regex.exec(entry);
            if(!m){
                continue;
            }
            const [,attribute, value] = m.map(ele => ele.trim());
            styles[attribute] = value;
        }

        return Object.assign(obj.style, styles);
    };


    /**
     * Hace el render del mapa.
     */
    render = () => {
        this._addSummary();

        this._hiddenSearchInput();
        this._resetViewButton();

        this._menuTheme();
        this._setThemes();
        
        this.tileLayer.addTo(this.map);
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
        this._accesibleExtras();

        this._setSliderSize();
        this.mapOpacity();
        this.mapBackgroundColor();

        this._listeners();
        this.layerViewConf.setVisuals();
        this.setMapAlignment(this.map_align);
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
            selector: ".poncho-map",
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

        const element = document.querySelector(
                `${this.selector}${this.scope_selector}`);
        const loader = document.createElement("span");
        loader.className = "loader";

        const cover = document.createElement('div');
        cover.dataset.scope = this.selector;
        cover.classList.add(
            "poncho-map__loader", 
            `js-poncho-map__loader${this.scope_sufix}`
        );
        // Background opacity
        Object.assign(cover.style, this.cover_style);
        if(this.cover_opacity){
            cover.style.backgroundColor = `color-mix(`
                + `in srgb, ` 
                + `transparent, `
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
 * @see https://github.com/argob/poncho/tree/master/src/js/poncho-map
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
            filters_info: false,
            filters_visible: false,
            messages: {
                has_filters: "filters_has",
                initial: "filter_initial",
                no_results: "filter_no_results",
                no_results_by_term: "filter_no_results_by_term",
                one_result: "filter_one_result",
                reset: "filter_reset_values_link",
                results: "filter_results"
            },
            search_fields: []
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
                aria_label: "filters_aria_label_reset",
                css: [`js-poncho-map-reset${this.scope_sufix}`],
                label: "filters_reset",
                link: "#"
            }
        ];

        // Si no hay filtros cargados remuevo el item del menú.
        if(this.filters.length > 0){
            this.accesible_menu_filter.push({
                label: "Ir al panel de filtros",
                link: `#filtrar-busqueda${this.scope_sufix}`
            });
        }
    }

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
            anchor: "#",
            filter_class: `js-close-filter${this.scope_sufix}`,
            reset_search: `js-poncho-map-reset${this.scope_sufix}`,
            term: this.inputSearchValue,
            total_entries: this.entries.length,
            total_filtered_entries: this.filtered_entries.length,
            total_results: results.length
        };

        help_container.forEach(element => {
            element.innerHTML = "";

            // Arma el listado de mensajes.
            const ul = document.createElement("ul");

            ul.classList.add("m-b-0", "list-unstyled");
            const li = content => {
                const item = document.createElement("li");
                item.ariaLive = "polite";
                item.innerHTML = content;
                item.tabIndex = 0;
                return item;
            };

            // Estado inicial. Totalidad de registros.
            if(values.total_entries === values.total_results){
                ul.appendChild(
                    li(this._t(this.messages.initial, values))
                );
            }
            // 0 entradas con criterio de búsqueda.
            else if(values.total_results < 1){
                ul.appendChild(
                    li(
                        this._t(this.messages.no_results_by_term, values)
                        + this._t(this.messages.reset, values)
                    )
                );
            }
            // 0 entradas, sin creterio de búsqueda.
            else if(this.inputSearchValue === "" && values.total_results < 1){
                ul.appendChild(
                    li(
                        this._t(this.messages.no_results, values)
                        + this._t(this.messages.reset, values)
                    )
                );
            }
            // Si solo hay un resultado
            else if(values.total_results == 1){
                ul.appendChild(
                    li(
                        this._t(this.messages.one_result, values)
                        + this._t(this.messages.reset, values)
                    )
                );
            }
            // Si hay más de un resultado
            else if(values.total_results > 1){
                ul.appendChild(
                    li(
                        this._t(this.messages.results, values) 
                        + this._t(this.messages.reset, values)
                    )
                );
            }
            // Si los resultados están siendo filtrados.
            // if(!this.usingFilters()){
            //     ul.appendChild(
            //         li(this._t(this.messages.has_filters, values))
            //     );
            // }
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
        const inner_padding = 55;
        const height = pos.offsetHeight - inner_padding;
        const filters = document.querySelector(`.js-filters${this.scope_sufix}`);
        filters.style.height = `${height}px`;
        filters.style.overflow = "auto";
    };


    /**
     * Ejecuta toggle en el onclick
     * @return {undefined}
     */
    _clickToggleFilter = () => {
        const selector = `.js-close-filter${this.scope_sufix}`;
        const filterElement = document.querySelectorAll(selector);
        
        return filterElement.forEach((element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault();

                this.toggleFilter();
                this._filterContainerHeight();
            });
        });

    };


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
        }).filter(Boolean);

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
            this.showAlert({
                    title: "Filters requiere el uso del atributo "
                        + "<code>field</code> o <code>fields</code>.",
                    terminal: fieldsItems
                },
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
        fields_container.classList.add("field-list", "m-b-05");

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
        // Accedo al contenedor
        const container = document.querySelector(
            `.poncho-map${this.scope_selector}`
        );

        // Icono
        const filter_icon = document.createElement("i");
        filter_icon.ariaHidden = "true";
        filter_icon.classList.add("pmi", "pmi-filter");

        const button = document.createElement("button");
        button.classList.add(
            "pm-btn",
            "pm-btn-rounded-circle",
            "pm-my-1",
            `js-close-filter${this.scope_sufix}`
        );
        button.id = `filtrar-busqueda${this.scope_sufix}`
        button.role = "button";
        button.ariaLabel = this._t("filters_aria_label_open_close_panel");
        button.title = this._t("filters_aria_label_open_close_panel");
        button.ariaControls = `poncho-map-filters${this.scope_sufix}`;

        const button_container = document.createElement("div");
        button_container.classList.add(
            `js-filter-container${this.scope_sufix}`,
            "filter-container"
        );

        button.appendChild(filter_icon);
        button_container.appendChild(button);
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
     * Retorna las medidas y la distancia de margen del control de 
     * zoom leaflet.
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
        // Icono para el botón 
        const icon = document.createElement("i");
        icon.classList.add("pmi", "pmi-close");
        icon.ariaHidden = "true";

        // Botón cerrar
        const closeButton = document.createElement("button");
        closeButton.classList.add(
            "btn", "btn-xs",
            "btn-secondary",
            "pm-btn-close",
            `js-close-filter${this.scope_sufix}`
        );
        closeButton.title = "Cerrar panel";
        closeButton.role = "button";
        closeButton.ariaLabel = this._t("filters_aria_label_close_panel");

        // Contenedor de los filtros
        const fields_container = document.createElement("div");
        fields_container.className = `js-filters${this.scope_sufix}`;

        // Formulario
        const form = document.createElement("form");
        form.classList.add(`js-formulario${this.scope_sufix}`);

        // Contenedor
        const container = document.createElement("div");
        container.classList.add(
            `js-poncho-map-filters${this.scope_sufix}`,
            "pm-container",
            "poncho-map-filters",
            "pm-caret", "pm-caret-t",
        );
        container.role = "region";
        container.ariaLive = "polite";
        container.ariaLabel = this._t("filters_aria_label_panel");
        container.id = `poncho-map-filters${this.scope_sufix}`;
        // Si está seteado que los filtros estén visibles.
        if(this.filters_visible){
            container.classList.add("filter--in");
        }

        // Posicion del panel
        // const cssVarComputedDistance = this._cssVarComputedDistance();
        const controlZoomSize = this._controlZoomSize();
        const styleTop = controlZoomSize.controlHeight
                + controlZoomSize.controlTop
                + "px";

        closeButton.appendChild(icon);
        form.appendChild(closeButton);
        form.appendChild(fields_container);
        container.appendChild(form);

        document
            .querySelectorAll(`.js-filter-container${this.scope_sufix}`)
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
        // container
        const checkAllItems = document.createElement("div");

        // Botón check all
        const checkAllButton = document.createElement("button");
        checkAllButton.classList.add(
            "js-select-items",
            "select-items__button"
        );
        checkAllButton.textContent = this._t("filters_check_all");
        checkAllButton.dataset.field = item.field[0];
        checkAllButton.dataset.value = "1";

        // Botón uncheck all
        const uncheckAllButton = document.createElement("button");
        uncheckAllButton.classList.add(
            "js-select-items",
            "select-items__button"
        );
        uncheckAllButton.textContent = this._t("filters_uncheck_all");
        uncheckAllButton.dataset.field = item.field[0];
        uncheckAllButton.dataset.value = "0";

        // Append
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
            legend.classList.add(
                "m-t-0",
                "m-b-05",
                "color-primary",
                "h6"
            );

            const fieldset = document.createElement("fieldset");
            fieldset.appendChild(legend);
            const hasCheckUncheckAll = item.hasOwnProperty("check_uncheck_all") &&
                                    item.check_uncheck_all &&
                                    item?.type !== "radio";

            if (hasCheckUncheckAll) {
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
            const selector = `${this.scope_selector}`
                    + ` [data-info="${field[4]}__${field[2]}__${field[3]}"]`;
            const element = document.querySelector(selector);
            const plurals = (field[1] < 2 ? "" : "s");

            const span = document.createElement("small");
            span.classList.add("badge", "m-l-05", "fw-medium", "bg-arg-enlace")
            span.innerHTML = `${field[1]}<span class="pm-visually-hidden"> `
                + `elemento${plurals}</span>`;

            const info_container = document.createElement("small");
            info_container.appendChild(span);
            element.appendChild(info_container);
        });
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
        const found = search_for.filter(Boolean).some(e => {
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
     * @param {object} fieldsGroup 
     * @return {boolean}
     */
    _validateGroup = (entry, fieldsGroup) => {
        const result = fieldsGroup.map(e => this._search(entry, e[0], e[1]));
        return result.some(e => e);
    };


    /**
     * Valida una entrada
     * 
     * @summary
     * 1. Obtengo la cantidad de grupos que tengo.
     * 2. Evaluo los fields de cada grupo y junto los resultados en un array
     * para retornar true los grupos tienen que dar true
     * @returns {boolean}
     */
    _validateEntry = (entry, formFilters) => {
        const fieldsGroup = (group) => formFilters.filter(e => e[0] == group);
        const totalGroups = this.filters.length;

        if(totalGroups < 1){
            return true;
        }

        const validations = Array.from( {length: totalGroups}, (_, i) => {
            return this._validateGroup(entry, fieldsGroup(i));
        }).reduce((acc, val) => acc && val, true);

        return validations;
    };


    /**
     * Filtra los markers.
     */ 
    _filterData = () => {
        // 1. Obtengo los filtros del formulario acivos.
        const availableFilters = this.formFilters();
        const hasInputSearchValue = !this.isEmptyString(this.inputSearchValue);
        const refactorSearchTerm = (hasInputSearchValue
            ? replaceSpecialChars(this.inputSearchValue).toUpperCase()
            : "");

        // 2. Filtro las entradas en en función de los filtros activos y el 
        // criterio de búsqueda, si existiera. 
        let activeFiltersEntries = this.entries.filter(entry => {
                // Valido si la entrada se encuentra dentro de los criterios
                // del grupo o filtros
                let filteredEntry = this._validateEntry(
                    entry.properties,
                    availableFilters
                );

                // Si, en el input search se agregó un término, 
                // filtro también por eso.
                let filterSearchEntry = true;
                if(this.inputSearchValue){
                    const searchFields = new Set(
                        [...[this.title], ...this.search_fields]
                    );

                    // Busco en la entrada si matchea con el término en el
                    // search input
                    let searchResult = this.searchEntry(
                        refactorSearchTerm,
                        entry.properties,
                        searchFields
                    );
                    filterSearchEntry = searchResult || false;
                }

                return [filteredEntry, filterSearchEntry].every(Boolean);
        });

        this.filtered_entries = activeFiltersEntries;
        return activeFiltersEntries;
    };


    /**
     * Render de funciones 
     */ 
    _filteredData = (feed) => {
        feed = (typeof feed !== "undefined" ? this.entries : 
                this._filterData());

        const clonedFeed = [...feed];
        this.markersMap(clonedFeed); 

        this._selectedMarker();
        this._helpText(clonedFeed);
        // this._resetSearch();
        // this._clickToggleFilter();
        
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
        document.addEventListener("click", (event) => {
            const target = event.target;

            if(target.matches(`.js-poncho-map-reset${this.scope_sufix}`)){
                event.preventDefault();
                event.stopPropagation();

                this.removeHash();

                try {
                    // Obtengo el elemento text hidden con el valor de la 
                    // búsqueda. En este está impreso el dataset scope de
                    // ponchoSearch.
                    const searchHiddenInputSelector = `#js-search-input${this.scope_sufix}`;
                    const searchHiddenInput = document.querySelector(
                        searchHiddenInputSelector);
                    if(!searchHiddenInput){
                        return;
                    }

                    // Obtengo el input de búsqueda y borro el value.
                    const searchScope = searchHiddenInput.dataset.searchScope;
                    const searchSelector = `#id-poncho-map-search--${searchScope}`;
                    const searchInput = document.querySelector(searchSelector);
                    if(searchInput){
                        searchInput.value = "";
                    }
                } catch (error) {
                    console.error(error);
                }

                try {
                    this._resetFormFilters();
                } catch (error) {
                    console.error(error);
                }
                try {
                    this._filteredData(this.entries);
                } catch (error) {
                    console.error(error);
                }
                try {
                    this._clearSearchInput();
                } catch (error) {
                    console.error(error);
                }
                try {
                    this.resetView();
                } catch (error) {
                    console.error(error);
                }
            }
        });
    };


    /**
     * Cambia la lista de markers en función de la selección de 
     * los filtros en PonchoMapFilter.
     * @TODO Ver el modo de hacer focus sobre el scope
     * @param {Function} callback - La función a ejecutar cuando el valor 
     * del filtro cambie.
     * @returns {undefined}
     */
    filterChange(callback) {
        // Asegura que callback es una función antes de proceder
        if (typeof callback !== 'function') {
            console.error('filterChange requiere una función de callback.');
            return;
        }

        const selector = `.js-filters${this.scope_sufix || ''}`;
        const filterSelects = document.querySelectorAll(selector);
        filterSelects.forEach(element => {
            element.onchange = callback;
        });
    }


    /**
     * Marca o desmarca todos los filtros
     * 
     * @returns {undefined}
     */
    checkUncheckFilters = () => {
        const buttonsSelector = `${this.scope_selector} .js-select-items`;
        const buttons = document.querySelectorAll(buttonsSelector);

        buttons.forEach((element) => {
            element.addEventListener("click", (event) => {
                event.preventDefault();

                const field = element.dataset.field;
                const value = element.dataset.value;

                const inputsSelector = `${this.scope_selector} [id^=id__${field}]`;
                const inputs = document.querySelectorAll(inputsSelector);
                
                const elementValue = parseInt(value, 10);
                inputs.forEach(input => input.checked = (elementValue === 1));
                
                this._filteredData();
                
            });
        });
    };


    /**
     * imprime el mapa
     */ 
    render = () =>{
        this._addSummary();

        this._hiddenSearchInput();
        this._resetViewButton(); 

        this._menuTheme();
        this._setThemes();

        if(this.filters.length > 0){
            this._filterButton();
            this._filterContainer();
            this._createFilters(this.filters);
        }

        this.tileLayer.addTo(this.map);

        this._filteredData();
        this.filterChange((event) => {
            event.preventDefault();
            this._filteredData();
        });
        this.checkUncheckFilters();

        this._totalsInfo();
        if(this.scroll && this.hasHash()){
            this.scrollCenter();
        }
        
        setTimeout(this.gotoHashedEntry, this.anchor_delay);
        if(this.filters_visible){
            this._filterContainerHeight();
        }
        
        this._setSliderSize();
        this.mapOpacity();
        this.mapBackgroundColor();

        this._listeners();
        this._accesibleExtras();
        
        this.layerViewConf.setVisuals();
        this.setMapAlignment(this.map_align);
        this._resetSearch();
        this._clickToggleFilter();
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
            "placeholder": "search_placeholder",
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
        this.instance.accesible_menu_search = [];

        if(this.isSearch()){
            this.instance.accesible_menu_search.push({
                label: "search_data",
                link: `#id-poncho-map-search${this.scope_sufix}`
            });
        }
    };


    /**
     * Vefifica si está habilitado para hacer búsquedas.
     * @returns 
     */
    isSearch = () => (document.querySelector(this.search_scope_selector) ? 
            true : false);


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

        const inputSelector = `${this.search_scope_selector} `
                + `.js-poncho-map-search__input`;
        const input = document.querySelector(inputSelector);
        if(input){
            input.id = `id-poncho-map-search${this.scope_sufix}`;
        }

        const submitSelector = `${this.search_scope_selector} `
                + `.js-poncho-map-search__submit`;
        const submit = document.querySelector(submitSelector);

        if(submit){
            submit.addEventListener("click", (event) => {
                event.preventDefault();
        
                const eleSelector = `#js-search-input${this.instance.scope_sufix}`;
                const element = document.querySelector(eleSelector);

                if(element){
                    element.value = input.value;
                    const term = input.value;
                    this._renderSearch(term);
                }
            });
        }
    };


    /**
     * Búsca un término en el mapa.
     * 
     * @param {string} term - Término a buscar.
     * @returns {undefined}
     */
    searchTerm = (term) => {

        if(this.instance.isEmptyString(term)){
            console.error(
                "searchTerm", 
                "El término de búsqueda no puede estar vacío.");
            return;
        }
        
        const hiddenInputselector = `#js-search-input${this.instance.scope_sufix}`;
        const filterValue = document.querySelectorAll(hiddenInputselector);
        filterValue.forEach(element => element.value = term);
        
        const searchInputSelector = `#id-poncho-map-search${this.scope_sufix}`;
        const searchInput = document.querySelectorAll(searchInputSelector);
        searchInput.forEach(element => element.value = term);

        this.instance._resetSearch();
        this._renderSearch(term);
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
            filter_search_input.dataset.searchScope = this.scope;  
            
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
            .forEach(element => element.placeholder = this.instance._t(this.placeholder));
    };

    /**
     * Hace una búsqueda basado en el término escrito en el input de
     * búsqueda.
     * @returns {undefined}
     */
    _renderSearch = (term) => {
        if(this.instance.isEmptyString(term)){
            console.error(
                "_renderSearch", 
                "El término de búsqueda no puede estar vacío.");
            return;
        }

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
        // this.instance.resetView();
        
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
        // this.instance._clickToggleFilter();
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
const ponchoMapProvinceMergeData = (geoProvinces={}, entries=[],
                                    provinceIndex="provincia") => {

    if (!geoProvinces || !geoProvinces.hasOwnProperty("features")) {
        throw new Error(
            "Formato de datos inválido."
        );
    }

    const entriesMap = new Map();
    entries.forEach(entry => {
        if (entry && entry[provinceIndex]) {
            const entryTerm = slugify(entry[provinceIndex]);
            entriesMap.set(entryTerm, entry);
        }
    });

    const newFeatures = [];

    geoProvinces.features.forEach(feature => {
        if (!feature.properties || 
            (!feature.properties.fna && !feature.properties.nam)) {
            return;
        }

        // Nombre de provincia antecedidos por: "Provincia de", 
        // ej. "Provincia de Buenos Aires" 
        const fnaTerm = (feature.properties.fna ? 
                slugify(feature.properties.fna) : null);
        // Nombre de provincia, ej. "Buenos Aires" 
        const namTerm = (feature.properties.nam ? 
                slugify(feature.properties.nam) : null);

        // Búsqueda en el Mapa
        let jsonEntry = null;
        if (fnaTerm && entriesMap.has(fnaTerm)) {
            jsonEntry = entriesMap.get(fnaTerm);
        } else if (namTerm && entriesMap.has(namTerm)) {
            jsonEntry = entriesMap.get(namTerm);
        }

        // Si no existe la provincia en el JSON, y tiene un nombre, lo descartamos
        if (!jsonEntry && (feature.properties.fna || feature.properties.nam)) {
            return;
        }

        if (jsonEntry) {
            // definido un key _color_, usa el color en el fill.
            if (jsonEntry.color && !feature.properties["pm-type"]) {
                feature.properties.stroke = ponchoColor(jsonEntry.color);
            }
            
            // Remuevo la propiedad interactive del json para que no se interponga
            const entryToMerge = {...jsonEntry};
            if (feature.properties["pm-interactive"] === "n" && 
                entryToMerge["pm-interactive"] !== "n") {
                delete entryToMerge["pm-interactive"];
            }
            Object.assign(feature.properties, entryToMerge);
        }

        newFeatures.push(feature);
    });

    geoProvinces.features = newFeatures;
    
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
    
    const classToRemove = [
        "poncho-map-province__toggle-map",
        "poncho-map-province__toggle-element"
    ];

    const selector = classToRemove.map(cls => `.${cls}`).join(",");
    document.querySelectorAll(selector).forEach(ele => {
        ele.classList.remove(...classToRemove);
    });
};


class PonchoMapProvinces extends PonchoMapFilter {
    constructor(geoProvinces, entries, options){

        const defaultOptions = {
            map_align: "left",
            slider_size: "default",
            fit_bounds: true,
            hide_select: false,
            initial_entry: false,
            map_init_options: {
                boxZoom: false,
                doubleClickZoom: false,
                scrollWheelZoom: false,
                zoomControl: true,
                zoomSnap: 0.1,
            },
            map_layers: false,
            map_view:[-40.47815508388363, -62.802101128049806],
            map_zoom: 4.4,
            overlay_image: true,
            overlay_image_bounds: [
                [ -20.70565857951651, -24.50543849552044 ],
                [ -88.20759652502107, -74.4619171280653 ]
            ],
            overlay_image_opacity: 0.8,
            overlay_image_url: 
                "/profiles/argentinagobar/themes/contrib/poncho/img/map-shadow-antartida.png",
            province_index: "provincia",
            random_entry: false,
            slider: true,
            toggle_select: true,
            tooltip: true,
            tooltip_options: {
                className: "leaflet-tooltip-own",
                direction: "auto",
                offset: [0, -3],
                opacity: 1,
                permanent: false,
                sticky: true,
            },
        };
        // Merge options
        let opts = Object.assign({}, defaultOptions, options);
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
        }).filter(Boolean);

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
        if(!this.overlayImageUrl){
            return;
        }

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


