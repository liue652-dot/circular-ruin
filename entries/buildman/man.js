
document.querySelectorAll(".draggable").forEach(el => {

  let dragging = false, x = 0, y = 0, offX = 0, offY = 0;

  el.addEventListener("mousedown", e => {

    dragging = true;

    const m = new DOMMatrixReadOnly(getComputedStyle(el).transform);
    x = m.m41;
    y = m.m42;

    offX = e.clientX - x;
    offY = e.clientY - y;

    el.style.cursor = "grabbing";

    const move = e => {
      if (!dragging) return;
      x = e.clientX - offX;
      y = e.clientY - offY;
      el.style.transform = `translate(${x}px,${y}px)`;
    };

    const stop = () => {
      dragging = false;
      el.style.cursor = "grab";
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
  });
});


const links = [
  { text: "Circular Temple", url: "../circtemple/circ1.html" },
  { text: "Phantom", url: "../phantom/phan.html" },
  { text: "Fire", url: "../fire/fire.html" },
  { text: "Heart", url: "../heart/heart.html" },
  { text: "North Temple", url: "../northtemple/north1.html" },
  { text: "Student", url: "../students/stud.html" }
];

const EDGE = 100;
const DIST = 160;
const placed = [];

function far(x, y) {
  return placed.every(p => Math.hypot(p.x - x, p.y - y) > DIST);
}

links.forEach(link => {

  const a = document.createElement("a");
  a.className = "floating-link";
  a.href = link.url;
  a.textContent = link.text;

  let x, y, tries = 0;

  do {
    x = EDGE + Math.random() * (innerWidth - EDGE * 2);
    y = EDGE + Math.random() * (innerHeight - EDGE * 2);
    tries++;
  } while (!far(x, y) && tries < 100);

  placed.push({ x, y });

  a.style.left = x + "px";
  a.style.top = y + "px";
  a.style.animationDuration = 4 + Math.random() * 3 + "s";

  document.body.appendChild(a);
});
