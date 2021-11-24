var x = 5;
let l = 6;
const c = 7;
l = 7;

// first person
let p1 = {
    name: "Marcin"
}

// sec person 
let p2 = {
    name: "Jan",
    age: 20,
}

p1 = p2;
console.log(typeof(p1) == typeof(p2));

p2.age = 30;
p1.name = "Andrzej";

// p1 = null;
// p2 = null;

console.log(p1);
console.log(p2);
