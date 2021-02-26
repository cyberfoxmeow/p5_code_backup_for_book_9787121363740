let video;
function preload(){
	video = createVideo("animoji.mp4");
}
function setup() {
	createCanvas(568, 320);
	video.hide();
background(0,255,255);
}
function draw() {
	tint(0,255,255);
	image(video,0,0);
}
function mousePressed() {
	video.play();
	video.loop();
}
