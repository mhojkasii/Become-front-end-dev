// var person = {
//     name: "Jan",
//     surname: "Kowalski",
//     age: 25
// }

// var person2 = {
//     name: "Anna",
//     surname: "Nowak",
//     age: 27
// }

// var personArr = [person, person2];

// console.log(personArr);

function Person(name, surname, age, department){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.department = department;
}

var person = new Person("Jan", "Kowalski", 24, "IT");
console.log(person);

class PersonClass {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

var personClass = new PersonClass("Jan", "Kowalski", 34);
console.log(personClass);

// initialize objects - use new
// var string = "sample text";
// var string = new String("sample text");
// var date = new Date();
// class Car {

// }

// new Car();

// Excercise
// Car 
// - maxSpeed
// - VIN
// - color
