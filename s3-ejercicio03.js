
function contarProductos(){
    const items = document.getElementsByTagName("li");

    document.getElementById("resultado").textContent= "Total Productos: " + items.length;
}


function resaltarCaros(){
    const productos = document.getElementsByClassName("producto");

    for(let i=0; i<productos.length; i++  ){
        const texto=productos[i].textContent;

        //Extraer precio
        const precio= parseInt(texto.split("S/")[1]);

        if(precio >= 1000){
            productos[i].style.color = "red";
            productos[i].style.fontWeight = "bold";
        }

    }
}

function cambiarColorLista(){
    const lista = document.getElementsByTagName("li");

    for(let i=0; i<lista.length; i++  ){
        lista[i].style.backgroundColor = "#FCA362";
    }
}
