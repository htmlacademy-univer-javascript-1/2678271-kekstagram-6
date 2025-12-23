import {renderPictures} from './pictures.js';
import './form.js';
import {getData} from './api.js';

getData()
  .then((wizards) => {
    renderPictures(wizards);
  })
  .catch((error) => {
    const errorBlock = document.querySelector('.form__send_error');
    errorBlock.classList.remove('hidden');
    errorBlock.textContent = error.message;

    setTimeout(() => {
      errorBlock.classList.add('hidden');
      errorBlock.textContent = '';
    }, 3000);
  });
