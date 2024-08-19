function saludar() {
    // Obtener el nombre del input
    var nombre = document.getElementById("nombre").value;
    
    // Generar el saludo
    var mensaje = "¡Hola, " + nombre + "!";

    // Mostrar el saludo en el párrafo con id "saludo"
    document.getElementById("saludo").innerText = mensaje;
}
