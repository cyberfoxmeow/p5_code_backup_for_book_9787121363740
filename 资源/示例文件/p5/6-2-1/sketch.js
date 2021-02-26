let rotatingSquare;
function setup() {  
	createCanvas(600, 600);
	background(200);
	rectMode(CENTER);
	rotatingSquare = new RotatingSquare(300, 300, 50, 220, 5, 0.1);
} 
function draw() {  
	rotatingSquare.translating(); 
	rotatingSquare.rotating(); 
	rotatingSquare.drawing();

}
//以下为RotatingSquare类
class RotatingSquare{
	constructor(squareX, squareY, squareSize, squareColor, squareTSpeed,squareRSpeed){
		this.squareX = squareX;
		this.squareY = squareY;
		this.squareSize = squareSize;
		this.squareColor = squareColor;
		this.squareTSpeed = squareTSpeed;
		this.squareRSpeed = squareRSpeed;
		this.angle=0;
	}
	translating(){
		push();
   		translate(this.squareX,this.squareY);
   		this.squareX +=random(-this.squareTSpeed,this.squareTSpeed);
   		this.squareY +=random(-this.squareTSpeed,this.squareTSpeed);
	}
	rotating() {
		rotate(this.angle);
		this.angle+=this.squareRSpeed; 
	}
	drawing() {
		fill(this.squareColor);
   		rect(0,0,this.squareSize, this.squareSize);
   		pop();
	}
}