function setup() {
  createCanvas(500, 150);
  background(0);
}
function draw() {
	let x=80;
	let d=60;
	stroke(255);
	for(let i=1; i<=15; i++){
		ellipse(x, 160/i, d, d);
		x += 30;
		d -= 6;
	}
}
