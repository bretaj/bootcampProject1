//Counters Script
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
    // (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    //   const $target = $close.closest('.modal');
  
    //   $close.addEventListener('click', () => {
    //     closeModal($target);
    //   });
    // });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });
  // END MODAL SCRIPT

  // variables for grabbing stuff from HTML
const catInput = document.querySelector('#productCat')
const nameInput = document.querySelector('#productName')
const quantInput = document.querySelector('#productQuant')
const parInput = document.querySelector('#par')
const locationInput = document.querySelector('#location')
const inventoryForm = document.querySelector('#inventoryForm')
const errorMsg = document.querySelector('#error')


// function for form submission, storing in local storage, then redirects to inventory page

function submit() {
    // event.preventDefault();

    if (catInput.value=='' || nameInput.value == '' || quantInput.value == '' || parInput.value == '' || locationInput.value == '') {
        errorMsg.textContent = 'Please complete the form.'
        return
    }
    const inventory = {
        ProductCategory: catInput.value,
        ProductName: nameInput.value,
        ProductQuantity: quantInput.value,
        MinimumProductRequired: parInput.value,
        ProductLocation: locationInput.value,
    }

    localStorage.setItem(`inventory`, JSON.stringify(inventory));

  // storeLocalStorage(inventory);

  let redirectURL = '';

  const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
    redirectPage("inventory.html")
}

// eventlistener for submit button on form
inventoryForm.addEventListener('submit', function (event) {
  event.preventDefault();  
  submit()
});