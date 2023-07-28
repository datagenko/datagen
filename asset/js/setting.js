const settingList = document.querySelector(".setting-list");
const lineWrap = settingList.querySelector(".setting-line-wrap");
const jsonOutput = document.querySelector("#json-output");

lineWrap.addEventListener("click", (e) => {
  e.target.classList.toggle("on");

  if (e.target.classList.contains("on")) {
    jsonOutput.style.setProperty("white-space", "pre-wrap");
  } else {
    jsonOutput.style.setProperty("white-space", "pre");
  }
});
