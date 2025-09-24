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

        const codeText = `<script>\n// start ${sourceElement.tagName.toLocaleLowerCase()}\n${sourceElement.textContent.trim()}\n// end ${sourceElement.tagName.toLocaleLowerCase()}\n</script>`;

        const preElement = document.createElement('pre');
        preElement.classList.add("bg-arg-negro", "text-arg-lima");
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
        container.classList.add("details-container")
        container.style.borderRadius = "6px";

        content.appendChild(preElement);
        details.appendChild(summary);
        details.appendChild(content);
        container.appendChild(details);
        element.appendChild(container)
    });
});


