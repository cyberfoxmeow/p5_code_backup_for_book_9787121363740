function setup() {
	createCanvas(600, 240);
	background(0,10,60); // 深蓝色背景
	noStroke();
}
function draw() {
	fill(255,0,0); // 填充红色
	rect(120, 64, 200, 120); // 红色矩形
	fill(0,255,0); // 填充绿色
	rect(240, -60, 400, 200); // 绿色矩形
	fill(0,0,255); // 填充蓝色
	rect(300, 100, 200, 200); // 蓝色矩形
}
