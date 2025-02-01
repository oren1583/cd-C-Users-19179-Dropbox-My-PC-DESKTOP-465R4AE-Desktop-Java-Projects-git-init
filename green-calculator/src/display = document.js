 display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function Calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function cleardisplay() {
    display.value ="";
}