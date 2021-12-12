function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике
// на button.change-color и выводит значение цвета в span.color.


const body = document.body;
const btnChangeColor = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

function onBtnClick () {
  body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = body.style.backgroundColor;
}

btnChangeColor.addEventListener('click', onBtnClick);