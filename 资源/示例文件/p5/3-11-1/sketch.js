function setup() {
	createCanvas(640, 240);
}
function draw() {
	let gray = map(mouseX, 0, 640, 0, 255); //将鼠标x值从0至640区间映射到0至255区间并赋予变量gray
	background(gray);
}
