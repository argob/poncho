
### Template

La opción `template` debe recibir un string de retorno. Para ello, es posible definir el atributo como una función o asignar un string directamente.

#### Ejemplos

##### Función dentro y fuera del grupo de opciones

```js
const opciones = {
    "template": (self, entry) => {
        const html = `<h1>${entry.title}</h1>
            <h2>${entry.subtitle}</h2>
            <dl>
              <dt>Dirección postal</dt>
              <dd>${entry.address}</dd>
              <dt>Ubicación</dt>
              <dd>${entry.province}, ${entry.locality}</dd>
              ...
            </dl>`;
        return html;
    }
};
```

O, teniendo la función del *template* separada del objeto de opciones. 

```js
/**
 * Template
 * @param {object} self - Definiciones generales de la clase.
 * @param {object} row - Entrada o fila de la fuente de datos.
 */ 
const template = (self, entry) => {
  const html = `
    <h1>${entry.title}</h1>
    <h2>${entry.subtitle}</h2>
    <dl>
      <dt>${self.header("address")}</dt>
      <dd>${entry.address}</dd>
      <dt>Ubicación</dt>
      <dd>${entry.province}, ${entry.locality}</dd>
      ...
    </dl>`;

  return html;
};

// Opciones para el mapa.
const opciones = {
    "template": template, // Asigno la función 
};
```
\*. El método `self.header()`, permite retornar el nombre asignado a la clave. Se le pasa como argumento el nombre de clave y retorna el header. Si no estuviera asignado retorna la clave.

##### Modificando la entrada y retornando el template por defecto

Otra alternativa es crear nuevos atributos personalizados para cada entrada y usar las opciones de [template_structure](#opciones-para-template_structure).

```js
const options = {
    "template": (self, row) => {
        row["entrada_personalizada"] = `<p>Mi valor personalizado</p>
            <img src=\"image.png\" alt=\"Una margarita en una maceta\">`;
        return self.default_template(self, row);
    },
    "template_structure":{
        "values": ["entrada_personalizada", "clave1", "clave2"]
    }
};
```
