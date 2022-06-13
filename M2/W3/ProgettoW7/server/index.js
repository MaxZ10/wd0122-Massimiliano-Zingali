
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

let count = 4;
let users = [
    { id: 1, name: 'Mario', lastname: 'Rossi', city: 'London', email: 'm.rossi@gmail.com', password: 'qwerty'},
    { id: 2, name: 'Giuseppe', lastname: 'Verdi', city: 'Roma', email: 'g.verdi@gmail.com', password: '12345'},
    { id: 3, name: 'Antonio', lastname: 'Bianchi', city: 'Milano', email: 'a.bianchi@gmail.com', password: 'abc123'}
];

//GET

app.get('/api/users', (request, response) => {
    response.json(users);
})

app.get('/api/users/:id', (request, response) => {
    const id = request.params.id;
    users.forEach(ele => {
        if(ele.id === +id) {
            response.json(ele);
            return;
        }
    })
})

// POST

app.post('/api/users', (request, response) => {
    const obj = request.body;
    obj.id = count++;
    users.push(obj);
    response.send('Utente Aggiunto nel DB');
})

// PUT
app.put('/api/users/:id', (request, response) => {
    const id = request.params.id;
    const obj_mod = request.body;

 
    let index = users.findIndex(ele => ele.id === +id);
    users.splice(index, 1, obj_mod);



    response.send('Utente Modificato nel DB');
})

// DELETE
app.delete('/api/users/:id', (request, response) => {
    const id = request.params.id;
    
    users = users.filter(ele => ele.id !== +id);
   
    response.send('Utente Eliminato dal DB');
})


app.listen(port, () => console.log('Server attivo sulla porta 3000'))