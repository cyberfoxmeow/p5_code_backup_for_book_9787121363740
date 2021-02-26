let angle = 0.0;
let r = 200;
function setup(){
	createCanvas(600, 600);  
	background(220);
}
function draw(){
	stroke(255-angle);
	let x = width/2 + cos(angle) * (r-angle); 
	let y = height/2 + sin(angle) * (r-angle); 
	line(width/2, height/2, x, y);
	angle += 0.01; 
}
