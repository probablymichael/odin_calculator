function add(a, b){
    display.textContent = +a + +b;
}

function subtract(a, b){
    display.textContent = +a - +b;
}

function multiply(a, b){
    display.textContent = +a * +b;
}

function divide(a, b){
    display.textContent = +a / +b;
}

/* DECLARATIONS */
const display = document.querySelector('.displayed')

const num_btns = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.btn-equals')

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

function operate(operator, num1, num2){
    if (operator == '+'){
        add(num1, num2)
    } else if (operation == '-'){
        subtract(num1, num2)
    } else if (operation == '×'){
        multiply(num1, num2)
    } else if (operation == '÷'){
        divide(num1, num2)
    }
}

equals.addEventListener('click', () => {
    operate(operation, firstNumber, secondNumber)
})