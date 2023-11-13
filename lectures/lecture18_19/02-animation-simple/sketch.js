let x = 100;
let y = 200;
let width = 50;

let x1 = 1200; //second circle 
let y1 = 300; 
let width1 = 100; 

let speed = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    //goal: make circle go diagonal and up: 
    x += speed;
    y -= 2;

    x1 -= speed; 

    clear();
    fill('hotpink');
    circle(x, y, 150);
    fill ('teal');
    circle(x1, y1, width1);
    drawGrid(canvasWidth, canvasHeight);


}


