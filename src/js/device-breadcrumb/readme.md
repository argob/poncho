# Device breadcrumb

# Opciones

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| breakPoint | `integer` | 991| Representa el punto en el que el objeto modifica la visualización de los elementos que conforman las _migas de pan_.<br><br>El _breakpoint_ tiene una relación directa con los estilos CSS utilizados en éste módulo.  | 
| selector | `string` | `.breadcrumb` | Selector asociado para implementar el objeto. |
| domain | `object` | `["^/$", "argentina.gob.ar$", "argentina.gob.ar/$"]` | _Array object_ con las opciones para definir la página de inicio del sitio dónde se implementa el objeto. |




# Uso

Se puede utiliar programando los listeners a medida de la aplicación que se
está desarrollando

```js
const options = {
    // domain: ["^/$", "example.com$", "example.com/$"]
}
document.addEventListener("DOMContentLoaded", () => {
    const deviceBreadcrumb = new DeviceBreadcrumb(options);
    deviceBreadcrumb.render(window.innerWidth);
});
window.addEventListener("resize", () =>  {
    const deviceBreadcrumb = new DeviceBreadcrumb(options);
    deviceBreadcrumb.render(window.innerWidth)}, true);
```

O, se puede utilizar un método del objeto _deviceBreadcrumb_ que los implementa.

```js
(new DeviceBreadcrumb).listener();
```

Incorporando opciones al constructor.

```js
const options = {
    domain: ["^/$", "example.com$", "example.com/$"]
}
const db = new DeviceBreadcrumb(options).listener();
```