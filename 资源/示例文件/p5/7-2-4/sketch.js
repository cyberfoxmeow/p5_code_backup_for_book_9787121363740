let c = [];
function setup() {
	createCanvas(480, 480);
	noStroke();
	for(let i=0; i<1728;i++){ //创建1728个数值并存储在颜色数组c中
		c[i]=random(255);
	}
}
function draw() {
	background(120);
	for(let i=0; i<24;i++){  //通过2个for循环绘制576个矩形，并使用数组c中的数值对矩形进行颜色填充
		for(let j=0; j<24;j++){
			fill(c[j*24+i],c[j*24+i+1],c[j*24+i+2]);
			rect(i*20,j*20,20,20);
		}
	}
}
