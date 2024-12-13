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