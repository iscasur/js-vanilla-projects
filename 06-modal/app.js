const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');

const modal = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', () => {
  // modal.classList.toggle('open-modal');
  modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
  // modal.classList.toggle('open-modal');
  modal.classList.remove('open-modal');
});
