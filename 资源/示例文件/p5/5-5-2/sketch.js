let a=0;
function setup() {
	createCanvas(300, 300);
	background(0);
}
function draw() {
	a++;
	translate(150,150); //将坐标原点移动到画布中心
	rotate(radians(a)); //进行旋转
	rect(0, 0, 150, 150);
}
