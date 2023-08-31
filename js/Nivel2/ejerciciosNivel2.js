// Variables globales

const btnEjercicioUno = document.getElementById("buttonEjercicio1");
const btnEjercicioDos = document.getElementById("buttonEjercicio2");
const btnEjercicioTres = document.getElementById("buttonEjercicio3");
const btnEjercicioCuatro = document.getElementById("buttonEjercicio4");
/**
 * Ejercicio 1
 * DOM(Document object Model)
 */
function ejercicioUno() {
  const numero1 = parseFloat(prompt("ingresa el numero 1"));
  const numero2 = parseFloat(prompt("ingresa el numero 2"));
  const suma = numero1 + numero2; //4
  alert(suma);
}

/**
 * Ejercicio 2
 * operaciones matematicas (suma-resta-multiplicación)
 */

function ejercicioDos() {
  const operacion = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BASICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar. \n Ingresa 4 para dividir."
    )
  );

  if (isNaN(operacion) || operacion > 4 || operacion < 1) {
    return alert("Favor ingresar opción valida");
  }

  const num1 = parseFloat(prompt("ingresa el numero 1"));
  const num2 = parseFloat(prompt("ingresa el numero 2"));
  let resultado = 0;
  console.log(num1, num2);
  if (isNaN(num1) || isNaN(num2)) {
    return alert("Favor ingresar numeros");
  }
  switch (operacion) {
    case 1:
      resultado = num1 + num2;
      alert("El resultado dela sumas es:" + resultado);
      break;
    case 2:
      alert(num1 - num2);
      break;
    case 3:
      resultado = num1 * num2;
      alert("El resultado de la multiplicación es:" + resultado);
      break;
    case 4:
      if (num2 === 0) {
        alert("No es posible dividir por 0");
      } else {
        resultado = num1 / num2;
        alert("El resultado de la división es:" + resultado);
        break;
      }
  }
}
/**
 * Ejercicio 3
 * Datos personales
 */
function ejercicioTres() {
  // Datos ingresados por el usuario
  const nombre = prompt("Ingresa tu nombre");
  const cedula = prompt("Ingresa tu cedula");
  const edad = parseInt(prompt("ingresa tu edad"));
  // etiquetas h2 a sobreescribir en el Html
  const nombreHtml = document.getElementById("nombre");
  const cedulaHtml = document.getElementById("cedula");
  const edadHtml = document.getElementById("edad");
  // Guardar datos en HTML
  nombreHtml.innerHTML = "Tu nombre es:" + nombre;
  cedulaHtml.innerHTML = "Tu cedula es:" + edad;
  edadHtml.innerHTML = "Tu edad es:" + cedula;
}

/**
 * Ejercicio 4
 * LocalStorage
 */

if (localStorage.getItem("nombre")) {
    const nombreHtml = document.getElementById("nombre2")
    const cedulaHtml = document.getElementById("cedula2");
    const edadHtml = document.getElementById("edad2");
    nombreHtml.innerHTML = "Tu nombre es:" + localStorage.getItem("nombre");
    cedulaHtml.innerHTML = "Tu cedula es:" + localStorage.getItem("cedula");
    edadHtml.innerHTML = "Tu edad es:" + localStorage.getItem("edad");
  
}

function ejercicioCuatro() {
  // Datos ingresados por el usuario
  const nombre = prompt("Ingresa tu nombre");
  const cedula = prompt("Ingresa tu cedula");
  const edad = parseInt(prompt("ingresa tu edad"));
  // etiquetas h2 a sobreescribir en el Html
  const nombreHtml = document.getElementById("nombre2");
  const cedulaHtml = document.getElementById("cedula2");
  const edadHtml = document.getElementById("edad2");
  // Si existen datos en LocalStorage los obtenemos


  // Guardar datos en HTML
  nombreHtml.innerHTML = "Tu nombre es:" + nombre;
  localStorage.setItem("nombre", nombre);
  cedulaHtml.innerHTML = "Tu cedula es:" + edad;
  localStorage.setItem("cedula", cedula);
  edadHtml.innerHTML = "Tu edad es:" + cedula;
  localStorage.setItem("edad", edad);
}

//Eventos click
buttonEjercicio1.onclick = function () {
  ejercicioUno();
};
buttonEjercicio2.onclick = function () {
  ejercicioDos();
};
buttonEjercicio3.onclick = function () {
  ejercicioTres();
};
buttonEjercicio4.onclick = function () {
  ejercicioCuatro();
};
