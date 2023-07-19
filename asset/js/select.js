const selectBox = document.querySelector('#datagen-input .select-wrap');
const option = document.querySelectorAll('#datagen-input .select-wrap li');
const selectedValue = document.querySelector('#selected-value');

selectBox.addEventListener('click', (event) => {
  event.stopPropagation(); // 이벤트 전파 막기
  selectBox.classList.toggle('active');
});

option.forEach((optionElement) => {
  optionElement.addEventListener('click', (event) => {
    event.stopPropagation(); // 이벤트 전파 막기
    selectOption(optionElement);
  });
});

function selectOption(optionElement) {
  const selectedText = optionElement.querySelector('a').textContent;
  selectedValue.textContent = selectedText;
  selectBox.classList.remove('active');
}

document.addEventListener('click', (event) => {
  const target = event.target;
  const selectWrap = document.querySelector('#datagen-input .select-wrap');

  if (!selectWrap.contains(target)) {
    selectBox.classList.remove('active');
  }
});