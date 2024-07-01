const express = require('express');
const joi = require('@hapi/joi');
const router = express.Router();
const users = [
    {id:1, name:'user1', age: 10},
    {id:2, name:'user2', age: 20},
    {id:3, name:'user3', age: 30},
    {id:4, name:'user4', age: 40},
    {id:5, name:'user5', age: 50},
]


router.get('/', (req,res) => {
    console.log('Users page');
    if(req.query.reverse) res.send(users.reverse());
    else res.send(users);
});

router.get('/:id', (req, res)=>{
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(user) res.send(user);
    else res.status(404).send('User not found..!');
});

router.post('/', (req,res) => {
    const validationResult = validateUser(req.body);
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

router.put('/:id', (req,res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) {
        return res.status(404).send(`${req.params.id} user not found`);
    }
    
    const validationResult = validateUser(req.body);
    if(validationResult.error) res.status(404).send(validationResult.error);
    else{
        user.name = req.body.name,
        user.age = req.body.age,
        res.send(user);
    }
});

router.delete('/:id', (req,res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(user) {
        const index = users.indexOf(user);
        users.splice(index,1);
        res.send(user);
    }
    else res.status(404).send('User not found..!');
});

function validateUser (user){
    const schema = joi.object({
        name: joi.string().min(3).max(30).required(),
        age: joi.number().integer().min(18).max(120).required()
    });

    return schema.validate(user);
}

module.exports = router;