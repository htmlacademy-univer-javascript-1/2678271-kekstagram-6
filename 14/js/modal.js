export const showModal = (modalSelector, buttonSelector) => {

  const modal = document.querySelector(modalSelector);
  const button = modal.querySelector(buttonSelector);

  const onKeydown = (evt) => {
    if (evt.key !== 'Escape') {
      return;
    }

    evt.preventDefault();
    closeModal();
  };

  const onOverlayClick = (evt) => {
    if (evt.target === modal) {
      closeModal();
    }
  };

  function closeModal() {
    modal.classList.add('hidden');
    document.removeEventListener('keydown', onKeydown);
    modal.removeEventListener('click', onOverlayClick);
    button.removeEventListener('click', closeModal);
  }

  modal.classList.remove('hidden');
  document.addEventListener('keydown', onKeydown);
  modal.addEventListener('click', onOverlayClick);
  button.addEventListener('click', closeModal);
};
