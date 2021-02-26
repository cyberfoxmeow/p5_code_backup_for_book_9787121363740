let video;
function setup() {
	video = createCapture(VIDEO);
	createCanvas(640, 480);
	video.size(640, 480);
	video.hide();
	rectMode(CENTER);
	background(0);
	noStroke();
}
function draw() {
	let radius = int(sqrt(video.width*video.width+video.height*video.height)/2.5);
	background(0);
	video.loadPixels();
	for (let y=0; y<video.height; y+=4) {
		for (let x=0; x<video.width; x+=4) {
			let i = 4*(y*width + x);
			let r = video.pixels[i];
			let g = video.pixels[i+1];
			let b = video.pixels[i+2];
			let distance = int(dist(x,y,video.width/2,video.height/2));
			let newX;
			let newY;
			if(distance<radius){
				newX = (x-320)*distance/radius+320;
				newY = (y-240)*distance/radius+240;
			}
			push();
				translate(width-newX,newY);
				fill(r,g,b);
				rect(0,0,6,6);
		  	pop();
		}
	}
}
