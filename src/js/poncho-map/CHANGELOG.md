# Changelog

## Release 2.2

### PonchoMapFilter

#### Optimizaciones

  * Los filtros ahora se agrupan una sola vez antes del procesamiento en lugar de reagruparse por cada entrada.
  * `_fieldsToUse()`: Implementación de Map cache para evitar recálculos repetidos en la configuración de campos del form.
  * `_validateEntry()`: Refactorizado para recibir filtros pre-agrupados, eliminando operaciones dentro del loop principal.
  * `_validateGroup()`: Implementación de _short-circuit evaluation_ para retornar inmediatamente al encontrar el primer match, eliminando arrays temporales.
  
  * `_search()`:
    * Early return cuando la entrada no tiene la propiedad buscada.
    * Reemplazo de `filter(Boolean).some()` por loop directo con cortocircuito.
    * Uso de caché para `_fieldsToUse()`.
  * `_filterData()`:
    * Pre-cálculo de `searchFields` fuera del loop de filtrado.
    * Eliminación de creación repetida de Sets en cada iteración.
    * Short-circuit directo en lugar de `every(Boolean)`.
  * `_filteredData()`: Eliminación de clonación innecesaria de array con spread operator.

### PonchoMapLoader
  * Se implementó el método `remove()` que faltaba y causaba errores en tiempo de ejecución.
  * Se corrigió la limpieza de timeouts en el método `close()`.
  * Los métodos `load()` y `close()` ahora cancelan operaciones pendientes correctamente.
  * El Nuevo parámetro `close(immediate)` permite cerrar el loader sin demora cuando `immediate=true`.
  * Se agregó el modo debug. Nueva opción `debug` en el constructor para habilitar _logging condicional_.
  * Mejora en la inicialización adecuada de propiedades de timeout.

### PonchoMap

#### Optimizaciones

  * Optimización del objeto `markerCluster` y método `marker()`:
  * Implementación de caché de iconos para evitar crear objetos duplicados.
  * Eliminación de llamada redundante a `marker_color()` en el proceso de creación de marcadores.
  * Cacheo del tipo de `marker_color` para evitar verificaciones repetidas de tipo en cada marcador.

#### Mejoras

  * A `mixing['template']` se le agregó la posibilidad de utilizar condicionales en linea. De este modo se puede controlar formato de salida.
  * Los íconos SVG se codificaron a base64 para evitar problemas de encoding.
  * En cumplimiento con la pauta de accesibilidad WCAG 2 (1.4.1 - Uso del color, Nivel A), hemos añadido un patrón visual (trama) a los clusters.
  * La barra de _scroll_ en la tarjeta no se pega a los contenidos.
  * Se incorporó la opción customización del texto para los tooltips.
  * Corrección de margenes en el desplegable de filtros.
  * En el slider, se agregó `lead` dentro de la etiqueta `<header/>`.

#### Fixes

  * Se realizó un bug fix en `mixing['template']` donde se mostraba el valor con el *template* cuando el value llegaba vacío.
  * Remoción del atributo `role="button"` innecesario en el botón para cerrar el _slider_.
  * Remoción del atributo `role="article"` es innecesario en un article
  * Corrección del bajo contraste en leyenda totales.
  * El label del input search no está asociado por id.
  * Solución del problema con la herramienta de zoom cuando el slider está abierto en mobile.
  * Se corrigió el bug en el que una etiqueta de párrafo se imprimia vacía cuando no se asignaba un summary.

#### Defaults

  * Los enlaces para mapas alternativos abren en una nueva página.
  * En open_maps el texto por defecto ahora es: «Abrir ubicación en:».


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
