# Click
In addition to the location of the mouse. p5.js keeps track of wheather the mouse button is pressed. The `mouseIsPressed` variable has a different value when the mouse button is pressed and when it is not. The `mouseIsPressed` variable is called a boolean variable, which means that it has only two possible values: `true` and `false`. The value of `mouseIsPressed` is `true` when a button is pressed. 

## Example: Click the Mouse
The `mouseIsPressed` variable is used along with the `if` statement to determine when a line of code will run and when it won't.

```javascript
function setup() {
  createCanvas(400, 400);
  strokeWeight(30)
}

function draw() {
  background(220);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed == true) {
    stroke(0);
  }
  line(0, 70, width, 50);
}

```

In this program, the code inside the `if` block runs only when a mouse button is pressed. When a button is not pressed, this code is ignored. Like the `for`, the `if` also has a `test` that is evaluated to `true` or `false`:

```javascript
if (test) {
  statements
  }
```
When the test is `true`, the code inside the block is run; when the test is `false` by evaluating the expression inside the parentheses.

The `==` symbol compares the values on the left and right to test whether they are equivalent. This `==` symbol is different from the assignment operator, the single `=` symbol. The `==` symbol asks, "Are these things equal?" and the `=` symbol sets the value of a variable. 

Alternatively, the test in `draw()` can be written like this:

```javascript
if (mouseIsPressed) {
  statement
}
```
Boolean variables, including `mouseIsPressed`, don't need the explicit comparison with the `==` operator, because they will be only `true` or `false`.

## Detect When Not Clicked

A single `if` block gives you the choice of running some code or skipping it. You can extend an `if` block with an `else` block, allowing your program to choose between two options. The code indise the `else` block runs when the value of the `if` block test is `false`. For instance, the stroke color for a program can be white when the mouse button is not pressed, and can change to black when the button is pressed:

```javascript
function setup() {
  createCanvas(400, 400);
  strokeWeight(30)
}

function draw() {
  background(220);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed) {
    stroke(0);
  } else {
    stroke(255);
  }
  line(0, 70, width, 50);
}
```
