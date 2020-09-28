// Schrijf hier je code


function myFirstFunction(bike) {
    forward(bike);
}

function twiceForward(bike) {
    forward(bike);
    forward(bike);
}

function thriceForward(bike){
    var i;
    for(i=0; i<=2; i++){
        forward(bike);
    }
}

function forward4(bike){
    var i;
    for(i=0; i<=3; i++){
        forward(bike);
    }
}

function forward5(bike){
    var i;
    for(i=0; i<=4; i++){
        forward(bike);
    }
}

function forward10(bike){
    var i;
    for(i=0; i<=9; i++){
        forward(bike);
    }
}

function right(bike) {
    turnRight(bike);
    forward(bike);
}

function ellShape(bike){
    forward5(bike);
    turnRight(bike);
    forward4(bike);
}

function uTurn(bike) {
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);
}


function forwardN(bike, steps) {
    let i = steps;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function crookedUTurn(bike) {
    forwardN(bike, 7);
    turnRight(bike);
    forwardN(bike, 9);
    turnRight(bike);
    forwardN(bike, 3);
}

function forwardUntilWall(bike){
    while(!sensor(bike)){
        forward(bike);
    }
}


function smartEllShape(bike) {
    forwardUntilWall(bike);
    turnRight(bike);
    forwardUntilWall(bike);
}

function spiral(car) {
    let i = 18;

    while (i > 0) {
        forwardUntilWall(car);
        turnRight(car);
        i = i - 1;
    }
}

function turnLeft(car){
    for(i=0; i<=2; i++){
        turnRight(car);
    }
}

function left(car){
    turnLeft(car);
    forward(car);
}


function slalom(car){
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car)
}


function leftOrRight(car) {
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
}