let numb = 50;
console.log(numb);
console.log(typeof(numb));

console.log("");

let decimal = 50.25;
console.log(decimal);
console.log(typeof(decimal));

console.log("");

let fName = "Murat";
console.log(fName);
console.log(typeof(fName));

console.log("");

let lName = 'Büyük';
console.log(lName);
console.log(typeof(lName));

console.log("");

let sentence1 = 'Murat\'s book!';
console.log(sentence1);

let sentence2 = "Murat's book!";
console.log(sentence2);

let fullName = fName + ' ' + lName;
console.log(fullName);

//template Litereal - backtick


console.log("");
let fullName2 = `${fName} ${lName}`
console.log("template literal: " + fullName2);
console.log(`template literal: ${fullName2}`);
console.log(`${fName} ${lName}`);


console.log("");
let isTrue = true;
console.log(`isTrue value:  ${isTrue} \nisTrue type :  ${typeof(isTrue)}`);

console.log("");

let age = null;
console.log(`Age value: ${age}\nAge type : ${typeof(age)}`);