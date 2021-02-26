function setup() {
	createCanvas(600,600);
	background(200);
	rectMode(CENTER);
}
function draw() {
	Penguin(300,300); //绘制企鹅函数，并设置企鹅的初始位置
}
function Penguin(x,y){
	translate(x,y);
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
