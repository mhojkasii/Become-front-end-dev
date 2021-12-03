class Car {
    constructor(VIN, maxSpeed, color) {
        // _VIN is private
        this._VIN = VIN;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }

    // getter
    get VIN() {
        return this._VIN;
    }

    // setter
    set VIN(value) {
        this._VIN = value;
    }
}

const car1 = new Car("1FDBF3E67EEB08868", 200, "red");

console.log(car1.VIN);
car1.VIN = "XXX";
// car1._VIN = "RRRWWERE";
console.log(car1);
