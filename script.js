


function clear() {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', (e) => {
        e.innerHTML = '';
    })
}

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


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e = button.getAttribute('value')
        console.log(e)
    });
});

