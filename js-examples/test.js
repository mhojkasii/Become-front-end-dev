var number = 6;
var number2 = 5;
var strNumber = "6";


if (false || /*OR*/ true || false || false) {
    console.log("OR");
}

if (false && /*AND*/ true && true && true) {
    console.log("AND");
}

if (number == strNumber && typeof(number) == typeof(strNumber)) {
    console.log("it was true");
}


// if (number == strNumber && typeof(number) == typeof(strNumber)){
//     console.log("it was true");
// }

// if (number === strNumber){
//     console.log("it was true");
// }

// if(number < strNumber){
//     console.log("is less");
// }

// if(number < number2){
//     console.log("is greater");
// }

// if(number <= number2){
//     console.log("is greater");
// }