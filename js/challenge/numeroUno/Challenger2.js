const btnsolicitudDatos= document.getElementById("btnsolicitudDatos")

function SolicitarDatos() {
  const nombre = prompt("Ingresa tu nombre").toLowerCase()
  const cedula = prompt("Ingresa tu cedula")
  const direccion = prompt("Ingresa tu direccion").toLowerCase()
  const edad = prompt("ingresa tu edad")
  const telefono = prompt("ingresa tu telefono")
  const correo = prompt("Ingresa tu correo").toLowerCase()
  const estadoCivil = prompt("Ingresa tu estado Civil").toLowerCase()
  const tipoSangre = prompt("Ingresa tu tipo de sangre").toLowerCase()
if (isNaN(cedula) || cedula === "" || cedula === null || isNaN(edad) || edad === "" || edad === null || isNaN(telefono) || telefono === "" || telefono === null || nombre === "" || nombre === null || direccion === "" || direccion === null || correo === "" || correo === null || estadoCivil === "" || estadoCivil === null || tipoSangre === "" || tipoSangre === null) {
    return alert("Datos incompletos")
}
  const nombreHtml = document.getElementById("nombre")
  const cedulaHtml = document.getElementById("cedula")
  const direccionHtml=document.getElementById("direccion")
  const edadHtml= document.getElementById("edad")
  const telefonoHtml = document.getElementById("telefono")
  const correoHtml = document.getElementById("correo")
  const estadoCivilHTML = document.getElementById("estadoCivil")
  const tipoSangreHTML = document.getElementById("tipoSangre")

  nombreHtml.innerHTML = "Tu nombre es:" + nombre
  cedulaHtml.innerHTML = "Tu cedula es:" + cedula
  direccionHtml.innerHTML = "Tu direccion es:" + direccion 
  edadHtml.innerHTML = "Tu edad es:" + edad
  telefonoHtml.innerHTML = "Tu telefono es:" + telefono
  correoHtml.innerHTML = "Tu correo es:" + correo
  estadoCivilHTML.innerHTML= "Tu estado civil es:" + estadoCivil
  tipoSangreHTML.innerHTML ="Tu tipo de sangre es:" + tipoSangre
}

btnsolicitudDatos.onclick = function(){
 SolicitarDatos();
}