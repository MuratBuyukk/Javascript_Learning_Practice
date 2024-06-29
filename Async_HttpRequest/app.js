const https = require('https');
const capitalWeather = require('./capital-weather.js');
const yargs = require('yargs');


yargs.command({
    command: 'get',
    describe: 'enter country name for getting weather for country capital.',
    builder: {
        country: {
            describe: 'name',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        capitalWeather(argv.country);
    }
});

yargs.parse();


// https.get('https://restcountries.com/v3.1/name/country',(response)=>{
//     let data = '';
//     response.on('data', chunk => {
//         data += chunk;
//     });

//     response.on('end', () => { 
//         const jsondData = JSON.parse(data);
//         console.log(jsondData[0].name);
//     });
// }).on('error',err =>{
//     console.log(err);
// });    





