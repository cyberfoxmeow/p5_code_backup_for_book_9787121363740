let capture;
function setup() {
	createCanvas(1280, 960);
	capture = createCapture(VIDEO);
	capture.hide();
	capture.size(320,240);
}
function draw() {
	let j=1;
	//通过2个for循环构建出16幅左右或上下翻转的图像
	for(let y=0;y<=960;y+=240){
		let i=1;
		for(let x=0; x<=1280;x+=320){
			push();
				if(i==-1){
					translate(x+320,0);
				}else{
					translate(x,0);
				}
				if(j==-1){
					translate(0,y+240);
				}else{
					translate(0,y);
				}
				scale(i,j);
				image(capture,0,0,capture.width, capture.height);
			pop();
			i=-i;
		}
		j=-j;
	}
}
