const GEOJSON_URI = "https://gist.githack.com/"
    + "agustinbouillet/a5cdf04c6b19ed248aa85b27deaee6a2/raw/"
    + "8fc252113f420fa7a3700c9495a0d3be7d1ebe88/provincias-argentinas.json";


const styles = `.mapa-provincias{display:none}`
    + `@media screen and (max-width:992px){`
    + `.mapa-svg{display:none}.mapa-provincias{`
    + `display:inherit}}`;
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
const head = document.querySelector("head");
head.appendChild(styleSheet)


sortObject = (obj, key) => obj.sort((a, b) => {
    const valA = a[key].toUpperCase();
    const valB = b[key].toUpperCase();
    if (valA > valB) {
        return 1;
    }
    if (valA < valB) {
        return -1;
    }
    return 0;
});


const setSelectProvinces = (map, selector="id_provincia") => {
    let hash = window.location.hash.replace("#", "");
    let selected = hash ?? "";

    // Combo provincias
    const provinces = map.geoJSON.features.map(p => {
        const {id=false, name=false} = p.properties;
        return name ? [p.properties[map.id], name] : false;
    }).filter(f=>f);

    // Creo los options
    const selectProvinces = document.getElementById(selector);
    sortObject(provinces, 1).forEach(province => {

        const option = document.createElement("option");
        if(province[0] === selected){
            option.setAttribute("selected", "selected");
        }
        option.value = province[0];
        option.textContent = province[1];
        selectProvinces.appendChild(option);
    });
    return selectProvinces;         
};


const merge = (geoProvinces, entries) => {
    geoProvinces.features.forEach((feature, key) => {
        const googleSheetEntry = entries.find(entry => 
            (entry["filttro-provincia"] == feature.properties.fna ||
            entry["filttro-provincia"] == feature.properties.nam)
        );
        Object.assign(
            geoProvinces.features[key].properties, googleSheetEntry);
    });
    return geoProvinces;
};

