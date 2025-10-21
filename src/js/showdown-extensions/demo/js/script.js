/*------------------------------------*\
  # DEMO
\*------------------------------------*/

const button = document.querySelectorAll("#parse");
button.forEach(function (e) {
    e.addEventListener("click", function (elem) {
        const texto = document.querySelector("#texto_id");

        // Limpio la data proveniente de google
        const showDownExtensions = {
            tables: true,
            simpleLineBreaks: true,
            extensions: [
                "details",
                "images",
                "alerts",
                "numbers",
                "ejes",
                "button",
                "target",
                "bootstrap-tables",
                "video"
            ]
        };
        const convert = new showdown.Converter(showDownExtensions);
        const html = convert.makeHtml(texto.value);
        const show_parsed_text = document.querySelector("#show_parsed_id");
        show_parsed_text.innerHTML = html;


        var code = document.querySelector("#show_code");
        code.textContent = format(html, " ".repeat(4), 78);
        // code.textContent = html;
        try {
        } catch (error) {
            console.error(error);
        }
    });
});