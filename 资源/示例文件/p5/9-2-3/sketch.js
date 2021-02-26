let capture;
let t=0;
let x=0;
function setup() {
  createCanvas(960, 240);
  capture = createCapture(VIDEO);
  capture.size(320,240);
  capture.hide();
}
function draw() {
	t+=0.5;
	if(t<100){
		for(let i=0;i<3;i++){
			image(capture, i*320,0,320,240);
		}
	}else{
		x+=0.5;
		capture.loadPixels();
		//使用blend函数仅获取摄像头纵向中轴的一条像素，并将它从左至右绘制在屏幕上
		blend(capture,capture.width/2,0,1,capture.height,x,0,1,capture.height,OVERLAY);
	}
	if(mouseIsPressed){
		t=99;
		x=0;
	}
}
