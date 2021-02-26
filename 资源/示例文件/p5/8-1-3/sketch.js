let img1;
let img2;
function preload() {
	img1 = loadImage("8-1.jpg");
	img2 = loadImage("8-2.png");
}
function setup() {
	createCanvas(360, 360);
}
function draw() {
	image(img1, 0, 0);
	image(img2, 0, 0,mouseX,mouseY);
}
