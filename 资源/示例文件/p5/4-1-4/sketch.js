function setup() {
	createCanvas(500, 150);
	background(0);
	strokeWeight(10);
}
function draw() {
	stroke(255,80,80);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
