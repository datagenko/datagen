const settingBtn = document.querySelector('.btn-setting');
const settingModal = document.querySelector('.setting-list');
const textArea = document.querySelector('#json-output');
const closeBtn = settingModal.querySelector('.btn-setting_close');

const copyBtn = document.querySelector('.btn-copy');
const jsonOutputText = document.querySelector('#json-output');

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
