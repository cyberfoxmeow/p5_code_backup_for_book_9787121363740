function setup() {
	createCanvas(500, 150);
	//frameRate(5); //每秒刷新5次
	frameRate(60); //每秒刷新60次
	background(200);
}
function draw() {
	ellipse(mouseX,mouseY,50,50);
}
