const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

const outputEl = document.querySelector('#name-output');

function onInputChange (event) {
    if (event.currentTarget.value === "") {
        return "Anonymous"
    } else {
       outputEl.textContent = event.currentTarget.value
       return event.currentTarget.value
    } 
}

