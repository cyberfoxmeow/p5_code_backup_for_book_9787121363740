function setup() {
	createCanvas(600, 600);
	colorMode(HSB,360,100,100,1);
	for(let angle=0; angle<360; angle+=0.2){  //每隔0.2度绘制一条颜色随机、终点距屏幕中心距离随机的直线
		stroke(random(360),100,100);
		let r = random(100,280);
		let x = width/2 + cos(radians(angle)) * r; 
		let y = height/2 + sin(radians(angle)) * r;
		line(300,300,x,y);
	}
}
function draw() {
}
