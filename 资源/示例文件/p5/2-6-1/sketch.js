function setup() {
	createCanvas(500, 150);
	background(200);
	rectMode(CENTER);
}
function draw() {
	strokeWeight(1);  // 边框宽度为1像素
	rect(135, 70, 80, 80);
	strokeWeight(6);  // 边框宽度为6像素
	rect(235, 70, 80, 80);
	strokeWeight(15);  // 边框宽度为15像素
	rect(335, 70, 80, 80);
}
