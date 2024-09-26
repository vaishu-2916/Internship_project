let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const action = this.dataset.action;
        const value = this.dataset.value;

        if (value) {
            handleNumberInput(value);
        } else if (action) {
            handleActionInput(action);
        }
    });
});

function handleNumberInput(value) {
    if (display.innerHTML === '0' || operator) {
        display.innerHTML = '';
    }
    display.innerHTML += value;
    currentInput = display.innerHTML;
}

function handleActionInput(action) {
    switch (action) {
        case 'add':
            setOperator('+');
            break;
        case 'subtract':
            setOperator('-');
            break;
        case 'multiply':
            setOperator('*');
            break;
        case 'divide':
            setOperator('/');
            break;
        case 'equals':
            calculate();
            break;
        case 'clear':
            clearDisplay();
            break;
        case 'delete':
            deleteLastInput();
            break;
    }
}

function setOperator(newOperator) {
    if (currentInput) {
        previousInput = currentInput;
        currentInput = '';
        operator = newOperator;
    }
}

function calculate() {
    if (previousInput && currentInput && operator) {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
        }

        display.innerHTML = result;
        currentInput = result;
        previousInput = '';
        operator = '';
    }
}

function clearDisplay() {
    display.innerHTML = '0';
    currentInput = '';
    previousInput = '';
    operator = '';
}

function deleteLastInput() {
    display.innerHTML = display.innerHTML.slice(0, -1) || '0';
    currentInput = display.innerHTML;
}
