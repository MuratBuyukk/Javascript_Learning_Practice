let person = {
    name : {firstname : 'Murat', lastName : 'Büyük'},
    favouriteColor: ['yellow', 'Blue'],
    age: 25
};

/*
const {name : {firstname, lastName}} = person;
console.log(firstname, lastName);

const{favouriteColor} = person
console.log(favouriteColor);

const {favouriteColor : [color1,color2]} = person;
console.log(color1);
*/

const {name : {firstname,lastName}, favouriteColor : [color1,color2], age} = person;
console.log(firstname, lastName, color1, color2 , age);