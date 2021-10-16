const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const aButton = document.querySelector("[data-a]");
const bButton = document.querySelector("[data-b]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

     clear() {
         this.currentOperand = "";
         this.previousOperand = "";
         this.operation  = "";
     }

     delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
     }

     appendElement(number) {
        if (number === "." && this.currentOperand.includes(".")) return; 
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperantion(operation) {
        if (this.currentOperand === "") return;
        if (this.currentOperand !== "") {
            this.operate();
        }
       this.operation = operation;
       this.previousOperand = this.currentOperand;
       this.currentOperand = "";
    }

    operate() {
       let result;
       const num1 = parseFloat(this.previousOperand);
       const num2 = parseFloat(this.currentOperand);
       if ( isNaN(num1) || isNaN(num2) ) return;
       if (this.operation == "+") {
           result = num1 + num2;
       } else if(this.operation == "-") {
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

    updateDisplay() {
       this.currentOperandTextElement.innerText = this.currentOperand;
       if (this.operation != "") {
       this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
        previousOperandTextElement.innerText = this.previousOperand;
    }
    }
}

const myCalculator = new Calculator(previousOperandTextElement,   currentOperandTextElement)

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

equalButton.addEventListener("click", () => {
    myCalculator.operate();
    myCalculator.updateDisplay();
})

clearButton.addEventListener("click", () => {
    myCalculator.clear();
    myCalculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
    myCalculator.delete();
    myCalculator.updateDisplay();
});

