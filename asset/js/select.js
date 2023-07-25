const selectEvent = (selectBox, option, selectedValue) => {
  selectBox.addEventListener("click", (event) => {
    event.stopPropagation(); // 이벤트 전파 막기
    selectBox.classList.toggle("active");
    
  });
  option.forEach((optionElement) => {
    optionElement.addEventListener("click", (event) => {
      event.stopPropagation(); // 이벤트 전파 막기
      selectOption(optionElement, selectBox);
    });
  });
  function selectOption(optionElement, selectBox) {
    let selectedText = optionElement.querySelector("button").textContent;

    selectedValue.textContent = selectedText;
    selectBox.classList.remove("active");
    if(selectBox.classList.contains("select-input")){
        
    const selectionStart = defaultTemplate.value.indexOf(
    "\n",
    defaultTemplate.selectionStart);
      selectJsonInput(selectedText, selectionStart)
    }else if(selectBox.classList.contains("select-indent")){
      selectIndent(optionElement);
    }else{
      //laguage 관련
    }
  }
  document.addEventListener("click", (event) => {
    const target = event.target;
    const selectWrap = document.querySelector("#datagen-input .select-input");

    if (!selectWrap.contains(target)) {
      selectBox.classList.remove("active");
    }
  });
};
function selectJsonInput(selectedText, selectionStart){
  if (templateMapping[selectedText]) {
    selectedData = templateMapping[selectedText];
  }
    if (selectionStart === -1) {
      const braceStartIndex = defaultTemplate.value.lastIndexOf("}");
      if (braceStartIndex !== -1) {
        const commaIndex = defaultTemplate.value.lastIndexOf(
          ",",
          braceStartIndex
        );

        if (commaIndex !== -1) {
          const beforeNameStr = defaultTemplate.value.slice(0, commaIndex + 1);
          const afterNameStr = defaultTemplate.value.slice(commaIndex + 1);
          const newValue =
            beforeNameStr + "\n" + "      " + selectedData + afterNameStr;

          defaultTemplate.value = newValue;
        }
      }
    } else {
      const beforeNameStr = defaultTemplate.value.slice(0, selectionStart + 1);
      const afterNameStr = defaultTemplate.value.slice(selectionStart + 1);
      console.log(beforeNameStr);
      console.log(afterNameStr);
      const newValue =
        beforeNameStr + "      " + selectedData + "\n" + afterNameStr;
      console.log(newValue);

      defaultTemplate.value = newValue;
    }
  }

  function selectIndent(optionElement){
    const selectedButton = optionElement.querySelector('button');
    const indentValue = selectedButton.value;
    // console.log(selectedText)
    const output = document.querySelector('#json-output');
    if (output && output.value) {
      console.log(indentValue);
      let parsedOutput = JSON.parse(output.value);
      output.value = JSON.stringify(parsedOutput, null, parseInt(indentValue));
  }
}



  const templateMapping = {
    "uuid: user id 생성": `"uuid": "<uuid()>",`,
    index: `"index": "<index(integer)>",`,
    username: `"username": "<username()>",`,
    password: `"password": "<password(min_length, max_length)>",`,
    int: `"int": "<int(min, max)>",`,
    float: `"float": "<float(min, max, round)>",`,
    boolean: `"boolean": "<boolean()>",`,
    random: `"random": "<random("item1", "item2", "item3", …)>",`,
    lorem: `"lorem": "<lorem(number, unit)>",`,
    picture: `"picture": "<picture(width, height)>",`,
    color: `"color": "<color()>",`,
    name: `"name": "<name()>",`,
    email: `"email": "<email()>",`,
    phone: `"phone": "<phone()>",`,
    country: `"country": "<country()>",`,
    city: `"city": "<city()>",`,
    address: `"address": "<address()>",`,
    "postal-code": `"postal-code": "<postal-code()>",`,
    job: `"job": "<job()>",`,
    company: `"company": "<company()>",`,
    creditCardNumber: `"creditCardNumber": "<creditCardNumber()>",`,
    gender: `"gender": "<gender()>",`,
    urls: `"urls": "<urls()>",`,
    money: `"money": "<money(min, max, symbol)>",`,
    date: `"date": "<date(date_start, date_end, date_format)>",`,
    time: `"time": "<time()>",`,
    iter: `"iter": "<iter(number)>",`,
    function: `"function": "<function() { functionString }>",`,
  };

  
  

  

const defaultTemplate = document.querySelector("#json-input");
defaultTemplate.value = `[
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

const selectBoxInput = document.querySelector("#datagen-input .select-input");
const optionInput = document.querySelectorAll(
  "#datagen-input .select-input li"
);
const selectedValueInput = document.querySelector(
  ".select-input .selected-value"
);
selectEvent(selectBoxInput, optionInput, selectedValueInput, defaultTemplate);

const selectBoxIndent = document.querySelector(".select-indent");
const optionIndent = document.querySelectorAll(".select-indent li");
const selectedValueIndent = document.querySelector(
  ".select-indent .selected-value"
);
selectEvent(selectBoxIndent, optionIndent, selectedValueIndent);

const selectBoxLang = document.querySelector(".select-language");
const optionLang = document.querySelectorAll(".select-language li");
const selectedValueLang = document.querySelector(
  ".select-language .selected-value"
);
selectEvent(selectBoxLang, optionLang, selectedValueLang);

