[Volver al inicio ⏎](../../../readme.md)

---

<!-- omit in toc -->
# Template

- [Ejemplos de uso](#ejemplos-de-uso)
  - [Ejemplo de entrada de código](#ejemplo-de-entrada-de-código)
  - [Creando una presentación para la tarjeta del mapa](#creando-una-presentación-para-la-tarjeta-del-mapa)
  - [Creando nuevas entradas](#creando-nuevas-entradas)


La opción `template` es posiblemente la característica más potente de PonchoMap. Permite diseñar presentaciones personalizadas a partir de la entrada de datos, modificar campos existentes y generar nuevos atributos de forma dinámica.

La función recibe como parámetros el objeto `self` —equivalente al objeto _[this](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this)_ de la instancia— y la entrada del marcador. De este modo, es posible aprovechar tanto los métodos y propiedades de PonchoMap como los datos asociados a cada punto.


## Ejemplos de uso

### Ejemplo de entrada de código

```js
[
    {
        "title": "Mi vida en Caballito",
        "subtitle": "Historias del barrio",
        "address": "Av. Rivadavia 5568, Piso 1",
        "province": "Ciudad Autónoma de Buenos Aires",
        "locality": "Caballito",
    },
    ...
]
```

### Creando una presentación para la tarjeta del mapa

```js
const opciones = {
    template: (self, entry) => {
        const html = `<h1>${entry.title}</h1>
            <h2>${entry.subtitle}</h2>
            <dl>
                <dt>${self.header("address")}</dt>
                <dd>${entry.address}</dd>
                <dt>Ubicación</dt>
                <dd>${entry.province}, ${entry.locality}</dd>
            </dl>`;

        return html;
    },
    ...
};
```


> El método `self.header()` retorna el nombre asignado a una clave según la configuración de la opción `headers`. Si el encabezado no está definido, retorna el nombre de la clave tal como está.

### Creando nuevas entradas

También es posible agregar atributos personalizados a la entrada para procesarlos mediante las opciones de [template_structure](../template-structure/README.md).

```js
const mapOptions = {
    template: (self, entry) => {
        // Creo una entrada clave/valor, personalizada
        entry["location"] = `<div class="location-container">
            <i class="icon-location" aria-hidden="true"></i>
            ${entry.address},<br>${entry.locality}, ${entry.province}.
        </div>`;
        // Paso las nuevas clave/valor a default_template(). Método 
        // responsable de procesar todas las entradas asignadas en
        // template_structure.values.
        return self.default_template(self, entry);
    },
    template_structure:{
        values: [
            "title",
            "subtitle",
            "location" // Uso la clave personalizada
        ]
    },
    ...
};
```
