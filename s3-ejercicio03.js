function contarProductos(){
    const items = document.getElementsByTagName("li");

    document.getElementById("resultado").textContent= "Total Productos: " + items.length;
}