const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const negativeButton = document.querySelector("[data-negative]");
const percentageButton = document.querySelector("[data-percent]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

//constructs a calculator class with the needed variables and functions.
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    //clears all variables used in calculation.
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = "";
    }

    //deletes the last entered element by converting it to a string and slicing the last element.
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    //appends entered element to the currentOperand textfield & prevents entering multiple "." or "%".
    appendElement(number) {
        if (number === "." && this.currentOperand.includes(".")) {
            return;
        } else if (number === "%" && this.currentOperand.includes("%")) {
            return;
        } else if (number === "%" && this.previousOperand == "") {
            return;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    //makes the currentOperand negative by converting it to a string and prepending a "-".
    makeNegative() {
        if (this.currentOperand.toString().startsWith("-")) {
            this.currentOperand = this.currentOperand.toString().slice(1);
        } else {
            this.currentOperand = "-" + this.currentOperand.toString();
        }
    }

    //treats the currentOperand as a percentage and performs a calculation with previous entered operation.
    makePercent() {
        let result;
        const num1 = parseFloat(this.previousOperand);
        const num2 = parseFloat(this.currentOperand);
        if (isNaN(num1) || isNaN(num2)) return;

        if (this.operation == "+") {
            result = ((num1 / 100) * num2) + num1;
        } else if (this.operation == "-") {
            result = num1 - ((num1 / 100) * num2);
        } else if (this.operation == "x") {
            result = (num1 / 100) * num2;
        } else if (this.operation == "÷") {
            if (num2 == 0) {
                alert("divide by zero?");
                myCalculator.clear();
                return;
            } else {
                result = (num1 * 100) / num2;
            }
        } else {
            return;
        }
        this.currentOperand = result;
        this.operation = "";
        this.previousOperand = "";
    }

    //sets the entered operation in order to perform the correct calculation afterwards.
    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.currentOperand !== "") {
            this.operate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    // performs calculations based on entered operands and chosen operation.    
    operate() {
        let result;
        const num1 = parseFloat(this.previousOperand);
        const num2 = parseFloat(this.currentOperand);
        if (isNaN(num1) || isNaN(num2)) return;
        if (this.operation == "+") {
            result = num1 + num2;
        } else if (this.operation == "-") {
            result = num1 - num2;
        } else if (this.operation == "x") {
            result = num1 * num2;
        } else if (this.operation == "÷") {
            if (num2 == 0) {
                alert("divide by zero?");
                myCalculator.clear();
                return;
            } else {
                result = num1 / num2;
            }
        } else {
            return;
        }
        this.currentOperand = result;
        this.operation = "";
        this.previousOperand = "";
    }

    //updates the display to show updated values after variables have changed.
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != "") {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            previousOperandTextElement.innerText = this.previousOperand;
        }
    }
}

//the calculator object we use to call the functions on
const myCalculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//add EventListeners to the buttons and call the corresponding functions
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        myCalculator.appendElement(button.innerText);
        myCalculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        myCalculator.chooseOperation(button.innerText);
        myCalculator.updateDisplay();
    });
});

negativeButton.addEventListener("click", () => {
    myCalculator.makeNegative();
    myCalculator.updateDisplay();
});

percentageButton.addEventListener("click", () => {
    myCalculator.makePercent();
    myCalculator.updateDisplay();
});

equalButton.addEventListener("click", () => {
    myCalculator.operate();
    myCalculator.updateDisplay();
});

clearButton.addEventListener("click", () => {
    myCalculator.clear();
    myCalculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
    myCalculator.delete();
    myCalculator.updateDisplay();
});

//keyboard input functionality
window.onkeydown = function(event) {
    if (event.keyCode == 96 || event.keyCode == 48) {
        myCalculator.appendElement(0);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 97 || event.keyCode == 49) {
        myCalculator.appendElement(1);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 98 || event.keyCode == 50) {
        myCalculator.appendElement(2);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 99 || event.keyCode == 51) {
        myCalculator.appendElement(3);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 100 || event.keyCode == 52) {
        myCalculator.appendElement(4);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 101 || event.keyCode == 53) {
        myCalculator.appendElement(5);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 102 || event.keyCode == 54) {
        myCalculator.appendElement(6);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 103 || event.keyCode == 55) {
        myCalculator.appendElement(7);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 104 || event.keyCode == 56) {
        myCalculator.appendElement(8);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 105 || event.keyCode == 57) {
        myCalculator.appendElement(9);
        myCalculator.updateDisplay();
     } else if (event.keyCode == 107) {
        myCalculator.chooseOperation("+");
        myCalculator.updateDisplay();
     } else if (event.keyCode == 109) {
        myCalculator.chooseOperation("-");
        myCalculator.updateDisplay();
     } else if (event.keyCode == 106) {
        myCalculator.chooseOperation("x");
        myCalculator.updateDisplay();
     } else if (event.keyCode == 111) {
        myCalculator.chooseOperation("/");
        myCalculator.updateDisplay();
     } else if (event.keyCode == 108 || event.keyCode == 188) {
        myCalculator.appendElement(".");
        myCalculator.updateDisplay();
     } else if (event.keyCode == 13) {
        myCalculator.operate();
        myCalculator.updateDisplay();
     } else if (event.keyCode == 8) {
        myCalculator.delete();
        myCalculator.updateDisplay();   
     } else if (event.keyCode == 67) {
        myCalculator.clear();
        myCalculator.updateDisplay();
     } else if (event.keyCode == 173) {
        myCalculator.makeNegative();
        myCalculator.updateDisplay();
     }
}

