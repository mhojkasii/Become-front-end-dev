var person = {
    name: "Jan",
    surname: "Kowalski",
    age: 12
}

// console.log(person);
console.log(person.surname);
console.log(person["surname"]);

person.name = "Anna";
person["surname"] = "Nowak";

console.log(person);

// for/in
for (const key in person) {
    console.log("Key:" + key);
    console.log("Value:" + person[key]);
}