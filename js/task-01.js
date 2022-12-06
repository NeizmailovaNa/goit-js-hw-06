const categoriesEl = document.querySelector(`#categories`);
const numberOfCategoriesEl = categoriesEl.children.length;
console.log('Number of categories:', numberOfCategoriesEl);

const titleEl = document.querySelectorAll(`.item h2`);
const itemEl = categoriesEl.querySelectorAll(`.item ul`);

titleEl.forEach( element => {
    console.log('Category:', element.textContent);
});
itemEl.forEach( element => {
    console.log('Element:', element.querySelectorAll(`ul li`).length);
});