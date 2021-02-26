let img;
let posX;
let posY;
function preload() {
	img = loadImage("8-1.jpg");
}
function setup() {
	createCanvas(360, 360);
	background(120);
	noStroke();
}
function draw() {
	posX = int(random(img.width));
	posY = int(random(img.height));
	img.loadPixels();
	let i = 4*(posY*width + posX);
	let r = img.pixels[i];
	let g = img.pixels[i+1];
	let b = img.pixels[i+2];
	let a = img.pixels[i+3];
	fill(r,g,b,a);
	ellipse(posX,posY,15,15);
}
