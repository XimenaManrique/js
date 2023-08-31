const btnEjercicioUno = document.getElementById("buttonEjercicio1");
const btnEjercicioDos = document.getElementById("buttonEjercicio2");
const btnEjercicioTres = document.getElementById("buttonEjercicio3");
const btnEjercicioCuatro = document.getElementById("buttonEjercicio4");
const btnEjercicioCinco = document.getElementById("buttonEjercicio5");
const btnEjercicioSeis = document.getElementById("buttonEjercicio6");
const btnEjercicioSiete = document.getElementById("buttonEjercicio7");
const btnEjercicioOcho = document.getElementById("buttonEjercicio8");
const btnEjercicioNueve = document.getElementById("buttonEjercicio9");



/**
 * Ejercicio 1:
 * Ciclo FOR
 */
function ejercicioUno() {
  const asteriscos = parseInt(prompt("Ingresa número de astericos"));
  let resultado = "";
  if (asteriscos >= 100) {
    alert("Ingresa un dato menor a 100");
  }
  // index siempre inicia en 0  -  i = i + 1
  for (let i = 0; i < asteriscos; i++) {
    resultado += "*"; // SEpuede poner tambien resultado = resultado += "*"
  }
  console.log(resultado);
}
/**
 * Ejercicio 2
 * FOR
 */
function ejercicioDos() {
  //  Pedir los niveles
  const niveles = parseInt(prompt("Ingrese los niveles de la piramide"));

  if (niveles > 20) {
    return alert("Debe ser menor de 20 o menor los niveles");
  }
  // Validamos si es  diferente a un numero
  if (isNaN(niveles)) {
    alert("Porfavor ingrese un numero del 1 al 20");
  } else {
    //Colocar los niveles de la piramide
    for (let i = 0; i < niveles; i++) {
      let espacio = " "; //Asigna espacio  en la piramide
      //Poner espacios en blanco
      for (let J = 0; J < niveles - i; J++) {
        espacio += " ";
      }
      //poner astericos
      for (let k = 0; k < 2 * i - 1; k++) {
        espacio += "*";
      }
      console.log(espacio);
    }
  }
}
/**
 * Ejercicio 3
 * FOR
 */
function ejercicioTres() {
  const tabla = parseInt(prompt("Ingrese el número de la tabla que desea ver"));

  for (let i = 0; i <= 10; i++) {
    console.log(tabla + " x" + i + " = " + tabla * i);
  }
}

/**
 * Ejercicio 4
 * FOR
 */

function ejercicioCuatro() {
  //Lista de animales
  const animales = ["Perro", "Gato", "Lobo", "Serpiente", "Conejo"];
  // mostrar el contenido array
  alert("lista de animales: " + animales);
  alert("cantidad de animales: " + animales.length);
  console.log(animales);
  // recorrer el array
  let animal = "";
  let validar = false;
  for (let I = 0; I < animales.length; I++) {
    animal = animales[I];
    if (animal === "Conejo") {
      validar = true;
      return alert("Si esta el animal");
    }
  }
  if (!validar) {
    alert("No esta el animal");
  }
}
/**
 * Ejercicio 5
 * FOR
 */

function ejercicioCinco() {
  const animales = ["Perro", "Gato", "Lobo", "Serpiente", "Conejo"];

  //Cuando necesitamos recorrer todo el array
  animales.forEach((e) => {
    console.log(e);
  });
}
/**
 * Ejercicio 6
 * FOR
 */

function ejercicioSeis() {
  //Array 6 personas
  const personas = ["Ana", "Diana", "Cilena", "Selena", "Maria", "Ximena"];
  console.log(personas);
  //Agregar persona nueva en el array (en la ultima posición)
  personas.push("Paca");
  console.log("paso 2", personas);
  personas.push("Sara");
  console.log("Paso 3", personas);
  //Eliminar el ultimo array
  personas.pop();
  console.log("Paso 4", personas);
  //agregar elementos al inmicio del array
  personas.unshift("Karen");
  console.log(("Paso 5", personas));
  // Eliminar el primer elemento de un array
  personas.shift();
  console.log("Paso 6", personas);
  //Eliminar un elemento cualquiera del array
  personas.splice(2, 2);
  console.log("Paso 6", personas);
  // Nuevo array
  const colores = [
    "amarillo",
    "azul",
    "anaranjado",
    "aguamarina",
    "blanco",
    "negro",
  ];
  const nuevoArray = personas.concat(colores);
  console.log("Paso 8", nuevoArray);

  //
  personas.forEach((e) => {
    console.log(e);
  });
  //For normal
  for (let i = 0; i < personas.length; i++) {
    console.log(personas[i]);
  }
}

/**
 * Ejercicio 7
 * FOR Array
 */

function ejercicioSiete() {
  const personas = ["Ana", "Diana", "Cilena", "Selena", "Maria", "Ximena"];
  //Mostrar todas las personas en el HTML
  const listaPersonas = document.getElementById("personas");
  listaPersonas.innerHTML = "Lista personas:" + personas;

  //Mostrar persona por persona (interpolacion)
  const listaPersonasDiv = document.getElementById("listaPersonas");
  let listaPersonasHTML = "";
  personas.forEach((e) => {
    listaPersonasHTML += `<h2>${e}</h2>`;
  });
  listaPersonasDiv.innerHTML = listaPersonasHTML;
}
/**
 * Ejercicio 8
 * FOR Array
 */
function ejercicioOcho() {
  let contador = 10

  while (contador < 10) {
  console.log(`Numero : ${contador}`);
  contador++; //Contador = contador +1
  }

  //respuesta correcta
  let respuesta = prompt("Ingrese la capital del quindio")
  respuesta = respuesta.toLocaleLowerCase

  while (respuesta !== "armenia"){
    alert("Intentalo de nuevo")
    respuesta = prompt("ingresa la capital del quindio").toLowerCase();
  }

}
/**
 * Ejercicio 9
 * Do while
 */
function ejercicioNueve() {
  let contador = 10;

  do {
    console.log(`Numero : ${contador}`);
    contador++; //Contador = contador +1
  }
    while (contador < 10) {
      
    }

 }

/**
 * Eventos click
 * es lo mismo que tener en el html onclick="exerciseOne()"
 */
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
buttonEjercicio5.onclick = function () {
  ejercicioCinco();
};
buttonEjercicio6.onclick = function () {
  ejercicioSeis();
};
buttonEjercicio7.onclick = function () {
  ejercicioSiete();
};
buttonEjercicio8.onclick = function () {
  ejercicioOcho();
};
buttonEjercicio9.onclick = function () {
  ejercicioNueve();
};
