function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}


/* DECLARATIONS */
const display = document.querySelector('.displayed')

const num_btns = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.operator')

/* STORE NUMBERS */
let firstNumber = '';
let operation = '';
let secondNumber = '';
let praxis;
let operatorIndex;

/* Add functionality to buttons and store the numbers */
num_btns.forEach(num_btns => {
    num_btns.addEventListener('click', (event) => {
        display.textContent += event.target.value

        praxis = display.textContent
        praxis.split('')
        operatorIndex = praxis.indexOf(operation)
        firstNumber = praxis.slice(0, operatorIndex)
        secondNumber = praxis.slice(operatorIndex + 1, praxis.length)
    })
})

/* Add functionality to the operator buttons */
operators.forEach(operators => {
    operators.addEventListener('click', (event) => {
        display.textContent += event.target.value
        
        operation = event.target.value
    })
})
