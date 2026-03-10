# GapiSheetData

Clase JavaScript para consumir y normalizar datos de hojas de cálculo de Google Sheets a través de la API v4.

## Instalación

El módulo es compatible con entornos Node.js (CommonJS) y con uso directo en el navegador.

```js
// Node.js
const GapiSheetData = require('./gapi-sheet-data');

// Navegador (script tag)
// <script src="gapi-sheet-data.js"></script>
```

## Uso básico

```js
const gapi = new GapiSheetData({ gapi_key: 'TU_API_KEY' });

const spreadsheetId = '13fMXLCN-aqeAVo6YH9eNP1ojljFWB0ocRR3sWNMYaIg';
const sheetName    = 'dataset';

fetch(gapi.url(sheetName, spreadsheetId))
  .then(res => res.json())
  .then(json => {
    const { feed, entries, headers } = gapi.json_data(json);

    console.log(headers);   // Etiquetas de columna (fila 2 de la hoja)
    console.log(entries);   // Filas de datos (fila 3 en adelante)
    console.log(feed);      // Todos los registros procesados (filas 2+)
  });
```

## Convención de la hoja de cálculo

La clase asume la siguiente estructura en Google Sheets:

| Fila | Contenido | Descripción |
|------|-----------|-------------|
| 1 | Claves de campo | Identificadores de columna en formato `snake-case` (p. ej., `filtro-provincia`). La clase los normaliza a minúsculas sin separadores. |
| 2 | Etiquetas legibles | Nombres visibles para el usuario (p. ej., `Provincia`). Estos valores son retornados por `headers()`. |
| 3+ | Datos | Filas de contenido retornadas por `entries()`. |

**Ejemplo de hoja:**

| filtro-provincia | nombre | latitud | longitud |
|------------------|--------|---------|----------|
| Provincia | Nombre | Latitud | Longitud |
| Santa Fe | CEMAFE | -31.64 | -60.70 |
| Córdoba | Hospital X | -31.41 | -64.18 |

## Constructor

```js
new GapiSheetData(options)
```

| Parámetro | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| `options.gapi_key` | `string` | *(clave interna)* | API Key de Google Cloud con acceso a Sheets. |
| `options.gapi_uri` | `string` | `https://sheets.googleapis.com/v4/spreadsheets/` | URL base de la API. |

## API

### `url(page, spreadsheet [, api_key])`

Construye la URL de la petición a la API de Google Sheets.

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `page` | `string` | Sí | Nombre de la pestaña (hoja) del documento. |
| `spreadsheet` | `string` | Sí | ID del documento (extraído de su URL). |
| `api_key` | `string` | No | Clave de API alternativa. Si se omite, usa la del constructor. |

**Retorna:** `string` — URL completa lista para realizar la petición `fetch`.

```js
const url = gapi.url('dataset', '13fMXLCN-aqeAVo6YH9eNP1ojljFWB0ocRR3sWNMYaIg');
// https://sheets.googleapis.com/v4/spreadsheets/13fMXLCN.../values/dataset?key=...&alt=json
```

---

### `json_data(json)`

Parsea la respuesta JSON de la API y la devuelve estructurada.

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `json` | `object` | Respuesta directa de la API de Google Sheets (debe contener `values`). |

**Retorna:** `{ feed, entries, headers }`

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `feed` | `object[]` | Todos los registros procesados (fila 2 en adelante). |
| `entries` | `object[]` | Solo los registros de datos (fila 3 en adelante). |
| `headers` | `object` | Objeto con los nombres legibles de columna (fila 2). |

```js
const { feed, entries, headers } = gapi.json_data(jsonResponse);

// headers
// { filtroprovincia: 'Provincia', nombre: 'Nombre', ... }

// entries[0]
// { filtroprovincia: 'Santa Fe', nombre: 'CEMAFE', latitud: '-31.64', ... }
```

---

### `feed(response [, lowercase])`

Transforma la respuesta cruda de la API en un array de objetos. Los nombres de clave se derivan de la primera fila de `values`, normalizando espacios, barras `/` y guiones bajos `_`.

| Parámetro | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| `response` | `object` | — | Objeto con propiedad `values` (respuesta de la API). |
| `lowercase` | `boolean` | `true` | Si es `true`, convierte las claves a minúsculas. |

**Retorna:** `object[]`

```js
const records = gapi.feed(jsonResponse);
// [{ filtroprovincia: 'Provincia', ... }, { filtroprovincia: 'Santa Fe', ... }]
```

---

### `entries(feed)`

Devuelve el feed sin el primer elemento (que corresponde a las etiquetas de columna).

```js
const rows = gapi.entries(feed);
// Equivalente a feed.slice(1)
```

---

### `headers(feed)`

Devuelve el primer elemento del feed (etiquetas de columna legibles).

```js
const labels = gapi.headers(feed);
// { filtroprovincia: 'Provincia', nombre: 'Nombre', ... }
```

---

### `gapi_feed_row(data [, separator [, filter_prefix]])`

> **Legado.** Método de compatibilidad para el formato de respuesta de la API v3 de Google Sheets (Atom/JSON legacy). No es necesario para la API v4.

| Parámetro | Tipo | Por defecto | Descripción |
|-----------|------|-------------|-------------|
| `data` | `object` | — | Entrada del feed en formato v3. |
| `separator` | `string` | `"-"` | Carácter separador de claves. |
| `filter_prefix` | `boolean` | `true` | Si es `true`, elimina el prefijo `filtro-` de las claves. |

## Normalización de claves

Las claves de la primera fila se procesan de la siguiente manera:

1. Se eliminan espacios (` `), barras (`/`) y guiones bajos (`_`).
2. Si `lowercase` es `true` (por defecto), se convierten a minúsculas.

**Ejemplo:**

| Clave original | Clave normalizada |
|----------------|-------------------|
| `filtro-provincia` | `filtroprovincia` |
| `btn-ver` | `btnver` |
| `Area / Servicio` | `areaservicio` |

## Ejemplo completo

```js
const GapiSheetData = require('./gapi-sheet-data');

async function loadSheetData(spreadsheetId, sheetName) {
  const gapi = new GapiSheetData({ gapi_key: 'TU_API_KEY' });
  const url  = gapi.url(sheetName, spreadsheetId);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error al obtener la hoja: ${response.status}`);
  }

  const json = await response.json();
  const { entries, headers } = gapi.json_data(json);

  console.log('Columnas:', Object.keys(headers));
  console.log('Total de registros:', entries.length);
  console.log('Primer registro:', entries[0]);
}

loadSheetData('13fMXLCN-aqeAVo6YH9eNP1ojljFWB0ocRR3sWNMYaIg', 'dataset');
```

## Tests

```bash
npm test
```

Los tests se encuentran en `test/gapi-sheet-data.test.js`.

## Autor

Agustín Bouillet — <bouilleta@jefatura.gob.ar>
