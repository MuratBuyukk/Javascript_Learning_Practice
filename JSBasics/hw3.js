//1
const cities = [
    {name: "Istanbul", plateNo: 34, negihbours:["Ankara","Izmir"]},
    {name: "Paris", plateNo: 82, negihbours:["Lyonnais","Marseilla"]},
    {name: "Madrid", plateNo: 83, negihbours:["Valencia","Barcelona"]},
    {name: "Londra", plateNo: 84, negihbours:["Liverpool","Manchester"]}
];

const sortCitiesByName = cities.sort((a,b)=>{
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
});
console.log(sortCitiesByName);

//2
const fibonacci = function(number){
    const result = [0,1];
    for(let i = 2; i<number; i++){
        temp = result[i-1] + result[i-2]
        if(temp>number) break; 
        result[i] = temp;
    }
    console.log(result);
}

fibonacci(80);

//3
const students = [
    {fname:"Murat", lname:"Büyük", id:1},
    {fname:"Aleyna", lname:"Azaplar", id:2},
    {fname:"Kerem", lname:"Pars", id:3},
    {fname:"Aden", lname:"Gedik", id:4}
]

const filterStudents = students.filter((student) => student.id % 2 === 0)
    .map((student) => `${student.fname}${student.lname}`)
    .sort();
console.log(filterStudents);