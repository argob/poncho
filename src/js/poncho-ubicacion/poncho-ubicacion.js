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
    var urlMunicipios = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geomunicipios.json';
    var urlLocalidades = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geolocalidades.json';
    var provincias;
    var municipios;
    var localidades;
    var iProvincia = jQuery('input[name="submitted[' + options.provincia + ']"]');
    var iMunicipio = jQuery('input[name="submitted[' + options.municipio + ']"]');
    var iLocalidad = jQuery('input[name="submitted[' + options.localidad + ']"]');
    var sProvincia;
    var sMunicipios;
    var sLocalidades;

    function init() {
        urlProvincias = (options.urlProvincias ? options.urlProvincias : urlProvincias);
        urlMunicipios = (options.urlMunicipios ? options.urlMunicipios : urlMunicipios);
        urlLocalidades = (options.urlLocalidades ? options.urlLocalidades : urlLocalidades);

        jQuery.getJSON(urlProvincias, function(data) {
            provincias = parseJsonProvincias(data);
            sProvincia = getSelectProvincias(provincias);
            addProvEvent();
            iProvincia.after(sProvincia);
            jQuery(sProvincia).select2();
        });

        jQuery.getJSON(urlMunicipios, function(data) {
            municipios = parseJsonMunicipios(data);
            sMunicipios = getSelectMunicipios(municipios, sProvincia.val());
            addMunEvent();
            iMunicipio.after(sMunicipios);
            jQuery(sMunicipios).select2();
        });

        jQuery.getJSON(urlLocalidades, function(data) {
            localidades = parseJsonLocalidades(data);
            sLocalidades = getSelectLocalidades(localidades, sProvincia.val());
            addLocEvent();
            iLocalidad.after(sLocalidades);
            jQuery(sLocalidades).select2();
        });
        iProvincia.hide();
        iMunicipio.hide();
        iLocalidad.hide();
    }


    /**
     * 
     * @param {*} data 
     * @returns 
     */
    function parseJsonProvincias(data) {
        provincias = [];
        data.provincias.forEach(function(provincia, index) {
            provincias.push(provincia);
        });
        return provincias;
    }

    /**
    * 
    * @param {*} data 
    * @returns 
    */
    function parseJsonMunicipios(data) {
        const groupedData = data.municipios.reduce((acc, current) => {
            const key = `${current.nombre_completo}`;
            current.label = key;
            if (!acc[key]) {
                acc[key] = current;
            }
            return acc;
        }, {});
    return Object.values(groupedData);
    }
    
    /**
     * 
     * @param {*} data 
     * @returns 
     */
    function parseJsonLocalidades(data) {
        const groupedData = data.localidades.reduce((acc, current) => {
            const key = `${current.departamento.nombre} - ${current.nombre}`;
            current.label = key;
            if (!acc[key]) {
                acc[key] = current;
            }
            return acc;
        }, {});
        return Object.values(groupedData);
    }


    /**
     * 
     */
    function addProvEvent() {
        sProvincia.on('change', function(e) {
            iProvincia.val('');
            iMunicipio.val('');
            iLocalidad.val('');
            sMunicipios.children('option:not(:first)').remove();
            sLocalidades.children('option:not(:first)').remove();
            if (sProvincia.val() != '') {
                iMunicipio.val(sMunicipios.find(":selected").text());
                iProvincia.val(sProvincia.find(":selected").text());

                var sAuxM = getSelectMunicipios(municipios, sProvincia.val());
                var sOptM = sAuxM.find('option');
                sMunicipios.append(sOptM);
                sMunicipios.val('');
                
                var sAuxL = getSelectLocalidades(localidades, sProvincia.val());
                var sOptL = sAuxL.find('option');
                sLocalidades.append(sOptL);
                sLocalidades.val('');

            }
        });
    }

    /**
    * 
    */
    function addMunEvent() {
        sMunicipios.on('change', function(e) {
            iMunicipio.val('');
            if (sMunicipios.val() != '') {
                iMunicipio.val(sMunicipios.find(":selected").text());
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
                selected = ' selected="selected"';
            }
            const label = (el.label ? el.label : el.nombre);
            combo.append(
                `<option value="${el.id}"${selected}>${label}</option>`
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
    * @param {*} municipios 
    * @param {*} provincia
    * @returns 
    */
    function getSelectMunicipios(municipios, provincia) {
        var muniSelect = {};
        var required = iMunicipio.prop('required');
        var select = null;
        
        if (iProvincia.val()) {
        muniSelect = municipios
                .filter(function(municipio) {
                    return String(municipio.provincia.id) == String(provincia);
                })
                .sort(function(a, b) {
                    var nameA = a.label.toUpperCase();
                    var nameB = b.label.toUpperCase();
                    return nameA.localeCompare(nameB);
                });
        emptyOption = false;
            select = getDropDownList(
                'sMunicipios', 'sMunicipios',
                muniSelect, required, emptyOption, iMunicipio.val()
            );
        }else {
            select = getDropDownList(
                'sMunicipios', 'sMunicipios',
            [], required, true, false
            );
        }
        
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
                .sort(function(a, b) {
                    var nameA = a.label.toUpperCase();
                    var nameB = b.label.toUpperCase();
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