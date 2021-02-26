let img;
function preload() {
	img = loadImage("8-1.jpg");
}
function setup() {
	createCanvas(720,720);
}
function draw() {
	image(img, 0, 0, mouseX, mouseY);
}
