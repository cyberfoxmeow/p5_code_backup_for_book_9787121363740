let mic,amp,r;
function setup() {
	createCanvas(600,600);
	background(0);
	mic = new p5.AudioIn();
	amp = new p5.Amplitude();
	mic.start();
	amp.setInput(mic);
}
function draw(){
	fill(0,10);
	rect(0,0,width,height);
	r=map(amp.getLevel(),0,1.0,20,600);
	fill(random(255),random(255),random(255));
	ellipse(width/2,height/2,r,r);
}
function mousePressed() { //在画布上单击鼠标恢复声音功能
	if (getAudioContext().state !== 'running') {
		getAudioContext().resume();
	}
}
function touchStarted() {//在画布上触摸恢复声音功能
	if (getAudioContext().state !== 'running') {
		getAudioContext().resume();
	}
}
