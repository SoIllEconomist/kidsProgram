# Drawing an Owl

```javascript
function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  translate(110,110);
  // Left Owl
  //Body
  stroke(0);
  strokeWeight(70);
  line(0,-35,0,-65);
  
  noStroke();
  fill(204);
  //Left eye dome
  ellipse(-17.5,-65,35,35);
  //Right eye dome
  ellipse(17.5,-65,35,35);
  //Chin
  arc(0,-65, 70,70,0,PI);
  fill(0);
  //left eye
  ellipse(-14,-65,8,8);
  //right eye
  ellipse(14,-65,8,8);
  //Beak
  quad(0,-58,4,-51,0,-44,-4,-51);
  
 
  }







```
