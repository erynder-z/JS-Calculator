
const inputArea = document.getElementById("input-area");
const workingArea = document.getElementById("working-area");
let result;
let num1 = null;
let num2 = null;
let operand = null;
let calcArray = [];
let inputAreaString;
let operandCounter = 0;

//adds elements to the input field
function appendElement(element) {
    inputArea.textContent+=element;
    checkOperand(element);
    checkInput();
}

//gets the operand to determine what caluclation function is going to be used
function checkOperand(element) {
    if ( element == "+" || element == "-" || element == "*" || element == "/") {
        operand = element;
        operandCounter++ 
        return operand;
}
}

//helper function to limit input
function checkInput() {
    if (operandCounter > 1) {
        deleteLastInput();
    } 
}

//calculator functions
function add(num1, num2) {
    result = parseFloat(num1) + parseFloat(num2);
    return result;
}
function subtract(num1, num2) {
    result = parseFloat(num1) - parseFloat(num2);
    return result;
}
function multiply(num1, num2) {
    result = parseFloat(num1) * parseFloat(num2);
    return result;
}
function divide(num1, num2) {
    result = parseFloat(num1) / parseFloat(num2);
    return result;
}

//evaluates input field
function operate() {
    inputAreaString = inputArea.textContent;

  // const calcArray = inputAreaString.split(/[\*+-/]/); //splits between any of these: + - * /
  // it's shorter than the code below but doesn't work with floating point numbers
  if (operand == "+") {
     calcArray = inputAreaString.split("+");
  } else if ( operand == "-") {
     calcArray = inputAreaString.split("-");
  } else if (operand == "*") {
     calcArray = inputAreaString.split("*");
  } else if (operand == "/") {
     calcArray = inputAreaString.split("/");
  } else {
      alert("something went wrong!");
  }

  num1 = calcArray[0];
  num2 = calcArray[1];

    if (operand == "+") {
        add(num1, num2);
        inputArea.textContent = result;
        workingArea.textContent = inputAreaString;
        num1 = result;
        operand = null;
    } else if (operand == "-") {
        subtract(num1, num2);
        inputArea.textContent = result;
        workingArea.textContent = inputAreaString;
        num1 = result;
        operand = null;
    } else if (operand == "*") {
        multiply(num1, num2);
        inputArea.textContent = result;
        workingArea.textContent = inputAreaString;
        num1 = result;
        operand = null;
    } else if (operand == "/") {
        divide(num1, num2);
        inputArea.textContent = result;
        workingArea.textContent = inputAreaString;
        num1 = result;
        operand = null;
    } else {
        alert("something went wrong!")
    }

    operandCounter = "0";
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


//appends element into calculator window if corresponding key is presses
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
        appendElement("+");
        toggleKeyColor("plus-button");
    } else if (event.keyCode == 109) {
        appendElement("-");
        toggleKeyColor("minus-button");
    } else if (event.keyCode == 106) {
        appendElement("*");
        toggleKeyColor("multiply-button");
    } else if (event.keyCode == 111) {
        appendElement("/");
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
        }}

//adds class to element in order to change color
//element ID is parsed as an argument into the function
function toggleKeyColor(buttonID) {
        let buttonClass = document.getElementById(buttonID);
        buttonClass.classList.add("pressed");
    }

//removes class in order to revert element color
function revertKeyColor(buttonID) {
        let buttonClass = document.getElementById(buttonID);
        buttonClass.classList.remove("pressed");
    }