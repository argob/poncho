# Métodos

| Método | Retorno | Descripción |
|:--|:--|:--|
| entry | `object` | Retorna una entrada específica utilizando su identificador como parámetro. |
| selected_marker | `object` | Retorna el último marcador seleccionado como objeto con dos propiedades: la entrada asignada al marcador y la instancia de Leaflet correspondiente. |
| resetView | `void` | Restablece la posición y el nivel de zoom del mapa, devolviendo los marcadores a su ubicación inicial. |
| hasHash | `boolean \| string` | Retorna el identificador del marcador si está presente en la URL, o `false` si no existe. |
| gotoEntry | `void` | Navega hacia un marcador específico utilizando su identificador. |
| gotoHashedEntry | `void` | Obtiene el identificador desde la URL y realiza zoom sobre el marcador correspondiente. Según la configuración, puede abrir un popup o activar el slider. |
| entries | `object` | Contiene las entradas iniciales sin aplicar filtros ni procesamiento. |
| map | `object` | Instancia del mapa de Leaflet. |
| markers | `object` | Colección de marcadores de Leaflet. |