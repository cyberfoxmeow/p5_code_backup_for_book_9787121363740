let a=0;
function setup() {
	createCanvas(300, 300);
	background(0);
}
function draw() {
	a++;
	rotate(radians(a));
	rect(0, 0, 150, 150);
}
