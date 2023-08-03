const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const bottomSheetModal = document.getElementById('bottomSheetModal');
const modalContent = document.querySelector('.modal-content');

// HTML 요소를 동적으로 생성하는 함수
function createEl(options) {
  const { tagName, classNames, parentEl, text, idName } = options;

  const element = document.createElement(tagName);

  if (classNames) {
    classNames.forEach((className) => {
      element.classList.add(className);
    });
  }

  if (text) element.innerText = text;
  if (idName) element.id = idName;

  parentEl.appendChild(element);

  return element;
}

async function loadJSON(language) {
  const path =
    language === 'Korean'
      ? 'asset/js/guideData_KR.json'
      : 'asset/js/guideData_ENG.json';
  try {
    const response = await fetch(path);
    const jsonData = response.json();
    return jsonData;
  } catch (error) {
    console.error('Error loading JSON file:', error);
  }
}

// guideData를 추가하기 위한 함수
async function addGuideToModalContent(language) {
  const guideData = await loadJSON(language);
  modalContent.innerHTML = '';

  for (const data of guideData) {
    const toggle = createEl({
      tagName: 'div',
      classNames: ['toggle'],
      parentEl: modalContent,
    });

    const toggleButton = createEl({
      tagName: 'button',
      parentEl: toggle,
      text: `${data.keyname} ⬇`,
      idName: 'toggle-button',
    });

    const toggleContent = createEl({
      tagName: 'div',
      classNames: ['toggle-content'],
      parentEl: toggle,
    });

    // Description
    createEl({
      tagName: 'p',
      parentEl: toggleContent,
      text: data.description,
    });

    // Usage
    const usgContainer = createEl({
      tagName: 'div',
      parentEl: toggleContent,
    });
    createEl({
      tagName: 'span',
      parentEl: usgContainer,
      text: 'Usage',
    });
    createEl({
      tagName: 'code',
      parentEl: usgContainer,
      text: data.usage,
    });

    // Arguments
    if (data.arguments) {
      const wrapTable = createEl({
        tagName: 'div',
        classNames: ['wrap-table'],
        parentEl: toggleContent,
      });
      createEl({
        tagName: 'span',
        parentEl: wrapTable,
        text: 'Arguments',
      });
      const table = createEl({
        tagName: 'table',
        classNames: ['table'],
        parentEl: wrapTable,
      });

      // Arguments-head
      const headerTr = createEl({
        tagName: 'tr',
        parentEl: table,
      });
      ['Params', 'Type', 'Details'].forEach((item) => {
        createEl({
          tagName: 'th',
          parentEl: headerTr,
          text: item,
        });
      });

      // Arguments-body
      for (const argData of data.arguments) {
        const bodyTr = createEl({
          tagName: 'tr',
          parentEl: table,
        });
        // Params
        createEl({
          tagName: 'td',
          parentEl: bodyTr,
          text: argData.param,
        });
        // Type
        const argType = createEl({
          tagName: 'td',
          parentEl: bodyTr,
        });
        createEl({
          tagName: argData.type,
          parentEl: argType,
          text: argData.type,
        });
        // Datails
        createEl({
          tagName: 'td',
          parentEl: bodyTr,
          text: argData.detail,
        });
      }
    }

    // Returns
    const rtnContainer = createEl({
      tagName: 'div',
      parentEl: toggleContent,
    });
    createEl({
      tagName: 'span',
      parentEl: rtnContainer,
      text: 'Returns',
    });
    createEl({
      tagName: data.returns,
      parentEl: rtnContainer,
      text: data.returns,
    });

    checkScroll();

    // 토글 버튼 클릭 이벤트 리스너 추가
    toggleButton.addEventListener('click', () => {
      toggleContent.classList.toggle('active');
      // 초기 모달 내용 확인
      checkScroll();
    });
  }
}
// 모달 창의 내용 높이와 스크롤 높이를 비교하여 스크롤이 필요한지 여부를 결정
function checkScroll() {
  // 모달 창 내용의 실제 높이
  const contentHeight = modalContent.clientHeight;
  //모달 창의 콘텐츠가 모두 표시될 때 필요한 높이
  const scrollHeight = modalContent.scrollHeight;

  if (scrollHeight > contentHeight) {
    modalContent.style.overflowY = 'auto'; // 세로 스크롤 활성화
  } else {
    modalContent.style.overflowY = 'visible'; // 세로 스크롤 비활성화
  }
}

// 페이지 로드 시 guideData를 modal-content에 추가
document.addEventListener('DOMContentLoaded', addGuideToModalContent('Korean'));

openModalBtn.addEventListener('click', () => {
  bottomSheetModal.style.height = '100%';
});

closeModalBtn.addEventListener('click', () => {
  bottomSheetModal.style.height = '0';
  resetToggleRecord();
});

// 토글 레코드를 리셋하는 함수
function resetToggleRecord() {
  // 모든 토글 콘텐츠를 비활성화(숨김) 상태로 설정합니다.
  const toggleContents = document.querySelectorAll('.toggle-content');
  toggleContents.forEach((content) => {
    content.classList.remove('active');
  });
}

// 모달 내용 변경 시 호출
// 미사용으로 인한 주석처리
// function updateModalContent(newContent) {
//   modalContent.innerHTML = newContent;
//   checkScroll();
// }
