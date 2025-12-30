# Mapa de Argentina con filtro por provincias

- [Mapa de Argentina con filtro por provincias](#mapa-de-argentina-con-filtro-por-provincias)
  - [**Opciones**](#opciones)
    - [Orden de precedencia para entradas iniciales](#orden-de-precedencia-para-entradas-iniciales)


![](./img/home-display-1.png)



Módulo que implementa _ponchoMap_ mediante un GeoJSON con polígonos por provincia.



## **Opciones**

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
<td style="text-align:left">initial_entry</td>
<td style="text-align:left"><code>string</code></td>
<td style="text-align:left"><em>empty</em></td>
<td style="text-align:left">Asigna una provincia para visualizarla al cargar la página (consultar órdenes de precedencia).</td>
</tr>
<tr>
<td style="text-align:left">random_entry</td>
<td style="text-align:left"><code>boolean</code></td>
<td style="text-align:left"><code>false</code></td>
<td style="text-align:left">Asigna <em>aleatoriamente</em> una provincia al cargar la página (consultar órdenes de precedencia).</td>
</tr>
<tr>
<td style="text-align:left">overlay_image</td>
<td style="text-align:left"><code>boolean</code></td>
<td style="text-align:left"><em><code>true</code></em></td>
<td style="text-align:left">Si es <em>true</em>, visualiza la imagen sobrepuesta al mapa de OpenStreetMap (OSM).</td>
</tr>
<tr>
<td style="text-align:left">overlay_image_bounds</td>
<td style="text-align:left"><code>object</code></td>
<td style="text-align:left"><pre style="font-size:smaller"><code>[
    [
      -20.70565857951651, 
      -24.50543849552044],
    [
      -88.20759652502107,
      -74.4619171280653
    ]
]</code></pre></td>
<td style="text-align:left">Coordenadas geográficas que definen el área visible del mapa.</td>
</tr>
<tr>
<td style="text-align:left">overlay_image_url</td>
<td style="text-align:left"><code>string</code></td>
<td style="text-align:left">/profiles/argentinagobar/themes/contrib/poncho/img/map-shadow-antartida.png</td>
<td style="text-align:left">Ruta de la imagen sobrepuesta al mapa OSM.</td>
</tr>
<tr>
<td style="text-align:left">overlay_image_opacity</td>
<td style="text-align:left"><code>float</code></td>
<td style="text-align:left">0.8</td>
<td style="text-align:left">Define la opacidad de la imagen sobrepuesta al mapa.</td>
</tr>
<tr>
<td style="text-align:left">province_index</td>
<td style="text-align:left"><code>string</code></td>
<td style="text-align:left">provincia</td>
<td style="text-align:left">Define el nombre de la columna o índice del objeto desde donde se obtiene el nombre de la provincia.</td>
</tr>
<tr>
<td style="text-align:left">toggle_select</td>
<td style="text-align:left"><code>boolean</code></td>
<td style="text-align:left">true</td>
<td style="text-align:left"><dl><dt><code>true</code></dt><dd>Si el <em>viewport</em> es inferior a 992 píxeles de ancho, muestra el componente select con el listado de provincias y oculta el mapa.</dd>
<dt><code>false</code></dt><dd>Mantiene visibles tanto el componente select como el mapa en todo momento.</dd></dl>
<p>* Cuando se utiliza el mapa completo (mapa con slider o popup), <code>true</code> oculta el mapa. Se recomienda esta opción para el modo de mapa con descripción externa.</p></td>
</tr>
<tr>
<td style="text-align:left">hide_select</td>
<td style="text-align:left"><code>boolean</code></td>
<td style="text-align:left">false</td>
<td style="text-align:left">Si es <em>true</em>, el componente select se muestra únicamente en modo móvil.</td>
</tr>
<tr>
<td style="text-align:left">fit_bounds</td>
<td style="text-align:left"><code>boolean</code></td>
<td style="text-align:left">true</td>
<td style="text-align:left">Si es <em>true</em>, el mapa se ajusta al contenido al cargarse por primera vez.</td>
</tr>

<tr>
<td style="text-align:left">map_opacity</td>
<td style="text-align:left"><code>integer</code></td>
<td style="text-align:left">1</td>
<td style="text-align:left">Opacidad del mapa OSM.</td>
</tr>

<tr>
  <td>slider_size</td>
  <td><code>string|false</code></td>
  <td><code>false</code></td>
  <td>
    <p>Opciones:</p>
    <dl>
    <dt>large</dt>
    <dd>Tarjeta con ancho al 50&nbsp;%.</dd>
    <dt>default</dt>
    <dd>Tarjeta con tamaño por defecto (30&nbsp;% aprox).</dd>
    </dl>
  </td>
</tr>

<tr>
  <td>map_align</td>
  <td><code>string</code></td>
  <td><code>left</code></td>
  <td><p>Alinea el mapa dentro de su contenedor.</p><p>Opciones:</p>
  <ul>
  <li>left</li>
  <li>center</li>
  <li>right</li>
</td>
</tr>

</tbody>
</table>


### Orden de precedencia para entradas iniciales

La opción _**hash**_ tiene precedencia sobre _**initial_entry**_ y _**random_entry**_. Por su parte, _**initial_entry**_ tiene precedencia únicamente sobre _**random_entry**_.

----

**Referencias**

1. Opciones _PonchoMap_ y _PonchoMapFilter_: <[https://github.com/argob/poncho/tree/master/src/js/poncho-map](https://github.com/argob/poncho/tree/master/src/js/poncho-map/)>
2. Leaftlet <[https://leafletjs.com/](https://leafletjs.com/)>