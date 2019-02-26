$(function(){

var titulo = $("main h1").html();
$("title").html(titulo);

//Menu Navbar Dinamico
$("#main-navbar-collapse").load("/poncho/includes/navbar.html",function(){
  var seccion = $("#main-navbar-collapse").attr("data-seccion");//Busca la seccion activa
  $(document).find("#main-navbar-collapse li[data-seccion='"+seccion+"']").addClass("active");
});  

  
//Visualizador de Errores
  $(".mensajeError").click(function(){
    status = $(this).attr("data-mostrar");


    if(status == "true"){
      $(".mensajeError").html("Ocultar mensajes de error");
      $(".mensajeError").attr("data-mostrar",false);
      $('.error').removeClass("hidden");
      $('.item-form').addClass('has-error has-feedback');
    }

    else{
      $(".mensajeError").html("Ver mensajes de error");
      $(".mensajeError").attr("data-mostrar",true);
      $('.error').addClass("hidden");
      $('.item-form').removeClass('has-error has-feedback');
    }

  })

  $('input.conError:radio').change(function(){
    if($(this).is(":checked")) {
      $('.error').removeClass("hidden");
      $('.item-form').addClass('has-error has-feedback');
    }
  });
  $('input.sinError:radio').change(function(){
    if($(this).is(":checked")) {
      $('.error').addClass("hidden");
      $('.item-form').removeClass('has-error has-feedback');
    }
  });



//PONCHO LABS
var url_string = window.location.href;
var url = new URL(url_string);
var lab = url.searchParams.get("lab");


if(lab == ""){
  $("head").append('<link href="../../css/poncho_lab.css" rel="stylesheet">');
}


});