
const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2')

const clear = document.querySelector('.clear');
const buttons = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.op');

let value1 = 0;
let value2 = 0;
let operator;
let number;



function operate(op, a, b) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
    }
}

clear.addEventListener('click', () => {
    display1.textContent = '';
    display2.textContent = '';
    value1 = 0;
})


buttons.forEach(button => {
    button.addEventListener('click', () => {
        display2.textContent += button.value;;
        value1 = parseInt(display2.textContent);
    });
});

operators.forEach(ope => {
    ope.addEventListener('click', () => {
        operator = ope.value;
        display2.textContent += operator;
        if (operator) {
            value2 = operate(operator, value1, value2);
            display1.textContent = value2;
        } else {
            value2 = value1;
        }
        display2.textContent = '';


    });
});

