
function addToDisplay(value) {
    document.calculator.display.value += value;
}

function calculate (){
    try {
        document.calculator.display.value = eval(document.calculator.display.value)
    } catch (e) {
        document.calculator.display.value = "error"
    }
}

function clearDisplay() {
    document.calculator.display.value = ""
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        calculate()
    }
})
