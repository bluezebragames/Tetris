// declare variables up here because jslint doesn't like me
var loop, counter = 0, canvas, context, now, array, x, y, piece, nextpiece, topleftx, toplefty, rotposn, rotArray, keys = [], pieces = [11, 11, 11, 11];

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
               
               
                [[1, 1, 1, 0],
                 [1, 0, 0, 0],
                 [0, 0, 0, 0],
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
                
                
                [[0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],
               
                [[0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],
               
                [[0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],
               
                [[0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],
                
               
                [[1, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],
               
                [[0, 0, 1, 0],
                 [0, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],
               
                [[1, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
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
                           
               
                [[1, 1, 1, 0],
                 [0, 0, 1, 0],
                 [0, 0, 0, 0],
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
                
               
                [[0, 1, 1, 0],
                 [1, 1, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],
               
                [[1, 0, 0, 0],
                 [1, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],
               
                [[0, 1, 1, 0],
                 [1, 1, 0, 0],
                 [0, 0, 0, 0],
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
// DON'T LOOK AT THIS CODE IF YOU DON'T WANT TO THROW UP
var drawNext = function () {
    "use strict";
    for (x = 0; x < 4; x += 1) {
        for (y = 0; y < 4; y += 1) {
            if (rotArray[4 * (nextpiece - 8)][y][x] === 1) {
                document.getElementById("nextpiece").getContext("2d").drawImage(document.getElementById("blocks"), 32 * (nextpiece - 6), 0, 32, 32, 32 * (x + 3), 32 * (y + 1 - (nextpiece === 12)), 32, 32);
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
    for (y = 19; y >= 0; y -= 1) {
        for (x = 0; x < 10; x += 1) {
            if (array[y][x] > 7) {
                if (y === 19) {
                    return;
                }
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
                if (x === 0) {
                    return;
                }
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
                if (x === 9) {
                    return;
                }
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
//ROTATE
////////

// determines whether or not rotating the piece is legal
var canRotateHelper = function (leftAdjust) {
    for (x = topleftx + leftAdjust; x < topleftx + 4 + leftAdjust; x += 1) {
        for (y = toplefty; y < toplefty + 4; y += 1) {
            if (array[y][x] !== 0 && array[y][x] < 8) {
                if (rotArray[rotposn + 4 * (piece - 8)][y - toplefty][x - topleftx]) {
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
    if (canRotateHelper(-1)) return -1;
    else if (canRotateHelper(0)) return 0;
    else if (canRotateHelper(1)) return 1;
    // don't ask why 5
    return 5;
};

// if legal, rotate the piece
var rotate = function (dir) {
    "use strict";
    
    var ret = canRotate()
    // don't ask why 5
    if (ret === 5) {
        return;
    }
    
    // yeah this mod code though
    rotposn = (rotposn + dir + 4) % 4;
    
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
            if (rotArray[rotposn + 4 * (piece - 8)][y - toplefty][x - topleftx]) {
                array[y][x] = piece;
            }
        }
    }
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
                array[y][x] = 0;
            }
        } else {
            for (x = 0; x < 10; x += 1) {
                if (array[y][x] < 8) {
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
        switch (piece) {
        case 8:
            array[0][3] = piece;
            array[0][4] = piece;
            array[0][5] = piece;
            array[0][6] = piece;
            topleftx = 3;
            toplefty = -1;
            break;
        case 9:
            array[0][3] = piece;
            array[0][4] = piece;
            array[0][5] = piece;
            array[1][3] = piece;
            topleftx = 3;
            toplefty = -1;
            break;
        case 10:
            array[0][4] = piece;
            array[0][5] = piece;
            array[1][4] = piece;
            array[1][5] = piece;
            topleftx = 3;
            toplefty = -1;
            break;
        case 11:
            array[0][3] = piece;
            array[0][4] = piece;
            array[1][4] = piece;
            array[1][5] = piece;
            topleftx = 3;
            toplefty = -1;
            break;
        case 12:
            array[0][3] = piece;
            array[0][4] = piece;
            array[0][5] = piece;
            array[1][4] = piece;
            topleftx = 3;
            toplefty = -1;
            break;
        case 13:
            array[0][3] = piece;
            array[0][4] = piece;
            array[0][5] = piece;
            array[1][5] = piece;
            topleftx = 3;
            toplefty = -1;
            break;
        case 14:
            array[0][4] = piece;
            array[0][5] = piece;
            array[1][3] = piece;
            array[1][4] = piece;
            topleftx = 3;
            toplefty = -1;
            break;
        }
    }
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
};

///////
//DEBUG
///////

// a function to print out whatever is wanted.  called by pressing q
var debugPrint = function () {
    "use strict";
    alert(toplefty);
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
    if (doesLock()) {newPiece(0); }
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