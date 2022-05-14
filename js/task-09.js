
const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('span.color');
const bodyRef = document.querySelector('body');

btnRef.addEventListener('click', onclickButton);

function onclickButton(event){
    const randomColor = getRandomHexColor();
    bodyRef.style.backgroundColor = randomColor;
    spanRef.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
