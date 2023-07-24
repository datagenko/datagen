const selectEvent = (selectBox, option, selectedValue) => {
  selectBox.addEventListener('click', (event) => {
    event.stopPropagation(); // 이벤트 전파 막기
    selectBox.classList.toggle('active');
  });

  option.forEach((optionElement) => {
    optionElement.addEventListener('click', (event) => {
      event.stopPropagation(); // 이벤트 전파 막기
      const selectionStart = defaultTemplate.value.indexOf('\n', defaultTemplate.selectionStart);
      selectOption(optionElement, selectionStart);
    });
  });

  function selectOption(optionElement, selectionStart) {
    let selectedText = optionElement.querySelector('button').textContent;
    console.log(selectedText);
    if(selectedText === "city"){
      selectedText = `"city": "<city()>",`
    }
    selectedValue.textContent = selectedText;
    selectBox.classList.remove('active');
    if (selectionStart === -1) {
      const braceStartIndex = defaultTemplate.value.lastIndexOf('}');
      if (braceStartIndex !== -1) {
        const commaIndex = defaultTemplate.value.lastIndexOf(',', braceStartIndex);
        
        if (commaIndex !== -1) {
          const beforeNameStr = defaultTemplate.value.slice(0, commaIndex+1);
          const afterNameStr = defaultTemplate.value.slice(commaIndex + 1);
          const newValue = beforeNameStr + '\n' + '      ' + selectedText +  afterNameStr;
  
          defaultTemplate.value = newValue;
        }
      }
    }else{
    const beforeNameStr = defaultTemplate.value.slice(0, selectionStart + 1);
    const afterNameStr = defaultTemplate.value.slice(selectionStart + 1);
    console.log(beforeNameStr);
    console.log(afterNameStr);
    const newValue = beforeNameStr + '      ' + selectedText + '\n' + afterNameStr;
    console.log(newValue);
  
    defaultTemplate.value = newValue;
  }
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    const selectWrap = document.querySelector('#datagen-input .select-input');

    if (!selectWrap.contains(target)) {
      selectBox.classList.remove('active');
    }
  });
}

const defaultTemplate = document.querySelector('#json-input');
defaultTemplate.value = 
`[
  "<iter(5)>",
  {
      "_id": "<uuid()>",
      "index": "<index(12)>",
      "name": "<name()>",
      "email": "<email()>",
      "phone": "<phone()>",
      "country": "<country()>",
      "address": "<address()>",
      "postal_code": "<postal_code()>",
      "job": "<job()>",
  }
]`;

const selectBoxInput = document.querySelector('#datagen-input .select-input');
const optionInput = document.querySelectorAll('#datagen-input .select-input li');
const selectedValueInput = document.querySelector('.select-input .selected-value');
selectEvent(selectBoxInput, optionInput, selectedValueInput, defaultTemplate);

const selectBoxIndent = document.querySelector('.select-indent');
const optionIndent = document.querySelectorAll('.select-indent li');
const selectedValueIndent = document.querySelector('.select-indent .selected-value');
selectEvent(selectBoxIndent, optionIndent, selectedValueIndent);

const selectBoxLang = document.querySelector('.select-language');
const optionLang = document.querySelectorAll('.select-language li');
const selectedValueLang = document.querySelector('.select-language .selected-value');
selectEvent(selectBoxLang, optionLang, selectedValueLang);



