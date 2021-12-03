class Car {
    constructor(VIN, maxSpeed, color) {
        this.VIN = VIN;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
}
const car1 = new Car("1FDBF3E67EEB08868", 200, "red");
const car2 = new Car("KNAGN4AD7E5001050", 180, "blue");
const car3 = new Car("3FAHP0HA2CR197162", 190, "blue");

const cars = [car1, car2, car3];
console.log(cars);

const sortFunction = function (a, b) {
    if (a.maxSpeed == b.maxSpeed) {
        if (a.VIN < b.VIN) {
            return -1;
        } else if (a.VIN > b.VIN) {
            return 1;
        } else {
            return 0;
        }
    }
    else {
        return a.maxSpeed - b.maxSpeed;
    }

}
const sorted = cars.sort(sortFunction);
console.log(sorted);
