function appendElement(element) {
    document.getElementById("result-area").innerHTML+=element;
}

function calculateResult() {
}

function clearInput() {
    let container = document.getElementById("result-area");
    container.innerHTML = "";
}

function deleteLastInput() {
    let container = document.getElementById("result-area");
    if (container.innerHTML.endsWith(" ")) {
        container.innerHTML = container.innerHTML.slice(0,-3);
    } else { 
        container.innerHTML = container.innerHTML.slice(0,-1);
    }
}

//appends element into the calculator window
function appendButtonElement(value) {
    appendElement(value);
}

//appends element into calculator window if corresponding key is presses
//toggles highlight of pressed key
window.onkeydown = function(event) {
    if (event.keyCode == 96 || event.keyCode == 48) {
       appendButtonElement(0);
       toggleKeyColor("zero-button");
    } else if (event.keyCode == 97 || event.keyCode == 49) {
        appendButtonElement(1);
        toggleKeyColor("one-button");
    } else if (event.keyCode == 98 || event.keyCode == 50) {
        appendButtonElement(2);
        toggleKeyColor("two-button");
    } else if (event.keyCode == 99 || event.keyCode == 51) {
        appendButtonElement(3);
        toggleKeyColor("three-button");
    } else if (event.keyCode == 100 || event.keyCode == 52) {
        appendButtonElement(4);
        toggleKeyColor("four-button");
    } else if (event.keyCode == 101 || event.keyCode == 53) {
        appendButtonElement(5);
        toggleKeyColor("five-button");
    } else if (event.keyCode == 102 || event.keyCode == 54) {
        appendButtonElement(6);
        toggleKeyColor("six-button");
    } else if (event.keyCode == 103 || event.keyCode == 55) {
        appendButtonElement(7);
        toggleKeyColor("seven-button");
    } else if (event.keyCode == 104 || event.keyCode == 56) {
        appendButtonElement(8);
        toggleKeyColor("eight-button");
    } else if (event.keyCode == 105 || event.keyCode == 57) {
        appendButtonElement(9);
        toggleKeyColor("nine-button");
    } else if (event.keyCode == 107) {
        appendButtonElement("+");
        toggleKeyColor("plus-button");
    } else if (event.keyCode == 109) {
        appendButtonElement("-");
        toggleKeyColor("minus-button");
    } else if (event.keyCode == 106) {
        appendButtonElement("*");
        toggleKeyColor("multiply-button");
    } else if (event.keyCode == 111) {
        appendButtonElement("/");
        toggleKeyColor("divide-button");
    } else if (event.keyCode == 108 || event.keyCode == 188) {
        appendButtonElement('.');
        toggleKeyColor("decimal-button");
    } else if (event.keyCode == 13) {
        calculateResult();
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