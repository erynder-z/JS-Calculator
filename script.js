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


function zeroButton() {
    appendElement(0);
  }
  
  function oneButton() {
    appendElement(1);
  }
  
  function twoButton() {
    appendElement(2);
  }
  
  function threeButton() {
    appendElement(3);
  }
  
  function fourButton() {
    appendElement(4);
  }
  
  function fiveButton() {
    appendElement(5);
  }
  
  function sixButton() {
    appendElement(6);
  }
  
  function sevenButton() {
    appendElement(7);
  }
  
  function eightButton() {
    appendElement(8);
  }
  
  function nineButton() {
    appendElement(9);
  }

  function plusButton() {
      appendElement("+");
  }

  function minusButton() {
      appendElement("-");
  }

  function multiplyButton() {
      appendElement("*");
  }

  function divideButton() {
      appendElement("/");
  }

  function commaButton() {
      appendElement(".");
  }



window.onkeydown = function(event) {
    if (event.keyCode == 96 || event.keyCode == 48) {
       zeroButton();
    } else if (event.keyCode == 97 || event.keyCode == 49) {
        oneButton();
    } else if (event.keyCode == 98 || event.keyCode == 50) {
        twoButton();
    } else if (event.keyCode == 99 || event.keyCode == 51) {
        threeButton();
    } else if (event.keyCode == 100 || event.keyCode == 52) {
        fourButton();
    } else if (event.keyCode == 101 || event.keyCode == 53) {
        fiveButton();
    } else if (event.keyCode == 102 || event.keyCode == 54) {
        sixButton();
    } else if (event.keyCode == 103 || event.keyCode == 55) {
        sevenButton();
    } else if (event.keyCode == 104 || event.keyCode == 56) {
       eightButton();
    } else if (event.keyCode == 105 || event.keyCode == 57) {
        nineButton();
    } else if (event.keyCode == 107) {
        plusButton();
    } else if (event.keyCode == 109) {
        minusButton();
    } else if (event.keyCode == 106) {
        multiplyButton();
    } else if (event.keyCode == 111) {
        divideButton();
    } else if (event.keyCode == 110) {
        commaButton();
    } else if (event.keyCode == 13) {
        calculateResult();
    } else if (event.keyCode == 8) {
        deleteLastInput();
    } else if (event.keyCode == 67) {
        clearInput();
    }}

    function toggleKeyColor(button) {
        
    }