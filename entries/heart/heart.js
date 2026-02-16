document.addEventListener("DOMContentLoaded", function () {

  const longText = document.getElementById("longText");

  setTimeout(() => {
    longText.classList.remove("hidden");
    longText.style.opacity = "1";
  }, 18000);

});

const words = document.querySelectorAll(".word");

setTimeout(() => {
  words.forEach(word => {
    word.style.opacity = "0.85";
  });
}, 15000);
