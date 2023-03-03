



# PonchoMap

![Poncho Map](./img/map.png)

## Conteidos

* [Opciones generales](#opciones)
* [Opciones para PonchoMapFilter](#opciones-poncho-map-filter)
* [Opciones para PonchoSearch](#opciones-poncho-map-search)
* [Métodos](#metodos)
  * [Métodos PonchoMap](#metodos-poncho-map)
  * [Métodos PonchoMapFilter](#metodos-poncho-map-filter)
* [Modo de uso](#modo-uso)
  * [Código](#codigo)
  * [Ejemplos en codepen.io](#ejemplos-codepen)

---

## <a id="opciones" href="#opciones">¶</a> Opciones generales

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| scope | `string` | _`empty string`_ | Es el ambiente de trabajo sobre un mapa en particular. Cuando se utiliza más de un mapa en la página esto sirve para diferenciarlos. | 
| map_selector | `string` | map | Nombre del id que utiliza Leaflet para hacer el _render_ del mapa. | 
| id | `string` | id | Nombre de la columna donde se encuentra el id. Si la fuente de datos usa otro nombre se define con esta opción. Ej. `"id":"id_punto_digital"`.| 
| latitud | `string` | latitud | Nombre de la columna con el valor de latitud. Si la fuente de datos usa otro nombre se define con esta opción. Ej. `"latitud":"lat"`.| 
| longitud | `string` | longitud | Nombre de la columna con el valor de longitud. Si la fuente de datos usa otro nombre se define con esta opción. Ej. `"longitud":"lng"`.| 
| content_selector | `boolean` | `false` | Permite esetablecer un selector alternativo donde se quiera imprimir el contenido. |
| render_slider | `boolean` | `true` | Permite que se cree el componente _slider_ en el mapa. |
| template | `object` | `null` | Define la función que controla el template para el popUp o el slider.<br><br>Ver opciones para [template](#opciones-templates).| 
| template_structure | `object` | `{}` | Permite definir un listado de valores a mostarar en el template por defecto o excluir valores que no se deseen mostrar. <br><br>Ver opciones para [template_structure](#opciones-template-structure). | 
| template_innerhtml | `boolean` | `false` | Permite incrustar html dentro de la descripción.|
| template_markdown | `boolean` | `false` | Habilita el uso del _plugin_ [showdown.js](https://showdownjs.com).|
| markdown_options | `object` | | Permite configurar las opciones del _plugin_ showdown.js<br><br>[Ver opciones para markdow_options](#opciones-markdown-options)|
| allowed_tags | `object` | `[]` | Permite configurar un listado de etiquetas HTML que se imprimirán como parte del DOM y no como un texto. Para habilitar todas las etiquetas se utiliza `["*"]`. Si se quiere especificar cuales deben usarse, ej.: `["a", "strong"]`. 
| headers | `object` | `{}` | Permite definir títulos dinámicos mapeando la clave del objeto que contiene la información con los encabezados | 
| header_icons | `object` | `{}` | Permite definir un ícono para cada uno de los headers de la entrada.<br><br>Ver opciones para [header_icons](#opciones-header-icons). | 
| hash | `boolean` | `false` | Habilita la acción por la cual, cada vez que se hace *clic* en un marker se reemplaza el hash en la barra de dirección del navegador.| 
| slider | `boolean` | `false` | Habilita el slider y reemplaza el popUp.| 
| anchor_delay | `integer` | 0 | Tiempo de demora entre que se carga la página y se muestra el marker pasado por url. El valor es en milisegundos (1" = 1000). | 
| scroll | `boolean` | `false` | Hace un scroll para posisionar la página en el borde superior del mapa cuando se carga la página.| 
| marker | `string, function` | azul | Permite asignar un color distinto o usar una función para cambiar la lógica en la que se muestran los colores o usar iconos de otro tipo.<br><br>Ver opciones para [marker](#opciones-marker). | 
| no_info | `boolean` | `false` | Permite deshabilitar la información del marker. Cuando esta opción está en false, no se despliega el popUp o el slider. | 
| reset_zoom | `boolean` | `false` | Habilita el un botón en medio del botón *zoom-out* y *zoom-in* para mostrar el mapa completo con sus *markers*.| 
| map_anchor_zoom | `integer` | 16 | Configuración del zoom para los markers que se deben visualizar pasándo por hash el id del marker.| 
| map_zoom | `integer` | 4 | Configuración del valor inicial para el zoom del mapa.| 
| map_view | `Array Object` | `[-40.44, -63.59]` | Geoposicionamiento inicial del mapa. | 
| error_reporting | `boolean` | true | Activa la visualización de errores o warnings en el mapa. | 
| marker_cluster_options | `Object` | `"marker_cluster_options": {}` | Ver opciones para [marker_cluster_options](#opciones-marker-cluster-options) |


### <a id="opciones-template-structure"></a>Opciones para `template_structure` [⏎](#opciones "Ir al listado de opciones generales")

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

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| container_classlist | `Array()` | `["info-container"]` | Define la lista de clases CSS que pueden agregarse al contenedor del listado de terminos y descripciones. | 
| lead | `object` | `{}` | Volanta.<br><br>Ver opciones para [lead](#opciones-para-lead). |
| mixing | `object` | `{}` | Permite crear una entrada uniendo cadenas de texto o valores de la entrada.<br><br>Ver opciones para [mixing](#opciones-para-mixing). |
| header | `function` | `false` | Permite modificar el header del template retornando un `string` desde una función. <br>`"header": (self, entry) => string` |
| title | `string` | "" | Permite redefinir la clave que se utiliza para el panel de información teniendo precedencia sobre la opción general _`title`_. |
| title_classlist | `Array()` | `["h4","title"]` | Listado de selectores CSS se que aplicarán en la etiqueta HTML asignada título.| 
| definition_list_classlist | `Array()` | `["definition-list"]` | Listado de selectores CSS se que aplicarán en la etiqueta HTML asignada contenedor del listado de términos y definiciones.| 
| term_classlist | `Array()` | `["h6", "m-b-0"]` | Listado de selectores CSS se que aplicarán en la etiqueta HTML asignada al término.| 
| definition_classlist | `Array()` | `[]` | Listado de selectores CSS se que aplicarán en la etiqueta HTML asignada a la definición.| 
| definition_list_tag | `strng` | `dl` | Define la etiqueta HTML que contiene el listado de términos y descripciones.| 
| term_tag | `strng` | `dt` | Define la etiqueta HTML para el término.| 
| definition_tag | `strng` | `dd` | Define la etiqueta HTML para la descripción.| 

#### <a id="opciones-para-lead"></a>Opciones para `lead` [⏎](#opciones-template-structure "Ir al listado de opciones para template_structure")

```js
"template_structure": {
    "lead": {
        "key": "type", 
        "css`": "text-primary bg-warning",
        "style": "color: orange; font-size:2em; margin: 2em auto;"
    }
} 
```


| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| key | `string` | "" | Clave de la entrada del JSON o del geoJSON _feature.properties_. | 
| css | `string, function` | "" | **String**<br>Definición de css, ej: `"text-primary bg-warning"`.<br><br>**Función** <br>`css: (self, entry) => string;`<br>Dónde `self` el la instancia del objeto *PonchoMap* o *PonchoMapFilter* y `entry` corresponde a una entrada o feature del JSON. |
| style | `string, function` | "" | **String**<br>Definición para _style_, ej:<br>`"color: orange; font-size:2em; margin: 2em auto;"`.<br><br>**Función** <br>`css: (self, entry) => string;`<br>Dónde `self` el la instancia del objeto *PonchoMap* o *PonchoMapFilter* y `entry` corresponde a una entrada o feature del JSON. |
#### <a id="opciones-para-mixing"></a>Opciones para `mixing` [⏎](#opciones-template-structure)

![Mixing](./img/mixing.png)

```js
"template_structure": {
    "mixing":[
        {
            "key": "direccion",
            "header": "Dirección",
            "values": ["direccion", "localidad", "provincia"],
            "separator": ", "
        },
        ...
    ]
}
```

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| key | `string` | "" | Clave de la entrada del JSON o del geoJSON _feature.properties_. | 
| header | `string` | "" | Nombre que va a tener el campo como título. |
| values | `Array` | [] | Listado de keys ordenados según el orden de aparición. |
| separator | `string` | "" | Caracter o cadena de caracteres con la que se van a concatener los valores. |


### <a id="opciones-header-icons"></a> Opciones para `header_icons` [⏎](#opciones)

![Header icons](./img/header-icons.png)

```js
const options = {
    "header_icons": [
        {
            "key": "title",
            "css": "icono-arg-cannabis-medicinal-1 text-primary", 
            "style": "border:2px solid black;"
        },
        {
            "key": "ubicacion",
            "css": "icono-arg-marker text-arandano", 
            "style": "border:2px solid black;"
        },
        ...
    ]
}
```

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| key | `string` |  | Define la clave a la que se le asigna el icono. |
| css | `string, function` | {} | **String**<br>Definición de *css*, ej: `"text-primary bg-warning"`.<br><br>**Función** <br>`css: (self, entry) => string;`<br>Dónde `self` es la instancia del objeto *PonchoMap* o *PonchoMapFilter* y `entry` corresponde a una entrada en `feature.properties` del JSON. |
| style | `string, function` | {} | **String**<br>Definición de *style*, ej: `"background-color:gold; color:#333;"`.<br><br>**Función** <br>`style: (self, entry) => string;`<br>Dónde `self` es la instancia del objeto *PonchoMap* o *PonchoMapFilter* y `entry` corresponde a una entrada en `feature.properties` del JSON. |
| html | `string, function` | {} | **String**<br>Retornando un string HTML, ej.<br>`<i class="icono-arg-cannabis-medicinal-1"></i>`<br><br>**Función** <br>Retornando un string en una función ej.<br>`(self, entry) => string;` |


### <a id="opciones-marker" href="#opciones-marker"></a>Opciones para `marker` [⏎](#opciones "Ir al listado de opciones generales")

#### Definiendo colores

La opción `marker` nos permite definir el color de los *markers* asignando el nombre de [color poncho](https://argob.github.io/poncho/identidad/colores/) del siguiente modo:

```js
const options = {
    "marker": "mandarina"
};
```

Otra opción es agregar una función en la que podemos definir una lógica de colores de acuerdo a la fuente de datos que nos llega, por ejemplo: 

```js
const options = {
    "marker_color": (self, entry) => (typeof  entry.color !== "undefined" && entry.color != "" ? entry.color : "azul")
};
```

#### Modificando el tipo de marker

Esta opción también ofrece la posibilidad de crear *markers* utilizando imágenes o en formato html. En el siguiente ejemplo se ve como se puede aplicar un icóno de Poncho Fonts en un *marker*. Cuando se utiliza la función de esta manera debe retornan una instancia de `L.icon` o variantes *leaflet*.

```js
const options = {
    "marker": (self, entry) => {
      // icono tipo html
      const icon_div = (color) => {
          return new L.divIcon({
              html: `<i class="icono-arg-marcador-ubicacion-2 text-${color}">`,
              iconSize: [38, 24],
              iconAnchor: [22, 41],
              popupAnchor: [-3, -40]
          });
      };

	  if(typeof  entry.color !== "undefined" && entry.color){
          return icon_div(entry.color);
      }
      return icon_div("azul");
    }
}
```

### <a id="opciones-templates"></a> Opciones para `template` [⏎](#opciones)

La opción `template` debe recibir un string de retorno. Para ello, es posible definir el atributo como una función o asignar un string directamente.

#### Ejemplos
##### Función dentro y fuera del grupo de opciones

```js
const opciones = {
    "template": (self, entry) => {
		const html = `<h1>${entry.title}</h1>
	        <h2>${entry.subtitle}</h2>
	        <dl>
	          <dt>Dirección postal</dt>
	          <dd>${entry.address}</dd>
	          <dt>Ubicación</dt>
	          <dd>${entry.province}, ${entry.locality}</dd>
	          ...
	        </dl>`;
	    return html;
    }
};
```

O, teniendo la función del *template* separada del objeto de opciones. 

```js
/**
 * Template
 * @param {object} self - Definiciones generales de la clase.
 * @param {object} row - Entrada o fila de la fuente de datos.
 */ 
const template = (self, entry) => {
  const html = `
    <h1>${entry.title}</h1>
    <h2>${entry.subtitle}</h2>
    <dl>
      <dt>${self.header("address")}</dt>
      <dd>${entry.address}</dd>
      <dt>Ubicación</dt>
      <dd>${entry.province}, ${entry.locality}</dd>
      ...
    </dl>`;

  return html;
};

// Opciones para el mapa.
const opciones = {
    "template": template, // Asigno la función 
};
```
\*. El método `self.header()`, permite retornar el nombre asignado a la clave. Se le pasa como argumento el nombre de clave y retorna el header. Si no estuviera asignado retorna la clave.

##### Modificando la entrada y retornando el template por defecto

Otra alternativa es crear nuevos atributos personalizados para cada entrada y usar las opciones de [template_structure](#opciones-template-structure "Ver opciones de template_structure").

```js
const options = {
	"template": (self, row) => {
		row["entrada_personalizada"] = `<p>Mi valor personalizado</p>
			<img src=\"image.png\" alt=\"Una margarita en una maceta\">`;
		return self.default_template(self, row);
	},
	"template_structure":{
		"values": ["entrada_personalizada", "clave1", "clave2"]
	}
};
```


### <a name="headers"></a>Headers [⏎](#opciones "Ir al listado de opciones generales")

La opción `headers`, permite mapear cada una de las claves de la entrada con un nombre apropiado para mostrar en pantalla. 

```js
const opciones = {
    "headers": {
      "provincia": "Provincia",
      "localidad": "Localidad",
      "direccion_postal": "Dirección Postal",
      "codigo_postal": "Código Postal"
    } 
};
```

### <a id="opciones-marker-cluster-options"></a>Opciones para `marker_cluster_options` [⏎](#opciones "Ir al listado de opciones generales")

Se puede obtener el extenso listado de opciones y su documentación en [Leaflet Clusters](https://github.com/Leaflet/Leaflet.markercluster). 

#### Valores por defecto
```js
‘marker_cluster_options’: {  
    ‘spiderfyOnMaxZoom’: true,  
    ‘showCoverageOnHover’: false,  
    ‘zoomToBoundsOnClick’: true,  
    ‘maxClusterRadius’: 10,  
    ‘spiderfyDistanceMultiplier’: 1.5,  
    ‘spiderLegPolylineOptions’: {  
        ‘weight’: 1,  
        ‘color’: “#666”,  
        ‘opacity’: 0.5,  
    }  
}
```

### <a id="opciones-markdown-options"></a>Opciones para `markdown_options` [⏎](#opciones "Ir al listado de opciones generales")

#### Valores por defecto

La opción markdown_options permite incorporar todas las opciones que ofrece el plugin. Visite la sección [configuración de la documentación Showdown](https://showdownjs.com/docs/configuration/) para más información. 

```js
const options = {
	"markdown_options": {
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
	},
};
```


## <a id="opciones-poncho-map-filter" href="#opciones-poncho-map-filter">¶</a> Opciones para PonchoMapFilter

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| filters |`object`| `false` | Ver opciones para [filters](#opciones-filters)|
| filters_visible | `boolean` | `false` | Configura el estado inicial del panel de filtros. |
| filters_info | `boolean` | `false` | Muestra un icono con un _tooltip_ con el total de resultados por filtro. |

### <a id="opciones-filters"></a> Opciones para `filters`   [⏎](#opciones-poncho-map-filter "Ver opciones para PonchoMapFilter")

```js
const options = {
  "filters": [
    {
      "legend": "Ver",
      "type": "checkbox",
      "field": ["provincia", "checked"],
      "fields": false,
      "check_uncheck_all": false
    }
  ]
};
```
O con filtros armados manualmente
```js
const options = {
  "filters": [
    {
      "legend": "Ver",
      "type": "checkbox",
      "field": false,
      "fields": [
          ["provincia", "Buenos Aires", ["Buenos Aires", "Ciudad Autónoma de Buenos Aires"], "checked"],
          ["provincia", "Noreste Argentino", ["Chaco", "Corrientes", "Formosa", "Misiones"], "checked"],
          ["provincia", "Noroeste Argentino", ["Catamarca", "Jujuy", "La Rioja", "Salta", "Santiago del Estero", "Tucumán"]],
          ["provincia", "Región Centro", ["Córdoba", "Entre Ríos", "Santa Fe"]],
          ["provincia", "Región Cuyo", ["La Pampa", "Mendoza", "San Juan", "San Luis"]],
          ["provincia", "Región Patagonia", ["Chubut", "Neuquén", "Río Negro", "Santa Cruz", "Tierra del Fuego"]],
      ]
    }
  ]
};
```

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| legend | `string` | `false` | Establece un nombre para el legend en el fieldset de opciones. |
| type | `string` | checkbox | Define el tipo de input que debe reproducir el filtro. Dos opciones son las posibles: checkbox y radio.  |
| field | `Object` | `false` | Permite crear un filtro en base a una de las claves en la entrada de datos.<br><br>Ver opciones para [field](#opciones-field)|
| fields | `Object` | `false` | A diferencia de *field*, permite componer un filtro en base a criterios definidos por el usuario utilizando datos existentes en las entradas.<br><br>Ver opciones para [fields](#opciones-fields)|
| check_uncheck_all | `boolean` | `false` | Si se habilita dentro de cada fieldset, debajo del legend, se pueden visualizar los botones de: _marcar todos_ y _desmarcar todos_, los checkbox de ese filtro. |


####  <a id="opciones-field"></a> Opciones para `field`   [⏎](#opciones-filters "Ver opciones para filters")

```js
const options = {
	"filters": [
		{
		    "legend": "Ver",
		    "type": "checkbox",
		    "field": ["provincia", "checked"],
		    "fields": false
		}
	]
}
```
| Posición | Tipo | Descripción |
|:---|:---|:---|
| 0 | `string` | Clave por la que se quiere filtrar. |
| 1 | {`string|boolean`, ["checked",`false`]} | Designa el estado inicial de los checkbox. |


####  <a id="opciones-fields"></a> Opciones para `fields`   [⏎](#opciones-filters "Ver opciones para filters")

```js
const options = {
	"filters": [
		{
		    "legend": "Ver",
		    "type": "checkbox",
		    "field": false,
		    "fields": [
				[
			        "provincia",
			        "Noreste Argentino",
			        ["Chaco", "Corrientes", "Formosa", "Misiones"],
			        "checked"
			    ]
		    ]
		}
	]
}
```


| Posición | Tipo | Descripción |
|:---|:---|:---|
| 0 | `string` | Clave por la que se quiere filtrar. |
| 1 | `string` | Nombre que se verá en el `<label>` del checkbox |
| 2 | `object` | Listado de valores que se deberá buscar en cada iteración de búsqueda. |
| 3 | {`string|boolean`, ["checked",`false`]} | Designa el estado inicial del checkbox. |



----

## <a id="opciones-poncho-map-search" href="#opciones-poncho-map-search">¶</a> Opciones para PonchoMapSearch

| Parámetro | Tipo | Default | Descripción | Tipo de uso |
|:---|:---|:---|:---|:---|
| scope | object |  | Scope se utiliza para asegurarse de que todas las funciones serán sobre el ambiente de un buscado y un mapa determinados. | _Requerido_ |
| placeholder | `string` | Su búsqueda | Texto de ayuda que aparece en un tono medio en el selector de items, complementa al label de un form. | *Opcional* |
| search_fields | `object` | [] | Define los índices que se utilizan para realizar la búsqueda. Ej. `["provincia", "localidad", "nombre"]` | *Opcional* |
| datalist | `boolean` | `true` | Despliega un HTML datalis para el input | *Opcional* |

#### Ejemplo de uso para el buscador

```javascript
// PonchoMap
const options = {...};
const poncho_map = new PonchoMapFilter(entradas_json, options);
poncho_map.render();

// Configuración de PonchoMapSearch
const search_options = {
  "scope":"search-efectores",
  "placeholder":"Buscá tu Punto Digital",
  "search_fields": [
      "nombre",
      "institucion",
      "localidad",
      "provincia",
      "municipio_nombre"
  ]
};
search = new PonchoMapSearch(poncho_map, search_options);
search.render();
```


## <a id="metodos" href="#metodos">¶</a> Métodos

### <a id="metodos-poncho-map" href="#metodos-poncho-map">¶</a> PonchoMap

| Método | Retrono | Descripción |
|:--|:--|:--|
| entry | `object` | Retrona una entrada pasándo su id por parámetro. |
| selected_marker | `object` | Retorna el último marker seleccionado en un objeto con dos índices; el primero es la entrada asignada al *marker* y el segundo es la instancia *leaflet* de ese *marker*  |
| resetView | `void` | Reestablece la posión y el zoom del mapa y los *markers* a su posición inicial por defecto. |
| hasHash | boolean:false \| string | Retorna el identificador del *marker* pasado por URL. |
| gotoEntry | `void` | Retorna el identificador del *marker* pasado por URL. |
| gotoHashedEntry | `void` | Obtiene el hash desde la url y hace zoom sobre el marker con ese identificador. Según la configuración puede abrir un popUp o el slider. |
| entries | `object` | Objeto con las entradas iniciales, sin filtrar o procesar. |
| map | `object` | Objeto map de leaflet. |
| markers | `object` | Objeto markers de leaflet. |

### <a id="metodos-poncho-map-filter" href="#metodos-poncho-map-filter">¶</a> PonchoMapFilter

| Método | Retrono | Descripción |
|:--|:--|:--|
| filteredEntries | `object` | Objeto con las entradas filtradas. |
| totals | `object` | Retorna la cantidad de markers por cada uno de los filtros. Asi como retorna los totales también la posición del filtro. |
| formFilters | `object` | Retorna los fitros marcados. Los datos de retorno son: el grupo de filtro y el indice en el grupo. |



## <a id="modo-uso" href="#modo-uso">¶</a> Modo de uso

### <a id="codigo" href="#codigo"></a>Estructura HTML

Lo conveniente es tener la asignación de documentos CSS dentro de la etiqueta `<head>` y la llamada a los documentos JavaScript inmediatamente antes del cierre del body (`</body>`).

```html
<!-- CSS FILES -->
<link href="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.css" rel="stylesheet"/>
<link href="https://mapa-ign.argentina.gob.ar/js/leaflet/MarkerCluster.css" rel="stylesheet"/>
<link href="https://mapa-ign.argentina.gob.ar/js/leaflet/MarkerCluster.Default.css" rel="stylesheet"/>
<!-- / CSS FILES -->
```

```html
<!-- JAVASCRIPT FILES -->
<script src="https://www.argentina.gob.ar/sites/default/files/ponchotable/showdown.js"></script>
<script  src="https://www.argentina.gob.ar/profiles/argentinagobar/themes/argentinagobar/argentinagobar_theme/js/extensiones/showdown-extensions.js"></script>
<script src="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.js"></script>
<script src="https://mapa-ign.argentina.gob.ar/js/leaflet/leaflet.markercluster.js"></script>
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<!-- / JAVASCRIPT FILES -->
```

Si se desea utilizar el buscador debe incluirse el siguiente código. El código puede ubicarse en el lugar de la página donde sea más conveniente. 

```html
<!-- PONCHO MAP SEARCH -->
<form>
  <div data-scope="poncho-map-search-scope">
      <div class="input-group">
          <input 
              type="search" 
              name="search" 
              autocomplete="off"
              class="js-poncho-map-search__input form-control" 
              list="list">
              <datalist id="list" class="js-porcho-map-search__list"></datalist>
          <span class="input-group-btn">
            <button class="js-poncho-map-search__submit btn btn-primary">
              <i class="fa fa-search text-white">&nbsp;</i>
            </button>
          </span>
      </div>
      <div data-scope="poncho-map-scope" class="m-b-1">
          <div class="js-poncho-map__help small text-default"></div>
      </div>
  </div>
</form>
<!-- / PONCHO MAP SEARCH -->
```
Para que se imprima el mapa con todas las opciones de PonchoMap se debe incluir el siguiente código.  Pueden agregarse atributos, pero  `data-scope=""` y la clase `poncho-map` deben estar presentes.
```html
<!-- PONCHO MAP -->
<div class="poncho-map" data-scope="poncho-map-scope">
    <div
        class="leaflet-container leaflet-touch leaflet-fade-anim 
              leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        id="map"
        style="height: 600px; width: 100%;">
    </div>
</div>
<!-- / PONCHO MAP -->
```
Por último agregamos la llamada al mapa.

```js
<script>
  // init
  (async() => {
      // fetch data
      const url = "[URL endpoint]";
      const sheet_data = await fetch_json(url); 
      // render map
      const options = {
          "template": template,
          "scope": "poncho-map"
      };
      const mapa = new PonchoMapFilter(sheet_data, options);
      mapa.render();
  })();
</script>
```




## Referencias
1. jQuery <[https://jquery.com/](https://jquery.com/)>
2. Leaftlet <[https://leafletjs.com/](https://leafletjs.com/)>
****