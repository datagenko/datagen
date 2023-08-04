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

const footerTitle = document.querySelector('.footer-title');
const footerContent = document.querySelector('.footer-subtitle');
const selectedValueElement = document.querySelector('.select-input .selected-value');
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
  const language = document.querySelector('.language-select .selected-value').innerText
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      if (language === 'KO') {
      alert("클립보드에 복사하였습니다.");
      } else if (language === 'ENG'){
        alert("Copied to clipboard.");
      }
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
//해당 함수에서 작업
function changeLanguage(language) {
  if (language === 'Korean') {
    selectedValueElement.innerText = `\`key\`값을 선택하세요`;
    footerTitle.innerHTML = `서비스를 만들거나 데이터 분석을 할 때 필요한 데이터를 생성할 수 있는 프로젝트입니다`;
    footerContent.innerHTML = `이 자료는 많은 개발자들의 도움을 받아 제작되었습니다. 누구나 허락없이 사용할 수 있는 공공재입니다.<br /><br />DataGen. ⓒ2023. All Right Reserved.`;
  } else if (language === 'English') {
    selectedValueElement.innerText = `Please select a \`key\` value`;
    footerTitle.innerHTML = `This project allows for generating data needed for building services or data analysis.`;
    footerContent.innerHTML =  `datagenerator.co.kr is an open-source project crafted with contributions from numerous developers. It is a public good that anyone can use without permission. We welcome contributions and encourage collaboration from anyone interested in improving this project. <br /><br />DataGen. ⓒ2023. All Right Reserved.`;
  }
}
