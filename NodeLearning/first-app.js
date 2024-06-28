const mod = require('./module.js');
const pc = require('./pc_info.js');
function sayHi(){
    console.log('Hello World...!!');

    global.console.log('Global/Hello World...!!');
}

sayHi();
console.log(mod.name);
mod.sum(2,2);
console.log(mod.student.name);
console.log(mod.student.age);

pc.info();



