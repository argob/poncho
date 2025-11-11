# Markdown options

- [Markdown options](#markdown-options)
	- [Valores por defecto](#valores-por-defecto)


## Valores por defecto

La opción `markdown_options` permite incorporar todas las opciones que ofrece el plugin. Visite la sección [configuración de la documentación Showdown](https://showdownjs.com/docs/configuration/) para más información. 

```js
const options = {
	"markdown_options": {
	    "tables": true,
	    "simpleLineBreaks": true,
	    "extensions": [
	        'details', 
	        'images', 
	        'alerts', 
	        'numbers', 
	        'ejes', 
	        'button', 
	        'target',
	        'bootstrap-tables', 
	        'video'
	    ]
	},
};
```