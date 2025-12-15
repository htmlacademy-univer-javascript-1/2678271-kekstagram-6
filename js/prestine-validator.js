const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

export const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'field-wrapper--invalid',
  successClass: 'field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);


function validateHashtags(value) {
  if (!value) {
    return true;
  }

  const tags = value.trim().split(/\s+/).map((tag) => tag.toLowerCase());

  if (tags.length > 5) {
    return false;
  }

  const pattern = /^#[a-zа-яё0-9]{1,19}$/i;
  for (const tag of tags) {
    if (!pattern.test(tag)) {
      return false;
    }
  }

  const uniqueTags = new Set(tags);
  return uniqueTags.size === tags.length;
}


function hashtagErrorMsg(value) {
  if (!value) {
    return '';
  }

  const tags = value.trim().split(/\s+/).map((tag) => tag.toLowerCase());

  if (tags.length > 5) {
    return 'Нельзя указать больше 5 хэш-тегов';
  }

  const pattern = /^#[a-zа-яё0-9]{1,19}$/i;
  for (const tag of tags) {
    if (!pattern.test(tag)) {
      return 'Введен невалидный хэш-тег';
    }
  }

  const uniqueTags = new Set(tags);
  if (uniqueTags.size !== tags.length) {
    return 'Хэш-теги не должны повторяться';
  }
  return '';
}

pristine.addValidator(hashtagInput, validateHashtags, hashtagErrorMsg);

function validateComment(value) {
  return value.length <= 140;
}

pristine.addValidator(commentInput, validateComment, 'Комментарий не должен быть длиннее 140 символов');
