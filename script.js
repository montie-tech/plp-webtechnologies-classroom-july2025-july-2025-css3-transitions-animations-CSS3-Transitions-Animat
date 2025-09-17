/* ------------------ */
/* PART 2: FUNCTIONS */
/* ------------------ */

// Function with parameters & return value
function calculateBounceHeight(base, factor) {
  return base * factor;
}

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Global scope variable
let globalBoxColor = "coral";

/* ------------------ */
/* PART 3: INTERACTIONS */
/* ------------------ */

// BOX ANIMATION
const box = document.querySelector(".box");
const animateBoxBtn = document.getElementById("animateBoxBtn");
const changeColorBtn = document.getElementById("changeColorBtn");

animateBoxBtn.addEventListener("click", () => {
  let height = calculateBounceHeight(60, 2);
  console.log(`Box bounce height: ${height}px`);

  box.classList.remove("animate");
  void box.offsetWidth; // reset animation
  box.classList.add("animate");
});

changeColorBtn.addEventListener("click", () => {
  globalBoxColor = getRandomColor(); // update global
  box.style.background = globalBoxColor;
  console.log("Box color changed to:", globalBoxColor);
});

// CARD FLIP
const card = document.querySelector(".card");
const flipCardBtn = document.getElementById("flipCardBtn");

card.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});
flipCardBtn.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});

// MODAL
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

toggleModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("active");
});
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  setTimeout(() => modal.classList.add("hidden"), 500);
});

// LOADING SPINNER
const loader = document.getElementById("loader");
const startLoaderBtn = document.getElementById("startLoaderBtn");
const stopLoaderBtn = document.getElementById("stopLoaderBtn");

startLoaderBtn.addEventListener("click", () => {
  loader.classList.remove("hidden");
});
stopLoaderBtn.addEventListener("click", () => {
  loader.classList.add("hidden");
});
