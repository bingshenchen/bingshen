// Schrijf hier je code


function myFirstFunction(bike) {
    forward(bike);
}  
//
function twiceForward(bike) {
    forward(bike);
    forward(bike);
}
//
function thriceForward(bike){
    var i;
    for(i=0; i<=2; i++){
        forward(bike);
    }
}
//
function forward4(bike){
    var i;
    for(i=0; i<=3; i++){
        forward(bike);
    }
}
//
function forward5(bike){
    var i;
    for(i=0; i<=4; i++){
        forward(bike);
    }
}
//
function forward10(bike){
    var i;
    for(i=0; i<=9; i++){
        forward(bike);
    }
}
//
function right(bike) {
    turnRight(bike);
    forward(bike);
}
//
function ellShape(bike){
    forward5(bike);
    turnRight(bike);
    forward4(bike);
}
//
function uTurn(bike) {
    thriceForward(bike);
    turnRight(bike);
    forward10(bike);
    turnRight(bike);
    twiceForward(bike);
}

//
function forwardN(bike, steps) {
    let i = steps;

    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

//
function crookedUTurn(bike) {
    forwardN(bike, 7);
    turnRight(bike);
    forwardN(bike, 9);
    turnRight(bike);
    forwardN(bike, 3);
}

//
function forwardUntilWall(bike){
    while(!sensor(bike)){
        forward(bike);
    }
}

//
function smartEllShape(bike) {
    forwardUntilWall(bike);
    turnRight(bike);
    forwardUntilWall(bike);
}

//
function spiral(car) {
    let i = 18;

    while (i > 0) {
        forwardUntilWall(car);
        turnRight(car);
        i = i - 1;
    }
}

//
function turnLeft(car){
    for(i=0; i<=2; i++){
        turnRight(car);
    }
}

//
function left(car){
    turnLeft(car);
    forward(car);
}

//
function slalom(car){
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
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
}    // mag verbeteren
    
//
function whichDirection(car) {
    while (sensor(car)) {
        turnRight(car);
    }
}


//
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


function incompleteU(car){
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}



function whichDirection(car) {
    while (sensor(car)) {
        turnRight(car);
    }
    forwardUntilWall(car);
}

function sensorRight(car){
    turnRight(car);
    let result = sensor(car);
    turnLeft(car);
    return result;
}

function firstRight(car){
    while(sensorRight(car)){
        forward(car);
    }
    turnRight(car);
    forwardUntilWall(car);
}

function sensorLeft(car){
    turnLeft(car);
    let result = sensor(car);
    turnRight(car);
    return result;
}

function firstLeft(car){
    while(sensorLeft(car)){
        forward(car);
    }
    turnLeft(car);
    forwardUntilWall(car);
}

function zigZag(car){
    firstRight(car);
    turnLeft(car);
    forward(car);
    firstLeft(car);
}

function forwardUntilFreeRight(car) {
    while (sensorRight(car)) {
        forward(car);
    }
}

function secondRight(car){
    forwardUntilFreeRight(car);
    forward(car);
    forwardUntilFreeRight(car);
    turnRight(car);
    forwardUntilWall(car);
}

function thirdRight(car){
    for(var i = 1; i<=2; i++){
        forwardUntilFreeRight(car);
        forward(car);
    }
    forwardUntilFreeRight(car);
    turnRight(car);
    forwardUntilWall(car);
}


function forwardUntilNthRight(car, nrights) {
    let i = nrights;

    while (i > 0) {
        forward(car);

        if (!sensorRight(car)) {
            i = i - 1;
        }
    }
}

function fourthRight(car) {
    forwardUntilNthRight(car, 4);
    turnRight(car);
    forwardUntilWall(car);
}

function forwardUntilNthLeft(car, nrights) {
    let i = nrights;

    while (i > 0) {
        forward(car);

        if (!sensorLeft(car)) {
            i = i - 1;
        }
    }
}

function fifthLeft(car){
    forwardUntilNthLeft(car, 5);
    turnLeft(car);
    forwardUntilWall(car);
} 

function maze(car) {
    function L(n) {
        forwardUntilNthLeft(car, n);
        turnLeft(car);
    }

    function R(n) {
        forwardUntilNthRight(car, n);
        turnRight(car);
    }

    R(2);
    L(1);
    L(2);
    L(2);
    R(4);
    R(1);
    L(3);
    forwardUntilWall(car);
}