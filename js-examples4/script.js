// const arr = [1,2,3,4,5,6];

// const resultArr = arr.map(function(value, index, array){
//     if(index == 0){
//         return value;
//     } else {
//         return value + array[index - 1];
//     }
//     // return value + 20;
// })

// console.log(resultArr);

//////////////////////////////////////////

class Car {
    constructor(VIN, maxSpeed, color, dealerId) {
        this.VIN = VIN;
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.dealerId = dealerId; //1,2
    }
}
const car1 = new Car("1FDBF3E67EEB08868", 200, "red");
const car2 = new Car("KNAGN4AD7E5001050", 180, "blue");
const car3 = new Car("3FAHP0HA2CR197162", 190, "blue");

const cars = [car1, car2, car3];

// function add20(c){
//     return c;
// }

// const cars2 = cars.map(add20);

// 1. named function
/*
function add20(value){
    value.maxSpeed += 20;
    return value;
}

const cars2 = cars.map(add20);

*/
// 2. anonymous function
/*
const cars2 = cars.map(function(value){
    value.maxSpeed += 20;
    return value;
});
*/

// arrow function
const add20 = (value) => {
    value.maxSpeed += 20;

    return value;
}

const cars2 = cars.map(add20);

console.log(cars2);