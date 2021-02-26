let osc;
let sliderAmp;
let sliderHertz;
function setup() {
	createCanvas(600,500);
	sliderAmp = createSlider(0,100,50);
	sliderAmp.position(120,450);
	sliderHertz = createSlider(20,12800,1000);
	sliderHertz.position(320,450);
	background(0);
	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.start();
}
function draw(){
	background(0);
	stroke(255);
	for(let i=0; i<10000; i++){
		let angle=map(i,0,10000,0,TWO_PI*sliderHertz.value());
		let sinValue = sin(angle)*120;
		line(i,0,i,height/2+sinValue);
	}
	//通过两个滑动条控制声音的频率和振幅
	osc.amp(map(sliderAmp.value(),0,100,0,1),0.5);
	osc.freq(sliderHertz.value());
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
