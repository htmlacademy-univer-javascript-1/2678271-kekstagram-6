import { createRandomIdFromRangeGenerator } from './util.js';
import {RANDOM_PHOTOS_COUNT} from './constants.js';

const default_ = document.querySelector('#filter-default');
const random = document.querySelector('#filter-random');
const discussed = document.querySelector('#filter-discussed');

function offPrevBtn(){

  if (default_.classList.contains('img-filters__button--active')){
    default_.classList.remove('img-filters__button--active');
  }
  if (random.classList.contains('img-filters__button--active')){
    random.classList.remove('img-filters__button--active');
  }
  if (discussed.classList.contains('img-filters__button--active')){

    discussed.classList.remove('img-filters__button--active');
  }
}

function btnToActive(btnName){
  offPrevBtn();
  btnName.classList.add('img-filters__button--active');
}

export const setDefault = (pictures, cb) => {
  default_.addEventListener('click', () => {
    btnToActive(default_);
    cb(pictures);
  });
};

export const setRandom = (pictures, cb) => {
  random.addEventListener('click', () => {
    btnToActive(random);

    const idGenerator = createRandomIdFromRangeGenerator(0, pictures.length - 1);
    const randomPictures = [];

    for(let i = 0; i < RANDOM_PHOTOS_COUNT; i++){
      randomPictures.push(pictures[idGenerator()]);
    }
    cb(randomPictures);
  });
};

export const setDiscussed = (pictures, cb) => {
  discussed.addEventListener('click', () => {
    btnToActive(discussed);
    const picturesCopy = pictures.slice();

    cb(picturesCopy.sort(compare));
  });
};

function compare(a, b) {
  return b.comments.length - a.comments.length;
}


