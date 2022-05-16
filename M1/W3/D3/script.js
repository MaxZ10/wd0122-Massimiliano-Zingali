/*let num1 = 15
let num = 20
let num3 = 5

function somma(param1, param2, param3) {
    const result = param1 + param2 + param3;
    return result;
}

function stampa(arg1) {
    console.log('Il risultato è:'+ arg1)
}

let r = somma(num1, num2, num3)
stampa(r)

let num = 25
function func() {
    let str = 'Sono nelle func'
    num = 40
    return str;

let x = func()
console.log(num)
console.log(str) 
*/



function registrati() {
    let nome = document.getElementById('nome').value
    let cognome = document.getElementById('cognome').value
    let email = document.getElementById('email').value
    let eta = document.getElementById('anni').value
}

function stampaUtente(nome, cognome, email, eta){
    
    document.getElementById('detail_name').innerHTML = nome;
    document.getElementById('detail_surname').innerHTML = cognome;
    document.getElementById('detail_email').innerHTML = email; 
    document.getElementById('detail_age').innerHTML = eta;
    document.getElementById('detail_pension').innerHTML = calcPension(eta)
    console.log(nome, cognome, email, eta)
}

function calcPension(eta) {
    let pension = 70 - eta;
    return pension;
}
/* 2 */

function somma() {
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
     let risult = (+number1)+(+number2);
     stampa (risult)
}

function subtraction() {
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
     let risult = (number1)-(number2);
     stampa (risult)
}

function multiplication() {
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
     let risult = (number1)*(number2);
     stampa (risult)
}

function division() {
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
     let risult = (number1)/(number2);
     stampa (risult)
}

function stampa(funzionastampa) {
    console.log("il risultato è: " + funzionestampa)
}

