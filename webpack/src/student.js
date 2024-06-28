import axios from 'axios';

class Student{
    constructor(name){
        this.name = name;
    }

    async sayName(){
        console.log(`Hi, I'am ${this.name}`);
        const result = await axios_default().get('https://jsonplaceholder.typicode.com/users');
    }
}

export default function getStudentName(name){
    return new Student(name).sayName();
}