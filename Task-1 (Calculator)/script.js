// Get the display element
var display = document.getElementById('display');


// Clear the display
function clearDisplay() {
  display.value = '';
}

// Remove the last character from the display
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the expression in the display
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}
// Boolean variable to keep track of whether mouse button is down
var mouseDown = false;

// Insert a character into the display
function insert(char) {
  if (mouseDown) {
    return;
  }
  display.value += char;
}

// Add event listeners to the buttons
var buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener('mousedown', function(event) {
    event.preventDefault();
    mouseDown = true;
    var value = this.innerHTML;
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === '←') {
      backspace();
    } else {
      insert(value);
    }
  });
  
  // Add mouseup event listener to window to catch mouse release outside of button element
  window.addEventListener('mouseup', function(event) {
    event.preventDefault();
    mouseDown = false;
  });
  
  // Prevent double click selection
  button.addEventListener('dblclick', function(event) {
    event.preventDefault();
  });
}
