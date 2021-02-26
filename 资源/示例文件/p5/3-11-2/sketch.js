let Min=0;
let Max=640;
let newMin=0;
let newMax=255;
function setup() {
	createCanvas(640, 240);
}
function draw() {
	let gray = (mouseX-Min)*(newMax-newMin)/(Max-Min)+newMin;
	background(gray);
}
