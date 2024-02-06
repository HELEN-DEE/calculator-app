const screen = document.getElementById('screen')
const keys = document.querySelector(".calculator-keys");
const themeSlider = document.getElementById('theme-slider')

keys.addEventListener('click',function(event){
    if(event.target.classList.contains('calculator-key')){
        handleKeyClick(event.target.textContent)
    }
})


function handleKeyClick(key) {
    switch (key) {
    case "DEL":
        clearLastEntry();
        break;
    case "RESET":
        clearScreen();
        break;
    case "=":
        calculateResult();
        break;
    default:
        appendToScreen(key);
    }
}

function clearLastEntry() {
    screen.textContent = screen.textContent.slice(0, -1);
}

function clearScreen() {
    screen.textContent = "";
}

function appendToScreen(value) {
    screen.textContent += value;
}
    
function calculateResult() {
    try {
        let expression = screen.textContent

        expression = expression.replace(/x/g, '*')
    screen.textContent = eval(expression);
    } catch (error) {
    screen.textContent = "Error";
    }
} 


const themeToggle = () => {
    console.log('This ')
}

const toggleSwitch = document.getElementById('toggleSwitch');
toggleSwitch.addEventListener('change', function() {
if (this.checked) {
    // Do something when switch is ON
} else {
    // Do something when switch is OFF
}
});