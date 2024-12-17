//Homepage Trackers Script
//Products under PAR List
function orderSoon() {
const inventory = JSON.parse(localStorage.getItem('inputInfo'));
const needToBeOrdered = inventory.filter(name => parseInt(name.par) > parseInt(name.quantity));
console.log()
const belowParList = document.querySelector('#orderSoon');
needToBeOrdered.forEach(obj => {
  const li = document.createElement("li");
  li.textContent= obj.name;
  belowParList.appendChild(li);
});
};
orderSoon();

//define inventory globally
const inventory = JSON.parse(localStorage.getItem('inputInfo'));

//Category Counter
const numberOfCategories = inventory.filter((obj, index, arr) => {
  return arr.map(mapObj => mapObj.category).indexOf(obj.category) === index;
});
const categoryNumber =(numberOfCategories.length);
const categoryCounter = document.querySelector('#categoryCounter');

categoryCounter.textContent = categoryNumber;

//Product Counter
const numberOfProducts = inventory.filter((obj, index, arr) => {
  return arr.map(mapObj => mapObj.name).indexOf(obj.name) === index;
});
const ProductNumber =(numberOfProducts.length)
const ProductCounter = document.querySelector('#productCounter')

ProductCounter.textContent = ProductNumber;

