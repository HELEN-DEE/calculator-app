const screen = document.getElementById('screen')
const keys = document.querySelector(".calculator-keys");


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
    screen.textContent = eval(screen.textContent);
    } catch (error) {
    screen.textContent = "Error";
    }
}