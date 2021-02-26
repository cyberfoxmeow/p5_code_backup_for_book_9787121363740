function setup() {
	createCanvas(1200,300);
	background(200);
	rectMode(CENTER);
	for(let i=0; i<width; i+=150){
		let penguinC = int(random(0,160));
		let penguinS = random(0.25,0.6);
		Penguin(i,150,penguinC,penguinS); //x间隔150个像素位置绘制企鹅，并设置其颜色和尺寸
	}
}
function draw() {
}
function Penguin(x,y,c,s){
	push();
		translate(x,y);
		scale(s);
		//两条腿
		noStroke();
		fill(255,160,45);
		ellipse(-100,225,100,50);
		ellipse(100,225,100,50);
		//身子
		fill(c);
		ellipse(-150,90,60,235);
		ellipse(150,90,60,235);
		rect(0,100,300,250);
		stroke(c);  
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
	pop();
}
