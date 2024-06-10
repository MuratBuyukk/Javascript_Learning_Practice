//SORT
const names = ['emre', 'ali', 'hasan', 'ayse'];

const numbers = [1, 50, 2, 41,41, 84, 8, 35, 3];

const students = [
    {id : 12, name : 'emre', age : 25}, //a a.name = 'emre', b.name = 'hasan' => 'emre' - 'hasan'
    {id : 22, name : 'hasan', age : 15}, //b
    {id : 32, name : 'fatma', age : 55},
    {id : 13, name : 'nuriye', age : 19},
    {id : 92, name : 'kemal', age : 45},
    {id : 15, name : 'mustafa', age : 75},
    {id : 44, name : 'ceren', age : 30},
];

console.log(names.sort());
console.log(names.sort().reverse());

const sortedNumbers = numbers.sort((a,b) => a-b );
console.log(sortedNumbers);

const reverseSortedNumbers = numbers.sort((a,b) => b-a );
console.log(reverseSortedNumbers);

const studentsSortedByName = students.sort((a,b) => {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0; 
})

//COPY
console.log(studentsSortedByName);

let temp = Array.from(names);
temp.sort();
console.log(names);
console.log(temp);
//SPREAD
let copy = [...names];
console.log(copy);
let copy2 = [...names, ...numbers];
console.log(copy2);

let fname = "murat buyuk";
let charArray = [...fname];
console.log(charArray);  

function sum(...param){
    const result = param.reduce(function (prev,curr,index){
        return prev += curr;
    },0);
    return result;
}

console.log(sum(1,2,5,11,21));
