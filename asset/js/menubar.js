const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const bottomSheetModal = document.getElementById('bottomSheetModal');
const modalContent = document.querySelector('.modal-content');

openModalBtn.addEventListener('click', () => {
  bottomSheetModal.style.height = '100%';
});

closeModalBtn.addEventListener('click', () => {
  bottomSheetModal.style.height = '0';
});

// 모달 창의 내용 높이와 스크롤 높이를 비교하여 스크롤이 필요한지 여부를 결정
function checkScroll() {
    // 모달 창 내용의 실제 높이
  const contentHeight = modalContent.clientHeight;
    //모달 창의 콘텐츠가 모두 표시될 때 필요한 높이
  const scrollHeight = modalContent.scrollHeight;

  if (scrollHeight > contentHeight) {
    modalContent.style.overflowY = 'auto';  // 세로 스크롤 활성화
  } else {
    modalContent.style.overflowY = 'visible';  // 세로 스크롤 비활성화
  }
}

// 모달 내용 변경 시 호출
function updateModalContent(newContent) {
  modalContent.innerHTML = newContent;
  checkScroll();
}

// 초기 모달 내용 확인
checkScroll();