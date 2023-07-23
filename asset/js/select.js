const selectEvent = (selectBox, option, selectedValue) => {
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
    const selectedText = optionElement.querySelector('button').textContent;
    selectedValue.textContent = selectedText;
    selectBox.classList.remove('active');
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    const selectWrap = document.querySelector('#datagen-input .select-input');

    if (!selectWrap.contains(target)) {
      selectBox.classList.remove('active');
    }
  });
}

const selectBoxInput = document.querySelector('#datagen-input .select-input');
const optionInput = document.querySelectorAll('#datagen-input .select-input li');
const selectedValueInput = document.querySelector('.select-input .selected-value');
selectEvent(selectBoxInput, optionInput, selectedValueInput);

const selectBoxIndent = document.querySelector('.select-indent');
const optionIndent = document.querySelectorAll('.select-indent li');
const selectedValueIndent = document.querySelector('.select-indent .selected-value');
selectEvent(selectBoxIndent, optionIndent, selectedValueIndent);

const selectBoxLang = document.querySelector('.select-language');
const optionLang = document.querySelectorAll('.select-language li');
const selectedValueLang = document.querySelector('.select-language .selected-value');
selectEvent(selectBoxLang, optionLang, selectedValueLang);