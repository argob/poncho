<!-- omit in toc -->
# toTitleCase

Convierte una cadena de texto a formato **title case** o **sentence case**. 

<!-- omit in toc -->
## En ésta página

- [Uso](#uso)
  - [Parámetros](#parámetros)
  - [Retorno](#retorno)
- [Ejemplos](#ejemplos)
  - [Title case (por defecto)](#title-case-por-defecto)
  - [Sentence case](#sentence-case)
  - [Espacios al inicio y al fin](#espacios-al-inicio-y-al-fin)
  - [Valor no válido](#valor-no-válido)


## Uso

```js
toTitleCase(str, allWords)
```

### Parámetros

| Parámetro  | Tipo      | Por defecto | Descripción |
|------------|-----------|-------------|-------------|
| `str`      | `string`  | —           | Cadena a transformar. |
| `allWords` | `boolean` | `true`      | Si es `true`, capitaliza cada palabra (title case). Si es `false`, solo capitaliza la primera letra de la cadena (sentence case). |

### Retorno

Devuelve la cadena transformada. Si `str` no es un string válido o está vacío, retorna el argumento original sin modificar y emite una advertencia en consola.

## Ejemplos

### Title case (por defecto)

Capitaliza la primera letra de **cada** palabra:

```js
toTitleCase("hola mundo cruel");
// → "Hola Mundo Cruel"
```

### Sentence case

Capitaliza solo la primera letra de la cadena:

```js
toTitleCase("hola mundo cruel", false);
// → "Hola mundo cruel"
```

### Espacios al inicio y al fin

La función aplica `trim()` antes de procesar:

```js
toTitleCase("  hola mundo  ");
// → "Hola Mundo"
```

### Valor no válido

```js
toTitleCase(null);
// → null
// [toTitleCase] Debe ingresar una cadena de texto.
```

