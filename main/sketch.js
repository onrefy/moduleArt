"use strict";

var cellLength = 10;
var xNum, yNum;
var world = [];
var ant = [];
var antNum = 1;
var img = [];
var imageNum = 3;

function setup() {
    for (let i = 0; i < imageNum; i++) {
        img.push(loadImage('../image/hair/' + i + '.png'));
    }
    createCanvas(1000, 800);
    xNum = Math.floor(width / cellLength);
    yNum = Math.floor(height / cellLength);
    for (let i = 0; i < antNum; i++) {
        ant.push(new MovingParticle(Math.floor(Math.random() * xNum / 2), Math.floor(Math.random() * yNum / 2)));
    }
    for (let i = 0; i < xNum; i++) {
        var row = [];
        for (let j = 0; j < yNum; j++) {
            row.push('die');
        }
        world.push(row);
    }
}

function draw() {
    background(255);
    for (let i = 0; i < 70; i++) {
        for (let j = 0; j < antNum; j++) {
             ant[j].MoveForwards();
        }
    }
    render();
}


function IsAlive(x, y) {
    if (world[x][y] == 'alive') return true;
    else return false;
}

function render() {
    var cellHeight=4;
    for (let i = 0; i < xNum; i++) {
        for (let j = 0; j < yNum; j++) {
            if (IsAlive(i, j)) {
                image(img[2], i * cellLength, j * cellLength, cellLength * cellHeight, cellLength * cellHeight);
            }
        }
    }
}

function mouseDragged() {
    world[Math.floor(mouseX / cellLength)][Math.floor(mouseY / cellLength)] = 'alive';
}
