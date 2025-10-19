// page-color-changer.js
// Name - Robanpreet Singh
// Lab 5 - Change page background color using RGB sliders

// --- 1. Get references to HTML elements ---
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const body = document.querySelector('body');
const colorValue = document.getElementById('colorValue');

// --- 2. Function to update background color ---
function updateBackgroundColor() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;

  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  // Set background color
  body.style.backgroundColor = rgbColor;

  // Show the RGB value on the page
  if (colorValue) {
    colorValue.textContent = rgbColor;
  }

  console.log(`Background color changed to: ${rgbColor}`);
}

// --- 3. Add event listeners for sliders ---
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

// --- 4. Initialize color when page loads ---
updateBackgroundColor();
