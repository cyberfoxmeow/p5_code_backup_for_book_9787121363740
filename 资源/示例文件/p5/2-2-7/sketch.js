function setup() {
	createCanvas(500, 150);
	background(200);
}
function draw() {
	arc(70, 70, 120, 60, 0, radians(45));
	arc(210, 70, 50, 80, radians(450), radians(225));
	arc(290, 70, 80, 80, radians(-45), radians(180));
	arc(410, 70, 60, 80, radians(45), radians(270));
}
