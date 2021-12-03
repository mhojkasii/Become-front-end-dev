let x = 5;
x = 5;

let xb = true;
xb = false;

let person = {
    name: "Jan",
    surname: "Kowalski"
}

person.name = "Anna";



person = {
    name: "Tomasz",
    surname: "Marcinkiewicz"
}

let person2 = person;

person2.name = "Marcin";
person.name = "Krzysztof";

console.log(person2);
console.log(person);
