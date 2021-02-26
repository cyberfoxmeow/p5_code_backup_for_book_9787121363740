let angle=0.0;
function setup() {
  createCanvas(600,600);
  rectMode(CENTER);
}
function draw() {
  background(200);
  translate(mouseX, mouseY); // 所有坐标移至 (mouseX, mouseY)
  rotate(angle);
  angle+=0.05;
if (mouseIsPressed) {
  scale(1.0);
} else {
  scale(0.6); // 未点击鼠标时，企鹅尺寸设定为60％
}
	//两条腿
	noStroke();
	fill(255,160,45);
	ellipse(-100,225,100,50);
	ellipse(100,225,100,50);

	//身子
	fill(0);
	ellipse(-150,90,60,235);
	ellipse(150,90,60,235);
	rect(0,100,300,250);
	stroke(0);
	strokeWeight(300);
	line(0, -85, 0, 30);

	//眼睛和肚皮
	fill(255);
	noStroke();
	ellipse(-70,-80,120,120);
	ellipse(70,-80,120,120);
	ellipse(0,95,200,220);

	//眼球
	fill(0);
	ellipse(-70,-80,15,15);
	ellipse(70,-80,15,15);

	//嘴巴
	noStroke();
	fill(255,160,45);
	triangle(-15,-50,15,-50,0,-25);
}
