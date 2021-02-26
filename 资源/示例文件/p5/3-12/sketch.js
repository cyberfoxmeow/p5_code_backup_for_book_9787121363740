let x = 0; // x坐标
let y = 0; // y坐标
let body=255; // 身高
let eye =120; // 眼睛大小

function setup() {
  createCanvas(400, 700);
  background(200);
}

function draw() {
	// 两条腿
	noStroke();
	fill(255, 160, 45);
	ellipse(x+100, y+body+350, 100, 50);
	ellipse(x+300, y+body+350, 100, 50);

	// 身子
	fill(0);
	ellipse(x+50, y+440, 60, 235);
	ellipse(x+350, y+440, 60, 235);
	rect(x+50, y+350, 300, body);
	stroke(0);
	strokeWeight(300);
	line(x+200, y+265, x+200, y+380);

	// 眼睛和肚皮
	fill(255);
	noStroke();
	ellipse(x+130, y+270, eye, eye);
	ellipse(x+270, y+270, eye, eye);
	ellipse(x+200, y+445, 200, 200);

	// 眼球
	fill(0);
	ellipse(x+130, y+270, eye/5, eye/5);
	ellipse(x+270, y+270, eye/5, eye/5);

	// 嘴巴
	noStroke();
	fill(255, 160, 45);
	triangle(x+185, y+300, x+215, y+300, x+200, y+325);
}
