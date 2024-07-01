const express = require('express');
const app = express();
const userRouter = require('./router/user_router.js');
const mainRouter = require('./router/main_router.js');
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(morgan("tiny"));
app.use('/users', userRouter);
app.use('/', mainRouter);


app.listen(3000, () => {
    console.log('Server worked on 3000 port');
});

app.use((req,res) => {
    res.status(404).send("page not found");
});
