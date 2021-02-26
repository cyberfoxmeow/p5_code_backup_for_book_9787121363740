let speed = 3; 
let d = 50; 
let x; 
let y;
function setup() { 
	createCanvas(480,480); 
	background(120); 
} 
function draw() {
	if (mouseIsPressed == true) {  //鼠标按压时，绘制随机运动的圆形
		x = mouseX+random(-speed, speed);
		y = mouseY+random(-speed, speed);  
		ellipse(x, y, d, d);
	} 
}
