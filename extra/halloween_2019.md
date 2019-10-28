# Digital Pumpkin Carving

The program below creates a virtual pumpikin carving.

```javascript
function setup() {
  createCanvas(400, 400);
  img = createImg("http://blogs.ifas.ufl.edu/desotoco/files/2017/10/Pumpkin-300x210.png");
  img.hide()

}

function draw() {
  background(220);
  image(img, 125, 125, img.width / 2, img.height / 2);

  ellipse(225, 170, 15, 20);
  ellipse(175, 170, 15, 20);

  arc(200, 200, 30, 20, 0, PI, CHORD);
  fill(0)
}
```
## Homework
Students are to change the code so that the face is customized for the student. 

Example: Make STARS for eyes and make the mouth have TEETH!
