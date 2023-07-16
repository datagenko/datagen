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

function checkScroll() {
  const contentHeight = modalContent.clientHeight;
  const scrollHeight = modalContent.scrollHeight;

  if (scrollHeight > contentHeight) {
    modalContent.style.overflowY = 'auto';
  } else {
    modalContent.style.overflowY = 'visible';
  }
}

// 모달 내용 변경 시 호출
function updateModalContent(newContent) {
  modalContent.innerHTML = newContent;
  checkScroll();
}

// 초기 모달 내용 확인
checkScroll();