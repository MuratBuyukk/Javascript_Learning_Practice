const express = require('express');
const app = express();
const joi = require('@hapi/joi');
app.use(express.json());

const users = [
    {id:1, name:'user1', age: 10},
    {id:2, name:'user2', age: 20},
    {id:3, name:'user3', age: 30},
    {id:4, name:'user4', age: 40},
    {id:5, name:'user5', age: 50},
]

app.get('/', (req,res) => {
    console.log('Main page');
    res.send("<h1 style='color: blue' >Main page</h1>");
});

app.get('/users', (req,res) => {
    console.log('Users page');
    if(req.query.reverse) res.send(users.reverse());
    else res.send(users);
});

app.get('/users/:id', (req, res)=>{
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(user) res.send(user);
    else res.status(404).send('User not found..!');
});

app.post('/users', (req,res) => {
    const schema = joi.object({
        name: joi.string().min(3).max(30).required(),
        age: joi.number().integer().min(18).max(120).required()
    });

    const validationResult = schema.validate(req.body);
    if(validationResult.error) res.status(404).send(validationResult.error);
    else{
        const newUser = {
            id: users.length + 1,
            name: req.body.name,
            age: req.body.age
        };
        users.push(newUser);
        res.send(newUser);
    }
});

app.listen(3000, () => {
    console.log('Server worked on 3000 port');
});
