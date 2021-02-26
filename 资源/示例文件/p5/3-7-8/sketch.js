let boxWidth=9;
let boxHeight=9;
function setup() {
	createCanvas(600, 600);
	background(0);
}
function draw() {
	noStroke();
	for(let x=0; x<60; x++){
		 for(let y=0; y<60; y++){
			 fill(mouseX/60*x, mouseY/60*y, 100); //鼠标的x和y位置将影响填充颜色的红色和绿色通道
			 rect(x*10, y*10, boxWidth, boxHeight);
		 }
	}
}
