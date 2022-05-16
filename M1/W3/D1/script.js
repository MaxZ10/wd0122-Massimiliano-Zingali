/* 
var nome="Mario"
console.log(nome);
document.write(nome)

var anni = '30'
var luogo = 'Roma'

console.log(nome+anni+luogo)

anni=27
anni=35
console.log(anni)

 Let e const 

var nome = 'Mario'
console.log(nome)

{
    var nome = 'Carla'
}
console.log(nome);

var nome='Mario'
{
    let nome = 'Carla'
}
console.log(nome)

const numero=100
numero = 150

error 

var numeri= 20

{
    const numeri = 15
}
consol.log(numeri);

*/

alert("Welcome to my web site")
var nome = prompt('Inserisci il tuo nome')
var cognome = prompt('Inserisci il tuo cognome')
var eta = prompt('Inserisci la tua età')
var citta = prompt('Inserisci la tua città')
var email = prompt('Inserisci la tua email')

var fullname = nome+' '+cognome+' anni '+eta+' di '+citta+' ('+email+')';

alert(fullname)
document.write(fullname)
console.log(fullname)