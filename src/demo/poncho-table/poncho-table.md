# Poncho Table


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
  <div class="col-sm-12 col-md-3" id="ponchoTableFiltroCont" style="display:none">
    <div class="form-group">
      <label for="ponchoTableFiltro" id="tituloFiltro">Filtro</label> 
      <select class="form-control" id="ponchoTableFiltro" name="ponchoTableFiltro">
        <option value="">Todos</option> 
      </select>
    </div>
  </div>
  <div class="col-sm-12 col-md-9" id="ponchoTableSearchCont" style="display: none">
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
      <thead><tr></tr></thead>
      <tbody></tbody>
    </table>
  </div>
</div>
<!-- / HTML TABLE -->
```


## Código JavaScript para llamar a PonchoTable

```html
<script>
(function($) {
    const options = {
        "jsonUrl": "[url del json]",
        // "hojaNombre": "tablavisible", 
        // "idSpread": "15ae-c5palH__3ZCtw-moukH1zrd04HJLDyqsHdi_XJg",
        "tituloTabla": "Vialidad",
        "ordenColumna": 1,
        "ordenTipo": "asc",
        "ocultarColumnas": [],
        "cantidadItems": 15
    };
    ponchoTable(options);
})(jQuery);
</script>
```