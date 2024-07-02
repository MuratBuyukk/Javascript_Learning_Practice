const express = require('express');
require('./db/dbConnection');
const errorMiddleware = require('./middleware/errorMiddleware.js');
const jwt = require('jsonwebtoken');
const userRouter = require('./router/userRouter.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/users', userRouter);




app.get('/', (req,res) =>{
    res.status(200).json({'message': 'welcome'});
});


app.use(errorMiddleware);


app.listen(3000, ()=> {
    console.log('Worked on 3000 port');
});