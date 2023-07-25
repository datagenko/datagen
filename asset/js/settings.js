const settingBtn = document.querySelector(".btn-setting");
const settingModal = document.querySelector(".setting-list");
const closeBtn = settingModal.querySelector(".btn-setting_close");

const copyBtn = document.querySelector(".btn-copy");
const jsonOutputText = document.querySelector("#json-output");

settingBtn.addEventListener("click", () => {
  settingModal.classList.toggle("turn_on");
});

closeBtn.addEventListener("click", () => {
  settingModal.classList.remove("turn_on");
});

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
