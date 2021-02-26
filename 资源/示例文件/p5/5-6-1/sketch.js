function setup() {
	createCanvas(300, 300);
	rectMode(CENTER);
	background(0);
}
function draw() {
	translate(150, 150);
	scale(map(mouseY,0,300,0,2));
	rect(0, 0, 60, 60);
}
