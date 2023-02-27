const MODAL_ACTIVE_CLASS_NAME = 'modal-active';

const formModal = document.querySelector('#form-modal');
const form = document.querySelector('#form');

const openFormModalBtn = document.querySelector('#open-form-modal-btn');
const closeBtns = document.querySelectorAll('.close-btn');

openFormModalBtn.addEventListener('click', () => {
  formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
});

const closeFormModal = () => {
  formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  clearFormFields();
};

closeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeFormModal();
  });
});

function clearFormFields() {
  const modalFiends = formModal.querySelector('textarea');
  modalFiends.value = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  closeFormModal();
});
