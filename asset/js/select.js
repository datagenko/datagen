const selectBox = document.querySelector("#datagen-input .select-wrap");
const selectBtn = document.querySelector("#datagen-input .selected");
const selectList = document.querySelector("#select-box");
const option = document.querySelectorAll("option");
const selected = document.querySelector(".selected-value");
const inputJson = document.querySelector("#json-input");
let selectionStart = 0;
inputJson.value = 
`[
  "{{repeat(5)}}",
  {
      "_id": "{{id()}}",
      "index": "{{index()}}",
      "picture": "http://via.placeholder.com/32x32",
      "age": "{{integer(20, 40)}}",
      "eyeColor": "{{random('blue', 'brown', 'green')}}",
      "name": "{{name()}}"
  }
]`;

selectBox.addEventListener("click", () => {
  // selectList.classList.toggle("active");
  // selectBtn.classList.toggle("active");
  selectBox.classList.toggle("active");
});

option.forEach((optionElement) => {
  optionElement.addEventListener("click", () => {
    
    selectOption(optionElement, selectionStart);
  });
});

inputJson.addEventListener('click', function(e) {
  return selectionStart = inputJson.value.indexOf('\n', e.target.selectionStart);
});

function selectOption(optionElement, selectionStart) {
  const beforeNameStr = inputJson.value.slice(0, selectionStart + 1);
  const afterNameStr = inputJson.value.slice(selectionStart + 1);
console.log(beforeNameStr);
console.log(afterNameStr);
  const newValue = beforeNameStr + '\n' + optionElement.value + '\n' + afterNameStr;
  console.log(newValue);

  inputJson.value = newValue;
  
  const selectBox = optionElement.closest(".select-wrap");
  const selectedElement = selectBox.querySelector(".selected-value");
 // selectedElement.textContent = optionElement.value;
}

const select = document.querySelector("#select-box");
const selectedValue = document.querySelector("#selected-value");
select.addEventListener("change", function () {
  const selectedOptions = Array.from(select.selectedOptions, option => option.text);
  selectedValue.textContent = selectedOptions.join(", ");
});
