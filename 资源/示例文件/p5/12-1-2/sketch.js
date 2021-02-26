let scribble = new Scribble();//创建Scribble对象实例
function setup() {
	createCanvas(300,300);
}
function draw() {
	background(200);
	//填充图形坐标，右下，右上，左上，左下，逆时针顺序
	let xCoords = [250,250,50,50];
	let yCoords = [250,50,50,250];
	stroke(255,255,0);
	strokeWeight(3);
	scribble.scribbleFilling(xCoords,yCoords,5,30);
	stroke(255,100,0)
	strokeWeight(5);
  	scribble.scribbleRect(150,150,200,200);
}
