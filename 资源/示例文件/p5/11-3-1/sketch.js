let osc;
let playing = false;
function setup() {
	createCanvas(600,600);
	background(0);
	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.amp(0.5);
	osc.start();
}
function draw(){
	let hertz = map(mouseX,0,width,100,600); //鼠标x轴决定频率
	let amp = map(mouseY, 0, height, 1, 0.01); //鼠标y轴决定振幅
	fill(255-amp*255);
	ellipse(width/2,height/2,hertz,hertz);
	if(mouseIsPressed){ //当鼠标按下时，根据鼠标位置创建对应频率的声音
		if(playing==false){
			osc.start();
			playing = true;
		}
		osc.freq(hertz);
		osc.amp(amp);
	}else{  //当鼠标抬起时，声音停止
		osc.stop();
		playing = false;
	}
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
