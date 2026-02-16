window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 200);
});

document.addEventListener("click", () => {
  window.location.href = "home2.html";
});

