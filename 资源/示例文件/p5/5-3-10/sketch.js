let tx=0;
let ty=0;
let tz=0;
let nx;
let ny;
let nz=10;
function setup() {
	createCanvas(600,600);
	noStroke();
	nx = random(600);
	ny = random(600);
}
function draw() {
	fill(random(255),120,120,100);
	nx=noise(tx);
	ny=noise(ty);
	nz=noise(tz);
	nx = map(nx,0,1,0,width);
	ny = map(ny,0,1,0,width);
	nz = map(nz,0,1,10,100);
	tx+=0.011;
	ty+=0.01;
	tz+=0.01;
	ellipse(constrain(nx,0,width),constrain(ny,0,height),nz,nz);
}
