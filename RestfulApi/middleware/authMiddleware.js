const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const auth = async (req, res, next)=>{ 

    try {
        if (req.header('Authorization'))
        {
            const token = req.header('Authorization').replace('Bearer ', '');
            const sonuc = jwt.verify(token, 'secretkey');
          
            const user = await User.findById({ _id: sonuc._id });

            if (user)
                req.user = user;
            else {
                throw new Error('Please Login');
            }
            next();
        } else {
            throw new Error('Please Login');
        }
    } catch (e) {
        next(e);
    }

}

module.exports = auth;