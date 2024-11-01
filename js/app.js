// Calculator
const display = document.querySelector(".display");
const equalButton = document.querySelector(".equal-btn");
let hasError = false;

// Append To Display
function appendToDisplay(input) {
  if (hasError) return;
  display.value += input;
}

// Clear
function clearDisplay() {
  display.value = "";
  hasError = false;
  equalButton.disabled = false;
}

// Calc
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = `(${display.value}) is syntax error`;
    display.style.fontSize = "2.3rem";
    hasError = true;
    equalButton.disabled = true;
  }
}
