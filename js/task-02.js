const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const listIngredients = (ingredient) => {
  let newElement = document.createElement('li');
  newElement.textContent = ingredient;
  return newElement;
}
const elementsOfIngredients = document.querySelector("ul#ingredients");
// console.log(elementsOfIngredients)
const newIngredients = ingredients.map(listIngredients);
// console.log(newIngredients)
elementsOfIngredients.append(...newIngredients);
