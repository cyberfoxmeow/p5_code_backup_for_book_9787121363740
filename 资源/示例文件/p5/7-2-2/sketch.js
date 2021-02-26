let c = []; 
function setup() { 
	createCanvas(480, 480);
	noStroke();
	for(let i=0; i<24; i++){  //设置了每一个矩形的颜色
		c[i] = random(255);
	}
} 
function draw() {  
	background(120);
	for(let i=0; i<c.length;i++){ //读取数组里所有的颜色并填充给矩形
		fill(c[i]);
		rect(i*20,0,20,height);
	}
}
