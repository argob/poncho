
<!-- omit in toc -->
# Connect

Fetch con manejo automático de errores CORS mediante un proxy configurable.

<!-- omit in toc -->
## En ésta página


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Connect](#connect)
  - [En ésta página](#en-ésta-página)
  - [fetch_json](#fetch_json)
  - [Ejemplos](#ejemplos)
    - [Uso básico](#uso-básico)
    - [Sin proxy CORS](#sin-proxy-cors)
    - [Con credenciales y proxy personalizado](#con-credenciales-y-proxy-personalizado)
    - [Manejo de errores](#manejo-de-errores)
  - [Comportamiento del proxy CORS](#comportamiento-del-proxy-cors)

<!-- /code_chunk_output -->



## fetch_json

Realiza una petición HTTP y devuelve la respuesta parseada como JSON.

Intenta la petición directamente contra `uri`. Si falla con un error de red o CORS y `useCorsProxy` es `true`, reintenta a través de `corsProxyUrl` sin credenciales. Si el segundo intento también falla, lanza un error con el mensaje de ambos fallos.

**Sintaxis**

```js
fetch_json(uri, options?);
```


**Parámetros**

| Nombre | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `uri` | `string` | — | URL del recurso a consultar. |
| `options.useCorsProxy` | `boolean` | `true` | Habilita el fallback al proxy CORS cuando la petición directa falla. |
| `options.corsProxyUrl` | `string` | `""` | URL base del proxy CORS. La URI del recurso se añade codificada al final. |
| `options.credentials` | `string` | `"same-origin"` | Política de credenciales: `"include"`, `"same-origin"` u `"omit"`. |
| `...fetchOptions` | `*` | — | Cualquier otra opción válida para la API `fetch` nativa (`method`, `headers`, `body`…). |

**Retorna:** `Promise<*>` — Objeto o array resultante de parsear el cuerpo de la respuesta como JSON.

**Lanza:** `Error` — Si la respuesta HTTP no es satisfactoria o si fallan tanto la petición directa como la del proxy.



## Ejemplos

### Uso básico

El fallback al proxy CORS está activado por defecto.

```js
const data = await fetch_json("https://arg.gob.ar/data.json");
```

### Sin proxy CORS

```js
const data = await fetch_json(
    "https://arg.gob.ar/data.json",
    { useCorsProxy: false }
);
```

### Con credenciales y proxy personalizado

```js
const data = await fetch_json(
    "https://arg.gob.ar/data.json",
    {
        credentials: "include",
        corsProxyUrl: "https://mi-proxy.example.com/?url="
    }
);
```

### Manejo de errores

```js
try {
    const data = await fetch_json("https://arg.gob.ar/data.json");
    console.log(data);
} catch (error) {
    console.error("No se pudo obtener el recurso:", error.message);
}
```



## Comportamiento del proxy CORS

Cuando la petición directa falla con un error de red o CORS (`TypeError`,
mensaje que contiene `"CORS"` o `"Network"`), y `useCorsProxy` es `true`,
la función:

1. Codifica la URI original con `encodeURIComponent`.
2. Prefija el resultado con `corsProxyUrl`.
3. Reintenta la petición sin credenciales (`credentials: "omit"`).

Si el reintento también falla, se lanza un `Error` que incluye el mensaje
del fallo original.