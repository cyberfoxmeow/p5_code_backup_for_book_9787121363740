let angle = 0.0;
function setup() {
	createCanvas(720, 240);
	smooth();
}
function draw() {
	let cosVal = cos(radians(angle));
	cosVal = map(cosVal, -1, 1, 0, 360/PI);
	ellipse(angle,cosVal,20,20);
	if(angle<720){
		angle += 5;
	}
}
