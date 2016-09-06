![Poncho](img/poncho.gif)

# Poncho

Base de html y css para la creación de sitios pertenecientes a la Administración Pública Nacional de la República Argentina.

## Instalación

Para usar Poncho en un sitio, ver [la documentación](http://argob.github.io/poncho).

Se pueden bajar los archivos, o implementar mediante NPM para mantenerlo actualizado con el siguiente comando:

```bash
npm install argob-poncho
```

### Puesta en marcha

Incluir en el html los siguientes archivos CSS:

```html
<link rel="stylesheet" href="dist/css/roboto-fontface.css">
<link rel="stylesheet" href="dist/css/poncho.css">
```

## Desarrollo

Para poder compilar el proyecto es necesario tener instalado [Ruby](https://www.ruby-lang.org/es/) y la [gema de Sass](http://sass-lang.com/): *(Si lo requiere, usar sudo)*

```bash
gem install sass
```
### Ubicación de archivos

* Los archivos CSS compilados, se encuentran en la carpeta **dist/**.
* El archivo .SCSS principal es **src/css/poncho.scss**.
* Los archivos .SCSS restantes se ubican en la carpeta **src/css/modules/**.

### Compilar archivos SCSS luego de modificarlos.

Para actualizar el CSS principal cada vez que un archivo SCSS se modifica, estando en la carpeta raíz del proyecto ejecutar:

```bash
sass --watch src/css/poncho.scss:dist/css/poncho.css
```

Para actualizar la versión minificada:

```bash
sass --watch src/css/poncho.scss:dist/css/poncho.min.css --compressed
```

##Registro de cambios

**v0.3**
- Actualización estética general
- Agrega colores de la plate extendida
- Agrega helpers para márgenes y alineación de texto responsive

**v0.2**
- Modificaciones generales de estilos
- Publicación en npm

**v0.1**
- Primera versión
