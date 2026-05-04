# Poncho Charts

Componente JavaScript para renderizar gráficos a partir de datos provenientes de Google Sheets, una URL JSON externa o un JSON inline. Actúa como capa de configuración sobre [Chart.js](https://www.chartjs.org/) (v2.9.4) y [ApexCharts](https://apexcharts.com/) (solo para HeatMap).

## Dependencias

| Librería | Versión | Uso |
|---|---|---|
| jQuery | 3.x | Peticiones AJAX y utilidades |
| Chart.js | 2.9.4 | Todos los gráficos excepto HeatMap |
| ApexCharts | — | Solo `HeatMap` |
| poncho.min.js | — | Función `ponchoColor()` para resolver nombres de color |

## Uso

```html
<canvas id="mi-grafico"></canvas>

<script>
ponchoChart({
    tipoGrafico: "Bar",
    idComponenteGrafico: "mi-grafico",
    jsonInput: JSON.stringify(jsonData)
});
</script>
```

## Tipos de gráfico

| `tipoGrafico` | Descripción |
|---|---|
| `Line` | Línea |
| `Bar` | Barras verticales |
| `Area` | Área (línea con relleno) |
| `Horizontal Bar` | Barras horizontales |
| `Stacked Bar` | Barras apiladas |
| `Mixed` | Mixto: barras + línea con doble eje Y |
| `Pie` | Torta |
| `HeatMap` | Mapa de calor (ApexCharts) |

## Opciones

### Fuente de datos (al menos una es obligatoria)

| Opción | Tipo | Descripción |
|---|---|---|
| `idSpread` | `string` | ID del spreadsheet de Google Sheets |
| `hojaNombre` | `string` | Nombre de la hoja (requerido junto con `idSpread`) |
| `jsonUrl` | `string` | URL que devuelve un JSON con la estructura esperada |
| `jsonInput` | `string` | JSON inline en formato string (`JSON.stringify(obj)`) |

### Opciones obligatorias

| Opción | Tipo | Descripción |
|---|---|---|
| `tipoGrafico` | `string` | Tipo de gráfico (ver tabla anterior) |
| `idComponenteGrafico` | `string` | `id` del elemento `<canvas>` o `<div>` donde se renderiza |

### Opciones generales

| Opción | Tipo | Default | Descripción |
|---|---|---|---|
| `posicionLeyendas` | `string` | `"top"` | Posición de la leyenda: `"top"`, `"bottom"`, `"left"`, `"right"` |
| `mostrarLeyendas` | `boolean` | `true` | Muestra u oculta la leyenda |
| `porcentajes` | `boolean` | `false` | Agrega `%` a los valores en los tooltips |
| `ejeYenCero` | `boolean` | — | Fuerza que el eje Y (o X en barras horizontales) empiece en cero |
| `tituloGrafico` | `string` | — | Texto del título del gráfico |
| `idTagTituloGrafico` | `string` | — | `id` del elemento HTML donde se inserta el título |

### Opciones para Stacked Bar

| Opción | Tipo | Default | Descripción |
|---|---|---|---|
| `mostrarTotalStacked` | `boolean` | `true` | Muestra la suma total en el footer del tooltip |

### Opciones para Mixed

| Opción | Tipo | Descripción |
|---|---|---|
| `porcentajesMixed` | `string` | Ejes que muestran `%`. Valores: `"eje-y1"`, `"eje-y2"`, o `"eje-y1,eje-y2"` |

### Opciones para HeatMap

| Opción | Tipo | Descripción |
|---|---|---|
| `heatMapColors` | `Array<string>` | Nombres de color Poncho para cada rango (requerido) |
| `heatMapColorsRange` | `Array<number>` | Valores límite de los rangos de color (requerido) |
| `mostrarEjeY` | `boolean` | Muestra u oculta el eje Y (default: `true`) |
| `datosTooltip` | `Array<object>` | Etiquetas del tooltip: `[{labelFila}, {labelColumna}, {labelValor}]` |

## Formato de datos

El JSON debe tener una propiedad `values` con un array de filas:

| Fila | Contenido |
|---|---|
| `values[0]` | Definición de ejes: `"eje-x"`, `"eje-y1-{color}"`, ... |
| `values[1]` | Etiquetas de las columnas Y (encabezados visibles) |
| `values[2+]` | Filas de datos: primera celda = etiqueta eje X, resto = valores |

### Nomenclatura de columnas en `values[0]`

- `eje-x`: columna del eje X (etiquetas).
- `eje-y1-{color}`: primer dataset, color del nombre del token Poncho (p. ej. `arg-azul`).
- `eje-y2-{color}`: segundo dataset, y así sucesivamente.
- `eje-y1-{color}-linea` / `eje-y1-{color}-barra`: en gráficos **Mixed**, define el tipo de serie.
- `nombre-corto`: en **HeatMap**, columna con etiquetas cortas para el eje Y.

### Ejemplo de estructura JSON

```json
{
    "values": [
        ["eje-x", "eje-y1-arg-azul", "eje-y2-arg-verde"],
        ["",      "Serie A",         "Serie B"],
        ["Enero", "120",             "80"],
        ["Febrero","95",             "110"],
        ["Marzo", "140",             "130"]
    ]
}
```

## Ejemplos de uso

### Pie con JSON inline

```html
<canvas id="grafico-pie"></canvas>
<script>
(function(jQuery) {
    ponchoChart({
        tipoGrafico: "Pie",
        idComponenteGrafico: "grafico-pie",
        jsonInput: JSON.stringify({
            "values": [
                ["eje-x", "eje-y1-arg-azul", "eje-y2-arg-verde", "eje-y3-arg-naranja"],
                ["",      "Categoría A",     "Categoría B",       "Categoría C"],
                ["",      "40",              "35",                "25"]
            ]
        }),
        porcentajes: true,
        mostrarLeyendas: true
    });
})(jQuery);
</script>
```

### Bar con Google Sheets

```html
<canvas id="grafico-bar"></canvas>
<script>
(function(jQuery) {
    ponchoChart({
        idSpread: "ID_DEL_SPREADSHEET",
        hojaNombre: "Hoja1",
        tipoGrafico: "Bar",
        idComponenteGrafico: "grafico-bar",
        ejeYenCero: true,
        posicionLeyendas: "bottom"
    });
})(jQuery);
</script>
```

### Mixed con doble eje Y

```html
<canvas id="grafico-mixed"></canvas>
<script>
(function(jQuery) {
    ponchoChart({
        idSpread: "ID_DEL_SPREADSHEET",
        hojaNombre: "Hoja1",
        tipoGrafico: "Mixed",
        idComponenteGrafico: "grafico-mixed",
        ejeYenCero: true,
        porcentajesMixed: "eje-y2"
    });
})(jQuery);
</script>
```

En `values[0]` se puede especificar el tipo por serie:

```
["eje-x", "eje-y1-arg-azul-barra", "eje-y2-arg-rojo-linea"]
```

Si no se especifica, el primer eje Y se trata como barra y el segundo como línea.

### HeatMap

```html
<div id="grafico-heatmap"></div>
<script>
(function(jQuery) {
    ponchoChart({
        idSpread: "ID_DEL_SPREADSHEET",
        hojaNombre: "Hoja1",
        tipoGrafico: "HeatMap",
        idComponenteGrafico: "grafico-heatmap",
        heatMapColors: ["arg-verde", "arg-amarillo", "arg-naranja", "arg-rojo"],
        heatMapColorsRange: [0, 25, 50, 75, 100],
        datosTooltip: [
            { labelFila: "Provincia" },
            { labelColumna: "Mes" },
            { labelValor: "Casos" }
        ],
        mostrarEjeY: true
    });
})(jQuery);
</script>
```
