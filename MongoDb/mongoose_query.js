const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test')
    .then(_ => console.log('connected successfuly'))
    .catch(err => console.log('connection failed: ' + err));

const userSchema = new Schema({age: Number}, {collection: 'kullanici'});
const User = mongoose.model('user', userSchema);
/*
User.find(
    {age: 23}, 
    {name:1,company:1, _id:0}, 
    {limit:3, skip:2})
    .sort({name: -1})
    .then(allUsers => console.log(allUsers))
    .catch(err => console.log(err));

User.find({age:23})
    .limit(3)
    .skip(2)
    .sort({name:-1})
    .select({name:1,company:1,_id:0})
    .then(res => console.log(res))
    .catch(err => console.log(err));


User.findById('6682be6b3197b8dfc7a72739')
    .then(user => console.log(user))
    .catch(err => console.log(err));


// eq: equal
// ne: not equal
// globalThis, gte, lt, lte, in, nin

User.findOne({age:23})
    .select({name:1,company:1,_id:0})
    .then(res => console.log(res))
    .catch(err => console.log(err));

User.find(
    {age: {$gte:25, $lte:35}},
    {name: 1, age:1, _id:0})
    .then(users => console.log(users));

User.findByIdAndUpdate('6682be6b3197b8dfc7a7273f', {age: 35}, {new: true}).then(res => console.log(res)).catch(err => console.log(err));


User.deleteMany({index: {$lte : 3}})
    .then(res => console.log(res));

    
User.find()
    .countDocuments()
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/    