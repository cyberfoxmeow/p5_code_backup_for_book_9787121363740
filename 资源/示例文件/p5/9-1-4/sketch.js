let video;
let c=0;
function preload(){
	video = createVideo("myHead.mp4");
}
function setup() {
	createCanvas(480, 360);
	colorMode(HSB,360,100,100,1);
	video.hide();
}
function draw() {
	background(c);
	c += 0.1;
	if(c>360){
		c=0;
	}
	tint(c,100,100);
	image(video,0,0);
}
function mousePressed() {
	video.play();
	video.loop();
}
