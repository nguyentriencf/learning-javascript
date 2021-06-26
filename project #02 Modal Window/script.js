'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function() {
    modal.classList.add('hidden');
    modal.classList.add('hidden');
}
for (let i = 0; i < btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);