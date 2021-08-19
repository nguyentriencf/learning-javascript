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
    overlay.classList.add('hidden');
}
for (let i = 0; i < btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keyup là sự kiện khi thả tay ra khỏi phím
//keypress là sự kiện khi nhấn giữ một phím nào đó
// key down là sự kiên khi nhấn một phím bất kì
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hiiden'))
        closeModal();
})