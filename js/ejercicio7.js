//Ejercicio de lógica
let day = prompt("Ingrese día");
if (day === null || day === "") {
    alert("opción invalida")
} else {
    day = day . toLowerCase()
    if (day === "") {
        alert (day + "opción invalida")    
    } else {
if (day === "lunes" || day === "martes" || day === "miercoles" || day === "miércoles" || day === "jueves" || day === "viernes") {
    alert("Día entre semana");
} else {
    //if ANIDADOS
    if (day === "sabado" || day === "sábado" || day === "domingo") {
        
        alert("día fin de semana")   } 
        else {
        alert("Favor ingresar solo días de la semana")   
    }
   } 
  }
 }




/**Notas
 * 1-Mayusculas = tolowerCase
 * 2-Palabras que no son días =Usamos un if ANIDADOS
 * 3-Vacío/null =
 * 4-cancelar =
 * 5-Tildes = Se debe agregar otra comparativa day=== "miércoles" || day === "miercoles"
 */