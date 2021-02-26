function setup() {   
	createCanvas(600, 600);   
	background(200);   
	rectMode(CENTER); 
} 
function draw() {
	//两条腿 	
	noStroke(); 	
	fill(255, 160, 45); 	
	ellipse(200, 525, 100, 50); 	
	ellipse(400, 525, 100, 50); 	 	
	//身子 	
	fill(0); 	
	ellipse(150, 390, 60, 235); 	
	ellipse(450, 390, 60, 235); 	
	rect(300, 400, 300, 250); 	
	stroke(0);   	
	strokeWeight(300);  	
	line(300, 215, 300, 330); 	 	
	//眼睛和肚皮 	
	fill(255); 	
	noStroke(); 	
	ellipse(230, 220, 120, 120); 	
	ellipse(370, 220, 120, 120); 	
	ellipse(300, 395, 200, 220);  	
	//眼球 	
	fill(0); 	
	ellipse(230, 220, 15, 15); 	
	ellipse(370, 220, 15, 15);  	
	//嘴巴 	
	noStroke(); 	
	fill(255,160,45); 	
	triangle(285, 250, 315, 250, 300, 275); 
}
