let x =0; 
let speed = 0.5; 
function setup() { 
	createCanvas(500, 150);  
} 
function draw() {  
	background(120); 
	x += speed;  
	ellipse(x, 60, 50, 50); 
}
