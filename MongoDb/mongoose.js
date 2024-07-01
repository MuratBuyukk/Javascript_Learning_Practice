const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test')
    .then(_ => console.log('connected successfuly'))
    .catch(err => console.log('connection failed: ' + err));


const userSchema =  new mongoose.Schema({
    name : String
});

const User = mongoose.model('User', userSchema);

const usr1 = User({
    name: "Ali"
}); 

usr1.save().then(res => console.log(res)).catch(err => console.log(err.message));
