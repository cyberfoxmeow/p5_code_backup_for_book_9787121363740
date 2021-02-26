let angle = 0.0;
function setup() {
	createCanvas(360, 240);
	smooth();
}
function draw() {
	let sinVal = sin(radians(angle));  //sin和cos函数的参数都是使用弧度值计算，因此需要使用radians函数将角度值转化为弧度值
	sinVal = map(sinVal, -1, 1, 0, 360/PI);
	point(angle,sinVal);
	if(angle<360){
		angle += 1;
	}
}
