function render(ponchoColorDefinitionsList){
    const _color = new Color(ponchoColorDefinitionsList);

    const instances = _color.ponchoColorList(ponchoColorDefinitionsList);
    const template = document.querySelector("#productrow");

    let myRoot = [];
    let main = document.querySelector(".cont");

    for (let th of ponchoColorDefinitionsList) {
        const {space, data, name=false} = th;

        const groupHeading = document.createElement("h2");
        groupHeading.textContent = name;
        groupHeading.classList.add('h5', "mb-2kee2", "pt-4", "roboto-regular");
        groupHeading.style.color = "var(--gobar-azul-600)";
        main.appendChild(groupHeading);

        for(let colorGroup of data){
            const {color, name, alias, instance, group} = colorGroup;

            let colorKeys = Object.keys(color);

            const row = document.createElement("div");
            row.classList.add("scope");

            const root = colorKeys.forEach(function(key){
                const clone = template.content.cloneNode(true);
                const sample = clone.querySelector(".color");
                sample.title = `--${space}-${group}-${key}`;
                sample.style.background = `var(--${space}-${group}-${key})`;
                
                searchInstance = instances.find(f => f.color == color[key] && f.scope == space);
                let variants = "";
                if(searchInstance){
                    if( Object.keys(searchInstance.variant).length !== 0 ){
                        const items = Object.keys(searchInstance.variant).map(
                            function(k){
                                const color = searchInstance.variant[k];
                                return (`<dt class="item">${k}</dt>
                                    <dd>
                                    <i class="sample-info__mini-sample" 
                                        style="color:${color}">⬤</i> 
                                    <span style="color: gray">
                                    ${color}
                                    </span></dd>`);
                            }
                        ).filter(f => f).join('');
                        variants = `<dt>Variantes</dt><dd><dl class="sample-info__variants">${items}</dl></dd>`;
                    }

                    const sampleHTML = `<div class="sample-info">
                        <button class="sample-info__toggle" data-space="">★    </button>
                        <dl class="sample-info__definition">
                            <dt>Nombre</dt>
                            <dd>${searchInstance.name}</dd>  
                            <dt>Código</dt>
                            <dd>${searchInstance.code}</dd>  
                            ${variants}
                            <dt>Alias</dt>
                            <dd>${searchInstance.alias.map(m => m.code).join(', ')}</dd>
                            <dt> Color</dt>
                            <dd>
                                <i class="sample-info__mini-sample" 
                                    style="color:${searchInstance.color}">
                                    ⬤</i>
                                ${searchInstance.color}</dd>
                            <dt>Variable</dt>
                            <dd>var(--${space}-${group}-${key})</dd>
                        </dl>
                    </div>`;
                    sample.innerHTML = sampleHTML;
                }

                const text = clone.querySelector(".text");
                text.textContent = _color.cleanUpHex(color[key]);

                text.style.background = `var(--${space}-${group}-${key});`;
                row.appendChild(clone);

                myRoot.push(`--${space}-${group}-${key}:${color[key]};`);
            });

            main.appendChild(row);
        }
    }

    let vars1 = myRoot.join("");
    let rootVars = `:root{${vars1}}`;
    headStyle('root-vars', rootVars);
    
    const vars = _color.ponchoColorVariables(ponchoColorDefinitionsList);
    const cssToHead = vars.flatMap(value => {
        const [name, color] = value;
        return [
            `.text-${name}{color: ${color} !important;}\n.bg-${name}{background-color: ${color} !important;}`
        ];
    }).join('\n');
    headStyle("poncho-color", cssToHead);

};

render(ponchoColorDefinitionsList);


// function axiosConnect(url, timeout){
//     const axiosOptions = {
//         responseType: 'application/json',
//         // headers: {"Access-Control-Allow-Origin": "*"},
//         timeout: timeout,
//         signal: AbortSignal.timeout(timeout)
//     };
//     return axios.get(url, axiosOptions);
// }




// axiosConnect("http://0.0.0.0:9000/api/v1/poncho-color", 5000)
//     .then(
//         function(result){
//             const results = JSON.parse(result.data);
//             const data = results.response;
//             render(data)
//         }
//     ).catch(function(error){
//         console.error(error);
//     });
