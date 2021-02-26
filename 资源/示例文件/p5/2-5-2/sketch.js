function setup() {
	createCanvas(600, 240);
	background(200);
}
function draw() {
	noStroke(); // 取消描边
	fill(150); // 填充中灰色
	rect(120, 64, 200, 120); // 无描边的矩形

	noFill(); // 取消填充
	stroke(0);// 黑色边框
	rect(240, -60, 400, 200); // 无填充的矩形
}
