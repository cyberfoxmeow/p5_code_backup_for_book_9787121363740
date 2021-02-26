let scribble = new Scribble();//创建Scribble对象实例
function setup() {
	createCanvas(500,150);
}
function draw() {
	background(120);
	stroke(255,0,0);
	strokeWeight(5);
	scribble.scribbleLine(100,30,400,30);//绘制直线
	stroke(255,255,0);
	strokeWeight(3);
	scribble.scribbleCurve(50,35,450,35,250,90,250,-50);//绘制曲线
	stroke(0,255,0);
	fill(255,0,255);
	scribble.scribbleRect(100,100,80,50);//绘制矩形
	stroke(0,255,255);
	scribble.scribbleRoundedRect(250,100,80,50,24);//绘制圆角矩形
	stroke(0,0,255);
	fill(255,0,255);
	scribble.scribbleEllipse(400,100,50,50);//绘制圆形
}