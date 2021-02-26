let Sound,amplitude;
function preload() {
	Sound = loadSound('sound.mp3');
}
function setup() {
	createCanvas(320,320);
	amplitude = new p5.Amplitude();
	noStroke();
}
function draw(){
	background(0,5);
	fill(255,random(255),random(255));
	let level = amplitude.getLevel();//获取声音文件振幅
	let r = map(level,0,1,0,320);//将振幅数据0至1映射至需要的数值范围
	ellipse(width/2,height/2,r,r);
}
function mousePressed() { //在画布上单击鼠标，控制声音播放和停止
	if (Sound.isPlaying()) { 
		Sound.pause();
	} else {
		Sound.play();
		background(255,255,0);
	}
}
