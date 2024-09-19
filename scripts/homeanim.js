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

//? Stats increase animation
// Incriment Animation
function animateValue(obj, start, end, duration, pauseDuration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      setTimeout(() => {
        startTimestamp = null;
        window.requestAnimationFrame(step);
      }, pauseDuration);
    }
  };
  window.requestAnimationFrame(step);
}

document.querySelectorAll(".incr-anim").forEach((element) => {
  const textContent = element.textContent;
  const numericValue = parseInt(textContent.replace(/[^\d]/g, ""), 10); // Extract only the numeric part
  animateValue(element, 0, numericValue, 2000, 2000);
});

//? Stats increase animation

//! Data link handle projects

// Function to add click event listeners to all grid divs
function addClickListeners() {
  // Select all divs with the class 'scroll' (or any specific class you use)
  const clickableDivs = document.querySelectorAll(".scroll");

  clickableDivs.forEach((div) => {
    // Add click event listener to each div
    div.addEventListener("click", () => {
      const link = div.getAttribute("data-link"); // Get the URL from data-link attribute
      if (link) {
        window.location.href = link; // Redirect to the URL
      }
    });
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", addClickListeners);
