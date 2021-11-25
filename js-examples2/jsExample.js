var t = 2; 
var r = 5;
var x = "sample string";

var car = { name: "Skoda", age: 10}

setCarAge(car, 3);
console.log(car);

function setCarAge(car, age){
    car.age = age;
}

// var welcomeMessage = getWelcomeMessage(false);
// console.log(welcomeMessage);

function getWelcomeMessage(boolValue){
    console.log("function called");
    if(boolValue)
    {
        // true
        var v = 5;
        
        return "Welcome";
    }
    
    // false
    return "Welcome to training.";
}

// var welcomeMessage = getWelcomeMessageManyReturns();
// console.log(welcomeMessage);

function getWelcomeMessageManyReturns(){ 
    console.log("function called");
    return "Welcome";
    return "Welcome to training.";
    var t = 6;
}

// var welcomeMessage = getWelcomeMessageFromParameterLessFunction();
// console.log(welcomeMessage);
function getWelcomeMessageFromParameterLessFunction(){ 
    console.log("function called");
    return "Welcome";
}

function getWelcomeMessageFromParameterLessFunction(){ 
    console.log("function called");
    
    return "Welcome to training.";
}

// addValueAndPrintToConsole(t, r);
// addValueAndPrintToConsole(r, t);
// addValueAndPrintToConsole(4, 6);
function addValueAndPrintToConsole(numericVariable, secondNumericVariable) 
{
    var result = numericVariable + secondNumericVariable;

    console.log("After operation value is: " + result);
}

// printToConsole(t);
// printToConsole(r);
// printToConsole(x);
// printToConsole("additional string");
function printToConsole(variable) 
{
    console.log("Value is: " + variable);
}
// const fun = (v) => console.log("Value is: " + v);