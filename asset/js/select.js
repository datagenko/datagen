const selectBox = document.querySelector('.select-wrap');
const selectList = document.querySelector('#select-box');
const arrow = document.querySelector('.arrow');
const option = document.querySelectorAll('.option');
const selected = document.querySelector('.selected-value');

selectBox.addEventListener('click', () => {
  selectList.classList.toggle('active');
  arrow.classList.toggle('active');
});

option.forEach((optionElement) => {
  optionElement.addEventListener('click', () => {
    selectOption(optionElement);
  });
});

function selectOption(optionElement) {
  const selectBox = optionElement.closest('.select-wrap');
  const selectedElement = selectBox.querySelector('.selected-value');
  selectedElement.textContent = optionElement.textContent;
}
