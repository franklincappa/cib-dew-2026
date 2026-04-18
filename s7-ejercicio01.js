//Ejercicio 01
const cursos =["Html","CSS", "Javascript","Bootstrap"];
document.getElementById("btnCursos").addEventListener("click", function(){
    document.getElementById("salidaCursos").textContent= "Cursos: " + cursos.join(", ");
})

//Ejercicio 02
const nombres=["Eliana", "Manuel", "Diana", "Gabriel", "Miguel"];
document.getElementById("btnRecorrer").addEventListener("click", function(){
    let resultado ="FOR: \n";
    for(let i=0; i< nombres.length; i++){
        resultado += (i+1) + ". " + nombres[i] + "\n";
    }

    resultado += "\n FOREACH: \n";
    nombres.forEach(function(valor, index){
        resultado +=  (index+1) + ". "+ valor + "\n";
    })

    document.getElementById("salidaRecorrer").textContent= resultado;
})

//Ejercicio 03
document.getElementById("btnOperaciones").addEventListener("click", function(){
    let tareas = ["Estudiar", "Practicar", "Ordenar"];
    tareas.push("Laboratorio"); //agrega al final
    tareas.unshift("Despertar"); //agrega al inicio

    tareas.pop(); //elimina último valor
    tareas.shift();//elimina primer valor
    document.getElementById("salidaOperaciones").textContent = 
        "Arreglo final: " + tareas.join(", ");
})


//Ejercicio 04
const productos = ["mouse","teclado","monitor","laptop","cpu"];
document.getElementById("btnBuscar").addEventListener("click", function(){
    const buscado = document.getElementById("txtBuscar").value.trim().toLowerCase();
    const indice = productos.indexOf(buscado);

    if(productos.includes(buscado)){
        document.getElementById("salidaBuscar").textContent="Si Existe -> posición " + indice;
    }  else {
        document.getElementById("salidaBuscar").textContent="No Existe";
    }
})

//Ejercicio 05
document.getElementById("btnMapFilter").addEventListener("click", function(){
    const numeros =[5,8,12,15,20];
    const doble = numeros.map(function(n){return n*2; });
    const mayores = numeros.filter(function(n) { return n>13;});
    
    document.getElementById("salidaMapFilter").textContent= 
    "Original: " + numeros.join(",")+ "\n" +
    "Doble: " + doble.join(", ")+ "\n" +
    "Mayores 13: " + mayores.join(", ");
})



//Ejercicio 06

document.getElementById("btnEstudiantes").addEventListener("click", function(){
    const estudiantes =[
        { nombre: "Carlos", nota: 16}, 
        { nombre: "Lucia", nota: 5}, 
        { nombre: "Diana", nota: 18}, 
        { nombre: "Eleazar", nota: 9} 
    ];

    const aprobados = estudiantes.filter(function(e) {return e.nota >=13; });
    const desaprobados = estudiantes.filter(function(e) {return e.nota <13; });

    let texto ="Listado General";
     estudiantes.forEach(function (e){
        texto += "\n Nombre: " + e.nombre + " - nota: " + e.nota;
    })

    texto +="\n\n\n Listado Aprobados";
    aprobados.forEach(function (e){
        texto += "\n Nombre: " + e.nombre + " - nota: " + e.nota;
    })

    texto +="\n\n\n Listado Desaprobados";
    desaprobados.forEach(function (e){
        texto += "\n Nombre: " + e.nombre + " - nota: " + e.nota;
    })
    
    
    document.getElementById("salidaEstudiantes").textContent= texto;

})


//Ejercicio 08

const carrito =[];

document.getElementById("btnAgregarProducto").addEventListener("click", function(){
    let producto = document.getElementById("txtProducto").value.trim();
    let precio = parseFloat( document.getElementById("txtPrecio").value );

    if(producto !== "" && precio >0){
        carrito.push({producto, precio});
        document.getElementById("txtProducto").value="";
        document.getElementById("txtPrecio").value="";
    }
});

document.getElementById("btnVerCarrito").addEventListener("click", function(){
    let texto ="Productos en Carrito\n\n";

    if (carrito.length === 0){
        document.getElementById("salidaCarrito").textContent =  "Carrito Vacío";
        return;
    }

    let total =0;
    carrito.forEach(function(item, index){
        total += item.precio;
        texto += item.producto +" s/ " + item.precio + "\n";
    })
    texto += "\nTotal: s/. " + total;
    document.getElementById("salidaCarrito").textContent =  texto;
});

