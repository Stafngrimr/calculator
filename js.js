// This is the javascript for your calculator

// Var declarations
let firstNumber;
let secondNumber;
let oper;

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

const dispValue = document.querySelector("#screen");

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

const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");

const clear = document.querySelector("#clear");
const allclear = document.querySelector("#allclear");

seven.addEventListener("click", () => dispValue.textContent += "7");
eight.addEventListener("click", () => dispValue.textContent += "8");
nine.addEventListener("click", () => dispValue.textContent += "9");
four.addEventListener("click", () => dispValue.textContent += "4");
five.addEventListener("click", () => dispValue.textContent += "5");
six.addEventListener("click", () => dispValue.textContent += "6");
one.addEventListener("click", () => dispValue.textContent += "1");
two.addEventListener("click", () => dispValue.textContent += "2");
three.addEventListener("click", () => dispValue.textContent += "3");
zero.addEventListener("click", () => dispValue.textContent += "0");
dzero.addEventListener("click", () => dispValue.textContent += "00");

clear.addEventListener("click", function() {
    dispValue.textContent = "";
    firstNumber = undefined;
});

add.addEventListener("click", function() {
    if (!firstNumber) {
        firstNumber = Number(dispValue.textContent);
        oper = "+";
        dispValue.textContent = "";
        console.log("first time");
    } else {
        secondNumber = Number(dispValue.textContent);
        firstNumber = operate(firstNumber, secondNumber, oper);
        oper = "+"
        dispValue.textContent = "";
    }
    
});

subtract.addEventListener("click", function() {
    firstNumber = Number(dispValue.textContent);
    oper = "-";
    dispValue.textContent = "";
});

multiply.addEventListener("click", function() {
    firstNumber = Number(dispValue.textContent);
    oper = "*";
    dispValue.textContent = "";
});

divide.addEventListener("click", function() {
    firstNumber = Number(dispValue.textContent);
    oper = "/";
    dispValue.textContent = "";
});

equals.addEventListener("click", function() {
    if (dispValue.textContent === "") {
        dispValue.textContent = "ERR9R";
    } else {
        if (secondNumber != undefined) {
            dispValue.textContent = operate(firstNumber, secondNumber, oper);
            firstNumber = Number(dispValue.textContent);
        } else {
            secondNumber = Number(dispValue.textContent);
            dispValue.textContent = operate(firstNumber, secondNumber, oper);
            firstNumber = Number(dispValue.textContent);
            secondNumber = undefined;
        }
        
    }
});