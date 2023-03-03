/**
 * 
 */
ponchoTableLegacyPatch = () => {
    document
        .querySelectorAll("select[id=ponchoTableFiltro]")
        .forEach(element => {
            // const node = element.closest(".form-group");
            const node = element.parentElement;
            // Creo un contenedor
            const newElement = document.createElement("div");
            newElement.id = "ponchoTableFiltro";
            newElement.classList.add("row");
            node.parentElement.appendChild(newElement);
            // Borro el viejo elemento
            node.remove();
    });
};

function ponchoTable(opt) {
    ponchoTableLegacyPatch();
    return ponchoTableDependant(opt);
}
