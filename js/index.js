// Constants and variables

const buttonsArray = ['A/C', '+/-', '%', '/', 7, 8, 9, '*', 4, 5, 6 , '-', 1, 2, 3, '+', 0, '.', '=']
let displayValue = '';
let result = 0;
let firstNumber = null;
let secondNumber = null;
let operator = null;

const inputValue = document.querySelector("input");
inputValue.value = 0;
const buttonContainter = document.querySelector("div#button--container");

// Creating Buttons

buttonsArray.forEach((button) => createButton(button));

function createButton(button) {
  const createdButton = document.createElement("button");
  createdButton.setAttribute("value", `${button}`);
  createdButton.textContent = button;
  buttonContainter.appendChild(createdButton);
  createdButton.addEventListener("click", (e) => {
    if (button === "A/C") {
      displayValue = "";
      inputValue.value = 0;
      firstNumber = null;
      secondNumber = null;
    } else if (button === "-") {
      setOperator(button);
    } else if (button === "+") {
      setOperator(button);
    } else if (button === "*") {
      setOperator(button);
    } else if (button === "/") {
      setOperator(button);
    } else if (button === "%") {
      inputValue.value = +inputValue.value / 100;
    }else if (button === "+/-") {
      inputValue.value = +inputValue.value * -1;
    }
     else if (button === "=") {
      setNumbers();
      displayValue = "";
      firstNumber = null;
      secondNumber = null;
      inputValue.value = result;
      result = 0;
    } else {
      addDigit(e.target.value);
    }
  });
}

// Giving buttons click event by pressing keys on keyboard

window.addEventListener("keydown", (e) => {
  try {
    if(e.key === 'Backspace'){
      document.querySelector(`button[value="A/C"]`).click()
    }
    else{
      const pressedKey = document.querySelector(`button[value="${e.key}"]`);
      pressedKey.click();
    }
  } catch (e) {
    console.log("You typed letter, not number");
  }
});

// Functions

function updateDisplay() {
  inputValue.value = displayValue;
}

function addDigit(digit) {
  if(displayValue === '0' && digit === '0'){
    console.log('Same value')
  }
  else{
    displayValue += digit;
    updateDisplay();
  }
}

function setOperator(operatorValue) {
  setNumbers();
  operator = operatorValue;
  displayValue = "";
  inputValue.value = 0;
}
function setNumbers() {
  if (firstNumber === null) {
    firstNumber = +inputValue.value;
  } else if (firstNumber != null && secondNumber != null) {
    secondNumber = +inputValue.value;
    operate(firstNumber, secondNumber, operator);
    inputValue.value = result;
    firstNumber = result
  } else {
    secondNumber = +inputValue.value;
    operate(firstNumber, secondNumber, operator);
    inputValue.value = result;
    firstNumber = result
  }
}

// Math functions

function add(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
}
function substract(firstNumber, secondNumber) {
  result = firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
  result = firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
  result = secondNumber != 0 ? firstNumber / secondNumber : 'Error';
}
function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "-":
      substract(firstNum, secondNum);
      break;
    case "+":
      add(firstNum, secondNum);
      break;
    case "*":
      multiply(firstNum, secondNum);
      break;
    case "/":
      divide(firstNum, secondNum);
      break;
  }
}
