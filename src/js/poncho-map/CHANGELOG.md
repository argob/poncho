# Changelog

## Release 2.1.4

* Se incorporó el enlace para restablecer el mapa. Ahora estará visible constantemente.
* Se corrigieron problemas con el módulo de búsqueda de puntos. 

## Release 2.1.3

* Se incorporó la posibilidad de agregar un sumario o descripción breve del mapa utilizando la opción `summary`.
* Alineación del mapa a derecha, centro o izquierda.
* breakpoint. Se incorporaron las medidas de media device para controlar elementos según el media size.
* breakpoint_fraction, permite encontrar la posición de alineación segun el tamaño del contendedor.
* El _slider_ tiene una configuración para visualizarlo al 50% del tamaño del contenedor del mapa utilizando la opción `slider_size`, con valores: `large` o `default`.
* Se mejoró la performance en el filtrado de datos.
* Se corrigió un bug en el botón de abrir y cerrar filtros.
* Seleccionar y des-seleccionar todos los filtros se no representaba los markadores nuevamente cuando se volviá a seleccionar todos.
* Se cambiaron los colores de los clusters a los de PonchoColors.


## Release 2.1.2

* Se puede cambiar de visualización de mapa utilizando el menú contextual de temas o elegir la visualización por defecto utilizando las opciones: `map_layers` y `map_layers_default` respectivamente.
* La opción `open_maps` permite que el usuario pueda abrir el punto geográfico en un mapa alternativo.
* Se mejoró la interfase de usuario.
* Se incorporaron mejoras de accesibilidad en los menús del componente mejorando y agregando atributos WAI-ARIA para enrriquecer la navegación y la percepción de elementos.


## Release 2.1.1

* Se incorporó la opción para definir un diccionario de términos por lenguaje.
* Los _clusters_ se crean con términos y atributos WAI-ARIA en el lenguaje por defecto o definido para mejorar la experiencia de navegación del usuario.
* Se incorporaron métodos para distintos tipos de validación.
* Se mejoró el módulo de alertas y registros de error y se incoporó la posibilidad de bloquear el render del mapa si se encuentra una excepción.
* Se agregaron alertas en varios métodos.
