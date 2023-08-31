// Solicitar al usuario que ingrese un departamento
let departament = prompt("Ingrese un departamento (Cundinamarca, Quindío, Antioquia, Valle):")
if (departament === "Null" || departament === "") {
    alert("Opcion invalida")
} else {
    departament = departament.toLowerCase()
  if (departament === "Cundimarca") {
    alert("La capital de Cundinamarca es Bogotá.")
   } else {
  if (departamento === "Quindio") {
    alert("La capital de Quindío es Armenia.")
   } else {   
  if (departament === "Antioquia") {
    alert("La capital de Antioquia es Medellín.")  
    } else {
  if (departament === "Valle") {
    alert("La capital de Valle es Cali.")
   
    }    
   } 
  }
 }
}
 