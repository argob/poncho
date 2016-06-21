# Poncho

Base de html y css para la creación de sitios pertenecientes a la Administración Pública Nacional de la República Argentina.

Para usar Poncho en un sitio, ver [la documentación](http://argob.github.io/poncho/).

## Instalación y requisitos

Para el desarrollo de poncho usamos Jekyll ya que ayudaa generar templates y compilar los archivos de sass.
Para poder correr el proyecto es necesario tener instalado Ruby y la gema de [Bundler](http://bundler.io/): *(Si lo requiere, usar sudo)*

    gem install bundler

Una vez instalado bundler, sobre la raíz del proyecto correr:

    bundle install

## Puesta en marcha

Para correr el proyecto, ejecutar el siguiente comando en su carpeta:

    jekyll serve

Esto inicia un servidor de jekyll que se puede ver en **http://localhost:4000/**, el cual regenera los archivos automáticamente al hacer modificaciones en el proyecto.

En **Sublime Text** recomendamos tener los siguientes packages, disponibles en el package controller:

- **Editorconfig** *(Para asegurar consistencia en el formato de archivos)*
- **Sass** *(Para colores de los archivos scss)*
