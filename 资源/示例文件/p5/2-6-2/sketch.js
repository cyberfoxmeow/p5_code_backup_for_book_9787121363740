function setup() {
	createCanvas(500, 150);
	background(200);
	strokeWeight(16);
}
function draw() {
	strokeCap(ROUND);  //圆形端点
	line(60, 110, 130, 40);
	strokeCap(SQUARE);  //方形端点
	line(140, 110, 210, 40);
	strokeJoin(BEVEL);  //斜角
	rect(260, 35, 75, 75);
	strokeJoin(ROUND);  //圆角
	rect(380, 35, 75, 75);
}
