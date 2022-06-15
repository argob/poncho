//#####################################################################
//####################### PONCHO UBICACION ############################
//#####################################################################

var ponchoUbicacion = function(options) {
    var urlProvincias =  '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geoprovincias.json';
    var urlLocalidades = '/profiles/argentinagobar/themes/contrib/poncho/resources/jsons/geolocalidades.json';
    var provincias;
    var localidades;
    var iProvincia = jQuery('input[name="submitted[' + options.provincia + ']"]');
    var iLocalidad = jQuery('input[name="submitted[' + options.localidad + ']"]');
    var sProvincia;
    var sLocalidades;

    function init() {
    urlProvincias = options.urlProvincias ? options.urlProvincias : urlProvincias;
    urlLocalidades = options.urlLocalidades ? options.urlLocalidades : urlLocalidades;

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

    function parseJsonProvincias(data) {
    provincias = [];

    data.results.forEach(function(provincia, index) {
      provincias.push(provincia);
    });

    return provincias;
    }

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function parseJsonLocalidades(data) {
    localidades = [];

    data.results.forEach(function(localidad, index) {
      localidades.push(localidad);
    });
    return localidades;
    }

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

    function addLocEvent() {
    sLocalidades.on('change', function(e) {
        iLocalidad.val('');
        if (sLocalidades.val() != '') {
        iLocalidad.val(sLocalidades.find(":selected").text());
        }
    });
    }

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

    function getSelectProvincias(provincias) {
    var provinciasOptions = [];

    provinciasOptions = provincias.sort(function(a, b) {
        var nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
        var nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
        return nameA.localeCompare(nameB);
    });
    var required = iProvincia.prop('required');
    var select = getDropDownList('sProvincias', 'sProvincias', provinciasOptions, 
                                 required, true, iProvincia.val());
    return select;
    }

    function getSelectLocalidades(localidades, provincia) {
    var locaSelect = {};
    var required = iLocalidad.prop('required');
    var select = getDropDownList('sLocalidades', 'sLocalidades', 
                                 [], required, true, false);

    if (iProvincia.val()) {
        locaSelect = localidades
        .filter(function(localidad) {
            return String(localidad.provincia.id) == String(provincia);
        })
        .map(function(a) {
            if (a.departamento.nombre) {
            a.nombre = capitalizeFirstLetter(a.departamento.nombre.toLowerCase()) + ' - ' +
                capitalizeFirstLetter(a.nombre.toLowerCase());
            }
            return a;
        })
        .sort(function(a, b) {
            var nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
            var nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
            return nameA.localeCompare(nameB);
        });
        select = getDropDownList('sLocalidades', 'sLocalidades', 
                                 locaSelect, required, true, iLocalidad.val());
    }

    return select;
    }

    init();
};