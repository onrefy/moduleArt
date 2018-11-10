"use strict";

const TOTAL_FUNCTIONS_NUMBER = 17;

var renderIndex = 1;
var radius = 600;

var isLeftPressed = false;
var isRightPressed = false;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}
var t =0;
function draw() {
    background(255);
    wavyLine(0,0,width,height);
}





function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function changePolarIntoXY(ra, theta) {
    return [ra * cos(theta), ra * sin(theta)];
}

function returnPointINCicle(x, y, radius) {
    var theta = randomFullDegree();
    var r = randomBetween(0, radius);
    return [r * cos(theta), r * sin(theta)];
}

function randomLinlyFromPlot(f, ymax) {
    while (true) {
        var randomX = Math.random() * 1;
        var randomY = Math.random() * ymax;
        if (f(randomX) > randomY) return randomX;
    }
}




function mouseClicked() {
    if (mouseButton === LEFT)
        isLeftPressed = true;
    if (mouseClicked === RIGHT)
        isRightPressed = true;
}

function lineAtRatio(x1,y1,x2,y2,ratio){
    if (ratio>1) ratio=1;
    line (x1,y1,mapBetween(x1,x2,ratio),mapBetween(y1,y2,ratio));
}
function wavyLine(x1,y1,x2,y2,intervals){
    d=distance(x1,y1,x2,y2);
    var num =  Math.floor(d/intervals);
    beginShape();
    endShape();
}
