function setup() {
	createCanvas(240, 120);
	noFill();
}
function draw() {
	background(200);
	ellipse(90, 60, 80, 80);
	if (keyIsPressed) {
		ellipse(150, 60, 80, 80);
	}
}
