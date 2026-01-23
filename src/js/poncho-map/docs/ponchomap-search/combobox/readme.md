[Volver al inicio ⏎](../../../readme.md)

---

<!-- omit in toc -->
# Combobox

Componente desplegable que presenta los resultados de búsqueda con opciones de formato personalizado.

- [Parámetros](#parámetros)


## Parámetros

| Parámetro | Tipo | Default | Descripción | Tipo de uso |
|:---|:---|:---|:---|:---|
| template | string |  | Define una plantilla HTML con claves encerradas en doble llave. Por ejemplo: `"{{valor}} <strong>{{porcentaje}} %</strong>"`, donde `valor` y `porcentaje` representan propiedades del objeto de datos. | *Opcional* |
| display | `string` | fit-content | Establece el ancho del desplegable: adaptado al contenido o expandido al ancho del formulario de búsqueda. Opciones: `expanded`, `fit-content`. | *Opcional* |
| max_results | `number` | 20 | Limita la cantidad de resultados visibles en el desplegable. Rango permitido: 5 a 50. | *Opcional* |
