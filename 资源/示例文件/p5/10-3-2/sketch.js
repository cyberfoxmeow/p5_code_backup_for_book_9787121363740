let video;
function preload(){
	video = createVideo('animoji.mp4');
}
function setup() {
	createCanvas(568, 320);
	video.hide();
	colorMode(HSB,360,100,100,1);//切换至hsb色彩显示模式
}
function draw() {
	video.loadPixels();
	for (let y=0; y<video.height; y+=5) {
		for (let x=0; x<video.width; x+=5) {
			//colorMode(RGB,255); //切换到rgb色彩显示模式
			let i = 4*(y*width + x);
			let r = video.pixels[i];
			let g = video.pixels[i+1];
			let b = video.pixels[i+2];
			let a = video.pixels[i+3];
			let c = color(r, g, b);
			//let h = hue(c);  //将某一像素的rgb值转化为色相值
			//let s = saturation(c);//将某一像素的rgb值转化为饱和度值
			//let bright = brightness(c);//将某一像素的rgb值转化为明度
			//colorMode(HSB,360,100,100,1);//切换至hsb色彩显示模式
			let bright = rgbtov(r,g,b);
			fill(0,0,bright); //将饱和度设为0
			rect(x,y,5,5);
		}
	}
}
function mousePressed() {
	video.play();
	video.loop();
}
function rgbtov(r,g,b){
	r=r/255;
	g=g/255;
	b=b/255;
	let V=Math.max(r,g,b);
	V=V*100;
	return V;
}

