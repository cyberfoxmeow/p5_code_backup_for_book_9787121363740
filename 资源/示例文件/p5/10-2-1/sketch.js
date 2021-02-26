let img;
function preload() {
	img = loadImage("9-1.jpg");
}
function setup() {
	createCanvas(360, 360);
}
function draw() {
	background(0);
	img.loadPixels();
	for (let y=0; y<img.height; y+=10) {
		for (let x=0; x<img.width; x+=10) {
			let i = 4*(y*width + x);
			let r = img.pixels[i];
			let g = img.pixels[i+1];
			let b = img.pixels[i+2];
			let a = img.pixels[i+3];
			fill(r,g,b,a);
			ellipse(x,y,random(5,15),random(5,15));
		}
	}
}
