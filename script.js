
const inputArea = document.getElementById("input-area");
const workingArea = document.getElementById("working-area");
let result;
let num1;
let num2;
let operand = null;
let calcArray = [];
let inputAreaString;
let operandCounter = 0; //helper to prevent input of multiple operands
let negativeCounter = 0; //helper to prevent input of multiple negative prefixes
let commaCounter = 0; //helper to prevent input of multiple commas


//checks if first input element is an operand/comma and, if so, removes it
//adds elements to the input field
function appendElement(element) {
    if (inputArea.textContent == "") {
        if (element == " + " || element == " - " || element == " * " || element == " / " || element == ".") {
            element = "";
        }
    }
    inputArea.textContent+=element;
    checkOperand(element);
}

//gets the operand to determine what caluclation function is going to be used
//adjusts counters
function checkOperand(element) {
    if (element == " + " || element == " - " || element == " * " || element == " / ") {
        operand = element;
        operandCounter++ 
        commaCounter = 0;
        checkInput();
        return operand;
}
    if (element == "-") {
        negativeCounter++
        checkInput();
    }
    if (element == ".") {
        commaCounter++
        checkInput();
    }
}

//helper function to limit input
//adjusts counters
function checkInput() {
    if (operandCounter > 1) {
        substituteOperand();
    } 
    if (negativeCounter > 1) {
        deleteLastInput();
        negativeCounter--;
    }
    if (commaCounter > 1) {
        deleteLastInput();
        commaCounter--;
    }
}

//calculator functions
function add(a, b) {
    result = parseFloat(a) + parseFloat(b);
    return result;
}
function subtract(a, b) {
    result = parseFloat(a) - parseFloat(b);
    return result;
}
function multiply(a, b) {
    result = parseFloat(a) * parseFloat(b);
    return result;
}
function divide(a, b) {
    result = parseFloat(a) / parseFloat(b);
    return result;
}

//evaluates input field
function operate() {
    inputAreaString = inputArea.textContent;
    const calcArray = inputAreaString.split(" ");
    num1 = calcArray[0];
    num2 = calcArray[2];

    if (operand == " + ") {
        add(num1, num2);
        inputArea.textContent = result;
        workingArea.textContent = inputAreaString;
        num1 = result;
    } else if (operand == " - ") {
        subtract(num1, num2);
        inputArea.textContent = result;
        workingArea.textContent = inputAreaString;
        num1 = result;
    } else if (operand == " * ") {
        multiply(num1, num2);
        inputArea.textContent = result;
        workingArea.textContent = inputAreaString;
        num1 = result;  
    } else if (operand == " / ") {
        divide(num1, num2);
        inputArea.textContent = result;
        workingArea.textContent = inputAreaString;
        num1 = result;
    } else {
        alert("something went wrong in the operate function!")
    }

    operandCounter = 0;
    negativeCounter = 0;
    commaCounter = 0;
}

//function for clr-button
function clearInput() {
inputArea.textContent = "";
workingArea.textContent = "";
}

//function for del-button
function deleteLastInput() {
    if (inputArea.textContent.endsWith(" ")) {
        inputArea.textContent = inputArea.textContent.slice(0,-3);
    } else { 
        inputArea.textContent = inputArea.textContent.slice(0,-1);
    }
}

//prevent user from inputting multiple operands by slicing the previous one and substitute it with the current one
function substituteOperand() {
    updateString = inputArea.textContent.slice(0,-6);
    inputArea.textContent = updateString + operand;
}

//functionality for keyboard input
//appends element into calculator window if corresponding key is pressed
//toggles highlight of pressed key
window.onkeydown = function(event) {
    if (event.keyCode == 96 || event.keyCode == 48) {
       appendElement(0);
       toggleKeyColor("zero-button");
    } else if (event.keyCode == 97 || event.keyCode == 49) {
        appendElement(1);
        toggleKeyColor("one-button");
    } else if (event.keyCode == 98 || event.keyCode == 50) {
        appendElement(2);
        toggleKeyColor("two-button");
    } else if (event.keyCode == 99 || event.keyCode == 51) {
        appendElement(3);
        toggleKeyColor("three-button");
    } else if (event.keyCode == 100 || event.keyCode == 52) {
        appendElement(4);
        toggleKeyColor("four-button");
    } else if (event.keyCode == 101 || event.keyCode == 53) {
        appendElement(5);
        toggleKeyColor("five-button");
    } else if (event.keyCode == 102 || event.keyCode == 54) {
        appendElement(6);
        toggleKeyColor("six-button");
    } else if (event.keyCode == 103 || event.keyCode == 55) {
        appendElement(7);
        toggleKeyColor("seven-button");
    } else if (event.keyCode == 104 || event.keyCode == 56) {
        appendElement(8);
        toggleKeyColor("eight-button");
    } else if (event.keyCode == 105 || event.keyCode == 57) {
        appendElement(9);
        toggleKeyColor("nine-button");
    } else if (event.keyCode == 107) {
        appendElement(" + ");
        toggleKeyColor("plus-button");
    } else if (event.keyCode == 109) {
        appendElement(" - ");
        toggleKeyColor("minus-button");
    } else if (event.keyCode == 106) {
        appendElement(" * ");
        toggleKeyColor("multiply-button");
    } else if (event.keyCode == 111) {
        appendElement(" / ");
        toggleKeyColor("divide-button");
    } else if (event.keyCode == 108 || event.keyCode == 188) {
        appendElement('.');
        toggleKeyColor("decimal-button");
    } else if (event.keyCode == 13) {
        operate();
        toggleKeyColor("equal-button");
    } else if (event.keyCode == 8) {
        deleteLastInput();
        toggleKeyColor("delete-button");
    } else if (event.keyCode == 67) {
        clearInput();
        toggleKeyColor("clear-button");
    } else if (event.keyCode == 173) {
        appendElement('-');
        toggleKeyColor("negative-button");
    }}

 //releases the key highlight toggles
window.onkeyup = function(event) {
    if (event.keyCode == 96 || event.keyCode == 48) {
        revertKeyColor("zero-button");
    } else if (event.keyCode == 97 || event.keyCode == 49) {
        revertKeyColor("one-button");
    } else if (event.keyCode == 98 || event.keyCode == 50) {
        revertKeyColor("two-button");
    } else if (event.keyCode == 99 || event.keyCode == 51) {
        revertKeyColor("three-button");
    } else if (event.keyCode == 100 || event.keyCode == 52) {
        revertKeyColor("four-button");
    } else if (event.keyCode == 101 || event.keyCode == 53) {
        revertKeyColor("five-button");
    } else if (event.keyCode == 102 || event.keyCode == 54) {
        revertKeyColor("six-button");
    } else if (event.keyCode == 103 || event.keyCode == 55) {
        revertKeyColor("seven-button");
    } else if (event.keyCode == 104 || event.keyCode == 56) {
        revertKeyColor("eight-button");
    } else if (event.keyCode == 105 || event.keyCode == 57) {
        revertKeyColor("nine-button");
    } else if (event.keyCode == 107) {
        revertKeyColor("plus-button");
    } else if (event.keyCode == 109) {
        revertKeyColor("minus-button");
    } else if (event.keyCode == 106) {
        revertKeyColor("multiply-button");
    } else if (event.keyCode == 111) {
        revertKeyColor("divide-button");
    } else if (event.keyCode == 108 || event.keyCode == 188) {
        revertKeyColor("decimal-button");
    } else if (event.keyCode == 13) {
        revertKeyColor("equal-button");
    } else if (event.keyCode == 8) {
        revertKeyColor("delete-button");
    } else if (event.keyCode == 67) {
         revertKeyColor("clear-button");
    } else if (event.keyCode == 173) {
        revertKeyColor("negative-button");
    }}

//adds class to element in order to change its color
//element ID is parsed as an argument into the function
function toggleKeyColor(buttonID) {
        let buttonClass = document.getElementById(buttonID);
        buttonClass.classList.add("pressed");
    }

//removes class in order to revert elements color
function revertKeyColor(buttonID) {
        let buttonClass = document.getElementById(buttonID);
        buttonClass.classList.remove("pressed");
    }