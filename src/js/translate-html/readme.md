# Traductor de cadenas de texto


## sdfsd


| Argumento | 2 | s |
|:---|:---|:---| 
| sd | 2 | s |
| sd | 2 | s |


## 📙 Diccionario de términos a traducir

El componenete necesita un diccionario de términos a traducir. Los términos pueden estar representados en cualquier idioma. El programa buscará el texto y lo reempñazará por el texto que se le asignó. 

### Sintáxis

```json
[
    [
        "Acerca de la República Argentina",
        "About the Argentine Republic"
    ],
    [
        "Compartir en redes sociales",
        "Share on Social Media"
    ],
    [
        "Compartir en",
        "Share on"
    ]
]
```
s
## 🚀 Uso

Importar `poncho.min.js`.

```javascript
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
```
<small>* Controle que la url sea la correcta.</small>


```javascript
<script>
    fetch_json("./data/ln-es.json").then(terms => {
        const tr = new TranslateHTML(
            terms,
            ["html.lang", "a.lang", "value", "title", "placeholder"]
        );
        tr.translate();
    });
</script>
```

### Traducir atributos HTML

```javascript
<!-- START -->
<script src="/profiles/argentinagobar/themes/contrib/poncho/js/poncho.min.js"></script>
<script>
    fetch_json("./data/ln-es.json").then(terms => {
        const tr = new TranslateHTML(terms, ["html.lang", "a.lang", "value", "title", "placeholder"]);
        tr.translate();
        tr.translateAttributes([...terms, ...[["es", "en"]]]);
    });
</script>
<!-- END -->
```
