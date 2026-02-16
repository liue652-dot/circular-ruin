document.addEventListener("DOMContentLoaded", () => {

  const glow = document.querySelector(".glow");
  const text = document.querySelector(".center-text");
  const container = document.querySelector(".hover-container");

  function setGlow(intensity = 2, spread = 70) {
    glow.style.background = `
      radial-gradient(circle at center,
        rgba(255,255,255,${intensity}) 1%,
        rgba(255,255,255,${intensity * 0.7}) 20%,
        rgba(255,255,255,${intensity * 0.4}) 40%,
        rgba(255,255,255,0) ${spread}%)
    `;
  }

  function introGlow() {
    let intensity = 0, spread = 50;

    const intro = setInterval(() => {
      intensity += 0.02;
      spread += 0.7;
      setGlow(intensity, spread);

      if (intensity >= 1) {
        clearInterval(intro);
        breatheGlow();
      }
    }, 40);
  }

  function breatheGlow() {
    let direction = 1, intensity = 1;

    setInterval(() => {
      intensity += 0.005 * direction;
      if (intensity >= 1.08 || intensity <= 0.95) direction *= -1;
      setGlow(intensity, 70);
    }, 60);
  }

  function generateBoxes() {
    const positions = [
      { top: 15, left: 53, text: "Dream a Man", link: "../buildman/man1.html" },
      { top: 20, left: 72, text: "Error", link: "../home/home.html"},
      { top: 30, left: 86, text: "Heart", link: "../heart/heart.html" },
      { top: 72, left: 85, text: "Error", link: "../home/home.html"},
      { top: 78, left: 60, text: "North Temple", link: "../northtemple/north1.html" },
      { top: 75, left: 30, text: "Student", link: "../students/stud.html" },
      { top: 60, left: 10, text: "Circular Temple", link: "circ1.html" },
      { top: 40, left: 10, text: "Error", link: "../home/home.html"},
      { top: 23, left: 20, text: "Phantom", link: "../phantom/phan.html" },
      { top: 50, left: 92, text: "Fire", link: "../fire/fire.html" }
    ];

    positions.forEach(pos => {
      const box = document.createElement("a");
      box.href = pos.link;
      box.className = "hover-box";
      box.style.top = pos.top + "%";
      box.style.left = pos.left + "%";
      box.innerHTML = `<span class="hover-text">${pos.text}</span>`;
      container.appendChild(box);
    });
  }

  generateBoxes();

  setTimeout(() => {
    introGlow();
    text.style.opacity = "1";
  }, 500);

});
