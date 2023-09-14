# PonchoTable con filtros dependientes

Se trata de una variación a PonchoTable incluida en la librería de *scripts* en `poncho.min.js`.

Para esta versión se **programó** que los filtros sean dependientes uno del otro utilizando el mismo criterio de nombre de columna en GoogleSheet.

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
| hash | `boolean` | Permite hacer una búsqueda pasándo un _hash_ por URL. Ej: <br>`www.argentina.gob.ar#mi-busqueda` |
| filterClassList | `object` | Listado de selectores css para asignar en cada columna de filtros. Ej: <br>`filterClassList:["col-sm-6", "col-md-4"],` |
| filterContClassList | `object` | Listado de selectores css para asignar al contenedor de filtros. Ej: <br>`filterContClassList:["col-sm-6", "col-md-4"],` |
| searchContClassList | `object` | Listado de selectores css para asignar al contenedor del input de búsqueda. Ej: <br>`searchContClassList:["col-sm-6", "col-md-4"],` |
| asFilter | `object` | Permite definir un listado de items asignados a un filtro. <br>`"asFilter":  (row) => row,` |
| customEntry | `object` | Permite modificar la entrada que se mostrará en la tabla manteniendo la entrada original para el uso global de los datos.<br>`"customEntry": (row) => row,` |
| refactorEntries | `object` | Permite modificar el documento JSON en su totalidad.<br>`"refactorEntries": (row) => row,` |
| allowedTags | `object` | Permite configurar un listado de etiquetas HTML que se imprimirán como parte del DOM (del inglés, *Document Object Model*), y no como un texto. Para habilitar todas las etiquetas se utiliza `["*"]`. Si se quiere especificar cuales deben usarse, ej.: `["a", "strong"]`. Para evitar etiquetas HTML: `[]` |
| jsonData | `json object` | Permite utilizar un documento JSON local o de una ubicación no asociada a Google API. |
| headers | `object` | Permite definir o redefinir los headers por cada clave. Ejemplo `{"key": "value"}`|
| orderFilter | `boolean` | Permite ordenar Alfanuméricamente el listado de items en en cada filtro. `false` por defecto. |
| emptyLabel | `string` | Permite cambiar el _label_ en la opción vacía del desplegable. `Todos` por defecto. |
| wizard | `boolean` | Muestra los _select_ y sus opciones una vez seleccionado el filtro padre. `false` por defecto. |


### Opción para modo Wizard

Para poder mostrar u ocultar elementos html en función de la visibilidad de la tabla, se puede utilizar el siguiente _dataset_ con su valor en `boolean`: `data-visible-as-table`.

#### Uso

```html
<div class="alert alert-info" data-visible-as-table="false">
  <p>Para acceder al formulario, elegí tipo de documento, provincia y motivo.</p>
</div>
```

El valor en `false`, hará que cuando la tabla **no esté visible** el elemento con el dataset, se visualice.


```html
<div class="alert alert-info" data-visible-as-table="true">
  <p>Busque un resultado en la tabla.</p>
</div>
```

El valor en `true`, hará que cuando la tabla **esté visible** el elemento con el dataset, se visualize.






## Scripts

### PonchoTable

```html
<!-- INCLUDE SCRIPTS -->
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/datatables.min.js"></script>
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<link href="/profiles/argentinagobar/themes/contrib/poncho/css/ponchoTable-1.1.css" rel="stylesheet">
<!-- / INCLUDE SCRIPTS -->
```

### Scripts complementarios


```html
<!-- INCLUDE COMPLEMENTARY SCRIPTS -->
<script src="/sites/default/files/ponchotable/showdown.js"></script>
<script src="/profiles/argentinagobar/themes/argentinagobar/argentinagobar_theme/js/extensiones/showdown-extensions.js"></script>
<!-- / INCLUDE COMPLEMENTARY SCRIPTS -->
```


## Código HTML

```html
<!-- FILTERS -->
<div class="row">
  <div class="col-sm-12 col-md-8" id="ponchoTableFiltroCont" style="display:none">
    <div class="row" id="ponchoTableFiltro"></div>
  </div>
  <div class="col-sm-12 col-md-4" id="ponchoTableSearchCont" style="display: none">
    <div class="form-group">
      <label for="ponchoTableSearch">Buscá por palabra clave</label>
      <input class="form-control" id="ponchoTableSearch" type="search">
    </div>
  </div>
</div>
<!-- / FILTERS -->
<!-- TABLE -->
<div class="row">
  <div class="col-md-12 m-b-4">
    <table class="table table-condensed table-striped" id="ponchoTable">
      <caption></caption>
      <thead></thead>
      <tbody></tbody>
    </table>
  </div>
</div>
<!-- / TABLE -->
```


## Código JavaScript para llamar a PonchoTable

```html
<script>
<script>
(function($) {
    const gapi = new GapiSheetData();
    const url = gapi.url("dataset", "1vVSk7givsit7u74FBr32voWxrwwW8KaeI5VfC2TKBwM");
    var options = {
        "jsonUrl": url,
        "tituloTabla": "Listado de escuelas",
        "ordenColumna": 1,
        "ordenTipo": "asc",
        // "tipoNumero": 0,
        "ocultarColumnas": [],
        "cantidadItems": 15, 
        "hash": true,
        "filterClassList": ["col-sm-12", "col-md-6"],
        "allowedTags": ["*"],
        "asFilter":  (row) => row,
        "customEntry": (row) => row,
        "orderFilter": true, 
    };
    ponchoTableDependant(options);
})(jQuery);
</script>
```