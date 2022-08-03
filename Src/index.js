let TesterScreen = document.getElementById("big_screen");
let TestingColors = ["white", "black", "#FF0000", "#00FF00", "#0000FF"];
let Button = document.querySelector(".button_wrapper button");
let Index = 1;

const OpenFullScreen = (e) => {
  Index = 0;
  NaivageColors();
  if (TesterScreen.requestFullscreen) {
    TesterScreen.requestFullscreen();
  } else if (TesterScreen.webkitRequestFullscreen) {
    TesterScreen.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    TesterScreen.msRequestFullscreen();
  }
};

const NaivageColors = (e = null) => {
  TesterScreen.style.backgroundColor = TestingColors[Index];
  Index++;
  if (Index == TestingColors.length) {
    Index = 0;
  }
};

TesterScreen.addEventListener("click", NaivageColors);
Button.addEventListener("click", OpenFullScreen);
