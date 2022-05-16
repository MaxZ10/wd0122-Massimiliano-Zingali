function func1() {
    console.log('Questa è una dichiarazione di funzione')
}

let func2 = function() {
    console.log('Questa è una funzione espressiva')

}

/*(function() {
    console.log('Questa è una funzione invoca')
})(func2)*/

function func3() {
    let name = 'Mario Rossi'
    function innerFunc() {
        let email = 'm.rossi@gmail.com';
        return 'Ciao sono' +name+' la mia email è '+ email
    }
    innerFunc()
}

le

