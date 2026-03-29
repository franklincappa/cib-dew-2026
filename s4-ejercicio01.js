
const miniaturas = document.getElementsByClassName("miniatura");

for(let i=0; i< miniaturas.length; i++){
    miniaturas[i].onclick = function(){
        const principal = document.getElementById("principal");

        //obtener el valor de SRC imagen miniatura
        const nuevaRuta = this.getAttribute("src");

        //Cambiar el origen de la ruta de la imagen de  PRINCIPAL
        principal.setAttribute("src",nuevaRuta);

        //Opcional

        for(let j=0; j<miniaturas.length; j++){
            miniaturas[j].style.border="none";
        }
        this.style.border ="3px solid blue";

        document.getElementById("info").textContent= "Imagen Actual: " + nuevaRuta;

    }
}


function agrandarImagen(){
    const principal= document.getElementById("principal");

    let ancho= principal.getAttribute("width");
    ancho = parseInt(ancho) + 50;

    principal.setAttribute("width", ancho);
}


function reducirImagen(){
    const principal= document.getElementById("principal");

    let ancho= principal.getAttribute("width");
    ancho = parseInt(ancho) - 50;

    if (ancho>50){
        principal.setAttribute("width", ancho);
    }
}

