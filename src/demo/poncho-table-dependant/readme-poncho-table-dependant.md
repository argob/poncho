# PonchoTable con filtros dependientes

Se trata de una variación a PonchoTable incluida en la librería de *scripts* en `poncho.min.js`.

Para esta versión se programó que los filtros sean dependientes uno del otro utilizando el mismo criterio de nombre de columna en GoogleSheet.

Para que los filtros funcionen en las tablas de Google, se debe usar el prefijo **filtro-**[nombre]. Entonces, una columna para un filtro de provincias quedaría: **filtro-provincia**.

<figure>
<img src="./img/screenshoot-google-sheet.jpg" alt="Captura de pantalla Google Sheet">
<figcaption style="font-size:small; color:gray">Captura de pantalla Google Sheet con filtros para PonchoTable</figcaption>
</figure>


## Opciones

| Parámetro | Tipo | Descripción |
|:---|:---|:---|
| hojaNombre | `string` | Nombre de la pestaña en Google Sheet | 
| idSpread | `string` | ID del documento. Se puede copiar de la URL del documento abierto. | 
| tituloTabla | `string` | Título para la etiqueta `caption` de la tabla | 
| ordenColumna | `string` | Asigna la columna por la cual debe ordenarse la información de la tabla. |
| ordenTipo | `string` | Modo de orden ascendente (asc) o descendente (desc). |
| ocultarColumnas | `Array` | Lista de columnas que se desea ocultar |
| cantidadItems | `integer` | Cantidad de registros por página |
| jsonUrl | `string` | URL del documento o servicio JSON |


## Código HTML

```html
<!-- INCLUDE SCRIPTS -->
<script src="/sites/default/files/ponchotable/showdown.js"></script>
<script src="/profiles/argentinagobar/themes/argentinagobar/argentinagobar_theme/js/extensiones/showdown-extensions.js"></script>
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/datatables.min.js"></script>
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<link href="/profiles/argentinagobar/themes/contrib/poncho/css/ponchoTable-1.1.css" rel="stylesheet">
<!-- / INCLUDE SCRIPTS -->

<!-- FILTERS -->
<div class="row">
  <div class="col-sm-12 col-md-12" id="ponchoTableFiltroCont" style="display: none">
    <div class="row" id="ponchoTableFiltro"></div>
  </div>
  <div class="col-sm-12 col-md-12" id="ponchoTableSearchCont" style="display: none">
    <div class="form-group">
      <label for="ponchoTableSearch">Buscá por palabra clave</label> 
      <input class="form-control" id="ponchoTableSearch" type="text"></div>
    </div>
  </div>
</div>
<!-- / FILTERS -->
<!-- HTML TABLE -->
<div class="row">
  <div class="col-sm-8" id="ponchoTableSearchCont" style="display:none">
    <div class="form-group">
      <label for="ponchoTableSearch">Buscar por palabra clave</label> 
      <input class="form-control" id="ponchoTableSearch" type="text">
    </div>
  </div>
  <div class="col-md-12 m-b-4">
    <table class="table table-condensed table-striped" id="ponchoTable">
      <caption></caption>
      <thead></thead>
      <tbody></tbody>
    </table>
  </div>
</div>
<!-- / HTML TABLE -->
```

## Script PonchoTableDependant

```html
<script src="[URL]/poncho-table-dependant.js"></script>
```

## Código JavaScript para llamar a PonchoTable

```html
<script>
(function($) {
    const options = {
        "hojaNombre": "tablavisible", 
        "idSpread": "15ae-c5palH__3ZCtw-moukH1zrd04HJLDyqsHdi_XJg",
        "tituloTabla": "Vialidad",
        "ordenColumna": 1,
        "ordenTipo": "asc",
        "ocultarColumnas": [],
        "cantidadItems": 15
    };
    ponchoTableDependant(options);
})(jQuery);
</script>
```