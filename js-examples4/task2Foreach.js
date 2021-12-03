class Car {
    constructor(VIN, maxSpeed, color) {
        this.VIN = VIN;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
}

// red: #ff0000
// blue: #0000ff
// yellow: #ffff00

const car1 = new Car("1FDBF3E67EEB08868", 200, "red");
const car2 = new Car("KNAGN4AD7E5001050", 180, "blue");
const car3 = new Car("3FAHP0HA2CR197162", 190, "blue");
const car4 = new Car("3VWDP7AJ5CM433339", 210, "yellow");

const cars = [car1, car2, car3, car4];

// car.colorHex // #ff0000
// Car { VIN: '1FDBF3E67EEB08868', maxSpeed: 200, color: 'red', colorHex: '#ff0000'  },
console.log(cars);