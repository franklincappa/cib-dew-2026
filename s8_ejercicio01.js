
function verChildNodes(){
    const contenedor = document.getElementById("contenedor1");

    let texto ="Total childNodes:  " + contenedor.childNodes.length + "\n";

    contenedor.childNodes.forEach((nodo, index) => {
        texto += "\n" + nodo.nodeName + " - " + (nodo.nodeValue || nodo.textContent.trim() );
    });
    document.getElementById("salida1").textContent = texto;
}

function verPrimerUltimo(){
    const contenedor = document.getElementById("contenedor1");
    const primero = contenedor.firstChild;
    const ultimo = contenedor.lastChild;

    document.getElementById("salida1").textContent = 
        "\n Primer Nodo : " + primero.nodeName + "\n último Nodo: " +  ultimo.nodeName; 
}

function verPadre(){
    const ul = document.querySelector("#contenedor1 ul");
    const padre = ul.parentNode;

    document.getElementById("salida1").textContent = padre.nodeName;
}

