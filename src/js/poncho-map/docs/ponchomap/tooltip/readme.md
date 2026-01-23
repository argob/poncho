[Volver al inicio ⏎](../../../readme.md)

---

<!-- omit in toc -->
# Tooltip

Etiqueta flotante que indica el nombre de un punto o área al pasar el cursor por el mapa.

- [Uso](#uso)
  - [Parámetros](#parámetros)
- [Formato del texto](#formato-del-texto)
  - [tooltip\_label](#tooltip_label)
  - [Parámetros](#parámetros-1)

## Uso

### Parámetros

| Parámetro | Tipo | Default | Descripción | Tipo de uso |
|:---|:---|:---|:---|:---|
| tooltip | `boolean` | `false` | Activa o desactiva el tooltip. | *Opcional* |

## Formato del texto

### tooltip_label

Define el contenido y formato del texto que aparece al posicionar el cursor sobre un marcador o polígono.

### Parámetros

| Parámetro | Tipo | Default | Descripción | Tipo de uso |
|:---|:---|:---|:---|:---|
| tooltip_label | `boolean\|string\|function` | `false` | Acepta tres tipos de valores: una función que recibe la entrada como parámetro y retorna el texto formateado; una plantilla HTML con claves entre dobles llaves (por ejemplo: `"{{valor}} <strong>{{porcentaje}} %</strong>"`); o un valor booleano. Las claves corresponden a propiedades del objeto de datos. | *Opcional* |

----


> [!Notas]  
> [Ver opciones de presentación para tooltip](../tooltip-options/readme.md).

