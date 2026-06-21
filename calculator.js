let display = document.getElementById('output');
function addInput(input){
    
    display.value += input;
}

function displayResult(){
    display.value = eval(display.value)
}

function clearAll(){
    display.value = '';
}