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
const ponchoColorDefinitionsList = [
    {
        name: "www.argentina.gob.ar",
        space: "arg",
        hidden_space: false,
        description: "",
        data: [
            {
                scope: "arg",
                name: "Azul principal",
                group: "primary",
                color: {
                    900: "#232D4F",
                    800: "#2C3C5F",
                    700: "#354B6E",
                    600: "#3E5A7E",
                    500: "#5A7290",
                    400: "#7589A3",
                    300: "#91A1B5",
                    200: "#ACB8C8",
                    100: "#C8D0DA",
                    50: "#E3E7ED",
                },
                instance: [
                    {
                        name: "Azul",
                        code: "arg-azul",
                        description: "Color principal",
                        scope: "arg",
                        related_color: "900",
                        parent_group: "primary",
                        color: "#232D4F",
                        variant: {
                            half: "#9296A7",
                        },
                        alias: [
                            {
                                code: "arg-azul",
                                exclude: false,
                            },
                            {
                                code: "primary",
                                exclude: true,
                            },
                            {
                                code: "azul",
                                exclude: true,
                            },
                            {
                                code: "azul-marino",
                                exclude: true,
                            },
                            {
                                code: "primary-alt",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Secundario",
                        code: "arg-secundario",
                        description: "",
                        scope: "arg",
                        related_color: "600",
                        parent_group: "primary",
                        color: "#3E5A7E",
                        variant: {},
                        alias: [
                            {
                                code: "arg-secundario",
                                exclude: false,
                            },
                            {
                                code: "secondary",
                                exclude: true,
                            },
                            {
                                code: "secundario",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Primary light",
                        code: "arg-primary-light",
                        description: "",
                        scope: "arg",
                        related_color: "50",
                        parent_group: "primary",
                        color: "#E3E7ED",
                        variant: {},
                        alias: [
                            {
                                code: "arg-primary-light",
                                exclude: false,
                            },
                            {
                                code: "primary-light",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Info",
                        code: "arg-info",
                        description: "",
                        scope: "arg",
                        related_color: "500",
                        parent_group: "primary",
                        color: "#5A7290",
                        variant: {},
                        alias: [
                            {
                                code: "arg-info",
                                exclude: false,
                            },
                            {
                                code: "info",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Verde",
                group: "verde",
                color: {
                    50: "#F1F5D7",
                    100: "#DEE8A3",
                    200: "#CCDB6E",
                    300: "#B9CE39",
                    400: "#93B727",
                    500: "#6EA015",
                    600: "#4E8F24",
                    700: "#2E7D33",
                    800: "#27692A",
                    900: "#1F5421",
                },
                instance: [
                    {
                        name: "Verde",
                        code: "arg-verde",
                        description: "",
                        scope: "arg",
                        related_color: "700",
                        parent_group: "verde",
                        color: "#2E7D33",
                        variant: {
                            light: "#6EA015",
                            half: "#96BE99",
                            dark: "#1F5421",
                        },
                        alias: [
                            {
                                code: "arg-verde",
                                exclude: false,
                            },
                            {
                                code: "success",
                                exclude: true,
                            },
                            {
                                code: "verde",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Verdín",
                        code: "arg-verdin",
                        description: "",
                        scope: "arg",
                        related_color: "500",
                        parent_group: "verde",
                        color: "#6EA015",
                        variant: {
                            light: "#B9CE39",
                            dark: "#2E7D33",
                        },
                        alias: [
                            {
                                code: "arg-verdin",
                                exclude: false,
                            },
                            {
                                code: "verdin",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Lima",
                        code: "arg-lima",
                        description: "",
                        scope: "arg",
                        related_color: "300",
                        parent_group: "verde",
                        color: "#B9CE39",
                        variant: {
                            light: "#DEE8A3",
                            dark: "#6EA015",
                        },
                        alias: [
                            {
                                code: "arg-lima",
                                exclude: false,
                            },
                            {
                                code: "limon",
                                exclude: true,
                            },
                            {
                                code: "lima",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Amarillo",
                group: "amarillo",
                color: {
                    50: "#FFFAE8",
                    100: "#FFF1C0",
                    200: "#FFE997",
                    300: "#FFE06E",
                    400: "#FFD745",
                    500: "#FFCE1C",
                    600: "#D8AE18",
                    700: "#B18F15",
                    800: "#8A6F12",
                    900: "#634F0E",
                },
                instance: [
                    {
                        name: "Maíz",
                        code: "arg-maiz",
                        description: "",
                        scope: "arg",
                        related_color: "500",
                        parent_group: "amarillo",
                        color: "#FFCE1C",
                        variant: {
                            light: "#FFE997",
                            dark: "#B18F15",
                        },
                        alias: [
                            {
                                code: "arg-maiz",
                                exclude: false,
                            },
                            {
                                code: "maiz",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Fucsia",
                group: "fucsia",
                color: {
                    50: "#FCDDE6",
                    100: "#F8B6C9",
                    200: "#F48EAB",
                    300: "#F16798",
                    400: "#ED3F85",
                    500: "#EC407A",
                    600: "#D72C6B",
                    700: "#C2185B",
                    800: "#9A144A",
                    900: "#721038",
                },
                instance: [
                    {
                        name: "Arándano",
                        code: "arg-arandano",
                        description: "",
                        scope: "arg",
                        related_color: "700",
                        parent_group: "fucsia",
                        color: "#C2185B",
                        variant: {
                            light: "#EC407A",
                            dark: "#721038",
                            half: "#E18CAD",
                        },
                        alias: [
                            {
                                code: "arg-arandano",
                                exclude: false,
                            },
                            {
                                code: "arandano",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Fucsia",
                        code: "arg-fucsia",
                        description: "",
                        scope: "arg",
                        related_color: "500",
                        parent_group: "fucsia",
                        color: "#EC407A",
                        variant: {
                            light: "#F16798",
                            dark: "#9A144A",
                        },
                        alias: [
                            {
                                code: "arg-fucsia",
                                exclude: false,
                            },
                            {
                                code: "cereza",
                                exclude: true,
                            },
                            {
                                code: "fucsia",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Rosado",
                        code: "arg-rosado",
                        description: "",
                        scope: "arg",
                        related_color: "200",
                        parent_group: "fucsia",
                        color: "#F48EAB",
                        variant: {
                            light: "#FCDDE6",
                            dark: "#ED3F85",
                            half: "#FAC7D5",
                        },
                        alias: [
                            {
                                code: "arg-rosado",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Violeta",
                group: "violeta",
                color: {
                    50: "#E9E6F2",
                    100: "#D3CEE5",
                    200: "#BEB5D8",
                    300: "#A89DCB",
                    400: "#9284BE",
                    500: "#8561B2",
                    700: "#6A1B99",
                    800: "#4B0F7A",
                    900: "#2C035C",
                    600: "#773EA5",
                },
                instance: [
                    {
                        name: "Lavanda",
                        code: "arg-lavanda",
                        description: "",
                        scope: "arg",
                        related_color: "400",
                        parent_group: "violeta",
                        color: "#9284BE",
                        variant: {},
                        alias: [
                            {
                                code: "arg-lavanda",
                                exclude: false,
                            },
                            {
                                code: "lavanda",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Uva",
                        code: "arg-uva",
                        description: "",
                        scope: "arg",
                        related_color: "700",
                        parent_group: "violeta",
                        color: "#6A1B99",
                        variant: {},
                        alias: [
                            {
                                code: "arg-uva",
                                exclude: false,
                            },
                            {
                                code: "uva",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Negro",
                group: "negro",
                color: {
                    50: "#F0F0F0",
                    100: "#E9E9E9",
                    200: "#DDDDDD",
                    300: "#838383",
                    150: "#DEE2E6",
                    75: "#F2F2F2",
                    500: "#555555",
                    600: "#444444",
                    900: "#141414",
                    25: "#FFFFFF",
                },
                instance: [
                    {
                        name: "Negro",
                        code: "arg-negro",
                        description: "Elementos básicos",
                        scope: "arg",
                        related_color: "900",
                        parent_group: "negro",
                        color: "#141414",
                        variant: {},
                        alias: [
                            {
                                code: "arg-negro",
                                exclude: false,
                            },
                            {
                                code: "negro",
                                exclude: true,
                            },
                            {
                                code: "black",
                                exclude: true,
                            },
                            {
                                code: "gray-base",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Default",
                        code: "arg-default",
                        description: "",
                        scope: "arg",
                        related_color: "300",
                        parent_group: "negro",
                        color: "#838383",
                        variant: {},
                        alias: [
                            {
                                code: "arg-default",
                                exclude: false,
                            },
                            {
                                code: "default",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Gray light",
                        code: "arg-gray-light",
                        description: "",
                        scope: "arg",
                        related_color: "200",
                        parent_group: "negro",
                        color: "#DDDDDD",
                        variant: {},
                        alias: [
                            {
                                code: "arg-gray-light",
                                exclude: false,
                            },
                            {
                                code: "gray-light",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Gray hover",
                        code: "arg-gray-hover",
                        description: "",
                        scope: "arg",
                        related_color: "100",
                        parent_group: "negro",
                        color: "#E9E9E9",
                        variant: {},
                        alias: [
                            {
                                code: "arg-gray-hover",
                                exclude: false,
                            },
                            {
                                code: "gray-hover",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Gray hover light",
                        code: "arg-gray-hover-light",
                        description: "",
                        scope: "arg",
                        related_color: "50",
                        parent_group: "negro",
                        color: "#F0F0F0",
                        variant: {},
                        alias: [
                            {
                                code: "arg-gray-hover-light",
                                exclude: false,
                            },
                            {
                                code: "gray-hover-light",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Gris intermedio",
                        code: "arg-gris-intermedio",
                        description: "",
                        scope: "arg",
                        related_color: "500",
                        parent_group: "negro",
                        color: "#555555",
                        variant: {},
                        alias: [
                            {
                                code: "arg-gris-intermedio",
                                exclude: false,
                            },
                            {
                                code: "gray",
                                exclude: true,
                            },
                            {
                                code: "grisintermedio",
                                exclude: true,
                            },
                            {
                                code: "gris-area",
                                exclude: true,
                            },
                            {
                                code: "gris",
                                exclude: false,
                            },
                        ],
                    },
                    {
                        name: "Gray dark",
                        code: "arg-gray-dark",
                        description: "",
                        scope: "arg",
                        related_color: "600",
                        parent_group: "negro",
                        color: "#444444",
                        variant: {},
                        alias: [
                            {
                                code: "arg-gray-dark",
                                exclude: false,
                            },
                            {
                                code: "gray-dark",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Gray border",
                        code: "arg-gray-border",
                        description: "",
                        scope: "arg",
                        related_color: "150",
                        parent_group: "negro",
                        color: "#DEE2E6",
                        variant: {},
                        alias: [
                            {
                                code: "arg-gray-border",
                                exclude: false,
                            },
                            {
                                code: "gray-border",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Gris niebla",
                        code: "arg-gris-niebla",
                        description: "",
                        scope: "arg",
                        related_color: "75",
                        parent_group: "negro",
                        color: "#F2F2F2",
                        variant: {},
                        alias: [
                            {
                                code: "arg-gris-niebla",
                                exclude: false,
                            },
                            {
                                code: "gray-lighter",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Gray background",
                        code: "arg-gray-background",
                        description: "",
                        scope: "arg",
                        related_color: "25",
                        parent_group: "negro",
                        color: "#FFFFFF",
                        variant: {},
                        alias: [
                            {
                                code: "arg-gray-background",
                                exclude: false,
                            },
                            {
                                code: "gray-background",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Turquesa",
                group: "turquesa",
                color: {
                    50: "#DCF1F0",
                    100: "#C0E5E3",
                    200: "#A4D9D7",
                    300: "#88CECB",
                    400: "#6CC3BE",
                    500: "#50B7B2",
                    600: "#459E99",
                    700: "#3B8681",
                    800: "#306D69",
                    900: "#255450",
                },
                instance: [
                    {
                        name: "Palta",
                        code: "arg-palta",
                        description: "",
                        scope: "arg",
                        related_color: "500",
                        parent_group: "turquesa",
                        color: "#50B7B2",
                        variant: {
                            half: "#A8DBD9",
                        },
                        alias: [
                            {
                                code: "arg-palta",
                                exclude: false,
                            },
                            {
                                code: "palta",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Verde azulado",
                        code: "arg-verde-azulado",
                        description: "",
                        scope: "arg",
                        related_color: "700",
                        parent_group: "turquesa",
                        color: "#3B8681",
                        variant: {},
                        alias: [
                            {
                                code: "arg-verde-azulado",
                                exclude: false,
                            },
                            {
                                code: "verde-azulado",
                                exclude: true,
                            },
                            {
                                code: "verdeazulado",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Azul",
                group: "azul",
                color: {
                    50: "#CDEBFA",
                    100: "#9AD7F5",
                    200: "#68C3EF",
                    300: "#35AFEA",
                    400: "#039BE5",
                    500: "#0581C6",
                    600: "#0767A7",
                    700: "#084E87",
                    800: "#0A3468",
                    900: "#0C1A49",
                },
                instance: [
                    {
                        name: "Cielo",
                        code: "arg-cielo",
                        description: "",
                        scope: "arg",
                        related_color: "400",
                        parent_group: "azul",
                        color: "#039BE5",
                        variant: {},
                        alias: [
                            {
                                code: "arg-cielo",
                                exclude: false,
                            },
                            {
                                code: "cielo",
                                exclude: true,
                            },
                            {
                                code: "celeste",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Escarapela",
                        code: "arg-escarapela",
                        description: "",
                        scope: "arg",
                        related_color: "200",
                        parent_group: "azul",
                        color: "#68C3EF",
                        variant: {},
                        alias: [
                            {
                                code: "arg-escarapela",
                                exclude: false,
                            },
                            {
                                code: "escarapela",
                                exclude: true,
                            },
                            {
                                code: "celesteargentina",
                                exclude: true,
                            },
                            {
                                code: "celeste-argentina",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Rojo",
                group: "rojo",
                color: {
                    50: "#FCDDDC",
                    100: "#F9BBB9",
                    200: "#F69896",
                    300: "#F27673",
                    400: "#EF5350",
                    500: "#E14543",
                    600: "#D43635",
                    700: "#C62828",
                    800: "#A12222",
                    900: "#7C1C1C",
                },
                instance: [
                    {
                        name: "Rojo",
                        code: "arg-rojo",
                        description: "Atención o peligro",
                        scope: "arg",
                        related_color: "700",
                        parent_group: "rojo",
                        color: "#C62828",
                        variant: {
                            light: "#E14543",
                            dark: "#7C1C1C",
                        },
                        alias: [
                            {
                                code: "arg-rojo",
                                exclude: false,
                            },
                            {
                                code: "danger",
                                exclude: true,
                            },
                            {
                                code: "rojo",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Tomate",
                        code: "arg-tomate",
                        description: "",
                        scope: "arg",
                        related_color: "400",
                        parent_group: "rojo",
                        color: "#EF5350",
                        variant: {
                            light: "#F69896",
                            dark: "#C62828",
                        },
                        alias: [
                            {
                                code: "arg-tomate",
                                exclude: false,
                            },
                            {
                                code: "complementary",
                                exclude: true,
                            },
                            {
                                code: "tomate",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Naranja",
                group: "naranja",
                color: {
                    50: "#FDE7BF",
                    100: "#FBCE80",
                    200: "#F9B640",
                    300: "#F79D00",
                    400: "#F38500",
                    500: "#EF6C00",
                    600: "#CE5701",
                    700: "#AE4203",
                    800: "#8D2D04",
                    900: "#6C1805",
                },
                instance: [
                    {
                        name: "Marrón claro",
                        code: "arg-marron-claro",
                        description: "",
                        scope: "arg",
                        related_color: "800",
                        parent_group: "naranja",
                        color: "#8D2D04",
                        variant: {
                            light: "#CE5701",
                            dark: "#6C1805",
                        },
                        alias: [
                            {
                                code: "arg-marron-claro",
                                exclude: false,
                            },
                            {
                                code: "marron-claro",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Naranja",
                        code: "arg-naranja",
                        description: "",
                        scope: "arg",
                        related_color: "500",
                        parent_group: "naranja",
                        color: "#EF6C00",
                        variant: {
                            light: "#EF6C00",
                            dark: "#6C1805",
                        },
                        alias: [
                            {
                                code: "arg-naranja",
                                exclude: false,
                            },
                            {
                                code: "naranjaoscuro",
                                exclude: true,
                            },
                            {
                                code: "naranja",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Mandarina",
                        code: "arg-mandarina",
                        description: "",
                        scope: "arg",
                        related_color: "300",
                        parent_group: "naranja",
                        color: "#F79D00",
                        variant: {
                            light: "#FBCE80",
                            dark: "#CE5701",
                        },
                        alias: [
                            {
                                code: "arg-mandarina",
                                exclude: false,
                            },
                            {
                                code: "mandarina",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Blanco",
                group: "blanco",
                color: {
                    150: "#FFFFFF",
                },
                instance: [
                    {
                        name: "Blanco",
                        code: "arg-white",
                        description: "",
                        scope: "arg",
                        related_color: "150",
                        parent_group: "blanco",
                        color: "#FFFFFF",
                        variant: {},
                        alias: [
                            {
                                code: "arg-white",
                                exclude: false,
                            },
                            {
                                code: "white",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Ocre",
                group: "ocre",
                color: {
                    50: "#FAF8ED",
                    100: "#F4F0DB",
                    200: "#EAE1B7",
                    300: "#E9CE8C",
                    400: "#E7BA61",
                    500: "#C98941",
                    600: "#AA5821",
                    700: "#8C2701",
                    800: "#6F2001",
                    900: "#511901",
                },
                instance: [
                    {
                        name: "Arena",
                        code: "arg-arena",
                        description: "",
                        scope: "arg",
                        related_color: "200",
                        parent_group: "ocre",
                        color: "#EAE1B7",
                        variant: {
                            light: "#FAF8ED",
                            dark: "#E7BA61",
                            half: "#F5F0DB",
                        },
                        alias: [
                            {
                                code: "arg-arena",
                                exclude: false,
                            },
                        ],
                    },
                    {
                        name: "Amarillo",
                        code: "arg-amarillo",
                        description: "Foco o alerta",
                        scope: "arg",
                        related_color: "400",
                        parent_group: "ocre",
                        color: "#E7BA61",
                        variant: {
                            light: "#EAE1B7",
                            dark: "#AA5821",
                            half: "#F3DDB0",
                        },
                        alias: [
                            {
                                code: "arg-amarillo",
                                exclude: false,
                            },
                            {
                                code: "warning",
                                exclude: true,
                            },
                            {
                                code: "amarillo",
                                exclude: true,
                            },
                            {
                                code: "amarillo-intenso",
                                exclude: true,
                            },
                        ],
                    },
                    {
                        name: "Marrón oscuro",
                        code: "arg-marron-oscuro",
                        description: "",
                        scope: "arg",
                        related_color: "900",
                        parent_group: "ocre",
                        color: "#511901",
                        variant: {},
                        alias: [
                            {
                                code: "arg-marron-oscuro",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "arg",
                name: "Morado",
                group: "morado",
                color: {
                    150: "#3A3796",
                },
                instance: [
                    {
                        name: "Azul morado",
                        code: "arg-azul-morado",
                        description: "",
                        scope: "arg",
                        related_color: "150",
                        parent_group: "morado",
                        color: "#3A3796",
                        variant: {},
                        alias: [
                            {
                                code: "arg-azul-morado",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "MiArgentina",
        space: "miarg",
        hidden_space: false,
        description: "",
        data: [
            {
                scope: "miarg",
                name: "Azul MiArgentina",
                group: "azul",
                color: {
                    150: "#3526C3",
                },
                instance: [
                    {
                        name: "Azul MiArgentina",
                        code: "miarg-azul",
                        description:
                            "Azul principal para aplicaciones MiArgentina",
                        scope: "miarg",
                        related_color: "150",
                        parent_group: "azul",
                        color: "#3526C3",
                        variant: {
                            half: "#6B66CC",
                        },
                        alias: [
                            {
                                code: "miarg-azul",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "miarg",
                name: "Celeste MiArgentina",
                group: "celeste",
                color: {
                    150: "#2CB9EE",
                },
                instance: [
                    {
                        name: "Celeste MiArgentina",
                        code: "miarg-celeste",
                        description: "",
                        scope: "miarg",
                        related_color: "150",
                        parent_group: "celeste",
                        color: "#2CB9EE",
                        variant: {},
                        alias: [
                            {
                                code: "miarg-celeste",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "miarg",
                name: "Amarillo claro MiArgentina",
                group: "amarillo-claro",
                color: {
                    150: "#ffe9b8",
                },
                instance: [
                    {
                        name: "Amarillo claro MiArgentina",
                        code: "miarg-amarillo-claro",
                        description: "",
                        scope: "miarg",
                        related_color: "150",
                        parent_group: "amarillo-claro",
                        color: "#ffe9b8",
                        variant: {},
                        alias: [
                            {
                                code: "miarg-amarillo-claro",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "miarg",
                name: "Rosa claro MiArgentina",
                group: "rosa-claro",
                color: {
                    150: "#EECCCF",
                },
                instance: [
                    {
                        name: "Rosa claro MiArgentina",
                        code: "miarg-rosa-claro",
                        description: "",
                        scope: "miarg",
                        related_color: "150",
                        parent_group: "rosa-claro",
                        color: "#EECCCF",
                        variant: {},
                        alias: [
                            {
                                code: "miarg-rosa-claro",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "miarg",
                name: "Verde claro MiArgentina",
                group: "verde-claro",
                color: {
                    150: "#CFEEDC",
                },
                instance: [
                    {
                        name: "Verde claro MiArgentina",
                        code: "miarg-verde-claro",
                        description: "",
                        scope: "miarg",
                        related_color: "150",
                        parent_group: "verde-claro",
                        color: "#CFEEDC",
                        variant: {},
                        alias: [
                            {
                                code: "miarg-verde-claro",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "miarg",
                name: "Azul oscuro MiArgentina",
                group: "azul-oscuro",
                color: {
                    150: "#222C50",
                },
                instance: [
                    {
                        name: "Azul oscuro MiArgentina",
                        code: "miarg-oscuro",
                        description: "",
                        scope: "miarg",
                        related_color: "150",
                        parent_group: "azul-oscuro",
                        color: "#222C50",
                        variant: {},
                        alias: [
                            {
                                code: "miarg-oscuro",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "miarg",
                name: "Gris MiArgentina",
                group: "gris",
                color: {
                    150: "#7E848E",
                },
                instance: [
                    {
                        name: "Gris MiArgentina",
                        code: "miarg-gris",
                        description: "",
                        scope: "miarg",
                        related_color: "150",
                        parent_group: "gris",
                        color: "#7E848E",
                        variant: {},
                        alias: [
                            {
                                code: "miarg-gris",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "miarg",
                name: "Celeste claro MiArgentina",
                group: "celeste-claro",
                color: {
                    150: "#BEE6F6",
                },
                instance: [
                    {
                        name: "Celeste claro MiArgentina",
                        code: "miarg-celeste-claro",
                        description: "",
                        scope: "miarg",
                        related_color: "150",
                        parent_group: "celeste-claro",
                        color: "#BEE6F6",
                        variant: {},
                        alias: [
                            {
                                code: "miarg-celeste-claro",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Colores de la bandera de la República Argentina",
        space: "bandera",
        hidden_space: false,
        description:
            'De acuerdo al \u003Ca href="https://www.argentina.gob.ar/normativa/nacional/decreto-1650-2010-175328"\u003EDecreto  1650/2010\u003C/a\u003E, que establece las medidas, características de la tela, colores y accesorios de la Bandera Argentina.',
        data: [
            {
                scope: "bandera",
                name: "Amarillo",
                group: "amarillo",
                color: {
                    150: "#FCBF49",
                },
                instance: [
                    {
                        name: "Amarillo Bandera",
                        code: "bandera-amarillo",
                        description:
                            "Color amarillo oficial para la bandera Argentina",
                        scope: "bandera",
                        related_color: "150",
                        parent_group: "amarillo",
                        color: "#FCBF49",
                        variant: {},
                        alias: [
                            {
                                code: "bandera-amarillo",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "bandera",
                name: "Celeste",
                group: "celeste",
                color: {
                    150: "#75AADB",
                },
                instance: [
                    {
                        name: "Celeste Bandera",
                        code: "bandera-celeste",
                        description:
                            "Color celeste oficial para la bandera Argentina",
                        scope: "bandera",
                        related_color: "150",
                        parent_group: "celeste",
                        color: "#75AADB",
                        variant: {},
                        alias: [
                            {
                                code: "bandera-celeste",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "bandera",
                name: "Marrón",
                group: "marron",
                color: {
                    150: "#843511",
                },
                instance: [
                    {
                        name: "Marrón Bandera",
                        code: "bandera-marron",
                        description:
                            "Color marrón oficial para la bandera Argentina",
                        scope: "bandera",
                        related_color: "150",
                        parent_group: "marron",
                        color: "#843511",
                        variant: {},
                        alias: [
                            {
                                code: "bandera-marron",
                                exclude: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Gendarmería Nacional",
        space: "gna",
        hidden_space: false,
        description: "",
        data: [
            {
                scope: "gna",
                name: "Verde jade",
                group: "verde-jade",
                color: {
                    150: "#006666",
                },
                instance: [
                    {
                        name: "Verde jade",
                        code: "gna-verde-jade",
                        description: "",
                        scope: "gna",
                        related_color: "150",
                        parent_group: "verde-jade",
                        color: "#006666",
                        variant: {},
                        alias: [
                            {
                                code: "gna-verde-jade",
                                exclude: false,
                            },
                            {
                                code: "verde-jade",
                                exclude: true,
                            },
                            {
                                code: "verdejade",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "gna",
                name: "Verde aloe",
                group: "verde-aloe",
                color: {
                    150: "#4FBB73",
                },
                instance: [
                    {
                        name: "Verde aloe",
                        code: "gna-verde-aloe",
                        description: "",
                        scope: "gna",
                        related_color: "150",
                        parent_group: "verde-aloe",
                        color: "#4FBB73",
                        variant: {},
                        alias: [
                            {
                                code: "gna-verde-aloe",
                                exclude: false,
                            },
                            {
                                code: "verde-aloe",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
            {
                scope: "gna",
                name: "Verde cemento",
                group: "verde-cemento",
                color: {
                    150: "#B4BEBA",
                },
                instance: [
                    {
                        name: "Verde cemento",
                        code: "gna-verde-cemento",
                        description: "",
                        scope: "gna",
                        related_color: "150",
                        parent_group: "verde-cemento",
                        color: "#B4BEBA",
                        variant: {},
                        alias: [
                            {
                                code: "gna-verde-cemento",
                                exclude: false,
                            },
                            {
                                code: "verde-cemento",
                                exclude: true,
                            },
                            {
                                code: "verdecemento",
                                exclude: true,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

if (typeof exports !== "undefined") {
    module.exports = {
        ponchoColorDefinitionsList,
    };
}
