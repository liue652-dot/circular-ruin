const mirror = document.getElementById("mirrorScene");
const black = document.getElementById("blackScene");
const angel = document.getElementById("angelScene");

const trigger = document.getElementById("angelTrigger");
const text = document.getElementById("storyText");
const finalAngel = document.getElementById("finalAngel");
const menu = document.getElementById("menu");
const whiteFade = document.getElementById("whiteFade");

trigger.onclick = function () {
  mirror.classList.remove("active");
  black.classList.add("active");

  setTimeout(() => {
    text.style.opacity = "1";
  }, 1000);
};

black.onclick = function () {

  text.style.opacity = "0";

  black.classList.remove("active");
  angel.classList.add("active");

  setTimeout(() => {
    finalAngel.style.filter = "brightness(6)";
  }, 2000);

  setTimeout(() => {
    whiteFade.style.opacity = "1";
  }, 4000);

  setTimeout(() => {
    angel.classList.remove("active");
  }, 7000);

  setTimeout(() => {
    menu.style.opacity = "1";
    menu.style.pointerEvents = "all";
  }, 7500);
};
