const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-span'), 
}

refs.input.addEventListener('input', (event) => 
{ !event.currentTarget.value ? refs.span.textContent = 'Anonymous' : refs.span.textContent = event.currentTarget.value })