const intro = document.getElementById("intro");
const question = document.getElementById("question");
const temple = document.getElementById("temple");
const faceTrigger = document.getElementById("faceTrigger");

faceTrigger.addEventListener("click", () => {
  intro.classList.add("hidden");
  question.classList.remove("hidden");
});

function checkAnswer(answer) {
  if (answer === "dream") {
    question.classList.add("hidden");
    temple.classList.remove("hidden");
  } else {
    alert("Incorrect. You remain here.");
  }
}
