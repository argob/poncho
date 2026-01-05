# Changelog

## Release 2.2

### PonchoMapFilter

* Los filtros se agrupan una sola vez antes del procesamiento, eliminando reagrupaciones redundantes por entrada.
* `_fieldsToUse()`: Implementación de caché Map para evitar recálculos repetidos en la configuración de campos del formulario.
* `_validateEntry()`: Refactorizado para recibir filtros pre-agrupados, eliminando operaciones dentro del bucle principal.
* `_validateGroup()`: Implementación de evaluación con cortocircuito (_short-circuit evaluation_) que retorna inmediatamente al encontrar la primera coincidencia, eliminando arrays temporales.
* Mejora en el filtro del tipo select. 
  * Se hizo un refactor del método que arma el formulario de acuerdo a la opción del usuario.
  * Ahora se puede editar el label y el texto de opción por defecto.
  * Se mejoró la visualización en el panel de filtros.

* `_search()`:
  * Retorno anticipado (_early return_) cuando la entrada carece de la propiedad buscada.
  * Reemplazo de `filter(Boolean).some()` por bucle directo con cortocircuito.
  * Uso de caché para `_fieldsToUse()`.
* `_filterData()`:
  * Pre-cálculo de `searchFields` fuera del bucle de filtrado.
  * Eliminación de creación repetida de Sets en cada iteración.
  * Cortocircuito directo en lugar de `every(Boolean)`.
* `_filteredData()`: Eliminación de clonación innecesaria de array mediante operador spread.
* Mejora en la visualización del fitro tipo select. Se agregó la posibilidad de cambiar el texto de la etiqueta option y la etiqueta label.
* La etiqueta legend no se muestra vacía si no se le asignó un texto.
* Los botones de _marcar todos_ y _desmarcar todos_ se reemplazaron por un checkbox con los estados: _checked_, _intermediate_ y _unchecked_.

### PonchoMapLoader

* Implementación del método `remove()` que faltaba y generaba errores en tiempo de ejecución.
* Corrección de la limpieza de timeouts en el método `close()`.
* Los métodos `load()` y `close()` cancelan operaciones pendientes correctamente.
* Nuevo parámetro `close(immediate)` permite cerrar el loader sin demora cuando `immediate=true`.
* Modo de depuración agregado mediante la opción `debug` en el constructor, habilitando _logging_ condicional.
* Mejora en la inicialización de propiedades de timeout.

### PonchoMap

* Optimización del objeto `markerCluster` y método `marker()`:
  * Implementación de caché de iconos para evitar la creación de objetos duplicados.
  * Eliminación de llamada redundante a `marker_color()` durante la creación de marcadores.
  * Cacheo del tipo de `marker_color` para evitar verificaciones repetidas en cada marcador.
* `mixing['template']` admite condicionales en línea, permitiendo controlar el formato de salida.
* Codificación de iconos SVG en base64 para prevenir problemas de encoding.
* Adición de patrones visuales (tramas) a los clusters en cumplimiento con la pauta de accesibilidad WCAG 2.0 (1.4.1 - Uso del color, Nivel A).
* La barra de desplazamiento del slider no se adhiere a los contenidos.
* Incorporación de la opción para personalizar el texto de los tooltips.
* Corrección de márgenes en el desplegable de filtros.
* Adición de `lead` dentro de la etiqueta `<header/>` en el slider.
* Corrección del error en `mixing['template']` que mostraba el template cuando el valor llegaba vacío.
* Remoción del atributo `role="button"` innecesario en el botón de cierre del slider.
* Remoción del atributo `role="article"` innecesario.
* Corrección del bajo contraste en la leyenda de totales.
* El label del input de búsqueda se asocia correctamente por id.
* Corrección del problema con la herramienta de zoom cuando el slider está abierto en dispositivos móviles.
* Corrección del error que imprimía una etiqueta de párrafo vacía cuando no se asignaba un summary.
* Corrección del validador de coordenadas donde el string `"null"` generaba un falso positivo.
* Corrección en `_addSummary()`: la etiqueta se elimina correctamente del HTML al borrar el mapa con `map.remove()`.
* Actualización de la URL para ArgenMap tras la baja de la versión beta.
* La barra de desplazamiento no queda parcialmente oculta al abrir el panel de URL.
* Los enlaces para mapas alternativos se abren en una nueva página.
* En `open_maps`, el texto predeterminado es: «Abrir ubicación en:».
* Implementación de medidas de seguridad contra posibles ataques XSS en métodos que facilitan la inclusión de marcado HTML y Markdown.
* Cambio de la fuente tipográfica de los subtítulos a sans-serif para mejorar el rendimiento en línea y el contraste entre término y definición.
* Se hizo un ajuste de la relación ícono subtítulo para que se aline el texto verticalmente con los otros subtítulos y los iconos con el texto centrado verticalmente.

### PonchoMapSearch

* Mejora del desplegable de buscador con la posibilidad de agregar un template para optimizar la visualización de resultados.
* Creación de caché para almacenar strings de búsqueda, evitando sobrecargas innecesarias en el DOM.
* Incorporación de la opción para visualizar resultados de manera expandida o compacta.
* Posibilidad de asignar la cantidad de resultados mostrados en el menú desplegable.


## Release 2.1.4

* Se incorporó el enlace para restablecer el mapa. Ahora estará visible constantemente.
* Se corrigieron problemas con el módulo de búsqueda de puntos.

## Release 2.1.3

* Se incorporó la posibilidad de agregar un sumario o descripción breve del mapa utilizando la opción `summary`.
* Alineación del mapa a derecha, centro o izquierda.
* breakpoint. Se incorporaron las medidas de media device para controlar elementos según el media size.
* breakpoint_fraction, permite encontrar la posición de alineación según el tamaño del contenedor.
* El _slider_ tiene una configuración para visualizarlo al 50% del tamaño del contenedor del mapa utilizando la opción `slider_size`, con valores: `large` o `default`.
* Se mejoró la performance en el filtrado de datos.
* Se corrigió un bug en el botón de abrir y cerrar filtros.
* Seleccionar y deseleccionar todos los filtros no representaba los marcadores nuevamente cuando se volvía a seleccionar todos.
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
