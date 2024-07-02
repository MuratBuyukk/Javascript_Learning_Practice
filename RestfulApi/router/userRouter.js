const  router = require('express').Router();
const User = require('../models/userModel.js');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const authMiddleware = require('../middleware/authMiddleware.js');

router.get('/', async (req, res) =>{
    const allUsers = await User.find({});
    res.json(allUsers);
});

router.patch('/me', authMiddleware , async (req, res) =>{
    res.json(req.user);
});

router.get('/me', authMiddleware , async (req, res) =>{
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
});

router.get('/:id', (req, res) =>{
    res.json({message : `id: ${req.params.id}, user listed...!`});
});

router.post('/', async (req, res, next) =>{
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
});

router.post('/login', async (req, res, next) => {
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
});

router.patch('/:id', async (req, res, next) =>{
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
});

router.delete('/:id', async (req, res, next) =>{
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
});


module.exports = router;