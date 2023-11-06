function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight;
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged() {
    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the color, shape, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:
    const color = document.querySelector("#color").value;
    const size = document.querySelector("#size").value;
    const shape = document.querySelector("#shape").value;
    const outlineWidth = document.querySelector("#outlinew").value;
    const outlineColor = document.querySelector("#stroke").value;

    fill(color);
    stroke(outlineColor);
    strokeWeight (outlineWidth);
    //circle(mouseX, mouseY, size);
    //square(mouseX, mouseY, size,);

    if (shape === 'circle') {
        circle(mouseX, mouseY, size);
    }
    else if (shape === "square") {
        square(mouseX, mouseY, Number(size), 3, 3, 3, 3);
    } else {
        const r = size / 2;
        triangle(
            mouseX,
            mouseY - r,
            mouseX - r,
            mouseY + r,
            mouseX + r,
            mouseY + r,)


    }
}