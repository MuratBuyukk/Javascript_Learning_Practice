const errorCatcher = (err, req, res, next) =>{
    console.log(err);
    if(err.code === 11000){
        return res.json({
            Message: Object.keys(err.keyValue) + " must be unique",
            ErrorCode: 400
        })
    }

    if(err.code === 66){
        return res.json({
            Message: " id value cannot update..!",
            ErrorCode: 400
        })
    }

    res.status(err.statusCode || 500);
    res.json({
        ErrorCode : err.status || 500,
        Message: err.message
    });
};

module.exports = errorCatcher;