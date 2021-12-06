class Car {
    constructor(VIN, maxSpeed, color, dealerId) {
        this.VIN = VIN;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
}
const car1 = new Car("1FDBF3E67EEB08868", 200, "red");
const car2 = new Car("KNAGN4AD7E5001050", 180, "blue");
const car3 = new Car("3FAHP0HA2CR197162", 190, "blue");
const car4 = new Car("3LNHL2GCXCR800598", 150, "green");
const car5 = new Car("SALSH23476A937872", 140, "yellow");
const car6 = new Car("4S4BRCAC5D3234384", 190, "green");

const cars = [car1, car2, car3, car4, car5, car6];

function speedFilter(car, i, arr) {
    if (car.maxSpeed > 170) {
        return true;

    }
    return false;
}

function VINFilter(car, i, arr) {
    if (car.VIN.startsWith('3')) {
        return true;
    }
    return false;
}

function increaseSpeed(car, i, arr) {
    car.maxSpeed += 30;

    return car;
}

const mapArr = cars.map(increaseSpeed);
const filteredArr1 = mapArr.filter(VINFilter);
const filteredArr2 = filteredArr1.filter(speedFilter);
console.log(filteredArr2);

const newCars = cars.map(increaseSpeed).filter(VINFilter).filter(speedFilter);

console.log(newCars);