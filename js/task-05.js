const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('h1'), 
}

refs.input.addEventListener('input', ShowInputText);

function ShowInputText(event) {
    if (refs.input.value === '') {
        refs.output.textContent = 'Hello, Anonymous'; 
    } else {
        refs.output.textContent = event.target.value;
    }
}