
//Ejercicio 1

const salidaSaludo = document.getElementById("salidaSaludo");

document.getElementById("btnSaludo").onclick = function(){
    salidaSaludo.textContent="Hola, este es el evento click";
}

//Ejercicio 2

const cajaDobleClick = document.getElementById("cajaDobleClick");

cajaDobleClick.ondblclick= function (){
    cajaDobleClick.style.backgroundColor = 
    cajaDobleClick.style.backgroundColor === "lightgreen" ? "#e9ecef": "lightgreen" ;
}

//Ejercicio 3
const zonasMouse = document.getElementById("zonaMouse");
const salidaMouse = document.getElementById("salidaMouse");

 zonasMouse.onmouseover = function(){
    zonasMouse.textContent = "Mouse Encima";
    salidaMouse.textContent = "Se activo el MouseOver";
 }

 zonasMouse.onmouseout = function(){
    zonasMouse.textContent = "Pasa el mouse";
    salidaMouse.textContent = "Se activo el MouseOut";
 }

//Ejercicio 4
 const txtNombre = document.getElementById("txtNombre");
 const salidaInput = document.getElementById("salidaInput");

 txtNombre.oninput = function(){
    salidaInput.textContent =  "Cantidad de Caracteres: " + txtNombre.value.length;
 }

//Ejercicio 5

const selectCurso = document.getElementById("selectCurso");
const salidaSelect = document.getElementById("salidaSelect");

selectCurso.onchange =function(){
    salidaSelect.textContent= 
    this.value ? "Curso Seleccionado: " + this.value : "No seleccionó curso";
}

//Ejercicio 6

const txtTecla = document.getElementById("txtTecla");
const salidaTecla = document.getElementById("salidaTecla");

txtTecla.onkeydown = function(event){
    salidaTecla.textContent = "Tecla presionada: " + event.key;
}

//Ejercicio 7

const formRegistro = document.getElementById("formRegistro");
const salidaForm = document.getElementById("salidaForm");

formRegistro.onsubmit = function(event){
    event.preventDefault(); //Obligatorio agregar en OnSUBMIT, para no recargar web 
    const correo = document.getElementById("correoRegistro").value.trim();
    const nombre = document.getElementById("nombreRegistro").value.trim();

    if ( nombre === "" || correo ===""){
        salidaForm.textContent = "Complete los campos";
        salidaForm.style.color="red";
        return; 
    }

    salidaForm.textContent = "Formulario válido"
    salidaForm.style.color="green";
}

const contador = document.getElementById("contador");
const btnMas = document.getElementById("btnMas");
const btnMenos = document.getElementById("btnMenos");
const btnReset = document.getElementById("btnReset");

let cuenta = 0;
btnMas.onclick = function() {
  cuenta++;
  contador.textContent = cuenta;
};

btnMenos.onclick = function() {
  cuenta--;
  contador.textContent = cuenta;
};

btnReset.onclick = function() {
  cuenta = 0; 
  contador.textContent = cuenta;
};
