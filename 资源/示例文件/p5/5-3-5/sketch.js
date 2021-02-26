let speed = 3; 
let d = 50; 
let x; 
let y;
let c=0;
function setup() { 
	createCanvas(480,480); 
	x = width/2; 
	y = height/2; 
	colorMode(HSB,360,100,100,1); 
} 
function draw() {
	c+=0.1;  //使变量c线性递增
	if(c>360){  //将变量c保持在0至360区间
		c=0;
	}
	noStroke();
	fill(c,100,100,0.5);  //填充一个按照色环渐变的颜色
	x += random(-speed, speed);  
	y += random(-speed, speed); 
	x = constrain(x, 0, width); 
	y = constrain(y, 0, height);   
	ellipse(x, y, d, d); 
}
