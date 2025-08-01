const overlay = document.getElementById("overlay");
const main = document.getElementById("main");

const startBtn = document.getElementById("startBtn");
const lightBtn = document.getElementById("lightBtn");
const nextBtn = document.getElementById("nextBtn");

const music = document.getElementById("bgMusic");

let step = 0;

const steps = [
  { action: () => show('bulbs'), label: "Play Music 🎶" },
  { action: () => music.play(), label: "Let's Decorate 🎈" },
  { action: () => {
      show('balloons');
      launchEmojis();
      document.body.style.background = "#fff1f0";
    }, label: "Invite Partner 💑" },
  { action: () => show('photoFrame'), label: "Bring out the Cake 🎂" },
  { action: () => show('cake'), label: "DJ Time 🔊" },
  { action: () => {
      music.src = "assets/birthday-bg.mp3";
      music.play();
      document.getElementById("photoFrame").classList.add("dance");
    }, label: "Final Greeting ❤️" },
  { action: () => show('greeting'), label: "" }
];

// Step 0: Start → Light Button
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  lightBtn.classList.remove("hidden");
});

// Step 1: Lights On → Begin Sequence
lightBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#fff9db";
  document.body.style.color = "#111";
  overlay.style.display = "none";
  main.classList.remove("hidden");

  steps[step].action();
  nextBtn.textContent = steps[step].label;
  nextBtn.classList.remove("hidden");
});

// Step 2+: Handle Actions
nextBtn.addEventListener("click", () => {
  step++;
  if (step < steps.length) {
    steps[step].action();
    nextBtn.textContent = steps[step].label;
    if (!steps[step].label) nextBtn.style.display = "none";
  }
});

// Show any element
function show(id) {
  const el = document.getElementById(id);
  el.classList.remove("hidden");
  el.classList.add("visible");
}

// 🎈 Launch Emoji Balloons
function launchEmojis(count = 30) {
  const container = document.getElementById("emojiContainer");
  const emojis = ["🎈", "🎉", "🎊", "💖", "🥳"];
  for (let i = 0; i < count; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("balloon-emoji");
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = (Math.random() * 1.5 + 1) + "rem";
    emoji.style.animationDuration = (Math.random() * 3 + 5) + "s";
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    container.appendChild(emoji);

    // Remove after float
    setTimeout(() => emoji.remove(), 9000);
  }
}
