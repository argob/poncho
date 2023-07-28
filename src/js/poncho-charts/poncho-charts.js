/**
 * PONCHO CHART
 *  
 * @param {object} opt Objeto con configuraciones. 
 */
function ponchoChart(opt) {
    "use strict";

    if (chequeoOpcionesObligatorias(opt)) {
        if (opt.jsonInput) {
            console.log(opt.jsonInput);
            drawChart(jQuery.parseJSON(opt.jsonInput), opt);
        } else {
            var url = opt.jsonUrl ? opt.jsonUrl : 
                'https://sheets.googleapis.com/v4/spreadsheets/' 
                + opt.idSpread 
                + '/values/' 
                + opt.hojaNombre 
                + '?alt=json&key=AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY';
            jQuery.getJSON(url, function(data) {
                drawChart(data, opt)
            });
        }
    } else {
        //informo por consola el faltante
        if (typeof opt.idSpread == 'undefined' || opt.idSpread == "") {
            console.warn('Completar valor para la opción de Configuración idSpread');
        }

        if (typeof opt.hojaNombre == 'undefined' || opt.hojaNombre == "") {
            console.warn('Completar valor para la opción de Configuración hojaNombre');
        }

        if (typeof opt.tipoGrafico == 'undefined' || opt.tipoGrafico == "") {
            console.warn('Completar valor para la opción de Configuración tipoGrafico');
        }

        if (typeof opt.idComponenteGrafico == 'undefined' || opt.idComponenteGrafico == "") {
            console.warn('Completar valor para la opción de Configuración idComponenteGrafico');
        }

        if (getTipoGrafico(opt.tipoGrafico) == "") {
            console.warn('Ingrese un tipo de gafico válido');
        }
    }

    //   function getTipoGrafico(tipo) {
    //       var grafico = '';
    //       if (tipo == 'Line') grafico = 'line';
    //       if (tipo == 'Bar') grafico = 'bar';
    //       if (tipo == 'Pie') grafico = 'pie';
    //       if (tipo == 'Area') grafico = 'line';
    //       if (tipo == 'Horizontal Bar') grafico = 'horizontalBar';
    //       if (tipo == 'Stacked Bar') grafico = 'bar';
    //       if (tipo == 'Mixed') grafico = 'mixed';
    //       if (tipo == 'HeatMap') grafico = 'heatmap';

    //       return grafico;
    //   }


    /**
     * Retrona el código de gráfico según la elección del usuario.
     * 
     * @param {string} tipo Tipo de gráfico 
     * @returns {string}
     */
    function getTipoGrafico(tipo) {
        const options = {    
            'Line': 'line',
            'Bar': 'bar',
            'Pie': 'pie',
            'Area': 'line',
            'Horizontal Bar': 'horizontalBar',
            'Stacked Bar': 'bar',
            'Mixed': 'mixed',
            'HeatMap': 'heatmap',
            "default": ""
        };
        return (options[tipo] || options["default"]);
    }

    //   function ponchoColor(color) {
    //       var codigoColor = '';
    //       switch (color) {
    //           case 'celeste':
    //           case 'info':
    //               codigoColor = '#2897d4';
    //               break;
    //           case 'verde':
    //           case 'success':
    //               codigoColor = '#2e7d33';
    //               break;
    //           case 'rojo':
    //           case 'danger':
    //               codigoColor = '#c62828';
    //               break;
    //           case 'amarillo':
    //           case 'warning':
    //               codigoColor = '#f9a822';
    //               break;
    //           case 'azul':
    //           case 'primary':
    //               codigoColor = '#0072bb';
    //               break;
    //           case 'negro':
    //           case 'black':
    //               codigoColor = '#333';
    //               break;
    //           case 'uva':
    //               codigoColor = '#6a1b99';
    //               break;
    //           case 'gris':
    //           case 'muted':
    //               codigoColor = '#525252';
    //               break;
    //           case 'grisintermedio':
    //           case 'gris-area':
    //           case 'gray':
    //               codigoColor = '#f2f2f2';
    //               break;
    //           case 'celesteargentina':
    //           case 'celeste-argentina':
    //               codigoColor = '#37bbed';
    //               break;
    //           case 'fucsia':
    //               codigoColor = '#ec407a';
    //               break;
    //           case 'arandano':
    //               codigoColor = '#c2185b';
    //               break;
    //           case 'cielo':
    //               codigoColor = '#039be5';
    //               break;
    //           case 'verdin':
    //               codigoColor = '#6ea100';
    //               break;
    //           case 'lima':
    //               codigoColor = '#cddc39';
    //               break;
    //           case 'maiz':
    //           case 'maíz':
    //               codigoColor = '#ffce00';
    //               break;
    //           case 'tomate':
    //               codigoColor = '#ef5350';
    //               break;
    //           case 'naranjaoscuro':
    //           case 'naranja':
    //               codigoColor = '#EF6C00';
    //               break;
    //           case 'verdeazulado':
    //           case 'verde-azulado':
    //               codigoColor = '#008388';
    //               break;
    //           case 'escarapela':
    //               codigoColor = '#2cb9ee';
    //               break;
    //           case 'lavanda':
    //               codigoColor = '#9284be';
    //               break;
    //           case 'mandarina':
    //               codigoColor = '#f79525';
    //               break;
    //           case 'palta':
    //               codigoColor = '#50b7b2';
    //               break;
    //           case 'cereza':
    //               codigoColor = '#ed3d8f';
    //               break;
    //           case 'limon':
    //               codigoColor = '#d7df23';
    //               break;
    //           case 'verdejade':
    //           case 'verde-jade':
    //               codigoColor = '#066';
    //               break;
    //           case 'verdealoe':
    //           case "verde-aloe":
    //               codigoColor = '#4fbb73';
    //               break;
    //           case 'verdecemento':
    //           case 'verde-cemento':
    //               codigoColor = '#b4beba';
    //               break;
    //           default:
    //               console.log('No existe color ' + color);
    //       }

    //       return codigoColor;
    //   }


    /**
     * Gráfico de torta
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} tipoGrafico 
     * @param {*} colores 
     * @param {*} idGrafico 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoTorta(etiquetas, datos, tipoGrafico, colores, idGrafico, 
                posicionLeyendas, toltips, mostrarLeyendas) {
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
                datasets: [
                    dataset,
                ]
            },
            //options: options
            options: {
                legend: { display: mostrarLeyendas, position: posicionLeyendas },
                responsive: true,
                tooltips: toltips,
            }

        });
    }


    /**
     * Gráfico de línea (simple)
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} tipoGrafico 
     * @param {*} color 
     * @param {*} label 
     * @param {*} empiezaYenCero 
     * @param {*} idGrafico 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoLineaSimple(etiquetas, datos, tipoGrafico, color, label, 
                empiezaYenCero, idGrafico, posicionLeyendas, toltips, 
                mostrarLeyendas) {
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
                datasets: [
                    dataset,
                ]
            },
            options: {
                legend: { display: mostrarLeyendas, position: posicionLeyendas },
                tooltips: toltips,
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }]
                }
            }
        });
    }


    /**
     * Gráfico de barra (simple)
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} tipoGrafico 
     * @param {*} color 
     * @param {*} label 
     * @param {*} empiezaYenCero 
     * @param {*} idGrafico 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoAreaBarraSimple(etiquetas, datos, tipoGrafico, color, 
                label, empiezaYenCero, idGrafico, posicionLeyendas, 
                toltips, mostrarLeyendas) {
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
                datasets: [
                    dataset,
                ]
            },
            options: {
                legend: { display: mostrarLeyendas, position: posicionLeyendas },
                tooltips: toltips,
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }]
                }
            }
        });
    }


    /**
     * Gráfico de barra horizontal (simple)
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} tipoGrafico 
     * @param {*} color 
     * @param {*} label 
     * @param {*} empiezaYenCero 
     * @param {*} idGrafico 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoBarraHorizontalSimple(etiquetas, datos, tipoGrafico, color, 
                label, empiezaYenCero, idGrafico, posicionLeyendas, 
                toltips, mostrarLeyendas) {
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
                datasets: [
                    dataset,
                ]
            },
            options: {
                legend: { display: mostrarLeyendas, position: posicionLeyendas },
                tooltips: toltips,
                responsive: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }]
                }
            }
        });
    }


    /**
     * Gráfico complejo
     * 
     * @param {*} etiquetas 
     * @param {*} tipoGrafico 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} empiezaYenCero 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoComplejo(etiquetas, tipoGrafico, datos, idGrafico, 
                empiezaYenCero, posicionLeyendas, toltips, mostrarLeyendas) {
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
                    labels: { 
                        textAlign: 'center'
                    }
                },
                tooltips: toltips,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }],
                },
            }
        });
    }


    /**
     * Gráfico complejo horizontal
     * 
     * @param {*} etiquetas 
     * @param {*} tipoGrafico 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} empiezaYenCero 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoComplejoHorizontal(etiquetas, tipoGrafico, datos, 
                idGrafico, empiezaYenCero, posicionLeyendas, 
                toltips, mostrarLeyendas) {
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
                    labels: { textAlign: 'center' }
                },
                tooltips: toltips,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        }
                    }],
                },
            }
        });
    }


    /**
     * Gráfico complejo (stacked)
     * 
     * @param {*} etiquetas 
     * @param {*} tipoGrafico 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} empiezaYenCero 
     * @param {*} posicionLeyendas 
     * @param {*} toltips 
     * @param {*} mostrarLeyendas 
     */
    function graficoComplejoStacked(etiquetas, tipoGrafico, datos, idGrafico,
                empiezaYenCero, posicionLeyendas, toltips, mostrarLeyendas) {
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
                    labels: { textAlign: 'center' }
                },
                tooltips: toltips,
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: empiezaYenCero,
                        },
                        stacked: true,
                    }],
                    xAxes: [{ stacked: true }],
                },
            }
        });
    }


    /**
     * 
     * @param {*} etiquetas 
     * @param {*} tipoGrafico 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} empiezaYenCero 
     * @param {*} posicionLeyendas 
     * @param {*} indice 
     * @param {*} label1 
     * @param {*} label2 
     * @param {*} mostrarLeyendas 
     */
    function graficoComplejoMixed(etiquetas, tipoGrafico, datos, idGrafico, 
                empiezaYenCero, posicionLeyendas, indice, label1, label2, 
                mostrarLeyendas) {
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
                    labels: {textAlign: 'center'}
                },
                tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) {
                        var text = '';
                        if (indice == 2) text = '%';
                        else if (tooltipItems.datasetIndex == indice) text = '%'; 
                        var value = numeroFormateado(tooltipItems.yLabel);

                        return data.datasets[tooltipItems.datasetIndex].label + ': ' + value + ' ' + text;
                    }
                }
                },
                responsive: true,
                scales: {
                yAxes: [
                    {
                    id: 'left-y-axis',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero: empiezaYenCero,
                        callback: function(value) {
                            var text = '';
                            if (indice == 1 || indice == 2) text = '%'; 
                            return value + text;
                        }
                    },
                    scaleLabel: {
                        display: true,
                        labelString: label2,
                        fontColor: "black"
                        }
                    }, {
                    id: 'right-y-axis',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        beginAtZero: empiezaYenCero,
                        callback: function(value) {
                            var text = '';
                            if (indice == 0 || indice == 2) text = '%';
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
     * 
     * @param {*} etiquetas 
     * @param {*} datos 
     * @param {*} idGrafico 
     * @param {*} labelsY 
     * @param {*} rango 
     * @param {*} labelX 
     * @param {*} labelY 
     * @param {*} labelValor 
     * @param {*} titulo 
     * @param {*} mostrarYaxis 
     * @param {*} posicionLeyendas 
     * @param {*} mostrarLeyendas 
     */
    function graficoHeatMap(etiquetas, datos, idGrafico, labelsY, rango, 
                labelX, labelY, labelValor, titulo, mostrarYaxis, 
                posicionLeyendas, mostrarLeyendas) {

        const $grafica = document.getElementById(idGrafico);

        var options = {
            series: datos,
            chart: {
                height: 650,
                type: 'heatmap',
            },
            dataLabels: {
                enabled: false
            },
            title: {
                text: titulo
            },
            tooltip: {
                custom: function({series, seriesIndex, dataPointIndex, w}) {
                var value = series[seriesIndex][dataPointIndex];
                value = numeroFormateado(value);
                return '<div class="arrow_box">' +
                    '<span>' + labelX + ": " + labelsY[seriesIndex] + '<br>' +
                    labelY + ": " + w.globals.labels[dataPointIndex] + '<br>' +
                    labelValor + ": " + value + '</span>' +
                    '</div>'
                }
            },
            plotOptions: {
                heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: false,
                colorScale: {
                    ranges: rango
                }
                }
            },
            yaxis: {
                show: mostrarYaxis,
            },
            legend: {
                show: mostrarLeyendas,
                position: posicionLeyendas,
            },
            responsive: [{
                breakpoint: 1000,
                options: {
                    yaxis: {
                        show: false,
                    },
                    legend: {
                        show: mostrarLeyendas,
                        position: "top",
                    },
                },
            }]
        };

        var chart = new ApexCharts($grafica, options);
        chart.render(); 

        const collection = document.getElementsByClassName("apexcharts-toolbar");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display = "none";
        } 
    }


    /**
     * 
     * @param {*} idTag 
     * @param {*} titulo 
     */
    function graficaTitulo(idTag, titulo) {
        if (document.getElementById(idTag)) {
            document.getElementById(idTag).innerHTML = titulo;
        }
    }


    /**
     * 
     * @param {*} opt 
     * @returns 
     */
    function chequeoOpcionesObligatorias(opt) {
        var chequeo = false;
        if ( ((opt.idSpread  && opt.hojaNombre) || opt.jsonUrl || opt.jsonInput) && (typeof opt.tipoGrafico != 'undefined' && opt.tipoGrafico != "") && (typeof opt.idComponenteGrafico != 'undefined' && opt.idComponenteGrafico != "") && (getTipoGrafico(opt.tipoGrafico) != ""))
            chequeo = true;
        return chequeo;
    }


    /**
     * 
     * @param {*} numero 
     * @returns 
     */
    function numeroFormateado(numero) {
        var value = numero.toString().replace('.',',');
        var array = value.split(",");
        //var result1 = new Intl.NumberFormat('es').format(array[0]);
        var result1 = new Intl.NumberFormat('es-AR', {maximumFractionDigits:2 }).format(array[0]);
        if (array.length > 1) 
            value = result1.concat(",",array[1].substr(0,2));
        else 
            value = result1;

        return value;
    }


    /**
     * 
     * @param {*} data 
     * @param {*} opt 
     */
    function drawChart(data, opt) {
        var etiquetas = [];
        var filteredTitleName = [];
        var filteredTitlePos = [];
        var color = '';
        var colores = [];
        var codigosColores = [];
        var columnas = [];
        var valores = [];
        var datos = [];
        var cantDatos = 0;
        var urlOrigen = "";
        var toltips = "";
        var tipoGraficosMixed = [];
        var indicePorcentajeMixed = 0;
        var porcentajesMixed = [];
        var labelsYCortos = [];
        var indiceNombreCorto = 0;
        var posicionLeyendas = opt.posicionLeyendas ? opt.posicionLeyendas : 'top';

        var mostrarLeyendas = '';
        if (typeof opt.mostrarLeyendas == 'undefined'){
            mostrarLeyendas = true;
        } else {
            mostrarLeyendas = opt.mostrarLeyendas;
        }

        var mostrarTotal = '';
        if (typeof opt.mostrarTotalStacked == 'undefined'){
            mostrarTotal = true;
        } else {
            mostrarTotal = opt.mostrarTotalStacked;
        }

        var tipoGrafico = getTipoGrafico(opt.tipoGrafico);

        var listado = data['values'];

        //TITULOS
        jQuery.each(Object.keys(listado[0]), function(index, key) {
            if (listado[0][index].substr(0, 5) == 'eje-y') {
                var split = listado[0][index].split('-');
                var pos = split[0] + split[1];
                filteredTitleName.push(pos);
                filteredTitlePos.push(index);
            } else if (listado[0][index] == 'nombre-corto'){
                if (tipoGrafico == 'heatmap'){
                    indiceNombreCorto = index;
                }
            }
        });


        jQuery.each(listado, function(row, value) {
            if (row == 0) { //construyo arrays para los dataset, recupero colores y labels
                jQuery.each(filteredTitlePos, function(index, title) {
                    var split = listado[row][filteredTitlePos[index]].split('-');
                    var pos = split[0] + split[1];
                    valores[pos] = []; //construyo los array para los dataset
                    colores.push(split[2]); //recupero colores
                    if (tipoGrafico == 'mixed') {
                        if (split.length > 3){ //ingresaron un tipo de grafico
                            //verifico que sea un tipo de grafico valido
                            if (split[3] == 'barra' || split[3] == 'linea') {
                            tipoGraficosMixed.push(split[3]);//recupero tipo de grafico para cada dataset   
                            } else { //seteo graficos por defecto
                            if (index == 0) tipoGraficosMixed.push('barra');//por defecto seteo barra
                            if (index == 1) tipoGraficosMixed.push('linea');//por defecto seteo linea
                            }
                        } else { //seteo graficos por defecto
                            if (index == 0) tipoGraficosMixed.push('barra');//por defecto seteo barra
                            if (index == 1) tipoGraficosMixed.push('linea');//por defecto seteo linea
                        }
                    }
                });
            }

            if (row == 1) {
                jQuery.each(filteredTitlePos, function(index, title) {
                    if (tipoGrafico != 'pie') {
                        if (tipoGrafico == 'heatmap') {
                            etiquetas.push(listado[row][filteredTitlePos[index]]); //recupero etiquetas (eje x)
                        } else {
                            columnas.push(listado[row][filteredTitlePos[index]]); //recupero columnas para label
                            cantDatos = cantDatos + 1;
                        }
                    } else {
                        etiquetas.push(listado[row][filteredTitlePos[index]]); //recupero las etiquetas de la torta
                    }
                });
            }

            if (row > 1) { //recupero los datos para los dataset y los colores para torta
                var label = false;
                jQuery.each(filteredTitlePos, function(index, title) {
                    //Detectar si es etiqueta x
                    var split = listado[0][filteredTitlePos[index]].split('-');
                    var pos = split[0] + split[1];
                    if (tipoGrafico == 'pie') { //recupero datos para la torta
                        valores[pos].push(listado[row][filteredTitlePos[index]]);
                    } else {
                        if (tipoGrafico == 'heatmap') {
                            if (label == false) {
                                columnas.push(listado[row][0]); //recupero las columnas (eje y)
                                label = true;
                                cantDatos = cantDatos + 1;
                            }
                            if (index != indiceNombreCorto) valores[pos].push(listado[row][filteredTitlePos[index]]); //recupero datos
                            if (index + 2 == indiceNombreCorto) {
                                if (typeof listado[row][index + 2] == 'undefined') labelsYCortos.push("*"); //en caso que no completen nombre-corto
                                else labelsYCortos.push(listado[row][index + 2]); //recupero labels Y cortos
                            }
                        } else {
                            if (label == false) {
                                etiquetas.push(listado[row][0]); //recupero las etiquetas
                                label = true;
                            }
                            valores[pos].push(listado[row][filteredTitlePos[index]]); //recupero datos
                        }
                    }
                });
            }
        });

        if (tipoGrafico == 'pie') {
            var datosTorta = [];

            jQuery.each(Object.keys(filteredTitleName), function(index, key) {
                var pos = filteredTitleName[index];

                if (valores.hasOwnProperty(pos)) {
                    datosTorta.push(valores[pos]);
                }
            });
            datos = datosTorta;

        } else if (cantDatos == 1) { //es un solo juego de datos

            jQuery.each(Object.keys(filteredTitleName), function(index, key) {
                var pos = filteredTitleName[index];

                if (valores.hasOwnProperty(pos)) {
                    datos = valores[pos];
                }
            });
        }

        if (tipoGrafico == 'mixed') {
            var cadena = opt.porcentajesMixed ? opt.porcentajesMixed : '';
            if (cadena.length > 0) {
                porcentajesMixed = cadena.split(',');
            }
        }

        //seteo toltips para mostrar porcentaje o no
        if (opt.porcentajes == true) {
        
            if (tipoGrafico == 'line' && cantDatos > 1){
                //seteo tooltips
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ': ' + value + '%';
                        }
                    },
                    mode: 'index',
                    intersect: false,
                };
            } else if  (tipoGrafico == 'pie'){
                //seteo tooltips
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data["labels"][tooltipItem.index] + ': ' +  value + '%';
                        }
                    }
                };

            } else if  (opt.tipoGrafico == 'Stacked Bar'){
                //seteo tooltips
                if (mostrarTotal == true) {
                    toltips = {
                        enabled: true,
                        mode: 'index',
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[tooltipItem.datasetIndex].label + ': ' +  value + '%';
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                                return 'Total: ' + new Intl.NumberFormat('es-AR', {maximumFractionDigits:2 }).format(total) + '%';
                            }
                        }
                    };
                } else {
                    toltips = {
                        enabled: true,
                        mode: 'index',
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[tooltipItem.datasetIndex].label + ': ' +  value + '%';
                            }
                        }
                    };
                }
            } else {
                //seteo tooltips
                toltips = {
                    enabled: true,
                    mode: 'index',
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ': ' +  value + '%';
                        }
                    }
                };
            }

        } else {

            if (tipoGrafico == 'line' && cantDatos > 1){
                //seteo tooltips
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
                        }
                    },
                    mode: 'index',
                    intersect: false,
                };
            } else if  (tipoGrafico == 'pie'){
                //seteo tooltips
                toltips = {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data["labels"][tooltipItem.index] + ': ' +  value;
                        }
                    }
                };

            } else if (opt.tipoGrafico == 'Stacked Bar' && cantDatos > 1){
                //seteo tooltips
                if (mostrarTotal == true) {
                    toltips = {
                        enabled: true,
                        mode: 'index',
                        intersect: false,
                            callbacks: {
                            label: function(tooltipItem, data) {
                                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                                value = numeroFormateado(value);
                                return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
                            },
                            footer: (tooltipItems, data) => {
                                let total = tooltipItems.reduce((a, e) => a + parseFloat(e.yLabel), 0);
                                return 'Total: ' + new Intl.NumberFormat('es-AR', {maximumFractionDigits:2 }).format(total);
                            }
                            }
                    };
                } else {
                    toltips = {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                        callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
                        }
                        }
                    };
                }
            } else {
                //seteo tooltips
                toltips = {
                    enabled: true,
                    mode: 'index',
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            value = numeroFormateado(value);
                            return data.datasets[tooltipItem.datasetIndex].label + ': ' +  value;
                        }
                    }
                };
            }
        }

        //llamo a los constructores para cada tipo de grafico
        if (tipoGrafico == 'pie') {

            colores.forEach(function(valor, indice, array) {
                codigosColores.push(ponchoColor(valor));
            });

            console.log('etiquetas --> ' + etiquetas);
            console.log('datos --> ' + datos);
            console.log('colores --> ' + codigosColores);

            graficoTorta(etiquetas, datos, tipoGrafico, codigosColores, opt.idComponenteGrafico, posicionLeyendas, toltips, mostrarLeyendas);
        }

        if (cantDatos == 1) {

            console.log('etiquetas --> ' + etiquetas);
            console.log('datos --> ' + datos);

            color = ponchoColor(colores[0]);
            console.log('color --> ' + color);

            if (opt.tipoGrafico == 'Line') {
                graficoLineaSimple(etiquetas, datos, tipoGrafico, color, columnas[0], opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, toltips, mostrarLeyendas);
            }

            if (tipoGrafico == 'bar' || opt.tipoGrafico == 'Area') {
                graficoAreaBarraSimple(etiquetas, datos, tipoGrafico, color, columnas[0], opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, toltips, mostrarLeyendas);
            }

            if (tipoGrafico == 'horizontalBar') {
                graficoBarraHorizontalSimple(etiquetas, datos, tipoGrafico, color, columnas[0], opt.ejeYenCero, opt.idComponenteGrafico, posicionLeyendas, toltips, mostrarLeyendas);
            }

        }

        if (cantDatos > 1) {

            if (tipoGrafico == 'heatmap') {

                if ((typeof opt.heatMapColors != 'undefined' && opt.heatMapColors != "") && (typeof opt.heatMapColorsRange != 'undefined' && opt.heatMapColorsRange != "")){

                    var datosFull = [];

                    var labelX = 'labelFila';
                    var labelY = 'labelColumna';
                    var labelValor = 'labelValor';

                    if ((typeof opt.datosTooltip != 'undefined') && (opt.datosTooltip.length > 0)){
                        if ((typeof opt.datosTooltip[0] != 'undefined') && (typeof opt.datosTooltip[0].labelFila != 'undefined')) labelX = opt.datosTooltip[0].labelFila;
                        if ((typeof opt.datosTooltip[1] != 'undefined') && (typeof opt.datosTooltip[1].labelColumna != 'undefined')) labelY = opt.datosTooltip[1].labelColumna;
                        if ((typeof opt.datosTooltip[2] != 'undefined') && (typeof opt.datosTooltip[2].labelValor != 'undefined')) labelValor = opt.datosTooltip[2].labelValor;
                    }                        

                    //getDatos
                    jQuery.each(Object.keys(filteredTitleName), function(index, key) {

                        var pos = filteredTitleName[index];

                        if (valores.hasOwnProperty(pos)) {
                            datos = valores[pos];
                            datosFull.push(datos);
                        };
                    });

                    var series = [];

                    for (var i=0;i<columnas.length;i++) {
                        var data = [];
                        for (var l=0;l<etiquetas.length;l++) {
                            var datos = {
                                x: etiquetas[l],
                                y: parseInt(datosFull[l][i])
                            };

                            data.push(datos);
                        } 

                        var serie = {
                            name: labelsYCortos[i] != '*' ? labelsYCortos[i] : columnas[i],
                            data: data
                        } 

                        series.push(serie);
                    }   

                    var rango = [];

                    //construyo range object
                    for (var i=0; i<opt.heatMapColorsRange.length -1; i++){
                            var data = {
                            from: opt.heatMapColorsRange[i],
                            to: opt.heatMapColorsRange[i + 1],
                            color: ponchoColor(opt.heatMapColors[i])
                            };
                        rango.push(data);
                    }

                    var mostrarYaxis = '';
                    if (typeof opt.mostrarEjeY == 'undefined'){
                        mostrarYaxis = true;
                    } else {
                        mostrarYaxis = opt.mostrarEjeY;
                    }

                    graficoHeatMap(
                        etiquetas, series, opt.idComponenteGrafico, columnas, 
                        rango, labelX, labelY, labelValor, opt.tituloGrafico, 
                        mostrarYaxis, posicionLeyendas, mostrarLeyendas);

                } else {
                    //informo por consola el faltante
                    if (typeof opt.heatMapColors == 'undefined' || opt.heatMapColors == "") {
                        console.log('Completar vector con valores para los colores');
                    }

                    if (typeof opt.heatMapColorsRange == 'undefined' || opt.heatMapColorsRange == "") {
                        console.log('Completar vector con el rango de valores para los colores');
                    }
                }
            } else {

                var datasets = [];
                var indiceColor = 0;

                //getColores
                colores.forEach(function(valor, indice, array) {
                    codigosColores.push(ponchoColor(valor));
                });
                var indiceMixed = 0;

                //getDatos
                jQuery.each(Object.keys(filteredTitleName), function(index, key) {
                    var pos = filteredTitleName[index];
                    if (valores.hasOwnProperty(pos)) {

                        datos = valores[pos];

                        if (opt.tipoGrafico == 'Line') {
                            //construyo datasets
                            var dataset = {
                                label: columnas[indiceColor],
                                data: datos,
                                borderColor: codigosColores[indiceColor],
                                fill: false,
                                borderWidth: 2,
                                lineTension: 0,
                                backgroundColor: codigosColores[indiceColor], 
                            };
                        } else if (opt.tipoGrafico == 'Bar' || opt.tipoGrafico == 'Area' || opt.tipoGrafico == 'Horizontal Bar' || opt.tipoGrafico == 'Stacked Bar') {
                            //construyo datasets
                            var dataset = {
                                label: columnas[indiceColor],
                                data: datos,
                                borderColor: codigosColores[indiceColor],
                                backgroundColor: codigosColores[indiceColor], //BARRAS y AREA
                                borderWidth: 2,
                                lineTension: 0, //linea  y area
                            };
                        } else if (opt.tipoGrafico == 'Mixed'){ 
                            var tipo = tipoGraficosMixed[indiceMixed];
                            //construyo datasets
                            if (tipo == 'barra') {
                                var dataset = {
                                label: columnas[indiceColor],
                                data: datos, 
                                backgroundColor: codigosColores[indiceColor],
                                // This binds the dataset to the left y axis
                                yAxisID: 'left-y-axis',
                                type: 'bar',
                                };
                            } else if (tipo == 'linea'){
                                var dataset = {
                                    label: columnas[indiceColor],
                                    data: datos, 
                                    borderColor: codigosColores[indiceColor],
                                    backgroundColor: codigosColores[indiceColor],
                                    // Changes this dataset to become a line
                                    type: 'line',
                                    // This binds the dataset to the right y axis
                                    yAxisID: 'right-y-axis',
                                    fill: false,
                                };
                            }
                        }

                        datasets.push(dataset);
                        indiceColor = indiceColor + 1;
                        indiceMixed = indiceMixed + 1;
                    }
                });

                if (tipoGrafico == 'mixed') { 
                    if (porcentajesMixed.length == 2) {
                        indicePorcentajeMixed = 2; //los 2 dataset usan porcentaje
                    } else if (porcentajesMixed.length == 1){
                        if (porcentajesMixed[0] == 'eje-y1') {
                            indicePorcentajeMixed = 0; //solo el primer dataset usa porcentaje
                        } else if (porcentajesMixed[0] == 'eje-y2') {
                            indicePorcentajeMixed = 1; //solo el segundo dataset usa porcentaje
                        }
                    } else  indicePorcentajeMixed = 3; //ningun dataset usa escala de porcentaje
                }
                

                if (opt.tipoGrafico == 'Stacked Bar'){ 
                    graficoComplejoStacked(
                        etiquetas, tipoGrafico, datasets, 
                        opt.idComponenteGrafico, opt.ejeYenCero, 
                        posicionLeyendas, toltips, mostrarLeyendas);
                } else if (opt.tipoGrafico == 'Mixed') {
                    graficoComplejoMixed(
                        etiquetas, 'bar', datasets, opt.idComponenteGrafico, 
                        opt.ejeYenCero, posicionLeyendas, 
                        indicePorcentajeMixed, columnas[0], columnas[1], 
                        mostrarLeyendas);
                } else if (opt.tipoGrafico == 'Horizontal Bar') {
                    graficoComplejoHorizontal(
                        etiquetas, tipoGrafico, datasets, 
                        opt.idComponenteGrafico, opt.ejeYenCero, 
                        posicionLeyendas, toltips, mostrarLeyendas);
                } else {
                    graficoComplejo(
                        etiquetas, tipoGrafico, datasets, 
                        opt.idComponenteGrafico, opt.ejeYenCero, 
                        posicionLeyendas, toltips, mostrarLeyendas);
                }
            }

        }

        //verifica si viene titulo del grafico, si no viene no dibuja nada
        if (opt.tituloGrafico != "" && typeof opt.tituloGrafico != 'undefined') {
            graficaTitulo(opt.idTagTituloGrafico, opt.tituloGrafico);
        }
    } 
}
