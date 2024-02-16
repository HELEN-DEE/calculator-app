// Get necessary DOM elements
const screen = document.getElementById('screen');
const keys = document.querySelector('.calculator-keys');
const themeSlider = document.querySelectorAll('.theme-switch input');
const sliderIndicator = document.querySelector('.slider');

// Event listener for key clicks
keys.addEventListener('click', function (event) {
  if (event.target.classList.contains('calculator-key')) {
    handleKeyClick(event.target.textContent);
  }
});

// Handle clicks on calculator keys
function handleKeyClick(key) {
  if (key === 'DEL') {
    clearLastEntry();
  } else if (key === 'RESET') {
    clearScreen();
  } else if (key === '=') {
    calculateResult();
  } else {
    appendToScreen(key);
  }
}

// Clear the last entry on the screen
function clearLastEntry() {
  screen.textContent = screen.textContent.slice(0, -1);
}

// Clear the entire screen
function clearScreen() {
  screen.textContent = '';
}

// Calculate the result of the expression on the screen
function calculateResult() {
  try {
    let expression = screen.textContent;

    // Replace 'x' with '*' for multiplication
    expression = expression.replace(/x/g, '*');

    // Evaluate the expression and update the screen
    screen.textContent = eval(expression);
  } catch (error) {
    // Display 'Error' if an invalid expression is entered
    screen.textContent = 'Error';
  }
}

//  Value length to the calculator screen
function appendToScreen(value) {

  let viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  let maxLength = (viewportWidth < 450) ? 10 : 15; 

  if (screen.textContent.length + value.length <= maxLength) {
    screen.textContent += value;
  }
}


// Toggle theme based on user selection
let toggleTheme = () => {
  let body = document.body;
  if (themeSlider[0].checked) {
    body.className = '';
    sliderIndicator.style.left = 'calc(-18px + 20px * (1 + var(--index, 0)))';
  } else if (themeSlider[1].checked) {
    body.className = 'Theme-2';
    sliderIndicator.style.left = 'calc(-18px + 20px * (2 + var(--index, 0)))';
  } else if (themeSlider[2].checked) {
    body.className = 'Theme-3';
    sliderIndicator.style.left = 'calc(-18px + 20px * (3 + var(--index, 0)))';
  }
};

themeSlider[0].addEventListener('change', toggleTheme);
themeSlider[1].addEventListener('change', toggleTheme);
themeSlider[2].addEventListener('change', toggleTheme); 
