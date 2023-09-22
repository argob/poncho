# Utilidad de colores Poncho

## objetos

### ponchoColorDefinitionsList

Lista y define cada uno de los colores poncho con sus valores hexadecimales, nombre y sus alias.

```javascript
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
    ...
];
```
### colorVariations

Lista combinaciones de colores en distintas tonalidades.

```javascript
const colorVariations = {
    high: [
        "primary","verde-jade","success", ...
    ],
    medium: [
        "info","verde-azulado","verdin", ...
    ]
};
```

## Funciones

### ponchoColorDefinitions()

Retorna la definición de un color; pasando por parámetro su alias.

```javascript
ponchoColorDefinitions("azul");

// returns
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
```

### ponchoColor()

Retorna un color hexadecimal pasando por parámetros el alias de color.

```javascript
ponchoColor("warning");
// #F9A822
```

### ponchoColorByHex()

Retorna la definición de color pasando por parámetro su valor hexadecimal;

```javascript()
ponchoColorByHex("#0072BB");

// returns
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
```

### cleanUpHex()

Refactoriza un color hexadecimal.

```javascript
cleanUpHex(123);
// #112233

cleanUpHex("#123");
// #112233

cleanUpHex("aBc");
// #AABBCC
```