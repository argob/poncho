# PonchoMap

![Poncho Map](./demo/img/map.png)


## Tabla de contenidos

- [PonchoMap](#ponchomap)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Opciones generales](#opciones-generales)


---

## Opciones generales

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parámetro</th>
      <th style="text-align:left">Tipo</th>
      <th style="text-align:left">Default</th>
      <th style="text-align:left">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">allowed_tags</td>
      <td style="text-align:left"><code>object</code></td>
      <td style="text-align:left"><code>[]</code></td>
      <td style="text-align:left">Configura el listado de etiquetas HTML que se renderizarán como parte del DOM en lugar de texto plano. Para habilitar todas las etiquetas utilice <code>["*"]</code>. Para especificar etiquetas particulares, por ejemplo: <code>["a", "strong"]</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">anchor_delay</td>
      <td style="text-align:left"><code>integer</code></td>
      <td style="text-align:left">0</td>
      <td style="text-align:left">Define el tiempo de espera (en milisegundos) entre la carga de la página y la visualización del marker especificado en la URL. Ejemplo: 1 segundo = 1000 milisegundos.</td>
    </tr>
    <tr>
      <td style="text-align:left">breakpoint</td>
      <td style="text-align:left"><code>Array object</code></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define los puntos de quiebre para diferentes tamaños de dispositivos. Ejemplo: <code>breakpoint: {lg: 992, xl: 1200, sm: 576, md: 768}</code></td>
    </tr>
    <tr>
      <td style="text-align:left">breakpoint_fraction</td>
      <td style="text-align:left"><code>Array object</code></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Define la alineación del mapa según el tamaño del dispositivo. Ejemplo: <code>breakpoint_fraction: {sm: "1:4", md: "1:4", lg: "1:3", xl: "2:7"}</code></td>
    </tr>
    <tr>
      <td style="text-align:left">content_selector</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Establece un selector CSS alternativo donde se renderizará el contenido.</td>
    </tr>
    <tr>
      <td style="text-align:left">error_reporting</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left">true</td>
      <td style="text-align:left">Activa o desactiva la visualización de errores y advertencias en el mapa.</td>
    </tr>
    <tr>
      <td style="text-align:left">fit_bounds_onevent</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>true</code></td>
      <td style="text-align:left">Realiza un ajuste automático del zoom sobre el polígono, línea o marcador cuando se utiliza el selector o se especifica por URL.</td>
    </tr>
    <tr>
      <td style="text-align:left">hash</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Habilita la actualización automática del hash en la URL del navegador cada vez que se hace clic en un marker.</td>
    </tr>
    <tr>
      <td style="text-align:left">header_icons</td>
      <td style="text-align:left"><code>object</code></td>
      <td style="text-align:left"><code>{}</code></td>
      <td style="text-align:left"><p>Define un ícono personalizado para cada encabezado de la entrada.</p><p><a href="#opciones-para-header_icons">Ver opciones para header_icons</a>.</p></td>
    </tr>
    <tr>
      <td style="text-align:left">headers</td>
      <td style="text-align:left"><code>object</code></td>
      <td style="text-align:left"><code>{}</code></td>
      <td style="text-align:left">Define títulos dinámicos mapeando las claves del objeto de datos con los encabezados correspondientes.</td>
    </tr>
    <tr>
      <td style="text-align:left">id</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left">id</td>
      <td style="text-align:left">Especifica el nombre de la columna que contiene el identificador. Utilice esta opción si la fuente de datos usa un nombre diferente. Ejemplo: <code>"id":"id_punto_digital"</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">id_mixing</td>
      <td style="text-align:left"><code>object</code></td>
      <td style="text-align:left"><code>[]</code></td>
      <td style="text-align:left"><p>Define cómo se generará el identificador de un marcador, polígono o línea del mapa, concatenando índices o cadenas de texto en un array. Ejemplo: <code>["id", "cadena-de-texto", "name"]</code>.</p><p>El orden de los elementos depende del criterio de implementación. Las cadenas de texto se procesan mediante un filtro que las convierte en <a href="https://es.wikipedia.org/wiki/Slug">slug</a>.</p></td>
    </tr>
    <tr>
      <td style="text-align:left">latitud</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left">latitud</td>
      <td style="text-align:left">Especifica el nombre de la columna que contiene el valor de latitud. Utilice esta opción si la fuente de datos usa un nombre diferente. Ejemplo: <code>"latitud":"lat"</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">longitud</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left">longitud</td>
      <td style="text-align:left">Especifica el nombre de la columna que contiene el valor de longitud. Utilice esta opción si la fuente de datos usa un nombre diferente. Ejemplo: <code>"longitud":"lng"</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">map_align</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left"><code>center</code></td>
      <td style="text-align:left">Define la alineación horizontal del mapa dentro de su contenedor. Opciones: <em>«left»</em> o <em>«right»</em>.</td>
    </tr>
    <tr>
      <td style="text-align:left">map_anchor_zoom</td>
      <td style="text-align:left"><code>integer</code></td>
      <td style="text-align:left">16</td>
      <td style="text-align:left">Define el nivel de zoom aplicado cuando se visualiza un marker especificado mediante hash en la URL.</td>
    </tr>
    <tr>
      <td style="text-align:left">map_background</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left"><code>#DDD</code></td>
      <td style="text-align:left"><p>Define el color de fondo del mapa.</p><p>En combinación con <code>map_opacity</code>, puede generar efectos visuales interesantes.</p></td>
    </tr>
    <tr>
      <td style="text-align:left">map_layers</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>true</code></td>
      <td style="text-align:left">Habilita o deshabilita el control para alternar entre la vista satelital y el mapa estándar.</td>
    </tr>
    <tr>
      <td style="text-align:left">map_layers_default</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left"><code>map</code></td>
      <td style="text-align:left">Define la vista inicial del mapa. Opciones: <em>satelital</em> o <em>map</em>.</td>
    </tr>
    <tr>
      <td style="text-align:left">map_opacity</td>
      <td style="text-align:left"><code>float</code></td>
      <td style="text-align:left">1</td>
      <td style="text-align:left">Define la opacidad de los mosaicos (<em>tiles</em>) que componen el mapa. El rango de valores es de 0 a 1. Ejemplo: <code>map_opacity: 0.5</code></td>
    </tr>
    <tr>
      <td style="text-align:left">map_selector</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left">map</td>
      <td style="text-align:left">Especifica el ID del elemento HTML que Leaflet utilizará para renderizar el mapa.</td>
    </tr>
    <tr>
      <td style="text-align:left">map_view</td>
      <td style="text-align:left"><code>Array Object</code></td>
      <td style="text-align:left"><code>[-40.44, -63.59]</code></td>
      <td style="text-align:left">Define las coordenadas geográficas iniciales del centro del mapa.</td>
    </tr>
    <tr>
      <td style="text-align:left">map_zoom</td>
      <td style="text-align:left"><code>integer</code></td>
      <td style="text-align:left">4</td>
      <td style="text-align:left">Define el nivel de zoom inicial del mapa.</td>
    </tr>
    <tr>
      <td style="text-align:left">marker</td>
      <td style="text-align:left"><code>string, function</code></td>
      <td style="text-align:left">azul</td>
      <td style="text-align:left"><p>Permite asignar un color específico a los marcadores o definir una función personalizada para controlar los colores o tipos de iconos.</p><p><a href="#opciones-para-marker">Ver opciones para marker</a>.</p></td>
    </tr>
    <tr>
      <td style="text-align:left">marker_cluster_options</td>
      <td style="text-align:left"><code>Object</code></td>
      <td style="text-align:left"><code>"marker_cluster_options": {}</code></td>
      <td style="text-align:left"> <a href="#opciones-para-marker_cluster_options">Ver opciones para marker_cluster_options</a></td>
    </tr>
    <tr>
      <td style="text-align:left">markdown_options</td>
      <td style="text-align:left"><code>object</code></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"><p>Configura las opciones del plugin showdown.js.</p><p><a href="#opciones-para-markdown_options">Ver opciones para markdown_options</a></p></td>
    </tr>
    <tr>
      <td style="text-align:left">no_info</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Deshabilita la visualización de información de los marcadores. Cuando está activa, no se despliega el popup ni el slider.</td>
    </tr>
    <tr>
      <td style="text-align:left">open_maps</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left"><p>Habilita el menú de enlaces alternativos.</p><p><a href="#open-maps">Ver open maps</a></p></td>
    </tr>
    <tr>
      <td style="text-align:left">open_maps_options</td>
      <td style="text-align:left"><code>object</code></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"><p>Permite redefinir el nombre del desplegable y los enlaces a mapas externos.</p><p><a href="#opciones-para-open_maps_options">Ver opciones para open_maps_options</a></p></td>
    </tr>
    <tr>
      <td style="text-align:left">render_slider</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>true</code></td>
      <td style="text-align:left">Habilita o deshabilita la creación del componente slider en el mapa.</td>
    </tr>
    <tr>
      <td style="text-align:left">reset_zoom</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Habilita un botón entre los controles de <em>zoom-out</em> y <em>zoom-in</em> para restablecer la vista y mostrar todos los markers del mapa.</td>
    </tr>
    <tr>
      <td style="text-align:left">scope</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left"><em><code>empty string</code></em></td>
      <td style="text-align:left">Define un identificador de ámbito para el mapa. Útil para diferenciar múltiples mapas en una misma página.</td>
    </tr>
    <tr>
      <td style="text-align:left">scroll</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Realiza un desplazamiento automático para posicionar la ventana del navegador en el borde superior del mapa al cargar la página.</td>
    </tr>
    <tr>
      <td style="text-align:left">slider</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Habilita el slider como alternativa al popup para mostrar información de los marcadores.</td>
    </tr>
    <tr>
      <td style="text-align:left">slider_size</td>
      <td style="text-align:left"><code>string\|false</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left"><p>Define el tamaño del slider. Opciones:</p>
          <dl>
    <dt>large</dt>
    <dd>Tarjeta con ancho del 50&nbsp;%.</dd>
    <dt>default</dt>
    <dd>Tarjeta con tamaño por defecto (aproximadamente 30&nbsp;%).</dd>
    </dl> </td>
    </tr>
    <tr>
      <td style="text-align:left">summary</td>
      <td style="text-align:left"><code>string|object</code></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"><p>Agrega una descripción o propósito del mapa. El sumario puede estar oculto pero accesible para lectores de pantalla, o puede personalizarse mediante las opciones css o style.</p>
      <div>
      <code>summary: "cadena de texto"</code>
      </div>
      <p>o</p>
      <div>
<pre><code>summary: {
    title: "Cadena de texto",
    hidden: "boolean",
    css: "object|string",
    style: "object|string",
    position: "top|bottom"
}</code></pre>
      </div>
      <p><a href="#opciones-para-summary">Ver opciones para <em>summary</em></a>.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">template</td>
      <td style="text-align:left"><code>object</code></td>
      <td style="text-align:left"><code>null</code></td>
      <td style="text-align:left"><p>Define la función que controla el template para el popup o el slider.</p><p><a href="#opciones-para-templates">Ver opciones para template</a>.</p></td>
    </tr>
    <tr>
      <td style="text-align:left">template_innerhtml</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Habilita la inserción de código HTML dentro de la descripción.</td>
    </tr>
    <tr>
      <td style="text-align:left">template_markdown</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Habilita el uso del plugin <a href="https://showdownjs.com">showdown.js</a> para procesar contenido en formato Markdown.</td>
    </tr>
    <tr>
      <td style="text-align:left">template_structure</td>
      <td style="text-align:left"><code>object</code></td>
      <td style="text-align:left"><code>{}</code></td>
      <td style="text-align:left"><p>Define el listado de valores a mostrar en el template por defecto o excluye valores que no se deseen mostrar.</p><p><a href="#opciones-para-template_structure">Ver opciones para template_structure</a>.</p></td>
    </tr>
    <tr>
      <td style="text-align:left">theme</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left"><code>default</code></td>
      <td style="text-align:left"><p>Define el tema visual de la interfaz y el mapa. Opciones disponibles:</p><ul><li><em>default</em>, Original</li><li><em>contrast</em>, Alto contraste</li><li><em>dark</em>, Oscuro</li><li><em>grayscale</em>, Gris</li><li><em>sepia</em>, Sepia</li><li><em>blue</em>, Azul</li><li><em>relax</em>, Relax</li><li><em>transparent</em>, Transparente</li></ul></td>
    </tr>
    <tr>
      <td style="text-align:left">theme_map</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left"><code>default</code></td>
      <td style="text-align:left">Define el tema de color específico para el mapa.</td>
    </tr>
    <tr>
      <td style="text-align:left">theme_tool</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>true</code></td>
      <td style="text-align:left">Habilita o deshabilita la herramienta de selección de temas para el usuario.</td>
    </tr>
    <tr>
      <td style="text-align:left">theme_ui</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left"><code>default</code></td>
      <td style="text-align:left">Define el tema de color específico para la interfaz del mapa.</td>
    </tr>
    <tr>
      <td style="text-align:left">tooltip</td>
      <td style="text-align:left"><code>boolean</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Habilita el componente tooltip que muestra información emergente al pasar el cursor sobre un elemento del mapa.</td>
    </tr>
    <tr>
      <td style="text-align:left">tooltip_label</td>
      <td style="text-align:left"><code>string</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left"><p>Define el texto y el formato de presentación de la información del tooltip.</p><p><a href="#opciones-para-templates">Ver opciones para tooltip_label</a></p></td>
    </tr>
    <tr>
      <td style="text-align:left">tooltip_options</td>
      <td style="text-align:left"><code>object</code></td>
      <td style="text-align:left"><code>false</code></td>
      <td style="text-align:left">Configura las opciones del componente tooltip según las especificaciones de Leaflet.</td>
    </tr>
  </tbody>
</table>