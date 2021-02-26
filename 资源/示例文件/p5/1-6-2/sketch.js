function setup() {
	createCanvas(600, 600);
}
function draw() {
	if (mouseIsPressed) {
		stroke(220);
	} else {
		stroke(0);
	}
	line(300, 300, mouseX, mouseY);
}
