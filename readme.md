# Poncho

Base de html y css para la creación de sitios pertenecientes a la Administración Pública Nacional de la República Argentina.

Para usar Poncho en un sitio, ver [la documentación](http://argob.github.io/poncho/).

Tambien se puede implementar mediante NPM

 * [NPM](https://www.npmjs.com/package/argob-poncho) npm install argob-poncho

## Instalación y requisitos

Para poder compilar el proyecto es necesario tener instalado Ruby y la gema de [Sass](http://sass-lang.com/): *(Si lo requiere, usar sudo)*

    gem install sass

## Ubicación de archivos

* Los archivos CSS compilados, se encuentran en la carpeta dist/ .
* El archivo .SCSS principal está en src/css/poncho.scss
* Los archivos .SCSS restantes se ubican en la carpeta src/css/modules/ .

## Puesta en marcha

Incluir en el html los siguientes archivos CSS:

    <link rel="stylesheet" href="dist/css/droid-serif.css">
    <link rel="stylesheet" href="dist/css/roboto-fontface.css">
    <link rel="stylesheet" href="dist/css/poncho.css">

En **Sublime Text** recomendamos tener los siguientes packages, disponibles en el package controller:

- **Sass** *(Para colores de los archivos scss)*

## Compilar archivos SCSS luego de modificarlos.

Ejecutar Sass desde la linea de comando:

    sass src/css/poncho.scss:dist/css/poncho.css

Actualizar el CSS principal cada vez que un archivo SCSS se modifica:

    sass --watch src/css/poncho.scss:dist/css/poncho.css
