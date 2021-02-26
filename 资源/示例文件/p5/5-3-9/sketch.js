let t = 0.05;
let tz=0;
function setup() {
	createCanvas(480,480);
	noStroke();
	colorMode(HSB,360,100,100);
}
function draw() {
	background(0);
	let tx=100;
	for(let x=0; x<width;x+=10){
		let ty=100;
		for(let y=0; y<height; y+=10){
			//noise函数增加了第三个参数tz，使得某一位置的颜色可以根据时间的增长而进行平滑的随机变化
			let c = noise(tx,ty,tz)*60;
			ty +=t;
			fill(c,100,100);
			rect(x,y,map(c,0,60,0,15),map(c,0,60,0,15));
		}
		tx += t;
		tz += 0.0005;
	}
}
