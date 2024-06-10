// filter
const plants = [
    { name: "grape", type: "fruit" },
    { name: "strawberry", type: "fruit" },
    { name: "banana", type: "fruit" },
    { name: "spinach", type: "vegetable" },
    { name: "cucumber", type: "vegetable" },
    { name: "rose", type: "flower" },
    { name: "daisy", type: "flower" },
    { name: "daisy", type: "flower" },
];


const fruits = plants.filter(_ => _.type === "fruit");
console.log(fruits);

const vegetables = plants.filter(_ => _.type === "vegetable")
console.log(vegetables);


function ownFilterStructure(array, filterFunction) {
    const newArray = [];
    array.forEach(element => {
        if (filterFunction(element)) newArray.push(element);
    });
    return newArray;
}

const ownFruits = ownFilterStructure(plants, _ => _.type === "flower");
console.log(ownFruits);


// find
const response = plants.find(_ => _.name == "daisy");
console.log(response);


function ownFindStructure(array, findFunction) {
    let result = undefined;
    array.forEach(element => {
        if (findFunction(element)) return element;
    });
    return result;
}

let ownResponse = ownFilterStructure(plants, _ => _.name === "daisy");
console.log(ownResponse);

const numbers = [1, 2, 3, 4, 5];

const everyFunc = numbers.every(_ => _ < 10);
console.log(everyFunc);
const everyFunc2 = numbers.every(_ => _ < 4);
console.log(everyFunc2);
const someFunc = numbers.some(_ => _ < 4);
console.log(someFunc);




