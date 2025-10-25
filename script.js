const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".slider .card");
const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");

let current = 0;

function updateSlider() {
  const offset = -current * 100; // shift by card width
  slider.style.transform = `translateX(${offset}%)`;

  // --- Show/hide arrows
  if (current === 0) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "flex";
  } else if (current === cards.length - 1) {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
  }
}

nextBtn.addEventListener("click", () => {
  if (current < cards.length - 1) {
    current++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    updateSlider();
  }
});

updateSlider();
