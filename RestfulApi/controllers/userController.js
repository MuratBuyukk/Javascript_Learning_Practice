const User = require('../models/userModel.js');
const createError = require('http-errors');
const bcrypt = require('bcrypt');


const listAllUsers = async (req, res) =>{
    const allUsers = await User.find({});
    res.json(allUsers);
};

const loginedUserInfo = async (req, res) =>{
    res.json(req.user);
};

const loginedUserUpdate = async (req, res, next) =>{
    delete req.body.createdAt; 
    delete req.body.createdAt;
    // delete req.body.password;
    if(req.body.hasOwnProperty('password')){
        req.body.password = await bcrypt.hash(req.body.password,8);
    }

    const {error, value} = User.joiValidationForUpdate(req.body);
    if(error){
        next(createError(400,error));
    }else{
        try{
            const result = await User.findByIdAndUpdate({_id: req.user._id}, req.body, {new: true, runValidators: true});
            if(result){
                return res.status(200).json(result);
            }else{
                return res.status(404).json({
                    message: 'User not found',
                })
            }
        }catch(err){
            next(err);
        }
    }
};

const getById = async (req, res, next) =>{
    try{
        const result = await User.find({_id: req.params.id});
        res.json(result);
    }catch(err){
        next(createError(400,err));
    }
}

const addUser = async (req, res, next) =>{
    try{
        const user = new User(req.body);
        user.password = await bcrypt.hash(user.password, 8);
        const {error, value} = user.joiValidation(req.body);
        if(error){
            next(createError(400,error));
        }else{
            const result = await user.save();
            res.status(200).json(result);
        }    
    }catch(err){
        next(err);
    }
};

const getLogin = async (req, res, next) => {
    try{
        const user = await User.makeLogin(req.body.email, req.body.password);
        const token = await user.generateToken();
        res.json({
            user,
            token
        });
    }catch(err){
        next(err);
    }
};

const updateUser =  async (req, res, next) =>{
    delete req.body.createdAt; 
    delete req.body.createdAt;
    // delete req.body.password;

    if(req.body.hasOwnProperty('password')){
        req.body.password = await bcrypt.hash(req.body.password,8);
    }

    const {error, value} = User.joiValidationForUpdate(req.body);
    if(error){
        next(createError(400,error));
    }else{
        try{
            const result = await User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true});
            if(result){
                return res.status(200).json(result);
            }else{
                return res.status(404).json({
                    message: 'User not found',
                })
            }
        }catch(err){
            next(err);
        }
    }
}; 

const deleteAll = async (req, res, next) =>{
    try{
        const result = await User.deleteMany({isAdmin: false});
        if(result){
            res.status(200).json({message: 'all users deleted succesfully..!'});
        }else{
            /* 
            const errorObj = new Error('');
            errorObj.errorCode = 404;
            */
            throw createError(404, 'User Not Found..!');
        }
    }catch(err){
        next(createError(400,err));
    }
};

const selfDelete = async (req, res, next) =>{
    try{
        const result = await User.findByIdAndDelete({_id: req.user._id});
        if(result){
            res.status(200).json({message: 'User deleted succesfully..!'});
        }else{
            /* 
            const errorObj = new Error('');
            errorObj.errorCode = 404;
            */
            throw createError(404, 'User Not Found..!');
        }
    }catch(err){
        next(createError(400,err));
    }
};

const deleteUser = async (req, res, next) =>{
    try{
        const result = await User.findByIdAndDelete({_id: req.params.id});
        if(result){
            res.status(200).json({message: 'User deleted succesfully..!'});
        }else{
            /* 
            const errorObj = new Error('');
            errorObj.errorCode = 404;
            */
            throw createError(404, 'User Not Found..!');
        }
    }catch(err){
        next(createError(400,err));
    }
};

module.exports = {
    listAllUsers,
    loginedUserInfo,
    loginedUserUpdate,
    getById,
    addUser,
    getLogin,
    updateUser,
    deleteAll,
    selfDelete,
    deleteUser
}