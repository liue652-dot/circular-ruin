const links = [
  { text: "Circular Temple", url: "../circtemple/circ1.html" },
  { text: "Phantom", url: "../phantom/phan.html" },
  { text: "Fire", url: "../fire/fire.html" },
  { text: "Heart", url: "../heart/heart.html" },
  { text: "North Temple", url: "../northtemple/north1.html" },
  { text: "Dream a Man", url: "../buildman/man.html" },
  { text: "Head", url: "../home/home.html" },
  { text: "Library", url: "../home/home.html" },
  { text: "Shift" , url: "../home/home.html"},
  { text: "Eye" , url: "../home/home.html"},
  { text: "Cosmo" , url: "../home/home.html"}
];

const scene = document.querySelector(".scene");
const centerText = document.querySelector(".center-text");
const ovalGlow = document.querySelector(".oval-glow");

const EDGE = 120;
const DIST = 180;
const PAD = 80;
const SPEED = 0.05;

const placed = [];
const movers = [];

function forbiddenRect() {
  const t = centerText.getBoundingClientRect();
  const g = ovalGlow.getBoundingClientRect();
  return {
    left: Math.min(t.left, g.left) - PAD,
    right: Math.max(t.right, g.right) + PAD,
    top: Math.min(t.top, g.top) - PAD,
    bottom: Math.max(t.bottom, g.bottom) + PAD
  };
}

function overlap(r) {
  const f = forbiddenRect();
  return !(r.right < f.left || r.left > f.right || r.bottom < f.top || r.top > f.bottom);
}

function far(x, y) {
  return placed.every(p => Math.hypot(p.x - x, p.y - y) > DIST);
}

links.forEach(link => {

  const box = document.createElement("div");
  box.className = "floating-text";
  box.innerHTML = `
    <span class="glow"></span>
    <a href="${link.url || "#"}">${link.text}</a>
  `;
  scene.appendChild(box);

  const w = box.offsetWidth;
  const h = box.offsetHeight;

  let x, y, tries = 0;

  do {
    x = EDGE + Math.random() * (innerWidth - EDGE * 2 - w);
    y = EDGE + Math.random() * (innerHeight - EDGE * 2 - h);
    tries++;
  } while (
    (!far(x, y) || overlap({ left: x, right: x+w, top: y, bottom: y+h })) 
    && tries < 200
  );

  placed.push({ x, y });

  box.style.left = x + "px";
  box.style.top = y + "px";

  movers.push({
    el: box,
    x, y,
    dx: (Math.random() - 0.5) * SPEED,
    dy: (Math.random() - 0.5) * SPEED
  });
});

/* animation */
function animate() {

  const f = forbiddenRect();

  movers.forEach(o => {

    o.x += o.dx;
    o.y += o.dy;

    const w = o.el.offsetWidth;
    const h = o.el.offsetHeight;

    if (o.x < EDGE || o.x + w > innerWidth - EDGE) o.dx *= -1;
    if (o.y < EDGE || o.y + h > innerHeight - EDGE) o.dy *= -1;

    const rect = { left: o.x, right: o.x+w, top: o.y, bottom: o.y+h };

    if (overlap(rect)) {

      const cx = (f.left + f.right) / 2;
      const cy = (f.top + f.bottom) / 2;

      const ex = rect.left + w/2;
      const ey = rect.top + h/2;

      const angle = Math.atan2(ey - cy, ex - cx);

      o.dx = Math.cos(angle) * SPEED;
      o.dy = Math.sin(angle) * SPEED;

      o.x += o.dx * 10;
      o.y += o.dy * 10;
    }

    o.el.style.left = o.x + "px";
    o.el.style.top = o.y + "px";
  });

  requestAnimationFrame(animate);
}

animate();
