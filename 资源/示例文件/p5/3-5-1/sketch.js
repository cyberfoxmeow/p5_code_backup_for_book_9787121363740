let x = 50;
let y = 60;
let a = 20;
function setup() {
	createCanvas(500, 150);
	background(200);
}
function draw() {
	a = 20;
	ellipse(x, y, a, a);
	a = a + 10;
	ellipse(x*2, y, a, a);
	a = a + 10;
	ellipse(x*3, y, a, a);
	a = a + 10;
	ellipse(x*4, y, a, a);
	a = a + 10;
	ellipse(x*5, y, a, a);
	a = a + 10;
	ellipse(x*6, y, a, a);
	a = a + 10;
	ellipse(x*7, y, a, a);
}
