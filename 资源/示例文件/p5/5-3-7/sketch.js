let t=0;
let r=100;
let x;
let y;
let angle = 0;
let c = 0;
function setup() {
	createCanvas(600, 600);
	colorMode(HSB,360,100,100,1);
}
function draw() {
	c+=0.1;
	if(c>360){
		c=0;
	}
	r = noise(t);
	r = map(r,0,1,100,300);
	t+=0.01;
	stroke(c,100,100,0.5);
	x = width/2 + cos(angle) * r; 
	y = height/2 + sin(angle) * r;
	line(300,300,x,y);
	angle+=0.002;
}
