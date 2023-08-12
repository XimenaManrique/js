// Función para mostrar la alerta según la elección del usuario
function mostrarAlerta(departamento, objetivo) {
    if (departamento === "antioquia") {
        if (objetivo === "comidas") {
            alert("Las comidas más populares en Antioquia son la bandeja paisa, arepa rellena, etc.");
        }
    } else if (departamento === "cundinamarca") {
        if (objetivo === "turismo") {
            alert("Lugares para visitar en Cundinamarca son Monserrate, la Candelaria, etc.");
        }
    } else if (departamento === "quindio") {
        if (objetivo === "turismo") {
            alert("Lugares para visitar en Quindío son el Parque del Café, Salento, etc.");
        }
    } else if (departamento === "valle") {
        if (objetivo === "museos") {
            alert("Algunos museos interesantes en Valle del Cauca son el Museo La Tertulia, MAAC, etc.");
        }
    } else {
        alert("Opción no válida");
    }
}

// Capturar el departamento y objetivo de visita del usuario
let departamento = prompt("Ingrese un departamento (Cundinamarca, Quindío, Antioquia, Valle):").toLowerCase();
let objetivo = prompt("Ingrese el objetivo de visita (turismo, comidas, museos):").toLowerCase();

// Mostrar la alerta correspondiente
mostrarAlerta(departamento, objetivo);