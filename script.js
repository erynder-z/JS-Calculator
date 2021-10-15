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
         this.operation  = undefined;
     }

     delete() {

     }

     appendElement(number) {
         if (number === "," && this.currentOperand.includes(",")) return; 
         this.currentOperand = this.currentOperand.toString() + number.toString();
     }

     chooseOperantion(operation) {

     }

     operate() {

     }

     updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;d;
     }
}

const myCalculator = new Calculator(previousOperandTextElement,   currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        myCalculator.appendElement(button.innerText);
        myCalculator.updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        myCalculator.chooseOperantion(button.innerText);
        myCalculator.updateDisplay();
    })
})

clearButton.addEventListener("click", () => {
    myCalculator.clear();
    myCalculator.updateDisplay();
});