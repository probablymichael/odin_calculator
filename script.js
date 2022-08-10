/* FUNCTIONS NEEDED */

function resetDataAfterCalculation(){
    firstNumber = display.textContent;
    operation = '';
    secondNumber = '';
    praxis;
    operatorIndex;
}

function add(a, b){
    display.textContent = +a + +b;
    resetDataAfterCalculation()
}

function subtract(a, b){
    display.textContent = +a - +b;
    resetDataAfterCalculation()
}

function multiply(a, b){
    display.textContent = +a * +b;
    resetDataAfterCalculation()
}

function divide(a, b){
    display.textContent = +a / +b;
    resetDataAfterCalculation()
}

/* DECLARATIONS */
const display = document.querySelector('.displayed')

const num_btns = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.btn-equals')
const clear = document.querySelector('.clear-btn')
const backspace = document.querySelector('.backspace')

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
		if (operation == ''){
			display.textContent += event.target.value
        
			operation = event.target.value
		}
    })
})

/* OPERATE FUNCTION */
function operate(operator, num1, num2){
    if (operator == '+'){
        add(num1, num2)
    } else if (operation == '-'){
        subtract(num1, num2)
    } else if (operation == 'ร—'){
        multiply(num1, num2)
    } else if (operation == 'รท'){
        divide(num1, num2)
    }
}

equals.addEventListener('click', () => {
    operate(operation, firstNumber, secondNumber)
})

/* CLEAR BUTTON */
clear.addEventListener('click', () => {
    display.textContent = ''
    firstNumber = '';
    operation = '';
    secondNumber = '';
    praxis;
    operatorIndex;
})

/* BACKSPACE */
backspace.addEventListener('click', () => {
    praxis = praxis.split('')
    let praxisPop = praxis.pop()// praxis = praxis.slice(praxis.length - 1, praxis.length + 1)
    if (operation !== ''){
        operation = '';
    }
    praxis = praxis.join('')
    display.textContent = praxis
})