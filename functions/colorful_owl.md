# Colorful Owl Example from Class

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(2);
  randomSeed(42);
  for (var i = 10; i < width + 40; i += 40) {
    var red = int(random(0, 255));
    var green = int(random(0, 255));
    var blue = int(random(0, 255));
    var scalar = random(0.25, 1.0);
    owl(i, 110, red, green, blue, scalar);
    
  }
  
}

// OWL function
// x, y: positions
function owl(x, y, r, g, b, s) {
  push()
  translate(x, y);
  scale(s);
  stroke(r, g, b);
  strokeWeight(70);
  line(0, -35, 0, -65);
  noStroke();
  fill(204);
  ellipse(-17.5, -65, 35, 35);
  ellipse(17.5, -63, 35, 35);
  arc(0,-65, 70, 70, 0, PI);
  fill(0);
  ellipse(-14, -65, 8, 8);
  ellipse(14, -65, 8, 8);
  quad(0, -58, 4, -51, 0, -44, -4, -51);
  pop()
  
}
```
