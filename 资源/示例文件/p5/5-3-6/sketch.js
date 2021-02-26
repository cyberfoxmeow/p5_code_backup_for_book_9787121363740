/* random随机
let x=0;
function setup() {
	createCanvas(480,240);
}
function draw() {
	x++;
	ellipse(x,random(0,240),5,5);	
}
*/

//noise随机
let x=0;
let ty=0;
function setup() {
	createCanvas(480,240);
}
function draw() {
	x++;
	let ny=noise(ty);
	ny = map(ny,0,1,0,240);
	ty+=0.01;
	ellipse(x,ny,5,5);	
}
