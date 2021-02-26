let x = 51;
let speed = 0.5;
let d = 50;
function setup() {
	createCanvas(500, 150);
}
function draw() {
	background(120);
	x += speed
	if((x > width-d/2) || (x < d/2)){
		speed = - speed;
	}
	ellipse(x, 60, d, d);
}
