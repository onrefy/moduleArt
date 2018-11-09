"use strict";

const TOTAL_FUNCTIONS_NUMBER = 17;

var renderIndex = 1;
var radius = 600;

var circleRender = [];
var isLeftPressed = false;
var isRightPressed = false;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255);
    circleRender[renderIndex](width / 2, height / 2, radius);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}
var t =0;
function draw() {
//    if (isLeftPressed) {
//        background(255);
//        renderIndex++;
//        console.log(renderIndex);
//        if (renderIndex > TOTAL_FUNCTIONS_NUMBER) renderIndex = 0;
//        circleRender[renderIndex](width / 2, height / 2, radius);
//        isLeftPressed = false;
//    }
//    if (keyIsPressed) {
//        background(255);
//        circleRender[renderIndex](width / 2, height / 2, radius);
//    }
    background(255);
    wavyLine(0,0,width,height);
}

function randomFullDegree() {
    return Math.random() * Math.PI * 2;
}

function randomBetween(start, end) {
    return Math.random() * (end - start) + start;
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


circleRender[0] = function (x, y, radius) {
    noFill();
    stroke(0);
    ellipseMode(CENTER);
    ellipse(x, y, radius, radius);
}
circleRender[1] = function (x, y, radius) {
    var num = 100;

    for (let i = 0; i < num; i++) {
        let theta = Math.PI * 2 / num * i;
        noFill();
        stroke(255,0,0,100);
        strokeWeight(2);
        lineAtRatio(x, y, x + radius / 2 * cos(theta), y + radius / 2 * sin(theta),t/200);
    }
}
circleRender[2] = function (x, y, radius) {
    var num = 20;
    var start = 1;
    var theta = randomFullDegree();
    for (let i = start; i < num; i++) {
        var ratio = i / num;
        noFill();
        stroke(0);
        ellipseMode(CENTER);
        ellipse(x + radius / 2 * cos(theta) * (1 - ratio), y + radius / 2 * sin(theta) * (1 - ratio), radius * ratio, radius * ratio);
    }
}
circleRender[3] = function (x, y, radius) {
    var num = 100;
    var start = 1;
    var theta = randomFullDegree();
    var saturate = 10;

    for (let i = start; i < num; i++) {
        var ratio = i / num;
        noFill();
        stroke(0, saturate);
        strokeWeight(Math.random() * 6);
        ellipseMode(CENTER);
        ellipse(x + radius / 2 * cos(theta) * (1 - ratio), y + radius / 2 * sin(theta) * (1 - ratio), radius * ratio, radius * ratio);
    }

}
circleRender[4] = function (x, y, radius) {
    var num = 80;
    var saturate = 40;
    var circleWid = 2;

    ellipseMode(CENTER);
    noFill();
    stroke(0, saturate);
    strokeWeight(circleWid);
    ellipse(x, y, radius, radius);
    for (let i = 0; i < num; i++) {
        var theta = Math.random() * Math.PI * 2;
        var distanceFromCenter = Math.random() * radius / 2;
        var circleX = x + radius / 2 * Math.cos(theta) - distanceFromCenter * Math.cos(theta);
        var circleY = y + radius / 2 * Math.sin(theta) - distanceFromCenter * Math.sin(theta);
        ellipse(circleX, circleY, distanceFromCenter * 2, distanceFromCenter * 2);
    }
}
circleRender[5] = function (x, y, radius) {
    var num = 20;
    var saturate = 10;

    ellipseMode(CENTER);
    fill(0, saturate);
    noStroke();
    for (let i = 0; i < num; i++) {
        var theta = Math.random() * Math.PI * 2;
        var distanceFromCenter = Math.random() * radius / 2;
        var circleX = x + radius / 2 * Math.cos(theta) - distanceFromCenter * Math.cos(theta);
        var circleY = y + radius / 2 * Math.sin(theta) - distanceFromCenter * Math.sin(theta);
        ellipse(circleX, circleY, distanceFromCenter * 2, distanceFromCenter * 2);
    }
}
circleRender[6] = function (x, y, radius) {
    var num = 40;
    var circleWid = 1;
    for (let i = 0; i < num; i++) {
        var thetaStart = Math.PI * 2 * Math.random();
        var thetaEnd = Math.PI * 2 * Math.random();
        var ratio = i / num;
        noFill();
        stroke(0);
        arc(x, y, radius * ratio, radius * ratio, thetaStart, thetaEnd);
    }
}
circleRender[7] = function (x, y, radius) {
    var num = 100;
    var start = 40;
    var circleWid = 10;
    var saturate = 100;
    for (let i = start; i < num; i++) {
        var thetaStart = Math.PI * 2 * Math.random();
        var thetaEnd = Math.PI * 2 * Math.random();
        var ratio = i / num;
        noFill();
        stroke(0, saturate);
        strokeCap(SQUARE);
        strokeWeight(circleWid);
        arc(x, y, radius * ratio, radius * ratio, thetaStart, thetaEnd);
    }
}
circleRender[8] = function (x, y, radius) {
    var num = 35;
    var saturate = 40;
    var circleWid = 2;

    ellipseMode(CENTER);
    noFill();
    stroke(0, saturate);
    strokeWeight(circleWid);
    for (let i = 0; i < num; i++) {
        var theta = Math.random() * Math.PI * 2;
        var distanceFromCenter = Math.random() * radius / 2;
        var circleX = x + radius / 2 * Math.cos(theta) - distanceFromCenter * Math.cos(theta);
        var circleY = y + radius / 2 * Math.sin(theta) - distanceFromCenter * Math.sin(theta);
        var thetaStart = Math.PI * Math.random() - Math.PI / 2 + theta;
        var thetaEnd = Math.PI * Math.random() - Math.PI / 2 + theta;
        arc(circleX, circleY, distanceFromCenter * 2, distanceFromCenter * 2, thetaStart, thetaEnd);
    }
}
circleRender[9] = function (x, y, radius) {
    var num = 800;
    var saturate = 60;
    var circleWid = 1;
    for (let i = 0; i < num; i++) {
        var thetaStart = Math.random() * Math.PI * 2;
        var thetaEnd = Math.random() * Math.PI * 2;
        noFill();
        stroke(0, saturate);
        strokeWeight(circleWid);
        line(x + radius / 2 * cos(thetaStart), y + radius / 2 * sin(thetaStart), x + radius / 2 * cos(thetaEnd), y + radius / 2 * sin(thetaEnd));
    }
}
circleRender[10] = function (x, y, radius) {
    var num = 1000;
    var saturate = 60;
    var circleWid = 1;

    for (let i = 0; i < num; i++) {
        var theta = randomFullDegree();
        var distanceFromCenter = randomBetween(0, radius / 2);
        var secant = Math.sqrt(Math.pow(radius / 2, 2) - Math.pow(distanceFromCenter, 2));
        var randomSecant = randomBetween(0, secant);
        noFill();
        stroke(0, saturate);
        strokeWeight(circleWid);
        line(x + distanceFromCenter * Math.cos(theta) - randomSecant * Math.sin(theta),
            y + distanceFromCenter * Math.sin(theta) + randomSecant * Math.cos(theta),
            x + distanceFromCenter * Math.cos(theta) + randomSecant * Math.sin(theta),
            y + distanceFromCenter * Math.sin(theta) - randomSecant * Math.cos(theta));
    }
}

circleRender[11] = function (x, y, radius) {
    var num = 30;
    var start = 1;
    var theta = randomFullDegree();
    var saturate = 20;

    for (let i = start; i < num; i++) {
        var ratio = i / num;
        fill(0, saturate);
        noStroke();
        ellipseMode(CENTER);
        ellipse(x + radius / 2 * cos(theta) * (1 - ratio), y + radius / 2 * sin(theta) * (1 - ratio), radius * ratio, radius * ratio);
    }

}

circleRender[12] = function (x, y, radius) {
    var num = 50;
    var theta = randomFullDegree();
    var saturate = 200;
    var circleWid = 5;

    for (let i = 1; i < num - 1; i++) {
        var ratio = i / (num - 1) - 0.5;
        var distanceFromCenter = radius * ratio;
        var secant = Math.sqrt(Math.pow(radius / 2, 2) - Math.pow(distanceFromCenter, 2));
        noFill();
        strokeCap(ROUND);
        stroke(0, saturate);
        strokeWeight(circleWid);
        line(x + distanceFromCenter * Math.cos(theta) - secant * Math.sin(theta),
            y + distanceFromCenter * Math.sin(theta) + secant * Math.cos(theta),
            x + distanceFromCenter * Math.cos(theta) + secant * Math.sin(theta),
            y + distanceFromCenter * Math.sin(theta) - secant * Math.cos(theta));
    }
}
circleRender[13] = function (x, y, radius) {
    var num = 50;
    var theta = randomFullDegree();
    var saturate = 200;
    var circleWid = 5;

    for (let i = 1; i < num - 1; i++) {
        var ratio = i / (num - 1) - 0.5;
        var distanceFromCenter = radius * ratio;
        var secant = Math.sqrt(Math.pow(radius / 2, 2) - Math.pow(distanceFromCenter, 2));
        var wave = 30;
        var lengthNowHave = 0;
        var secantStart = -secant;
        var secantEnd = secantStart;
        while (secantEnd < secant) {
            var randomSecant = randomBetween(0, secant);
            if (secantStart + randomSecant <= secant)
                secantEnd += randomSecant;
            else secantEnd = secant;
            noFill();
            strokeCap(ROUND);
            stroke(0, saturate);
            strokeWeight(circleWid);
            line(x + distanceFromCenter * Math.cos(theta) - secantStart * Math.sin(theta),
                y + distanceFromCenter * Math.sin(theta) + secantStart * Math.cos(theta),
                x + distanceFromCenter * Math.cos(theta) - secantEnd * Math.sin(theta),
                y + distanceFromCenter * Math.sin(theta) + secantEnd * Math.cos(theta));
            secantStart = secantEnd + wave;
            secantEnd = secantStart;
        }
    }
}
circleRender[14] = function (x, y, radius) {
    var num = 1000;
    var isLineBear = false;
    var saturate = 40;
    var circleWid = 2;
    var distanceFromCenter;

    for (let i = 0; i < num; i++) {
        var theta = randomFullDegree();
        while (!isLineBear) {
            distanceFromCenter = randomBetween(0, radius / 2);
            if (distanceFromCenter / radius * 2 < Math.random() * (1 - distanceFromCenter / radius * 2))
                isLineBear = true;
        }
        var secant = Math.sqrt(Math.pow(radius / 2, 2) - Math.pow(distanceFromCenter, 2));
        var randomSecant = randomBetween(0, secant);

        noFill();
        strokeCap(ROUND);
        stroke(0, saturate);
        strokeWeight(circleWid);
        line(x + distanceFromCenter * Math.cos(theta) - randomSecant * Math.sin(theta),
            y + distanceFromCenter * Math.sin(theta) + randomSecant * Math.cos(theta),
            x + distanceFromCenter * Math.cos(theta) + randomSecant * Math.sin(theta),
            y + distanceFromCenter * Math.sin(theta) - randomSecant * Math.cos(theta));
        isLineBear = false;
    }
}
circleRender[15] = function (x, y, radius) {
    var num = 3000;
    var isLineBear = false;
    var saturate = 40;
    var distanceFromCenter;

    for (let i = 0; i < num; i++) {
        var theta = randomFullDegree();
        distanceFromCenter = randomLinlyFromPlot(x => 2 - 2 * x, 2) * radius / 2;
        noStroke();
        fill(0, saturate);
        ellipseMode(CENTER);
        ellipse(x + distanceFromCenter * cos(theta), y + distanceFromCenter * sin(theta), 10, 10);
    }
}
circleRender[16] = function (x, y, radius) {
    var num = 3000;
    var isLineBear = false;
    var saturate = 40;
    var saturateRatio = 0.3;
    var distanceFromCenter;
    var amplitude = 100;
    for (let i = 0; i < num; i++) {
        var theta = randomFullDegree();
        distanceFromCenter = randomLinlyFromPlot(x => 0.2 / x, 1) * radius / 2;
        noStroke();
        fill(0, saturate);
        ellipseMode(CENTER);
        ellipse(x + distanceFromCenter * cos(theta), y + distanceFromCenter * sin(theta), 10, 10);
        stroke(0, saturate * saturateRatio);

        line(x, y, x + distanceFromCenter * cos(theta), y + distanceFromCenter * sin(theta));
    }
}
circleRender[17] = function (x, y, radius) {
    var num = 6;
    var circleWid = 10;
    var saturate = 100;
    noFill();
    strokeCap(SQUARE);
    stroke(0, saturate);
    for (let i = 0; i < num; i++) {
        strokeWeight(circleWid * Math.random());
        spiral(x, y, radius, 6, Math.PI * 2 / num * i);
    }
}


function spiral(x, y, radius, circleNumber, startTheta = 0) {
    var num = 1000;
    var point;
    var perRotate = circleNumber * Math.PI * 2 / num;
    var k = radius / 2 / (circleNumber * Math.PI * 2);
    beginShape();
    for (let i = 0; i < num; i++) {
        point = changePolarIntoXY(k * i * perRotate, i * perRotate + startTheta);
        curveVertex(point[0] + x,
            point[1] + y);
    }
    endShape();
}

function mouseClicked() {
    if (mouseButton === LEFT)
        isLeftPressed = true;
    if (mouseClicked === RIGHT)
        isRightPressed = true;
}
function mapBetween(start,end,ratio){
    return start+(end-start)*ratio;
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
