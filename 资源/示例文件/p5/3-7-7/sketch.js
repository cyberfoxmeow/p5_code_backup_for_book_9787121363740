function setup() {
	createCanvas(500, 160);
	background(255);
	noFill();
}
function draw() {
	for (let y = 0; y <= height; y += 20) {
		for (let x = 0; x <= width; x += 20) {
			ellipse(x, y, 60, 60);
		}
	}
}
