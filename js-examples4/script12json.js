class Car {
    constructor(VIN, maxSpeed, color) {
        this.VIN = VIN;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
}

const car1 = new Car("1FDBF3E67EEB08868", 200, "red");

const jsonContent = JSON.stringify(car1);
console.log(jsonContent);

const car2 = JSON.parse(jsonContent);

console.log(car2);