const settingBtn = document.querySelector('.btn-setting');
const settingModal = document.querySelector('.setting-list');
const textArea = document.querySelector('#json-output');
const closeBtn = settingModal.querySelector('.btn-setting_close');

const copyBtn = document.querySelector('.btn-copy');
const jsonOutputText = document.querySelector('#json-output');

const plusSizeBtn = document.querySelector('#increase-btn');
const minusSizeBtn = document.querySelector('#decrease-btn');
const resetSizeBtn = document.querySelector('#reset-btn');
const initialFontSize = parseInt(window.getComputedStyle(document.getElementById("json-input")).fontSize);

settingBtn.addEventListener('click', (e) => {
  if (
    settingModal.classList.contains('turn_off') &&
    textArea.classList.contains('turn_on')
  ) {
    settingModal.classList.remove('turn_off');
    settingModal.classList.add('turn_on');
    textArea.classList.remove('turn_on');
    textArea.classList.add('turn_off');
  } else if (
    settingModal.classList.contains('turn_on') &&
    textArea.classList.contains('turn_off')
  ) {
    settingModal.classList.remove('turn_on');
    settingModal.classList.add('turn_off');
    textArea.classList.remove('turn_off');
    textArea.classList.add('turn_on');
  }
});

closeBtn.addEventListener('click', (e) => {
  settingModal.classList.add('turn_off');
  settingModal.classList.remove('turn_on');
  textArea.classList.add('turn_on');
  textArea.classList.remove('turn_off');
});


function changeFontSize(operation, elements) {
  for (const elementId of elements) {
    let currentElement = document.getElementById(elementId);
    let currentSize = parseInt(window.getComputedStyle(currentElement).fontSize);
    let newSize;

    if (operation === 'plus') {
      newSize = currentSize + 5;
    } else if (operation === 'minus') {
      newSize = currentSize - 5;
    } else if (operation === 'reset') {
      newSize = initialFontSize;
    }

    currentElement.style.fontSize = newSize + 'px';
  }
}

plusSizeBtn.addEventListener('click', (e) => {
  changeFontSize('plus', ['json-input', 'json-output']);
});

minusSizeBtn.addEventListener('click', (e) => {
  changeFontSize('minus', ['json-input', 'json-output']);
});

resetSizeBtn.addEventListener('click', (e) => {
  changeFontSize('reset', ['json-input', 'json-output']);
});

copyBtn.addEventListener('click', (e) => {
  const textToCopy = jsonOutputText.value;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert('클립보드에 복사하였습니다.');
    })
    .catch((err) => {
      console.error('복사가 되지 않았습니다.', err);
    });
});
