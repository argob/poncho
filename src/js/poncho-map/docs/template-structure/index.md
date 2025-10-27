# Template structure

## Opciones para template_structure

Template structure permite controlar el formato de la información que se presenta en el panel desplegable (slider) o en modo popup. Dentro de las opciones que ofrece esta herramienta, se pueden gestionar elementos como: lead (volanta), nombrar o renombrar encabezados (headers), definir un título, agregar o excluir valores de la entrada JSON, especificar el tipo de etiquetas HTML y aplicar estilos. En esta sección, se detalla el uso y el tipo de valor esperado para cada índice, junto con ejemplos de uso.

### Sintaxis

```js
const options = {
    "template_structure": {
        "lead": [],
        "header": false,
        "title": "",
        "mixing": [],
        "values": [],
        "exclude": [],
        "container_classlist": ["info-container"],
        "title_classlist": ["h4","text-primary","m-t-0"],
        "definition_list_classlist":["definition-list"],
        "term_classlist": ["h6", "m-b-0"],
        "definition_classlist": [],
        "definition_list_tag": "dl",
        "term_tag": "dt",
        "definition_tag": "dd",
    }
}
```
### Parámetros

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| container_classlist | `Array()` | `["info-container"]` | Define la lista de clases CSS que pueden agregarse al contenedor del listado de términos y descripciones. | 
| lead | `object` | `{}` | Volanta.<br><br>Ver opciones para [lead](#opciones-para-lead). |
| mixing | `object` | `{}` | Permite crear una entrada uniendo cadenas de texto o valores de entrada.<br><br>Ver opciones para [mixing](#opciones-para-mixing). |
| header | `function` | `false` | Permite modificar el header del template retornando un `string` desde una función. <br>`"header": (self, entry) => string` |
| title | `string` | "" | Permite redefinir la clave que se utiliza para el panel de información teniendo precedencia sobre la opción general _`title`_. |
| title_classlist | `Array()` | `["h4","title"]` | Listado de selectores CSS se que aplicarán en la etiqueta HTML asignada a título.| 
| definition_list_classlist | `Array()` | `["definition-list"]` | Listado de selectores CSS se que aplicarán en la etiqueta HTML asignada contenedor del listado de términos y definiciones.| 
| term_classlist | `Array()` | `["h6", "m-b-0"]` | Listado de selectores CSS se que aplicarán en la etiqueta HTML asignada al término.| 
| definition_classlist | `Array()` | `[]` | Listado de selectores CSS se que aplicarán en la etiqueta HTML asignada a la definición.| 
| definition_list_tag | `strng` | `dl` | Define la etiqueta HTML que contiene el listado de términos y descripciones.| 
| term_tag | `strng` | `dt` | Define la etiqueta HTML para el término.| 
| definition_tag | `strng` | `dd` | Define la etiqueta HTML para la descripción.| 




### Opciones para Lead

![Mixing](./demo/img/lead.png)

El lead (o volanta) es un texto breve que se ubica sobre el título principal. Al utilizar la lead dentro de template_structure, se puede modificar su estilo directamente mediante atributos style en línea, o bien, aplicar estilos a través de una definición CSS.

#### Sintaxis

```js
"template_structure": {
    "lead": {
        "key": "type", 
        "css": "text-primary bg-warning",
        "style": "color: orange; font-size:2em; margin: 2em auto;"
    }
} 
```

#### Parámetros

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| key | `string` | "" | Clave de la entrada del JSON o del geoJSON _feature.properties_. | 
| css | `string, function` | "" | **String**<br>Definición de css, ej: `"text-primary bg-warning"`.<br><br>**Función** <br>`css: (self, entry) => string;`<br>Dónde `self` el la instancia del objeto *PonchoMap* o *PonchoMapFilter* y `entry` corresponde a una entrada o feature del JSON. |
| style | `string, function` | "" | **String**<br>Definición para _style_, ej:<br>`"color: orange; font-size:2em; margin: 2em auto;"`.<br><br>**Función** <br>`css: (self, entry) => string;`<br>Dónde `self` el la instancia del objeto *PonchoMap* o *PonchoMapFilter* y `entry` corresponde a una entrada o feature del JSON. |

### Opciones para mixing

![Mixing](./demo/img/mixing.png)

Los _mixings_ facilitan la creación de composiciones a partir de información fragmentada presente en una entrada JSON. Permiten combinar valores de diferentes claves para generar una nueva entrada con una clave unificada.

Ejemplo:

Considerando una entrada JSON con información de ubicación distribuida en las claves: calle, numero, localidad y provincia. Mediante un _mixing_, podemos concatenar estos valores en una única clave.

**Entrada de ejemplo**

```js
{
    "calle": "Mercedes",
    "numero": "3180",
    "localidad": "Malvinas Argentinas",
    "provincia": "Buenos Aires",
}
```

**La sintaxis para el _mixing_ seria:**

```js
"template_structure": {
    "mixing":[
        {
            "template": false,
            "key": "direccion",
            "header": "Dirección",
            "values": ["calle", "numero", ", ", "localidad", ", ", "provincia"],
            "separator": ""
        },
        ...
    ]
}

// Resultado: Mercedes 3180, Malvinas Argentinas, Buenos Aires
```

Mismo resultado utilizando la clave `template`.

```js
"template_structure": {
    "mixing":[
        {
            "template": "{{calle}} {{numero}}, {{localidad}}, {{provincia}}",
            "key": "direccion",
            "header": "Dirección",
            "values": false,
            "separator": ""
        },
        ...
    ]
}

// Resultado: Mercedes 3180, Malvinas Argentinas, Buenos Aires
```

También puede utilizarse etiquetas html.

```js
"template_structure": {
    "mixing":[
        {
            "template": "<strong>{{calle}} {{numero}}</strong>,<br>{{localidad}},<br>{{provincia}}.", 
            ...
        },
        ...
    ]
}

// Resultado: <strong>Mercedes 3180</strong>,<br>Malvinas Argentinas<br>Buenos Aires.
```



#### Parámetros

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| template | `string` | false | Permite componer una plantilla HTML con las claves encerradas en doble llave, por ejemplo: `"{{valor}} <strong>{{porcentaje}} %</strong>"`. `valor` y `porcentaje` son ejemplos de claves que corresponden a las propiedades del objeto de datos que se ingrese. | 
| key | `string` | "" | Clave de la entrada del JSON o del geoJSON `feature.properties`. | 
| header | `string` | "" | Nombre que va a tener el campo como título. |
| values | `Array` | [] | Listado de claves ordenados según el orden de aparición. |
| separator | `string` | "" | Carácter o cadena de caracteres con la que se van a concatenar los valores. |