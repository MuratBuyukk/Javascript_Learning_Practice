const person = {
    name: 'murat',
    lastname: 'büyük',
    ['full-name']: 'Murat Büyük',
    age: 25,
    favoriteColor: 'darkblue',
    adress: {
        city: 'Istanbul',
        plate: 34,
    },
    showPersonalInformation: function(){
        return `His/Her name is ${this["full-name"]}, and He/she is ${this.age} years old.`;
    },
    
};

console.log(person.showPersonalInformation());
console.log(person.adress.plate);
console.log(person['full-name']);

// factory function
function createStudent(_name, _age, _isMarried, _school ){
    return {
        name: _name,
        age: _age,
        isMarried: _isMarried,
        school: _school,
        showStudentInformation: function(){
            return `name: ${this.name}, age:${this.age}, is married?:${this.isMarried}, school:${this.school}`;
        }
    };
}


const murat = createStudent('murat',25,false,'Işık Universtiy');
console.log(murat);
console.log(murat.showStudentInformation());

function Student(name, age, isMarried, school){
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
}

Student.prototype.school = "Işık University";
Student.prototype.showStudentInformation = function(){
    return `name: ${this.name}, age:${this.age}, is married?:${this.isMarried}, school:${this.school}`;
};

const kerem = new Student('kerem', 20, false);
console.log(kerem);
console.log(kerem.showStudentInformation());
console.log(kerem.constructor.prototype);
console.log(Object.getPrototypeOf(kerem));
//console.log(kerem.constructor);


