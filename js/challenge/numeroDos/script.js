const btnA1 = document.getElementById("btnA1");
const btnB2 = document.getElementById("btnB2");
const btnC3 = document.getElementById("btnC3");
const btnD4 = document.getElementById("btnD4");
const btnE5 = document.getElementById("btnE5");
const btnF6 = document.getElementById("btnF6");
const btnG7 = document.getElementById("btnG7");
const btnH8 = document.getElementById("btnH8");
const btnI9 = document.getElementById("btnI9");
const btnJ0 = document.getElementById("btnJ0");
const btnCL = document.getElementById("btnCL");
const btnCN = document.getElementById("btnCN");


const letrasHTML = document.getElementById("letrasHTML");
const numerosHTML = document.getElementById("numerosHTML");

let letras = "";
let numeros = "";

function pongaLetraNumero(boton) {
  // alert("presionaste el botón:" + boton)

  if (letras.length != 10) {
    if (boton == 1 && boton == letras.length + 1) {
      letras = letras + "A";
    } else if (boton == 2 && boton == letras.length + 1) {
      letras = letras + "B";
    } else if (boton == 3 && boton == letras.length + 1) {
      letras = letras + "C";
    } else if (boton == 4 && boton == letras.length + 1) {
      letras = letras + "D";
    } else if (boton == 5 && boton == letras.length + 1) {
      letras = letras + "E";
    } else if (boton == 6 && boton == letras.length + 1) {
      letras = letras + "F";
    } else if (boton == 7 && boton == letras.length + 1) {
      letras = letras + "G";
    } else if (boton == 8 && boton == letras.length + 1) {
      letras = letras + "H";
    } else if (boton == 9 && boton == letras.length + 1) {
      letras = letras + "I";
    } else if (boton == 10 && boton == letras.length + 1) {
      letras = letras + "J";
    } else {
      alert("Letra incorrecta.");
    }
  } else {
    if (boton == 1 && boton == numeros.length + 1) {
        numeros = numeros + "1";
      } else if (boton == 2 && boton == numeros.length + 1) {
        numeros = numeros + "2";
      } else if (boton == 3 && boton == numeros.length + 1) {
        numeros = numeros + "3";
      } else if (boton == 4 && boton == numeros.length + 1) {
        numeros = numeros + "4";
      } else if (boton == 5 && boton == numeros.length + 1) {
        numeros = numeros + "5";
      } else if (boton == 6 && boton == numeros.length + 1) {
        numeros = numeros + "6";
      } else if (boton == 7 && boton == numeros.length + 1) {
        numeros = numeros + "7";
      } else if (boton == 8 && boton == numeros.length + 1) {
        numeros = numeros + "8";
      } else if (boton == 9 && boton == numeros.length + 1) {
        numeros = numeros + "9";
      } else if (boton == 10 && boton == numeros.length + 1) {
        numeros = numeros + "0";
      } else {
        alert("Numero incorrecto.");
      }
  }

  letrasHTML.innerHTML = letras;
  numerosHTML.innerHTML = numeros;
}

btnA1.onclick = function () {
  pongaLetraNumero(1);
};
btnB2.onclick = function () {
  pongaLetraNumero(2);
};
btnC3.onclick = function () {
  pongaLetraNumero(3);
};
btnD4.onclick = function () {
  pongaLetraNumero(4);
};
btnE5.onclick = function () {
  pongaLetraNumero(5);
};
btnF6.onclick = function () {
  pongaLetraNumero(6);
};
btnG7.onclick = function () {
  pongaLetraNumero(7);
};
btnH8.onclick = function () {
  pongaLetraNumero(8);
};
btnI9.onclick = function () {
  pongaLetraNumero(9);
};
btnJ0.onclick = function () {
  pongaLetraNumero(10);
};

btnCL.onclick = function () {
    letras = "";
    letrasHTML.innerHTML= "";
}

btnCN.onclick = function () {
    numeros = "";
    numerosHTML.innerHTML= "";
}