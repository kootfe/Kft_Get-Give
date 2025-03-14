let radioGroup = 69;
let temp = 0;
let mode = 0;
let maxModes = 3;

radio.setGroup(radioGroup);
radio.sendNumber(0);

input.onButtonPressed(Button.A, function() {
    switch (mode) {
        case 0: 
            temp = temp < maxModes ? temp+1 : 0;
            basic.showNumber(temp);
            break;
        default:
            break;
    }
})

input.onButtonPressed(Button.AB, function () {
    switch (mode) {
        case 0:
            mode = temp;
            basic.showNumber(mode)
            basic.pause(100)
            basic.clearScreen()
            basic.showNumber(mode)
            basic.pause(100)
            basic.clearScreen()
            basic.showNumber(mode)
            break;
        default:
            break;
    }
})