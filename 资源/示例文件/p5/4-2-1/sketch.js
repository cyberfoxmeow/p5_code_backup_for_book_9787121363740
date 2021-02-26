function setup() {
	createCanvas(240, 120);
	noStroke();
}
function draw() {
	background(200);
	fill(255);
	if (mouseIsPressed == true) {//如果鼠标被按下，将颜色设定为黑色。
		fill(0);
	}
	ellipse(120, 60, 80, 80);
}
