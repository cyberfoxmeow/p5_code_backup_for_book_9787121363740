let rSquare = []; //创建数组Square
function setup() {  
	createCanvas(600, 600);
	background(200);
	rectMode(CENTER);
	for(let i=0; i<50; i++){  //使用for循环初始化50个RotatingSquare实例，并放在数组rSquare中。
		let x = random(width);
		let y = random(height);
		let s = random(10,45);
		let c = random(255);
		let tSpeed = random(2,3);
		let rSpeed = 0.1;
		rSquare[i] = new RotatingSquare(x,y,s,c,tSpeed,rSpeed);
	}
} 
function draw() {  
	for(let i=0; i<rSquare.length; i++){
		rSquare[i].translating();
		rSquare[i].rotating();
		rSquare[i].drawing();
	}
}
