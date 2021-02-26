let video;
function preload(){
	video = createVideo('animoji.mp4');
}
function setup() {
	createCanvas(568, 320);
	video.hide();
	colorMode(HSB,360,100,100,1);
	rectMode(CENTER);
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
			let c = color(r, g, b);
			let h = rgbtoh(r,g,b);
			let s = rgbtos(r,g,b);
			let bright = rgbtov(r,g,b);
			fill(h,s,bright);
			let pixelSize = (100-bright)/9;//像素明度控制绘制矩形大小
			rect(x,y,pixelSize,pixelSize);
		}
	}
}
function mousePressed() {
	video.play();
	video.loop();
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
	S= S*100;
	return S;
}
function rgbtov(r,g,b){
	r=r/255;
	g=g/255;
	b=b/255;
	let V=Math.max(r,g,b);
	V= V*100;
	return V;
}
