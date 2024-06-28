const { log } = require('console');
const path = require('path');
const fs = require('fs');

const pathObj = path.parse(__dirname);
console.log(pathObj.dir);

fs.readdir('./',{withFileTypes:true}, function(err,files){
    if(err) console.log(err);
    console.log(files);
});

