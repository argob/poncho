/**
 * Agenda presidencial
 * 
 * MIT License
 * 
 * Copyright (c) 2024 Argentina.gob.ar
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rightsto use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
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

(function($) {

    function buscar() {
        var selectMeses = $('#selectorMes');





        function getFechaEvento(fecha_desde, fecha_hasta) {
            var fecha_evento = '';
            if (!fecha_hasta.isValid()) {
                fecha_evento = fecha_desde.format('DD/MM/YYYY');
            } else {
                fecha_evento = "Del " + fecha_desde.format('DD/MM/YYYY') +
                    " al " + fecha_hasta.format('DD/MM/YYYY');
            }

            return fecha_evento;
        }




        function getBoton(boton) {
            var tieneboton = '';
            if (boton) {
                tieneboton = "<p><a href='" + boton + "' title='' class='btn btn-primary btn-sm' target='_blank'>Más información</a></p>";
            }

            return tieneboton;
        }





        function getLugarHorario(lugar, horario) {
            var lugarhorario = '';

            if (lugar && horario) {
                lugarhorario = "<p><strong>Lugar y horario</strong>: " + lugar + ", de " + horario + " horas</p>";
            } else {
                if (lugar) {
                    lugarhorario = "<p><strong>Lugar</strong>: " + lugar + "</p>";
                } else {
                    lugarhorario = "<p><strong>Horario</strong>: de " + horario + " horas</p>";
                }
            }

            return lugarhorario;
        }





        function getDonde(direccion, destino, provincia) {
            var donde = '';
            if (direccion && destino) {
                donde = "<p>" + direccion + ", " + destino + "<br>" + provincia + "</p>";
            } else {
                if (destino) {
                    donde = "<p>" + destino + ", " + provincia + "</p>";
                } else {
                    if (direccion) {
                        donde = "<p>" + direccion + ", " + provincia + "</p>";
                    } else {
                        donde = "<p>" + provincia + "</p>";
                    }
                }
            }

            return donde;
        }




        
        //LIMPIAR
        $("#resultados tbody").html("");
        $("#listaDestacados").html("");
        mes_seleccionado = $("#selectorMes").val();

        var curLista = lista;

        if (mes_seleccionado == 0) {
            curLista = listaVigente;
        }


        //LISTA DE EVENTOS
        $.each(curLista, function(index, element) {

            var fecha_orden = moment(element["gsx$desde"]["$t"], "DD/MM/YYYY");
            var fecha_desde = moment(element["gsx$desde"]["$t"], "DD/MM/YYYY");
            var fecha_hasta = moment(element["gsx$hasta"]["$t"], "DD/MM/YYYY");
            var horario = element["gsx$horario"]["$t"];
            var titulo = element["gsx$titulo"]["$t"];
            var descripcion = element["gsx$descripcion"]["$t"];
            var boton = element["gsx$url"]["$t"];


            var fecha_evento = getFechaEvento(fecha_desde, fecha_hasta);
            var tieneboton = getBoton(boton);


            var contenido_evento = "<tr><td class='text-center'><i class='fa fa-2x text-muted fa-calendar-o m-t-2'></i><div class='m-t-2'>";
            contenido_evento += "<span class='hidden " + config.filterColumn + "'>" + element["gsx$" + config.filterColumn]["$t"] + "</span>";
            contenido_evento += "<span class='hidden fecha-evento'>" + fecha_orden + "</span>";
            contenido_evento += "<small>" + fecha_evento + "</small></div></td>";
            contenido_evento += "<td class='descripcion'><p><strong>" + titulo + "</strong> <br>";
            contenido_evento +=  descripcion + "</p>";
            contenido_evento += (horario) ? "<strong><p>Horario:</strong> " + horario + "</p>" : ''; 
            contenido_evento += tieneboton;
            contenido_evento += "</td></tr>";


            if (mes_seleccionado == fecha_desde.format('M') ||
                mes_seleccionado == 0 || mes_seleccionado == 13) {
                //Se filtra por mes
                $("#resultados tbody").append(contenido_evento);

            } else if (fecha_hasta.isValid()) {

                var inicio = fecha_desde;
                var fin = fecha_hasta;
                var listMeses = [];

                while (fin > inicio || inicio.format('M') === fin.format('M')) {
                    listMeses.push(inicio.format('M'));
                    inicio.add(1, 'month');
                }
                for (var i = 0; i < listMeses.length; i++) {
                    if (mes_seleccionado == listMeses[i]) {
                        $("#resultados tbody").append(contenido_evento);

                    }
                }
            }

        })



        //lIST.JS
        var options = {
            valueNames: ['fecha-evento', 'descripcion', config.filterColumn],
            page: 5,
            pagination: true,
        };
        var serviciosList = new List('eventos', options);

        serviciosList.sort("fecha-evento", {
            order: "asc"
        });

        //FILTRO PALABRA
        var busqueda = $("#text_titulo").val();

        var filtroColumna = $("#filter" + capitalizeFirstLetter(config.filterColumn)).val();

        serviciosList.filter(getAccentInsensitiveFilter());

        // FILTRO ACENTOS PARA LIST.JS
        function getAccentInsensitiveFilter() {
            var needle1 = removeAccents(filtroColumna).toLowerCase();
            var needle2 = removeAccents(busqueda).toLowerCase();
            
            return function(item) {
                
                var haystack1 = removeAccents(item.values()[config.filterColumn] || "").toLowerCase();
                var haystack2 = removeAccents(item.values()['descripcion'] || "").toLowerCase();
                
                return haystack1.indexOf(needle1) > -1 && 
                       haystack2.indexOf(needle2) > -1 ;
            };
        }

        //AVISO NO HAY RESULTADOS
        if ($("#resultados tbody tr").length == 0) {
            $("#alertaResultados").show();
        } else {
            $("#alertaResultados").hide();
        }


    }

    // FUNCION REMOVER ACENTO
    var removeAccents = (function() {
        var letters1 = "äáàâăëéèêĕíöóòôŏüúùûŭÄÁÀÂĂËÉÈÊĔÍÖÓÒÔŎÜÚÙÛŬßșȘ",
            letters2 = "aaaaaeeeeeiooooouuuuuAAAAAEEEEEIOOOOOUUUUUssS",
            patternLetters = new RegExp("[" + letters1 + "]", "g"),
            lookupLetters = {},
            letterTranslator;

        letters1.split("").forEach(function(letter, i) {
            lookupLetters[letter] = letters2[i];
        });

        letterTranslator = function(match) {
            return lookupLetters[match] || match;
        };

        return function removeAccents(input) {
            return input.replace(patternLetters, letterTranslator);
        };
    })();

    

    function filtrarVigentes(lista) {
        newLista = lista.filter(function(e) {
            hoy = moment();
            fecha_desde = moment(e["gsx$desde"]["$t"], 'DD-MM-YYYY');
            fecha_hasta = moment(e["gsx$hasta"]["$t"], 'DD-MM-YYYY');

            return fecha_hasta.isSameOrAfter(hoy.format("YYYY-MM-DD")) ||
                fecha_desde.isSameOrAfter(hoy.format("YYYY-MM-DD"));

        });

        return newLista;
    }

    function getFilterOptions(column, values) {
        var distinct = [];
        var result = [];
        $.each(values, function (index, element) {
            var current_value = element['gsx$' + column].$t;
            if(current_value && distinct.indexOf(current_value.toLowerCase()) === -1) {
                distinct.push(current_value.toLowerCase());
                result.push(current_value);
            }
        })

        return result.sort();
    }




    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }






    function createSelect(column, values) {
        var options = getFilterOptions(column, values);
        var select = $("<select></select>");

        for( var i = 0; i < options.length; i++ ){
          var option = $("<option></option>");
          $(option).val(options[i]);
          $(option).html(options[i]);
          $(select).append(option);
        }

        var option = $("<option></option>");
        $(option).val('');
        $(option).html('Todos');
        $(select).prepend(option);
        $(option).attr('selected', true)
        
        select.attr('id', 'filter' + capitalizeFirstLetter(column));
        select.addClass('form-control');

        return select;
    }





    function createFilterSelect(column, values) {
        var select = createSelect(column, values)

        var div = $('<div>').addClass('col-md-4');
        var div2 = $('<div>').addClass('form-group')
                .append($('<label>').text(capitalizeFirstLetter(column)))
                .append(select);
        
        div.append(div2);
        
        $('.select-month').after(div);

        $("#filter" + capitalizeFirstLetter(column)).on("change", function() {
            buscar();
        })

    }

    function getData(config) {

        var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + config.spreadsheetID + '/values/' + config.nombreHoja +'?alt=json&key=' + config.tokenApi;

        $.getJSON(url, function(data) {

            var filterColumn = config.filterColumn;
            var data = gapi_legacy(data);

            window.lista = data.feed.entry;
            window.listaVigente = filtrarVigentes(lista);

            createFilterSelect(filterColumn, lista);

            //Traer datos iniciales
            buscar();

        })
    }

    $(document).ready(function() {
        getData(config);

        //BOTÓN BUSQUEDA
        $("#selectorMes").on("change", function() {
            buscar();
        })

        $("#text_titulo").keyup(function(e) {
            if ($(this).val().length === 0 || $(this).val().length >= 3) {
                buscar();
            }
        });

    });
1231231
    var config = {
        // Id del documento
        // Asegúrese de que sea público o esté configurado para que cualquier persona con enlace pueda ver
        'spreadsheetID': '180fcXMiWbl-oDclIneMbJoE25kYHj0O_ryP7gIiQYhw',
        // Token de usuario para acceder por api
        'tokenApi': 'AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY',
        // nombre de la hoja tal cual aparece en el documento.
        'nombreHoja': encodeURIComponent('Hoja 1'),
        // Segundo filtro (solamente 1)
        'filterColumn': 'titulo',

    }
})(jQuery);
