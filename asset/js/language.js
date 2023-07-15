const languageBtn = document.querySelector('.language_button');
const languageList = document.querySelector('.language-list');

languageBtn.addEventListener('click', (e) => {
  languageList.classList.toggle('on');
});
languageList.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    languageBtn.textContent = e.target.textContent;
    languageList.classList.remove('on');
  }
});
