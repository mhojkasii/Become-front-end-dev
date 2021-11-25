var y = 1;
y = /*first computed then assignment*/ y + 1;


var x;
x = getGrater(3, 4);
console.log(x);

function getGrater(firstNumber, secondNumber) {
    console.log("What is grater?");
    if (firstNumber > secondNumber) {
        return firstNumber;
    }
    return secondNumber;
}

// var x;
// x = getAreEqualMessage(1, 3);
// console.log(x);

function getAreEqualMessage(numericParam1, numericParam2) {
    console.log("Parameters are equal?");
    if (numericParam1 == numericParam2) {
        // true
        return "Are equal";
    }
    // false
    return "Are not equal";
}

// var x;
// x = twoNumericParameters(1, 3);
// console.log(x);

function twoNumericParameters(numericParam1, numericParam2) {
    console.log("Parameters are equal?");
    if (numericParam1 == numericParam2) {
        // true
        console.log("Are equal");
        return true;
    }
    // false
    console.log("Are not equal");
    return false;
}