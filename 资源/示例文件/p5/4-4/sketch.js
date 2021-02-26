let x = 0; // x坐标
let y = 250; // y坐标
let body=225; // 身高
let eye = 120; // 眼睛大小
let easing = 0.1;

function setup() {
	createCanvas(700, 700);
}

function draw() {
	let targetX = mouseX;
	x += (targetX - x) * easing; //使用缓动函数控制企鹅的x位置

	if (mouseIsPressed) {  //当鼠标按下时改变身体的高度和眼睛的大小
		body = 300;
		eye = 60;
	} else {
		body = 225;
		eye = 120;
	}

	background(200);
	// 两条腿
	noStroke();
	fill(255, 160, 45);
	ellipse(x-100, y+body, 100, 50);
	ellipse(x+100, y+body, 100, 50);

	// 身子
	fill(0);
	ellipse(x-150, y+90, 60, 235);
	ellipse(x+150, y+90, 60, 235);
	rect(x-150, y, 300, body);
	stroke(0);
	strokeWeight(300);
	line(x, y-85, x, y+30);

	// 眼睛和肚皮
	fill(255);
	noStroke();
	ellipse(x-70, y-80, eye, eye);
	ellipse(x+70, y-80, eye, eye);
	ellipse(x, y+95, 200, 200);

	// 眼球
	fill(0);
	ellipse(x-70, y-80, eye/5, eye/5);
	ellipse(x+70, y-80, eye/5, eye/5);

	// 嘴巴
	noStroke();
	fill(255, 160, 45);
	triangle(x-15, y-50, x+15, y-50, x, y-25);
}
