// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



let counterValue = document.querySelector('#value');
counterValue = 0;

const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');

const increment = () => {
    counterValue +=1;
    document.getElementById('value').textContent = counterValue;
    
}

const decrement = () => {
    counterValue -=1;
    document.getElementById('value').textContent = counterValue;
}

buttonDecr.addEventListener('click', (decrement))
buttonIncr.addEventListener('click', (increment))