//1. Funciones

function saludarAlumno(nombre){
    document.getElementById("resultadoFunciones").innerHTML =
       "Hola, <b>" + nombre + "</b> Bienvenido a Clase Javascript";
}

function mostrarSuma(a,b){
    let suma = a+b;
    document.getElementById("resultadoFunciones").innerHTML =
    "La suma de "+a+" + " + b + " es: "+ suma;
}

function calcularDescuento(precio, descuento){
    let montoDescuento = precio *(descuento/100);
    let total = precio - montoDescuento;
    document.getElementById("resultadoFunciones").innerHTML =
    "Precio Original : S/ " + precio +
    "<br>Descuento: " + descuento + "%" +
    "<br>Total Pagar: <b> S/ " + total + "</b>";
}

//2. Funciones Return

function calcularPromedio(n1, n2, n3){
    let promedio = (n1+n2+n3)/3;
    return promedio;
}

function convertirMayusculas(texto){
    return texto.toUpperCase();
}

function esPar(numero){
    return numero % 2 ==0;
}
function probarReturn(){
    let promedio = calcularPromedio(14,18,16);
    let par = esPar(10);
    let texto = convertirMayusculas("javascript intermedio");

    document.getElementById("resultadoReturn").innerHTML =
    "Promedio: " + promedio + "<br>" +
    "¿10 es par? : " + par + "<br>" +
    "Texto Mayúscula: " + texto;
}

//3. SetTimeOut
//setTimeout(función, tiempo (ms));
 
function mostrarMensajeRetraso(){
    document.getElementById("mensajeTimeout").innerHTML="Esperando Mensaje";

    setTimeout(
        function(){document.getElementById("mensajeTimeout").innerHTML=
            "Este mensaje se visualiza después de 3 segundos";
        }
        ,
        3000
    )

}

//4. setInterval()
let contador = 0;
let intervaloContador;

function iniciarContador(){
    clearInterval(intervaloContador);
    intervaloContador = setInterval(
        function(){ 
            contador++;
            document.getElementById("contador").innerHTML=contador;
        },
        1000
    );
}

function detenerContador(){
    clearInterval(intervaloContador);
}

//5. Reloj Tiempo Real

function actualizarReloj(){
    let ahora = new Date();

    //Conversión String inicia con S mayúscula
    let  horas =  String(ahora.getHours()).padStart(2,'0');
    let  minutos =  String(ahora.getMinutes()).padStart(2,'0');
    let  segundos =  String(ahora.getSeconds()).padStart(2,'0');

    document.getElementById("reloj").innerHTML=
    horas + ":" + minutos + ":" + segundos;
}

setInterval(actualizarReloj,1000);
actualizarReloj();

//6. Fecha texto

function mostrarFechaTexto(){
    let fecha = new Date();

    let dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sábado"];
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre","noviembre", "diciembre"];

    let textoFecha ="Hoy es " + dias[fecha.getDay()] + ", " +
    fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + 
    fecha.getFullYear();

    document.getElementById("fechaTexto").innerHTML= textoFecha;
}

//7.  Carrusel

const imagenes = [
  "https://picsum.photos/id/1015/800/300",
  "https://picsum.photos/id/1025/800/300",
  "https://picsum.photos/id/1035/800/300",
  "https://picsum.photos/id/1043/800/300"
];

let indiceActual=0;
let intervaloCarrusel;

function mostrarImagen(){
    document.getElementById("imagenCarrusel").src= imagenes[indiceActual];
}

function iniciarCarrusel(){
    clearInterval(intervaloCarrusel);
    intervaloCarrusel = setInterval(
        function(){
            indiceActual++;
            if(indiceActual >= imagenes.length){
                indiceActual=0;
            }
            mostrarImagen();
        }
        ,
        2000
    )
}

iniciarCarrusel(); 


