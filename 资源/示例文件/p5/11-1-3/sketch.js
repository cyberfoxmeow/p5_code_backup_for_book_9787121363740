let Sound;
let fft;
function preload() {
	Sound = loadSound('sound.mp3');
}
function setup() {
	createCanvas(1024,320);
	fft = new p5.FFT();
}
function draw(){
	background(0,5);
	let waveform = fft.waveform();
	noFill();	
	stroke(255,0,0);
	for(let i=0; i<waveform.length; i++){ 
		let y = map(waveform[i],-1,1,0,320);//读取波形数组中每一个元素的数值
		line(i,160,i,y);
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
