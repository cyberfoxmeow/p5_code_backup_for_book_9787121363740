let d1 = 0; 
let d2 = 0;
let d3 = 0;
let d4 = 0;
let d5 = 0;
let d6 = 0;
let diameter = 50; 
function setup() { 
	createCanvas(500, 500);
	background(120);
	d1 = diameter;  
	d2 = diameter*random(1,2);
	d3 = diameter*random(1,2);
	d4 = diameter*random(1,2);
	d5 = diameter*random(1,2);
	d6 = diameter*random(1,2);
	ellipse(random(width), random(height), d1, d1); 
	ellipse(random(width), random(height), d2, d2);
	ellipse(random(width), random(height), d3, d3);
	ellipse(random(width), random(height), d4, d4);
	ellipse(random(width), random(height), d5, d5);
	ellipse(random(width), random(height), d6, d6);
} 
function draw() {   
}
