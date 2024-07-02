const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    name: {
        type : String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    userName: {
        type : String,
        required: true,
        unique: true,
        trim: true,
        lowecase: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type : String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
    },
    password: {
        type : String,
        required: true,
        trim: true,
    }
},{collection: 'users', timestamps: true});

const schema = Joi.object({
    name: Joi.string().min(3).max(50).trim(),
    userName: Joi.string().min(3).max(50).trim(),
    email: Joi.string().trim().email(),
    password: Joi.string().trim(),
});

UserSchema.methods.generateToken = async function(){
    const user = this;
    const token = await jwt.sign({_id: user.id, email: user.email}, 'secretkey', {
        expiresIn: '1h'
    });
    return token;
};

UserSchema.methods.joiValidation = function(user){
    schema.required();
    return schema.validate(user);
}

UserSchema.methods.toJSON = function(){
    const user = this.toObject();
    delete user._id;  
    delete user.createdAt;  
    delete user.updatedAt;  
    delete user.password;  
    delete user.__v;  

    return user;
}

UserSchema.statics.makeLogin = async (email, password) => {
    const {error, value} = schema.validate({email, password});
    
    if(error){
        throw createError(400, error);
    }


    const user = await User.findOne({ email});
    if(!user){
        throw createError(400, "Invalid Password Or Email");
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword){
        throw createError(400, "Invalid Password Or Email");
    }

    return user;
}

UserSchema.statics.joiValidationForUpdate = function(user){
    return schema.validate(user);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;