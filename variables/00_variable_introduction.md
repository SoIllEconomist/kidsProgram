# Variables

A **variable** stores a value in memory so that it can be used later in a program. 

The main reason we use variables is to avoid repeating outselves in the code. 

## Resue the Same Values

When you make the y coordinate and the diameter for the three circles in this example into variables, the same values are used for each ellipse.

```javascript
var y = 240;
var d = 80;
function setup() {
  createCanvas(480, 480);
}

function draw() {
  background(220);
  ellipse(75, y, d, d);
  ellipse(175, y, d, d);
  ellipse(275, y, d, d);
  ellipse(375, y, d, d);
  
}
```
## Change Values

Changing the y and d variables alters the ellipses:

```javascript
var y = 200;
var d = 180;
function setup() {
  createCanvas(480, 480);
}

function draw() {
  background(220);
  ellipse(75, y, d, d);
  ellipse(175, y, d, d);
  ellipse(275, y, d, d);
  ellipse(375, y, d, d);
  
}
```

Without variables, you'd need to change the y coordinate used in the code four times and the diameter 6 times.

## p5.js Variables

p5.js has a series of special variables to store information about the program. For example, the width and height of the canvas are stored in variables called width and height.


## Adjusting the Canvas
In this example we'll change the parameters to createCanvas() to see how it works.

```javascript

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(220);
  line(0,0, width, height);
  line(width, 0, 0, height);
  ellipse(width/2, height/2, 60, 60);
  
  
}
```
[Next Lesson](01_make_mathematics.md)
