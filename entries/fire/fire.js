continueBtn.addEventListener("click", () => {

  mainText.classList.add("exit");

  setTimeout(() => {
    mainText.classList.add("hidden");

    navLinks.classList.remove("hidden");
    navLinks.style.opacity = "1";

  }, 2000);
});
