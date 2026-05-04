/**
 * PonchoCharts
 * 
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Presidencia de la Nación Argentina
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
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


/**
 * PONCHO CHART
 *
 * Punto de entrada principal. Valida las opciones obligatorias y
 * decide si los datos se obtienen de un JSON inline, una URL
 * personalizada o la API de Google Sheets.
 *
 * @param {object} opt                    Configuración del gráfico.
 * @param {string} [opt.idSpread]         ID del spreadsheet de Google.
 * @param {string} [opt.hojaNombre]       Nombre de la hoja del spread.
 * @param {string} [opt.jsonUrl]          URL alternativa con datos JSON.
 * @param {string} [opt.jsonInput]        JSON inline (string).
 * @param {string} opt.tipoGrafico        Tipo de gráfico a renderizar.
 * @param {string} opt.idComponenteGrafico ID del elemento canvas/div.
 * @param {string} [opt.posicionLeyendas] Posición de la leyenda.
 * @param {boolean} [opt.mostrarLeyendas] Muestra u oculta la leyenda.
 * @param {boolean} [opt.porcentajes]     Muestra valores con "%".
 * @param {boolean} [opt.ejeYenCero]      Eje Y comienza en cero.
 * @param {string}  [opt.tituloGrafico]   Título visible del gráfico.
 * @param {string}  [opt.idTagTituloGrafico] ID del elemento de título.
 */
function ponchoChart(opt) {
    "use strict";

    if (chequeoOpcionesObligatorias(opt)) {
        if (opt.jsonInput) {
            console.log(opt.jsonInput);
            drawChart(jQuery.parseJSON(opt.jsonInput), opt);
        } else {
            var url = opt.jsonUrl ? opt.jsonUrl :
                "https://sheets.googleapis.com/v4/spreadsheets/"
                + opt.idSpread
                + "/values/"
                + opt.hojaNombre
                + "?alt=json&key=AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY";
            jQuery.getJSON(url, function(data) {
                drawChart(data, opt);
            });
        }
    } else {
        if (typeof opt.idSpread == "undefined" || opt.idSpread == "") {
            console.warn(
                "Completar valor para la opción idSpread"
            );
        }
        if (
            typeof opt.hojaNombre == "undefined" ||
            opt.hojaNombre == ""
        ) {
            console.warn(
                "Completar valor para la opción hojaNombre"
            );
        }
        if (
            typeof opt.tipoGrafico == "undefined" ||
            opt.tipoGrafico == ""
        ) {
            console.warn(
                "Completar valor para la opción tipoGrafico"
            );
        }
        if (
            typeof opt.idComponenteGrafico == "undefined" ||
            opt.idComponenteGrafico == ""
        ) {
            console.warn(
                "Completar valor para la opción idComponenteGrafico"
            );
        }
        if (getTipoGrafico(opt.tipoGrafico) == "") {
            console.warn("Ingrese un tipo de gráfico válido");
        }
    }


    /**
     * Retorna el identificador de tipo de gráfico según la elección.
     *
     * @param {string} tipo Nombre legible del tipo de gráfico.
     * @returns {string} Clave interna del tipo, o "" si no es válido.
     */
    function getTipoGrafico(tipo) {
        const options = {
            Line: "line",
            Bar: "bar",
            Pie: "pie",
            Area: "line",
            "Horizontal Bar": "horizontalBar",
            "Stacked Bar": "bar",
            Mixed: "mixed",
            HeatMap: "heatmap",
            default: ""
        };
        return (options[tipo] || options["default"]);
    }


    /**
     * Renderiza un gráfico de torta (pie) con Chart.js.
     *
     * @param {Array}   etiquetas        Etiquetas de cada sector.
     * @param {Array}   datos            Valores numéricos de cada sector.
     * @param {string}  tipoGrafico      Tipo interno ("pie" o "doughnut").
     * @param {Array}   colores          Códigos de color para los sectores.
     * @param {string}  idGrafico        ID del elemento canvas.
     * @param {string}  posicionLeyendas Posición de la leyenda.
     * @param {object}  toltips          Configuración de tooltips.
     * @param {boolean} mostrarLeyendas  Muestra u oculta la leyenda.
     */
    function graficoTorta(
        etiquetas, datos, tipoGrafico, colores, idGrafico,
        posicionLeyendas, toltips, mostrarLeyendas
    ) {
        const $grafica = document.getElementById(idGrafico);
        const dataset = {
            data: datos,
            borderColor: colores,
            backgroundColor: colores,
            borderWidth: 2,
        };
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: [dataset]
            },
            options: {
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas
                },
                responsive: true,
                tooltips: toltips,
            }
        });
    }


    /**
     * Renderiza un gráfico de línea con un único dataset.
     *
     * @param {Array}   etiquetas        Etiquetas del eje X.
     * @param {Array}   datos            Valores numéricos.
     * @param {string}  tipoGrafico      Tipo interno ("line").
     * @param {string}  color            Código de color de la línea.
     * @param {string}  label            Nombre del dataset en la leyenda.
     * @param {boolean} empiezaYenCero   Eje Y comienza en cero.
     * @param {string}  idGrafico        ID del elemento canvas.
     * @param {string}  posicionLeyendas Posición de la leyenda.
     * @param {object}  toltips          Configuración de tooltips.
     * @param {boolean} mostrarLeyendas  Muestra u oculta la leyenda.
     */
    function graficoLineaSimple(
        etiquetas, datos, tipoGrafico, color, label,
        empiezaYenCero, idGrafico, posicionLeyendas, toltips,
        mostrarLeyendas
    ) {
        const $grafica = document.getElementById(idGrafico);
        const dataset = {
            data: datos,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            lineTension: 0,
            fill: false,
            label: label,
        };
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: [dataset]
            },
            options: {
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas
                },
                tooltips: toltips,
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: { beginAtZero: empiezaYenCero }
                    }]
                }
            }
        });
    }


    /**
     * Renderiza un gráfico de barra o área con un único dataset.
     *
     * @param {Array}   etiquetas        Etiquetas del eje X.
     * @param {Array}   datos            Valores numéricos.
     * @param {string}  tipoGrafico      Tipo interno ("bar" o "line").
     * @param {string}  color            Código de color.
     * @param {string}  label            Nombre del dataset en la leyenda.
     * @param {boolean} empiezaYenCero   Eje Y comienza en cero.
     * @param {string}  idGrafico        ID del elemento canvas.
     * @param {string}  posicionLeyendas Posición de la leyenda.
     * @param {object}  toltips          Configuración de tooltips.
     * @param {boolean} mostrarLeyendas  Muestra u oculta la leyenda.
     */
    function graficoAreaBarraSimple(
        etiquetas, datos, tipoGrafico, color,
        label, empiezaYenCero, idGrafico, posicionLeyendas,
        toltips, mostrarLeyendas
    ) {
        const $grafica = document.getElementById(idGrafico);
        const dataset = {
            data: datos,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            lineTension: 0,
            label: label,
        };
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: [dataset]
            },
            options: {
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas
                },
                tooltips: toltips,
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: { beginAtZero: empiezaYenCero }
                    }]
                }
            }
        });
    }


    /**
     * Renderiza un gráfico de barra horizontal con un único dataset.
     *
     * @param {Array}   etiquetas        Etiquetas del eje Y (categorías).
     * @param {Array}   datos            Valores numéricos.
     * @param {string}  tipoGrafico      Tipo interno ("horizontalBar").
     * @param {string}  color            Código de color.
     * @param {string}  label            Nombre del dataset en la leyenda.
     * @param {boolean} empiezaYenCero   Eje X comienza en cero.
     * @param {string}  idGrafico        ID del elemento canvas.
     * @param {string}  posicionLeyendas Posición de la leyenda.
     * @param {object}  toltips          Configuración de tooltips.
     * @param {boolean} mostrarLeyendas  Muestra u oculta la leyenda.
     */
    function graficoBarraHorizontalSimple(
        etiquetas, datos, tipoGrafico, color,
        label, empiezaYenCero, idGrafico, posicionLeyendas,
        toltips, mostrarLeyendas
    ) {
        const $grafica = document.getElementById(idGrafico);
        const dataset = {
            data: datos,
            borderColor: color,
            backgroundColor: color,
            borderWidth: 2,
            lineTension: 0,
            label: label,
        };
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: [dataset]
            },
            options: {
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas
                },
                tooltips: toltips,
                responsive: true,
                scales: {
                    xAxes: [{
                        ticks: { beginAtZero: empiezaYenCero }
                    }]
                }
            }
        });
    }


    /**
     * Renderiza un gráfico con múltiples datasets (línea, barra, área).
     *
     * @param {Array}   etiquetas        Etiquetas del eje X.
     * @param {string}  tipoGrafico      Tipo interno del gráfico.
     * @param {Array}   datos            Array de objetos dataset de Chart.js.
     * @param {string}  idGrafico        ID del elemento canvas.
     * @param {boolean} empiezaYenCero   Eje Y comienza en cero.
     * @param {string}  posicionLeyendas Posición de la leyenda.
     * @param {object}  toltips          Configuración de tooltips.
     * @param {boolean} mostrarLeyendas  Muestra u oculta la leyenda.
     */
    function graficoComplejo(
        etiquetas, tipoGrafico, datos, idGrafico,
        empiezaYenCero, posicionLeyendas, toltips, mostrarLeyendas
    ) {
        const $grafica = document.getElementById(idGrafico);
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: datos
            },
            options: {
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas,
                    labels: { textAlign: "center" }
                },
                tooltips: toltips,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: { beginAtZero: empiezaYenCero }
                    }],
                },
            }
        });
    }


    /**
     * Renderiza un gráfico horizontal con múltiples datasets.
     *
     * @param {Array}   etiquetas        Etiquetas del eje Y (categorías).
     * @param {string}  tipoGrafico      Tipo interno ("horizontalBar").
     * @param {Array}   datos            Array de objetos dataset de Chart.js.
     * @param {string}  idGrafico        ID del elemento canvas.
     * @param {boolean} empiezaYenCero   Eje X comienza en cero.
     * @param {string}  posicionLeyendas Posición de la leyenda.
     * @param {object}  toltips          Configuración de tooltips.
     * @param {boolean} mostrarLeyendas  Muestra u oculta la leyenda.
     */
    function graficoComplejoHorizontal(
        etiquetas, tipoGrafico, datos,
        idGrafico, empiezaYenCero, posicionLeyendas,
        toltips, mostrarLeyendas
    ) {
        const $grafica = document.getElementById(idGrafico);
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: datos
            },
            options: {
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas,
                    labels: { textAlign: "center" }
                },
                tooltips: toltips,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                        ticks: { beginAtZero: empiezaYenCero }
                    }],
                },
            }
        });
    }


    /**
     * Renderiza un gráfico de barras apiladas (stacked bar).
     *
     * @param {Array}   etiquetas        Etiquetas del eje X.
     * @param {string}  tipoGrafico      Tipo interno ("bar").
     * @param {Array}   datos            Array de objetos dataset de Chart.js.
     * @param {string}  idGrafico        ID del elemento canvas.
     * @param {boolean} empiezaYenCero   Eje Y comienza en cero.
     * @param {string}  posicionLeyendas Posición de la leyenda.
     * @param {object}  toltips          Configuración de tooltips.
     * @param {boolean} mostrarLeyendas  Muestra u oculta la leyenda.
     */
    function graficoComplejoStacked(
        etiquetas, tipoGrafico, datos, idGrafico,
        empiezaYenCero, posicionLeyendas, toltips, mostrarLeyendas
    ) {
        const $grafica = document.getElementById(idGrafico);
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: datos
            },
            options: {
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas,
                    labels: { textAlign: "center" }
                },
                tooltips: toltips,
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: { beginAtZero: empiezaYenCero },
                        stacked: true,
                    }],
                    xAxes: [{ stacked: true }],
                },
            }
        });
    }


    /**
     * Renderiza un gráfico mixto (barra + línea) con doble eje Y.
     *
     * @param {Array}   etiquetas          Etiquetas del eje X.
     * @param {string}  tipoGrafico        Tipo base ("bar").
     * @param {Array}   datos              Datasets de Chart.js con yAxisID.
     * @param {string}  idGrafico          ID del elemento canvas.
     * @param {boolean} empiezaYenCero     Ejes Y comienzan en cero.
     * @param {string}  posicionLeyendas   Posición de la leyenda.
     * @param {number}  indice             Eje con escala "%": 0=izq,
     *                                     1=der, 2=ambos, 3=ninguno.
     * @param {string}  label1             Etiqueta del eje Y derecho.
     * @param {string}  label2             Etiqueta del eje Y izquierdo.
     * @param {boolean} mostrarLeyendas    Muestra u oculta la leyenda.
     */
    function graficoComplejoMixed(
        etiquetas, tipoGrafico, datos, idGrafico,
        empiezaYenCero, posicionLeyendas, indice, label1, label2,
        mostrarLeyendas
    ) {
        const $grafica = document.getElementById(idGrafico);
        new Chart($grafica, {
            type: tipoGrafico,
            data: {
                labels: etiquetas,
                datasets: datos
            },
            options: {
                legend: {
                    display: mostrarLeyendas,
                    position: posicionLeyendas,
                    labels: { textAlign: "center" }
                },
                tooltips: {
                    enabled: true,
                    mode: "single",
                    callbacks: {
                        label: function(tooltipItems, data) {
                            var text = "";
                            if (indice == 2) {
                                text = "%";
                            } else if (
                                tooltipItems.datasetIndex == indice
                            ) {
                                text = "%";
                            }
                            var value = numeroFormateado(
                                tooltipItems.yLabel
                            );
                            return data.datasets[
                                tooltipItems.datasetIndex
                            ].label + ": " + value + " " + text;
                        }
                    }
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            id: "left-y-axis",
                            type: "linear",
                            position: "left",
                            ticks: {
                                beginAtZero: empiezaYenCero,
                                callback: function(value) {
                                    var text = "";
                                    if (indice == 1 || indice == 2) {
                                        text = "%";
                                    }
                                    return value + text;
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: label2,
                                fontColor: "black"
                            }
                        },
                        {
                            id: "right-y-axis",
                            type: "linear",
                            position: "right",
                            ticks: {
                                beginAtZero: empiezaYenCero,
                                callback: function(value) {
                                    var text = "";
                                    if (indice == 0 || indice == 2) {
                                        text = "%";
                                    }
                                    return value + text;
                                }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: label1,
                                fontColor: "black"
                            }
                        }
                    ],
                },
            }
        });
    }


    /**
     * Renderiza un mapa de calor (heatmap) con ApexCharts.
     *
     * @param {Array}   etiquetas        Etiquetas del eje X.
     * @param {Array}   datos            Series de ApexCharts.
     * @param {string}  idGrafico        ID del elemento contenedor.
     * @param {Array}   labelsY          Etiquetas del eje Y (filas).
     * @param {Array}   rango            Rangos de color para la escala.
     * @param {string}  labelX           Texto del tooltip para la fila.
     * @param {string}  labelY           Texto del tooltip para la columna.
     * @param {string}  labelValor       Texto del tooltip para el valor.
     * @param {string}  titulo           Título del gráfico.
     * @param {boolean} mostrarYaxis     Muestra u oculta el eje Y.
     * @param {string}  posicionLeyendas Posición de la leyenda.
     * @param {boolean} mostrarLeyendas  Muestra u oculta la leyenda.
     */
    function graficoHeatMap(
        etiquetas, datos, idGrafico, labelsY, rango,
        labelX, labelY, labelValor, titulo, mostrarYaxis,
        posicionLeyendas, mostrarLeyendas
    ) {
        const $grafica = document.getElementById(idGrafico);

        var options = {
            series: datos,
            chart: {
                height: 650,
                type: "heatmap",
            },
            dataLabels: { enabled: false },
            title: { text: titulo },
            tooltip: {
                custom: function({
                    series, seriesIndex, dataPointIndex, w
                }) {
                    var value = series[seriesIndex][dataPointIndex];
                    value = numeroFormateado(value);
                    return "<div class=\"arrow_box\">" +
                        "<span>" +
                        labelX + ": " + labelsY[seriesIndex] +
                        "<br>" +
                        labelY + ": " +
                        w.globals.labels[dataPointIndex] +
                        "<br>" +
                        labelValor + ": " + value +
                        "</span>" +
                        "</div>";
                }
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    useFillColorAsStroke: false,
                    colorScale: { ranges: rango }
                }
            },
            yaxis: { show: mostrarYaxis },
            legend: {
                show: mostrarLeyendas,
                position: posicionLeyendas,
            },
            responsive: [{
                breakpoint: 1000,
                options: {
                    yaxis: { show: false },
                    legend: {
                        show: mostrarLeyendas,
                        position: "top",
                    },
                },
            }]
        };

        var chart = new ApexCharts($grafica, options);
        chart.render();

        const collection = document.getElementsByClassName(
            "apexcharts-toolbar"
        );
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display = "none";
        }
    }


    /**
     * Inserta el título del gráfico en el elemento indicado.
     *
     * @param {string} idTag  ID del elemento HTML donde se escribe el título.
     * @param {string} titulo Texto del título a insertar.
     */
    function graficaTitulo(idTag, titulo) {
        if (document.getElementById(idTag)) {
            document.getElementById(idTag).innerHTML = titulo;
        }
    }


    /**
     * Verifica que las opciones mínimas requeridas estén presentes.
     *
     * Requiere al menos una fuente de datos (idSpread+hojaNombre,
     * jsonUrl o jsonInput), un tipoGrafico válido y un
     * idComponenteGrafico.
     *
     * @param {object} opt Objeto de configuración del gráfico.
     * @returns {boolean} true si todas las opciones obligatorias existen.
     */
    function chequeoOpcionesObligatorias(opt) {
        var chequeo = false;
        if (
            (
                (opt.idSpread && opt.hojaNombre) ||
                opt.jsonUrl ||
                opt.jsonInput
            ) &&
            (
                typeof opt.tipoGrafico != "undefined" &&
                opt.tipoGrafico != ""
            ) &&
            (
                typeof opt.idComponenteGrafico != "undefined" &&
                opt.idComponenteGrafico != ""
            ) &&
            (getTipoGrafico(opt.tipoGrafico) != "")
        ) {
            chequeo = true;
        }
        return chequeo;
    }


    /**
     * Formatea un número con separadores de miles y coma decimal (es-AR).
     *
     * @param {number|string} numero Valor a formatear.
     * @returns {string} Número formateado, p. ej. "1.234,56".
     */
    function numeroFormateado(numero) {
        var value = numero.toString().replace(".", ",");
        var array = value.split(",");
        var result1 = new Intl.NumberFormat(
            "es-AR",
            { maximumFractionDigits: 2 }
        ).format(array[0]);
        if (array.length > 1) {
            value = result1.concat(",", array[1].substr(0, 2));
        } else {
            value = result1;
        }
        return value;
    }


    /**
     * Procesa los datos crudos de la fuente y llama al constructor
     * del gráfico correspondiente según el tipo configurado en opt.
     *
     * La primera fila del listado define los ejes (eje-x, eje-y1, …),
     * la segunda fila contiene las columnas/labels, y las filas
     * siguientes contienen los valores.
     *
     * @param {object} data Respuesta JSON con la propiedad "values".
     * @param {object} opt  Objeto de configuración del gráfico.
     */
    function drawChart(data, opt) {
        var etiquetas = [];
        var filteredTitleName = [];
        var filteredTitlePos = [];
        var color = "";
        var colores = [];
        var codigosColores = [];
        var columnas = [];
        var valores = [];
        var datos = [];
        var cantDatos = 0;
        var toltips = "";
        var tipoGraficosMixed = [];
        var indicePorcentajeMixed = 0;
        var porcentajesMixed = [];
        var labelsYCortos = [];
        var indiceNombreCorto = 0;
        var posicionLeyendas = opt.posicionLeyendas
            ? opt.posicionLeyendas
            : "top";

        var mostrarLeyendas = "";
        if (typeof opt.mostrarLeyendas == "undefined") {
            mostrarLeyendas = true;
        } else {
            mostrarLeyendas = opt.mostrarLeyendas;
        }

        var mostrarTotal = "";
        if (typeof opt.mostrarTotalStacked == "undefined") {
            mostrarTotal = true;
        } else {
            mostrarTotal = opt.mostrarTotalStacked;
        }

        var tipoGrafico = getTipoGrafico(opt.tipoGrafico);
        var listado = data["values"];

        jQuery.each(Object.keys(listado[0]), function(index, key) {
            if (listado[0][index].substr(0, 5) == "eje-y") {
                var split = listado[0][index].split("-");
                var pos = split[0] + split[1];
                filteredTitleName.push(pos);
                filteredTitlePos.push(index);
            } else if (listado[0][index] == "nombre-corto") {
                if (tipoGrafico == "heatmap") {
                    indiceNombreCorto = index;
                }
            }
        });


        jQuery.each(listado, function(row, value) {
            if (row == 0) {
                jQuery.each(filteredTitlePos, function(index, title) {
                    const regex = new RegExp(
                        "(?<axis>eje-(x|y(?:[1-9]|[1-9][0-9])))" +
                        "-(?<color>[\\w-]*?)" +
                        "(?:-(?<type>linea|barra))?$"
                    );
                    const result = regex.exec(
                        listado[row][filteredTitlePos[index]]
                    );
                    if (!result) {
                        return;
                    }

                    const graphType = result.groups.type;
                    const pos = result.groups.axis.replace("-", "");

                    valores[pos] = [];
                    colores.push(result.groups.color);

                    if (tipoGrafico == "mixed") {
                        if (graphType) {
                            if (
                                graphType == "barra" ||
                                graphType == "linea"
                            ) {
                                tipoGraficosMixed.push(graphType);
                            } else {
                                if (index == 0) {
                                    tipoGraficosMixed.push("barra");
                                }
                                if (index == 1) {
                                    tipoGraficosMixed.push("linea");
                                }
                            }
                        } else {
                            if (index == 0) {
                                tipoGraficosMixed.push("barra");
                            }
                            if (index == 1) {
                                tipoGraficosMixed.push("linea");
                            }
                        }
                    }
                });
            }


            if (row == 1) {
                jQuery.each(filteredTitlePos, function(index, title) {
                    if (tipoGrafico != "pie") {
                        if (tipoGrafico == "heatmap") {
                            etiquetas.push(
                                listado[row][filteredTitlePos[index]]
                            );
                        } else {
                            columnas.push(
                                listado[row][filteredTitlePos[index]]
                            );
                            cantDatos = cantDatos + 1;
                        }
                    } else {
                        etiquetas.push(
                            listado[row][filteredTitlePos[index]]
                        );
                    }
                });
            }

            if (row > 1) {
                var label = false;
                jQuery.each(filteredTitlePos, function(index, title) {
                    var split = listado[0][
                        filteredTitlePos[index]
                    ].split("-");
                    var pos = split[0] + split[1];

                    if (tipoGrafico == "pie") {
                        valores[pos].push(
                            listado[row][filteredTitlePos[index]]
                        );
                    } else {
                        if (tipoGrafico == "heatmap") {

                            if (label == false) {
                                columnas.push(listado[row][0]);
                                label = true;
                                cantDatos = cantDatos + 1;
                            }
                            if (index != indiceNombreCorto) {
                                valores[pos].push(
                                    listado[row][filteredTitlePos[index]]
                                );
                            }
                            if (index + 2 == indiceNombreCorto) {
                                if (
                                    typeof listado[row][index + 2] ==
                                    "undefined"
                                ) {
                                    labelsYCortos.push("*");
                                } else {
                                    labelsYCortos.push(
                                        listado[row][index + 2]
                                    );
                                }
                            }

                        } else {

                            if (label == false) {
                                etiquetas.push(listado[row][0]);
                                label = true;
                            }
                            valores[pos].push(
                                listado[row][filteredTitlePos[index]]
                            );
                        }
                    }
                });
            }
        });


        if (tipoGrafico == "pie") {
            var datosTorta = [];

            jQuery.each(
                Object.keys(filteredTitleName),
                function(index, key) {
                    var pos = filteredTitleName[index];
                    if (valores.hasOwnProperty(pos)) {
                        datosTorta.push(valores[pos]);
                    }
                }
            );
            datos = datosTorta;

        } else if (cantDatos == 1) {

            jQuery.each(
                Object.keys(filteredTitleName),
                function(index, key) {
                    var pos = filteredTitleName[index];
                    if (valores.hasOwnProperty(pos)) {
                        datos = valores[pos];
                    }
                }
            );
        }

        if (tipoGrafico == "mixed") {
            var cadena = opt.porcentajesMixed
                ? opt.porcentajesMixed
                : "";
            if (cadena.length > 0) {
                porcentajesMixed = cadena.split(",");
            }
        }

        if (opt.porcentajes == true) {

            if (tipoGrafico == "line" && cantDatos > 1) {
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[
                                tooltipItem.datasetIndex
                            ].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[
                                tooltipItem.datasetIndex
                            ].label + ": " + value + "%";
                        }
                    },
                    mode: "index",
                    intersect: false,
                };
            } else if (tipoGrafico == "pie") {
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[
                                tooltipItem.datasetIndex
                            ].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data["labels"][tooltipItem.index] +
                                ": " + value + "%";
                        }
                    }
                };

            } else if (opt.tipoGrafico == "Stacked Bar") {
                if (mostrarTotal == true) {
                    toltips = {
                        enabled: true,
                        mode: "index",
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[
                                    tooltipItem.datasetIndex
                                ].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[
                                    tooltipItem.datasetIndex
                                ].label + ": " + value + "%";
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce(
                                    (a, e) => a + parseFloat(e.yLabel),
                                    0
                                );
                                return "Total: " +
                                    new Intl.NumberFormat("es-AR", {
                                        maximumFractionDigits: 2
                                    }).format(total) + "%";
                            }
                        }
                    };
                } else {
                    toltips = {
                        enabled: true,
                        mode: "index",
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[
                                    tooltipItem.datasetIndex
                                ].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[
                                    tooltipItem.datasetIndex
                                ].label + ": " + value + "%";
                            }
                        }
                    };
                }
            } else {
                toltips = {
                    enabled: true,
                    mode: "index",
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[
                                tooltipItem.datasetIndex
                            ].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[
                                tooltipItem.datasetIndex
                            ].label + ": " + value + "%";
                        }
                    }
                };
            }

        } else {

            if (tipoGrafico == "line" && cantDatos > 1) {
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[
                                tooltipItem.datasetIndex
                            ].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[
                                tooltipItem.datasetIndex
                            ].label + ": " + value;
                        }
                    },
                    mode: "index",
                    intersect: false,
                };
            } else if (tipoGrafico == "pie") {
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[
                                tooltipItem.datasetIndex
                            ].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data["labels"][tooltipItem.index] +
                                ": " + value;
                        }
                    }
                };

            } else if (
                opt.tipoGrafico == "Stacked Bar" &&
                cantDatos > 1
            ) {
                if (mostrarTotal == true) {
                    toltips = {
                        enabled: true,
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[
                                    tooltipItem.datasetIndex
                                ].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[
                                    tooltipItem.datasetIndex
                                ].label + ": " + value;
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce(
                                    (a, e) => a + parseFloat(e.yLabel),
                                    0
                                );
                                return "Total: " +
                                    new Intl.NumberFormat("es-AR", {
                                        maximumFractionDigits: 2
                                    }).format(total);
                            }
                        }
                    };
                } else {
                    toltips = {
                        enabled: true,
                        mode: "index",
                        intersect: false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[
                                    tooltipItem.datasetIndex
                                ].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[
                                    tooltipItem.datasetIndex
                                ].label + ": " + value;
                            }
                        }
                    };
                }
            } else {
                toltips = {
                    enabled: true,
                    mode: "index",
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[
                                tooltipItem.datasetIndex
                            ].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[
                                tooltipItem.datasetIndex
                            ].label + ": " + value;
                        }
                    }
                };
            }
        }

        if (tipoGrafico == "pie") {

            colores.forEach(function(valor, indice, array) {
                console.log(valor);
                codigosColores.push(ponchoColor(valor));
            });

            graficoTorta(
                etiquetas, datos, tipoGrafico, codigosColores,
                opt.idComponenteGrafico, posicionLeyendas, toltips,
                mostrarLeyendas
            );
        }

        if (cantDatos == 1) {
            color = ponchoColor(colores[0]);

            if (opt.tipoGrafico == "Line") {
                graficoLineaSimple(
                    etiquetas, datos, tipoGrafico, color, columnas[0],
                    opt.ejeYenCero, opt.idComponenteGrafico,
                    posicionLeyendas, toltips, mostrarLeyendas
                );
            }

            if (tipoGrafico == "bar" || opt.tipoGrafico == "Area") {
                graficoAreaBarraSimple(
                    etiquetas, datos, tipoGrafico, color, columnas[0],
                    opt.ejeYenCero, opt.idComponenteGrafico,
                    posicionLeyendas, toltips, mostrarLeyendas
                );
            }

            if (tipoGrafico == "horizontalBar") {
                graficoBarraHorizontalSimple(
                    etiquetas, datos, tipoGrafico, color, columnas[0],
                    opt.ejeYenCero, opt.idComponenteGrafico,
                    posicionLeyendas, toltips, mostrarLeyendas
                );
            }
        }

        if (cantDatos > 1) {
            if (tipoGrafico == "heatmap") {
                if (
                    (
                        typeof opt.heatMapColors != "undefined" &&
                        opt.heatMapColors != ""
                    ) &&
                    (
                        typeof opt.heatMapColorsRange != "undefined" &&
                        opt.heatMapColorsRange != ""
                    )
                ) {

                    var datosFull = [];
                    var labelX = "labelFila";
                    var labelY = "labelColumna";
                    var labelValor = "labelValor";

                    if (
                        (typeof opt.datosTooltip != "undefined") &&
                        (opt.datosTooltip.length > 0)
                    ) {
                        if (
                            (typeof opt.datosTooltip[0] != "undefined")
                            && (typeof opt.datosTooltip[0].labelFila
                                != "undefined")
                        ) {
                            labelX = opt.datosTooltip[0].labelFila;
                        }
                        if (
                            (typeof opt.datosTooltip[1] != "undefined")
                            && (typeof opt.datosTooltip[1].labelColumna
                                != "undefined")
                        ) {
                            labelY = opt.datosTooltip[1].labelColumna;
                        }
                        if (
                            (typeof opt.datosTooltip[2] != "undefined")
                            && (typeof opt.datosTooltip[2].labelValor
                                != "undefined")
                        ) {
                            labelValor = opt.datosTooltip[2].labelValor;
                        }
                    }

                    jQuery.each(
                        Object.keys(filteredTitleName),
                        function(index, key) {
                            var pos = filteredTitleName[index];
                            if (valores.hasOwnProperty(pos)) {
                                datos = valores[pos];
                                datosFull.push(datos);
                            }
                        }
                    );

                    var series = [];

                    for (var i = 0; i < columnas.length; i++) {
                        var data = [];
                        for (var l = 0; l < etiquetas.length; l++) {
                            var datos = {
                                x: etiquetas[l],
                                y: parseInt(datosFull[l][i])
                            };
                            data.push(datos);
                        }

                        var serie = {
                            name: labelsYCortos[i] != "*"
                                ? labelsYCortos[i]
                                : columnas[i],
                            data: data
                        };

                        series.push(serie);
                    }

                    var rango = [];

                    for (
                        var i = 0;
                        i < opt.heatMapColorsRange.length - 1;
                        i++
                    ) {
                        var data = {
                            from: opt.heatMapColorsRange[i],
                            to: opt.heatMapColorsRange[i + 1],
                            color: ponchoColor(opt.heatMapColors[i])
                        };
                        rango.push(data);
                    }

                    var mostrarYaxis = "";
                    if (typeof opt.mostrarEjeY == "undefined") {
                        mostrarYaxis = true;
                    } else {
                        mostrarYaxis = opt.mostrarEjeY;
                    }

                    graficoHeatMap(
                        etiquetas, series, opt.idComponenteGrafico,
                        columnas, rango, labelX, labelY, labelValor,
                        opt.tituloGrafico, mostrarYaxis,
                        posicionLeyendas, mostrarLeyendas
                    );

                } else {
                    if (
                        typeof opt.heatMapColors == "undefined" ||
                        opt.heatMapColors == ""
                    ) {
                        console.log(
                            "Completar vector con valores para los colores"
                        );
                    }
                    if (
                        typeof opt.heatMapColorsRange == "undefined" ||
                        opt.heatMapColorsRange == ""
                    ) {
                        console.log(
                            "Completar vector con el rango de valores" +
                            " para los colores"
                        );
                    }
                }
            } else {

                var datasets = [];
                var indiceColor = 0;

                colores.forEach(function(valor, indice, array) {
                    codigosColores.push(ponchoColor(valor));
                });
                var indiceMixed = 0;

                jQuery.each(
                    Object.keys(filteredTitleName),
                    function(index, key) {
                        var pos = filteredTitleName[index];
                        if (valores.hasOwnProperty(pos)) {

                            datos = valores[pos];

                            if (opt.tipoGrafico == "Line") {
                                var dataset = {
                                    label: columnas[indiceColor],
                                    data: datos,
                                    borderColor:
                                        codigosColores[indiceColor],
                                    fill: false,
                                    borderWidth: 2,
                                    lineTension: 0,
                                    backgroundColor:
                                        codigosColores[indiceColor],
                                };
                            } else if (
                                opt.tipoGrafico == "Bar" ||
                                opt.tipoGrafico == "Area" ||
                                opt.tipoGrafico == "Horizontal Bar" ||
                                opt.tipoGrafico == "Stacked Bar"
                            ) {
                                var dataset = {
                                    label: columnas[indiceColor],
                                    data: datos,
                                    borderColor:
                                        codigosColores[indiceColor],
                                    backgroundColor:
                                        codigosColores[indiceColor],
                                    borderWidth: 2,
                                    lineTension: 0,
                                };
                            } else if (opt.tipoGrafico == "Mixed") {
                                var tipo = tipoGraficosMixed[indiceMixed];
                                if (tipo == "barra") {
                                    var dataset = {
                                        label: columnas[indiceColor],
                                        data: datos,
                                        backgroundColor:
                                            codigosColores[indiceColor],
                                        yAxisID: "left-y-axis",
                                        type: "bar",
                                    };
                                } else if (tipo == "linea") {
                                    var dataset = {
                                        label: columnas[indiceColor],
                                        data: datos,
                                        borderColor:
                                            codigosColores[indiceColor],
                                        backgroundColor:
                                            codigosColores[indiceColor],
                                        type: "line",
                                        yAxisID: "right-y-axis",
                                        fill: false,
                                    };
                                }
                            }

                            datasets.push(dataset);
                            indiceColor = indiceColor + 1;
                            indiceMixed = indiceMixed + 1;
                        }
                    }
                );

                if (tipoGrafico == "mixed") {
                    if (porcentajesMixed.length == 2) {
                        indicePorcentajeMixed = 2;
                    } else if (porcentajesMixed.length == 1) {

                        if (porcentajesMixed[0] == "eje-y1") {
                            indicePorcentajeMixed = 0;
                        } else if (porcentajesMixed[0] == "eje-y2") {
                            indicePorcentajeMixed = 1;
                        }

                    } else {
                        indicePorcentajeMixed = 3;
                    }
                }


                if (opt.tipoGrafico == "Stacked Bar") {
                    graficoComplejoStacked(
                        etiquetas, tipoGrafico, datasets,
                        opt.idComponenteGrafico, opt.ejeYenCero,
                        posicionLeyendas, toltips, mostrarLeyendas
                    );
                } else if (opt.tipoGrafico == "Mixed") {
                    graficoComplejoMixed(
                        etiquetas, "bar", datasets,
                        opt.idComponenteGrafico, opt.ejeYenCero,
                        posicionLeyendas, indicePorcentajeMixed,
                        columnas[0], columnas[1], mostrarLeyendas
                    );
                } else if (opt.tipoGrafico == "Horizontal Bar") {
                    graficoComplejoHorizontal(
                        etiquetas, tipoGrafico, datasets,
                        opt.idComponenteGrafico, opt.ejeYenCero,
                        posicionLeyendas, toltips, mostrarLeyendas
                    );
                } else {
                    graficoComplejo(
                        etiquetas, tipoGrafico, datasets,
                        opt.idComponenteGrafico, opt.ejeYenCero,
                        posicionLeyendas, toltips, mostrarLeyendas
                    );
                }
            }
        }

        if (
            opt.tituloGrafico != "" &&
            typeof opt.tituloGrafico != "undefined"
        ) {
            graficaTitulo(opt.idTagTituloGrafico, opt.tituloGrafico);
        }
    }
}
