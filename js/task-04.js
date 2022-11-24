const minusBtn = document.querySelector('button');
const plusBtn = document.querySelector('div').lastElementChild;
const valueEl = document.querySelector('#value');

const counter = {
    value: 0,
    increment (value) {
        this.value += value
        valueEl.textContent = this.value
    },
    decrement (value) {
        this.value -= value
        valueEl.textContent = this.value
    },
};

const counterValue = function (value, operation) {
    operation(value)
};

plusBtn.addEventListener ('click', () => {
    counterValue(1, counter.increment.bind(counter));
});

minusBtn.addEventListener ('click', () => {
    counterValue(1, counter.decrement.bind(counter));
});

