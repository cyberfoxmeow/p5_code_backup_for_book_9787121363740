let video;
function setup() {
	video = createCapture(VIDEO);
	createCanvas(640, 480);
	video.size(640, 480);
	video.hide();
	noStroke();
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
			let h = rgbtoh(r,g,b);
			let s = rgbtos(r,g,b);
			if(!(h>75&&h<190&&s>10)){
				fill(r,g,b,a);
				rect(video.width-x,y,10,10);
			}
		}
	}
}
function rgbtoh(r,g,b){
	r=r/255;
	g=g/255;
	b=b/255;
	let H;
	let min=Math.min(r,g,b);
	let max=Math.max(r,g,b);
	let C = max-min;
	if(max==min){
		H=0;
	}else{
		if(max==r && g>=b){
			H=60*(g-b)/C;
		}
		else if(max==r && g<b){
			H=60*((g-b)/C+6);
		}
		else if(max==g){
			H=60*((b-r)/C+2);
		}
		else if(max==b){
			H=60*((r-g)/C+4);
		}
	}
	return H;
}
function rgbtos(r,g,b){
	r=r/255;
	g=g/255;
	b=b/255;
	let S;
	let min=Math.min(r,g,b);
	let max=Math.max(r,g,b);
	if(max==0){
		S=0;
	}else{
		S=(max-min)/max;
	}
	S=S*100;
	return S;
}
