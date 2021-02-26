var y = 75;
var w = 90;
var h = 90;
function setup() {
	createCanvas(500, 150);
	rectMode(CENTER);
	background(200);
}
function draw() {
	rect(128,y,w,h);
	rect(380,y,w,h);
}
/*
function setup() {
	createCanvas(500, 150);
	rectMode(CENTER);
	background(200);
}
function draw() {
	{
		let y = 75;
		let w = 90;
		let h = 90;
		rect(128,y,w,h);
	}
	rect(380,y,w,h);
}
*/
