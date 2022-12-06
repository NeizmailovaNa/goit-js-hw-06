const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  liEl.classList.add('item');
  liEl.textContent = ingredient;

  return liEl
})


console.log(elements)
listEl.append(...elements)

/*const ingrList = options => {
  return options.map (option => {
    const liEl = document.createElement("li");
    liEl.classList.add('item');
    liEl.textContent = option;

    return liEl;
  });
};

const elements = ingrList(ingridients);
console.log(elements)
liEl.append(...elements)*/
