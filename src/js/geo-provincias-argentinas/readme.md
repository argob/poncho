# Mapa de Argentina

El mapa está adaptado del provisto por [IGN](http://www.ign.gob.ar/) en; [CapasSig](https://www.ign.gob.ar/NuestrasActividades/InformacionGeoespacial/CapasSIG), [Polígonos provincias argentinas](https://dnsg.ign.gob.ar/apps/api/v1/capas-sig/Geodesia+y+demarcaci%C3%B3n/L%C3%ADmites/provincia/json). 

En este caso se agregó Ciudad Autónoma de Buenos Aires a un costado y con un tamaño más grande, favoreciendo la posibilidad de interactuar con el polígono desde una pantalla de escritorio o mobile. 

También se hizo un recuadro en la esquina inferior derecha con Antártida minificada con los polígonos referenciados a Tierra del Fuego, Antártida e Islas del Atlántico Sur.

## Parámetros adicionados

Por otro lado se le agregó en el índice _properties_, los siguientes valores:

### Georeferenciales

| Valor | Descripción |
|:-|:-|
| **region** | Nombre de la región a la que pertenece la provincia, ej. _Centro y Buenos Aires_. |


### Atributos gráficos

| Valor | Descripción |
|:-|:-|
| **stroke** | Color del poligono. Según el uso del paquete [Leaflet](https://leafletjs.com). |
| **stroke-width** | Ancho del borde. |
| **stroke-opacity**| Opacidad del borde. |
| **fill-opacity**| Opacidad del color del polígono. |
| **stroke-color**| Color del borde. |


### Atributos específicos

| Valor | Descripción |
|:-|:-|
| **pm-interactive** | Se refiere a si el feature debe utilizarse de forma interactiva. La referencia se utiliza en el *Módulo Poncho Maps*. |
| **pm-type**| Definición del tipo de gráfico. La referencia se utiliza en el *Módulo Poncho Maps*. |


## Ejemplo de feature

```json

"features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "white",
        "stroke-width": 2,
        "stroke-opacity": 0.8,
        "fill-opacity": 0.8,
        "pm-interactive": "n",
        "pm-type": "graphics",
        "stroke-color": "#BBB",
        "gid": 1,
        "fna": "Ciudad Autónoma de Buenos Aires",
        "gna": "Ciudad Autónoma",
        "nam": "Ciudad Autónoma de Buenos Aires",
        "in1": "02",
        "fdc": "Geografía",
        "sag": "IGN",
        "region": "Centro y Buenos Aires",
        "name": "Ciudad Autónoma de Buenos Aires",
        "region_id": 7
      },
      "geometry": {
        "coordinates": [
          [
            [
              -52.71448670014317,
              -34.99853861327156
              ...
```