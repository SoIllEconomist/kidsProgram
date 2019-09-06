# A Little Math

Math can be useful for certain types of coding. Basic arithmetic covers the most important parts. 

## Basic Arithmetic

```javascript
var x = 25;
var h = 20;
var y = 25;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(220);
  x = 20;
  rect(x, y, 300, h); // Top
  x = x + 100
  rect(x, y + h, 300, h); // Middle
  x = x - 250
  rect(x, y + h * 2, 300, h); //Bottom


}
```

While coding, symbols like +,-, and * are called *operators*. When placed between two values, they create an *expressioni*.

The operators for the basic math operators are:

| Operator 	| Description    	|
|----------	|----------------	|
| +        	| Addition       	|
| -        	| Subtraction    	|
| *        	| Multiplication 	|
| /        	| Division       	|
| =        	| Assignment     	|

[Next Lesson](02_loops.md)
