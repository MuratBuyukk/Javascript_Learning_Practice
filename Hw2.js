let generatedNumber = Math.floor(Math.random() * 90 + 10);
alert(`Lucky number is ${generatedNumber}`)
let userNumber = parseInt(prompt("Enter number"));

let firstGenRank = Math.floor(generatedNumber/10);
let secondGenRank = generatedNumber % 10;
console.log(`gen number ${firstGenRank} ${secondGenRank}`);
let firstUsrRank = Math.floor(userNumber/10);
let secondUsrRank = userNumber % 10;
console.log(`usr number ${firstUsrRank} ${secondUsrRank}`);

if(generatedNumber === userNumber) alert("You won 10000");
else if(firstGenRank === secondUsrRank 
    && secondGenRank === firstGenRank) alert("you won 5000");
else if(firstGenRank === firstUsrRank 
    || firstGenRank === secondUsrRank
    || secondGenRank === firstUsrRank
    || secondGenRank === secondUsrRank) alert("you won 1000");
else alert("you lost");    

