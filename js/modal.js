export const showModal = (templateId) => {
  const template = document.querySelector(`#${templateId}`);
  const modal = template.content.cloneNode(true).querySelector('section');
  const button = modal.querySelector('button');


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
    modal.remove();
    document.removeEventListener('keydown', onKeydown);
    modal.removeEventListener('click', onOverlayClick);
    button.removeEventListener('click', closeModal);
  }

  document.body.appendChild(modal);
  document.addEventListener('keydown', onKeydown);
  modal.addEventListener('click', onOverlayClick);
  button.addEventListener('click', closeModal);
};
