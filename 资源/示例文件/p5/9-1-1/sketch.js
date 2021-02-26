let video;
function preload(){
	video = createVideo("video.mp4");
}
function setup() {
	createCanvas(568, 320);
	video.hide();
}
function draw() {
	image(video,0,0);
}
function mousePressed() {
	video.play();
	video.loop();
} 
