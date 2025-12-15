# Headers

- [Headers](#headers)


La opción `headers`, permite mapear cada una de las claves de la entrada con un nombre apropiado para mostrar en pantalla. En ocasiones el título para una o varias claves no es el más apropiado para presentar la información, o el servicio JSON no provee un encabezado que represente el dato. Utilizando esta opción se puede modificar o agregar el encabezado sin necesidad de cambiar la información de origen.

```js
const opciones = {
    "headers": {
      "provincia": "Provincia",
      "localidad": "Localidad",
      "direccion_postal": "Dirección Postal",
      "codigo_postal": "Código Postal"
    } 
};
```
