//1
let second = parseInt(prompt("Enter second"));
console.log(`${second} second is ${Math.floor(second/60)} minute and ${second%60} second.`);

//2
let fahrenheit = parseInt(prompt("Enter fahrenheit"));
console.log(`${fahrenheit} is ${5/9*(fahrenheit-32)} celcius`);

//3
let year =parseInt(prompt("Enter a year"));
let isLeapYear = (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));


console.log(`${year} is ${isLeapYear ? "leap year" : "not leap year"}`);