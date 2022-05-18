const refs = {
    inputSize: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.inputSize.value = 16;
refs.inputSize.style.paddingLeft = 0;
refs.inputSize.style.paddingRight = 0;
refs.inputSize.addEventListener('input', event => {
refs.text.style.fontSize = event.currentTarget.value + 'px';
});