const refs ={
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
}
refs.textEl.style.fontSize = refs.inputEl.value + 'px';

refs.inputEl.addEventListener('change', onInputChange);
    function onInputChange(event){
        return refs.textEl.style.fontSize = event.currentTarget.value + 'px';
    }