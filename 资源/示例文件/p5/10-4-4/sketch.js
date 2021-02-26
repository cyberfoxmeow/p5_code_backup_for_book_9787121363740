let video;
function setup() {
	video = createCapture(VIDEO);
	createCanvas(640, 360);
	video.size(640, 360);
	video.hide();
}
function draw() {
	background(0);
	video.loadPixels();
	for (let y=0; y<video.height; y+=5) {
		for (let x=0; x<video.width/2; x+=5) {
			let i = 4*(y*width + x);
			let r = video.pixels[i];
			let g = video.pixels[i+1];
			let b = video.pixels[i+2];
			push();
				translate(width-x,y);
				rotate(2 * PI * rgbtov(r,g,b/100));
				fill(r,g,b+20,random(180,255));
				noStroke();
				triangle(0,0,random(10,25),random(10,25),random(10,25),random(10,25));
				stroke(r,g,b,random(rgbtov(r,g,b)/100));
		  	pop();
		}
	}
	
	for (let y=0; y<video.height; y+=5) {
		for (let x=0; x<video.width/2; x+=5) {
			let i = 4*(y*width + x);
		  	let r = video.pixels[i];
			let g = video.pixels[i+1];
			let b = video.pixels[i+2];
			push();
				translate(x,y);
				rotate(2 * PI * rgbtov(r,g,b/100));
				fill(r+20,g,b,random(180,255));
				noStroke();
				triangle(0,0,random(10,25),random(10,25),random(10,25),random(10,25));
				stroke(r,g,b,random(rgbtov(r,g,b)/100));
		  	pop();
		}
	}
}
function rgbtov(r,g,b){
	r=r/255;
	g=g/255;
	b=b/255;
	let V=Math.max(r,g,b);
	V=V*100;
	return V;
}
