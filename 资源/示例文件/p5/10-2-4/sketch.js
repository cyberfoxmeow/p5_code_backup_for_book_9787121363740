let img;
function preload() {
	img = loadImage("8-1.jpg");
}
function setup() {
	createCanvas(360, 360);
	background(120);
	noStroke();
	smooth();
}
function draw() {
	img.loadPixels();
	for (let y=0; y<img.height; y+=20) {
		for (let x=0; x<img.width; x+=10) {
			let i = 4*(y*width + x);
			let r = img.pixels[i];
			let g = img.pixels[i+1];
			let b = img.pixels[i+2];
			let a = img.pixels[i+3];
			fill(r,g,b,a);
			if(x%20==0){
				triangle(x-10,y,x,y+20,x+10,y);
			}
			else{
				triangle(x-10,y+20,x,y,x+10,y+20);
			}
		}
	}
}
