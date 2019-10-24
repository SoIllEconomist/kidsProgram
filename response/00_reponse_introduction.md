# Introduction

Code that reponds to input from the mouse, keyboard, an dother devices depend on the program to run continuously.

## draw() Function

The code within the `draw()` block funs from top to bottom, then repeats until you quit the program.

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  print("I'm drawing");
}
```

## setup() Function

To complement the looping of `draw()`, we have `setup()` that runs just once when the program starts:

```javascript
function setup() {
  createCanvas(400, 400);
  print("I'm starting")
}

function draw() {
  background(220);
  print("I'm drawing");
}
```

## Code Order

Here is the order of which code runs in p5.js.

1. Variables declared outside of `setup()` and `draw()` are created.
1. Code inside `setup()` is run once. 
1. Code inside `draw()` is run continuously. 

```javascript
var x = 280;
var y = -100;
var diameter = 380;


function setup() {
  createCanvas(400, 120);
  fill(102);
}

function draw() {
  background(220);
  ellipse(x, y, diameter, diameter)
}
```
## Follow

Since code is running continuously, we can track the mouse position and use those elements on screen. 


### Track the Mouse
The `mouseX` variable stores the x coordinate, and the `mouseY` sotres the y coordinate. 
Each time the code in  `draw()` block is run, a new circle is drawn to the canvas.Since the fill is set to be partially transparent, denser black areas show where the mouse spend more time and where it moded slower. 

The circles that are spaced farther apart show when the mouse was moving faster. 

```javascript
function setup() {
  createCanvas(400, 120);
  fill(0, 102);
  noStroke()
}

function draw() {
  ellipse(mouseX, mouseY, 9,9)
}
```

### Dot Follows

A new circle is added o the canvas each time the code in `draw()` is run. To refresh the screen and only display the newest circle, place a `background()` function at the beginning. 

```javascript
function setup() {
  createCanvas(400, 120);
  fill(0, 102);
  noStroke()
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 9,9)
}
```

## Homework 

Use the "Track the Mouse" Example from above as templates for the homework. Students are to:

1. EASY: Recreate the inclass activity. Students should edit the "Track the Mouse" activity so that it has a rainbow effect while draging the mouse over the Canvas. 
1. MODERATE: Edit the shape of the ellipse to be something else; triangle, line, another size of ellipse.
1. HARD: Use the code from the ["Make Circles" Example](../introduction/01_make_circles.md) from the introduction to have the screen clear when the mouse is pressed. 


