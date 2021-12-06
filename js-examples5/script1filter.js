const arr = [1, 2, 3, 4, 5, 6, 7, 5, 8,];

const limit = 4;

const newArray = arr.filter(function (element, index, numbers) {

    if(index > limit){
        return false;
    }

    if (element /*4*/< 4) {
        return true;
    }
    else if (element >= 6) {
        return true;
    } else{
        return false;
    }
});

// console.log(newArray);

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


function fileterByColor(car, i, arr){
    if(car.color === 'green'){
        return true;
    } else {
        return false;
    }
}
// const fileterByColor2 = function(car, i, arr){
//     return true;
// }
// const arrowFilterByColor = (car, i, arr) => {
//     return true; 
// }

const newCars = cars.filter(fileterByColor);

console.log(newCars);

// max speed > 170
// vin start with 3;