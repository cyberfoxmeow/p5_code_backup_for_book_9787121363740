let video;
function preload(){
	video = createVideo('animoji.mp4');
}
function setup() {
	createCanvas(568, 320);
	video.hide();
}
function draw() {
	background(150);
	video.loadPixels();
	for (let y=0; y<video.height; y+=5) {
		for (let x=0; x<video.width; x+=5) {
			let i = 4*(y*width + x);
			let r = video.pixels[i];
			let g = video.pixels[i+1];
			let b = video.pixels[i+2];
			let a = video.pixels[i+3];
			fill(r,g,b,a);
			rect(x,y,5,5);
		}
	}
}
function mousePressed() {
	video.play();
	video.loop();
}
