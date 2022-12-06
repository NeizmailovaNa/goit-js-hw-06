const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);


function onInputChange (event) {
    if (outputEl.textContent = event.currentTarget.value) {
        return event.currentTarget.value
    } else if (event.currentTarget.value === "") {
       return "Anonymous" 
    } 
}

