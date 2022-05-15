const refs ={
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
}
refs.textEl.style.fontSize = refs.inputEl.value + 'px';

refs.inputEl.addEventListener('change', onInputChange);
    function onInputChange(input){
        return refs.textEl.style.fontSize = input.currentTarget.value + 'px';
    }

