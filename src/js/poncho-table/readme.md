# PonchoTable con filtros dependientes

PonchoTable con filtros dependientes es una variante del componente PonchoTable, incluida en la librería `poncho.min.js`. En esta versión, los filtros operan de forma encadenada: la selección en un filtro condiciona las opciones disponibles en los filtros subsiguientes.

Para que los filtros se reconozcan en las tablas de Google Sheets, cada columna destinada a filtro debe utilizar el prefijo **filtro-** seguido del nombre identificador. Por ejemplo, una columna para filtrar por provincia se denominaría: **filtro-provincia**.

<figure>
<img src="./demo/img/screenshoot-google-sheet.jpg" alt="Captura de pantalla de Google Sheets con columnas de filtros para PonchoTable">
<figcaption style="font-size:small; color:gray">Captura de pantalla de Google Sheets con filtros configurados para PonchoTable.</figcaption>
</figure>

****

## Opciones

| Parámetro | Tipo | Descripción |
|:---|:---|:---|
| hojaNombre | `string` | Nombre de la pestaña en [Google Sheets](https://workspace.google.com/products/sheets/). |
| idSpread | `string` | Identificador del documento. Se obtiene de la URL del documento abierto en Google Sheets. |
| tituloTabla | `string` | Texto para la etiqueta `<caption>` de la tabla. |
| ordenColumna | `string` | Índice o nombre de la columna utilizada para ordenar los registros de la tabla. |
| ordenTipo | `string` | Dirección de ordenamiento: ascendente (`asc`) o descendente (`desc`). |
| ocultarColumnas | `Array` | Lista de columnas que se excluirán de la visualización. |
| cantidadItems | `integer` | Número de registros mostrados por página. |
| jsonUrl | `string` | URL del documento o servicio que provee los datos en formato JSON. |
| hash | `boolean` | **Obsoleto en versiones recientes.** Habilita la búsqueda mediante un fragmento (_hash_) en la URL. Ejemplo: `www.argentina.gob.ar#mi-busqueda`. |
| filterClassList | `Array` | Clases CSS aplicadas a cada columna de filtro. Ejemplo: `["col-sm-6", "col-md-4"]`. |
| filterContClassList | `Array` | Clases CSS aplicadas al contenedor general de filtros. Ejemplo: `["col-sm-6", "col-md-4"]`. |
| searchContClassList | `Array` | Clases CSS aplicadas al contenedor del campo de búsqueda. Ejemplo: `["col-sm-6", "col-md-4"]`. |
| asFilter | `function` | Define un listado personalizado de opciones para un filtro. Firma: `(row) => row`. |
| customEntry | `function` | Transforma la entrada visible en la tabla sin alterar los datos originales utilizados internamente. Firma: `(row) => row`. |
| refactorEntries | `function` | Transforma el documento JSON completo antes de su procesamiento. Firma: `(row) => row`. |
| allowedTags | `Array` | Etiquetas HTML que se interpretarán como elementos del DOM en lugar de texto plano. Usar `["*"]` para habilitar todas las etiquetas o especificar las permitidas, por ejemplo: `["a", "strong"]`. Para desactivar la interpretación de HTML: `[]`. |
| jsonData | `Object` | Datos en formato JSON provenientes de una fuente local o ajena a la API de Google. |
| headers | `Object` | Redefine los encabezados de columna mediante pares clave-valor. Ejemplo: `{"key": "Nuevo encabezado"}`. |
| orderFilter | `boolean\|Array` | Ordena alfabéticamente las opciones de los filtros desplegables. Con el valor `true`, aplica orden ascendente a todos los filtros. Con un `Array`, se especifica el orden por filtro individual. Si no se define o se establece en `false`, las opciones conservan el orden del documento JSON. **Ejemplo con Array:** si no se indica dirección, se asume ascendente (`asc`). `[["filtro-ubicacion", "asc"], ["filtro-estado", "desc"], ["filtro-categoria"]]`. También se puede usar la forma abreviada para filtros ascendentes: `["filtro-ubicacion", ["filtro-estado", "desc"], "filtro-categoria", "filtro-genero"]`. |
| emptyLabel | `string` | Texto de la opción predeterminada (vacía) en los desplegables. Valor por defecto: `Todos`. |
| wizard | `boolean` | Muestra cada filtro únicamente cuando se ha seleccionado una opción en el filtro anterior. Valor por defecto: `false`. |
| urlParams | `boolean` | Habilita la lectura de parámetros desde la URL para filtrar datos y realizar búsquedas en la tabla. |
| pushState | `boolean` | Actualiza la URL del navegador cada vez que el usuario modifica un filtro o realiza una búsqueda. Valor por defecto: `false`. |
| copyResults | `boolean` | Muestra un botón para copiar al portapapeles la URL con los parámetros de la consulta actual. Valor por defecto: `false`. |
| resetValues | `boolean` | Habilita la acción para restablecer la tabla y los filtros a su estado inicial. |

### Parámetros de URL

#### urlParams

![Tabla con parámetros de búsqueda en la URL](./img/tabla-con-parametros.jpg)

Al incorporar parámetros a la URL, es posible filtrar y buscar datos de forma precisa dentro de la tabla. Esta funcionalidad permite:

* **Acceder directamente a registros individuales**: localizar un registro específico indicando su valor en el filtro correspondiente.
* **Agrupar datos por categoría**: visualizar únicamente los registros que pertenecen a una categoría determinada.
* **Realizar búsquedas globales**: buscar en todo el contenido de la tabla.

**Configuración**

```js
const options = {
    ...
    urlParams: true
}
```

#### pushState

![Tabla con pushState activo](./img/tabla-con-parametros-pushstate.jpg)

Con esta opción habilitada, la URL se actualiza dinámicamente incorporando los parámetros que reflejan las selecciones realizadas en los filtros y en el campo de búsqueda.

**Configuración**

```js
const options = {
    ...
    pushState: true
}
```

#### copyResults

![Tabla con botón para copiar URL](./img/tabla-con-parametros-portapapeles.jpg)

Incorpora un botón que permite copiar al portapapeles la URL generada a partir de las selecciones del usuario.

**Configuración**

```js
const options = {
    ...
    copyResults: true
}
```

### Modo Wizard

Para mostrar u ocultar elementos HTML en función de la visibilidad de la tabla, se utiliza el atributo `data-visible-as-table` con un valor booleano.

#### Uso

```html
<div class="alert alert-info" data-visible-as-table="false">
  <p>Para acceder al formulario, seleccione tipo de documento, provincia y motivo.</p>
</div>
```

Con el valor `false`, el elemento se muestra únicamente cuando la tabla **no está visible**.

```html
<div class="alert alert-info" data-visible-as-table="true">
  <p>Busque un resultado en la tabla.</p>
</div>
```

Con el valor `true`, el elemento se muestra únicamente cuando la tabla **está visible**.


## Scripts

### PonchoTable

```html
<!-- INCLUDE SCRIPTS -->
<link href="/profiles/argentinagobar/themes/contrib/poncho/css/ponchoTable-1.1.css" rel="stylesheet">
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/datatables.min.js"></script>
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
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
<div class="" id="ponchoTableFiltroCont" style="display:none">
    <form>
        <div class="form-group">
            <label for="ponchoTableFiltro" id="tituloFiltro">
                Filtro
            </label>
            <select
                class="form-control"
                id="ponchoTableFiltro"
                name="ponchoTableFiltro">
            </select>
        </div>
    </form>
</div>
<!-- FILTERS -->

<!-- SEARCH -->
<search class="" id="ponchoTableSearchCont" style="display:none">
    <form>
        <div class="form-group">
            <label
                for="ponchoTableSearch">
                Buscá por palabra clave
            </label>
            <input
                class="form-control"
                id="ponchoTableSearch"
                type="search" />
        </div>
    </form>
</search>
<!-- / SEARCH -->

<!-- / PONCHO MAP TABLE -->
<div class="">
    <table
        class="table tabla-condensed table-sm table-striped"
        id="ponchoTable">
        <caption></caption>
        <thead></thead>
        <tbody></tbody>
    </table>
</div>
<!-- / PONCHO MAP TABLE -->
```


## Ejemplo de código JavaScript para llamar a PonchoTable

```html
<script>
(async () => {
    // Herramientas de conexión a Google Sheets
    const gapi = new GapiSheetData();
    // Retorna el endpoint JSON con los datos de Google Sheet
    const url = gapi.url("dataset", "1vVSk7...C2TKBw");

    var options = {
        jsonUrl: url,
        tituloTabla: "Listado de escuelas",
        ordenColumna: 1,
        ordenTipo: "asc",
        ocultarColumnas: [],
        cantidadItems: 15,
        hash: true,
        filterClassList: ["col-sm-12", "col-md-6"],
        allowedTags: ["*"],
        orderFilter: true,
    };
    ponchoTableDependant(options);
})();
</script>
```
