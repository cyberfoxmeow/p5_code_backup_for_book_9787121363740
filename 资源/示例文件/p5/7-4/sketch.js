let p = []; 
function setup() {  
	createCanvas(600, 600);
	background(200);
	for(let i=0; i<500; i++){
		p[i] = new Penguin(random(width),random(height),random(120),random(0.1,0.3),random(1,3));
	}
} 
function draw() { 
	background(200); 
	for(let i=0; i<p.length; i++){
		p[i].move();
		p[i].display();
	}
}
