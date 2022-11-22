const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const unoderedList= document.querySelector('ul');


const firstItem = document.createElement("li");
firstItem.textContent = "Potatoes";
firstItem.classList.add('item');

const secondItem = document.createElement("li");
secondItem.textContent = "Mushrooms";
secondItem.classList.add('item');

const thirdItem = document.createElement("li");
thirdItem.textContent = "Garlic";
thirdItem.classList.add('item');

const fourthItem = document.createElement("li");
fourthItem.textContent = "Tomatos";
fourthItem.classList.add('item');

const fifthItem = document.createElement("li");
fifthItem.textContent = "Herbs";
fifthItem.classList.add('item');

const sixthItem = document.createElement("li");
sixthItem.textContent = "Condiments";
sixthItem.classList.add('item');

unoderedList.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem);

console.log(unoderedList)
