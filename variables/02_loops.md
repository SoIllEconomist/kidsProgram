# Repetition

As you write more programs, you'll notice that patters occur when lines of code are repeated, but with slight variations.

A code structure called a for loop makes it possible to run a line  of code more times in a condensed fashion. 

## Do the Same Thing Over and Over

```javascript
function setup() {
  createCanvas(480, 120);
  strokeWeight(8);
}

function draw() {
  background(220);
  line(20, 40, 80, 80);
  line(80, 40, 140, 80);
  line(140, 40, 200, 80);

}
```

## Use a for Loop

The same thing can be done with a for loop, and with less code:

```javascript
function setup() {
  createCanvas(480, 120);
  strokeWeight(8);
}

function draw() {
  background(220);
  for (var i = 20; i < 400; i += 60) {
    line(i, 40, i + 60, 80);
  }

}
```

Notice the braces, the { and } characters. The code between the braces is called a block. This is the code that will  be repeated on each iteration of the for loop. 

The for loop utilized relational operators. The most common relational operators are:

| Operator 	| Description              	|
|----------	|--------------------------	|
| >        	| Greater than             	|
| <        	| Less than                	|
| >=       	| Greater than or equal to 	|
| <=       	| Less than or equal to    	|
| ==       	| Equal to                 	|
| !=       	| Not equal to             	|

The relational expression always evalueates to true or false. For instance the expression 5 > 3 is true.When the evaluation is true, the code inside the block is ru, when it's false, the fcode inside the block is not run and the for loop ends. 

## Flex Your for Loop's Muscles

```javascript
function setup() {
  createCanvas(480, 120);
  strokeWeight(2);
}

function draw() {
  background(220);
  for (var i = 20; i < 400; i += 8) {
    line(i, 40, i + 60, 80);
  }

}
```
