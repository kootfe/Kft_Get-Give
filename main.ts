let radioGroup = 69;
let temp = 0;
let mode = 0;
let maxModes = 3;

let logos: Image[] = [
    images.createImage(`
    . # # # .
    # . # . #
    # # # # #
    # . # . #
    . # # # .`),
    images.createImage(`
    . # # # .
    # . . . #
    . . # . .
    . # . # .
    . . # . .`),
    images.createImage(`
    . . . . .
    . . . # #
    . # # . #
    . . # # .
    # # # # #`)
];

radio.setGroup(radioGroup);
radio.sendNumber(0);

input.onButtonPressed(Button.A, function () {
    switch (mode) {
        case 0:
            mode = 3;
            menuDep();
            break;
        case 3:
            menuDep();
            break;
        default:
            break;
    }
});

input.onButtonPressed(Button.AB, function () {
    switch (mode) {
        case 3:
            mode = temp;
            basic.showNumber(mode);
            basic.showIcon(IconNames.Yes);
            basic.showNumber(mode);
            basic.clearScreen();
            mode = 0;
            break;
        default:
            break;
    }
});

input.onButtonPressed(Button.B, function () {
    switch (mode) {
        case 0:
            basic.showNumber(radioGroup);
            break;
        default:
            break;
    }
});

function menuDep() {
    temp = temp < maxModes - 1 ? temp + 1 : 0;
    if (temp < logos.length) {
        logos[temp].showImage(0);
    } else {
        basic.showNumber(temp);
    }
}
