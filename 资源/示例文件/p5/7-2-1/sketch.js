let diameter=[]; 
function setup() { 
	createCanvas(480, 480);
	background(120); 
	for(let i=0; i<1000; i++){ //设置10000个圆形的直径尺寸
		diameter[i] = random(10,60);
	}
	for(let i=0; i< diameter.length; i++){ //读取每个圆的直径并随机位置绘制在画布上
		fill(random(255));
		ellipse(random(width),random(height),diameter[i],diameter[i]);
	}
} 
function draw() {  
} 
