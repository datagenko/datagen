const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const bottomSheetModal = document.getElementById('bottomSheetModal');
const modalContent = document.querySelector('.modal-content');

openModalBtn.addEventListener('click', () => {
    bottomSheetModal.style.height = '100%';
});

closeModalBtn.addEventListener('click', () => {
    bottomSheetModal.style.height = '0';
    resetToggleRecord();
});

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

// 모달 내용 변경 시 호출
function updateModalContent(newContent) {
    modalContent.innerHTML = newContent;
    checkScroll();
}

// 초기 모달 내용 확인
checkScroll();

// 토글
const toggleButtons = document.querySelectorAll('#toggle-button');
const toggleContents = document.querySelectorAll('.toggle-content');

toggleButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        const toggleContent = button.nextElementSibling;
        toggleContent.classList.toggle('active');
    });
});

// 토글 이외의 영역을 클릭 시 토글을 닫기
document.addEventListener('click', (event) => {
    const target = event.target;

    if (
        target.classList.contains('toggle-button') ||
        target.classList.contains('toggle-content')
    ) {
        return;
    }
    resetToggleRecord();
});

// 토글 레코드를 리셋하는 함수
function resetToggleRecord() {
    // 모든 토글 콘텐츠를 비활성화(숨김) 상태로 설정합니다.
    toggleContents.forEach((content) => {
        content.classList.remove('active');
    });
}
