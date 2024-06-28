function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function(){
    return `Hi, I'am ${this.firstName} ${this.lastName}`
}
const person = new Person('murat', 'büyük');
console.log(person.sayHi());

function Student(firstName,lastName,studentClass){
    Person.call(this, firstName, lastName);
    this.studentClass = studentClass
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.SayClass = function(){
    return `I'am ${this.studentClass}th class student`;
}
const student = new Student('aleyna','azaplar', 5);
console.log(student.sayHi());
console.log(student.SayClass());