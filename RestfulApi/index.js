const express = require('express');
require('./db/dbConnection');

const app = express();

app.get('/', (req,res) =>{
    res.json({'message': 'welcome'})
});

app.listen(3000, ()=> {
    console.log('Worked on 3000 port');
});