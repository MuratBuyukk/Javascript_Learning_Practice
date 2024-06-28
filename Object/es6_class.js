class Person{
    static counter = 0;

    constructor(firstName,lastname){
        this.firstName = firstName;
        this._lastname = lastname;
        Person.counter++;
    }

    get lastnameGet(){
        return this._lastname;
    }

    set lastnameSet(lastname){
        this._lastname = this.lastname;
    }

    sayHi(){
        return `Hi I'am ${this.firstName + " " + this.lastname}`;
    }

    static test(){
        console.log('static method test');
    }
}

class Student extends Person{s
    constructor(firstName,lastname,studentClass){
        super(firstName,lastname);
        this.studentClass = studentClass;
    }
    
    getStudentClass(){
        return `${this.studentClass}th class`;
    }

    sayHi(){
        return `Hi I'am ${this.firstName + " " + this.lastname}, I'am ${this.studentClass}th  student`;
    }
}

const person1 = new Person('Murat', 'Büyük');
console.log(person1.sayHi());

const student1 = new Student('Murat', 'Büyük', 4);
console.log(student1.getStudentClass());
console.log(student1.sayHi());

console.log(Person.counter);
Person.test();

person1.lastnameSet = 'asdsad';
console.log(person1.lastnameGet);