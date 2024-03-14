# Device breadcrumb

# 🗃 Opciones

| Parámetro | Tipo | Default | Descripción |
|:---|:---|:---|:---|
| breakPoint | `integer` | 991| Representa el punto en el que el objeto modifica la visualización de los elementos que conforman las _migas de pan_.<br><br>El _breakpoint_ tiene una relación directa con los estilos CSS utilizados en éste módulo.  | 
| selector | `string` | `.breadcrumb` | Selector asociado para implementar el objeto. |
| domain | `object` | `["^/$", "argentina.gob.ar$", "argentina.gob.ar/$"]` | _Array object_ con las opciones para definir la página de inicio del sitio dónde se implementa el objeto. |


# 📦 Métodos


| Nombre | Descripción |
|:---|:---|
| render | Genera el _breadcrum_ y en función del tamaño de pantalla, lo minifica o lo deja expandido removiendo la página de inicio y la página actual. |



# 🚀 Uso


```js
const options = {
    domain: ["^/$",`${location.host}/?$`]
}
document.addEventListener("DOMContentLoaded", () => {
    const deviceBreadcrumb = new DeviceBreadcrumb(options);
    deviceBreadcrumb.render();
});
window.addEventListener("resize", () =>  {
    const deviceBreadcrumb = new DeviceBreadcrumb(options);
    deviceBreadcrumb.render()}, true);
```

