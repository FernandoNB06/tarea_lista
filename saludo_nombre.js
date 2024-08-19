function saludar() {
    // Obtener el nombre del input
    var nombre = document.getElementById("nombre").value;
    
    // Generar el saludo
    var mensaje = "¡Hola, " + nombre + "!";

    // Mostrar el saludo en el párrafo con id "saludo"
    document.getElementById("saludo").innerText = mensaje;

     // Obtener el género seleccionado
     var genero = document.getElementById("genero").value;
    
     // Generar el saludo basado en el género
     var saludoGenero;
     if (genero === "masculino") {
         saludoGenero = "Bienvenido";
     } else if (genero === "femenino") {
         saludoGenero = "Bienvenida";
     } else {
         saludoGenero = "Bienvenide"; // Inclusivo para otro género
     }
     
     // Crear el mensaje de saludo
     var mensaje = saludoGenero + ", " + nombre + "!";
     
     // Mostrar el saludo en el párrafo con id "saludo"
     document.getElementById("saludo").innerText = mensaje;
}
