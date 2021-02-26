let a=0;
function setup() {
  createCanvas(500, 500);
  background(255);
}
function draw() {
  background(255,10);
  a+=0.3;
  noFill();
  push();  //围绕中心旋转的矩形
    stroke(0);
    translate(250,250);
    rotate(a);
    translate(-100,-100);
    rect(0,0,250,250);
  pop();
  push();  //随机缩放的圆形
    stroke(0,60);
    translate(250,250);
    scale(random(7));
    ellipse(0,0,30,30);
  pop();
}
