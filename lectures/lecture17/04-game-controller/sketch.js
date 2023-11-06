let x = 100;
let y = 200;
let width = 50; 
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill('red');
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
if (ev.code==='ArrowUp'){
        //do something: 
        y = y - 3; 

    } else if (ev.code==='ArrowDown'){
            //do something: 
            y = y + 3; 
    }
 if (ev.code==='ArrowLeft'){
        //do something: 
        x = x - 3; }
if (ev.code==='ArrowRight'){
            //do something: 
            x = x + 3; }
if (ev.code==='Space'){
                //do something: 
            width = width + 3; }
if (ev.code==='KeyR'){
                //do something: 
                fillColor ='red' }

 if (ev.code==='KeyB'){
                    //do something: 
                    fillColor = 'blue'; }

                  
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}



// Add event listener on keydown
document.addEventListener("keydown", moveController);
