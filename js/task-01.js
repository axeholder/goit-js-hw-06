// создаем нодЛист и консолим его длину

const categories = document.querySelectorAll('#categories li.item');
// console.log(categories);
const numberOfCategories = categories.length;
console.log(`Количество категорий: ${numberOfCategories}`);


//распыляем нодЛист и мапаем масив 

const categoryArr = [...categories];
const headingTextArray = categoryArr.map(item => {
  const text = item.querySelector('h2').textContent;
  const elements = item.querySelector('ul').children.length;
  console.log(`Категория: ${text}`);
  console.log(`Элементов: ${elements}`);
});