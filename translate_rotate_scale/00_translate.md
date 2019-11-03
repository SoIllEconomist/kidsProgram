# Translate, Rotate, Scale

A technique for moving things on screen is to change the screen coordinate system.

By modifying the default coordinate system, we can create different transformations inclusind translation, rotation, and scaling.

## Translate 

Working with transfomrations can be tricky, but the `translate()` fnction is the most straightforward.

### Example 1

In this example, notice that the rectangle is drawn at coordinate (0,0), but it is moved around on the canvas, since it is affected by`translate()`:

```javascript
function setup() {
  createCanvas(400, 400);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  rect(0,0,30, 30);

}
```

### Example 2

```javascript
function setup() {
  createCanvas(400, 400);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  rect(0,0,30, 30);
  translate(35, 10);
  rect(0,0,15,15);

}
```

The value for `translate()` functions are added together. The smaller rectangle was translated the amount of `mouseX + 35`. The x and y coordinates for both rectablges are (0,0), but the `translate()` functions move them to other positions on the canvas. 
