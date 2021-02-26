let x = -50;
let d= 50;
let speed = 0.5; 
function setup() { 
	createCanvas(500, 150);
} 
function draw() {  
	background(120); 
	x += speed;
	if(x>width+d/2){
		x=-d/2;
	}
	ellipse(x, 60, d, d); 
}
