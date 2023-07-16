const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const bottomSheetModal = document.getElementById('bottomSheetModal');

openModalBtn.addEventListener('click', () => {
    bottomSheetModal.style.height = '100%';
  });
  
  closeModalBtn.addEventListener('click', () => {
    bottomSheetModal.style.height = '0';
  });