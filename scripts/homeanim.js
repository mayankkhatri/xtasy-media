// First line setup
const firstLine = document.querySelector(".first-line");

// Duplicate images for infinite loop effect
const firstLineImages = document.querySelectorAll(".first-line > div");
firstLineImages.forEach((image) => {
  const clone = image.cloneNode(true);
  firstLine.appendChild(clone);
});

let firstLineScrollAmount = 0;
const scrollSpeed = 0.3; // Speed of the scroll, lower is faster
let isPausedFirstLine = false;

function scrollFirstLine() {
  if (!isPausedFirstLine) {
    firstLineScrollAmount -= scrollSpeed;
    if (Math.abs(firstLineScrollAmount) >= firstLine.scrollWidth / 2) {
      // Reset when scrolled through the first set of images
      firstLineScrollAmount = 0;
    }
    firstLine.style.transform = `translateX(${firstLineScrollAmount}px)`;
  }
  requestAnimationFrame(scrollFirstLine); // Smooth scrolling
}

scrollFirstLine();

// Second line setup
const secondLine = document.querySelector(".second-line");

// Duplicate images for infinite loop effect
const secondLineImages = document.querySelectorAll(".second-line > div");
secondLineImages.forEach((image) => {
  const clone = image.cloneNode(true);
  secondLine.appendChild(clone);
});

let secondLineScrollAmount = 0;
const scrollSpeedSecond = 0.55; // Speed of the scroll, lower is faster
let isPausedSecondLine = false;

function scrollSecondLine() {
  if (!isPausedSecondLine) {
    secondLineScrollAmount -= scrollSpeedSecond;
    if (Math.abs(secondLineScrollAmount) >= secondLine.scrollWidth / 2) {
      // Reset when scrolled through the first set of images
      secondLineScrollAmount = 0;
    }
    secondLine.style.transform = `translateX(${secondLineScrollAmount}px)`;
  }
  requestAnimationFrame(scrollSecondLine); // Smooth scrolling
}

scrollSecondLine();

// Pause scrolling on hover
function handleMouseEnter() {
  isPausedFirstLine = true;
  isPausedSecondLine = true;
}

function handleMouseLeave() {
  isPausedFirstLine = false;
  isPausedSecondLine = false;
}

// Add event listeners to stop and resume scrolling on hover
firstLine.addEventListener("mouseover", handleMouseEnter);
firstLine.addEventListener("mouseout", handleMouseLeave);
secondLine.addEventListener("mouseover", handleMouseEnter);
secondLine.addEventListener("mouseout", handleMouseLeave);
