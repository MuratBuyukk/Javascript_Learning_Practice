const admin = (req, res, next) =>{
    if(!req.user.isAdmin) 
    {
        res.status(403).json({
        message: 'Access denied, you are not authorized'
        });
    }
    next();
};

module.exports = admin;