function setup() {
  createCanvas(500, 150);
  background(0);
}
function draw() {
	let x=50;
	let d=20;
	stroke(255);
	for(let i=1; i<=7; i++){ //将绘制椭圆函数进行循环
		ellipse(x, 60, d, d);
		x += 50;  //每次循环时，椭圆的x位置会增大
		d += 10;  //每次循环时，椭圆的直径会增大
	}
}
