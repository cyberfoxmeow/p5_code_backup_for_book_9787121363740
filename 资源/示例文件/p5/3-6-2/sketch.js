let a=1;
function setup() {
	createCanvas(300, 300);
}
function draw() {
	if(a>1){
		fill(0);
		ellipse(150,150,200,200);
	}else{
		fill(255);
		ellipse(150,150,200,200);
	}
}
