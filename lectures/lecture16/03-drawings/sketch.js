function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("grey");
    //code here: 

    drawCreature(100, 400, 'teal');
    drawCreature(250, 100, 'purple');
    drawCreature(400, 150, 'orange');
    drawCreature(550, 200, 'green');
    drawCreature(700, 340, 'pink');



    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawCreature(x, y, color){
    fill(color);
    let size = 150;
    let eyeball = 150 / 7.5;
    circle(x, y, 160); //base face shape
    fill("white");
    circle(x - eyeball * 1.5, y - eyeball, 2 * eyeball); //left eye
    circle(x + eyeball * 1.5, y - eyeball, 2 * eyeball); //right eye 
    fill("black");
    circle(x - eyeball, y - eyeball, eyeball); //left eye
    circle(x + eyeball, y - eyeball, eyeball); //right eye 
}