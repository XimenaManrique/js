// Logica y algoritmos
let userName = ""
let age = ""
let address = ""
let marital = ""
let identification = ""
let iphone = ""
let email = ""
let salary =""

function registerData() {
    userName = prompt("Ingresa tu nombre") 
    age = prompt("Ingresa tu edad")
    address = prompt("Ingresa tu dirección")
    marital = prompt("Ingresa tu estado civil")
    identification= prompt("Ingresa tu número de documento")
    iphone = prompt("Ingresa tu número de celular")
    email = prompt ("Ingresa tu correo electronico")
    salary = prompt("Ingresa tu salario")
}

function showData() {
    alert("Tu nombre es: " + userName + " tu edad es: " + age + "tu dirección es: " + address + "tu estado civil es" + marital + "Tu documento es: " + identification)
}