function setup() {
	createCanvas(500, 150);
	background(200);
	rectMode(CENTER);
}
function draw() {
	rect(width/4, height/2, width/3, height/3);  //在1/4屏幕宽度的位置画一个1/3屏幕宽度的矩形
	rect(width*3/4, height/2, width/3, height/3)  //在3/4屏幕宽度的位置画一个1/3屏幕宽度的矩形
}
