function setup() {
	createCanvas(300,300);
	colorRect(random(255),random(255),random(255)); //调用colorRect函数，并给其传递参数。
}
function draw() { 
}
function colorRect(cRed,cGreen,cBlue){
	fill(cRed,cGreen,cBlue);
	rect(0,0,width,height);
}
