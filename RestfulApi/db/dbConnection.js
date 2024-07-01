const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful_api')
    .then(() => console.log("connected successfuly"))
    .catch(err => console.log("connection error: " + err));