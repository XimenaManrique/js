// Solicitar al usuario que ingrese un departamento
let departamento = prompt("Ingrese un departamento (Cundinamarca, Quindío, Antioquia, Valle):").toLowerCase();

// Verificar el departamento ingresado y mostrar la capital correspondiente
switch (departamento) {
    case "cundinamarca":
        alert("La capital de Cundinamarca es Bogotá.");
        break;
    case "quindio":
        alert("La capital de Quindío es Armenia.");
        break;
    case "antioquia":
        alert("La capital de Antioquia es Medellín.");
        break;
    case "valle":
        alert("La capital de Valle es Cali.");
        break;
    default:
        alert("Opción no válida.");
}
