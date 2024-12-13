const inventory = [
    { product: 'apple', category: 'food', quantity: 3, location: 'H4', par: 3 },
    { product: 'shovel', category: 'tools', quantity: 3, location: 'F3', par: 2 },
    { product: 'hammer', category: 'tools', quantity: 3, location: 'D4', par: 3 },
    { product: 'banana', category: 'food', quantity: 3, location: 'F9', par: 2 },
    { product: 'toothpaste', category: 'toiletries', quantity: 3, location: 'B2', par: 3 },
    { product: 'brush', category: 'toiletries', quantity: 3, location: 'A1', par: 2 },
];

//Products under PAR List

// const needToBeOrdered = inventory.filter(inventory.par.num > inventory.quantity.num);

// console.log(needToBeOrdered);


//Category Counter
const numberOfCategories = inventory.filter((obj, index, arr) => {
    return arr.map(mapObj => mapObj.category).indexOf(obj.category) === index;
});
const categoryNumber =(numberOfCategories.length)
const categoryCounter = document.querySelector('#categoryCounter')

categoryCounter.textContent = categoryNumber

//Product Counter
const numberOfProducts = inventory.filter((obj, index, arr) => {
    return arr.map(mapObj => mapObj.product).indexOf(obj.product) === index;
});
const ProductNumber =(numberOfProducts.length)
const ProductCounter = document.querySelector('#productCounter')

ProductCounter.textContent = ProductNumber