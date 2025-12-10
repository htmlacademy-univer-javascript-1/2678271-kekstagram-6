const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const caption = bigPicture.querySelector('.social__caption');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');
const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
}

function renderComments(comments) {
  const fragment = document.createDocumentFragment();
  commentsList.innerHTML = '';

  comments.forEach(({avatar, name, message}) => {
    const li = document.createElement('li');
    li.classList.add('social__comment');

    li.innerHTML = `
      <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
      <p class="social__text">${message}</p>
    `;

    fragment.appendChild(li);
  });

  commentsList.appendChild(fragment);
}

export function openBigPicture({url, description, likes, comments}) {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = url;
  bigPictureImg.alt = description;

  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;

  caption.textContent = description;

  commentCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  renderComments(comments);

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeBtn.addEventListener('click', closeBigPicture);

