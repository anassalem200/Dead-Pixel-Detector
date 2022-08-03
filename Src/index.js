let TesterScreen = document.getElementById("big_screen");
let TestingColors = ["#fff", "#000", "#FF0000", "#06B050", "#0070C0"];
let Button = document.querySelector(".button_wrapper button");
let Index = 1;

const OpenFullScreen = (e) => {
  if (TesterScreen.requestFullscreen) {
    TesterScreen.requestFullscreen();
  } else if (TesterScreen.webkitRequestFullscreen) {
    TesterScreen.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    TesterScreen.msRequestFullscreen();
  }
};

TesterScreen.addEventListener("click", (e) => {
  TesterScreen.style.backgroundColor = TestingColors[Index];
  Index++;
  if (Index == TestingColors.length) {
    Index = 0;
  }
});
Button.addEventListener("click", OpenFullScreen);
