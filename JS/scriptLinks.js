
console.log("empezamos!!")


document.addEventListener("DOMContentLoaded", () => {

    
    let links = [];                     
    const savedLinks = "misLinks";      

    const inputTitulo = document.getElementById("inputTitulo");
    const inputURL = document.getElementById("inputURL");
    const btnAdd = document.getElementById("btnAdd");
    const listaLinks = document.getElementById("listaLinks");

    const datosGuardados = localStorage.getItem(savedLinks);

    if (datosGuardados !== null) {
        links = JSON.parse(datosGuardados);
    }

    renderLista();

    
    btnAdd.addEventListener("click", function() {

        const titulo = inputTitulo.value.trim();
        let url = inputURL.value.trim();

        if (titulo === "" || url === "") {
            alert("Rellena ambos campos");
            return;
        }

        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        const nuevoLink = {
            id: Date.now().toString(),
            titulo: titulo,
            url: url
        };

        links.push(nuevoLink);
        guardarEnLocalStorage();
        renderLista();
        limpiarInputs();
    });

    
    function renderLista() {
        listaLinks.innerHTML = "";

        links.forEach(link => {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.textContent = link.titulo;
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = " " + "Eliminar";

            btnEliminar.addEventListener("click", () => {
                eliminarLinkPorID(link.id);
            });

            li.appendChild(a);
            li.appendChild(btnEliminar);
            listaLinks.appendChild(li);
        });
    }

    function eliminarLinkPorID(id) {
        links = links.filter(link => link.id !== id);
        guardarEnLocalStorage();
        renderLista();
    }

    function guardarEnLocalStorage() {
        localStorage.setItem(savedLinks, JSON.stringify(links));
    }

    function limpiarInputs() {
        inputTitulo.value = "";
        inputURL.value = "";
    }

});

