# Changelog

## Release 2.3.0

* Optimización de `_allFromParent()` y `_filterOptionList()`

   * Implementación de retornos anticipados (_early returns_) para evitar procesamiento y ordenamiento innecesarios cuando los datos o resultados están vacíos.

   * Acceso a las claves de filtros mediante caché para acelerar operaciones dentro de los bucles.

* Implementación de caché para filtros

   * Uso de caché global (`_filtersKeysCache`) para almacenar las claves de los objetos de filtro, evitando recálculos repetidos en funciones invocadas frecuentemente como `_isCustomFilter` y `_customFilter`.
   * Creación de las funciones `_getFiltersKeys()` y `_getCustomFilterKey()` para gestionar el caché.

* Optimización de `_dependantFilters()`

  * Uso de `DocumentFragment` para agrupar operaciones DOM y ejecutar un solo _reflow_ (redibujado de la página), mejorando la velocidad de actualización.
  * Reemplazo de comparaciones sueltas (`==`) por comparaciones estrictas (`===`) para un código más rápido y predecible.
  * Uso del caché de claves de filtros en arrays.

* Refactorización de asignación de clases

    * Unificación de la lógica para asignar clases a contenedores (`_filtersContainerClassList` y `_searchContainerClassList`) en una única función reutilizable (`_setContainerClassList()`).

    * Adición de validaciones para verificar la existencia de elementos DOM antes de manipularlos, evitando errores.


## Release 2.2.2

* Las funciones principales para el filtrado se optimizaron para mejorar el rendimiendo en el _render_ de tablas con muchos datos.