// declare variables up here because jslint doesn't like me
var loop, counter = 0, canvas, context, now, array, i, x, y, piece, nextpiece, topleftx, toplefty, rotposn, rotArray, keys = [], pieces = [11, 11, 11, 11], timers = [], numTimers = -1;

// start everything up!
var main = function () {
    "use strict";
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    // holds the position of the grid
    array = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    // the array that you look at to see what the position of the piece is after it gets rotated
    rotArray = [[[0, 0, 0, 0],
                 [1, 1, 1, 1],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 1, 0],
                 [0, 0, 1, 0],
                 [0, 0, 1, 0],
                 [0, 0, 1, 0]],

                [[0, 0, 0, 0],
                 [1, 1, 1, 1],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 1, 0],
                 [0, 0, 1, 0],
                 [0, 0, 1, 0],
                 [0, 0, 1, 0]],


                [[0, 0, 0, 0],
                 [1, 1, 1, 0],
                 [1, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[1, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [0, 0, 1, 0],
                 [1, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0]],


                [[0, 0, 0, 0],
                 [0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0]],


                [[0, 0, 0, 0],
                 [1, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 1, 0],
                 [0, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [1, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 1, 0],
                 [0, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],


                [[0, 0, 0, 0],
                 [1, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [1, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [0, 1, 0, 0],
                 [1, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],


                [[0, 0, 0, 0],
                 [1, 1, 1, 0],
                 [0, 0, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [1, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [1, 0, 0, 0],
                 [1, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],


                [[0, 0, 0, 0],
                 [0, 1, 1, 0],
                 [1, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[1, 0, 0, 0],
                 [1, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [0, 1, 1, 0],
                 [1, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[1, 0, 0, 0],
                 [1, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]]];

    // just some starting variables
    topleftx = 3;
    toplefty = -1;
    rotposn = 0;

    newPiece(1);
    newPiece(0);

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
    document.getElementById("nextpiece").getContext("2d").drawImage(document.getElementById("nextPiece"), 0, 0);
};

// draw the squares on the screen
var drawBlocks = function () {
    "use strict";
    for (x = 0; x < 10; x += 1) {
        for (y = 0; y < 20; y += 1) {
            // there are three possibilities: draw nothing, draw it and it is the piece we're moving, and draw it and it's fixed
            // woo sloppy code
            if (array[y][x] > 7) {
                context.drawImage(document.getElementById("blocks"), 32 * (array[y][x] - 6), 0, 32, 32, 32 * x, 32 * y, 32, 32);
            } else if (array[y][x] !== 0) {
                context.drawImage(document.getElementById("blocks"), 32 * (array[y][x] + 1), 0, 32, 32, 32 * x, 32 * y, 32, 32);
            }
        }
    }
};

// draws the next piece in the next box
// DON'T LOOK AT THIS CODE UNLESS YOU WANT TO THROW UP
var drawNext = function () {
    "use strict";
    for (x = 0; x < 4; x += 1) {
        for (y = 0; y < 4; y += 1) {
            if (rotArray[4 * (nextpiece - 8)][y][x] === 1) {
                document.getElementById("nextpiece").getContext("2d").drawImage(document.getElementById("blocks"), 32 * (nextpiece - 6), 0, 32, 32, 32 * (x + 3), 32 * (y + (nextpiece === 8)), 32, 32);
            }
        }
    }
};


// a wrapper function that calls the other draw functions
var draw = function () {
    "use strict";
    drawBackground();
    drawNext();
    drawBlocks();
};



///////
// MOVE
///////

// umm... moves the piece down?
var moveDown = function () {
    "use strict";
    if (doesLock()) {
        return;
    }
    for (y = 19; y >= 0; y -= 1) {
        for (x = 0; x < 10; x += 1) {
            if (array[y][x] > 7) {
                array[y + 1][x] = array[y][x];
                array[y][x] = 0;
            }
        }
    }
    toplefty += 1;
};

// umm... moves the piece left?
var moveLeft = function () {
    "use strict";

    for (x = 0; x < 10; x += 1) {
        for (y = 0; y < 20; y += 1) {
            if (array[y][x] > 7) {
                if (x === 0 || (array[y][x - 1] > 0 && array[y][x - 1] < 8)) {
                    return;
                }
            }
        }
    }

    for (x = 0; x < 10; x += 1) {
        for (y = 0; y < 20; y += 1) {
            if (array[y][x] > 7) {
                array[y][x - 1] = array[y][x];
                array[y][x] = 0;
            }
        }
    }
    topleftx -= 1;
};

// umm... moves the piece right?
var moveRight = function () {
    "use strict";

    for (x = 9; x >= 0; x -= 1) {
        for (y = 0; y < 20; y += 1) {
            if (array[y][x] > 7) {
                if (x === 9 || (array[y][x + 1] > 0 && array[y][x + 1] < 8)) {
                    return;
                }
            }
        }
    }

    for (x = 9; x >= 0; x -= 1) {
        for (y = 0; y < 20; y += 1) {
            if (array[y][x] > 7) {
                array[y][x + 1] = array[y][x];
                array[y][x] = 0;
            }
        }
    }
    topleftx += 1;
};

// um... moves the piece drop?
// jk it hard drops the piece
var moveDrop = function () {
    "use strict";
    while (!doesLock()) {
        moveDown();
    }
};

////////
//TIMERS
////////

// creates a timer with "time" frames on it that calls "func" with arguments "args" when it finishes
var createTimer = function (time, func, args) {
    "use strict";
    for (i = 0; i <= numTimers; i += 1) {
        if (timers[i][1] === func) {
            return;
        }
    }
    numTimers += 1;
    timers[numTimers] = [];
    timers[numTimers][0] = time;
    timers[numTimers][1] = func;
    timers[numTimers][2] = args;
};

// checks all of the timers to see if any have finished.  If they have, calls the function and deletes the timer from the list.
var checkTimers = function () {
    "use strict";
    for (i = 0; i <= numTimers; i += 1) {
        if (numTimers <= -1) {
            return;
        }
        if (timers[i][0] === 0) {
            timers[numTimers][1](timers[numTimers][2][0]);
            timers.splice(i, 1);
            i -= 1;
            numTimers -= 1;
        }
    }
};

// removes the timer with name "name"
var removeTimer = function (name) {
    for (i = 0; i <= numTimers; i += 1) {
        if (numTimers <= -1) {
            return;
        }
        if (timers[i][1] === name) {
            timers.splice(i, 1);
            i -= 1;
            numTimers -= 1;
            return;
        }
    }
}

// subtracts one from all of the timers in the list.
var decrementTimers = function () {
    "use strict";
    for (i = 0; i <= numTimers; i += 1) {
        timers[i][0] -= 1;
    }
};

// the function that you call each frame.  Is a wrapper function.  Deals with everything timer-related.
var timerFrame = function () {
    "use strict";
    decrementTimers();
    checkTimers();
};


////////
//ROTATE
////////

// determines whether or not rotating the piece is legal
var canRotateHelper = function (leftAdjust) {
    "use strict";
    for (x = topleftx + leftAdjust; x < topleftx + 4 + leftAdjust; x += 1) {
        for (y = toplefty; y < toplefty + 4; y += 1) {
            // those pluses and minuses though
            if (rotArray[rotposn + 4 * (piece - 8)][y - toplefty][x - topleftx - leftAdjust]) {
                if (array[y][x] !== 0 && array[y][x] < 8) {
                    return false;
                }
                if (array[y][x] === undefined) {
                    return false;
                }
            }
        }
    }
    return true;
};

// is a wrapper; checks to see if rotation, rotation one to the left, and rotation one to the right is possible
// which means it checks for wallkicks too, and reports this to rotate()
var canRotate = function () {
    "use strict";
    if (canRotateHelper(0)) {
        return 0;
    }
    if (canRotateHelper(1)) {
        return 1;
    }
    if (canRotateHelper(-1)) {
        return -1;
    }
    // don't ask why 5
    return 5;
};

// if legal, rotate the piece
var rotate = function (dir) {
    "use strict";

    // yeah this mod code though
    rotposn = (rotposn + dir + 4) % 4;

    var ret = canRotate();
    // don't ask why 5
    if (ret === 5) {
        // yeah this mod code though
        rotposn = (rotposn - dir + 4) % 4;
        return;
    }

    // clear out old piece
    for (x = topleftx; x < topleftx + 4; x += 1) {
        for (y = toplefty; y < toplefty + 4; y += 1) {
            if (array[y][x] > 7) {
                array[y][x] = 0;
            }
        }
    }

    // add new piece
    for (x = topleftx + ret; x < topleftx + 4 + ret; x += 1) {
        for (y = toplefty; y < toplefty + 4; y += 1) {
            if (rotArray[rotposn + 4 * (piece - 8)][y - toplefty][x - topleftx - ret]) {
                array[y][x] = piece;
            }
        }
    }

    // change topleftx to reflect adjustment "ret"
    topleftx += ret;
};

////////////////
//CLEARING LINES
////////////////

// if a line is complete, clear it and move the above pieces down
var clearLines = function () {
    "use strict";
    var clear, numlines = 0;

    for (y = 19; y >= 0; y -= 1) {
        clear = true;
        for (x = 0; x < 10; x += 1) {
            if (array[y][x] === 0 || array[y][x] > 7) {
                clear = false;
            }
        }
        if (clear) {
            numlines += 1;
            for (x = 0; x < 10; x += 1) {
                if (array[y][x] < 8) {
                    array[y][x] = 0;
                }
            }
        } else {
            for (x = 0; x < 10; x += 1) {
                if (array[y][x] < 8 && array[y + numlines][x] < 8) {
                    array[y + numlines][x] = array[y][x];
                }
            }
        }
    }
};


//////
//LOCK
//////

// take the old piece and subtract 7 from it, preventing it from moving
var lock = function () {
    "use strict";
    for (x = 0; x < 10; x += 1) {
        for (y = 0; y < 20; y += 1) {
            if (array[y][x] > 7) {
                array[y][x] -= 7;
            }
        }
    }
};

///////////
//NEW PIECE
///////////

// randomly generate new type of piece
var randomPiece = function (first) {
    "use strict";
    var counter = 0;
    do {
        nextpiece = Math.floor(7 * Math.random()) + 8;
        counter += 1;
    } while ((nextpiece === pieces[0] || nextpiece === pieces[1] || nextpiece === pieces[2] || nextpiece === pieces[3] || counter < 4) || (first && (nextpiece === 10 || nextpiece === 11 || nextpiece === 14)));
    pieces[0] = pieces[1];
    pieces[1] = pieces[2];
    pieces[2] = pieces[3];
    pieces[3] = nextpiece;
    piece = pieces[2];
};

// lock old piece, generate new piece
var newPiece = function (first) {
    "use strict";
    lock();
    randomPiece(first);

    rotposn = 0;
    if (!first) {
        // LOOKS SO MUCH BETTER NOW
        for (y = 0; y < 3; y += 1) {
            for (x = 3; x < 7; x += 1) {
                array[y][x] = piece * rotArray[4 * (piece - 8)][y + 1][x - 3];
            }
        }
    }
    topleftx = 3;
    toplefty = -1;
};

// determines whether the current piece is at the bottom, and if it is, generates a new piece
var doesLock = function () {
    "use strict";
    for (x = 0; x < 10; x += 1) {
        for (y = 0; y < 20; y += 1) {
            if (array[y][x] > 7 && (y === 19 || (array[y + 1][x] > 0 && array[y + 1][x] <= 7))) {
                return true;
            }
        }
    }
    return false;
};

///////
//DEBUG
///////

// a function to print out whatever is wanted.  called by pressing q
var debugPrint = function () {
    "use strict";
    removeTimer(newPiece);
};

/////////////
//KEY HANDLER
/////////////

// checks all of the values in keys[] to see which key is pressed, and calls the function corresponding to the key.
var handleKeys = function () {
    "use strict";

    if (keys[81]) {
        debugPrint();
        keys[81] = false;
    }
    if (keys[37]) {
        moveLeft();
        keys[37] = false;
    }
    if (keys[38]) {
        moveDrop();
        keys[38] = false;
    }
    if (keys[39]) {
        moveRight();
        keys[39] = false;
    }
    if (keys[40]) {
        moveDown();
        keys[40] = false;
    }
    if (keys[90]) {
        rotate(-1);
        keys[90] = false;
    }
    if (keys[88]) {
        rotate(1);
        keys[88] = false;
    }
};



// the main game loop -- draws, checks to lock, clears lines, handles keys
var loop = function () {
    "use strict";

    draw();
    timerFrame();
    if (doesLock()) {createTimer(30, newPiece, [0]); }
    if (!doesLock()) {removeTimer(newPiece); }
    clearLines();
    handleKeys();


    /*context.fillStyle = "#404040";
    context.fillRect(0, 0, 30, 30);*/
    requestAnimationFrame(loop);
};


// called when key is pressed -- changes keys[] to reflect keypress
function getChar(event) {
    "use strict";
    keys[event.keyCode] = event.type === 'keydown';
}

window.onload = function () {
    "use strict";
    window.addEventListener("keydown", getChar, false);
    window.addEventListener("keyup", getChar, false);
};
