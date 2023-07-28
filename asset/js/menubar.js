import guideData from './guideData.js';

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

// guideData를 추가하기 위한 함수
function addGuideToModalContent() {
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
    const usage = createEl({
      tagName: 'div',
      parentEl: toggleContent,
    });
    createEl({
      tagName: 'span',
      parentEl: usage,
      text: 'Usage',
    });
    createEl({
      tagName: 'code',
      parentEl: usage,
      text: data.usage,
    });

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
document.addEventListener('DOMContentLoaded', addGuideToModalContent);

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
