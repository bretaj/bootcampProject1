
//MODAL SCRIPT
// this is the code if we wanted to use a modal for the input form
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-close') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
        location.reload();
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });
  // END MODAL SCRIPT

const submitInput = document.getElementById('submit');
const invButton = document.getElementById('viewInt');
const modalForm = document.getElementById('inventoryForm');
const errorMessage = document.getElementById('error');

const inputInfo = [];

submitInput.onclick = (event) => {
  event.preventDefault();

  const catInput = document.getElementById('productCat').value;
  const nameInput = document.getElementById('productName').value;
  const quantInput = document.getElementById('productQuant').value;
  const parInput = document.getElementById('par').value;
  const locationInput = document.getElementById('location').value;
  if (catInput && nameInput && !isNaN(quantInput) && !isNaN(parInput) && locationInput) {
  const storedData = JSON.parse(localStorage.getItem('inputInfo')) || [];
  
    storedData.push({
    category: catInput, 
    name: nameInput, 
    quantity: quantInput, 
    par: parInput, 
    location: locationInput
    })

  localStorage.setItem('inputInfo', JSON.stringify(storedData));

  if (modalForm) {
    modalForm.reset();
    }
    
    errorMessage.textContent = 'Product input successful';
    errorMessage.style.color = 'black';
  } else {
    errorMessage.textContent = 'Please fill out the form';
    errorMessage.style.color = 'red';
  }
}

  
  invButton.onclick = () => {
    console.log('View Inventory button clicked');
    const storedData = JSON.parse(localStorage.getItem('inputInfo')) || [];
    
    if (storedData.length > 0) {
      window.location.href = './inventory.html';
    } else {
      window.location.href = './inventory.html'; 
    }

  }

  //};
    // invButton.onclick = () => {
    //   if (inputInfo.length > 0) {
    //   localStorage.setItem(`inputInfo`, JSON.stringify(inputInfo));
    //   window.location.href = 'inventory.html';
    // }};

//   let redirectURL = '';

//   const redirectPage = function (url) {
//   redirectURL = url;
//   location.assign(url);
// };
//     redirectPage("inventory.html")


// eventlistener for submit button on form
// inventoryForm.addEventListener('submit', function (event) {
//   event.preventDefault();  
//   submit()
// });

//Homepage Trackers Script
//Products under PAR List
function orderSoon() {
const inventory = JSON.parse(localStorage.getItem('inputInfo'));
const needToBeOrdered = inventory.filter(name => name.par > name.quantity);

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

