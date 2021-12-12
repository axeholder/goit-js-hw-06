const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const listItemEl = document.createElement('li');
  listItemEl.textContent = element;
  listItemEl.classList.add('item');

  return listItemEl;
});

console.log(elements);

ingredientsList.append(...elements);