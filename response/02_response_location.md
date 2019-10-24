# Location

An `if` structure can be used with the `mouseX` and `mouseY` values to determine the location of the cursor within the window.

## Find the Cursor

For instance, here we tests to see whether the cursor is on the left or right side of a line and then moves the line toward the cursor:

```javascript
var x;
var offset = 10;

function setup() {
  createCanvas(240, 120);
  x = width/2;
}


function draw() {
  background(220);
  if (mouseX > x) {
    x+= 0.5;
    offset = -10;
  }
  if (mouseX < x) {
    x -= 0.5;
    offset = 10;
  }
  // Draw arrow left or right depending on "offset" value
  line(x, 0, x, height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY + 10);
  line(mouseX, mouseY, mouseX + offset*3, mouseY);
}
```
