# 📦 Mapa de Argentina SVG


## 🧰 Opciones y métodos

### argentinaMapStyle()

Permite asignar estilos de color de fondo, color de línea y ancho de línea al mapa. 

<table>
<thead>
<tr>
<th align="left">Parámetro</th>
<th align="left">Tipo</th>
<th align="left">Default</th>
<th align="left">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><em>color</em></td>
<td align="left"><code>string</code></td>
<td align="left"><code>#DDDDDD</code></td>
<td align="left">Color de fondo para la provincia.</td>
</tr>
<tr>
<td align="left"><em>provinces</em></td>
<td align="left"><code>object</code></td>
<td align="left"><code>["*"]</code></td>
<td align="left"><p dir="auto">Permite definir un listado de provincias que deben usar el color asignado.</p><p dir="auto">Por ejemplo. <code>["*"]</code>, Asigna el color a todas las provincias; mientras que un listado de nombres de provincias ISO como: <code>["AR-C", "AR-B"]</code>, asigna colores a Buenos Aires y CABA.</p><p dir="auto">Conozca más sobre el estándar <a href="https://es.wikipedia.org/wiki/ISO_3166-2:AR" rel="nofollow">ISO 3166-2:AR</a>.</p></td>
</tr>
<tr>
<td align="left"><em>strokeColor</em></td>
<td align="left"><code>string</code></td>
<td align="left"><code>#CCCACA</code></td>
<td align="left">Define el color de las líneas en el mapa.</td>
</tr>
<tr>
<td align="left"><em>strokeWidth</em></td>
<td align="left"><code>float|integer</code></td>
<td align="left"><code>1</code></td>
<td align="left">Define el ancho de las líneas en el mapa.</td>
</tr>
<tr>
<td align="left"><em>defaultColor</em></td>
<td align="left"><code>string</code></td>
<td align="left"><code>#DDDDDD</code></td>
<td align="left">Define el color de base. Su uso solo tiene sentido si se quiere utilizar color en algunas provincias.</td>
</tr>
<tr>
<td align="left"><em>selectiveColor</em></td>
<td align="left"><code>object</code></td>
<td align="left"><code>[]</code></td>
<td align="left"><p>Permite definir colores indiiviidualizados para cada provincia, utilizando la siguiente sintaxis.</p><p><pre>[
    ["AR-C", "red"],
    ["AR-B", "blue"],
    ["AR-S", "green"],
    ["AR-A", "gold"],
    ...
]
</pre></p><p>
* Hay que tener en cuenta que éste método tiene precedencia sobre <em><code>provinces</code></em>.
</p></td>
</tr>
</tbody>
</table>




## 🚀 Uso

### Ejemplo 1

Ejemplo pintando las provincias: CABA y Buenos Aires de color azul, asignando un ancho de línea de 0.5 pixels y color de línea gris —#999999—;

<div style="margin:1em auto 1.5em">
<img src="./img/example-map-3.png" alt="Mapa de la República Argentina, ejemplo 3" style="display:block;margin:auto">
</div>

```html
<div id="js-mapa-svg"></div>
```

```js
document.addEventListener('DOMContentLoaded', () => {
    argentinaMapStyle({
        provinces: ["AR-C", "AR-B"],
        color: "var(--secondary, dodgerBlue)",
        strokeColor: "#999999",
        strokeWidth: .5
    });
});
```

### Ejemplo 2

Pinta todas las provincias de color azul con las líneas de color gris.

<div style="margin:1em auto 1.5em">
<img src="./img/example-map-2.png" alt="Mapa de la República Argentina, ejemplo 3" style="display:block;margin:auto">
</div>

```html
<div id="js-mapa-svg"></div>
```

```js
document.addEventListener('DOMContentLoaded', () => {
    argentinaMapStyle({
        provinces: ["*"],
        color: "var(--secondary)",
        strokeColor: "#DDDDDD"
    });
});
```

### Ejemplo 3

Pinta las provincias: Buenos Aires, Entre Ríos, Santa Fe y Córdoba de color gris oscuro y CABA en rojo. A su vez, el resto de las provincias son de color blanco y las líneas en un gris claro —#EEEEEE—.

<div style="margin:1em auto 1.5em">
<img src="./img/example-map-1.png" alt="Mapa de la República Argentina, ejemplo 3" style="display:block;margin:auto">
</div>

```html
<div class="js-map"></div>
```

```js
document.addEventListener('DOMContentLoaded', () => {
    renderMap(".js-map");
    argentinaMapStyle({
        selectiveColor: [
            ["AR-B", "#525252"],
            ["AR-C", "var(--tomate, tomato)"],
            ["AR-E", "#525252"],
            ["AR-S", "#525252"],
            ["AR-X", "#525252"],
        ],
        defaultColor: "#f9f9f9",
        strokeColor: "#eee",
        strokeWidth: 1
    }, ".js-map");
});
```