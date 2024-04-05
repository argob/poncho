document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("#js-script-sample").forEach(x => {
        let html = document.querySelector(".js-code");
        html.innerHTML = `&lt;script&gt;${x.textContent}&lt;/script&gt;`;
    });
});
