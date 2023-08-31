/* Condicionales
/
 
Operadores de comparación
(==) comparamos valores sin importar el tipo de dato
(===) comparamos valores respetando el tipo de dato
(>) Mayor que
(<) Menor que
(>=) Mayor igual
(<=) Menor igual
(!=) Diferente no respeta tipos de datos
(!==) Diferente respetando tipo de datos
*/

/*Operadores logicos
(||) - O cualquiera de las condiciones es valida
(&&) - Y si o si se deben cumplir todas las condiciones
*/

// Declaramos la virable edad
const age = prompt("Ingresa tu edad");
const country = prompt("Ingresa tu pais").toLowerCase();

// Condicional if/else "16"
if (age >= "16" && country !== "alemania") {
  alert("Se habilito el catalogo de peliculas violentas");
} else {
  alert("No tienes permiso de ver este catalogo");
}

// 
/**
 
NOTA: 
Mayusculas (X)
Tildes ()
Vacios ()
nulos ()
Convertir tipos de datos ()
*/