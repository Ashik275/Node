const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello From my node Ashiqur Rahman Karzon');
});
const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '008929292' },
    { id: 1, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '005669292' },
    { id: 2, name: 'Shraboni', email: 'Shraboni@gmail.com', phone: '0034929292' },
    { id: 3, name: 'Sonia', email: 'Sonia@gmail.com', phone: '008929244' },
    { id: 4, name: 'Sana', email: 'Sana@gmail.com', phone: '0089345442' },
    { id: 5, name: 'Sharukh', email: 'Sharukh@gmail.com', phone: '034529292' },
    { id: 6, name: 'Sai', email: 'Sai@gmail.com', phone: '008923452' },



]



app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);

    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;

    users.push(newUser);



    console.log('Hitting', req.body);
    res.json(newUser)

})















app.get('/users/:id', (req, res) => {
    const index = req.params.id;
    const user = users[index];
    res.send(user);
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Yamy Fazli")
})



app.listen(port, () => {
    console.log('Listening to port', port);
})