//Ejercicio 01

const salidaMensaje = document.getElementById("salidaMensaje");

function mostrarMensaje(){
    salidaMensaje.textContent="Se ejecutó una función nombrada como manejador";
}

//Asociar evento con una función
document.getElementById("btnMensaje").addEventListener("click", mostrarMensaje());


//Ejercicio 02
const panelColor= document.getElementById("panelColor");
document.getElementById("btnColor").addEventListener("click", function(){
    panelColor.style.backgroundColor =
    panelColor.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
})


//Ejercicio 03

const btnMulti= document.getElementById("btnMulti");
const salidaMulti= document.getElementById("salidaMulti");

btnMulti.addEventListener("click", function(){
    salidaMulti.textContent="Primer listener ejecutado ";
});
btnMulti.addEventListener("click", function(){
    salidaMulti.textContent +="Segundo listener ejecutado";
});



