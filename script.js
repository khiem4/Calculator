

const calculator = {
    '+': function (a, b) {
        return a + b;
    },
    '-': function (a, b) {
        return a - b;
    },
    '*': function (a, b) {
        return a * b;
    },
    '/': function (a, b) {
        return a / b;
    },
};



function operate(list, op) {
    return list.reduce(calculator[op])
}

let value;

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.value;
        value = parseInt(display.textContent)
    });
});



const clear = document.querySelector('.clear');
clear.addEventListener('click', (e) => {
    display.textContent = '';
})