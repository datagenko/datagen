const languageBtn = document.querySelector('.language_button');
const languageList = document.querySelector('.language-list');

languageBtn.addEventListener('click', (e) => {
  languageList.classList.toggle('on');
  if (languageList.classList.contains('on')) {
    languageBtn.classList.add('on');
  } else {
    languageBtn.classList.remove('on');
  }
});

languageList.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    languageBtn.textContent = e.target.textContent;
    languageList.classList.remove('on');
    languageBtn.classList.remove('on');
  }
});
