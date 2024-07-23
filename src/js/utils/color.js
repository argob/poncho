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
const ponchoColorDefinitionsList = [
    {
        "name": "www.argentina.gob.ar",
        "space": "gobar",
        "data": [
            {
                "group": "verde",
                "scope": "gobar",
                "name": "Verde",
                "color": {
                    "50": "#F1F5D7",
                    "100": "#DEE8A3",
                    "200": "#CCDB6E",
                    "300": "#B9CE39",
                    "400": "#93B727",
                    "500": "#6EA015",
                    "600": "#4E8F24",
                    "700": "#2E7D33",
                    "800": "#27692A",
                    "900": "#1F5421"
                },
                "instance": [
                    {
                        "name": "Verde",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "700",
                        "parent_group": "verde",
                        "color": "#2E7D33",
                        "alias": [
                            "verde",
                            "success"
                        ],
                        "variant": {
                            "light": "#6EA015",
                            "dark": "#1F5421",
                            "half": "#96BE99"
                        },
                        "code": "verde"
                    },
                    {
                        "name": "Verdín",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "500",
                        "parent_group": "verde",
                        "color": "#6EA015",
                        "alias": [
                            "verdin"
                        ],
                        "variant": {
                            "light": "#B9CE39",
                            "dark": "#2E7D33"
                        },
                        "code": "verdin"
                    },
                    {
                        "name": "Lima",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "300",
                        "parent_group": "verde",
                        "color": "#B9CE39",
                        "alias": [
                            "lima",
                            "limon"
                        ],
                        "variant": {
                            "light": "#DEE8A3",
                            "dark": "#6EA015"
                        },
                        "code": "lima"
                    }
                ]
            },
            {
                "group": "amarillo",
                "name": "Amarillo",
                "scope": "gobar",
                "color": {
                    "50": "#FFFAE8",
                    "100": "#FFF1C0",
                    "200": "#FFE997",
                    "300": "#FFE06E",
                    "400": "#FFD745",
                    "500": "#FFCE1C",
                    "600": "#D8AE18",
                    "700": "#B18F15",
                    "800": "#8A6F12",
                    "900": "#634F0E"
                },
                "instance": [
                    {
                        "name": "Maiz",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "500",
                        "parent_group": "amarillo",
                        "color": "#FFCE1C",
                        "alias": [
                            "maiz",
                            "maíz"
                        ],
                        "variant": {
                            "light": "#FFE997",
                            "dark": "#B18F15",

                        },
                        "code": "maiz"
                    }
                ]
            },
            {
                "group": "naranja",
                "name": "Naranja",
                "scope": "gobar",
                "color": {
                    "50": "#FAF7ED",
                    "100": "#EAE1B7",
                    "200": "#E9CE8C",
                    "300": "#E7BA61",
                    "400": "#EFA843",
                    "500": "#F79525",
                    "600": "#EF6C00",
                    "700": "#CA620A",
                    "800": "#A45713",
                    "900": "#511901"
                },
                "instance": [
                    {
                        "name": "Marrón oscuro",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "900",
                        "parent_group": "naranja",
                        "color": "#511901",
                        "alias": [
                            "marron-oscuro"
                        ],
                        "variant": {
                            "light": "#CA620A",
                            "dark": "#111111"
                        },
                        "code": "marron-oscuro"
                    },
                    {
                        "name": "Marrón claro",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "800",
                        "parent_group": "naranja",
                        "color": "#A45713",
                        "alias": [
                            "marron-claro"
                        ],
                        "variant": {
                            "light": "#EF6C00",
                            "dark": "#511901"
                        },
                        "code": "marron-claro"
                    },
                    {
                        "name": "Naranja oscuro",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "800",
                        "parent_group": "naranja",
                        "color": "#EF6C00",
                        "alias": [
                            "naranja-oscuro",
                            "naranja"
                        ],
                        "variant": {
                            "light": "#EFA843",
                            "dark": "#A45713"
                        },
                        "code": "naranja-oscuro"
                    },
                    {
                        "name": "Mandarina",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "500",
                        "parent_group": "naranja",
                        "color": "#F79525",
                        "alias": [
                            "mandarina"
                        ],
                        "variant": {
                            "light": "#E7BA61",
                            "dark": "#CA620A"
                        },
                        "code": "mandarina"
                    },
                    {
                        "name": "Amarillo",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "300",
                        "parent_group": "naranja",
                        "color": "#E7BA61",
                        "variant": {
                            "light": "#E9CE8C",
                            "dark": "#EFA843",
                            "half": "#F3DDB0"
                        },
                        "alias": [
                            "amarillo",
                            "amarillo-intenso",
                            "warning"
                        ],
                        "code": "amarillo"
                    },
                    {
                        "name": "Arena",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "100",
                        "parent_group": "naranja",
                        "color": "#EAE1B7",
                        "variant": {
                            "light": "#EAE1B7",
                            "dark": "#E9CE8C",
                            "half": "#F5F0DB"
                        },
                        "alias": [
                            "arena"
                        ],
                        "code": "arena"
                    }
                ]
            },
            {
                "group": "rojo",
                "name": "rojo",
                "scope": "gobar",
                "color": {
                    "50": "#FCDDDC",
                    "100": "#F9BBB9",
                    "200": "#F69896",
                    "300": "#F27673",
                    "400": "#EF5350",
                    "500": "#E14543",
                    "600": "#D43635",
                    "700": "#C62828",
                    "800": "#A12222",
                    "900": "#7C1C1C"
                },
                "instance": [
                    {
                        "name": "Rojo",
                        "description": "Atención o peligro",
                        "scope": "gobar",
                        "related_color": "700",
                        "parent_group": "rojo",
                        "color": "#C62828",
                        "alias": [
                            "rojo",
                            "danger"
                        ],
                        "variant": {
                            "light": "#E14543",
                            "dark": "#7C1C1C"
                        },
                        "code": "rojo"
                    },
                    {
                        "name": "Tomate",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "400",
                        "parent_group": "rojo",
                        "color": "#EF5350",
                        "alias": [
                            "tomate",
                            "complementary"
                        ],
                        "variant": {
                            "light": "#F69896",
                            "dark": "#C62828"
                        },
                        "code": "tomate"
                    }
                ]
            },
            {
                "group": "fucsia",
                "name": "fucsia",
                "scope": "gobar",
                "color": {
                    "50": "#FCDDE6",
                    "100": "#F48EAB",
                    "200": "#F1669D",
                    "300": "#ED3D8F",
                    "400": "#ED3F85",
                    "500": "#EC407A",
                    "600": "#D72C6B",
                    "700": "#C2185B",
                    "800": "#9A144A",
                    "900": "#721038"
                },
                "instance": [
                    {
                        "name": "Arándano",
                        "description": "Atención o peligro",
                        "scope": "gobar",
                        "related_color": "700",
                        "parent_group": "fucsia",
                        "color": "#C2185B",
                        "alias": [
                            "arandano"
                        ],
                        "variant": {
                            "light": "#EC407A",
                            "dark": "#721038",
                            "half": "#E18CAD"
                        },
                        "code": "arandano"
                    },
                    {
                        "name": "Fucsia",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "500",
                        "parent_group": "fucsia",
                        "color": "#EC407A",
                        "alias": [
                            "fucsia"
                        ],
                        "variant": {
                            "light": "#F1669D",
                            "dark": "#9A144A"
                        },
                        "code": "fucsia"
                    },
                    {
                        "name": "Cereza",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "300",
                        "parent_group": "fucsia",
                        "color": "#ED3D8F",
                        "alias": [
                            "cereza"
                        ],
                        "variant": {
                            "light": "#F1669D",
                            "dark": "#9A144A"
                        },
                        "code": "cereza"
                    },
                    {
                        "name": "Rosado",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "100",
                        "parent_group": "fucsia",
                        "color": "#F48EAB",
                        "alias": [
                            "rosado"
                        ],
                        "variant": {
                            "light": "#FCDDE6",
                            "dark": "#ED3F85",
                            "half": "#FAC7D5"
                        },
                        "code": "rosado"
                    }
                ]
            },
            {
                "group": "violeta",
                "scope": "gobar",
                "name": "violeta",
                "color": {
                    "50": "#EBEAF9",
                    "100": "#BEB7DC",
                    "200": "#9284BE",
                    "300": "#7E4FAC",
                    "400": "#6A1B99",
                    "500": "#522998",
                    "600": "#3A3796",
                    "700": "#2C2A84",
                    "800": "#1E1C71",
                    "900": "#171756"
                },
                "instance": [
                    {
                        "name": "Azul morado",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "600",
                        "parent_group": "violeta",
                        "color": "#3A3796",
                        "alias": [
                            "azul-morado"
                        ],
                        "code": "azul-morado"
                    },
                    {
                        "name": "Uva",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "400",
                        "parent_group": "violeta",
                        "color": "#6A1B99",
                        "alias": [
                            "uva"
                        ],
                        "code": "uva"
                    },
                    {
                        "name": "Lavanda",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "200",
                        "parent_group": "violeta",
                        "color": "#9284BE",
                        "alias": [
                            "lavanda"
                        ],
                        "code": "lavanda"
                    }
                ]
            },
            {
                "group": "azul",
                "scope": "gobar",
                "name": "azul",
                "color": {
                    "50": "#D8F0FA",
                    "100": "#BEE6F6",
                    "200": "#75D0F2",
                    "300": "#2CB9EE",
                    "400": "#18AAEA",
                    "500": "#039BE5",
                    "600": "#0B7FC0",
                    "700": "#14639A",
                    "800": "#1C4875",
                    "900": "#242C4F"
                },
                "instance": [
                    {
                        "name": "Azul morado",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "900",
                        "parent_group": "azul",
                        "color": "#242C4F",
                        "alias": [
                            "primary",
                            "azul"
                        ],
                        "variant": {
                            "half": "#9296A7"
                        },
                        "code": "primary"
                    },
                    {
                        "name": "escarapela",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "300",
                        "parent_group": "azul",
                        "color": "#2CB9EE",
                        "alias": [
                            "escarapela"
                        ],
                        "code": "escarapela"
                    },
                    {
                        "name": "Celeste Argentina",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "400",
                        "parent_group": "azul",
                        "color": "#37BBED",
                        "alias": [
                            "celeste-argentina"
                        ],
                        "code": "celeste-argentina"
                    },
                    {
                        "name": "cielo",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "500",
                        "parent_group": "azul",
                        "color": "#039BE5",
                        "alias": [
                            "cielo"
                        ],
                        "code": "cielo"
                    }
                ]
            },
            {
                "scope": "gobar",
                "group": "turquesa",
                "name": "turquesa",
                "color": {
                    "50": "#DCF1F0",
                    "100": "#C0E5E3",
                    "200": "#A4D9D7",
                    "300": "#88CECB",
                    "400": "#6CC3BE",
                    "500": "#50B7B2",
                    "600": "#459E99",
                    "700": "#3B8681",
                    "800": "#306D69",
                    "900": "#255450"
                },
                "instance": [
                    {
                        "name": "Palta",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "500",
                        "parent_group": "turquesa",
                        "color": "#50B7B2",
                        "alias": [
                            "palta"
                        ],
                        "variant": {
                            "half": "#A8DBD9"
                        },
                        "code": "palta"
                    },
                    {
                        "name": "Verde azulado",
                        "description": "",
                        "scope": "gobar",
                        "related_color": "800",
                        "parent_group": "turquesa",
                        "color": "#306D69",
                        "alias": [
                            "verde-azulado"
                        ],
                        "code": "verde-azulado"
                    }
                ]
            },
            {
                "scope": "gobar",
                "group": "negro",
                "name": "negro",
                "color": {
                    "50": "#F2F2F2",
                    "100": "#D3D8D6",
                    "200": "#B6BDBD",
                    "300": "#99A1A4",
                    "400": "#7E848E",
                    "500": "#686B70",
                    "600": "#525252",
                    "700": "#434343",
                    "800": "#333333",
                    "900": "#000000"
                },
                "instance": [
                    {
                        "name": "black",
                        "description": "Elementos básicos",
                        "scope": "gobar",
                        "related_color": "800",
                        "parent_group": "negro",
                        "color": "#333333",
                        "alias": [
                            "black"
                        ],
                        "code": "black"
                    },
                    {
                        "name": "muted",
                        "description": "Texto secundario (subtitulos)",
                        "scope": "gobar",
                        "related_color": "800",
                        "parent_group": "negro",
                        "color": "#333333",
                        "alias": [
                            "muted",
                            "gris"
                        ],
                        "code": "muted"
                    }
                ]
            }
        ]
    },
    {
        "name": "Bandera Argentina",
        "space": "bandera",
        "data": [
            {
                "group": "amarillo",
                "scope": "bandera",
                "name": "Amarillo",
                "color": {
                    "500": "#FCBF49"
                },
                "instance": [
                    {
                        "name": "Amarillo bandera",
                        "description": "Color oficial para la bandera Argentina",
                        "scope": "bandera",
                        "related_color": "500",
                        "parent_group": "amarillo",
                        "color": "#FCBF49",
                        "alias": [
                            "bandera-amarillo"
                        ],
                        "code": "bandera-amarillo"
                    }
                ]
            },
            {
                "group": "celeste",
                "scope": "bandera",
                "name": "Celeste",
                "color": {
                    "500": "#75AADB"
                },
                "instance": [
                    {
                        "name": "Celeste bandera",
                        "description": "Color oficial para la bandera Argentina",
                        "scope": "bandera",
                        "related_color": "500",
                        "parent_group": "celeste",
                        "color": "#75AADB",
                        "alias": [
                            "bandera-celeste"
                        ],
                        "code": "bandera-celeste"
                    }
                ]
            },
            {
                "group": "marron",
                "name": "Marrón",
                "scope": "bandera",
                "color": {
                    "500": "#843511"
                },
                "instance": [
                    {
                        "name": "Marrón bandera",
                        "description": "Color oficial para la bandera Argentina",
                        "scope": "bandera",
                        "related_color": "500",
                        "parent_group": "marron",
                        "color": "#843511",
                        "alias": [
                            "bandera-marron"
                        ],
                        "code": "bandera-marron",
                        "group": {
                            "color": {
                                "500": "#843511"
                            },
                            "name": "Marrón"
                        }
                    }
                ]
            }
        ]
    },
    {
        "space": "gna",
        "name": "Gendarmería Nacional",
        "data": [
            {
                "group": "verde-jade",
                "name": "verde-jade",
                "scope": "gna",
                "color": {
                    "500": "#006666"
                },
                "instance": [
                    {
                        "name": "Verde jade",
                        "description": "",
                        "scope": "gna",
                        "related_color": "500",
                        "parent_group": "verde-jade",
                        "color": "#006666",
                        "alias": [
                            "verde-jade"
                        ],
                        "code": "verde-jade"
                    }
                ]
            },
            {
                "group": "verde-aloe",
                "name": "verde-aloe",
                "scope": "gna",
                "color": {
                    "500": "#4FBB73"
                },
                "instance": [
                    {
                        "name": "Verde aloe",
                        "description": "",
                        "scope": "gna",
                        "related_color": "500",
                        "parent_group": "verde-aloe",
                        "color": "#4FBB73",
                        "alias": [
                            "verde-aloe"
                        ],
                        "code": "verde-aloe"
                    }
                ]
            },
            {
                "group": "verde-cemento",
                "name": "verde-cemento",
                "scope": "gna",
                "color": {
                    "500": "#B4BEBA"
                },
                "instance": [
                    {
                        "name": "Verde aloe",
                        "description": "",
                        "scope": "gna",
                        "related_color": "500",
                        "parent_group": "verde-cemento",
                        "color": "#B4BEBA",
                        "alias": [
                            "verde-cemento"
                        ],
                        "code": "verde-cemento"
                    }
                ]
            }
        ]
    },
    {
        "space": "miarg",
        "name": "MiArgentina",
        "data": [
            {
                "group": "azul",
                "scope": "miarg",
                "name": "Azul MiArgentina",
                "color": {
                    "500": "#362FC1"
                },
                "instance": [
                    {
                        "name": "Verde aloe",
                        "description": "",
                        "scope": "miarg",
                        "related_color": "500",
                        "parent_group": "azul",
                        "color": "#362FC1",
                        "variant": {
                            "half": "#6B66CC"
                        },
                        "alias": [
                            "miarg-azul"
                        ],
                        "code": "miarg-azul"
                    }
                ]
            },
            {
                "group": "celeste",
                "scope": "miarg",
                "name": "Azul MiArgentina",
                "color": {
                    "500": "#2CB9EE"
                },
                "instance": [
                    {
                        "name": "Verde aloe",
                        "description": "",
                        "scope": "miarg",
                        "related_color": "500",
                        "parent_group": "celeste",
                        "color": "#2CB9EE",
                        "alias": [
                            "miarg-celeste"
                        ],
                        "code": "miarg-celeste"
                    }
                ]
            },
            {
                "group": "celeste-claro",
                "scope": "miarg",
                "name": "Celeste claro",
                "color": {
                    "500": "#BCE5F6"
                },
                "instance": [
                    {
                        "name": "Celeste claro",
                        "description": "",
                        "scope": "miarg",
                        "related_color": "500",
                        "parent_group": "celeste-claro",
                        "color": "#BCE5F6",
                        "alias": [
                            "miarg-celeste-claro"
                        ],
                        "code": "miarg-celeste-claro"
                    }
                ]
            },
            {
                "group": "amarillo-claro",
                "scope": "miarg",
                "name": "Amarillo claro",
                "color": {
                    "500": "#ffe9b8"
                },
                "instance": [
                    {
                        "name": "Celeste claro",
                        "description": "",
                        "scope": "miarg",
                        "related_color": "500",
                        "parent_group": "amarillo-claro",
                        "color": "#ffe9b8",
                        "alias": [
                            "miarg-amarillo-claro"
                        ],
                        "code": "miarg-amarillo-claro"
                    }
                ]
            },
            {
                "group": "rosa-claro",
                "scope": "miarg",
                "name": "Rosa claro",
                "color": {
                    "500": "#EFCCCE"
                },
                "instance": [
                    {
                        "name": "Celeste claro",
                        "description": "",
                        "scope": "miarg",
                        "related_color": "500",
                        "parent_group": "rosa-claro",
                        "color": "#EFCCCE",
                        "alias": [
                            "miarg-rosa-claro"
                        ],
                        "code": "miarg-rosa-claro"
                    }
                ]
            },
            {
                "group": "verde-claro",
                "scope": "miarg",
                "name": "Verde claro",
                "color": {
                    "500": "#CFEEDC"
                },
                "instance": [
                    {
                        "name": "Verde claro",
                        "description": "",
                        "scope": "miarg",
                        "related_color": "500",
                        "parent_group": "verde-claro",
                        "color": "#CFEEDC",
                        "alias": [
                            "miarg-verde-claro"
                        ],
                        "code": "miarg-verde-claro"
                    }
                ]
            },
            {
                "group": "azul-oscuro",
                "scope": "miarg",
                "name": "Azul oscuro",
                "color": {
                    "500": "#222C50"
                },
                "instance": [
                    {
                        "name": "Azul oscuro",
                        "description": "",
                        "scope": "miarg",
                        "related_color": "500",
                        "parent_group": "azul-oscuro",
                        "color": "#222C50",
                        "alias": [
                            "miarg-azul-oscuro"
                        ],
                        "code": "miarg-azul-oscuro"
                    }
                ]
            },
            {
                "group": "gris",
                "scope": "miarg",
                "name": "Gris",
                "color": {
                    "500": "#7E848E"
                },
                "instance": [
                    {
                        "name": "Gris",
                        "description": "",
                        "scope": "miarg",
                        "related_color": "500",
                        "parent_group": "gris",
                        "color": "#7E848E",
                        "alias": [
                            "miarg-gris"
                        ],
                        "code": "miarg-gris"
                    }
                ]
            }
        ]
    }
];


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
    if(typeof hexColor != "string" || !hexColor?.trim()){
        console.error("El color hexadecimal no es válido.");
        return;
    }

    let result;
    const targetColor = cleanUpHex(hexColor);
    for(let i = 0; i <= ponchoColorDefinitionsList.length -1; i += 1){
        let {data} = ponchoColorDefinitionsList[i];

        for(let entry of data){
            const {instance} = entry;
            for(let item of instance){
                const {color} = item;
                if( cleanUpHex(color) === targetColor ){
                    result = item;
                    break;
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
    if (!hexColor || !hexColor.match(/^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/gm)) {
        console.warn("Invalid hex color format:", hexColor);
        return null;
    }

    const hex = cleanUpHex(hexColor);
    const cleanedHex = (hex.startsWith("#") ? hex.slice(1) : hex);

    const red = parseInt(cleanedHex.slice(0, 2), 16);
    const green = parseInt(cleanedHex.slice(2, 4), 16);
    const blue = parseInt(cleanedHex.slice(4, 6), 16);

    return [red, green, blue];
}



if (typeof exports !== "undefined") {
    module.exports = {
        ponchoColorDefinitions, ponchoColor, ponchoColorByHex, cleanUpHex,
        ponchoColorDefinitionsList, illustrationColors
    };
}