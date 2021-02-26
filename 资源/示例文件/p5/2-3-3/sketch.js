function setup() {
	createCanvas(500, 150);
	background(0);
}
function draw() {
	// 左边的小动物
	fill(255);
	beginShape();
		vertex(125, 150);
		vertex(129, 100);
		vertex(110, 90);
		vertex(115, 80);
		vertex(130, 85);
		vertex(140, 10);
		vertex(147, 30);
		vertex(183, 32);
		vertex(190, 12);
		vertex(195, 90);
		vertex(210, 100);
		vertex(205, 110);
		vertex(195, 105);
		vertex(200, 150);
	endShape();
	fill(0);
	ellipse(153, 60, 6, 6);
	ellipse(176, 60, 6, 6);
	noFill();
	ellipse(164, 90, 10, 20);
	// 右边的小动物
	fill(255);
	beginShape();
		vertex(270, 150);
		vertex(270, 114);
		vertex(258, 110);
		vertex(260, 104);
		vertex(270, 105);
		vertex(270, 60);
		vertex(260, 50);
		vertex(270, 55);
		vertex(300, 55);
		vertex(320, 45);
		vertex(310, 55);
		vertex(320, 105);
		vertex(330, 100);
		vertex(335, 105);
		vertex(323, 113);
		vertex(325, 150);
	endShape();
	fill(0);
	ellipse(280, 80, 3, 7);
	ellipse(290, 80, 3, 7);
	noFill();
	arc(285, 90, 20, 20, radians(20), radians(90));
}
