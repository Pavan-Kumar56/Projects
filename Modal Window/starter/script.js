'use strict';

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
// console.log(btnShowModal);

// refactoring the duplicate code
const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', open);
// modal.classList.remove('hidden');
// overlay.classList.remove('hidden');

// refactoring the duplicate code
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closeModal.addEventListener('click', close);
// modal.classList.add('hidden');
// overlay.classList.add('hidden');
overlay.addEventListener('click', close);
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// event to happen when a key is pressed
document.addEventListener('keydown', function (p) {
  // console.log(p.key);
  if (p.key === 'Escape' && !modal.classList.contains('hidden')) close();
});
