const settingBtn = document.querySelector(".btn-setting");
const settingModal = document.querySelector(".setting-list");
const closeBtn = settingModal.querySelector(".btn-setting_close");

const copyBtn = document.querySelector(".btn-copy");
const wordWrapSwitch = settingModal.querySelector(".word-wrap_switch input");
const plusSizeBtn = document.querySelector('#increase-btn');
const minusSizeBtn = document.querySelector('#decrease-btn');
const resetSizeBtn = document.querySelector('#reset-btn');
const jsonOutputText = document.querySelector("#json-output");

const initialFontSize = parseInt(window.getComputedStyle(document.getElementById("json-input")).fontSize);

function changeFontSize(operation, elements) {
  for (const elementId of elements) {
    let currentElement = document.getElementById(elementId);
    let currentSize = parseInt(window.getComputedStyle(currentElement).fontSize);
    let newSize;

    if (operation === 'plus') {
      newSize = currentSize + 5;
    } else if (operation === 'minus') {
      newSize = currentSize - 5;
    } else if (operation === 'reset') {
      newSize = initialFontSize;
    }

    currentElement.style.fontSize = newSize + 'px';
  }
}

settingBtn.addEventListener("click", () => {
  settingModal.classList.toggle("turn_on");
});

closeBtn.addEventListener("click", () => {
  settingModal.classList.remove("turn_on");
});

// 셋팅 이외의 영역 클릭 시 셋팅 닫기
document.addEventListener('click', (event) => {
  const target = event.target;
  if (
    target.classList.contains('btn-setting') ||
    target.closest('.setting-list')
  ) {
    return;
  } else {
    settingModal.classList.remove("turn_on");
  }
});

plusSizeBtn.addEventListener('click', (e) => {
  changeFontSize('plus', ['json-input', 'json-output']);
});

minusSizeBtn.addEventListener('click', (e) => {
  changeFontSize('minus', ['json-input', 'json-output']);
});

resetSizeBtn.addEventListener('click', (e) => {
  changeFontSize('reset', ['json-input', 'json-output']);
});

wordWrapSwitch.addEventListener("click", (e) => {
  if (e.target.checked) {
    jsonOutputText.style.setProperty("white-space", "pre-wrap");
  } else {
    jsonOutputText.style.setProperty("white-space", "pre");
  }
});

copyBtn.addEventListener("click", () => {
  const textToCopy = jsonOutputText.value;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("클립보드에 복사하였습니다.");
    })
    .catch((err) => {
      console.error("복사가 되지 않았습니다.", err);
    });
});

function changeIndentSize(elements) {
  let indentValue = document.querySelector(".select-indent .selected-value").textContent;

  for (const elementId of elements) {
    let currentElement = document.getElementById(elementId);
    let parsedValue;

    if (currentElement.value !== "") {
      try {
        parsedValue = JSON.parse(currentElement.value);
      } catch (error) {
        // json-output이 아직 생성되지 않은 경우 에러메시지 숨기기 위해 예외처리
      }

      if (parsedValue) {
        currentElement.value = JSON.stringify(
          parsedValue,
          null,
          parseInt(indentValue)
        );
      }
    }
  }
}