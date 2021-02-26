let video;
function setup() {
	video = createCapture(VIDEO);
	createCanvas(640, 480);
	video.size(640, 480);
	video.hide();
}
function draw() {
	background(150);
	video.loadPixels();
	for (let y=0; y<video.height; y+=10) {
		for (let x=0; x<video.width; x+=10) {
			let i = 4*(y*width + x);
			let r = video.pixels[i];
			let g = video.pixels[i+1];
			let b = video.pixels[i+2];
			let a = video.pixels[i+3];
			fill(r,g,b);
			rect(x,y,10,10);
		}
	}
}
