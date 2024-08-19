function saludar() {
    // Obtener el nombre del input
    var nombre = document.getElementById("nombre").value;
    
    // Obtener la edad del input
    var edad = document.getElementById("edad").value;
    
    // Obtener el género seleccionado
    var genero = document.getElementById("genero").value;

    // Obtener el idioma seleccionado
    var idioma = document.getElementById("idioma").value;

    // Variables para el saludo y mensaje de edad
    var saludoGenero;
    var mensajeEdad;

    // Configurar el saludo y el mensaje según el idioma
    if (idioma === "es") {
        if (genero === "masculino") {
            saludoGenero = "Bienvenido";
        } else if (genero === "femenino") {
            saludoGenero = "Bienvenida";
        } else {
            saludoGenero = "Bienvenide";
        }
        mensajeEdad = "Tienes " + edad + " años.";
    } else if (idioma === "en") {
        if (genero === "masculino") {
            saludoGenero = "Welcome";
        } else if (genero === "femenino") {
            saludoGenero = "Welcome";
        } else {
            saludoGenero = "Welcome";
        }
        mensajeEdad = "You are " + edad + " years old.";
    }
    
    // Crear el mensaje de saludo completo
    var mensaje = saludoGenero + ", " + nombre + ". " + mensajeEdad;
    
    // Mostrar el saludo en el párrafo con id "saludo"
    document.getElementById("saludo").innerText = mensaje;
}
