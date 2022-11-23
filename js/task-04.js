const counter = {
    value: 0,
    increment (value) {
        console.log(`increment -> this`, this);
        this.value += value
    },
    decrement (value) {
        console.log(`increment -> this`, this);
        this.value -= value
    },
};

const counterValue = function (value, operation) {
    operation(value)
};

const minusBtn = document.querySelector('button');
const plusBtn = document.querySelector('div').lastElementChild;
const valueEl = document.querySelector('#value');

plusBtn.addEventListener ('click', () => {
    console.log(counterValue(1, counter.increment.bind(counter)));
});

minusBtn.addEventListener ('click', () => {
    console.log(counterValue(1, counter.decrement.bind(counter)));
});

