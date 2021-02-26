function setup() {
	createCanvas(500, 150);
	colorMode(HSB, 360, 100, 100);
}
function draw() {
	fill(0, 100, 100);  // 纯红色
	ellipse(60, 60, 80, 80); 
	fill(0, 50, 100);  // 粉红色
	ellipse(180, 60, 80, 80); 
	fill(240, 100, 100);  // 纯蓝色
	ellipse(300, 60, 80, 80); 
	fill(240, 60, 70);  // 灰蓝色
	ellipse(420, 60, 80, 80);
}
