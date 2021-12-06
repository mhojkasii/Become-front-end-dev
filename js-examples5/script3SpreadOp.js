const arr = [1, 2, 3, 4, 5, 6, 7, 5, 8,];

const arrCopy = [...arr];

arr[0] = 22;
arrCopy[0] = 33;

// console.log(arr);
// console.log(arrCopy);


class Car {
    constructor(VIN, maxSpeed, color, dealerId) {
        this.VIN = VIN;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
}

const car1 = new Car("1FDBF3E67EEB08868", 200, "red");

const carCopy = {...car1};

car1.maxSpeed = 300;
carCopy.maxSpeed = 100;

console.log(car1);
console.log(carCopy);