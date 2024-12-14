//Test Object Stored in Local Storage
const inventoryTest = [
    {category: 'Vodka', name: 'Grey Goose', quantity: 33, par: 5, location: 'Bar 3'},
    {category: 'Whiskey', name: 'Pendleton', quantity: 10, par: 3, location: 'Bar 1'},
    {category: 'Tequila', name: 'Casa Migos', quantity: 10, par: 4, location: 'Bar 3'},
    {category: 'Vodka', name: 'Smirnoff', quantity: 20, par: 8, location: 'Bar 2'},
    {category: 'Gin', name: 'Heendricks', quantity: 13, par: 2, location: 'Bar 2'}
]

localStorage.setItem('inventoryTest', JSON.stringify(inventoryTest));
// End of Test Object



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
    nameEl.textContent = product.name;
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
    //Read conents of inputInfo (name of key stored by modal)
    return inventoryList = JSON.parse(localStorage.getItem('inputInfo'));
}

function renderInventory(){
    let inventory = readStorage();
    for(let i = 0; i < inventory.length; i++){
        createEl(inventory[i]);
    }   
}

renderInventory();

