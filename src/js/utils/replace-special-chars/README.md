<!-- omit in toc -->
# replaceSpecialChars

Reemplaza caracteres con acento o tilde por su equivalente ASCII. Los caracteres que no figuran en el mapa interno se conservan sin modificar.

<!-- omit in toc -->
## En ésta página

- [Sintaxis](#sintaxis)
- [Parámetros](#parámetros)
- [Uso](#uso)


## Sintaxis

```js
replaceSpecialChars(data);
```

## Parámetros

| Parámetro | Tipo     | Descripción              |
|-----------|----------|--------------------------|
| `data`    | `string` | Cadena de texto a limpiar |

**Retorna:** `string` — cadena sin acentos. Cadena vacía si el
argumento no es un string válido.

## Uso

```js
replaceSpecialChars("Acción Murciélago árbol niño");
// → "Accion Murcielago arbol nino"
```
