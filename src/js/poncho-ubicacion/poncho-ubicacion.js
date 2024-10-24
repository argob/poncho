/**
 * PONCHO UBICACIÓN
 * 
 * @param {object} options 
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2023 Argentina.gob.ar
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
var ponchoUbicacion = function(options) {
    var urlProvincias = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geoprovincias.json';
    var urlLocalidades = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geolocalidades.json';
    var provincias;
    var localidades;
    var iProvincia = jQuery('input[name="submitted[' + options.provincia + ']"]');
    var iLocalidad = jQuery('input[name="submitted[' + options.localidad + ']"]');
    var sProvincia;
    var sLocalidades;

    function init() {
        urlProvincias = (options.urlProvincias ? options.urlProvincias : urlProvincias);
        urlLocalidades = (options.urlLocalidades ? options.urlLocalidades : urlLocalidades);

        jQuery.getJSON(urlProvincias, function(data) {
            provincias = parseJsonProvincias(data);
            sProvincia = getSelectProvincias(provincias);
            addProvEvent();
            iProvincia.after(sProvincia);
            jQuery(sProvincia).select2();
        });

        jQuery.getJSON(urlLocalidades, function(data) {
            localidades = parseJsonLocalidades(data);
            sLocalidades = getSelectLocalidades(localidades, sProvincia.val());
            addLocEvent();
            iLocalidad.after(sLocalidades);
            jQuery(sLocalidades).select2();
        });
        iProvincia.hide();
        iLocalidad.hide();
    }


    /**
     * 
     * @param {*} data 
     * @returns 
     */
    function parseJsonProvincias(data) {
        provincias = [];
        data.results.forEach(function(provincia, index) {
            provincias.push(provincia);
        });
        return provincias;
    }

    
    /**
     * 
     * @param {*} data 
     * @returns 
     */
    function parseJsonLocalidades(data) {

        const groupedData = data.results.reduce((acc, current) => {
            const key = `${current.departamento.nombre}-${current.nombre}`;
            if (!acc[key]) {
                acc[key] = current;
            }
            return acc;
        }, {});
        return Object.values(groupedData);



        localidades = [];
        data.results.forEach(function(localidad, index) {
            localidades.push(localidad);
        });
        return localidades;
    }


    /**
     * 
     */
    function addProvEvent() {
        sProvincia.on('change', function(e) {
            iProvincia.val('');
            iLocalidad.val('');
            sLocalidades.children('option:not(:first)').remove();
            if (sProvincia.val() != '') {
                iProvincia.val(sProvincia.find(":selected").text());
                var sAux = getSelectLocalidades(localidades, sProvincia.val());
                var sOpt = sAux.find('option');
                sLocalidades.append(sOpt);
                sLocalidades.val('');
            }
        });
    }


    /**
     * 
     */
    function addLocEvent() {
        sLocalidades.on('change', function(e) {
            iLocalidad.val('');
            if (sLocalidades.val() != '') {
                iLocalidad.val(sLocalidades.find(":selected").text());
            }
        });
    }


    /**
     * 
     * @param {*} name 
     * @param {*} id 
     * @param {*} optionList 
     * @param {*} required 
     * @param {*} emptyOption 
     * @param {*} selected_item 
     * @returns 
     */
    function getDropDownList(name, id, optionList, required = false,
        emptyOption = false, selected_item = false) {

        var combo = jQuery("<select></select>")
            .attr("id", id).attr("name", name)
            .addClass("form-control form-select")
            .prop('required', required);
        
        if (emptyOption) {
            combo.append("<option value=''>Seleccione una opción</option>");
        }

        jQuery.each(optionList, function(i, el) {
            let selected = '';
            if (selected_item == el.nombre) {
                selected = 'selected="selected"';
            }
            combo.append(
                "<option value='" + el.id + "' " + selected + ">" +
                el.nombre +
                "</option>"
            );
        });
        return combo;
    }


    /**
     * 
     * @param {*} provincias 
     * @returns 
     */
    function getSelectProvincias(provincias) {
        var provinciasOptions = [];

        provinciasOptions = provincias.sort(function(a, b) {
            var nameA = a.nombre.toUpperCase();
            var nameB = b.nombre.toUpperCase();
            return nameA.localeCompare(nameB);
        });
        var required = iProvincia.prop('required');
        var select = getDropDownList(
            'sProvincias', 'sProvincias', provinciasOptions,
            required, true, iProvincia.val()
        );
        return select;
    }


    /**
     * 
     * @param {*} localidades 
     * @param {*} provincia 
     * @returns 
     */
    function getSelectLocalidades(localidades, provincia) {
        var locaSelect = {};
        var required = iLocalidad.prop('required');
        var select = null;

        if (iProvincia.val()) {
            locaSelect = localidades
                .filter(function(localidad) {
                    return String(localidad.provincia.id) == String(provincia);
                })
                .map(function(a) {
                    if (a.departamento.nombre) {
                        a.nombre = a.departamento.nombre 
                            + ' - ' + a.nombre;    
                    }
                    return a;
                })
                .sort(function(a, b) {
                    var nameA = a.nombre.toUpperCase();
                    var nameB = b.nombre.toUpperCase();
                    return nameA.localeCompare(nameB);
                });
            
            emptyOption = (iLocalidad.val() ? true : false);
            select = getDropDownList(
                'sLocalidades', 'sLocalidades',
                locaSelect, required, emptyOption, iLocalidad.val()
            );
        } else {
            select = getDropDownList(
                'sLocalidades', 'sLocalidades',
                [], required, true, false
            );
        }

        return select;
    }

    init();
};