const axios = require('axios');


function FindCapitalWeather(country){
    axios.get('https://restcountries.com/v2/name/' + country).then(res =>{
        const apiKey = 'ed302db0b21966adb1c9c203601241d6';
        const language = 'en';
        const units = 'metric';

        const [ {name:countryName, capital:countryCapital , population:countryPopulation} ] = res.data;

        console.log(`country: ${countryName}, capital: ${countryCapital}, population: ${countryPopulation}`);
    
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + countryCapital + '&appid=' + apiKey + '&lang=' + language + '&units=' + units).then(res => {
            const {name, weather, main} = res.data;
            console.log(`The weahter is ${weather.description} in ${name}, and ${main.temp} degree celcius..!`);
        });
    });
}
module.exports = FindCapitalWeather;