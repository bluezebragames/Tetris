// declare variables up here because jslint doesn't like me
var loop, counter = 0, canvas, context, now, array, x, y;

// start everything up!
var main = function () {
    "use strict";
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    array = [[0, 0, 0, 8, 8, 8, 8, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    
    
    loop();
};

///////
//1: I
//2: L
//3: O
//4: Z
//5: T
//6: J
//7: S
///////

///////
// DRAW
///////

// draw the background
var drawBackground = function () {
    "use strict";
    context.drawImage(document.getElementById("background"), 0, 0);
};

// draw the squares on the screen
var drawBlocks = function () {
    "use strict";
    for (x = 0; x < 10; x += 1) {
        for (y = 0; y < 20; y += 1) {
            // there are three possibilities: draw nothing, draw it and it is the piece we're moving, and draw it and it's fixed
            if (array[y][x] > 7) {
                context.drawImage(document.getElementById("blocks"), 32 * (array[y][x] - 6), 0, 32, 32, 32 * x, 32 * y, 32, 32);
            } else if (array[y][x] !== 0) {
                context.drawImage(document.getElementById("blocks"), 32 * (array[y][x] + 1), 0, 32, 32, 32 * x, 32 * y, 32, 32);
            }
        }
    }
};


// a wrapper function that calls the other draw functions
var draw = function () {
    "use strict";
    drawBackground();
    drawBlocks();
};



///////
// MOVE
///////

var moveDown = function () {
    "use strict";
    for (y = 19; y >= 0; y -= 1) {
        for (x = 0; x < 10; x += 1) {
            if (array[y][x] >= 7) {
                if (y === 19) {
                    return;
                }
                array[y + 1][x] = array[y][x];
                array[y][x] = 0;
            }
        }
    }
};


var moveLeft = function () {
    "use strict";
    for (x = 0; x < 10; x += 1) {
        for (y = 0; y < 20; y += 1) {
            if (array[y][x] >= 7) {
                if (x === 0) {
                    return;
                }
                array[y][x - 1] = array[y][x];
                array[y][x] = 0;
            }
        }
    }
};


var moveRight = function () {
    "use strict";
    for (x = 9; x >= 0; x -= 1) {
        for (y = 0; y < 20; y += 1) {
            if (array[y][x] >= 7) {
                if (x === 9) {
                    return;
                }
                array[y][x + 1] = array[y][x];
                array[y][x] = 0;
            }
        }
    }
};



var loop = function () {
    "use strict";
    
    draw();
    
    
    /*context.fillStyle = "#404040";
    context.fillRect(0, 0, 30, 30);*/
    requestAnimationFrame(loop);
};




function getChar(event) {
    "use strict";
    switch (event.keyCode) {
    case 37:
        moveLeft();
        break;
    case 39:
        moveRight();
        break;
    case 40:
        moveDown();
        break;
    }
}

window.onload = function () {
    "use strict";
    window.addEventListener("keydown", getChar, false);
};