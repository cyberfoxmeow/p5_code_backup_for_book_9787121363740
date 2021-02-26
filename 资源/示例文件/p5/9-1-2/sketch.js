let video;
function preload(){
	video = createVideo("animoji.mp4");
}
function setup() {
	createCanvas(568, 320);
	video.hide();
}
function draw() {
	image(video,0,0);
	filter(THRESHOLD,0.5);
	//filter(INVERT);
	//filter(POSTERIZE,2);
	//filter(DILATE);
}
function mousePressed() {
	video.play();
	video.loop();
}
