const yargs = require('yargs');
const person = require('./person.js');

yargs.version('1.5.3');

yargs.command({
    command: 'add',
    describe: 'add new value',
    builder: {
        name: {
            describe: 'name',
            demandOption: true,
            type: 'string'
        },
        tel: {
            describe: 'tel',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        person.addPerson(argv.name, argv.tel);
    }
});

yargs.command({
    command: 'delete',
    describe: 'delete value',
    builder: {
        name: {
            describe: 'name',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        person.deletePerson(argv.name);
    }
});

yargs.command({
    command: 'show',
    describe: 'show selected value',
    builder: {
        name: {
            describe: 'name',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        person.showPerson(argv.name);
    }
});


yargs.command({
    command: 'list',
    describe: 'list all values',
    handler(argv){
        person.listPerson();   
    }
});




yargs.parse();