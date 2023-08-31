const buttonReto1 = document.getElementById ("buttonReto1"); 
const buttonReto2 = document.getElementById ("buttonReto2"); 
const buttonReto3 = document.getElementById ("buttonReto3");
const buttonReto4 = document.getElementById ("buttonReto4");
const buttonReto5 = document.getElementById ("buttonReto5");
const buttonReto6 = document.getElementById ("buttonReto6");
const buttonReto7 = document.getElementById ("buttonReto7");

function ejercicioUno() {
    const frutas = ["Manzana", "Banana", "Naranja", "Cereza", "Zapote"];

    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);  
    }
}
function ejercicioDos() {
    const frutas = ["Manzana", "Banana", "Naranja", "Cereza", "Zapote"];
    
    frutas.forEach(e => {
       alert(e);
    });
    
}

function ejercicioTres() {
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

function ejercicioCuatro() {
const numerMayor = [45, 23, 67, 89, 10, 105, 3, 12, 56];
let numeroMasGrande = numerMayor[0];

for (let i = 1; i < numerMayor.length; i++) {
  if (numerMayor[i] > numeroMasGrande) {
    numeroMasGrande = numerMayor[i];
  }
}
console.log("El número más grande es: " + numeroMasGrande);
}

function ejercicioCinco() {
    const sumaArray = [2, 4, 6, 8, 10, 12, 14, 16, 18]
    let suma =0;
    sumaArray.forEach(e => {
        suma += e;
    });
    alert("La suma de los array es: " + suma)
}

function ejercicioSeis() {
const numeros = [3, 7, 2, 8];
const numeros2 = [];

for (let i = 0; i < numeros.length; i++) {
  numeros2.push(numeros[i] * 2);
}

alert("Array original:" + numeros);
alert("Nuevo array: " + numeros2);
}

function ejercicioSiete() {
    const numeros = [1, 4, 7, 3, 10, 12, 20, 18, 5, 2];
    let sumaPares = 0;
numeros.forEach(function(e) {
  if (e % 2 === 0) {
    sumaPares += e;
  }
});

console.log("La suma de los elementos pares es: " + sumaPares);
}


buttonReto1.onclick = function () {
    ejercicioUno();
}
buttonReto2.onclick = function () {
    ejercicioDos();
}
buttonReto3.onclick = function () {
    ejercicioTres();
}
buttonReto4.onclick = function () {
    ejercicioCuatro();
}
buttonReto5.onclick = function () {
    ejercicioCinco();
}
buttonReto6.onclick = function () {
    ejercicioSeis();
}
buttonReto7.onclick = function () {
    ejercicioSiete();
}