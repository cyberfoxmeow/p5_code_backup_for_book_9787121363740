let x = 0;
let y = 0;
let easing = 0.05;
function setup() {
	createCanvas(600, 600);
	background(200);
}
function draw() {
	let targetX = mouseX;
	let targetY = mouseY;
	x += (targetX - x) * easing;//图形由x点缓动向targetX点移动
	y += (targetY - y) * easing;//图形由y点缓动向targetY点移动
	ellipse(x, y, 30, 30);
}
