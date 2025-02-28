let displayValue = '0';
let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;

const buttons = document.querySelectorAll('button');

function updateDisplay() {
    const display = document.getElementById('display');
    if(displayValue.length > 12) {
        display.innerText = displayValue.substring(0, 11);
    } else {
        display.innerText = displayValue;
    }
}

updateDisplay();

function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('number')) {
                inputNumber(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('clear')) {
                inputClear();
                updateDisplay();
            }
        })
    }
}

clickButton();

function inputNumber(number) {
    if(firstNumber === null) {
        if(displayValue === '0' || displayValue === 0 || displayValue === firstNumber || displayValue === result) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    } else {
        if(displayValue == firstNumber) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    }
}

function inputOperator(op) {
    if(firstNumber === null) {
        firstNumber = displayValue;
        operator = op;
    } else if(firstNumber != null) {
        inputEquals();
        firstNumber = result;
        operator = op;
    } 
}

function inputEquals() {
    if(firstNumber != null && secondNumber === null) {
        secondNumber = displayValue
        if(operator === '+') {
            result = Number(firstNumber) + Number(secondNumber);
        } else if(operator === '-') {
            result = Number(firstNumber) - Number(secondNumber);
        } else if(operator === '*') {
            result = Number(firstNumber) * Number(secondNumber);
        } else if(operator === '/') {
            result = Number(firstNumber) / Number(secondNumber);
        }
    }
    displayValue = result;
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

function inputClear() {
    displayValue = '0';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;
}