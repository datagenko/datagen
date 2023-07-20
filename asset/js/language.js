const languageBtn = document.querySelector('.language-button');
const languageList = document.querySelector('.language-list');

const closeLanguageList = () => {
  languageList.classList.remove('on');
  languageBtn.classList.remove('on');
};

languageBtn.addEventListener('click', (e) => {
  languageList.classList.toggle('on');
  languageBtn.classList.toggle('on');
});

document.addEventListener('click', (e) => {
  const target = e.target;
  if (!languageBtn.contains(target) && !languageList.contains(target)) {
    closeLanguageList();
  }
});

languageList.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    languageBtn.textContent = e.target.textContent;
    closeLanguageList();
  }
});
