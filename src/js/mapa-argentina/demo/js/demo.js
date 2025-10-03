function abDebuggerStyle(){
    const style = `.ab-debugger pre {
        position: relative;
    }
    .ab-debugger pre:before {
        content: " ";
        height: 100%;
        position: absolute;
        width: 12ch;
        top: 0;
        border-left: 4ch solid var(--arg-escarapela);
        border-right: 4ch solid var(--arg-escarapela);
        left: 9.5px;
        font-family: courier;
        opacity:.15;
    }
    .ab-debugger pre:after {
        content: " ";
        height: 100%;
        position: absolute;
        width: 20ch;
        background: rgb(104 195 239 / .1);
        top: 0;
        border-left: 1px dotted var(--arg-maiz);
        border-right: 2px dotted var(--arg-rojo-500);
        left: 80ch;
        font-family: courier;
    }`;

    if(typeof headStyle !== "function"){
        return;
    }
    headStyle("ab-debugger", style);
}



/**
 * Permite visualizar código
 * 
 * @example
 * <div data-code-from="js-map"></div>
 * // <script id="js-map">
 * //    alert("hello");
 * // </script>
 */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-code-from]').forEach(element => {
        const { codeFrom, title="código" } = element.dataset;
        
        const sourceElement = document.getElementById(codeFrom);
        
        if (!sourceElement) {
            return;
        }
        const tagName = sourceElement.tagName.toLocaleLowerCase();

        const codeText = `<${tagName}>\n// start ${sourceElement.tagName.toLocaleLowerCase()}\n${sourceElement.textContent.trim()}\n// end ${sourceElement.tagName.toLocaleLowerCase()}\n</${tagName}>`;

        const preElement = document.createElement('pre');
        preElement.classList.add("bg-arg-negro", "text-miarg-celeste-claro");
        preElement.style.borderRadius = "6px";
        preElement.style.border = "none";
        preElement.textContent = codeText; 

        const details =  document.createElement("details");
        details.open = true;
        details.classList.add("js-details", "ar-details", "caret-small", "caret-dark", "details-borderless");
        details.style.display = "block";
        details.style.background = "#faf9f5";

        const summary =  document.createElement("summary");
        summary.classList.add("ar-details__title");
        summary.textContent = title;

        const content =  document.createElement("div");
        content.classList.add("ar-details__content");
        
        const container =  document.createElement("div");
        container.classList.add("details-container", "ab-debugger")
        container.style.borderRadius = "6px";

        content.appendChild(preElement);
        details.appendChild(summary);
        details.appendChild(content);
        container.appendChild(details);
        element.appendChild(container);
        abDebuggerStyle();
    });
});