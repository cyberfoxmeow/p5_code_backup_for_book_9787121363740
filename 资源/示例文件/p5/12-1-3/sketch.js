let scribble = new Scribble();//创建Scribble对象实例
let xCoords=[];
let yCoords=[];
let r=200;
function setup() {
	createCanvas(500,500);
	for(let a=0; a<=12; a++){ //使用for循环结合三角函数创建12个能围成圆形的顶点坐标
		xCoords[a]=200*cos(radians((12-a)*30));
		yCoords[a]=200*sin(radians((12-a)*30));
	}
}
function draw() {
	background(200);
	stroke(255,0,0);
	strokeWeight(5);
	fill(200);
	scribble.scribbleEllipse(250,250,400,400);
	push();
		translate(250,250);
		stroke(255,255,100);
		strokeWeight(2);
		scribble.scribbleFilling(xCoords,yCoords,5,120);
	pop();
}
