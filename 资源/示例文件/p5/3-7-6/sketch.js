function setup() {
	createCanvas(500, 160);
	background(255);
}
function draw() {
	for (let y = 0; y <= height; y += 20) {
		for (let x = 0; x <= width; x += 20) {
			fill(255,80,80);
			rect(x, y, 18, 18);
		}
	}
}
