var display = document.getElementById("searchbar");
var bool = true;

function concatValue(value) {
    if(bool === false){
        eraseScreen();
        bool = true;
    }
    let input = value;
        display.value += input;
}

function eraseScreen() {
    display.value = '';
}

function deleteFromBack() {
    if(bool === false){
        eraseScreen();
    }
    inp1 = display.value;
    display.value = inp1.substring(0, inp1.length - 1);
}

function showResult() {
    display.value = eval(display.value);
    bool = false;
} 