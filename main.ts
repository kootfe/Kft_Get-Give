input.onGesture(Gesture.LogoDown, function () {
    if (drive) {
        radio.sendNumber(1);
    }
})

input.onGesture(Gesture.LogoUp, function () {
    if (drive) {
        radio.sendNumber(2);
    }
})
 
input.onGesture(Gesture.TiltLeft, function () {
    if (drive) {
        radio.sendNumber(3);
    }
})
 
input.onGesture(Gesture.TiltRight, function () {
    if (drive) {
        radio.sendNumber(4);
    }
})
 
function menuDep() {
    temp = temp < maxModes - 1 ? temp + 1 : 0;
    if (temp < logos.length) {
        logos[temp].showImage(0);
    } else {
        basic.showNumber(temp);
    }
}

input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        mode = 3;
        drive = false;
        menuDep();
    } else if (mode == 1) {
        temp = temp + 1 < 255 ? temp + 1 : 0;
        basic.showNumber(temp);
    } else if (mode == 3) {
        menuDep();
    }
})
input.onButtonPressed(Button.AB, function () {
    if (mode == 0) {
        radio.sendNumber(0);
    } else if (mode == 1) {
        radioGroup = temp;
        radio.setGroup(radioGroup);
        mode = 0
    } else if (mode == 3) {
        mode = temp;
        basic.showNumber(mode);
        basic.showIcon(IconNames.Yes);
        basic.showNumber(mode);
        basic.clearScreen();
        mode = temp;
        drive = temp == 0 ? true : false;
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        basic.showNumber(mode)
    } else if (mode == 1) {
        temp = temp - 1 > 0 ? temp - 1 : 255;
        basic.showNumber(temp);
    }
})
let mode = 0
let logos: Image[] = []
let radioGroup = 0
let temp = 0
let drive = true;
radioGroup = 69
let maxModes = 3
logos = [images.createImage(`
    . # # # .
    # . # . #
    # # # # #
    # . # . #
    . # # # .
    `), images.createImage(`
    . # # # .
    # . . . #
    . . # . .
    . # . # .
    . . # . .
    `), images.createImage(`
    . . . . .
    . . . # #
    . # # . #
    . . # # .
    # # # # #
    `)]
radio.setGroup(radioGroup)
radio.sendNumber(0)
