function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = 0;
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const letters = document.querySelectorAll(".letter");
const intervalid = setInterval(function () {
  for (const letter of letters) {
    letter.style.color = randomRGB();
    letter.style.fontSize = "3rem";
  }
}, 1000);
