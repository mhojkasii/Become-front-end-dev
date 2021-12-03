function Person(name, surname, age, department){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.department = department;

    // function
    this.fullName = function(){
        return this.name + " " + this.surname;
    }
}

var person = new Person("Jan", "Kowalski", 24, "IT");

console.log(person);

console.log(person.fullName());

// adding to array
var arr = [new Person("Jan", "Kowalski", 24, "IT"), new Person("Anna", "Nowak", 25, "HR")];
console.log(arr);