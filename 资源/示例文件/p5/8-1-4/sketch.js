let img;
function preload() { 
	img = loadImage("8-1.jpg"); 
}
function setup() { 
	createCanvas(360, 360);
}
function draw() {
	background(img); 
	copy(img,75,70,105,120,180,180,180,180)
}
