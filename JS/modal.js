const modal = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn");


const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//closeModalBtn.addEventListener('click', () => {document.getElementById('sign-in').style.display='block'});
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

window.addEventListener('load', openModal);

var is_modal_show = sessionStorage.getItem('alreadyShow');
if(is_modal_show != 'alredy shown'){
  $("#sign-in").show()
  sessionStorage.setItem('alreadyShow','alredy shown');
}