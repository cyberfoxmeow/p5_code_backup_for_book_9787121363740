let c = []; 
function setup() { 
	createCanvas(480, 480);
	noStroke();
	for(let i=0; i<72; i++){ //创建24*3个数值并存储在数组c中
		c[i] = random(255);
	}
}
function draw() {  
	for(let i=0; i<24;i++){//读取数组c中的数值，并以3个数为一组填充矩形
		let index = i*3;
		fill(c[index],c[index+1],c[index+2]);
		rect(i*20,0,20,height);
	}
}
