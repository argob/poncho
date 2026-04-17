/**
 * 
 */
ponchoTableLegacyPatch = () => {
    document
        .querySelectorAll("select[id=ponchoTableFiltro]")
        .forEach(element => {
            // const node = element.closest(".form-group");
            const node = element.parentElement;
            const newElement = document.createElement("div");
            newElement.id = "ponchoTableFiltro";
            newElement.classList.add("row");
            node.parentElement.appendChild(newElement);
            node.remove();
    });
};


function ponchoTable(opt) {
    // if (!opt || typeof opt !== "object" || Array.isArray(opt)) {
    //     throw new TypeError("ponchoTable: `opt` debe ser un objeto de configuración.");
    // }

    // const hasDataSource = opt.jsonData || opt.jsonUrl ||
    //     (opt.hojaNombre && opt.idSpread) ||
    //     (opt.hojaNumero && opt.idSpread);

    // if (!hasDataSource) {
    //     throw new Error(
    //         "ponchoTable: Se requiere una fuente de datos. " +
    //         "Definí `jsonData`, `jsonUrl`, o bien `idSpread` con `hojaNombre` o `hojaNumero`."
    //     );
    // }

    ponchoTableLegacyPatch();
    return ponchoTableDependant(opt);
}
