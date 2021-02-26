let Sound,amplitude,fft;
let x,y,x1,y1;
function preload() {
	Sound = loadSound('sound.mp3');
}
function setup() {
	createCanvas(600,600);
	fft = new p5.FFT();
	amplitude = new p5.Amplitude();
}
function draw(){
	background(0,80);
	let level = amplitude.getLevel();
	let r = map(level,0,1,0,150);
	fill(random(255),80,80)
	ellipse(width/2,height/2,r,r);
	let waveform = fft.waveform();
	noFill();	
	stroke(255,80,80,60);
	strokeWeight(2);
	for(let i=0; i<waveform.length; i++){
		let angle = map(i,0,1024,0,360);
		x = width/2 + cos(angle) * 180;
		y = height/2 + sin(angle) * 180;
		let r = map(waveform[i],-0.8,0.8,50,220);
		x1 = width/2 + cos(angle) * r; 
		y1 = height/2 + sin(angle) * r;
		line(x,y,x1,y1);
	}
}
function mousePressed() { //在画布上单击鼠标，控制声音播放和停止
	if (Sound.isPlaying()) { 
		Sound.pause();
	} else {
		Sound.play();
		background(255,255,0);
	}
}
