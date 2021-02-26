function setup() {
	createCanvas(800, 800);
	background(0);
	noStroke();
	for(let x=0; x<800; x+=100){
		for(let y=0; y<800; y+=100){
			fill(255,random(120),random(120));//绿色和蓝色通道随机填充橘红颜色
			rect(x,y,100,100);//绘制64个偏橘红的底层矩形
			fill(random(120),random(120),255);//红色和绿色通道随机填充蓝紫色
			beginShape(); //使用自定义图形绘制包含500个随机顶点的蓝紫色形状
			for(let a=0;a<500;a++){
				vertex(x+random(100),y+random(100));
			}
			endShape(CLOSE);
		}
	}
}
function draw() {
}
