/* FUNCTIONS NEEDED */

function findDecimal(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value){
            decimalUsageFirstNumber = true;
            return;
        } else {
             decimalUsageFirstNumber = false;
        }
    }}


function resetDataAfterCalculation(){
    display.textContent = firstNumber;

    firstNumber = firstNumber.split('')
    findDecimal(firstNumber, '.')
    firstNumber = firstNumber.join('')

    operation = secondOperator;
    secondOperator = '';
    secondNumber = '';
    decimalUsageSecondNumber = false;
}

function add(a, b){
    firstNumber = +a + +b;
    firstNumber = firstNumber.toString();
    resetDataAfterCalculation()
}

function subtract(a, b){
    firstNumber = Math.round((+a - +b) * 100 ) / 100;
    firstNumber = firstNumber.toString();
    resetDataAfterCalculation()
}

function multiply(a, b){
    firstNumber = +a * +b;
    firstNumber = firstNumber.toString();
    resetDataAfterCalculation()
}

function divide(a, b){
    if (b == '0'){
        display.textContent = 'Error: cannot divide with zero'
        firstNumber = '';
        operation = '';
        secondNumber = '';
    } else {
        firstNumber = Math.round((+a / +b) * 100 ) / 100;
        firstNumber = firstNumber.toString();
        resetDataAfterCalculation()
    }
}

/* DECLARATIONS */
const display = document.querySelector('.displayed')

const num_btns = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.btn-equals')
const clear = document.querySelector('.clear-btn')
const backspace = document.querySelector('.backspace')
const decimal = document.querySelector('.btn-dot')

/* STORE NUMBERS */
let firstNumber = '';
let operation = '';
let secondOperator = '';
let secondNumber = '';
let decimalUsageFirstNumber = false;
let decimalUsageSecondNumber = false;


num_btns.forEach(num_btns => {
    num_btns.addEventListener('click', (event) => {
        if (operation == ''){
            firstNumber += event.target.value
            display.textContent = firstNumber
        } else if (operation != ''){
            secondNumber += event.target.value
            display.textContent = secondNumber
        }
    })
})

operators.forEach(operators => {
    operators.addEventListener('click', (event) => {
        if (operation == ''){
            operation = event.target.value
        } else{
            secondOperator = event.target.value
            operate(operation, firstNumber, secondNumber)
        }
    })
})

decimal.addEventListener('click', (e) => {
    if (firstNumber === ''){
        return;
    } else if (firstNumber !== '' && operation === '' && decimalUsageFirstNumber == false){
        firstNumber += e.target.value
        display.textContent = firstNumber
        decimalUsageFirstNumber = true;
    } else if (operation !== '' && decimalUsageSecondNumber == false){
        secondNumber += e.target.value
        display.textContent = secondNumber
        decimalUsageSecondNumber == true;
    }
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
    if (firstNumber == '' || operation == '' || secondNumber == ''){
        return;
    } else {
        operate(operation, firstNumber, secondNumber)
    }

})

/* CLEAR BUTTON */
clear.addEventListener('click', () => {
    display.textContent = ''
    firstNumber = '';
    operation = '';
    secondNumber = '';
})

/* BACKSPACE */
backspace.addEventListener('click', () => {
    if (secondNumber != ''){
        secondNumber = secondNumber.split('')
        let secondNumberPop = secondNumber.splice(secondNumber.length - 1, secondNumber.length)
        secondNumber = secondNumber.join('')
        display.textContent = secondNumber
    } else if (secondNumber == ''){
        display.textContent = firstNumber
        operation = ''
        if (firstNumber != ''){
            firstNumber = firstNumber.split('')
            let firstNumberPop = firstNumber.splice(firstNumber.length - 1, firstNumber.length)
            firstNumber = firstNumber.join('')
            display.textContent = firstNumber
        }
    }
})