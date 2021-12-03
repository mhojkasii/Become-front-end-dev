class Car {
    constructor(VIN, maxSpeed, color) {
        this.VIN = VIN;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }

    info() {
        console.log("VIN: " + this.VIN + " color: " + this.color);
    }
}

class SportCar extends Car {
    constructor(VIN, maxSpeed, color, hasSpoiler){
        super(VIN, maxSpeed, color);
        this.hasSpoiler = hasSpoiler;
    }

    info2() {
        console.log("VIN: " + this.VIN + " color: " + this.color + ' -> sport car');
    }
}

class SuperSportCar extends SportCar{

}

class TruckCar extends Car {

}

const car1 = new Car("1FDBF3E67EEB08868", 200, "red");
const carSport = new SportCar("asdfsadfasdfsadf", 200, "red", true);

car1.info();
carSport.info();
carSport.info2();
console.log(carSport instanceof SportCar) // true
console.log(carSport instanceof Car) // true
// car1.info2(); // exception



// class Button extends Component {
    
// }

// class String extends Object {
//     //toUpperCase()
// }

// class Date extends Object {
//     //getMinutes()
// }