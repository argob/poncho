document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("[data-code-from]").forEach(element => {
        const placeHolder = element.dataset.codeFrom;
        const html = document.getElementById(placeHolder);
        const text = `&lt;script&gt;\n`
            + `// start ${html.tagName.toLocaleLowerCase()}\n`
            + `${html.textContent.trim()}\n`
            + `// end ${html.tagName.toLocaleLowerCase()}\n`
            + `&lt;/script&gt;`;

        const pre = document.createElement("pre");
        pre.classList.add("demo-style");
        pre.innerHTML = text;



        const titleTag = (element.dataset.htmltag ?element.dataset.htmltag : "p");

        const title = document.createElement(titleTag);
        title.textContent = element.dataset.title;

        if(element.dataset.styles){
            let headStyles = element.dataset.styles.split(/\,\s*/g).filter(f=>f);
            title.classList.add(...headStyles);
        }

        if(element.dataset.title){
            element.appendChild(title);
        }
        element.appendChild(pre);
    });
});
