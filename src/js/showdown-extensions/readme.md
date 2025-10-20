# Extensiones Markdown para ShowdownJs
Estas extensiones se desarrollaron para suplir las funcionalidades provistas por el plugin de PHP para Drupal en argentina.gob.ar cuando se utiliza Markdown mediante Showdown.js del lado del cliente.

## Listado de extensiones disponibles

Cada una de las extensiones tiene un enlace a su descripción de uso con ejeplos que pueden probarse con en el [módulo de pruebas](https://codepen.io/agustinbouillet/pen/YzGYbwO), de codepen.io.

**alert.js**

https://www.argentina.gob.ar/contenidosdigitales/markdown/alerta

**button.js**

https://www.argentina.gob.ar/contenidosdigitales/markdown/boton

**details.js**

https://www.argentina.gob.ar/contenidosdigitales/markdown/details

**eje.js**

https://www.argentina.gob.ar/contenidosdigitales/markdown/ejes

**image.js**

https://www.argentina.gob.ar/contenidosdigitales/markdown/imagenes

**numbers.js**

https://www.argentina.gob.ar/contenidosdigitales/markdown/numeros

**table.js**

https://www.argentina.gob.ar/contenidosdigitales/markdown/tablas
  
**video.js**

https://www.argentina.gob.ar/contenidosdigitales/markdown/video



## Cómo incluir el script

Dentro del dominio www.argentina.gob.ar

```html
<script src="/sites/default/files/ponchotable/showdown.js"></script>
<script src="/profiles/argentinagobar/themes/argentinagobar/argentinagobar_theme/js/extensiones/showdown-extensions.js">
</script>
```

Fuera del dominio www.argentina.gob.ar

```html
<script src="https://www.argentina.gob.ar/sites/default/files/ponchotable/showdown.js"></script>
<script src="https://www.argentina.gob.ar/profiles/argentinagobar/themes/argentinagobar/argentinagobar_theme/js/extensiones/showdown-extensions.js">
</script>
```
