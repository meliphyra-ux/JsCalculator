const buttonsArray = [0,1,2,3,4,5,6,7,8,9,'-','+','=','A/C','%'];
const buttonContainter = document.querySelector('div#button--container');
let displayValue = '';
const inputValue = document.querySelector('input');

buttonsArray.forEach(button => createButton(button))

function createButton(button){
    const createdButton = document.createElement('button');
    createdButton.setAttribute("value", `${button}`)
    createdButton.textContent = button;
    buttonContainter.appendChild(createdButton)
    // if(typeof button == string){
        
    // }
    // else{
        createdButton.addEventListener("click", (e) => addDigit(e.target.value))
    // } 
}
window.addEventListener("keydown", (e)=>{
    const pressedKey = document.querySelector(`button[value="${e.key}"]`)
    pressedKey.click();
})

function updateDisplay(){
    inputValue.value = displayValue; 
}

function addDigit(digit){
    displayValue += digit;
    updateDisplay()
    console.log(displayValue)
}

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
function substract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}
