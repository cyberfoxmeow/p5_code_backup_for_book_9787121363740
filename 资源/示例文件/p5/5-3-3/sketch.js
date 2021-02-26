let speed = 3; 
let d= 50; 
let x; 
let y;
function setup() { 
	createCanvas(480,480); 
	x = width/2; 
	y = height/2; 
	background(120); 
} 
function draw() {  
	x += random(-speed, speed);
	y += random(-speed, speed);  
	ellipse(x, y, d, d); 
}
