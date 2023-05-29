// This is the javascript for your calculator

// Var declarations
let firstNumber;
let secondNumber;
let oper;

// Var declaration for if ther is already a decimal point + if the equals sign has been pressed
let decOn = 0;
let finalResult = 0;

// Operator Functions
function addition(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERR0R";
    }
    let result = num1 + num2;
    return result;
}

function subtraction(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERR0R";
    }
    let result = num1 - num2;
    return result;
}

function multiplication(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERR0R";
    }
    let result = num1 * num2;
    return result;
}

function division(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERR0R";
    }
    let result = num1 / num2;
    return result;
}

// Calculation Function
function operate(num1, num2, oper) {
    let result;

    if (oper === "+") {
        result = addition(num1, num2);
    } else if (oper === "-") {
        result = subtraction(num1, num2);
    } else if (oper === "*") {
        result = multiplication(num1, num2); 
    } else if (oper === "/") {
        result = division(num1, num2);
    } else {
        return "ERR0R";
    }
    return result;
}

// Display vars
const dispValue = document.querySelector("#screen");
const littleDispValue = document.querySelector("#littlescreen");

// Numpad vars
const nine = document.querySelector("#nine");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");
const dzero = document.querySelector("#dzero");
const decimal = document.querySelector("#decimal");

// Operator vars
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");

// Clear vars
const clear = document.querySelector("#clear");
const allclear = document.querySelector("#allclear");

// Numpad input
seven.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "7";
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "7";
    }
});

eight.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "8";
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "8";
    }
});

nine.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "9"
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "9";
    }
});
    

four.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "4";
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "4";
    }
});

five.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "5";
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "5";
    }
});

six.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "6";
    } else if (finalResult == 1 ) {
        allClear();
        dispValue.textContent = "6";
    }
});

one.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "1";
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "1";
    }
});

two.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "2";
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "2";
    }
});

three.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "3";
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "3";
    }
});

zero.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "0";
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "0";
    }
});

dzero.addEventListener("click", () => {
    if (finalResult == 0) {
        dispValue.textContent += "00";
    } else if (finalResult == 1) {
        allClear();
        dispValue.textContent = "00";
    }
});


decimal.addEventListener("click", () => {
    if (finalResult == 0 && dispValue.textContent != "" && decOn == 0) {
        dispValue.textContent += ".";
        decOn = 1;
    } else if (finalResult == 0 && dispValue.textContent == "" && decOn == 0) {
        dispValue.textContent = "0.";
        decOn = 1;
    } else if (finalResult == 1 && decOn == 0) {
        allClear();
        dispValue.textContent += "0.";
        decOn = 1;
    }
});

// Clear buttons inputs
clear.addEventListener("click", function() {
    dispValue.textContent = dispValue.textContent.slice(0, -1); 
});

allclear.addEventListener("click", allClear);

// Add button input
add.addEventListener("click", function() {
    if (dispValue.textContent != "" && firstNumber == undefined) {
        firstNumber = Number(dispValue.textContent);
        oper = "+";
        dispValue.textContent = "";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        decOn = 0;
    } else if (dispValue.textContent != "" && firstNumber != undefined && finalResult == 0) {
        secondNumber = Number (dispValue.textContent);
        firstNumber = operate(firstNumber, secondNumber, oper);
        oper = "+";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        dispValue.textContent = "";
        secondNumber = undefined;
        decOn = 0;
    } else if (finalResult == 1 ) {
        oper = "+";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        dispValue.textContent = "";
        finalResult = 0;
        decOn = 0;
    }
});

// Subtract button input
subtract.addEventListener("click", function() {
    if (dispValue.textContent != "" && firstNumber == undefined) {
        firstNumber = Number(dispValue.textContent);
        oper = "-";
        dispValue.textContent = "";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        decOn = 0;
    } else if (dispValue.textContent!= "" && firstNumber != undefined && finalResult == 0) {
        secondNumber = Number (dispValue.textContent);
        firstNumber = operate(firstNumber, secondNumber, oper);
        oper = "-";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        dispValue.textContent = "";
        secondNumber = undefined;
        decOn = 0;
    } else if (finalResult == 1 ) {
        oper = "-";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        dispValue.textContent = "";
        finalResult = 0;
        decOn = 0;
    }
});

// Multiply button input
multiply.addEventListener("click", function() {
    if (dispValue.textContent != "" && firstNumber == undefined) {
        firstNumber = Number(dispValue.textContent);
        oper = "*";
        dispValue.textContent = "";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        decOn = 0;
    } else if (dispValue.textContent!= "" && firstNumber != undefined && finalResult == 0) {
        secondNumber = Number (dispValue.textContent);
        firstNumber = operate(firstNumber, secondNumber, oper);
        oper = "*";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        dispValue.textContent = "";
        secondNumber = undefined;
        decOn = 0;
    } else if (finalResult == 1 ) {
        oper = "*";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        dispValue.textContent = "";
        finalResult = 0;
        decOn = 0;
    }
});

// Divide button input
divide.addEventListener("click", function() {
    if (dispValue.textContent != "" && firstNumber == undefined) {
        firstNumber = Number(dispValue.textContent);
        oper = "/";
        dispValue.textContent = "";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        decOn = 0;
    } else if (dispValue.textContent!= "" && firstNumber != undefined && finalResult == 0) {
        if (dispValue.textContent == "0" || dispValue.textContent == "00") {
            littleDispValue.textContent = "WTF ARE YOU DOING";
            dispValue.textContent = "3rr9r";
            finalResult = 1;
        } else {
            secondNumber = Number (dispValue.textContent);
            firstNumber = operate(firstNumber, secondNumber, oper);
            oper = "/";
            littleDispValue.textContent = `${firstNumber} ${oper}`;
            dispValue.textContent = "";
            secondNumber = undefined;
        }
        decOn = 0;
        
    } else if (finalResult == 1 ) {
        oper = "/";
        littleDispValue.textContent = `${firstNumber} ${oper}`;
        dispValue.textContent = "";
        finalResult = 0;
        decOn = 0;
    }
});

// Equals button input
equals.addEventListener("click", function() {
    if (dispValue.textContent != "" && firstNumber != undefined && oper != undefined && finalResult == 0) {
        if (dispValue.textContent == "0" || dispValue.textContent == "00") {
            littleDispValue.textContent = "WTF ARE YOU DOING";
            dispValue.textContent = "3rr9r";
            finalResult = 1;
        } else {
            secondNumber = Number(dispValue.textContent);
            firstNumber = operate(firstNumber, secondNumber, oper);
            if (Math.floor(firstNumber) !== firstNumber) {
                let decs = firstNumber.toString().split(".")[1].length || 0;
                console.log(decs);
                if (decs > 5) {
                    firstNumber = firstNumber.toFixed(5);
                }
            }
            dispValue.textContent = firstNumber;
            littleDispValue.textContent += ` ${secondNumber} =`;
            secondNumber = undefined;
            finalResult = 1;
        }
        decOn = 0;
    }
});

// Giving it the all clear function
function allClear() {
    firstNumber = undefined;
    secondNumber = undefined;
    oper = undefined;
    dispValue.textContent = "";
    littleDispValue.textContent = "";
    finalResult = 0;
    decOn = 0;
}