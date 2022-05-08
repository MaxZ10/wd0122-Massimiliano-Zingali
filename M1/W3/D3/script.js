var nome="Mario"
console.log(nome);
document.write(nome)

var anni = '30'
var luogo = 'Roma'

console.log(nome+anni+luogo)

anni=27
anni=35
console.log(anni)

/* Let e const */

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

/* error */

var numeri= 20

{
    const numeri = 15
}
consol.log(numeri);

