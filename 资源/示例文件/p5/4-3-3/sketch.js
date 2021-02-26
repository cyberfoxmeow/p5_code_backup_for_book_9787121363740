let x = 200;
let y = 60;
function setup() {
	createCanvas(500, 150);
}
function draw() {
	if (keyIsPressed) {
		if(keyCode == 37) {  //如果按下箭头左键，x递减
			x-=2;
		}
		else if(keyCode == 39) { //如果按下箭头右键，x递增
			x+=2;
		}
		else if(keyCode == 38) { //如果按下键盘上键，y递减
			y-=2;
		}
		else if(keyCode == 40) {//如果按下箭头下键，y递增
			y+=2;
		}
	}
	rect(x, y, 50, 50);
}
