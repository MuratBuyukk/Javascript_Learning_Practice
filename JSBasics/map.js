const numbers = [1,2,3,4,5,6];
console.log(numbers);

const newNumbers = numbers.map(function (number){
    return number *2;
});
console.log(newNumbers);

const books = [
    {name: "book1", pagecount: 50},
    {name: "book2", pagecount: 60},
    {name: "book3", pagecount: 30}
]

const pageCounts = books.map(function(book){
    return book.pagecount;
});

console.log(pageCounts);

const persons = [
    {name: "Murat", surname:"Büyük", age:25},
    {name: "Aleyna", surname:"Azaplar", age:24},
    {name: "Kerem", surname:"Gedik", age:5}
];

const personNames = persons.map((person) => `${person.name} ${person.surname}`);
console.log(personNames);

function ownMapStructure(array, operation){
    const newArray = [];

    for(let i = 0; i<array.length; i++){
        newArray.push(operation(array[i]));
    }

    return newArray;
}

const newArray = ownMapStructure(numbers, function(number){
    return number * 5;
});

console.log(newArray);