  function ponchoTable(opt){
    var listado = [];
    var filteredTitle = [];
    var filteredTitleGsx = [];
    var filtro = [];
    var filtroColumna;
    var titulos = '';
    var th = [];
    var lista = '';      
    var centeredContent ='';
    if ( $.fn.DataTable.isDataTable('#ponchoTable') ) {
      $('#ponchoTable').DataTable().destroy();
    }

    //UNIQUE
    function filtrarUnicos(array){
      return array.filter(function(el, index, arr) {
          return index === arr.indexOf(el);
      });
    }      

    jQuery.getJSON('https://spreadsheets.google.com/feeds/list/'+opt.idSpread+'/'+opt.hojaNumero+'/public/values?alt=json',

      function(data) {
          listado = data['feed']['entry'];

          //TITULOS
          $.each(Object.keys(listado[0]), function(index, key) {
              if (key.substr(0, 4) == 'gsx$') {
                  filteredTitle.push(listado[0][key]["$t"]);
                  filteredTitleGsx.push(key);
                  titulos += '<th>' + listado[0][key]["$t"] + '</th>';
                  th.push(listado[0][key]["$t"]);
              }
          })

          //Caption de la tabla
          $("#ponchoTable caption").html(opt.tituloTabla);

          //Agregar titulos al thead de la tabla
          $('#ponchoTable thead tr').empty();
          $('#ponchoTable thead tr').append(titulos);

          //CONTENIDO FILAS
          $.each(listado, function(row, value) {
              
              if(row > 0){
              lista += '<tr>';
                $.each(filteredTitleGsx, function(index, title) {
                  var tdEmpty = '';
                    if (title.substr(0, 4) == 'gsx$') {
                       
                        filas = listado[row][filteredTitleGsx[index]].$t;

                        //Guardar título de referencia de cada fila
                        if(title == filteredTitleGsx[0]){
                            labelBtn = filas;
                          }
                        
                        //Detectar si es botón
                        if(title.includes("btn-") && filas != "" ){
                          nameBtn = title.substr(8, title.length-8).replace("-"," ");
                          filas = '<a aria-label="' + nameBtn + " " + labelBtn + '" class="btn btn-primary btn-sm margin-btn" target="_blank" href="'+filas+'">'+nameBtn+'</a>'
                        }

                        //Detectar si es filtro
                        if(title.includes("filtro-") && filas != ""){
                          filtroColumna = index;
                          nameFiltro = title.substr(11, title.length-11).replace("-"," ");
                          $("#tituloFiltro").html(nameFiltro);
                          filtro.push(filas);
                        }

                        //Ocultar filas vacias en mobile
                        if(filas == ''){
                          tdEmpty = 'hidden-xs';
                        }

                        //Aplicar markdown a todas las filas
                        var converter = new showdown.Converter(),
                        filas = converter.makeHtml(filas);

                        lista += '<td class="'+ tdEmpty + '" data-title="'+ th[index] +'">' + filas + '</td>';

                    }
                })
              lista += '</tr>';
              }
          })

          //Agregar filtro
          $.each(filtrarUnicos(filtro), function(index, val) {
             $("#ponchoTableFiltro").append("<option>"+val+"</option>")
          });
         

          //Agregar contenido al body de la Tabla
          $('#ponchoTable tbody').empty();
          $('#ponchoTable tbody').append(lista);

          initDataTable();
      }
  )

  function initDataTable() {


function removeAccents(data) {
    return data
      .replace(/έ/g, 'ε')
      .replace(/[ύϋΰ]/g, 'υ')
      .replace(/ό/g, 'ο')
      .replace(/ώ/g, 'ω')
      .replace(/ά/g, 'α')
      .replace(/[ίϊΐ]/g, 'ι')
      .replace(/ή/g, 'η')
      .replace(/\n/g, ' ')
      .replace(/[áÁ]/g, 'a')
      .replace(/[éÉ]/g, 'e')
      .replace(/[íÍ]/g, 'i')
      .replace(/[óÓ]/g, 'o')
      .replace(/[úÚ]/g, 'u')
      .replace(/ê/g, 'e')
      .replace(/î/g, 'i')
      .replace(/ô/g, 'o')
      .replace(/è/g, 'e')
      .replace(/ï/g, 'i')
      .replace(/ü/g, 'u')
      .replace(/ã/g, 'a')
      .replace(/õ/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/ì/g, 'i');
  }



var searchType = jQuery.fn.DataTable.ext.type.search;
console.log(jQuery.fn.DataTable.ext.type.search);
searchType.string = function (data) {
  return !data ?
    '' :
    typeof data === 'string' ?
      removeAccents(data) :
      data;
};

searchType.html = function (data) {
  return !data ?
    '' :
    typeof data === 'string' ?
      removeAccents(data.replace(/<.*?>/g, '')) :
      data;
};




      var tabla = $("#ponchoTable").DataTable({
          "lengthChange": false,
          "autoWidth" : false,
          "order": [[ opt.ordenColumna-1, opt.ordenTipo ]],
          "dom": "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                 "<'row'<'col-sm-12'i>>" +
                 "<'row'<'col-sm-12'tr>>" +
                 "<'row'<'col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8'p>>",
           "language": {
              "sProcessing": "Procesando...",
              "sLengthMenu": "Mostrar _MENU_ registros",
              "sZeroRecords": "No se encontraron resultados",
              "sEmptyTable": "Ningún dato disponible en esta tabla",
              "sInfo": "_TOTAL_ resultados",
              "sInfoEmpty": "No hay resultados",
              //"sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
              "sInfoFiltered": "",
              "sInfoPostFix": "",
              "sSearch": "Buscar:",
              "sUrl": "",
              "sInfoThousands": ",",
              "sLoadingRecords": "Cargando...",

              "oPaginate": {
                  "sFirst": "<<",
                  "sLast": ">>",
                  "sNext": ">",
                  "sPrevious": "<"
              },
              "oAria": {
                  "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                  "sSortDescending": ": Activar para ordenar la columna de manera descendente",
                  "paginate": {
                      "first": 'Ir a la primera página',
                      "previous": 'Ir a la página anterior',
                      "next": 'Ir a la página siguiente',
                      "last": 'Ir a la última página'
                  }
              }
          }
      });


jQuery(document).ready(function () {
    // Remove accented character from search input as well
    jQuery('#ponchoTableSearch').keyup(function () {
      tabla
        .search(
        $.fn.DataTable.ext.type.search.string(this.value)
        )
        .draw()
    });
  });


      //BUSCADOR
      $("#ponchoTable_filter").parent().parent().remove();

      //FILTRO PERSONALIZADO
      if($('#ponchoTableFiltro option').length > 1){
        $('#ponchoTableFiltroCont').show();
      }
      $('#ponchoTableFiltro').on('change', function() {
        var filtro = $(this).val();
          if(filtro != ""){
            tabla.column(filtroColumna).every( function () {
                var that = this;
                    that
                        .search(filtro)
                        .draw();
            }); 
          }
          else{
              tabla.search( '' ).columns().search( '' ).draw();
          }

      });

  }
}