document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('user-input');
    const expressionDisplay = document.getElementById('expression');
    const buttons = document.querySelectorAll('button');
    let displayValue = '0';
    let expressionValue = '';

    function updateDisplay() {
        display.innerText = displayValue;
    }

    function updateExpression() {
        expressionDisplay.innerText = expressionValue;
    }

    function clearDisplay() {
        displayValue = '0';
        expressionValue = '';
        updateDisplay();
        updateExpression();
    }

    function deleteLast() {
        displayValue = displayValue.slice(0, -1);
        expressionValue = expressionValue.slice(0, -1);
        if (displayValue === '') {
            displayValue = '0';
        }
        if (expressionValue === '') {
            expressionValue = '0';
        }
        updateDisplay();
        updateExpression();
    }

    function appendToDisplay(value) {
        if (displayValue === '0') {
            displayValue = value;
        } else {
            displayValue += value;
        }
        if (expressionValue === '0') {
            expressionValue = value;
        } else {
            expressionValue += value;
        }
        updateDisplay();
        updateExpression();
    }

    function calculateResult() {
        try {
            displayValue = eval(expressionValue).toString();
        } catch (error) {
            displayValue = 'Error';
        }
        updateDisplay();
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText;
            switch (value) {
                case 'AC':
                    clearDisplay();
                    break;
                case 'DEL':
                    deleteLast();
                    break;
                case '=':
                    calculateResult();
                    break;
                default:
                    appendToDisplay(value);
                    break;
            }
        });
    });

    updateDisplay();
    updateExpression();
});

