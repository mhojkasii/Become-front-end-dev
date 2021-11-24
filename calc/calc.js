var firstNumber = -1;
var secondNumber = -1;
var operator = "";
var resultText = "";

function dispayNumber(number) {
    if (firstNumber === -1) {
        firstNumber = number;
    }
    if (firstNumber != -1 && operator != "") {
        secondNumber = number;
    }

    var text = resultText;
    text = text += number;
    resultText = text;
}

function operate(o) {
    if (firstNumber == -1) {
        return;
    }
    if (operator != "") {
        return;
    }

    operator = o;

    var text = resultText;
    text = text + " " + o + " ";
    resultText = text;
}

function result() {
    
    if (firstNumber != -1 && operator != "" && secondNumber != -1) {
        
        if (operator == "+") {
            resultText = firstNumber + secondNumber;
        }
        if (operator == "-") {
            resultText = firstNumber - secondNumber;
        }
        // !!! cover other operations

        // !!! Clear all variables to their default state
        // var firstNumber = -1;
        // var operator = "";
        // ...
    }
}

function clearResult() {
    // !!! Clear result text 
    // !!! Clear all variables to their default state
}


// dispayNumber(7);
// operate("+");
// dispayNumber(6);
// result();
// console.log(resultText);
