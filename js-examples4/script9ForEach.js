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

function chipTuning(car/*arr element*/, index, cars){
    if(car.VIN === "1FDBF3E67EEB08868"){
        return;
    }
    // cars[index] === car
    // cars[index] = cars[index].maxSpeed += 20;
    car.maxSpeed += 20; // car.maxSpeed = car.maxSpeed + 20
    
    car.dealerName = car.dealerId == 1 ? "MM Cars" : "TMT";
    
    // if(car.dealerId == 1){
    //     car.dealerName = "MM Cars";
    // }
    // else
    // {
    //     car.dealerName = "TMT";
    // }
}
cars.forEach(chipTuning);

console.log(cars);

const arrNumb = [3,4,5,7,2];
arrNumb.forEach(function(v, index, array){
    console.log(v);
})