let penguinA;
let penguinB;
let penguinC;
let penguinD;
let penguinE; 
function setup() {  
	createCanvas(600, 600);
	background(200);
	penguinA = new Penguin(random(width), 100, random(120), 0.6,1);
	penguinB = new Penguin(random(width), 200, random(120), 0.5,1.5);
	penguinC = new Penguin(random(width), 300, random(120), 0.4,2);
	penguinD = new Penguin(random(width), 400, random(120), 0.3,2.5);
	penguinE = new Penguin(random(width), 500, random(120), 0.2,3);
} 
function draw() { 
	background(200); 
	penguinA.move();  
	penguinA.display();
	penguinB.move();  
	penguinB.display();
	penguinC.move();  
	penguinC.display();
	penguinD.move();  
	penguinD.display();
	penguinE.move();  
	penguinE.display();
}
