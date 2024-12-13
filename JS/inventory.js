//Test Object Stored in Local Storage
const productTest = {
    category: 'Vodka',
    productName: 'Grey Goose',
    quantity: 33,
    par: 5,
    location: 'Bar 3'
}

localStorage.setItem('productTest', JSON.stringify(productTest));

//Get the Table Element
//const tableBodyEl = document.querySelector('.table');
const tableBodyEl = document.querySelector('#table-body');

//Function to append a row to the table given a product object.
function createEl(product){
    const rowEl = document.createElement('tr');
    //const numEl = document.createElement('td');
    const catEl = document.createElement('td');
    const nameEl = document.createElement('td');
    const qtyEl = document.createElement('td');
    const parEl = document.createElement('td');
    const locEl = document.createElement('td');

    catEl.textContent = product.category;
    nameEl.textContent = product.productName;
    qtyEl.textContent = product.quantity;
    parEl.textContent = product.par;
    locEl.textContent = product.location;

    tableBodyEl.appendChild(rowEl);
    rowEl.appendChild(catEl);
    rowEl.appendChild(nameEl);
    rowEl.appendChild(qtyEl);
    rowEl.appendChild(parEl);
    rowEl.appendChild(locEl);
}


function readStorage(){
    return inventoryList = JSON.parse(localStorage.getItem('productTest'));
}

function renderInventory(){
    let inventory = readStorage();
    createEl(inventory);
}

renderInventory();

