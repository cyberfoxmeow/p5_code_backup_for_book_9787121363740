function setup() {
	createCanvas(200, 150);
	background(200);
	strokeWeight(3);
}
function draw() {
	beginShape();  //自定义图形绘图开始
		vertex(115, 18);
		vertex(125, 50);
		vertex(180, 60);
		vertex(135, 80);
		vertex(140, 120);
		vertex(90, 90);
		vertex(40, 110);
		vertex(60, 75);
		vertex(20, 50);
		vertex(80, 45);
	endShape();  //自定义图形绘图结束
}
