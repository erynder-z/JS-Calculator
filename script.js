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
    chooseOperantion(operation) {
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
        myCalculator.chooseOperantion(button.innerText);
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
