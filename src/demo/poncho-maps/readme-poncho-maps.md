# Poncho Map & Poncho Map Filter

## Opciones

La siguiente es una lista de las opciones con su descripción y tipo.

| Parámetro | Tipo | Default | Descripción | Tipo de uso |
|:---|:---|:---|:---|:---|
| scope | `string` | _`empty string`_ | Es el ambiente de trabajo sobre un mapa en particular. Cuando se utiliza más de un mapa en la página esto sirve para diferenciarlos. | *obligatorio* |
| id | `string` | id | Nombre de la columna donde se encuentra el id. Si la fuente de datos usa otro nombre se define con esta opción. Ej. `'id':'id_punto_digital'`.| *Opcional* |
| latitud | `string` | latitud | Nombre de la columna con el valor de latitud. Si la fuente de datos usa otro nombre se define con esta opción. Ej. `'latitud':'lat'`.| *Opcional* |
| longitud | `string` | longitud | Nombre de la columna con el valor de longitud. Si la fuente de datos usa otro nombre se define con esta opción. Ej. `'longitud':'lng'`.| *Opcional* |
| template | `object` | `null` | Define la función que controla el template para el popUp o el slider.| *Opcional* |
| template_structure | `object` | `{}` | Permite definir un listado de valores a mostarar en el template por defecto o excluir valores que no se deseen mostrar.| *Opcional* |
| template_innerhtml | `boolean` | `false` | Permite incrustar html dentro de la descripción.| *Opcional* |
| template_container_class_list | `Array()` | `['info-container']` | Define la lista de clases CSS que pueden agregarse al contenedor del listado de terminos y descripciones. | *Opcional* |
| template_title_class_list | `Array()` | `['h4','title']` | Define la función que controla el template para el popUp o el slider.| *Opcional* |
| template_dl_class_list | `Array()` | `['definition-list']` | Define la función que controla el template para el popUp o el slider.| *Opcional* |
| headers | `object` | `{}` | Permite definir títulos dinámicos mapeando la clave del objeto que contiene la información con los encabezados | *Opcional* |
| hash | `boolean` | `false` | Habilita la acción por la cual, cada vez que se hace *clic* en un marker se reemplaza el hash en la barra de dirección del navegador.| *Opcional* |
| slider | `boolean` | `false` | Habilita el slider y reemplaza el popUp.| *Opcional* |
| anchor_delay | `integer` | 0 | Tiempo de demora entre que se carga la página y se muestra el marker pasado por url. El valor es en milisegundos (1" = 1000). | *Opcional* |
| scroll | `boolean` | `false` | Hace un scroll para posisionar la página en el borde superior del mapa cuando se carga la página.| *Opcional* |
| marker | `string` \| `function` | azul | Permite asignar un color distinto o usar una función para cambiar la lógica en la que se muestran los colores o usar iconos de otro tipo. (Ver ejemplos.) | *Opcional* |
| filters_visible | `boolean` | `false` | Configura el estado inicial del panel de filtros. | *Opcional* |
| map_anchor_zoom | `integer` | 16 | Configuración del zoom para los markers que se deben visualizar pasándo por hash el id del marker.| *Opcional* |
| map_zoom | `integer` | 4 | Configuración del valor inicial para el zoom del mapa.| *Opcional* |
| map_view | `Array Object` | `[-40.44, -63.59]` | Geoposicionamiento inicial del mapa. | *Opcional* |
| marker_cluster_options | `Object` | <pre>'marker_cluster_options': {<br>    'spiderfyOnMaxZoom': true,<br>    'showCoverageOnHover': false,<br>    'zoomToBoundsOnClick': true,<br>    'maxClusterRadius': 10,<br>    'spiderfyDistanceMultiplier': 1.5,<br>    'spiderLegPolylineOptions': {<br>        'weight': 1,<br>        'color': "#666",<br>        'opacity': 0.5,<br>    }<br>}</pre> | Opciones Leaflet. Ver <https://github.com/Leaflet/Leaflet.markercluster> | *opcional* |


## Markers

### Colores

La opción `marker` nos permite definir el color de los *markers* asignando el nombre de [color poncho](https://argob.github.io/poncho/identidad/colores/) del siguiente modo:

```js
const options = {
    'marker_color': 'mandarina',
    ...
};
```

Otra opción es agregar una función en la que podemos definir una lógica de colores de acuerdo a la fuente de datos que nos llega, por ejemplo: 

```js
const options = {
    'marker_color': (self, ele) => { 
        let color = "cielo";
        if(ele.estado_funcionamiento == '3'){
            color = "mandarina";
        } else if(ele.estado_funcionamiento == '5'){
            color = 'rojo';
        }
        return color;
    }
    ...
};
```

### Modificando el tipo de marker

Esta opción también ofrece la posibilidad de crear *markers* utilizando imágenes o en formato html. En el siguiente ejemplo se ve como se puede aplicar un icóno de Poncho Fonts en un *marker*. Cuando se utiliza la función de esta manera debe retornan una instancia de `L.icon` o variantes *leaflet*.

```js
const options = {
    ...
    'custom_marker': (self, ele) => {
      // icono tipo html
      const icon_div = (color) => {
          return new L.divIcon({
              html: `<i class='icono-arg-marcador-ubicacion-2 text-${color}'>`,
              iconSize: [38, 24],
              iconAnchor: [22, 41],
              popupAnchor: [-3, -40]
          });
      };

      if(ele.provincia == "Misiones"){
          return icon_div('cereza');
      } else if (prov == "Buenos Aires"){
          return self.icon('mandarina');
      }
    },
    ...
}
```


## Templates

Existen tres formas de modificar cómo se va a visualizar la información, tanto en los popUps como en el slider.

### Automático

Si no se define un *template*, el programa lista todos los elementos de cada item (fila) y los acomoda agregando el término y su definición. Si se agregaron [Headers](#headers) los utiliza para mejorar la lectura.

### Definir estructura

El segundo modo es definir que elementos se utilizarán en el mensaje. Para esto debemos utilizar la opción `template_structure` en las opciones y definir que elementos queremos excluir o cuales queremos utilizar. La elección depende de la practicidad.

A la estructura también se le puede asignar cual de las columnas se utilizará como título.

#### Excluyendo elementos de la entrada de datos

```js
const options = {
    'template_structure': {
        'title': 'col-titulo',
        'values': [],
        'exclude': ['col1', 'col2', 'col6'],
    }
};
```
#### Definiendo solo los valores que se muestran

```js
const options = {
    'template_structure': {
        'title': 'col-titulo',
        'values': ['col1', 'col2'],
        'exclude': [],
    }
};
```


### Asignando una función

Es posible incluir una función que defina las particularidades que debe tener el mensaje. Este es un modo avanzado en el que se deben tener conocimientos de *JavaScript* para crear la lógica del *template*.

#### Ejemplos

##### Función dentro y fuera del grupo de opciones

```js
const opciones = {
    'template': (self, row) => {
      const html = `
        <h1>${row.title}</h1>
        <h2>${row.subtitle}</h2>
        <dl>
          <dt>Dirección postal</dt>
          <dd>${row.address}</dd>
          <dt>Ubicación</dt>
          <dd>${row.province}, ${row.locality}</dd>
          ...
        </dl>`;

      return html;
    }
};
```

O teniendo la función del *template* separada del objeto de opciones. 

```js
/**
 * Template
 * @param {object} self - Definiciones generales de la clase.
 * @param {object} row - Entrada o fila de la fuente de datos.
 */ 
const template = (self, row) => {
  const html = `
    <h1>${row.title}</h1>
    <h2>${row.subtitle}</h2>
    <dl>
      <dt>${self.header('address')}</dt>
      <dd>${row.address}</dd>
      <dt>Ubicación</dt>
      <dd>${row.province}, ${row.locality}</dd>
      ...
    </dl>`;

  return html;
};

// Opciones para el mapa.
const opciones = {
    'template': template, // Asigno la función 
    ...
};
```
\*. El método `self.header()`, permite retornar el nombre asignado a la columna si éste hubiera sido ofrecido en las opciones. Se le pasa como argumento el nombre de columna y retorna el header si lo tiene o el nombre de columna por defecto.

##### Modificando la entrada y retornando el template por defecto

Otra alternativa es modificar valores de la entrada para crear una nueva utilizando el template por default .

```js
const options = {
  'template': (self, row) => {
      row['entrada_personalizada'] = 'Mi valor personalizado';
      row['address'] = [row.address, row.locality, row.province].join(', ');
      return self.default_template(self, row);
  },
  ...
};
```

##### Utilizando markdown en una de las entradas

```js
const options = {
  'template_innerhtml': true,
  'template': (self, row) => {
    // showdown
    const converter = new showdown.Converter();
    row['custom_entry'] = converter.makeHtml(
          'Prueba *markdown* [argentina.gob.ar](https://www.argentina.gob.ar/)'
    );
    const html = self.default_template(self, row);
    return converter.makeHtml(html);
  },
  ...
};
```

## <a name="headers"></a>Headers

La opción `headers`, permite mapear los nombres de columna con un nombre apropiado para mostrar en pantalla. 

```js
const opciones = {
    'headers': {
      'provincia': 'Provincia',
      'localidad': 'Localidad',
      'direccion': 'Dirección Postal',
      'cp': 'Código Postal',
      ...
    } 
    ...
};
```

***

## Filtros

Los filtros son un componente que se incluye en _PonchoMapFilters_. Se utiliza de forma independiente a _PonchoMaps_ pero incluye todas las opciones de éste.

### Código

Las opciones para los filtros se incluyen en las opcioens generales del mapa. 

```js
const options = {
  ...
  'filters' :[
    {
      'legend' : 'Ver',
      'fields' : [
          ['estado_funcionamiento', 'Abiertos', ['1'], 'checked', 'strict'],
          ['estado_funcionamiento', 'Cerrados temporalmente', ['3'], false, 'strict'],
          ['provincia', 'Buenos Aires', ['Buenos Aires', 'Ciudad Autónoma de Buenos Aires'], 'checked'],
          ['provincia', 'Noreste Argentino', ['Chaco', 'Corrientes', 'Formosa', 'Misiones'], 'checked'],
          ['provincia', 'Noroeste Argentino', ['Catamarca', 'Jujuy', 'La Rioja', 'Salta', 'Santiago del Estero', 'Tucumán']],
          ['provincia', 'Región Centro', ['Córdoba', 'Entre Ríos', 'Santa Fe']],
          ['provincia', 'Región Cuyo', ['La Pampa', 'Mendoza', 'San Juan', 'San Luis']],
          ['provincia', 'Región Patagonia', ['Chubut', 'Neuquén', 'Río Negro', 'Santa Cruz', 'Tierra del Fuego']],
      ]
    },
  ],
};
```

Este ejemplo tiene dos filtros generales: estado_funcionamiento y provincia. Éstas son columnas de la tabla —o entrada—, donde se obtienen los datos. El usuario deberá configurar cada una de las entradas asignando parámetros del siguiente modo:

```js
['provincia', 'Noreste Argentino', ['Chaco', 'Corrientes', 'Formosa', 'Misiones'], 'checked'],
```

### Opciones

| Posición | Tipo | Descripción |
|:---|:---|:---|
| 0 | `string` | Nombre de la columna por la que se quiere filtrar. |
| 1 | `string` | Nombre que se verá en el `<label>` del checkbox |
| 2 | `Array()` | Listado de valores que se deberá buscar en cada iteración de búsqueda. |
| 3 | { `string` \| `boolean`, ['checked',`false`] } | Designa el estado inicial del checkbox. |
| 4 | { `string` \| `boolean`, ['strict',`false`] }  | Si se usa el modo *strict*, la condición de que el valor se encuentre en la búsqueda será obligatoria. |

***

## Modo de uso

### Incluir los archivos JavaScript y JavaScript dependientes

```html
<!-- INCLUDE SCRIPTS -->
<script src="https://gis.argentina.gob.ar/js/leaflet/leaflet.js"></script>
<script src="https://gis.argentina.gob.ar/js/leaflet/leaflet.markercluster.js"></script>
<script src="https://www.argentina.gob.ar/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<!-- / INCLUDE SCRIPTS -->
```


### Estructura HTML


```html
<!-- poncho map -->
<div class="poncho-map" data-scope="poncho-map">
<!-- leaflet -->
<div
    class="leaflet-container leaflet-touch leaflet-fade-anim 
           leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
    id="map"
    style="height:800px; width:100%;"
    tabindex="0">
</div>
<!-- / leaflet -->
</div>
<!-- / poncho map -->
```

### JavaScript

```js
<script>
  // init
  (async() => {
      // fetch data
      const url = '[URL endpoint]';
      const sheet_data = await fetch_json(url); 
      // render map
      const options = {
          'template': template,
          'scope': 'poncho-map'
      };
      const mapa = new PonchoMap(sheet_data, options);
      mapa.render();
  })();
</script>
```

O Poncho Map filters

```js
<script>
  // init
  (async() => {
      // fetch data
      const url = '[URL endpoint]';
      const sheet_data = await fetch_json(url); 
      // render map
      const options = {
          'template': template,
          'scope': 'poncho-map-filter',
          'filters' :[
              {
                'legend': 'Ver',
                'fields': [
                    ['provincia', 'Buenos Aires', ['Buenos Aires'], 'checked', 'strct'],
                    ['provincia', 'Noreste Argentino', ['Chaco', 'Corrientes', 'Formosa', 'Misiones'], 'checked'],
                ]
              },
          ],
      };
      const mapa = new PonchoMapFilter(sheet_data, options);
      mapa.render();
  })();
</script>
```

## Estilo gráfico

El componente permite modificar alguno de los atributos del slider y los componentes que se ayiornan al mapa. El estilo css dispone de variables que pueden modificarse por cada instancia. ejemplo.

### Variables CSS

```css
.poncho-map {
    --slider-width: 300px;
    --slider-title-color: var(--primary);
    --map-background: grey;
    --slider-color: inherit;
    --slider-background: rgba(255, 255, 255, 1);
    --slider-border: none;
    --slider-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    --slider-top: 10px;
    --slider-right: 10px;
    --slider-left: 10px;
    --slider-bottom: 10px;
    --slider-radius: 16px;
    --active-marker-color: 255, 206, 0;
    --active-marker-alpha: .5;
    --slider-media-mobile-height: 45%;
}
```

### Ejemplos

#### Usando los estilos para dar color al tema *dark*

```css
<style>
  @media (prefers-color-scheme: dark) {
      div.poncho-map {
        --slider-width: 400px;
        --slider-background: #333;
        --slider-color: #f4f4f4;
        --slider-title-color:#cddc39;
      }
  }

  div.poncho-map {
      --slider-width: 350px;
  } 
</style>
```

![Tema oscuro](img/dark-mode.jpg "Dark mode")
