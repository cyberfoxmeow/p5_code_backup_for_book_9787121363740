let img;
function preload() {
	img = loadImage("8-1.jpg");
}
function setup() {
	createCanvas(360, 360);
}
function draw() {
	image(img, 0, 0);
}
