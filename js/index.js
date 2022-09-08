const buttonsArray = [0,1,2,3,4,5,6,7,8,9,'-','+','=','A/C','%'];
const buttonContainter = document.querySelector('div#button--container');

buttonsArray.forEach(button=>{
    const createdButton = document.createElement('button');
    createdButton.textContent = button;
    buttonContainter.appendChild(createdButton)

})

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
