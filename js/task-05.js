// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна 
// отображаться строка "Anonymous".


const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputchange)

function onInputchange(event) {

   outputEl.textContent = event.currentTarget.value || 'Anonymous';
}
