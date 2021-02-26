function setup() {
	createCanvas(300, 300);
	fill(255);
	background(0);
}
function draw() {
	if (keyIsPressed) {
		if ((key == 't') || (key == 'T')) {  //如果监测按下t或者T，执行if内运算
			background(0);
			triangle(150,30,30,270,270,270);
		}
		if ((key == 'e') || (key == 'E')) {  //如果监测按下e或者E，执行if内运算
			background(0);
			ellipse(150, 150, 250, 250);
		}
	}
}
