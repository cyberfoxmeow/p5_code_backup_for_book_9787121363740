let rotatingSquareA;
let rotatingSquareB;
function setup() {  
	createCanvas(600, 600);
	background(200);
	rectMode(CENTER);
	rotatingSquareA = new RotatingSquare(random(width), random(height), random(30,60), random(255), random(3,6), 0.1);
	rotatingSquareB = new RotatingSquare(random(width), random(height), random(30,60), random(255), random(3,6), 0.1);
} 
function draw() {  
	rotatingSquareA.translating(); 
	rotatingSquareA.rotating(); 
	rotatingSquareA.drawing();

	rotatingSquareB.translating(); 
	rotatingSquareB.rotating(); 
	rotatingSquareB.drawing();
}
