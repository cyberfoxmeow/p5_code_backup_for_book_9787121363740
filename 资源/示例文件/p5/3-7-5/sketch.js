function setup() {
  createCanvas(500, 150);
  background(0);
}
function draw() {
	let x=50;
	let d=10;
	stroke(255);
	for(let i=1; i<=7; i++){
		ellipse(x, 40, d, d);
		ellipse(x, 105, 80-d, 80-d);
		x += 50;
		d += 10;
	}
}
