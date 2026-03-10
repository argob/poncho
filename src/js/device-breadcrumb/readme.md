# Device Breadcrumb

Componente JavaScript que adapta la visualización de las _migas de pan_ según el dispositivo. En pantallas móviles, colapsa los ítems intermedios y expone un botón para expandirlos; en pantallas de escritorio, los muestra completos.

El componente agrega clases CSS al DOM y requiere que los estilos de `device-breadcrumb.scss` estén compilados e incluidos en la página.

---

## Opciones

| Parámetro | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `breakPoint` | `integer` | `991` | Ancho máximo en píxeles (inclusive) por debajo del cual el breadcrumb se muestra en modo colapsado. Debe coincidir con el breakpoint definido en `device-breadcrumb.scss`. |
| `selector` | `string` | `".breadcrumb"` | Selector CSS del elemento que contiene las migas de pan. |
| `domain` | `string[]` | `["^/$", "<host>/?$"]` | Array de expresiones regulares que identifican la URL de inicio del sitio. El valor por defecto usa `location.host` en tiempo de ejecución. |

## Métodos

| Nombre | Firma | Descripción |
| :--- | :--- | :--- |
| `render` | `render(innerWidth?: number)` | Evalúa el ancho de pantalla y aplica el layout correspondiente. Elimina y recrea los botones de expandir/contraer en cada llamada. Si se omite `innerWidth`, usa `window.innerWidth`. |

---

## Uso

### Inicialización básica

```js
document.addEventListener("DOMContentLoaded", () => {
    const breadcrumb = new DeviceBreadcrumb();
    breadcrumb.render();
});

window.addEventListener("resize", () => {
    const breadcrumb = new DeviceBreadcrumb();
    breadcrumb.render();
});
```

### Con opciones personalizadas

```js
const options = {
    domain: ["^/$", "example\\.com/?$"]
};

document.addEventListener("DOMContentLoaded", () => {
    const breadcrumb = new DeviceBreadcrumb(options);
    breadcrumb.render();
});

window.addEventListener("resize", () => {
    const breadcrumb = new DeviceBreadcrumb(options);
    breadcrumb.render();
});
```
