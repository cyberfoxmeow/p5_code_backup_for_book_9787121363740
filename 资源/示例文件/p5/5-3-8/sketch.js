let t = 0.02;
function setup() {
	createCanvas(480,480);
}
function draw() {
	background(0);
	let tx=0;
	for(let x=0; x<width;x++){
		let ty=0;
		for(let y=0; y<height; y++){
			let c = noise(tx,ty)*255; //根据tx和ty创建噪波随机数
			ty += t;  //y轴方向ty持续增大
			stroke(c);
			point(x,y);
		}
		tx += t;  //x轴方向tx持续增大
	}
}
