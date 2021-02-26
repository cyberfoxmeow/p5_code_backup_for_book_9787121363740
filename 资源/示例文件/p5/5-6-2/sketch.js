let a=0;
function setup() {
	createCanvas(600, 600);
	background(0);
}
function draw() {
	a+=0.1;
	translate(mouseX,mouseY);
	rotate(a);
	scale(map(mouseX,0,600,0,1));
	rect(0, 0, 100, 100);
}
