var person = {
    name: "Jan",
    surname: "Kowalski",
    age: 12
}

console.log(person);
console.log(person.surname);
console.log(person["surname"]);

person.name = "Anna";
person["surname"] = "Nowak";

person.key

console.log(person);

for (const key in person) {
    console.log("Key:" + key);
    console.log("Value:" + person[key]);
}