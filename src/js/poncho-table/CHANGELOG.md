# Changelog

## Release 2.3.0

### Optimización de `_allFromParent()` y `_filterOptionList()`

 * **Mejora**: Se evita el procesamiento y ordenamiento innecesario con "early returns" para datos o resultados vacíos.

 * **Mejora**: Se accede a las claves de filtros mediante caché para mayor rapidez dentro de los bucles.

### Implementación de caché para filtros

 * **Mejora**: Se usa una caché global (_filtersKeysCache) para almacenar las claves de los objetos de filtro, evitando el recálculo repetido en funciones como `_isCustomFilter` y `_customFilter` que se llaman frecuentemente.

 * **Funciones nuevas**: Se crearon `_getFiltersKeys()` y `_getCustomFilterKey()` para gestionar el caché.

### Optimización de `_dependantFilters()`

 * **Rendimiento DOM**: Uso de *DocumentFragment* para agrupar las operaciones DOM y realizar un solo "reflow" (redibujado de la página), mejorando la velocidad de actualización.

 * **Estrictez**: Se reemplazaron comparaciones sueltas (\=\=) por comparaciones estrictas (\=\=\=) para un código más rápido y predecible.

 * **Eficiencia**: Se usa el caché de claves de filtros en arrays.

### Refactorización de asignación de clases

 * **Simplificación**: Se unificó la lógica para asignar clases a contenedores (_filtersContainerClassList y _searchContainerClassList) en una única función reutilizable (_setContainerClassList()).

 * **Robustez**: Se agregaron validaciones para asegurar que los elementos DOM existan antes de manipularlos, evitando errores.

### Beneficios

 * **Mayor rendimiento**: uso de caché, optimización del DOM con DocumentFragment, y "early returns" que reducen el trabajo innecesario.

 * **Código más limpio**: Eliminación de código duplicado y uso de lógica simplificada.

## Release 2.2.2

* Las funciones principales para el filtrado se optimizaron para mejorar el rendimiendo en el _render_ de tablas con muchos datos.