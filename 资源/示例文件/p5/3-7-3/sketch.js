function setup() {
  createCanvas(500, 150);
  background(0);
}
function draw() {
	let x=80;
	let d=100;
	stroke(255);
	for(let i=1; i<=15; i++){
		ellipse(x, 75, d, d);
		x += 30;
		d -= 8;  //椭圆直径每次循环后都会减小
	}
}
