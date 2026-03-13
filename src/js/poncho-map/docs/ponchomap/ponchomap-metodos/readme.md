[Volver al inicio ⏎](../../../readme.md)

---

# Métodos

| Método | Retorno | Descripción |
|:--|:--|:--|
| entry | `object` | Retorna una entrada a partir de su identificador. |
| selected_marker | `object` | Retorna el último marcador seleccionado. El objeto incluye dos propiedades: la entrada asociada al marcador y su instancia de Leaflet. |
| resetView | `void` | Restablece la vista del mapa a su posición y nivel de zoom originales. |
| hasHash | `boolean \| string` | Retorna el identificador del marcador si está presente en la URL; de lo contrario, retorna `false`. |
| gotoEntry | `void` | Navega y hace zoom sobre el marcador correspondiente al identificador indicado. |
| gotoHashedEntry | `void` | Lee el identificador desde la URL y hace zoom sobre el marcador correspondiente. Dependiendo de la configuración, puede abrir un popup o activar el slider. |
| entries | `object` | Expone el conjunto de entradas original, sin filtros ni transformaciones. |
| map | `object` | Instancia del mapa de Leaflet. |
| markers | `object` | Colección de marcadores de Leaflet. |
| header | `function` | Retorna el título correspondiente a una clave de la entrada, según la opción `headers`. |
