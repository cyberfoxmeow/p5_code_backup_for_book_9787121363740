let Sound;
function preload() {
	Sound = loadSound('sound.mp3');
}
function setup() {
	createCanvas(320,320);
	background(0);
}
function mousePressed() { //在画布上单击鼠标，控制声音播放和停止
	if (Sound.isPlaying()) { 
		Sound.pause();
	} else {
		Sound.play();
		background(255,255,0);
	}
}
