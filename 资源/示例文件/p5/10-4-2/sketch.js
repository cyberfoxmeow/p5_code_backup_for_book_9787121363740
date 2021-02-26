let video;
function setup() {
	video = createCapture(VIDEO);
	createCanvas(640, 480);
	video.size(640, 480);
	video.hide();
	rectMode(CENTER);
}
function draw() {
	let brightest=0;
	let posX=0;
	let posY=0;
	background(255);
	video.loadPixels();
	for (let y=0; y<video.height; y+=10) {
		for (let x=0; x<video.width; x+=10) {
			let i = 4*(y*width + x);
			let r = video.pixels[i];
			let g = video.pixels[i+1];
			let b = video.pixels[i+2];
			let currentBrightness = rgbtov(r,g,b); //记录当前像素亮度
			if(currentBrightness>brightest){ //如果当前像素亮度大于之前获取的最大亮度，将最大亮度更新为当前亮度，并将绘制图形位置设为当前像素坐标
				brightest = currentBrightness;
				posX = x;
				posY = y;
			}
			noStroke();
			fill(r,g,b);
		  	rect(video.width-x,y,10,10);
		}
	}
	Penguin(video.width-posX,posY,0,0.3);
}
function rgbtov(r,g,b){
	r=r/255;
	g=g/255;
	b=b/255;
	let V=Math.max(r,g,b);
	V=V*100;
	return V;
}
function Penguin(x,y,c,s){
	push();
		translate(x,y);
		scale(s);
		//两条腿
		noStroke();
		fill(255,160,45);
		ellipse(-100,225,100,50);
		ellipse(100,225,100,50);
		
		//身子
		fill(c);
		ellipse(-150,90,60,235);
		ellipse(150,90,60,235);
		rect(0,100,300,250);
		stroke(c);  
		strokeWeight(300); 
		line(0, -85, 0, 30);
		
		//眼睛和肚皮
		fill(255);
		noStroke();
		ellipse(-70,-80,120,120);
		ellipse(70,-80,120,120);
		ellipse(0,95,200,220);

		//眼球
		fill(0);
		ellipse(-70,-80,15,15);
		ellipse(70,-80,15,15);

		//嘴巴
		noStroke();
		fill(255,160,45);
		triangle(-15,-50,15,-50,0,-25);
	pop();
}
